"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Newsletter from "../pages-component/form-Component/Newsletter";
import SocialLinks from "./SocialLinks";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/residential-loans" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];
const services = [
  { label: "Residential Home Loans", href: "/residential-loans" },
  { label: "Commercial Loans", href: "/commercial-loans" },
  { label: "Personal Loans", href: "/personal-loans" },
  { label: "Car & Truck Loans", href: "/car-truck-loans" }, 
  { label: "Asset Finance", href: "/asset-finance" },
  { label: "Construction Loans", href: "/construction-loans" },
];
const company = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" }, 
];

const accordionIds = {
  quick: "quick",
  services: "services",
  company: "company",
  contact: "contact",
} as const;

type AccordionId = (typeof accordionIds)[keyof typeof accordionIds];

const arrowDrp =((
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth={2} strokeLinecap="round"strokeLinejoin="round" className="lucide lucide-chevron-down shrink-0 text-[#333] transition-transform duration-200"aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
    </svg>
));

function FooterAccordionSection({
  id,
  title,
  isOpen,
  onToggle,
  children,
}: {
  id: AccordionId;
  title: string;
  isOpen: boolean;
  onToggle: (id: AccordionId) => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-[#d7dfca] lg:border-0 lg:border-transparent">
      <button
        type="button"
        className="flex w-full min-h-[48px] items-center justify-between gap-3 py-3 text-left lg:hidden"
        aria-expanded={isOpen}
        aria-controls={`footer-panel-${id}`}
        onClick={() => onToggle(id)}>
        <span className="text-[15px] font-semibold text-black">{title}</span>
      
        <span className={`${isOpen ? "rotate-180" : ""}`}>{arrowDrp}</span>
      </button>

      <h4 className="hidden text-[18px] font-semibold text-black lg:block">{title}</h4>

      <div
        id={`footer-panel-${id}`}
        role="region"
        aria-label={title}
        className={`${isOpen ? "block" : "max-lg:hidden"} lg:block`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openId, setOpenId] = useState<AccordionId | null>(null);

  const toggle = (id: AccordionId) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="overflow-hidden bg-[#F4FBE9]">
        <Newsletter />

      {/* Main footer */}
      <div className="relative px-4 lg:px-0 pb-8 pt-10 lg:pb-10 lg:pt-12">
        <div className="w-full sm:px-6 max-w-[1440px] mx-auto lg:px-8">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.35fr_0.55fr_0.7fr_0.55fr_0.75fr] lg:gap-8">
            {/* Brand — always expanded */}
            <div className="max-w-none pb-8 lg:max-w-[330px] lg:pb-0">
              <div className="relative h-[50px] md:h-[75px] w-[150px] md:w-[250px]">
                <Link href="/" aria-label="LendSmart Mortgages">
                  <Image
                    src="/LendSmart-Logo.png"
                    alt="LendSmart Mortgages logo"
                    fill
                    sizes="(max-width: 768px) 150px, 250px"
                    className="object-contain object-left"
                  />
                </Link>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-[#444]">
               At LendSmart Mortgages, we believe securing finance should be clear, strategic, and stress-free. Whether you are purchasing your first home, refinancing, investing, or growing your business, we help you make informed financial decisions with confidence.
              </p>

              <SocialLinks className="mt-6 flex items-center gap-5 text-black" />
            </div>

            {/* Quick links */}
            <FooterAccordionSection
              id={accordionIds.quick}
              title="Quick Links"
              isOpen={openId === accordionIds.quick}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 lg:mt-5 lg:pb-0">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[14px] text-[#333] transition hover:text-[#1380d4]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordionSection>

            {/* Services */}
            <FooterAccordionSection
              id={accordionIds.services}
              title="Services"
              isOpen={openId === accordionIds.services}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 lg:mt-5 lg:pb-0">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-[#333] transition hover:text-[#1380d4]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordionSection>

            {/* Company */}
            <FooterAccordionSection
              id={accordionIds.company}
              title="Company"
              isOpen={openId === accordionIds.company}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 lg:mt-5 lg:pb-0">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-[#333] transition hover:text-[#1380d4]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordionSection>

            {/* Contact */}
            <FooterAccordionSection
              id={accordionIds.contact}
              title="Our Contact"
              isOpen={openId === accordionIds.contact}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 text-[14px] text-[#333] lg:mt-5 lg:pb-0">
                <li>
                  <a href="mailto:bharat@lendsmartmortgages.com.au" className="transition hover:text-[#1380d4]">
                    bharat@lendsmartmortgages.com.au
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@lendsmartmortgages.com.au" className="transition hover:text-[#1380d4]">
                    admin@lendsmartmortgages.com.au
                  </a>
                </li>
                <li className="pt-2">
                  <a href="tel:0413 206 624" className="transition hover:text-[#1380d4]">
                    0413 206 624
                  </a>
                </li>
              </ul>
            </FooterAccordionSection>
          </div>

          {/* Bottom right image */}
          <div className="pointer-events-none mt-8   justify-end lg:absolute lg:bottom-[54px] lg:right-0 lg:mt-0 hidden lg:flex">
            <div className="relative h-[180px] w-[200px] sm:h-[220px] sm:w-[250px] lg:h-[230px] lg:w-[280px]">
              <Image
                src="/house-loan-footer.png"
                alt="House loan footer"
                width={400}
                height={400}
                priority
                quality={75}
                className="object-contain object-bottom-right"
              />
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-[#d7dfca] hidden lg:flex" />

          {/* Bottom row */}
          <div className="flex flex-col gap-3 pt-6 text-[14px] text-[#555] lg:flex-row lg:items-center lg:justify-between">
            <p>©2026 All Rights Reserved | LendSmart Mortgages | <a href="/privacy-policy" className="transition hover:text-[#1380d4]">
              Privacy Policy
            </a></p>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
