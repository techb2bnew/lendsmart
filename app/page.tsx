import About from "./pages-component/About";

import Hero from "./pages-component/Hero";
import LoanProcess from "./pages-component/LoanProcess";
import LoanServices from "./pages-component/LoanServices";
import LoanSupport from "./pages-component/LoanSupport";
import Stats from "./pages-component/Stats";
import Testimonials from "./pages-component/Testimonials";
import WhyChoose from "./pages-component/WhyChoose";
import type { Metadata } from "next";
import { pageMetadata } from "./lib/site";
export const metadata: Metadata = pageMetadata(
  "LendSmart Mortgages | Smart Loan Solutions in Australia",
  "Get fast, reliable loan solutions with LendSmart. Home, personal, business & car loans tailored to your needs. Apply today for quick approvals.",
  "/"
);
export default function Home() {
  return (
    <>
      <Hero />
      <About
        description1="LendSmart Mortgages helps individuals, families, and businesses access the right loan solutions with confidence."
        description2="We work with a wide network of lenders to help you find loan options that suit your financial goals. Whether you are purchasing a home, financing a vehicle, or expanding your business, we guide you through the entire loan process."
        gaolHeading="Our goal is to make borrowing"
        gaolDescription=" simple, transparent, and stress-free."
        imageSrc="/land-smart-v2.png"
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
        reviews={[
          {
            heading: "",
            description:
              "LendSmart made our home loan process incredibly easy. Everything was explained clearly, and we got approval faster than expected. Highly recommended!",
            name: "Michael Anderson",
            time: "3 Days ago",
            image: "/user.png",
          },
          {
            heading: "",
            description:
              "Professional, responsive, and genuinely helpful. We felt supported from application to settlement.",
            name: "Jason K.",
            time: "3 Days ago",
            image: "/user-t.jpg",
          },
          {
            heading: "",
            description:
              "Best mortgage experience we've ever had. Quick communication and great loan options.",
            name: "Priya S.",
            time: "3 Days ago",
            image: "/girl.jpg",
          },
        ]}
      />

    </>
  );
}
