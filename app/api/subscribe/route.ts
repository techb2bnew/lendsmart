import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildAdminSubscriberEmail,
  buildClientWelcomeEmail,
} from "@/app/lib/subscribe-email-templates";

type MailSetup = {
  transporter: nodemailer.Transporter;
  fromAddress: string;
};

function getMailSetup(): MailSetup | null {
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
    throw new Error(msg);
  }
}

function isResendDomainRestriction(message: string): boolean {
  const lower = message.toLowerCase();
  return (
    lower.includes("verify a domain") ||
    lower.includes("only send testing emails") ||
    lower.includes("resend.dev")
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: string = body.email?.trim();

    console.log("Trying to subscribe:", email);

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const isValidEmail = (value: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    const adminHtml = buildAdminSubscriberEmail(email);
    const clientHtml = buildClientWelcomeEmail(email);

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const resendFrom = process.env.RESEND_FROM?.trim();

    if (resendKey && resendFrom) {
      const notifyTo =
        process.env.RESEND_NOTIFY_EMAIL?.trim() ||
        process.env.SMTP_USER?.trim() ||
        null;

      const sends: Promise<void>[] = [
        sendWithResend({
          apiKey: resendKey,
          from: resendFrom,
          to: email,
          subject: "✅ Subscription Successful",
          html: clientHtml,
        }),
      ];

      if (notifyTo) {
        sends.unshift(
          sendWithResend({
            apiKey: resendKey,
            from: resendFrom,
            to: notifyTo,
            subject: "📩 New Newsletter Subscriber",
            html: adminHtml,
          })
        );
      }

      await Promise.all(sends);
      console.log("Emails sent successfully (Resend)");
      return NextResponse.json(
        { success: true, message: "Subscribed successfully!" },
        { status: 200 }
      );
    }

    const mail = getMailSetup();

    if (!mail) {
      const smtpHost = process.env.SMTP_HOST?.trim();
      const smtpUser = process.env.SMTP_USER?.trim();
      const smtpPass = process.env.SMTP_PASS?.trim();

      let detail =
        "Add RESEND_API_KEY and RESEND_FROM (see resend.com), or add SMTP_PASS / Gmail credentials on the server.";

      if (smtpHost && smtpUser && !smtpPass) {
        detail =
          "Only SMTP server details were provided; a mailbox password (SMTP_PASS) is still required for Nodemailer, and many Microsoft 365 tenants block basic SMTP anyway. Prefer Resend: set RESEND_API_KEY, RESEND_FROM, and optional RESEND_NOTIFY_EMAIL (or rely on SMTP_USER as notify address).";
      }

      console.error("Subscribe: mail not configured.", { hasHost: !!smtpHost, hasUser: !!smtpUser, hasPass: !!smtpPass });
      return NextResponse.json(
        {
          success: false,
          message: `Newsletter email is not configured. ${detail}`,
        },
        { status: 503 }
      );
    }

    const { transporter, fromAddress } = mail;

    const adminMail = transporter.sendMail({
      from: `"LendSmart" <${fromAddress}>`,
      to: fromAddress,
      subject: "📩 New Newsletter Subscriber",
      html: adminHtml,
    });

    const clientMail = transporter.sendMail({
      from: `"LendSmart" <${fromAddress}>`,
      to: email,
      subject: "✅ Subscription Successful",
      html: clientHtml,
    });

    await Promise.all([adminMail, clientMail]);

    console.log("Emails sent successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Subscribe error:", error);

    const raw =
      error instanceof Error ? error.message : "Something went wrong";
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
            "Microsoft 365 has Authenticated SMTP (SMTP AUTH) turned off for this mailbox. Your admin must enable it (per mailbox or tenant), or use another provider. Details: https://aka.ms/smtp_auth_disabled",
        },
        { status: 500 }
      );
    }

    if (isResendDomainRestriction(raw)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Resend is in test mode: with onboarding@resend.dev you can only email your own Resend account address. Verify lendsmartmortgages.com.au at https://resend.com/domains, then set RESEND_FROM to an address on that domain (e.g. LendSmart <newsletter@lendsmartmortgages.com.au>). Restart the dev server after updating .env.local.",
        },
        { status: 503 }
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
          ? "Email could not be sent. Check server mail settings (password, app password, or SMTP permissions)."
          : raw,
      },
      { status: 500 }
    );
  }
}
