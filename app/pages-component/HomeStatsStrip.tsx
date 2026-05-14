const stats = [
  { value: "$250M+", label: "Invoices settled" },
  { value: "45+", label: "Lenders on panel" },
  { value: "12+", label: "Years combined experience" },
  // { value: "Serving clients", label: "across Australia" },
];

export default function HomeStatsStrip() {
  return (
    <section className="bg-[#EEF4E4] px-4 py-8 lg:px-10 lg:py-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-5 text-center sm:grid-cols-4">
        {stats.map((item) => (
          <div key={`${item.value}-${item.label}`}>
            <p className="text-[30px] font-extrabold text-black">{item.value}</p>
            <p className="mt-1 text-[13px] text-[#2a2a2a]">{item.label}</p>
          </div>
        ))}
          <div className="text-center"> 
              <div className="mt-3 text-[13px] font-medium leading-5 text-black sm:text-[14px]">
                Serving Clients <span className="text-[#79c44a]">Across Australia</span>
              </div>
            </div>
      </div>
    </section>
  );
}
