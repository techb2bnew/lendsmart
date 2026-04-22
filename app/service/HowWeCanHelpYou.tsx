import Image from "next/image";

type HelpItem = {
  icon: string;
  title: string;
  description: string;
};

type HowWeCanHelpYouProps = {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
  items: HelpItem[];
  className?: string;
};

export default function HowWeCanHelpYou({
  title = "How We Can Help You",
  imageSrc,
  imageAlt = "Business consultant",
  items,
  className = "",
}: HowWeCanHelpYouProps) {
  return (
    <section className={`px-4 py-10 md:py-14 lg:px-8 lg:py-16 ${className}`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] overflow-hidden rounded-[16px] bg-[#d8d8d8] sm:max-w-[500px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={460}
              height={520}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-black sm:text-[38px]">
            {title}
          </h2>

          <div className="mt-5 space-y-4 sm:space-y-5">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="relative mt-1 h-7 w-7 shrink-0">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-[17px] font-semibold leading-tight text-black">{item.title}</p>
                  <p className="mt-1 text-[14px] leading-6 text-[#2f2f2f]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
