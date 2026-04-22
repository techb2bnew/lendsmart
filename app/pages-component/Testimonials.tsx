"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
type TestimonialsProps = {
  title?: string;
  description?: string;
  reviews?: {
    heading: string;
    description: string;
    name: string;
    time: string;
    image: string;
  }[];
};
const testimonials = [
  {
    name: "Michael Anderson",
    time: "3 Days ago",
    title: "Professional service and fast communication",
    text: `"Great advice and support throughout the loan application process."\n"The team helped us understand our loan options clearly and made everything easier."`,
    avatar: "/user.png",
  },
  {
    name: "Michael Anderson",
    time: "3 Days ago",
    title: "Professional service and fast communication",
    text: `"Great advice and support throughout the loan application process."\n"The team helped us understand our loan options clearly and made everything easier."`,
    avatar: "/user.png",
  },
  {
    name: "Sarah Johnson",
    time: "5 Days ago",
    title: "Excellent support and guidance",
    text: `"Very smooth process from start to finish."\n"The team was responsive, helpful, and made the whole journey stress free."`,
    avatar: "/user.png",
  },
];

export default function Testimonials({ title, description, reviews }: TestimonialsProps) {
  const [active, setActive] = useState(0);

  const visibleTestimonials = useMemo(() => {
    const first = testimonials[active];
    const second = testimonials[(active + 1) % testimonials.length];
    return [first, second];
  }, [active]);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#1E1E1E] py-14 lg:py-20 px-4 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative grid grid-cols-1 items-start lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div className="relative z-30 lg:pt-10">
            <div className=" ">
              {title && (
                <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[34px] lg:text-[40px]">
                  {title}
                </h2>
              )}

              {description && (
                <div className="mt-5 border-l-[5px] border-[#79c44a] pl-4">
                  <p className="text-[15px] leading-7 text-[#b9b9b9]">
                    {description}
                  </p>
                </div>
              )}
            </div>

            {/* Cards overlapped on image */}
            <div className="relative z-40 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:-mr-12 xl:-mr-[230px]">
              {reviews?.map((item, index) => (
                <div
                  key={`${item.name}-${index}-${active}`}
                  className={`group rounded-[14px] border p-6 transition-all duration-300 ${
                    index === 0
                      ? "border-[#66b11f] bg-gradient-to-b from-[#509D1C] to-[#325918]"
                      : "border-[#474747] bg-[#1E1E1E] hover:border-[#66b11f] hover:bg-gradient-to-r hover:from-[#5aa417] hover:to-[#2f5f0d]"
                  }`}
                >
                  <div className="text-[52px] font-black leading-none text-[#2f5f0d] transition-colors duration-300 group-hover:text-[#2f5f0d]">
                    ❝
                  </div>

                  <h3 className="mt-1 text-[20px] font-semibold leading-[1.3] text-white text-center">
                    {item.heading}
                  </h3>

                  <div className="mt-4 min-h-[88px] space-y-2 text-center text-[13px] italic leading-5 text-[#ececec]">
                    {item.description.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  <div className="mt-5 h-px w-full bg-white/20" />

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.heading}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-[20px] font-semibold leading-none text-white">
                        {item.name}
                      </div>
                      <div className="mt-1 text-[14px] text-[#c7c7c7]">
                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav buttons with SVG icons */}
            <div className="relative mt-4 flex justify-center mb-6 md:mb-2 gap-4 sm:gap-5 lg:justify-end lg:gap-5 xl:-mr-[230px]">
              <button
                type="button"
                onClick={handlePrev}
                className="group flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer shrink-0 items-center justify-center rounded-full transition active:opacity-90"
                aria-label="Previous testimonial">
                <Image
                  src="/arrow-left.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="opacity-60 transition group-hover:opacity-100"
                />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="group flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer shrink-0 items-center justify-center rounded-full transition active:opacity-90"
                aria-label="Next testimonial"
              >
                <Image
                  src="/arrow-left.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="rotate-180 opacity-60 transition group-hover:opacity-100"
                />
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 h-[390px] w-full max-w-[320px] overflow-hidden rounded-[38px] sm:h-[460px] sm:max-w-[360px] lg:h-[550px] lg:max-w-[400px]">
              <Image
                src="/family.png"
                alt="Happy family"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}