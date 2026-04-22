import Loan, { type LoanProps } from "./Loan";

export type HelpSectionProps = {
  title?: string;
  items: LoanProps[];
  className?: string;
};

export default function HelpSection({
  title = "What We Help With",
  items,
  className = "",
}: HelpSectionProps) {
  const lastIndex = items.length - 1;
  const lastIsOddRow = items.length % 2 === 1;

  return (
    <section className={`px-4 py-10 sm:py-12 lg:px-8 lg:py-14 ${className}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-[20px] bg-[#1A1A1A] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <h2 className="text-center text-[26px] font-extrabold tracking-[-0.02em] text-white sm:text-[32px] lg:text-[38px]">
            {title}
          </h2>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-12 lg:gap-5">
            {items.map((item, i) => {
              const isLast = i === lastIndex;
              const centerLastOnTwoCol =
                isLast && lastIsOddRow
                  ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc((100%-1rem)/2)] lg:col-span-4 lg:max-w-none lg:mx-0 lg:w-full"
                  : "";

              const lgPlacement =
                i === 0
                  ? "lg:col-span-4 lg:col-start-1"
                  : i === 1
                    ? "lg:col-span-4 lg:col-start-5"
                    : i === 2
                      ? "lg:col-span-4 lg:col-start-9"
                      : i === 3
                        ? "lg:col-span-4 lg:col-start-3"
                        : i === 4
                          ? "lg:col-span-4 lg:col-start-7"
                          : "lg:col-span-4";

              return (
                <div
                  key={`${item.title}-${i}`}
                  className={[
                    "relative min-h-0 w-full min-w-0 overflow-hidden rounded-2xl",
                    "aspect-4/3",
                    lgPlacement,
                    centerLastOnTwoCol,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Loan {...item} className="h-full min-h-0" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
