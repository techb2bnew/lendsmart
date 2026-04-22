import Image from "next/image";

const defaultBenefits = [
  "Access to multiple lenders and loan options",
  "Expert guidance through the loan process",
  "Personalised loan solutions",
  "Fast communication and support",
  "Transparent and reliable service",
];

type WhyChooseProps = {
  showActions?: boolean;
  removeTopOffset?: boolean;
  titlePrefix?: string;
  titleBlue?: string;
  titleGreen?: string;
  titleSuffix?: string;
  description?: string;
  benefitsHeading?: string;
  benefits?: string[];
  chatButtonText?: string;
  chatButtonLink?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  personImage?: string;
  personImageAlt?: string;
  handImage?: string;
  hideHandImage?: boolean;
};

export default function WhyChoose({
  showActions = false,
  removeTopOffset = false,
  titlePrefix = "Why Choose",
  titleBlue = "Lend",
  titleGreen = "Smart",
  titleSuffix = "Mortgages",
  description = "Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions.",
  benefitsHeading = "With LendSmart you receive:",
  benefits = defaultBenefits,
  chatButtonText = "Chat With Us",
  chatButtonLink = "https://wa.me/61413208624",
  ctaButtonText = "Get Loan Options",
  ctaButtonLink = "tel:0413208624",
  personImage = "/about.png",
  personImageAlt = "LendSmart advisor",
  handImage = "/hand-holding.png",
  hideHandImage = false,
}: WhyChooseProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#EEF4E4] px-4 lg:px-10 ${
        removeTopOffset
          ? "pt-14 sm:pt-16 lg:pt-20"
          : "top-[-48px] pt-20 sm:top-[-80px] sm:pt-28 lg:top-[-80px] lg:pt-28"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 items-end gap-10 md:gap-5 lg:grid-cols-[1.05fr_0.95fr] ">
          {/* Left content */}
          <div className="relative lg:pt-6 pb-0 md:pb-20">
            <div className=" ">
              <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-black sm:text-[32px] lg:text-[40px]">
                {titlePrefix} <span className="text-[#1380d4]">{titleBlue}</span>
                <span className="text-[#7cc242]">{titleGreen}</span> {titleSuffix}
              </h2>

              <div className="mt-5 max-w-[650px] border-l-[5px] border-[#79c44a] pl-4">
                <p className="text-[15px] leading-7 text-[#222]">
                  {description}
                </p>

                <p className="mt-4 text-[15px] font-semibold leading-7 text-black">
                  {benefitsHeading}
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

              {showActions && (
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={chatButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[42px] items-center gap-2 rounded-[5px] bg-[#1f1f1f] px-4 text-[13px] font-medium text-white transition hover:opacity-95"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#25D366]">
                      <Image src="/icon.png" alt="Whatsapp" width={18} height={18} className="object-contain" />
                    </span>
                    <span>{chatButtonText}</span>
                  </a>
                  <a
                    href={ctaButtonLink}
                    className="inline-flex h-[42px] items-center rounded-[20px] border border-[#7cc242] px-5 text-[13px] font-medium text-[#5d9532] transition hover:bg-[#7cc242] hover:text-white"
                  >
                    {ctaButtonText}
                  </a>
                </div>
              )}
            </div>


          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[390px] w-full max-w-[360px] sm:h-[440px] sm:max-w-[400px] lg:h-[550px] lg:max-w-[460px]">

              {/* Person image */}
              <div className="absolute bottom-0 left-1/2 z-10 h-full w-full -translate-x-1/2">
                <Image
                  src={personImage}
                  alt={personImageAlt}
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
      {!hideHandImage && (
        <div className="pointer-events-none mt-8 w-[100px] sm:w-[170px] bottom-0 absolute lg:-bottom-2 lg:left-0 lg:mt-0 lg:w-[120px]">
          <Image
            src={handImage}
            alt="Hand holding house"
            width={190}
            height={120}
            className="h-auto w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}