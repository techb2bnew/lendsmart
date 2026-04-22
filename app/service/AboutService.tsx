import Image from "next/image";
import Link from "next/link";
import CountNumber from "../pages-component/CountNumber";

export type AboutServiceProps = {
  title: string;
  description1: string;
  description2: string;
  ourGoalHeading: string;
  ourGoalDescription: string;
  collageImageSrc: string;
  collageImageAlt?: string;
  stat1: { value: number; suffix: string; label: string };
  stat2: { value: number; suffix: string; label: string };
  clientCount: number;
  clientCountLabel: string;
  clientImages: string[];
  ctaText: string;
  ctaLink: string;
  showStats?: boolean;
  showClients?: boolean;
  showCTA?: boolean;
};

function clientPhotoSrc(ref: string) {
  if (ref.startsWith("/")) return ref;
  return `https://images.unsplash.com/photo-${ref}?w=80&q=80`;
}

const rightArrow = (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8678 9.6795L15.3225 5.13411C15.1592 4.94345 14.8722 4.92122 14.6816 5.08454C14.4909 5.24782 14.4687 5.53477 14.632 5.72543L14.6816 5.775L18.4497 9.54767L0.454526 9.54766C0.203515 9.54766 0 9.75118 0 10.0022C0 10.2533 0.203515 10.4567 0.454526 10.4567L18.4497 10.4568L14.6816 14.2248C14.4909 14.3881 14.4687 14.6751 14.632 14.8657C14.7953 15.0564 15.0822 15.0786 15.2729 14.9153L15.3225 14.8657L19.8679 10.3203C20.0441 10.1431 20.0441 9.8568 19.8678 9.6795Z" />
  </svg>
);

export default function AboutService({
  title,
  description1,
  description2,
  ourGoalHeading,
  ourGoalDescription,
  collageImageSrc,
  collageImageAlt = "",
  stat1,
  stat2,
  clientCount,
  clientCountLabel,
  clientImages,
  ctaText,
  ctaLink,
  showStats = true,
  showClients = true,
  showCTA = true,
}: AboutServiceProps) {
  return (
    <section className="px-4 py-10 md:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-[24px] font-extrabold leading-normal tracking-[-0.02em] text-black sm:text-[30px] md:text-[34px] lg:text-[40px]">
          {title.split(" ").map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={word.toLowerCase() === "loans" ? "text-[#7EC74C]" : "text-gray-900"}
            >
              {word}{" "}
            </span>
          ))}
        </h2>

        <div className="mt-4 border-l-[3px] border-[#79c44a] pl-3 md:mt-5 md:border-l-[5px] md:pl-4">
          <p className="text-[13px] leading-6 text-[#222] sm:text-[14px] md:text-[15px] md:leading-7">
            {description1}
          </p>
          <p className="mt-1 text-[13px] leading-6 text-[#222] sm:text-[14px] md:text-[15px] md:leading-7">
            {description2}
          </p>
          <p className="mt-2 text-[13px] font-semibold leading-6 text-black sm:text-[14px] md:text-[15px] md:leading-7">
            {ourGoalHeading}
            {ourGoalHeading && ourGoalDescription ? " " : null}
            {ourGoalDescription ? (
              <span className="text-[#79c44a]">{ourGoalDescription}</span>
            ) : null}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-10 md:mt-10 lg:mt-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-xl lg:mx-0 lg:max-w-none">
              <Image
                src={collageImageSrc}
                alt={collageImageAlt || title}
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {showStats ? (
              <>
                <div className="flex flex-wrap items-start gap-8 sm:gap-12 md:gap-16">
                  <CountNumber value={stat1.value} suffix={stat1.suffix} label={stat1.label} />
                  <CountNumber value={stat2.value} suffix={stat2.suffix} label={stat2.label} />
                </div>
                <div className="mt-6 h-px w-full max-w-[500px] bg-[#d7dfca] md:mt-8" />
              </>
            ) : null}

            <div className="mt-4 flex max-w-[500px] flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between md:gap-6">
              {showClients && clientImages.length > 0 ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-2">
                    {clientImages.slice(0, 3).map((ref, index) => (
                      <div
                        key={index}
                        className="h-8 w-8 overflow-hidden rounded-full border-2 border-white sm:h-9 sm:w-9"
                        style={{ backgroundColor: "var(--color-green-mint, #e8f5e0)" }}
                      >
                        <Image
                          src={clientPhotoSrc(ref)}
                          alt=""
                          width={36}
                          height={36}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] leading-tight text-black sm:text-[12px] md:text-[13px]">
                    <div className="font-bold">{clientCount}+</div>
                    <div className="whitespace-nowrap">{clientCountLabel}</div>
                  </div>
                </div>
              ) : null}

              {showCTA && ctaText && ctaLink ? (
                <Link
                  href={ctaLink}
                  className="inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#8ebc64] px-5 text-[12px] font-medium text-[#5e9730] transition-all duration-300 hover:border-[#0781c3] hover:bg-[#0781c3] hover:text-white sm:h-[42px] sm:px-6 sm:text-[13px] md:text-[14px]"
                >
                  {ctaText}
                  <span className="text-current">{rightArrow}</span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
