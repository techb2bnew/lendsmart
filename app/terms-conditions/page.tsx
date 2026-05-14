import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | LendSmart Mortgages Website Use",
  description:
    "Read the terms and conditions governing the use of the LendSmart Mortgages website, services, loan enquiries, and electronic communications.",
};

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#000000]">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: April 2026</p>

        {terms.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-[#000000]">
              {section.title}
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p className="text-gray-600">LendSmart Mortgages </p>
          
          <p className="text-gray-600">
            Phone:{" "}
            <a
              href="tel:0413 206 624"
              className="text-blue-500 hover:underline"
            >
              0413 206 624
            </a>
          </p>
          <p className="text-gray-600">
            Address:{" "}
            <span
              className="text-gray-500"
            >
             4/628 Lower North East Road, Campbelltown SA 5074 
            </span>
            </p>
             <p className="text-gray-600">
            Disclaimer: 
            <span
              className="text-gray-500"
            >
             This document is a general template only and should be reviewed by an Australian solicitor or compliance adviser before publication. 
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const terms = [
  {
    title: "1. General Information",
    content:
      "Information provided on this website is general in nature only and does not constitute financial, legal, taxation, or credit advice. Users should seek independent professional advice before making financial decisions.",
  },
  {
    title: "2. Loan Applications",
    content:
      "Submitting an enquiry or application does not guarantee loan approval. All applications are subject to lender assessment criteria, responsible lending obligations, verification checks, and credit approval.",
  },
  {
    title: "3. Third-Party Services",
    content:
      "LendSmart Mortgages  may work with lenders, aggregators, insurers, and referral partners. We may receive commissions or referral fees in connection with finance arrangements. ",
  },
  {
    title: "4. Accuracy of Information",
    content:
      "While reasonable care is taken to ensure website information is accurate and current, LendSmart Mortgages  does not guarantee completeness, reliability, or accuracy of website content, rates, or product information. ",
  },
  {
    title: "5. Privacy",
    content:
      "By using this website, you consent to the collection and use of your information in accordance with applicable Australian privacy laws and our Privacy Policy. ",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All website content, branding, graphics, and materials remain the intellectual property of LendSmart Mortgages  unless otherwise stated. ",
  },
   {
    title: "7. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, LendSmart Mortgages  is not liable for any direct or indirect loss arising from use of this website or reliance on website information.  ",
  },
   {
    title: "7. Governing Law",
    content:
      "These Terms and Conditions are governed by the laws of South Australia, Australia.   ",
  },
   {
    title: "7. Governing Law",
    content:
      "These Terms and Conditions are governed by the laws of South Australia, Australia.   ",
  },
 
];