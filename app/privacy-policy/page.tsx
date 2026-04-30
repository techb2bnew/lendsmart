import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LendSmart Mortgages Australia",
  description:
    "Learn how LendSmart Mortgages collects, uses, and protects your personal information in accordance with Australian privacy laws and lending regulations.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: April 2026</p>

        <div className="space-y-8 text-gray-600 whitespace-pre-line">

          <p>
In handling your personal information, Thrifty Home Loans is committed to complying with the Privacy Act 1988 and the Australian Privacy Principles.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              How and why we collect your personal information
            </h2>
            <p>
We collect personal information from you when you apply for or use our products and services. In particular, we collect it so we can:

• provide you with the products and services you require, which may include financial and insurance products and services; and
• provide you with information about products and services available to you from Thrifty Home Loans and associated businesses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              Providing Your Personal Information to Other Organisations
            </h2>
            <p>
In providing products and services to you it may be necessary for us to provide your personal information to other organisations with which we conduct business. This includes outsource financial pty ltd (ACN 131 090 705) which is our mortgage aggregator.

Other such organisations include related entities, mortgage managers, lenders, solicitors and legal advisers, accountants and auditors, printers and mailing services, insurers, collection agents, conveyancers and government agencies which regulate our products and services.

Your personal information is only provided to those entities to the extent necessary to enable us to provide our products and services to you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              If your personal information is not provided
            </h2>
            <p>
In order to provide products and services to you and to assist you in applying for a home loan and related products and securities, we require information about you. If you do not provide us with all of the information we request, we may be unable to supply to you the product or service that you require.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              Your rights
            </h2>
            <p>
The Privacy Act gives you rights to access the personal information we hold about you, and you can ask us to correct the information if it is inaccurate.

You can gain access to the information we hold about you by contacting us at 0413206624 or outsource financial Pty Ltd on 1300 781 481.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              Consent to provide your personal information to a credit reporting body (CRB)
            </h2>
            <p>
If you consent to us doing so, we may obtain a report or information about your consumer or commercial credit worthiness from a CRB. We may disclose personal information such as your name, date of birth, drivers licence and address to the CRB to obtain an assessment of whether that personal information matches the information held by it.

By signing this document below, I/we appoint Thrifty Home Loans as our agent to obtain a credit report on my/our behalf.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              Electronic Communications Consent
            </h2>
            <p>
By providing your email address, you consent to receiving notices and other documents from us by email to the email address provided, and you understand that if you give this consent:

• we may no longer send you paper copies of notices and other documents.
• you should regularly check your email address for documents; and
• you may withdraw your consent to receiving documents by email at any time.

You also confirm that you have the facilities to print or store any notice or document that we send you by email, if desired.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">
              Marketing Information
            </h2>
            <p>
If you consent to us doing so, we may provide you with information from time to time about new products and services available to you from or other businesses with whom we have a relationship. Your consent to our providing this information to you will be implied unless you notify us that you do not wish to receive this information.

By signing this document below, I/we consent to receive marketing information.

You agree that we may collect, use, and disclose your information as specified above.
            </p>
          </div> 

        </div>
      </div>
    </div>
  );
}
