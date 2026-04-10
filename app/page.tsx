import About from "./pages-component/About";

import Hero from "./pages-component/Hero";
import LoanProcess from "./pages-component/LoanProcess";
import LoanServices from "./pages-component/LoanServices";
import LoanSupport from "./pages-component/LoanSupport";
import Stats from "./pages-component/Stats";
import Testimonials from "./pages-component/Testimonials";
import WhyChoose from "./pages-component/WhyChoose";
export default function Home() {
  return (
    <>
      <Hero />
      <About
        description1="LendSmart Mortgages helps individuals, families, and businessesaccess the right loan solutions with confidence."
        description2="We work with a wide network of lenders to help you find loan options that suit your financial goals. Whether you arepurchasing a home, financing a vehicle, or expanding yourbusiness, we guide you through the entire loan process."
        gaolHeading="Our goal is to make borrowing"
        gaolDescription=" simple, transparent, and stress-free."
        imageSrc="/land-smart.png"
      />
      <LoanServices
        title="Our Loan Services"
        description="There are so many Loan & financing options"
      />
      <WhyChoose />
      <LoanProcess
        normalText="How Our"
        highlightText="Loan Process"
        breakText="Works"
        description="Choosing the right loan can be complicated. At LendSmart Mortgages, we simplify the process and help you make informed decisions."
      />
      <LoanSupport
        highlightText="Loan Support"
        normalText="for"
        breakText="Different Needs"
        description="Most people find that mortgage financing is complicated and confusing. We help you buy your dream home by simplifying the mortgage financing process with personalized loan options that save you time and money."
      />
      <Stats />
      <Testimonials
        title="Testimonials"
        description="Clients trust LendSmart Mortgages for reliable loan guidance and support."
      />

    </>
  );
}
