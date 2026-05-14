import AboutStatsSection from "../pages-component/AboutStatsSection";
import ContactFormMapSection from "../pages-component/ContactFormMapSection";
import MainSection from "../pages-component/MainSection";
import SpeakWithExpertSection from "../pages-component/SpeakWithExpertSection";
import Testimonials from "../pages-component/Testimonials";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact LendSmart | Speak to Loan Experts",
  description:
    "Need help with loans? Contact LendSmart today and speak with our experts for quick support, guidance, and personalized loan solutions.",
};
export default function ContactPage() {
  return (
    <>
      <MainSection
        title="Contact Us"
        heading="Speak With a Loan Expert Today"
        description="Have a question about loans or need expert guidance?"
        extraDescription="Get expert guidance with faster approvals, access to multiple lenders, and personalised loan solutions tailored to your needs."
        featurePoints={[
          "Access to Multiple Trusted Lenders",
          "Fast & Hassle-Free Approvals",
          "Personalised Loan Solutions",
        ]}
        featurePointIcon="/contact/star.png"
        image="/contact/contact.png"
        sectionBgClassName="bg-[#EEF4E4]"
        callText="Call Now"
        chatText="Chat With Us"
      />

      <SpeakWithExpertSection />
      <ContactFormMapSection />
      <AboutStatsSection />
      <Testimonials
        title="Testimonials"
        description="Clients trust LendSmart Mortgages for reliable loan guidance and support."
        reviews={[
          {
            heading: "",
            description:
              "Great advice and support throughout the loan application process. The team helped us understand our loan options clearly and made everything easier.",
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
        ]}
      />
    </>
  );
}
