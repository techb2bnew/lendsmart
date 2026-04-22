"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/residential-loans" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

export default function LendSmartHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

 
  // Modern Menu Icon - Better Design
  const Menu = ((
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ));

  // Modern Close Icon - Better Design
  const X = ((
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=> {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full overflow-visible">
      <div className={`bg-white transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"}`}>
        <div className="bg-[#F4F4F4] border-y border-gray-300 px-4 lg:px-5">
          <div className="max-w-[1440px] mx-auto relative flex min-h-[70px] items-center justify-between py-2">
            {/* Logo */}
          
              <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image src="/LendSmart-Mortgages-Logo- 2.png" alt="LendSmart Mortgages" width={200} height={70} className="" priority />
              </Link>
        

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-[14px] font-normal text-black">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-[#1380d4] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop WhatsApp Button */}
            <div className="absolute right-0 hidden md:block lg:right-1">
              <a href="https://wa.me/61413208624" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#3f7416] hover:bg-[#0781c3] px-4 py-2 text-[13px] font-medium text-white shadow-md transition-all duration-300  hover:shadow-lg active:scale-95">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#25D366] text-white">
                  <Image src="/icon.png" alt="" width={30} height={30} className="object-contain" />
                </span>
                <span className="hidden lg:inline">Chat With Us</span>
                <span className="lg:hidden">Chat</span>
              </a>
            </div>

            {/* Mobile Menu Button - Improved */}
            <button
              type="button"
              className=" z-30 flex h-12 w-12 items-center justify-end rounded-full text-black bg-white/10 backdrop-blur-sm border border-white/20 md:hidden transition-all active:scale-95"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? X : Menu}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Smooth */}
        <div className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <nav className={`absolute top-0 right-0 h-full w-[280px] bg-[#2d5010] shadow-2xl transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6L18 18" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block py-3 text-[16px] font-medium text-white border-b border-white/10 hover:pl-2 transition-all"
                    onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a href="https://wa.me/61413208624" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-white py-3 text-[14px] font-semibold text-[#222]"
                  onClick={() => setMobileOpen(false)}>
                  <Image src="/icon.png" alt="" width={24} height={24} className="object-contain" />
                  WhatsApp chat
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}