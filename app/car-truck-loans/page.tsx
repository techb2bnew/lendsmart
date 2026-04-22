import Link from "next/link";
import MainSection from "../pages-component/MainSection";
import AboutService from "../service/AboutService";
import LendingSolutions from "../pages-component/LendingSolutions";
import LoanSupport from "../pages-component/LoanSupport";
import LoanProcess from "../pages-component/LoanProcess";
import type { LoanProcessStep } from "../pages-component/LoanProcess";
import ServiceStatsBar from "../service/ServiceStatsBar";
import Testimonials from "../pages-component/Testimonials";

const financeOptions = [
  {
    id: "car-loans",
    title: "Car loans",
    description:
      "Finance your car with flexible options tailored to your needs. Choose between personal or business finance, with solutions available for both new and used vehicles.",
  },
  {
    id: "truck-loans",
    title: "Truck loans",
    description:
      "Get the right funding for your truck with flexible personal or business finance options. We help you compare rates and lenders to offer cost-effective solutions with low upfront investment.",
  },
];

const carTruckLoanSteps: LoanProcessStep[] = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out via call, WhatsApp, or online form to discuss your vehicle finance needs.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Eligibility\nCheck",
    desc: "We assess your income, credit profile, and budget to identify suitable finance options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare lenders to secure low rates and flexible repayment options for your vehicle.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist with documentation and ensure a quick and smooth application process.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nSettlement",
    desc: "Get fast approval and complete settlement so you can own your vehicle with confidence.",
    icon: "/approved.png",
  },
];

export default function CarTruckLoansPage() {
  return (
    <>
      <MainSection
        title="Services / Car / Truck Loans"
        titleClassName="mb-3 text-[13px] font-semibold tracking-wide text-[#79c44a]"
        titleContent={
          <>
            <Link href="/services" className="text-[#79c44a] hover:text-[#5ea933]">
              Services
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">Car / Truck Loans</span>
          </>
        }
        heading="Car / Truck Loan Made Easy"
        description="Looking to buy a car or truck? Compare multiple lenders, get fast approvals, and secure a personalised vehicle loan with flexible options."
        featurePoints={["No hidden fees", "Instant quote", "Quick & simple process"]}
        image="/service/truck-loan-main.png"
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413208624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413208624"
      />

      <div className=" py-6 sm:py-8 lg:py-10">
        <AboutService
          title="About Car / Truck Loans"
          description1="At LendSmart Mortgages, we provide financing options for personal and commercial vehicles."
          description2="Whether you are buying a car for personal use or a truck for business, we help you find suitable loan solutions."
          ourGoalHeading="Our goal is to provide"
          ourGoalDescription="simple, transparent, and flexible vehicle finance."
          collageImageSrc="/service/about-truck.png"
          collageImageAlt="Car and truck finance options"
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
          title="Car /Truck Finance Options"
          subtitle="There are so many Loan & financing options"
          solutions={financeOptions}
          chatButtonText="Click here to chat"
          chatButtonLink="https://wa.me/61413208624"
          ctaButtonText="Get Loan Options"
          ctaButtonLink="tel:0413208624"
          rightImage="/service/finance.png"
          rightImageClassName="object-contain object-center"
        /> 

      <div className="pt-8 bg-[#eaf2df]  -mt-8 sm:-mt-10 lg:-mt-12">
        <LoanSupport
          highlightText="Benefits"
          normalText="of Car / Truck"
          breakText="Loans"
          description="Most people find that mortgage financing is complicated and confusing. We help you buy your dream home by simplifying the mortgage financing process with personalized loan options that save you time and money."
          supportItems={[
            { icon: "/home.png", label: "Flexible repayment options" },
            { icon: "/signing.png", label: "Competitive interest rates" },
            { icon: "/assets.png", label: "Fast approvals" },
            { icon: "/agreement.png", label: "Simple application process" },
          ]}
          bottomContent={{
            blueText: "",
            greenText: "",
            description: "Ready to finance your vehicle?",
          }}
          imageSrc="/service/truck-benefit.png"
          imageAlt="Car and truck loan benefits"
          supportCardBgClassName="bg-white"
        />
      </div>

      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
        steps={carTruckLoanSteps}
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
            heading: "Smooth process from application to driving",
            description:
              "Buying my car was a big decision, but the team made the financing process incredibly easy. They helped me compare lenders and secure a great deal with flexible repayment options. I was able to drive away sooner than expected!",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "Fast approval and hassle-free experience",
            description:
              "I needed quick vehicle finance for my business, and they delivered exactly what I was looking for. The approval was fast, documentation was simple, and the entire process was stress-free. Highly recommend their services!",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
