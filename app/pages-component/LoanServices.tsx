"use client";

import { useState } from "react";
import Image from "next/image";

type LoanServicesProps = {
  title: string;
  description: string;
};

const services = [
  {
    id: "residential",
    title: "Residential Home Loans",
    description:
      "Helping home buyers and property investors secure suitable mortgage solutions.",
    details: [
      "First home buyer loans",
      "Home purchase loans",
      "Refinancing options",
      "Investment property loans",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Loans",
    description:
      "Tailored financing solutions for businesses, offices, retail spaces, and commercial properties.",
    details: [],
  },
  {
    id: "personal",
    title: "Personal Loans",
    description:
      "Flexible personal loan solutions for lifestyle, travel, education, or urgent needs.",
    details: [],
  },
  {
    id: "car",
    title: "Car & Truck Loans",
    description:
      "Competitive vehicle finance options for personal and commercial transport needs.",
    details: [],
  },
  {
    id: "asset",
    title: "Asset Finance",
    description:
      "Finance solutions for equipment, machinery, and essential business assets.",
    details: [],
  },
  {
    id: "construction",
    title: "Construction Loans",
    description:
      "Structured funding support for new builds and property construction projects.",
    details: [],
  },
];

export default function LoanServices({ title, description }: LoanServicesProps) {
  const [activeId, setActiveId] = useState("residential");
  const activeService = services.find((service) => service.id === activeId);

  // right arrow icon
  const rightArrow = (
    <svg viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[23px] lg:h-[24px]">
      <path d="M21.761 11.2929L15.0527 4.29292C14.872 4.11076 14.6299 4.00997 14.3786 4.01224C14.1273 4.01452 13.887 4.11969 13.7093 4.3051C13.5316 4.49051 13.4308 4.74132 13.4286 5.00352C13.4265 5.26571 13.5231 5.51832 13.6976 5.70692L18.7701 10.9999L1.91683 10.9999C1.66266 10.9999 1.41891 11.1053 1.23919 11.2928C1.05946 11.4803 0.958496 11.7347 0.958496 11.9999C0.958496 12.2651 1.05946 12.5195 1.23919 12.707C1.41891 12.8946 1.66266 12.9999 1.91683 12.9999L18.7701 12.9999L13.6976 18.2929C13.6061 18.3852 13.5331 18.4955 13.4829 18.6175C13.4326 18.7395 13.4062 18.8707 13.4051 19.0035C13.404 19.1363 13.4282 19.268 13.4764 19.3909C13.5246 19.5138 13.5958 19.6254 13.6857 19.7193C13.7757 19.8132 13.8827 19.8875 14.0005 19.9377C14.1183 19.988 14.2445 20.0133 14.3717 20.0122C14.499 20.011 14.6247 19.9834 14.7416 19.931C14.8586 19.8786 14.9643 19.8024 15.0527 19.7069L21.761 12.7069C21.9407 12.5194 22.0416 12.2651 22.0416 11.9999C22.0416 11.7348 21.9407 11.4804 21.761 11.2929Z"fill="white"/>
    </svg>
  );
  return (
    <section id="services" className="relative z-10 mt-0 sm:-mt-12 lg:-mt-14 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto rounded-[12px] bg-[#171717] py-7 shadow-[0_18px_40px_rgba(0,0,0,0.18)] px-4 sm:py-8 lg:px-10 lg:py-10 ">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[500px] w-full max-w-[280px] overflow-hidden rounded-t-[999px] rounded-b-[999px] sm:h-[480px] sm:max-w-[300px] lg:h-[620px] lg:max-w-[300px] xl:max-w-[320px]">
              <Image src="/our-loan.png" alt="Loan services" fill priority sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px" className="object-cover"/>
            </div>
          </div>

          {/* Right content */}
          <div className="pt-1">
            <div className="mb-6 text-center lg:mb-8 lg:text-right">
              <div className="inline-flex flex-row-reverse items-center gap-3 sm:gap-4 lg:flex-row lg:gap-4">
                <div className="min-w-0 text-left lg:text-right">
                  <h2 className="text-[28px] font-extrabold leading-none text-white sm:text-[34px] lg:text-[40px]">
                    {title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-snug text-[#a3a3a3] sm:text-[16px] lg:text-[17px]">
                    {description}
                  </p>
                </div>
                <span className="hidden h-10 w-1 shrink-0 rounded-full bg-[#7cc242] sm:block sm:h-[48px]" />
              </div>
            </div>

            <div className="space-y-2.5">
              {services.map((service) => {
                const isActive = activeId === service.id;

                return (
                  <div key={service.id} onClick={() => setActiveId(service.id)}
                    className={`cursor-pointer overflow-hidden rounded-[10px] border transition-all duration-300 ${
                      isActive ? "border-[#66b11f] bg-gradient-to-r from-[#4f9b15] to-[#2f5c0e]": "border-[#494949] bg-transparent"}`}>
                    <div className="flex items-center justify-between px-5 py-4">
                      <h3 className={` text-[16px] md:text-[20px] font-semibold ${ isActive ? "text-white" : "text-white"}`}>
                        {service.title}
                      </h3>

                     <span className={`shrink-0 transition-transform duration-300 ${ isActive ? "rotate-180" : ""}`}>
                        {rightArrow}
                      </span>
                    </div>

                    {isActive && activeService && (
                      <div className="border-t border-white/15 px-5 pb-4 pt-3">
                        <p className="max-w-[520px] text-[14px] md:text-[16px] leading-5 text-white/95">
                          {activeService.description}
                        </p>

                        {activeService.details.length > 0 && (
                          <div className="mt-3">
                            <p className="mb-1.5 text-[12px] md:text-[13px] font-semibold text-white">
                              Services include:
                            </p>
                            <ul className="space-y-1">
                              {activeService.details.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-[14px] leading-4 text-white/90">
                                  <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-white" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}