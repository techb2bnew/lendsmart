import { NextResponse } from "next/server";
import {
  buildAdminSubscriberEmail,
  buildClientWelcomeEmail,
} from "@/app/lib/subscribe-email-templates";
import {
  getNotifyEmail,
  isValidEmail,
  mailErrorResponse,
  mailNotConfiguredResponse,
  sendOutgoingEmails,
} from "@/app/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: string = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    const adminHtml = buildAdminSubscriberEmail(email);
    const clientHtml = buildClientWelcomeEmail(email);
    const notifyTo = getNotifyEmail();

    const outgoing = [
      {
        to: email,
        subject: "✅ Subscription Successful",
        html: clientHtml,
      },
    ];

    if (notifyTo) {
      outgoing.unshift({
        to: notifyTo,
        subject: "📩 New Newsletter Subscriber",
        html: adminHtml,
      });
    }

    try {
      await sendOutgoingEmails(outgoing);
    } catch (err) {
      if (err instanceof Error && err.message === "MAIL_NOT_CONFIGURED") {
        return mailNotConfiguredResponse("Subscribe");
      }
      throw err;
    }

    console.log("Newsletter emails sent for:", email);

    return NextResponse.json(
      { success: true, message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    return mailErrorResponse(error, "Subscribe");
  }
}
