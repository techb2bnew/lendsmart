"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
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

export default function LendSmartHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Arrow Icon
  const Arrow = ({ open }: { open: boolean }) => (
    <svg
      className={`w-4 h-4 ml-1 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Menu = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const X = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full overflow-visible">
      <div className={`bg-white transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"}`}>

        {/* TOP */}
        <div className="bg-[#F4F4F4] border-y border-gray-300 px-4 lg:px-5">
          <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-3 py-2 md:grid-cols-[1fr_auto_1fr] md:gap-4">

            {/* Logo */}
            <Link href="/" className="justify-self-start" onClick={() => setMobileOpen(false)}>
              <Image src="/LendSmart-Mortgages-Logo- 2.png" alt="logo" width={200} height={70} priority />
            </Link>

            {/* DESKTOP NAV — middle column so it stays centered in the bar */}
            <nav className="hidden items-center justify-center gap-8 text-[14px] md:col-start-2 md:row-start-1 md:flex">

              <Link href="/" className="text-[#333] hover:text-[#1380d4]">Home</Link>

              {/* SERVICES */}
              <div className="relative group flex items-center cursor-pointer">
                <span className="flex items-center text-[#333] hover:text-[#1380d4]">
                  Services
                  <Arrow open={false} />
                </span>

                <div className="absolute left-0 top-full mt-2 w-[260px] bg-[#f4f4f4] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="block px-4 py-3 text-[14px] text-[#333] hover:bg-[#e5e5e5]"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about-us" className="text-[#333] hover:text-[#1380d4]">About Us</Link>
              <Link href="/contact" className="text-[#333] hover:text-[#1380d4]">Contact Us</Link>

            </nav>

            {/* Mobile menu toggle / desktop right column (balances logo width for centered nav) */}
            <div className="justify-self-end md:col-start-3 md:row-start-1">
              <button type="button" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? X : Menu}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden fixed inset-0 z-[100] ${mobileOpen ? "visible" : "invisible"}`}>
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />

          <nav className={`absolute right-0 top-0 h-full w-[280px] bg-[#2d5010] p-5 transition-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileOpen(false)}>{X}</button>
            </div>

            <ul className="flex flex-col gap-3 text-white">

              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

              {/* MOBILE SERVICES */}
              <li>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Services
                  <Arrow open={serviceOpen} />
                </button>

                {serviceOpen && (
                  <div className="pl-4 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="block py-2 text-sm text-white/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <Link href="/about-us" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}