import Link from "next/link";
import MainSection from "../pages-component/MainSection";
import AboutService from "../service/AboutService";
import HelpSection from "../service/HelpSection";
import LoanProcess from "../pages-component/LoanProcess";
import type { LoanProcessStep } from "../pages-component/LoanProcess";
import ServiceStatsBar from "../service/ServiceStatsBar";
import Testimonials from "../pages-component/Testimonials";
import PersonalLoanBenefits from "../service/PersonalLoanBenefits";

const personalUseItems = [
  { imageSrc: "/service/per-loan.png", title: "Travel and holidays", alt: "Travel and holidays" },
  { imageSrc: "/service/per-loan1.png", title: "Medical expenses", alt: "Medical expenses" },
  { imageSrc: "/service/per-loan2.png", title: "Education costs", alt: "Education costs" },
  { imageSrc: "/service/per-loan3.png", title: "Debt consolidation", alt: "Debt consolidation" },
  { imageSrc: "/service/per-loan4.png", title: "Emergency expenses", alt: "Emergency expenses" },
];

const personalLoanProcessSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out via call, WhatsApp, or online form to share your loan requirements.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Eligibility\nCheck",
    desc: "We review your income, credit score, and profile to find the best personal loan options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare multiple lenders to get you the lowest interest rates and flexible repayment option.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist with minimal documentation and ensure a quick and smooth application process.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nSettlement",
    desc: "Get fast approval and receive funds directly in your account without delay.",
    icon: "/approved.png",
  },
];

export default function PersonalLoansPage() {
  return (
    <>
      <MainSection
        title="Services / Personal Loans"
        titleClassName="mb-3 text-[13px] font-semibold tracking-wide text-[#79c44a]"
        titleContent={
          <>
            <Link href="/services" className="text-[#79c44a] hover:text-[#5ea933]">
              Services
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">Personal Loans</span>
          </>
        }
        heading="Flexible Personal Loans for Your Needs"
        description="Need funds fast for personal expenses? Get quick approvals and access funds without the hassle."
        featurePoints={["Fast Approvals", "High Approval Success Rate"]}
        image="/service/personal-loan-main.png"
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413208624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413208624"
      />

      <div className="bg-[#f4f5f4] py-6 sm:py-8 lg:py-10">
        <AboutService
          title="About Personal Loans"
          description1="Personal loans can help cover various expenses such as travel, education, medical costs, or unexpected financial needs."
          description2="At LendSmart Mortgages, we help you find loan options with quick approvals and fast funding, along with manageable repayment terms."
          ourGoalHeading="Our goal is to make personal lending"
          ourGoalDescription="simple, transparent, and stress-free."
          collageImageSrc="/service/about-loan.png"
          collageImageAlt="About personal loans"
          stat1={{ value: 78, suffix: "%", label: "Approval Success Rate" }}
          stat2={{ value: 10, suffix: "+", label: "Pre-approval in Minutes" }}
          clientCount={8665}
          clientCountLabel="Popular Clients"
          clientImages={[
            "1507003211169-0a1dd7228f2d",
            "1494790108377-be9c29b29330",
            "1472099645785-5658abf4ff4e",
          ]}
          ctaText="Know More About Us"
          ctaLink="/about-us"
        />
      </div>

      <PersonalLoanBenefits
        title="Get Approved Faster with LendSmart"
        points={[
          "Streamlined digital application process",
          "Quick pre-approvals within hours",
          "Minimal documentation required",
          "Faster disbursal compared to traditional lenders",
        ]}
        imageSrc="/service/faster.png"
        imageAlt="Personal loan fast approval"
      />

      <div className="-mt-8 sm:-mt-25">
        <HelpSection title="What You Can Use Personal Loans For" items={personalUseItems} />
      </div>

      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
        steps={personalLoanProcessSteps}
        buttonText="Chat With Us"
        buttonLink="https://wa.me/61413208624"
      />

      <ServiceStatsBar
        items={[
          { kind: "count", prefix: "$", value: 250, suffix: "M+", label: "in loans settled" },
          { kind: "count", value: 45, suffix: "+", label: "lenders on panel" },
          { kind: "count", value: 12, suffix: "+", label: "years combined experience" },
          {
            kind: "richtext",
            node: (
              <>
                Serving clients <span className="text-[#79c44a]">across Australia</span>
              </>
            ),
          },
        ]}
      />

<Testimonials
        title="Testimonials"
        description="Clients trust LendSmart Mortgages for reliable loan guidance and support."
        reviews={[
          {
            heading: "Quick funds when I needed them the most",
            description:
              "I needed urgent funds for a personal expense, and the team made the entire process incredibly smooth. From checking my eligibility to getting approval, everything was fast and hassle-free.I received the funds quicker than I expected.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "Simple process with great support",
            description:
              "I was unsure about which personal loan to choose, but they guided me at every step. They compared multiple lenders and helped me get the best interest rate with flexible repayment options. Highly professional and easy to work with.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
