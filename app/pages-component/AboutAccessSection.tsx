import Image from "next/image";

export default function AboutAccessSection() {
  const points = [
    "We manage the paperwork and communication, and follow-ups so you do not have to.",
    "Compare suitable loan options",
    "Help identify competitive solutions",
    "Structure finance effectively",
    "Simplify the application process",
  ];

  return (
    <section className="bg-white  pb-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold text-black sm:text-[36px]">
            Access to <span className="text-[#7cc242]">Multiple Lenders</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[760px] text-[14px] leading-6 text-[#2f2f2f] px-2">
            Searching for loans individually can be time-consuming and confusing. LendSmart Mortgages works with a broad panel of lenders, giving clients access to a wide range of loan products and financing options.
          </p>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[10px] px-5">
          <div className="relative h-[180px] sm:h-[300px] lg:h-[550px]">
            <Image src="/about/multiple.png" alt="Access to lenders" fill className="object-cover" />
          </div> 
        </div>
      </div>
    </section>
  );
}
