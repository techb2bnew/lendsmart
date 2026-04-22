import Image from "next/image";

export type LoanProps = {
  imageSrc: string;
  title: string;
  alt?: string;
  className?: string;
  /** Fine-tune crop per asset, e.g. "center 30%" for portraits */
  imagePosition?: string;
};

export default function Loan({
  imageSrc,
  title,
  alt,
  className = "",
  imagePosition = "center center",
}: LoanProps) {
  return (
    <article
      className={`group relative h-full w-full min-h-0 overflow-hidden rounded-2xl bg-[#111] ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt ?? title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="rounded-[inherit] object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: imagePosition }}
      />
      <div
        className="absolute inset-0 rounded-[inherit] bg-linear-to-t from-black/88 via-black/40 to-black/10"
        aria-hidden
      />
      <h3 className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 text-[15px] font-semibold leading-snug text-white sm:text-[16px] lg:pb-5 lg:pl-5 lg:pr-5">
        {title}
      </h3>
    </article>
  );
}
