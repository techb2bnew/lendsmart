"use client";

import Image from "next/image";
import { useState } from "react";

type SolutionItem = {
  id: string;
  title: string;
  description: string;
};

type LendingSolutionsProps = {
  title?: string;
  subtitle?: string;
  solutions?: SolutionItem[];
  chatButtonText?: string;
  chatButtonLink?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  topImage?: string;
  bottomLeftImage?: string;
  bottomRightImage?: string;
  rightImage?: string;
  rightImageClassName?: string;
};

const defaultSolutions = [
  {
    id: "residential",
    title: "Residential Home Loans",
    description: "Finance essential tools and machinery without large upfront costs.",
  },
  {
    id: "commercial",
    title: "Commercial Loans",
    description: "Flexible funding solutions for retail, office, and business property needs.",
  },
  {
    id: "personal",
    title: "Personal Loans",
    description: "Fast and simple personal finance options for your short-term goals.",
  },
  {
    id: "car",
    title: "Car & Truck Finance",
    description: "Vehicle finance with competitive rates for personal and business use.",
  },
  {
    id: "asset",
    title: "Asset Finance",
    description: "Fund business assets and equipment while keeping cash flow healthy.",
  },
  {
    id: "construction",
    title: "Construction Loans",
    description: "Stage-based finance support for building projects and property development.",
  },
];

export default function LendingSolutions({
  title = "Lending Solutions We Provide",
  subtitle = "We assist individuals and businesses with tailored loan options.",
  solutions = defaultSolutions,
  chatButtonText = "Chat With Us",
  chatButtonLink = "https://wa.me/61413208624",
  ctaButtonText = "Get Loan Options",
  ctaButtonLink = "tel:0413208624",
  topImage = "/about/main.png",
  bottomLeftImage = "/about/main.png",
  bottomRightImage = "/about/main.png",
  rightImage,
  rightImageClassName = "object-cover",
}: LendingSolutionsProps) {
  const [activeId, setActiveId] = useState(solutions[0]?.id ?? "");

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="rounded-[12px] bg-[#171717] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)] sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div>
              <h2 className="text-[28px] font-extrabold leading-tight text-white sm:text-[34px] lg:text-[40px]">
                {title}
              </h2>
              <p className="mt-1 text-[14px] leading-6 text-[#cfcfcf]">
                {subtitle}
              </p>

              <div className="mt-5 space-y-2">
                {solutions.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                  <div
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`cursor-pointer rounded-[8px] border transition-all ${
                      isActive
                        ? "border-[#66b11f] bg-linear-to-r from-[#4f9b15] to-[#2f5c0e]"
                        : "border-[#3a3a3a] bg-[#212121]"
                    }`}
                  >
                    <div className="flex items-center justify-between px-4 py-2.5">
                      <span className="text-[13px] font-medium text-white sm:text-[14px]">
                        {item.title}
                      </span>
                      {isActive ? (
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-[2px] bg-[#2f9511]">
                          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10.828 5.172a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l4.414 4.414a1 1 0 0 1-1.414 1.414l-6.121-6.121a1 1 0 0 1 0-1.414l6.121-6.121a1 1 0 0 1 1.414 0Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-white">→</span>
                      )}
                    </div>
                    {isActive && (
                      <p className="border-t border-white/20 px-4 pb-2.5 pt-2 text-[12px] text-white/95 sm:text-[13px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                )})}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={chatButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-white px-3 py-2 text-[12px] font-semibold text-black hover:bg-[#f0f0f0]"
                >
                  <Image src="/icon.png" alt="Whatsapp" width={18} height={18} />
                  <span>{chatButtonText}</span>
                </a>
                <a
                  href={ctaButtonLink}
                  className="inline-flex items-center gap-2 rounded-[6px] border border-[#4e4e4e] px-3 py-2 text-[12px] font-semibold text-white hover:border-[#7cc242]"
                >
                  {ctaButtonText}
                </a>
              </div>
            </div>

            {rightImage ? (
              <div className="relative h-[300px] overflow-hidden rounded-[10px] sm:h-[360px] lg:h-full lg:min-h-[360px]">
                <Image src={rightImage} alt="Lending solutions" fill className={rightImageClassName} />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative col-span-2 h-[140px] overflow-hidden rounded-[10px] sm:h-[170px]">
                  <Image src={topImage} alt="Meeting" fill className="object-cover" />
                </div>
                <div className="relative h-[140px] overflow-hidden rounded-[10px] sm:h-[170px]">
                  <Image src={bottomLeftImage} alt="Documentation" fill className="object-cover" />
                </div>
                <div className="relative h-[140px] overflow-hidden rounded-[10px] sm:h-[170px]">
                  <Image src={bottomRightImage} alt="Property support" fill className="object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
