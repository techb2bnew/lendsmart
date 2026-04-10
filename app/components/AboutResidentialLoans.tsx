"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {
    title: string;
    description1: string;
    description2: string;
    ourGoalHeading: string;
    ourGoalDescription: string;
    imageSrc: string;
    // New props for stats section
    stat1Value?: number;
    stat1Suffix?: string;
    stat1Label?: string;
    stat2Value?: number;
    stat2Suffix?: string;
    stat2Label?: string;
    // Client avatars props
    clientCount?: number;
    clientCountLabel?: string;
    clientImages?: string[];
    // CTA button props
    ctaText?: string;
    ctaLink?: string;
    // Show/hide sections
    showStats?: boolean;
    showClients?: boolean;
    showCTA?: boolean;
}

function Counter({
    end,
    duration = 1500,
    suffix = "",
}: {
    end: number;
    duration?: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * end);

            setCount(current);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

const AboutResidentialLoans = ({
    title,
    description1,
    description2,
    ourGoalHeading,
    ourGoalDescription,
    imageSrc,
    // Stats props with defaults
    stat1Value = 78,
    stat1Suffix = "%",
    stat1Label = "Business from Referrals",
    stat2Value = 45,
    stat2Suffix = "+",
    stat2Label = "Minute Verbal Commitment",
    // Client props with defaults
    clientCount = 8665,
    clientCountLabel = "Popular Clients",
    clientImages = [
        "1507003211169-0a1dd7228f2d",
        "1494790108377-be9c29b29330",
        "1472099645785-5658abf4ff4e"
    ],
    // CTA props with defaults
    ctaText = "Know More About Us",
    ctaLink = "/about",
    // Visibility toggles
    showStats = true,
    showClients = true,
    showCTA = true,
}: Props) => {
    const rightArrow = ((
        <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_127_97)"> <path d="M19.8678 9.6795L15.3225 5.13411C15.1592 4.94345 14.8722 4.92122 14.6816 5.08454C14.4909 5.24782 14.4687 5.53477 14.632 5.72543C14.6473 5.7432 14.6638 5.7598 14.6816 5.775L18.4497 9.54767L0.454526 9.54766C0.203515 9.54766 2.66186e-06 9.75118 2.61796e-06 10.0022C2.57407e-06 10.2533 0.203515 10.4567 0.454526 10.4567L18.4497 10.4568L14.6816 14.2248C14.4909 14.3881 14.4687 14.6751 14.632 14.8657C14.7953 15.0564 15.0822 15.0786 15.2729 14.9153C15.2907 14.9001 15.3073 14.8835 15.3225 14.8657L19.8679 10.3203C20.0441 10.1431 20.0441 9.8568 19.8678 9.6795Z" fill="currentColor" /></g><defs><clipPath id="clip0_127_97"><rect width={20} height={20} fill="white" /></clipPath></defs></svg>
    ));

    // Check if we should show the right section (image + stats)
    const showRightSection = imageSrc || showStats || showClients || showCTA;

    return (
        <>
            <div className='py-10 md:py-14 lg:py-18 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-[1440px] mx-auto'>
                    <div className='grid grid-cols-1 items-end'>
                        <div className='lg:pt-2'>
                            {/* Title */}
                            {title && (
                                <h2 className='text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-extrabold leading-normal md:leading-[1.05] tracking-[-0.02em] text-black'>
                                    {title.split(' ').map((word, index) => (
                                        <span
                                            key={index}
                                            className={word.toLowerCase() === 'loans' ? 'text-[#7EC74C]' : 'text-gray-900'}
                                        >
                                            {word}{' '}
                                        </span>
                                    ))}
                                </h2>
                            )}

                            {/* Content wrapper */}
                            {(description1 || description2 || ourGoalHeading || ourGoalDescription) && (
                                <div className={`${title ? 'mt-4 md:mt-5' : ''} border-l-[3px] md:border-l-[5px] border-[#79c44a] pl-3 md:pl-4`}>
                                    {description1 && (
                                        <p className='text-[13px] sm:text-[14px] md:text-[15px] leading-6 md:leading-7 text-[#222]'>{description1}</p>
                                    )}
                                    {description2 && (
                                        <p className='mt-1 text-[13px] sm:text-[14px] md:text-[15px] leading-6 md:leading-7 text-[#222]'>{description2}</p>
                                    )}

                                    {/* Combined ourGoalHeading and ourGoalDescription */}
                                    {(ourGoalHeading || ourGoalDescription) && (
                                        <p className='mt-2 text-[13px] sm:text-[14px] md:text-[15px] font-semibold leading-6 md:leading-7 text-black'>
                                            {ourGoalHeading && ourGoalHeading}
                                            {ourGoalHeading && ourGoalDescription && ' '}
                                            {ourGoalDescription && (
                                                <span className='text-[#79c44a]'>{ourGoalDescription}</span>
                                            )}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Section - Only show if there's content */}
                    {showRightSection && (
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-3 md:gap-12 lg:gap-20 mt-8 md:mt-10 lg:mt-10'>
                            {/* Image Section */}
                            {imageSrc && (
                                <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                                    <div className='relative w-full max-w-[463px] lg:max-w-none'>
                                        <Image
                                            width={463}
                                            height={398}
                                            priority
                                            quality={75}
                                            src={imageSrc}
                                            alt="About Residential Loans"
                                            className='w-full h-auto object-cover rounded-lg'
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Content Section */}
                            <div className='w-full lg:w-1/2'>
                                {/* Stats Section */}
                                {showStats && (stat1Value > 0 || stat2Value > 0) && (
                                    <>
                                        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-16 flex flex-wrap items-start gap-8 sm:gap-12 md:gap-14 lg:gap-20">
                                            {stat1Value > 0 && (
                                                <div className="min-w-[90px] sm:min-w-[100px] md:min-w-[110px]">
                                                    <div className="text-[20px] sm:text-[22px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-none font-semibold text-black">
                                                        <Counter end={stat1Value} suffix={stat1Suffix} />
                                                    </div>
                                                    <div className="mt-1 md:mt-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-4 md:leading-5 text-black">
                                                        {stat1Label}
                                                    </div>
                                                </div>
                                            )}

                                            {stat2Value > 0 && (
                                                <div className="min-w-[90px] sm:min-w-[100px] md:min-w-[110px]">
                                                    <div className="text-[20px] sm:text-[22px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-none font-semibold text-black">
                                                        <Counter end={stat2Value} suffix={stat2Suffix} />
                                                    </div>
                                                    <div className="mt-1 md:mt-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-4 md:leading-5 text-black">
                                                        {stat2Label}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Divider */}
                                        <div className="mt-6 md:mt-8 h-[1px] w-full max-w-[500px] bg-[#d7dfca]" />
                                    </>
                                )}

                                {/* Bottom Row with Clients and CTA */}
                                <div className="mt-4 md:mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-0 sm:justify-between max-w-[500px]">
                                    {/* Clients Section */}
                                    {showClients && clientImages.length > 0 && (
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="flex -space-x-2">
                                                {clientImages.slice(0, 3).map((imageUrl, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-white overflow-hidden"
                                                        style={{ backgroundColor: "var(--color-green-mint)" }}
                                                    >
                                                        <Image
                                                            src={`https://images.unsplash.com/photo-${imageUrl}?w=80&q=80`}
                                                            alt={`Client ${index + 1}`}
                                                            width={36}
                                                            height={36}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="text-[11px] sm:text-[12px] md:text-[13px] leading-[1.1] text-black">
                                                <div className="font-bold">{clientCount}+</div>
                                                <div className="whitespace-nowrap">{clientCountLabel}</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA Button */}
                                    {showCTA && ctaText && ctaLink && (
                                        <Link href={ctaLink}
                                            className="inline-flex h-[36px] sm:h-[38px] md:h-[42px] items-center justify-center gap-2 rounded-full border border-[#8ebc64] hover:border-[#0781c3] px-4 sm:px-6 md:px-8 text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#5e9730] hover:text-white transition-all duration-300 hover:bg-[#0781c3] whitespace-nowrap">
                                            {ctaText}
                                            <span className="">{rightArrow}</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default AboutResidentialLoans