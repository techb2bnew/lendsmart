import Image from "next/image";


export default function Hero() {
  const callIcon = ((
    <svg width={21} height={21} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5679 20.5071C22.5551 19.5072 21.2908 19.5072 20.2845 20.5071C19.5168 21.2683 18.7492 22.0295 17.9944 22.8036C17.788 23.0165 17.6138 23.0616 17.3622 22.9197C16.8655 22.6488 16.3366 22.4294 15.8592 22.1327C13.6337 20.7329 11.7694 18.9331 10.118 16.9076C9.29873 15.9012 8.56979 14.8239 8.06017 13.6112C7.95696 13.3661 7.97631 13.2048 8.17629 13.0048C8.94393 12.263 9.69223 11.5018 10.447 10.7406C11.4985 9.68265 11.4985 8.44409 10.4405 7.37971C9.8406 6.77334 9.24067 6.17986 8.64075 5.57349C8.02147 4.95421 7.40864 4.32848 6.78291 3.71565C5.77014 2.72868 4.50578 2.72868 3.49945 3.7221C2.72535 4.4833 1.98351 5.26385 1.19651 6.01214C0.467572 6.70238 0.0998754 7.54743 0.0224657 8.53441C-0.1001 10.1407 0.2934 11.6566 0.848169 13.1338C1.98351 16.1915 3.71233 18.9073 5.80884 21.3973C8.64075 24.7646 12.021 27.4288 15.9753 29.3512C17.7557 30.2156 19.6007 30.88 21.6069 30.9897C22.9873 31.0671 24.1872 30.7187 25.1484 29.6414C25.8063 28.9061 26.5482 28.2352 27.2449 27.532C28.277 26.487 28.2835 25.2226 27.2578 24.1905C26.0321 22.9584 24.8 21.7328 23.5679 20.5071Z"fill="white"/>
      <path d="M22.3359 15.3658L24.7163 14.9594C24.3421 12.7726 23.31 10.7922 21.7425 9.21821C20.0846 7.56035 17.9881 6.51532 15.6787 6.19278L15.3433 8.58603C17.1301 8.83761 18.7557 9.64396 20.0394 10.9277C21.2522 12.1404 22.0457 13.6757 22.3359 15.3658Z"fill="white"/>
      <path d="M26.0579 5.01873C23.3098 2.27068 19.8329 0.535417 15.9946 0L15.6592 2.39325C18.9749 2.85771 21.981 4.36075 24.3549 6.72819C26.6062 8.97953 28.0834 11.8243 28.6189 14.953L30.9992 14.5466C30.3735 10.9212 28.664 7.63131 26.0579 5.01873Z" fill="white" />
    </svg>

  ));
  return (
    <section  id="home" className="relative opacity-100 bg-white px-4 lg:px-8 overflow-hidden">
      {/* top content area */}
      <div className="max-w-[1440px] mx-auto pt-10 sm:pt-14 lg:pt-16 relative z-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-start gap-10 lg:gap-6">
          {/* left content */}
          <div className="pt-6 lg:pt-10">
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-normal md:leading-[1.08] tracking-[-0.02em] text-[#222222]">
              Smart <span className="text-[#84c441]">Loan</span> Solutions for{" "}
              <span className="block">Your Financial Goals</span>
            </h1>

            <p className="mt-4 text-[14px] leading-6 text-[#333333]">
              We make the loan process simple, transparent, and tailored to your
              needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="tel:0413208624"
                className="inline-flex h-[42px] items-center gap-2 rounded-[5px] bg-[#3f7416] hover:bg-[#0479c3] px-5 text-white shadow-sm transition hover:opacity-95">
               {callIcon}
                <span className="text-[14px] font-semibold">Call Now</span>
              </a>

              <a
                href="https://wa.me/61413208624"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-[#cfcfcf] pb-1 text-[14px] font-semibold text-black hover:text-[#0479c3] transition">

                <Image
                  src="/icon.png"
                  alt="Whatsapp"
                  width={30}
                  height={30}
                  priority
                  className="object-contain"
                />
                <span>Chat With Us</span>
              </a>
            </div>
          </div>

          {/* top right image */}
          <div className="relative flex justify-center lg:justify-end lg:pr-8  z-10">
            <div className="relative h-[250px] w-full max-w-[300px] sm:h-[290px] sm:max-w-[350px] lg:h-[400px] lg:max-w-[500px] overflow-hidden rounded-[16px] ">
              <Image
                src="/hero.png"
                alt="Hero house"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed mint band: starts ~28% below image top (::before), image sits above (z-10) */}
      <div className="relative z-10 mt-[-40px] md:mt-[-10px] lg:mt-[-60px] w-screen max-w-[100vw] left-1/2 -translate-x-1/2 pb-10 lg:pb-14">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-0">
          <div
            className="relative mx-auto w-full
              before:pointer-events-none before:absolute before:left-1/2 before:top-[26%] sm:before:top-[27%] lg:before:top-[28%]
              before:bottom-[-48px] lg:before:bottom-[-56px] before:z-0 before:w-screen before:-translate-x-1/2 before:bg-[#F4FBE9]
              before:content-['']"
          >
            <div className="relative z-10 w-full overflow-hidden rounded-[14px] shadow-[0_16px_35px_rgba(0,0,0,0.14)]">
              <div className="relative h-[200px] w-full min-h-[180px] sm:h-[300px] md:h-[360px] lg:h-[530px]">
                <Image
                  src="/hero-banner.png"
                  alt="Hero banner"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}