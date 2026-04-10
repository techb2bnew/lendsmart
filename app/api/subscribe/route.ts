import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Transporter ko global bana diya (har request pe recreate nahi hoga)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: string = body.email?.trim();

    console.log("Trying to subscribe:", email);

    // ✅ Basic validation
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // ✅ Email send (NON-BLOCKING → server fast rahega)
    transporter
      .sendMail({
        from: `"LendSmart" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // apne aapko hi send karega
        subject: "📩 New Newsletter Subscriber",
        text: `New email subscribed: ${email}`,
        html: `
          <h2>New Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
        `,
      })
      .catch((err) => {
        console.error("Email send error:", err);
      });

    // ✅ Instant response (email ka wait nahi karega)
    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Full error:", error);

    return NextResponse.json(
      { message: error?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}