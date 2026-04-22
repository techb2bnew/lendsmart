import Link from "next/link";
import MainSection from "../pages-component/MainSection";
import AboutService from "../service/AboutService";
import LendingSolutions from "../pages-component/LendingSolutions";
import LoanSupport from "../pages-component/LoanSupport";
import LoanProcess from "../pages-component/LoanProcess";
import type { LoanProcessStep } from "../pages-component/LoanProcess";
import ServiceStatsBar from "../service/ServiceStatsBar";
import Testimonials from "../pages-component/Testimonials";

const assetFinanceOptions = [
  {
    id: "expert-guidance",
    title: "Expert guidance",
    description: "Finance essential tools and machinery without large upfront costs.",
  },
  {
    id: "funding-structure",
    title: "Flexible funding structure",
    description: "Structured repayment plans designed around your business cash flow.",
  },
  {
    id: "multiple-lenders",
    title: "Access to multiple lenders",
    description: "Compare lender options to secure competitive rates and better terms.",
  },
  {
    id: "quick-approvals",
    title: "Smooth approval process",
    description: "Fast documentation support and smoother approvals from application to settlement.",
  },
];

const assetLoanProcessSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out to discuss your business goals and funding requirements with our finance experts.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Business\nAssessment",
    desc: "We review your financials, cash flow, and business profile to identify the best funding options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare multiple lenders to secure competitive rates and the right funding structure for your business.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Application\n& Documentation",
    desc: "We handle the paperwork and guide you through a smooth and efficient application process.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval\n& Funding",
    desc: "Get fast approvals and access funds quickly to support your business growth.",
    icon: "/approved.png",
  },
];

export default function AssetFinancePage() {
  return (
    <>
      <MainSection
        title="Services / Asset Finance"
        titleClassName="mb-3 text-[13px] font-semibold tracking-wide text-[#79c44a]"
        titleContent={
          <>
            <Link href="/services" className="text-[#79c44a] hover:text-[#5ea933]">
              Services
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">Asset Finance</span>
          </>
        }
        heading="Finance Your Business Assets with Confidence"
        description="Need equipment or machinery for your business? Get the funding you need for equipment and machinery - compare lenders, enjoy fast approvals, and receive customised finance solutions for your business."
        featurePoints={["Competitive rates", "Minimal paperwork", "Hassle-free process"]}
        image="/service/assets-main.png"
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413208624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413208624"
      />

      <div className="py-6 sm:py-8 lg:py-10">
        <AboutService
          title="About Asset Finance"
          description1="Asset finance allows businesses to purchase essential equipment without large upfront costs."
          description2="At LendSmart Mortgages, we help businesses secure funding for a wide range of assets."
          ourGoalHeading="Our goal is to provide"
          ourGoalDescription="simple, transparent, and growth-focused finance support."
          collageImageSrc="/service/about-assest.png"
          collageImageAlt="About asset finance"
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

      <LendingSolutions
        title="What Can Be Financed"
        subtitle="There are so many Loan & financing options"
        solutions={assetFinanceOptions}
        chatButtonText="Click here to chat"
        chatButtonLink="https://wa.me/61413208624"
        ctaButtonText="Get Loan Options"
        ctaButtonLink="tel:0413208624"
        rightImage="/service/financed-assest.png"
        rightImageClassName="object-cover object-center"
      />

      <div className="bg-[#eaf2df] pt-8 -mt-8 sm:-mt-10 lg:-mt-12">
        <LoanSupport
          highlightText="Benefits"
          normalText="of Asset"
          breakText="Finance"
          description="Most people find that mortgage financing is complicated and confusing. We help you buy your dream home by simplifying the mortgage financing process with personalized loan options that save you time and money."
          supportItems={[
            { icon: "/home.png", label: "Preserve cash flow" },
            { icon: "/signing.png", label: "Flexible repayment structures" },
            { icon: "/assets.png", label: "Access to modern equipment" },
            { icon: "/agreement.png", label: "Quick approvals" },
          ]}
          bottomContent={{
            blueText: "",
            greenText: "",
            description: "Ready to finance your vehicle?",
          }}
          imageSrc="/family.png"
          imageAlt="Benefits of asset finance"
          supportCardBgClassName="bg-white"
        />
      </div>

      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
        steps={assetLoanProcessSteps}
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
            heading: "Seamless asset finance with great support",
            description:
              "We needed financing for new equipment, and the team made the entire process simple and efficient. They understood our business needs and secured a solution with flexible terms and competitive rates. It helped us upgrade our assets without impacting cash flow.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "Fast approvals and smart financing solutions",
            description:
              "Financing our business assets was crucial for growth, and they handled everything professionally. From comparing lenders to final approval, the process was quick, clear, and hassle-free. Highly recommended for any business looking to invest in assets with confidence.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
