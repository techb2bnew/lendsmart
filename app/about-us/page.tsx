import AboutAccessSection from "../pages-component/AboutAccessSection";
import AboutCommitmentSection from "../pages-component/AboutCommitmentSection";
import AboutStatsSection from "../pages-component/AboutStatsSection";
import MainSection from "../pages-component/MainSection";
import LendingSolutions from "../pages-component/LendingSolutions";
import LoanSupport from "../pages-component/LoanSupport";
import LoanProcess from "../pages-component/LoanProcess";
import Testimonials from "../pages-component/Testimonials";
import WhyChoose from "../pages-component/WhyChoose";

export default function AboutUsPage() {
  return (
    <>
      <MainSection
        title="About Us"
        heading="Smarter Lending Starts with the Right Guidance"
        description="At LendSmart Mortgages, we believe securing finance should be clear, strategic, and stress-free. Whether you are purchasing your first home, refinancing, investing, or growing your business, we help you make informed financial decisions with confidence."
        image="/about/main.png"
        callText="Call Now"
        chatText="Chat With Us"
      />

      <div className="bg-[#EEF4E4] py-6 sm:py-8 lg:py-10"> 
        <LoanSupport
          highlightText=""
          normalText="Our Philosophy"
          breakText=""
          description="Every client's financial situation is unique. Instead of offering one-size-fits-all solutions, we focus on understanding."
          supportItems={[
            { icon: "/home.png", label: "Your financial goals" },
            { icon: "/signing.png", label: "Your borrowing capacity" },
            { icon: "/assets.png", label: "Your future plans" },
            { icon: "/agreement.png", label: "Your risk comfort level" },
          ]}
          bottomContent={{
            blueText: "  ",
            greenText: " ",
            description: "Only then do we recommend loan options designed to support your long-term success. At LendSmart Mortgages, lending is not just about approval - it's about making smart financial choices.",
          }}
          imageSrc="/loan-supported.png"
          imageAlt="Family financial planning"
          showActions
          chatButtonText="Chat With Us"
          ctaButtonText="Get Loan Options"
        />
        </div>
        <div className="-mt-10">
        <LendingSolutions
          title="Lending Solutions We Provide"
          subtitle="We assist individuals and businesses with:"
          solutions={[
            {
              id: "residential",
              title: "Residential Home Loans",
              description: "Finance essential tools and machinery without large upfront costs.",
            },
            {
              id: "commercial",
              title: "Commercial Loans",
              description: "Tailored funding options for offices, retail, and business properties.",
            },
            {
              id: "personal",
              title: "Personal Loans",
              description: "Flexible loans for personal goals, travel, and lifestyle needs.",
            },
            {
              id: "car",
              title: "Car & Truck Finance",
              description: "Vehicle finance with competitive rates and fast approvals.",
            },
            {
              id: "asset",
              title: "Asset Finance",
              description: "Funding support for equipment and business growth assets.",
            },
            {
              id: "construction",
              title: "Construction Loans",
              description: "Structured stage-based lending for property development projects.",
            },
          ]}
          chatButtonText="Click here to chat"
          ctaButtonText="Get Loan Options"
          rightImage="/about/assest.png"
        />
        </div>
        <div className="relative top-[-48px] sm:top-[-80px]">
        <WhyChoose
          showActions
          removeTopOffset
          titlePrefix="Why Choose"
          titleBlue="Lend"
          titleGreen="Smart"
          titleSuffix="Mortgages"
          description="Clients choose LendSmart Mortgages because we focus on service, clarity, and results."
          benefitsHeading="With LendSmart you receive:"
          benefits={[
            "Personalised lending strategy",
            "Clear explanation of loan options",
            "Support from enquiry to settlement",
            "Fast and responsive communication",
            "Long-term client relationships",
          ]}
          chatButtonText="Chat With Us"
          ctaButtonText="Get Loan Options"
          hideHandImage
        />
        </div>
      <AboutAccessSection />
      <div className="bg-[#EEF4E4]">
      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
        buttonText="Chat With Us"
        buttonLink="https://wa.me/61413208624"
      />
      </div>
      <AboutCommitmentSection />
      <AboutStatsSection /> 
       <Testimonials
        title="Testimonials"
        description="Clients trust LendSmart Mortgages for reliable loan guidance and support."
        reviews={[
          {
            heading: "Professional service and trusted guidance",
            description:"From the very first interaction, the team was professional, responsive, and genuinely helpful. They took the time to understand our needs and provided clear, honest advice throughout the process. It is rare to find such reliable and client-focused service.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "A team you can rely on",
            description:"We had a great experience working with them. Their communication was excellent, and they made everything simple to understand. The entire process was smooth, transparent, and well-managed from start to finish.",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
        ]}
      />
    </>
  );
}
