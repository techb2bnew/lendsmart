import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export type MailSetup = {
  transporter: nodemailer.Transporter;
  fromAddress: string;
};

export type OutgoingEmail = {
  to: string;
  subject: string;
  html: string;
};

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getMailSetup(): MailSetup | null {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  if (smtpHost && smtpUser && smtpPass) {
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = port === 465;
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        requireTLS: !secure && port === 587,
        auth: { user: smtpUser, pass: smtpPass },
      }),
      fromAddress: smtpUser,
    };
  }

  const gmailUser = process.env.EMAIL_USER?.trim();
  const gmailPass = process.env.EMAIL_PASS?.trim();
  if (gmailUser && gmailPass) {
    return {
      transporter: nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      }),
      fromAddress: gmailUser,
    };
  }

  return null;
}

export function getNotifyEmail(): string | null {
  return (
    process.env.RESEND_NOTIFY_EMAIL?.trim() ||
    process.env.SMTP_USER?.trim() ||
    null
  );
}

async function sendWithResend(params: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: [params.to],
      subject: params.subject,
      html: params.html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `Resend error (${res.status})`;
    try {
      const j = JSON.parse(errText) as { message?: string };
      if (j.message) msg = j.message;
    } catch {
      if (errText) msg = errText.slice(0, 300);
    }
    // throw new Error(msg);
  }
}

export function mailNotConfiguredResponse(context: string): NextResponse {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  let detail =
    "Add RESEND_API_KEY and RESEND_FROM (see resend.com), or add SMTP_PASS / Gmail credentials on the server.";

  if (smtpHost && smtpUser && !smtpPass) {
    detail =
      "Only SMTP server details were provided; SMTP_PASS is still required. Prefer Resend: set RESEND_API_KEY, RESEND_FROM, and optional RESEND_NOTIFY_EMAIL.";
  }

  console.error(`${context}: mail not configured.`, {
    hasHost: !!smtpHost,
    hasUser: !!smtpUser,
    hasPass: !!smtpPass,
  });

  return NextResponse.json(
    { success: false, message: `Email is not configured. ${detail}` },
    { status: 503 }
  );
}

export async function sendOutgoingEmails(messages: OutgoingEmail[]): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const resendFrom = process.env.RESEND_FROM?.trim();

  if (resendKey && resendFrom) {
    await Promise.all(
      messages.map((msg) =>
        sendWithResend({
          apiKey: resendKey,
          from: resendFrom,
          to: msg.to,
          subject: msg.subject,
          html: msg.html,
        })
      )
    );
    return;
  }

  const mail = getMailSetup();
  if (!mail) {
    throw new Error("MAIL_NOT_CONFIGURED");
  }

  const { transporter, fromAddress } = mail;
  await Promise.all(
    messages.map((msg) =>
      transporter.sendMail({
        from: `"LendSmart" <${fromAddress}>`,
        to: msg.to,
        subject: msg.subject,
        html: msg.html,
      })
    )
  );
}

export function mailErrorResponse(
  error: unknown,
  context: string
): NextResponse {
  console.error(`${context}:`, error);

  const raw = error instanceof Error ? error.message : "Something went wrong";

  if (raw === "MAIL_NOT_CONFIGURED") {
    return mailNotConfiguredResponse(context);
  }

  const lower = raw.toLowerCase();
  const isMsSmtpAuthDisabled =
    lower.includes("smtpclientauthentication is disabled") ||
    lower.includes("smtp_auth_disabled") ||
    raw.includes("5.7.139");

  if (isMsSmtpAuthDisabled) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Microsoft 365 has Authenticated SMTP turned off for this mailbox. Enable SMTP AUTH or use Resend.",
      },
      { status: 500 }
    );
  }

  const isAuthHint =
    lower.includes("plain") ||
    lower.includes("invalid login") ||
    lower.includes("eauth");

  return NextResponse.json(
    {
      success: false,
      message: isAuthHint
        ? "Email could not be sent. Check server mail settings."
        : raw,
    },
    { status: 500 }
  );
}
