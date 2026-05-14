import Image from "next/image";

export default function AboutCommitmentSection() {
  const commitments = [
    "Professional and honest advice",
    "Transparent communication",
    "Efficient loan processing",
    "Ongoing support even after settlement",
  ];

  return (
    <section className="bg-white px-4 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative h-[250px] overflow-hidden rounded-[18px] sm:h-[320px] lg:h-[500px]">
          <Image src="/about/our.png" alt="Our commitment" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-[24px] font-extrabold leading-tight text-black sm:text-[36px] lg:text-[40px]">
            Our Commitment to You
          </h2>
          <div className="mt-4 border-l-[5px] border-[#79c44a] pl-4">
            <p className="text-[15px] font-semibold text-black">When you work with LendSmart Mortgages, you can expect:</p>
            <ul className="mt-2 space-y-1 text-[15px] text-[#202020]">
              {commitments.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-[15px] leading-6 text-[#333]">
            Our goal is to become your trusted lending partner for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}
