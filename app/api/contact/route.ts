import { NextResponse } from "next/server";
import {
  buildAdminContactEmail,
  buildClientContactEmail,
  LOAN_TYPE_LABELS,
} from "@/app/lib/contact-email-templates";
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
    const fullName = String(body.fullName ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const loanType = String(body.loanType ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!fullName) {
      return NextResponse.json(
        { success: false, message: "Full name is required" },
        { status: 400 }
      );
    }

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

    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!loanType || !LOAN_TYPE_LABELS[loanType]) {
      return NextResponse.json(
        { success: false, message: "Please select a loan type" },
        { status: 400 }
      );
    }

    const formData = {
      fullName,
      phone,
      email,
      loanType,
      loanTypeLabel: LOAN_TYPE_LABELS[loanType],
      message,
    };

    const adminHtml = buildAdminContactEmail(formData);
    const clientHtml = buildClientContactEmail(formData);
    const notifyTo = getNotifyEmail();

    const outgoing = [
      {
        to: email,
        subject: "We received your enquiry — LendSmart Mortgages",
        html: clientHtml,
      },
    ];

    if (notifyTo) {
      outgoing.unshift({
        to: notifyTo,
        subject: `📩 Contact enquiry: ${fullName} (${LOAN_TYPE_LABELS[loanType]})`,
        html: adminHtml,
      });
    }

    try {
      await sendOutgoingEmails(outgoing);
    } catch (err) {
      if (err instanceof Error && err.message === "MAIL_NOT_CONFIGURED") {
        return mailNotConfiguredResponse("Contact");
      }
      throw err;
    }

    console.log("Contact emails sent for:", email);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return mailErrorResponse(error, "Contact");
  }
}
