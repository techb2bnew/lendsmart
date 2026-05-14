"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

const services = [
  { label: "Residential Home Loans", href: "/residential-loans" },
  { label: "Commercial Loans", href: "/commercial-loans" },
  { label: "Personal Loans", href: "/personal-loans" },
  { label: "Car & Truck Loans", href: "/car-truck-loans" },
  { label: "Asset Finance", href: "/asset-finance" },
  { label: "Construction Loans", href: "/construction-loans" },
];

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isAnyServiceActive(pathname: string) {
  return services.some((s) => isPathActive(pathname, s.href));
}

export default function LendSmartHeader() {
  const pathname = usePathname() ?? "";
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
    setMobileOpen(false);
    setServiceOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const desktopLink = (active: boolean) =>
    active
      ? "font-semibold text-[#1380d4]"
      : "font-normal text-[#333] hover:text-[#1380d4]";

  const mobileLink = (active: boolean) =>
    active ? "font-semibold text-[#c8f090]" : "font-normal text-white/90 hover:text-white";

  const homeActive = isPathActive(pathname, "/");
  const servicesActive = isAnyServiceActive(pathname);
  const aboutActive = isPathActive(pathname, "/about-us");
  const contactActive = isPathActive(pathname, "/contact");

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

              <Link
                href="/"
                className={`transition-colors ${desktopLink(homeActive)}`}
                aria-current={homeActive ? "page" : undefined}
              >
                Home
              </Link>

              {/* SERVICES */}
              <div className="group relative flex cursor-pointer items-center">
                <span className={`flex items-center transition-colors ${desktopLink(servicesActive)}`}>
                  Services
                  <Arrow open={false} />
                </span>

                <div className="invisible absolute left-0 top-full z-50 mt-2 w-[260px] bg-[#f4f4f4] opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {services.map((service) => {
                    const active = isPathActive(pathname, service.href);
                    return (
                      <Link
                        key={service.label}
                        href={service.href}
                        className={`block px-4 py-3 text-[14px] transition-colors ${
                          active
                            ? "bg-[#e8e8e8] font-semibold text-[#1380d4]"
                            : "text-[#333] hover:bg-[#e5e5e5]"
                        }`}
                      >
                        {service.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/about-us"
                className={`transition-colors ${desktopLink(aboutActive)}`}
                aria-current={aboutActive ? "page" : undefined}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`transition-colors ${desktopLink(contactActive)}`}
                aria-current={contactActive ? "page" : undefined}
              >
                Contact Us
              </Link>

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

          <nav
            className={`absolute right-0 top-0 flex h-full w-[280px] flex-col bg-[#2d5010] p-5 transition-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          >

            <div className="mb-4 flex justify-end">
              <button type="button" className="p-1" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                {X}
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-3 overflow-y-auto">
              <li>
                <Link
                  href="/"
                  className={`block py-1 transition-colors ${mobileLink(homeActive)}`}
                  aria-current={homeActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* MOBILE SERVICES */}
              <li>
                <button
                  type="button"
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className={`flex w-full items-center justify-between py-1 text-left transition-colors ${mobileLink(servicesActive)}`}
                >
                  Services
                  <Arrow open={serviceOpen} />
                </button>

                {serviceOpen && (
                  <div className="mt-2 pl-4">
                    {services.map((service) => {
                      const active = isPathActive(pathname, service.href);
                      return (
                        <Link
                          key={service.label}
                          href={service.href}
                          className={`block py-2 text-sm transition-colors ${
                            active ? "font-semibold text-[#c8f090]" : "text-white/80 hover:text-white"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {service.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/about-us"
                  className={`block py-1 transition-colors ${mobileLink(aboutActive)}`}
                  aria-current={aboutActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-1 transition-colors ${mobileLink(contactActive)}`}
                  aria-current={contactActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
                <p className="text-white text-sm">Follow us on</p>
            <SocialLinks className="mt-2 flex shrink-0 items-center justify-start gap-5 border-t border-white/20 pt-2 text-white" />
          </nav>
        </div>
      </div>
    </header>
  );
}