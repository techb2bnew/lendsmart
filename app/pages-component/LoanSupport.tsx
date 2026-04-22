import Image from "next/image";

type LoanSupportProps = {
  highlightText?: string;
  normalText?: string;
  breakText?: string;
  description: string;
  showActions?: boolean;
  supportItems?: Array<{ icon: string; label: string }>;
  bottomContent?: {
    blueText: string;
    greenText: string;
    description: string;
  };
  chatButtonText?: string;
  chatButtonLink?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  supportCardBgClassName?: string;
};
const defaultSupportItems = [
  {
    icon: "/home.png",
    label: "Buying your first home",
  },
  {
    icon: "/signing.png",
    label: "Refinancing an existing loan",
  },
  {
    icon: "/assets.png",
    label: "Financing business assets",
  },
  {
    icon: "/agreement.png",
    label: "Purchasing vehicles or equipment",
  },
];

export default function LoanSupport({
  highlightText,
  normalText,
  breakText,
  description,
  showActions = false,
  supportItems = defaultSupportItems,
  bottomContent = {
    blueText: "Lend",
    greenText: "Smart",
    description: "Mortgages can help guide you through the financing process.",
  },
  chatButtonText = "Chat With Us",
  chatButtonLink = "https://wa.me/61413208624",
  ctaButtonText = "Get Loan Options",
  ctaButtonLink = "tel:0413208624",
  imageSrc = "/loan-supported.png",
  imageAlt = "Loan support",
  supportCardBgClassName = "bg-[#F4FBE9]",
}: LoanSupportProps) {
  const descriptionLines = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[•*-]\s*/, ""));

  const hasDescriptionList = descriptionLines.length > 1;

  return (
    <section className="overflow-hidden px-4 py-8 sm:py-10 lg:px-10 lg:py-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[460px_1fr] lg:items-start lg:gap-8">
          {/* Left image */}
          <div className="relative z-10 flex justify-center lg:justify-start">
            <div className="relative h-[370px] w-full max-w-[360px] sm:h-[400px] sm:max-w-[400px] lg:h-[520px] lg:max-w-[430px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={700}
                height={700}
                quality={75}
                priority
                className="object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="relative mt-7 lg:mt-4">
            <div className="relative z-20 lg:pl-2">
              <h2 className="text-[28px] font-extrabold lg:leading-[55px] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[40px]">
                {highlightText && (
                    <span className="text-[#7cc242]">
                    {highlightText}
                    </span>
                )}

                {normalText && <> {normalText}</>}

                {breakText && (
                    <>
                    <br />
                    {breakText}
                    </>
                )}

                </h2>

              <div className="mt-5 max-w-full border-l-[5px] border-[#79c44a] pl-4 sm:max-w-[82%]">
                {hasDescriptionList ? (
                  <ul className="space-y-1.5">
                    {descriptionLines.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-[15px] leading-7 text-[#222]">
                        <Image
                          src="/service/star.png"
                          alt=""
                          width={12}
                          height={12}
                          className="mt-2 shrink-0 object-contain"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[15px] leading-7 text-[#222]">{description}</p>
                )}
              </div>
            </div>

            {/* Overlapping cards */}
            <div className="mt-6 lg:relative lg:left-[-140px] lg:z-30 lg:mt-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                {supportItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex min-h-[82px] w-full flex-row items-center gap-3 rounded-[12px] border border-[#9bd05c] ${supportCardBgClassName} px-4 py-4 shadow-[0_2px_0_rgba(0,0,0,0.02)] sm:px-5 lg:w-full`}
                  >
                    <div className="relative h-[34px] w-[34px] shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        sizes="34px"
                        className="object-contain"
                      />
                    </div>

                    <p className="text-[14px] font-semibold leading-[1.35] text-black sm:text-[15px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-black lg:ml-[120px]">
                <span className="font-bold text-[#1380d4]">{bottomContent.blueText}</span>
                <span className="font-bold text-[#7cc242]">{bottomContent.greenText}</span>{" "}
                {bottomContent.description}
              </p>

              {showActions && (
                <div className="mt-5 flex flex-wrap items-center gap-3 lg:ml-[120px]">
                  <a
                    href={chatButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[6px] bg-[#1f1f1f] px-3 py-2 text-[12px] font-semibold text-white hover:opacity-90"
                  >
                    <Image src="/icon.png" alt="Whatsapp" width={18} height={18} />
                    <span>{chatButtonText}</span>
                  </a>
                  <a
                    href={ctaButtonLink}
                    className="inline-flex items-center gap-2 rounded-[20px] border border-[#7cc242] px-4 py-2 text-[12px] font-semibold text-[#5f9735] hover:bg-[#7cc242] hover:text-white"
                  >
                    {ctaButtonText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}