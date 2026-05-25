"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const LOAN_OPTIONS = [
  { value: "home-loan", label: "Home Loan" },
  { value: "refinance", label: "Refinance" },
  { value: "investment-loan", label: "Investment Loan" },
  { value: "construction-loan", label: "Construction Loan" },
  { value: "personal-loan", label: "Personal Loan" },
  { value: "commercial-loan", label: "Commercial Loan" },
] as const;

export default function ContactFormMapSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loanType, setLoanType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const showStatus = (msg: string) => {
    setStatus(msg);
    setTimeout(() => setStatus(""), 5000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) return showStatus("Please enter your full name");
    if (!phone.trim()) return showStatus("Please enter your phone number");
    if (!email.trim()) return showStatus("Please enter your email");
    if (!isValidEmail(email)) return showStatus("Please enter a valid email");
    if (!loanType) return showStatus("Please select a loan type");

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          loanType,
          message: message.trim(),
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = await res.json();
      } catch {
        showStatus("Invalid response from server");
        return;
      }

      if (res.ok && data.success) {
        showStatus("Message sent! We'll be in touch soon.");
        setFullName("");
        setPhone("");
        setEmail("");
        setLoanType("");
        setMessage("");
      } else {
        showStatus(
          data.message ||
            (res.status === 503
              ? "Email service unavailable. Please call or email us directly."
              : "Something went wrong. Please try again.")
        );
      }
    } catch {
      showStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const statusIsSuccess = status.toLowerCase().includes("sent");

  return (
    <section className="bg-white px-4 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-end gap-[8px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto h-[420px] w-full max-w-[430px] sm:h-[480px] lg:h-[520px] lg:max-w-[520px] lg:left-[110px] z-10">
            <Image
              src="/contact/businesswoman.png"
              alt="Business advisor"
              fill
              className="object-contain object-bottom"
            />
            <div className="absolute left-[-10px] top-[0%] lg:top-[30%] w-[130px] rounded-[14px] bg-[#4c8f1f] p-4 text-center text-white sm:w-[150px]">
              <p className="text-sm font-bold">Chat With Us Live!</p>
              <p className="mt-2 text-[11px] leading-4">
                Need help now? Chat with a loan expert instantly on WhatsApp
              </p>
              <a
                href="https://wa.me/61413206624"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-[6px] bg-white px-2 py-1 text-[11px] font-semibold text-[#2e6f11]"
              >
                <Image src="/icon.png" alt="Whatsapp" width={14} height={14} />
                Let&apos;s Chat
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[760px] justify-self-end rounded-[22px] border border-[#9bc179] bg-[#f7f7f7] p-5 sm:p-6 relative right-[0px] bottom-0 lg:right-[120] z-10"
          >
            <h2 className="text-[24px] font-extrabold leading-[1.1] text-black sm:text-[44px]">
              Reach & Get Touch
              <br />
              With Us!
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                value={fullName}
                disabled={loading}
                onChange={(e) => setFullName(e.target.value)}
                className="h-11 rounded-full bg-white px-4 text-[14px] outline-none disabled:opacity-50"
                placeholder="Full Name"
                required
              />
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="tel"
                value={phone}
                disabled={loading}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="h-11 rounded-full bg-white px-4 text-[14px] outline-none disabled:opacity-50"
                placeholder="Phone Number"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="h-11 rounded-full bg-white px-4 text-[14px] outline-none disabled:opacity-50"
                placeholder="Email Address"
                required
              />
              <select
                name="loanType"
                value={loanType}
                disabled={loading}
                onChange={(e) => setLoanType(e.target.value)}
                className="h-11 rounded-full bg-white px-4 text-[14px] text-[#555] outline-none disabled:opacity-50"
                required
              >
                <option value="" disabled>
                  Loan Type
                </option>
                {LOAN_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                value={message}
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                className="sm:col-span-2 h-36 rounded-[16px] bg-white p-4 text-[14px] outline-none disabled:opacity-50"
                placeholder="Message"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-[12px] text-[#2a2a2a]">
              <span className="inline-flex items-center gap-1.5">
                <Image src="/contact/star.png" alt="star" width={12} height={12} />
                Free consultation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Image src="/contact/star.png" alt="star" width={12} height={12} />
                No obligation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Image src="/contact/star.png" alt="star" width={12} height={12} />
                Fast response
              </span>
            </div>
            <div className="mt-7 flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-[44px] cursor-pointer items-center justify-center gap-4 rounded-full border border-[#81b95d] bg-white px-8 text-[14px] font-semibold text-[#5f9736] transition-colors duration-200 hover:border-[#5f9736] hover:bg-[#5f9736] hover:text-white hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Submit Now"}</span>
                  <span>→</span>
                </button>
              </div>
              {status && (
                <p
                  className={`text-sm ${
                    statusIsSuccess ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="relative h-[350px] overflow-hidden rounded-[18px] border border-[#d8d8d8] sm:h-[350px]">
          <iframe
            title="LendSmart Mortgages — Campbelltown SA"
            src="https://www.google.com/maps?q=628+Lower+North+East+Rd,+Campbelltown+SA+5074,+Australia&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
