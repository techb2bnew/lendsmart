import type { ReactNode } from "react";
import CountNumber from "../pages-component/CountNumber";

export type ServiceStatsBarProps = {
  items: Array<
    | {
        kind: "count";
        prefix?: string;
        value: number;
        suffix: string;
        label: string;
      }
    | { kind: "richtext"; node: ReactNode }
  >;
};

export default function ServiceStatsBar({ items }: ServiceStatsBarProps) {
  return (
    <section className="bg-[#F4F9F1] px-4 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
        {items.map((item, i) =>
          item.kind === "count" ? (
            <div key={i} className="text-left sm:text-left">
              <CountNumber
                prefix={item.prefix}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                className="inline-block text-left"
                valueClassName="text-[22px] font-extrabold leading-none text-black lg:text-[34px]"
                labelClassName="mt-2 text-left text-[12px] font-medium text-[#222] sm:text-[13px]"
              />
            </div>
          ) : (
            <div
              key={i}
              className="flex items-center justify-center text-left sm:justify-end sm:text-right"
            >
              <div className="max-w-[220px] text-[14px] font-semibold leading-snug text-black sm:max-w-none sm:text-[15px] lg:text-[16px]">
                {item.node}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
