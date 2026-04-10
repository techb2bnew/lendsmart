import Image from "next/image";

const benefits = [
  "Access to multiple lenders and loan options",
  "Expert guidance through the loan process",
  "Personalised loan solutions",
  "Fast communication and support",
  "Transparent and reliable service",
];

export default function WhyChoose() {
  return (
    <section className="relative top-[-48px] overflow-hidden bg-[#F4FBE9] pt-20 sm:top-[-80px] sm:pt-28 lg:top-[-80px] lg:pt-28 px-4 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 items-end gap-10 md:gap-5 lg:grid-cols-[1.05fr_0.95fr] ">
          {/* Left content */}
          <div className="relative lg:pt-6 pb-0 md:pb-20">
            <div className=" ">
              <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-black sm:text-[32px] lg:text-[40px]">
                Why Choose <span className="text-[#1380d4]">Lend</span>
                <span className="text-[#7cc242]">Smart</span> Mortgages
              </h2>

              <div className="mt-5 max-w-[650px] border-l-[5px] border-[#79c44a] pl-4">
                <p className="text-[15px] leading-7 text-[#222]">
                  Choosing the right loan can be complicated. At LendSmart
                  Mortgages, we simplify the process and help you make informed
                  decisions.
                </p>

                <p className="mt-4 text-[15px] font-semibold leading-7 text-black">
                  With LendSmart you receive:
                </p>

                <ul className="mt-2 space-y-2">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-[15px] leading-7 text-black"
                    >
                      <span className="mt-[6px] text-[15px] leading-none">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <a
                href="https://wa.me/61413208624"
                target="_blank"
                rel="noopener noreferrer" className="mt-7 inline-flex h-[42px] items-center gap-2 rounded-[3px] bg-[#1f1f1f] px-4 text-[13px] font-medium text-white transition hover:opacity-95">
                <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#25D366]">
                  <Image
                    src="/icon.png"
                    alt="Whatsapp"
                    width={30}
                    height={30}
                    priority
                    className="object-contain"
                  />
                </span>
                <span>Click here to chat</span>
              </a> */}
            </div>


          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[390px] w-full max-w-[360px] sm:h-[440px] sm:max-w-[400px] lg:h-[550px] lg:max-w-[460px]">

              {/* Person image */}
              <div className="absolute bottom-0 left-1/2 z-10 h-[100%] w-[100%] -translate-x-1/2">
                <Image
                  src="/about.png"
                  alt="LendSmart advisor"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 460px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Left bottom hand image */}
      <div className="pointer-events-none mt-8 w-[100px] sm:w-[170px] bottom-0 absolute lg:-bottom-2 lg:-left-[0px] lg:mt-0 lg:w-[190px]">
        <Image
          src="/hand-holding.png"
          alt="Hand holding house"
          width={190}
          height={120}
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}