import MainSection from "../pages-component/MainSection";
import LoanProcess from "../pages-component/LoanProcess";
import type { LoanProcessStep } from "../pages-component/LoanProcess";
import Testimonials from "../pages-component/Testimonials";
import AboutService from "../service/AboutService";
import HelpSection from "../service/HelpSection";
import ServiceStatsBar from "../service/ServiceStatsBar";
import Link from "next/link";

const helpItems = [
  { imageSrc: "/service/help.png", title: "First home buyer loans", alt: "First home buyer loans" },
  { imageSrc: "/service/help2.png", title: "Debt consolidation loans", alt: "Debt consolidation loans" },
  { imageSrc: "/service/help3.png", title: "Investment property loans", alt: "Investment property loans" },
  {
    imageSrc: "/service/help4.png",
    title: "Refinancing existing loans",
    alt: "Refinancing existing loans",
    imagePosition: "center 42%",
  },
  {
    imageSrc: "/service/help5.png",
    title: "Loan structuring advice",
    alt: "Loan structuring advice",
    imagePosition: "center 28%",
  },
];

const residentialLoanProcessSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out via call, WhatsApp, or online form to discuss your home loan needs.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Loan\nAssessment",
    desc: "We review your income, credit profile, and eligibility to find suitable home loan options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare multiple lenders to get you the best interest rates and loan terms.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist with documentation and ensure a smooth and quick application process.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nSettlement",
    desc: "Get fast approval and complete settlement so you can move into your new home stress-free.",
    icon: "/approved.png",
  },
];

export default function ResidentialLoansPage() {
  return (
    <>
      <MainSection
        title="Services / Residential Loans"
        titleClassName="mb-3 text-[13px] font-semibold tracking-wide text-[#79c44a]"
        titleContent={
          <>
            <Link href="/services" className="text-[#79c44a] hover:text-[#5ea933]">
              Services
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">Residential Loans</span>
          </>
        }
        heading="Home Loans Made Simple"
        headingHighlight="Loans"
        description="Buying your first home, upgrading, or investing? Get access to multiple lenders, fast approvals, and personalised home loan solutions tailored to your needs."
        featurePoints={[
          "Access to 40+ Lenders",
          "Fast Approvals & Quick Processing",
          "Personalised Loan Solutions",
        ]}
        image="/service/main.png"
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413208624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413208624"
      />

      <AboutService
        title="About Residential Loans"
        description1="LendSmart Mortgages helps individuals, families, and businesses access the right loan solutions with confidence."
        description2="We work with a wide network of lenders to help you find loan options that suit your financial goals. Whether you are purchasing a home, financing a vehicle, or expanding your business, we guide you through the entire loan process."
        ourGoalHeading="Our goal is to make borrowing"
        ourGoalDescription="simple, transparent, and stress-free."
        collageImageSrc="/service/about.png"
        collageImageAlt="Residential loans and family"
        stat1={{ value: 78, suffix: "%", label: "Business from Referrals" }}
        stat2={{ value: 45, suffix: "+", label: "Minute Verbal Commitment" }}
        clientCount={8685}
        clientCountLabel="Popular Clients"
        clientImages={[
          "1507003211169-0a1dd7228f2d",
          "1494790108377-be9c29b29330",
          "1472099645785-5658abf4ff4e",
        ]}
        ctaText="Know More About Us"
        ctaLink="/about-us"
      />

      <HelpSection items={helpItems} />

    
        <LoanProcess
          normalText="How Our"
          highlightText="Loan Process"
          breakText="Works"
          description="Buying your dream home doesn't have to be complicated. We guide you at every step with expert advice, multiple lender options, and fast approvals."
          steps={residentialLoanProcessSteps}
          buttonText="Chat with us"
          buttonLink="https://wa.me/61413208624"
        />
  <div className="bg-[#EEF4E4]"> 
      <ServiceStatsBar
        items={[
          { kind: "count", prefix: "$", value: 250, suffix: "M+", label: "in loans settled" },
          { kind: "count", value: 45, suffix: "+", label: "lenders on panel" },
          { kind: "count", value: 12, suffix: "+", label: "years combined experience" },
          {
            kind: "richtext",
            node: (
              <>
                Serving clients{" "}
                <span className="text-[#79c44a]">across Australia</span>
              </>
            ),
          },
        ]}
      />
      </div>

      <Testimonials
        title="Testimonials"
        description="Clients trust LendSmart Mortgages for reliable loan guidance and support."
        reviews={[
          {
            heading: "Professional service and smooth home buying experience",
            description:
              "Buying our first home felt overwhelming, but the team guided us through every step of the home loan process. They explained all our options clearly and helped us secure a great interest rate.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "Fast approval and excellent support",
            description:
            "We were worried about getting our home loan approved on time, but the team made it happen quicker than expected. They handled everything from lender comparison to documentation with complete professionalism.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
