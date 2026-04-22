import Link from "next/link";
import MainSection from "../pages-component/MainSection";
import AboutService from "../service/AboutService";
import LendingSolutions from "../pages-component/LendingSolutions";
import LoanSupport from "../pages-component/LoanSupport";
import LoanProcess from "../pages-component/LoanProcess";
import type { LoanProcessStep } from "../pages-component/LoanProcess";
import ServiceStatsBar from "../service/ServiceStatsBar";
import Testimonials from "../pages-component/Testimonials";
import HowWeCanHelpYou from "../service/HowWeCanHelpYou";

const helpItems = [
  {
    icon: "/service/c-icon.png",
    title: "Commercial Property Purchase",
    description: "Get the right funding to buy offices, warehouses, or retail spaces.",
  },
  {
    icon: "/service/c-icon2.png",
    title: "Business Loans",
    description: "Access flexible loan options to manage cash flow and daily operations.",
  },
  {
    icon: "/service/c-icon3.png",
    title: "Business Expansion",
    description: "Scale your business with financing for new locations, equipment, or staff.",
  },
  {
    icon: "/service/c-icon4.png",
    title: "Construction & Development Finance",
    description: "Funding solutions for building or renovating commercial properties.",
  },
  {
    icon: "/service/c-icon5.png",
    title: "Refinancing Solutions",
    description: "Improve your current loan terms and reduce financial pressure.",
  },
];

const financeSolutions = [
  {
    id: "commercial-property",
    title: "Commercial property finance",
    description: "Finance essential tools and machinery without large upfront costs.",
  },
  {
    id: "business-expansion",
    title: "Business expansion loans",
    description: "Flexible funding solutions to support growth and working capital needs.",
  },
  {
    id: "refinancing",
    title: "Refinancing commercial loans",
    description: "Restructure existing debt to reduce repayments and improve cash flow.",
  },
  {
    id: "investment",
    title: "Investment property loans",
    description: "Secure tailored financing for commercial investment opportunities.",
  },
];

const commercialLoanProcessSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out to discuss your business goals and financing requirements with our experts.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Loan\nAssessment",
    desc: "We assess your business financials, cash flow, and borrowing capacity to identify suitable options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare multiple lenders to secure competitive rates and the best funding structure for your business.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist with documentation and manage the application process for a smooth experience.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nSettlement",
    desc: "Receive fast approvals and access funds quickly to support your business growth.",
    icon: "/approved.png",
  },
];

export default function CommercialLoansPage() {
  return (
    <>
      <MainSection
        title="Services / Commercial Loans"
        titleClassName="mb-3 text-[13px] font-semibold tracking-wide text-[#79c44a]"
        titleContent={
          <>
            <Link href="/services" className="text-[#79c44a] hover:text-[#5ea933]">
              Services
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">Commercial Loans</span>
          </>
        }
        heading="Commercial Finance Solutions for Your Business"
        description="Looking to purchase commercial property, secure a business loan, or expand your operations?"
        extraDescription="We provide tailored financing solutions to help your business grow with confidence."
        image="/service/commercial-main.png"
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413208624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413208624"
      />

      <HowWeCanHelpYou imageSrc="/service/commercial-help.png" items={helpItems} />
<div className="bg-[#EEF4E4] pb-6 sm:pb-8 lg:pb-10">
      <AboutService
        title="About Commercial Loans"
        description1="Commercial loans are more complex than residential loans. At LendSmart Mortgages, we help business owners find suitable loan solutions based on their financial goals."
        description2="We assist with structuring loans that support long-term business growth."
        ourGoalHeading="Our goal is to provide"
        ourGoalDescription="smart, transparent, and growth-focused finance support."
        collageImageSrc="/service/c-about.png"
        collageImageAlt="Commercial finance solutions"
        stat1={{ value: 78, suffix: "%", label: "Business from Referrals" }}
        stat2={{ value: 45, suffix: "+", label: "Minute Verbal Commitment" }}
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

      <div className="-mt-10">
        <LendingSolutions
          title="What Can Be Financed"
          subtitle="There are so many Loan & financing options"
          solutions={financeSolutions}
          chatButtonText="Click here to chat"
          chatButtonLink="https://wa.me/61413208624"
          ctaButtonText="Get Loan Options"
          ctaButtonLink="tel:0413208624"
          topImage="/service/help5.png"
          bottomLeftImage="/service/help4.png"
          bottomRightImage="/service/help.png"
        />
      </div>
        <div className="relative top-[-48px] sm:top-[-80px]">
      <div className="relative overflow-hidden bg-[#EEF4E4] px-4 lg:px-10 pt-14 sm:pt-16 lg:pt-20">
        <LoanSupport
          highlightText="Benefits"
          normalText="of Commercial"
          breakText="Loans"
          description="Most people find that mortgage financing is complicated and confusing. We help you buy your dream home by simplifying the mortgage financing process with personalized loan options that save you time and money."
          supportItems={[
            { icon: "/home.png", label: "Tailored business loan solutions" },
            { icon: "/signing.png", label: "Access to multiple lenders" },
            { icon: "/assets.png", label: "Expert loan structuring" },
            { icon: "/agreement.png", label: "Smooth approval process" },
          ]}
          bottomContent={{
            blueText: "",
            greenText: "",
            description: "Let's discuss your business finance needs.",
          }}
          imageSrc="/family.png"
          imageAlt="Family discussing finance options"
          supportCardBgClassName="bg-white"
        />
      </div>
      </div>

      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
        steps={commercialLoanProcessSteps}
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
            heading: "Reliable funding partner for business growth",
            description:
              "We needed funding to expand our operations, and the team made the entire commercial finance process seamless.  They understood our business needs and secured a solution with competitive rates and flexible terms.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "Fast approvals and expert financial guidance",
            description:
              "Getting the right business loan was critical for our cash flow, and they delivered beyond expectations.  From lender comparison to final approval, everything was handled professionally and efficiently.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
