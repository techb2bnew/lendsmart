import Image from "next/image";
export type LoanProcessStep = {
  num: number;
  title: string;
  desc: string;
  icon: string;
  active?: boolean;
};

type LoanProcessProps = {
    highlightText?: string;
    normalText?: string;  
    breakText?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    steps?: LoanProcessStep[];
};
const defaultSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out by phone, WhatsApp, or online form to discuss your loan needs.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Loan\nAssessment",
    desc: "We review your financial situation and determine suitable loan options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare loan products across lenders to find competitive options.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist you with documentation and application submission.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nSettlement",
    desc: "Reach out by phone, WhatsApp, or online form to discuss your loan needs.",
    icon: "/approved.png",
  },
];

export default function LoanProcess({
  highlightText,
  normalText,
  breakText,
  description,
  buttonText,
  buttonLink = "https://wa.me/61413208624",
  steps = defaultSteps,
}: LoanProcessProps) {
  return (
    <section className="overflow-hidden px-4 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto">
        {/* heading */}
        <div className="mx-auto max-w-full text-center">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[44px] xl:text-[50px] font-extrabold leading-[1.08] tracking-[-0.02em] text-black">
            {normalText || "How Our"}{" "}
            <span className="text-[#7cc242]">{highlightText || "Loan Process"}</span>{" "}
            {breakText || "Works"}
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-7 text-[#333]">
            {description?.trim()
              ? description
              : "Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."}
          </p>
        </div>

        {/* steps */}
        <div className="relative mt-12 lg:mt-14">
          {/* dashed connectors desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[70px] hidden lg:block">
            <svg className="h-[60px] w-full"viewBox="0 0 1200 90"preserveAspectRatio="none">
              <polyline points="170,58 225,52 280,48"stroke="#8e8e8e"strokeWidth="1.4"strokeDasharray="3 6"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
              <polyline points="390,48 480,70 570,78"stroke="#8e8e8e"strokeWidth="1.4"strokeDasharray="3 6"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
              <polyline points="630,78 700,52 770,46" stroke="#8e8e8e" strokeWidth="1.4"strokeDasharray="3 6"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
              <polyline points="850,46 955,66 1060,72" stroke="#8e8e8e"strokeWidth="1.4" strokeDasharray="3 6"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 p-2 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const isActive = !!step.active;
              const moveUpCard = index === 1 || index === 3;

              return (
                <div key={step.num} className={`relative flex justify-center ${moveUpCard ? "lg:top-[-30px]" : ""}`}>
                  <div className={`relative flex min-h-[220px] w-full max-w-[200px] flex-col items-center px-4 pt-9 pb-6 text-center sm:min-h-[272px] sm:max-w-[212px] sm:px-8 sm:pt-10 sm:pb-7 ${isActive ? "bg-linear-to-b from-[#509D1C] to-[#325918] text-white" : "bg-[#f3f3f3] text-black" }`} style={{ borderRadius: "999px",}}>
                    <div className="relative h-[56px] w-[56px]">
                      <Image src={step.icon} alt={step.title.replace("\n", " ")} width={56} height={56} priority quality={75} className={`object-contain ${isActive ? "brightness-0 invert" : ""}`}/>
                    </div>

                    <h3 className={`mt-4 whitespace-pre-line text-[15px] font-extrabold leading-[1.15] ${isActive ? "text-white" : "text-black" }`}>
                      {step.num}. {step.title}
                    </h3>

                    <p className={`mt-3 text-[14px] min-w-1 leading-[1.45] pl-4 pr-4 ${isActive ? "text-white/95" : "text-[#333]"}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {buttonText && (
          <div className="mt-8 flex justify-center">
            <a
              href={buttonLink}
              target={buttonLink.startsWith("http") ? "_blank" : undefined}
              rel={buttonLink.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-[42px] items-center gap-2 rounded-[5px] bg-[#1f1f1f] px-4 text-[13px] font-medium text-white transition hover:opacity-95"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#25D366]">
                <Image src="/icon.png" alt="Whatsapp" width={16} height={16} className="object-contain" />
              </span>
              <span>{buttonText}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}