import Link from "next/link";
import MainSection from "../pages-component/MainSection";
import AboutService from "../service/AboutService";
import LendingSolutions from "../pages-component/LendingSolutions";
import LoanSupport from "../pages-component/LoanSupport";
import LoanProcess from "../pages-component/LoanProcess";
import type { LoanProcessStep } from "../pages-component/LoanProcess";
import ServiceStatsBar from "../service/ServiceStatsBar";
import Testimonials from "../pages-component/Testimonials";

const constructionOptions = [
  {
    id: "fund-released",
    title: "Funds are released in stages",
    description: "Finance essential tools and machinery without large upfront costs.",
  },
  {
    id: "interest-used-funds",
    title: "Interest applies only to used funds",
    description: "Pay interest only on the amount drawn down during each stage of your project.",
  },
  {
    id: "aligned-payments",
    title: "Payments align with construction progress",
    description: "Repayments are structured to match your build timeline and cash flow.",
  },
  {
    id: "smooth-approval",
    title: "Smooth approval process",
    description: "Get end-to-end support from assessment to settlement with faster approvals.",
  },
];

const constructionLoanSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out to discuss your construction plans, budget, and financing requirements.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Project & Financial\nAssessment",
    desc: "We review your financial profile, project plans, and estimated costs to determine suitable loan options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare multiple lenders to secure competitive rates and the right funding structure for your construction project.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist with documentation, builder details, and ensure a smooth application process.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nFund Disbursement",
    desc: "Get fast approval and staged fund releases aligned with your construction progress.",
    icon: "/approved.png",
  },
];

export default function ConstructionLoansPage() {
  return (
    <>
      <MainSection
        title="Services / Construction Loans"
        titleClassName="mb-3 text-[13px] font-semibold tracking-wide text-[#79c44a]"
        titleContent={
          <>
            <Link href="/services" className="text-[#79c44a] hover:text-[#5ea933]">
              Services
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">Construction Loans</span>
          </>
        }
        heading="Construction Loans for Your Dream Build"
        description="Building a new home or project?"
        extraDescription="Get flexible funding with access to multiple lenders, faster approvals, and solutions tailored to your needs."
        featurePoints={["Access to multiple lenders", "Fast approvals", "Personalized loan solutions"]}
        image="/service/construction-main.png"
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413208624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413208624"
      />

      <div className="py-6 sm:py-8 lg:py-10">
        <AboutService
          title="About Construction Loans"
          description1="Construction loans are designed to fund building projects in stages."
          description2="At LendSmart Mortgages, we guide you through the process and help you secure suitable loan options."
          ourGoalHeading="Our goal is to provide"
          ourGoalDescription="smooth, transparent, and stage-based funding support."
          collageImageSrc="/service/about-construction.png"
          collageImageAlt="About construction loans"
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
        title="How Construction Loans Work"
        subtitle="There are so many Loan & financing options"
        solutions={constructionOptions}
        chatButtonText="Click here to chat"
        chatButtonLink="https://wa.me/61413208624"
        ctaButtonText="Get Loan Options"
        ctaButtonLink="tel:0413208624"
        rightImage="/service/construction-work.png"
        rightImageClassName="object-cover object-center"
      />

      <div className="bg-[#eaf2df] pt-8 -mt-8 sm:-mt-10 lg:-mt-12">
        <LoanSupport
          highlightText=""
          normalText="Understanding"
          breakText="Construction Loans"
          description="How construction loans work\n• Progress payments (drawdowns at each stage)\n• Interest charged only on funds used\n• Payments aligned with construction stages"
          supportItems={[
            { icon: "/home.png", label: "Flexible funding structure" },
            { icon: "/signing.png", label: "Expert guidance" },
            { icon: "/assets.png", label: "Access to multiple lenders" },
            { icon: "/agreement.png", label: "Smooth approval process" },
          ]}
          bottomContent={{
            blueText: "",
            greenText: "",
            description: "Ready to finance your project?",
          }}
          imageSrc="/family.png"
          imageAlt="Understanding construction loans"
          supportCardBgClassName="bg-white"
        />
      </div>

      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
        steps={constructionLoanSteps}
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
            heading: "Smooth construction funding from start to finish",
            description:
              "Building our home was a big project, but the team made the construction loan process simple and stress-free. They guided us through every stage and arranged funding with flexible drawdown options. Everything stayed on track without any delays.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "Flexible funding and excellent support",
            description:
              "We needed a construction loan with staged payments, and they delivered exactly what we were looking for. From lender comparison to final approval, the entire process was handled professionally. Highly recommended for anyone planning a construction project.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
