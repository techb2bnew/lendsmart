"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactFormMapSection() {
  const [phone, setPhone] = useState("");

  return (    <section className="bg-white px-4 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-end gap-[8px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto h-[420px] w-full max-w-[430px] sm:h-[480px] lg:h-[520px] lg:max-w-[520px] lg:left-[110px] z-10">
            <Image src="/contact/businesswoman.png" alt="Business advisor" fill className="object-contain object-bottom" />
            <div className="absolute left-[-10px] top-[0%] lg:top-[30%] w-[130px] rounded-[14px] bg-[#4c8f1f] p-4 text-center text-white sm:w-[150px]">
              <p className="text-sm font-bold">Chat With Us Live!</p>
              <p className="mt-2 text-[11px] leading-4">Need help now? Chat with a loan expert instantly on WhatsApp</p>
              <a
                href="https://wa.me/0413 206 624"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-[6px] bg-white px-2 py-1 text-[11px] font-semibold text-[#2e6f11]"
              >
                <Image src="/icon.png" alt="Whatsapp" width={14} height={14} />
                Let&apos;s Chat
              </a>
            </div>
          </div>

          <div className="w-full max-w-[760px] justify-self-end rounded-[22px] border border-[#9bc179] bg-[#f7f7f7] p-5 sm:p-6 relative right-[0px] bottom-0 lg:right-[120]">
            <h2 className="text-[24px] font-extrabold leading-[1.1] text-black sm:text-[44px]">
              Reach & Get Touch
              <br />
              With Us!
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" className="h-11 rounded-full bg-white px-4 text-[14px] outline-none" placeholder="Full Name" />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="h-11 rounded-full bg-white px-4 text-[14px] outline-none"
                placeholder="Phone Number"
              />
              <input type="email" className="h-11 rounded-full bg-white px-4 text-[14px] outline-none" placeholder="Email Address" />
              <select
                defaultValue=""
                className="h-11 rounded-full bg-white px-4 text-[14px] text-[#555] outline-none"
              >
                <option value="" disabled>
                  Loan Type
                </option>
                <option value="home-loan">Home Loan</option>
                <option value="refinance">Refinance</option>
                <option value="investment-loan">Investment Loan</option>
                <option value="construction-loan">Construction Loan</option>
                <option value="personal-loan">Personal Loan</option>
                <option value="commercial-loan">Commercial Loan</option>
              </select>
              <textarea className="sm:col-span-2 h-36 rounded-[16px] bg-white p-4 text-[14px] outline-none" placeholder="Message" />
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
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex h-[44px] cursor-pointer items-center justify-center gap-4 rounded-full border border-[#81b95d] bg-white px-8 text-[14px] font-semibold text-[#5f9736] transition-colors duration-200 hover:border-[#5f9736] hover:bg-[#5f9736] hover:text-white hover:shadow-md"
              >
                <span>Submit Now</span>
                <span>→</span>
              </button>
              {/* <button className="inline-flex h-[44px] items-center justify-center gap-4 rounded-full bg-[#4f931f] px-8 text-[14px] font-semibold text-white">
                <span>Book a Free Consultation</span>
                <span>→</span>
              </button> */}
            </div>
          </div>
        </div>

        <div className="relative  h-[350px] overflow-hidden rounded-[18px] border border-[#d8d8d8] sm:h-[350px]">
          <iframe
            title="Australia map"
            src="https://www.google.com/maps?q=Australia&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
