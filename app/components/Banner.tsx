"use client";
import Image from "next/image";
import { memo } from "react";

const Banner = (props:any) => {
  const {
    bredcrumbs,
    title,
    description1,
    description2,
    serviceItems,
    callToAction,
    chatToAction,
    image,
  } = props;

  const callIcon = (
    <svg width={21} height={21} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5679 20.5071C22.5551 19.5072 21.2908 19.5072 20.2845 20.5071C19.5168 21.2683 18.7492 22.0295 17.9944 22.8036C17.788 23.0165 17.6138 23.0616 17.3622 22.9197C16.8655 22.6488 16.3366 22.4294 15.8592 22.1327C13.6337 20.7329 11.7694 18.9331 10.118 16.9076C9.29873 15.9012 8.56979 14.8239 8.06017 13.6112C7.95696 13.3661 7.97631 13.2048 8.17629 13.0048C8.94393 12.263 9.69223 11.5018 10.447 10.7406C11.4985 9.68265 11.4985 8.44409 10.4405 7.37971C9.8406 6.77334 9.24067 6.17986 8.64075 5.57349C8.02147 4.95421 7.40864 4.32848 6.78291 3.71565C5.77014 2.72868 4.50578 2.72868 3.49945 3.7221C2.72535 4.4833 1.98351 5.26385 1.19651 6.01214C0.467572 6.70238 0.0998754 7.54743 0.0224657 8.53441C-0.1001 10.1407 0.2934 11.6566 0.848169 13.1338C1.98351 16.1915 3.71233 18.9073 5.80884 21.3973C8.64075 24.7646 12.021 27.4288 15.9753 29.3512C17.7557 30.2156 19.6007 30.88 21.6069 30.9897C22.9873 31.0671 24.1872 30.7187 25.1484 29.6414C25.8063 28.9061 26.5482 28.2352 27.2449 27.532C28.277 26.487 28.2835 25.2226 27.2578 24.1905C26.0321 22.9584 24.8 21.7328 23.5679 20.5071Z" fill="white" />
      <path d="M22.3359 15.3658L24.7163 14.9594C24.3421 12.7726 23.31 10.7922 21.7425 9.21821C20.0846 7.56035 17.9881 6.51532 15.6787 6.19278L15.3433 8.58603C17.1301 8.83761 18.7557 9.64396 20.0394 10.9277C21.2522 12.1404 22.0457 13.6757 22.3359 15.3658Z" fill="white" />
      <path d="M26.0579 5.01873C23.3098 2.27068 19.8329 0.535417 15.9946 0L15.6592 2.39325C18.9749 2.85771 21.981 4.36075 24.3549 6.72819C26.6062 8.97953 28.0834 11.8243 28.6189 14.953L30.9992 14.5466C30.3735 10.9212 28.664 7.63131 26.0579 5.01873Z" fill="white" />
    </svg>
  );

  return (
    <div className="bg-[#F4FBE9] py-12 sm:py-16 md:py-20 lg:py-[60px] xl:py-[70px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-0">
        <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-[55%] lg:w-[60%]">

            {/* Breadcrumbs */}
            {bredcrumbs && (
              <p className="text-xs sm:text-sm mb-2 sm:mb-3">
                <span className="text-[#7EC74C] font-medium">{bredcrumbs[0]}</span>
                {bredcrumbs.slice(1).map((crumb:any, index:any) => (
                  <span key={index} className="text-gray-600"> / {crumb}</span>
                ))}
              </p>
            )}

            {/* Title */}
            {title && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                {title.split(' ').map((word:any, index:any) => (
                  <span
                    key={index}
                    className={word.toLowerCase() === 'loans' ? 'text-[#7EC74C]' : 'text-gray-900'}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
            )}

            {/* Descriptions */}
            {description1 && (
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {description1}
              </p>
            )}

            {description2 && (
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-1 sm:mt-2">
                {description2}
              </p>
            )}

            {/* Service Items */}
            {serviceItems?.length > 0 && (
              <ul className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                {serviceItems.map((item:any) => (
                  <li key={item.id} className="flex items-center gap-2 sm:gap-3 bg-white/50 px-3 sm:px-4 py-2 rounded-lg">
                    <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6">{item.icon}</span>
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex sm:flex-row gap-3">
              {callToAction && (
                <a
                  href={callToAction.link}
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#3f7416] hover:bg-[#0479c3] px-4 sm:px-5 py-2.5 sm:py-0 sm:h-[42px] text-white shadow-sm transition-all hover:opacity-95 text-sm sm:text-base font-medium"
                >
                  {callIcon}
                  {callToAction.text}
                </a>
              )}

              {chatToAction && (
                <a
                  href={chatToAction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] text-sm sm:text-[14px] font-semibold shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] py-2.5 px-4 sm:py-1 sm:px-2 text-gray-700 hover:bg-[#0479c3] hover:text-white transition-all bg-white"
                >
                  <Image
                    src="/icon.png"
                    alt="Whatsapp"
                    width={24}
                    height={24}
                    priority
                    className="object-contain sm:w-[30px] sm:h-[30px] w-6 h-6"
                  />
                  {chatToAction.text}
                </a>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[45%] lg:w-[40%] mb-6 md:mb-0">
            {image && (
              <div className="relative w-full max-w-md mx-auto md:max-w-none">
                <Image
                  src={image}
                  alt="banner"
                  width={1000}
                  height={450}
                  priority
                  quality={85}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);