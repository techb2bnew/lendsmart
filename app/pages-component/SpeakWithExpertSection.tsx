import Image from "next/image";

const items = [
  "Free loan assessment",
  "Fast response time",
  "No obligation",
  "Access to multiple lenders",
];

export default function SpeakWithExpertSection() {
  return (
    <section className="bg-white px-4 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[16px] bg-[#EEF4E4] p-3">
          <div className="relative h-[220px] overflow-hidden rounded-[12px] sm:h-[280px]">
            <Image src="/contact/speak.png" alt="Speak with expert" fill className="object-cover" />
          </div>
          <div className="pt-4 text-[15px] leading-7 text-[#1f1f1f]">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+61413206624"
                className="underline underline-offset-2 hover:text-[#3f7416]"
              >
                0413 206 624
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:admin@lendsmartmortgages.com.au"
                className="underline underline-offset-2 hover:text-[#3f7416]"
              >
                admin@lendsmartmortgages.com.au
              </a>
            </p>
            <p><span className="font-semibold">Location:</span> Australia</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="mt-1 h-[60px] w-[6px] rounded-full bg-[#79c44a] sm:h-[60px]" />
            <h2 className="text-[34px] font-extrabold leading-[1.1] text-black sm:text-[42px]">
              Speak With a Loan Expert Today
            </h2>
          </div>
          <div className="mt-5 space-y-3">
            {items.map((item) => (
              <div key={item} className="flex items-center justify-between rounded-[10px] bg-[#1c1c1c] px-5 py-3 text-white">
                <span className="text-[17px] font-semibold">{item}</span>
                <span>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
