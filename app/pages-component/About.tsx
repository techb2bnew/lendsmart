"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type AboutProps = {
    description1: string;
    description2: string; 
    gaolHeading: string;
    gaolDescription: string;
    imageSrc: string;
};

function Counter({
  end,
  duration = 1500,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About({description1, description2, gaolHeading, gaolDescription, imageSrc}: AboutProps) {
  const rightArrow = ((
    <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_127_97)"> <path d="M19.8678 9.6795L15.3225 5.13411C15.1592 4.94345 14.8722 4.92122 14.6816 5.08454C14.4909 5.24782 14.4687 5.53477 14.632 5.72543C14.6473 5.7432 14.6638 5.7598 14.6816 5.775L18.4497 9.54767L0.454526 9.54766C0.203515 9.54766 2.66186e-06 9.75118 2.61796e-06 10.0022C2.57407e-06 10.2533 0.203515 10.4567 0.454526 10.4567L18.4497 10.4568L14.6816 14.2248C14.4909 14.3881 14.4687 14.6751 14.632 14.8657C14.7953 15.0564 15.0822 15.0786 15.2729 14.9153C15.2907 14.9001 15.3073 14.8835 15.3225 14.8657L19.8679 10.3203C20.0441 10.1431 20.0441 9.8568 19.8678 9.6795Z"fill="currentColor"/></g><defs><clipPath id="clip0_127_97"><rect width={20} height={20} fill="white" /></clipPath></defs></svg>
  ));
  return (
    <section id="about" className="bg-[#F4FBE9] pb-4 overflow-hidden px-4 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 items-end">
          {/* left */}
          <div className="pt-5 lg:pt-2">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-normal md:leading-[1.05] tracking-[-0.02em] text-black">
              About <span className="text-[#1380d4]">Lend</span>
              <span className="text-[#7cc242]">Smart</span> Mortgages
            </h2>

            <div className="mt-5 border-l-[5px] border-[#79c44a] pl-4">
            {description1 && (
                <p className="text-[15px] leading-7 text-[#222]">
                  {description1}
                </p>
              )}

              {description2 && (
                <p className="mt-1 text-[15px] leading-7 text-[#222]">
                  {description2}
                </p>
              )}
              
              <p className="mt-2 text-[15px] font-semibold leading-7 text-black">
                {gaolHeading} {" "}
                {gaolDescription && (
                   <span className="text-[#79c44a]">
                    {gaolDescription}
                  </span>
                )}
              </p>
            </div>

            
          </div>

          {/* right */}
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-center lg:justify-end">
            <div>
            {/* stats */}
            <div className="mt-10 md:mt-16 flex items-start gap-14 sm:gap-20">
              <div className="min-w-[110px]">
                <div className="text-[25px] md:text-[40px] leading-none font-semibold text-black">
                  <Counter end={78} suffix="%" />
                </div>
                <div className="mt-2 text-[14px] leading-5 text-black">
                  Business from Referrals
                </div>
              </div>

              <div className="min-w-[110px]">
                <div className="text-[25px] md:text-[40px] leading-none font-semibold text-black">
                  <Counter end={45} suffix="+" />
                </div>
                <div className="mt-2 text-[14px] leading-5 text-black">
                  Minute Verbal Commitment
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="mt-8 h-[1px] w-full max-w-[500px] bg-[#d7dfca]" />

            {/* bottom row */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-w-[500px]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                      style={{ backgroundColor: "var(--color-green-mint)" }}
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${i === 1
                            ? "1507003211169-0a1dd7228f2d"
                            : i === 2
                              ? "1494790108377-be9c29b29330"
                              : "1472099645785-5658abf4ff4e"
                          }?w=80&q=80`}
                        alt={`Client ${i}`}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-[13px] leading-[1.1] text-black">
                  <div className="font-bold">8665+</div>
                  <div>Popular Clients</div>
                </div>
              </div>

              <Link href="/about"
                className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#8ebc64] hover:border-[#0781c3] px-8 text-[14px] font-medium text-[#5e9730] hover:text-white transition hover:hover:bg-[#0781c3]">
                Know More About Us
                  {rightArrow}
              </Link>
            </div>
            </div>
            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px] h-[300px] sm:h-[380px] lg:h-[400px] sm:max-h-none hidden sm:block">

              {/* person image */}
              <div className="absolute bottom-0 left-1/2 z-10 h-full w-full max-h-[280px] -translate-x-1/2 sm:max-h-none">
              {imageSrc && (
                 <Image
                  src={imageSrc}
                  alt="LendSmart advisor" 
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_12px_18px_rgba(0,0,0,0.24)]"
                />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}