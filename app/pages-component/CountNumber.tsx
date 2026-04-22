"use client";

import { useEffect, useRef, useState } from "react";

export type CountNumberProps = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
};

export default function CountNumber({
  prefix = "",
  value,
  suffix = "",
  label,
  className = "",
  valueClassName = "text-[20px] sm:text-[22px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-none font-semibold text-black",
  labelClassName = "mt-1 md:mt-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-4 md:leading-5 text-black",
}: CountNumberProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let frame: number;
    const duration = 1500;

    const tick = (ts: number) => {
      if (startTime === null) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <div ref={ref} className={className}>
      <div className={valueClassName}>
        {prefix}
        {count}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
}
