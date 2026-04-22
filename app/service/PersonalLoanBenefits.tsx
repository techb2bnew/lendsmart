import Image from "next/image";

type PersonalLoanBenefitsProps = {
  title: string;
  points: string[];
  pointIcons?: string[];
  imageSrc: string;
  imageAlt?: string;
  sectionBgClassName?: string;
};

export default function PersonalLoanBenefits({
  title,
  points,
  pointIcons = ["/service/per-icon.png", "/service/per-icon1.png", "/service/per-icon2.png", "/service/per-icon3.png"],
  imageSrc,
  imageAlt = "Personal loan benefits",
  sectionBgClassName = "bg-[#eaf2df]",
}: PersonalLoanBenefitsProps) {
  return (
    <section className={`px-4 py-8 sm:py-10 lg:px-8 lg:py-12 ${sectionBgClassName}`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <h2 className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-black sm:text-[42px]">
            {title}
          </h2>

          <ul className="mt-5 space-y-4">
            {points.map((point, index) => (
              <li key={point} className="flex w-full items-start gap-3 text-[16px] font-medium leading-8 text-[#1f1f1f]">
                <Image
                  src={pointIcons[index] ?? pointIcons[pointIcons.length - 1] ?? "/service/per-icon.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="mt-1 shrink-0 object-contain"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] overflow-hidden rounded-[16px] sm:max-w-[500px] bottom-[0px] lg:bottom-[100px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={520}
              height={560}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
