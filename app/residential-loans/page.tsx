import { memo } from 'react';
import Banner from '../components/Banner';
import { title } from 'process';
import AboutResidentialLoans from '../components/AboutResidentialLoans';
import WhatWeHelpWith from '../components/WhatWeHelpWith';


const Page = () => {
    const services = [
        {
            id: 1,
            title: "Access to 40+ Lenders",
            icon: ((
                <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_457_901)">
                    <path d="M18.4062 9.5C18.4062 10.26 17.4726 10.8864 17.2855 11.587C17.0926 12.3114 17.5809 13.3208 17.2143 13.9546C16.8417 14.5988 15.721 14.676 15.1985 15.1985C14.676 15.721 14.5988 16.8417 13.9546 17.2143C13.3208 17.5809 12.3114 17.0926 11.587 17.2855C10.8864 17.4726 10.26 18.4062 9.5 18.4062C8.74 18.4062 8.11359 17.4726 7.41297 17.2855C6.68859 17.0926 5.67922 17.5809 5.04539 17.2143C4.40117 16.8417 4.32398 15.721 3.80148 15.1985C3.27898 14.676 2.15828 14.5988 1.7857 13.9546C1.41906 13.3208 1.90742 12.3114 1.71445 11.587C1.52742 10.8864 0.59375 10.26 0.59375 9.5C0.59375 8.74 1.52742 8.11359 1.71445 7.41297C1.90742 6.68859 1.41906 5.67922 1.7857 5.04539C2.15828 4.40117 3.27898 4.32398 3.80148 3.80148C4.32398 3.27898 4.40117 2.15828 5.04539 1.7857C5.67922 1.41906 6.68859 1.90742 7.41297 1.71445C8.11359 1.52742 8.74 0.59375 9.5 0.59375C10.26 0.59375 10.8864 1.52742 11.587 1.71445C12.3114 1.90742 13.3208 1.41906 13.9546 1.7857C14.5988 2.15828 14.676 3.27898 15.1985 3.80148C15.721 4.32398 16.8417 4.40117 17.2143 5.04539C17.5809 5.67922 17.0926 6.68859 17.2855 7.41297C17.4726 8.11359 18.4062 8.74 18.4062 9.5Z" fill="#7EC74C" />
                    <path d="M12.0737 6.84593L8.68338 10.2362L6.92588 8.48022C6.54439 8.09874 5.92541 8.09874 5.54393 8.48022C5.16244 8.86171 5.16244 9.48069 5.54393 9.86218L8.00947 12.3277C8.38057 12.6988 8.98322 12.6988 9.35432 12.3277L13.4542 8.22788C13.8356 7.8464 13.8356 7.22741 13.4542 6.84593C13.0727 6.46444 12.4552 6.46444 12.0737 6.84593Z" fill="#FFFCEE" />
                </g><defs><clipPath id="clip0_457_901"><rect width={19} height={19} fill="white" /></clipPath></defs>
                </svg>
            ))
        },
        {
            id: 2,
            title: "Fast Approvals & Quick Processing",
            icon: ((
                <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_457_901)">
                    <path d="M18.4062 9.5C18.4062 10.26 17.4726 10.8864 17.2855 11.587C17.0926 12.3114 17.5809 13.3208 17.2143 13.9546C16.8417 14.5988 15.721 14.676 15.1985 15.1985C14.676 15.721 14.5988 16.8417 13.9546 17.2143C13.3208 17.5809 12.3114 17.0926 11.587 17.2855C10.8864 17.4726 10.26 18.4062 9.5 18.4062C8.74 18.4062 8.11359 17.4726 7.41297 17.2855C6.68859 17.0926 5.67922 17.5809 5.04539 17.2143C4.40117 16.8417 4.32398 15.721 3.80148 15.1985C3.27898 14.676 2.15828 14.5988 1.7857 13.9546C1.41906 13.3208 1.90742 12.3114 1.71445 11.587C1.52742 10.8864 0.59375 10.26 0.59375 9.5C0.59375 8.74 1.52742 8.11359 1.71445 7.41297C1.90742 6.68859 1.41906 5.67922 1.7857 5.04539C2.15828 4.40117 3.27898 4.32398 3.80148 3.80148C4.32398 3.27898 4.40117 2.15828 5.04539 1.7857C5.67922 1.41906 6.68859 1.90742 7.41297 1.71445C8.11359 1.52742 8.74 0.59375 9.5 0.59375C10.26 0.59375 10.8864 1.52742 11.587 1.71445C12.3114 1.90742 13.3208 1.41906 13.9546 1.7857C14.5988 2.15828 14.676 3.27898 15.1985 3.80148C15.721 4.32398 16.8417 4.40117 17.2143 5.04539C17.5809 5.67922 17.0926 6.68859 17.2855 7.41297C17.4726 8.11359 18.4062 8.74 18.4062 9.5Z" fill="#7EC74C" />
                    <path d="M12.0737 6.84593L8.68338 10.2362L6.92588 8.48022C6.54439 8.09874 5.92541 8.09874 5.54393 8.48022C5.16244 8.86171 5.16244 9.48069 5.54393 9.86218L8.00947 12.3277C8.38057 12.6988 8.98322 12.6988 9.35432 12.3277L13.4542 8.22788C13.8356 7.8464 13.8356 7.22741 13.4542 6.84593C13.0727 6.46444 12.4552 6.46444 12.0737 6.84593Z" fill="#FFFCEE" />
                </g><defs><clipPath id="clip0_457_901"><rect width={19} height={19} fill="white" /></clipPath></defs>
                </svg>
            ))
        },
        {
            id: 3,
            title: "Personalised Loan Solutions",
            icon: ((
                <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_457_901)">
                    <path d="M18.4062 9.5C18.4062 10.26 17.4726 10.8864 17.2855 11.587C17.0926 12.3114 17.5809 13.3208 17.2143 13.9546C16.8417 14.5988 15.721 14.676 15.1985 15.1985C14.676 15.721 14.5988 16.8417 13.9546 17.2143C13.3208 17.5809 12.3114 17.0926 11.587 17.2855C10.8864 17.4726 10.26 18.4062 9.5 18.4062C8.74 18.4062 8.11359 17.4726 7.41297 17.2855C6.68859 17.0926 5.67922 17.5809 5.04539 17.2143C4.40117 16.8417 4.32398 15.721 3.80148 15.1985C3.27898 14.676 2.15828 14.5988 1.7857 13.9546C1.41906 13.3208 1.90742 12.3114 1.71445 11.587C1.52742 10.8864 0.59375 10.26 0.59375 9.5C0.59375 8.74 1.52742 8.11359 1.71445 7.41297C1.90742 6.68859 1.41906 5.67922 1.7857 5.04539C2.15828 4.40117 3.27898 4.32398 3.80148 3.80148C4.32398 3.27898 4.40117 2.15828 5.04539 1.7857C5.67922 1.41906 6.68859 1.90742 7.41297 1.71445C8.11359 1.52742 8.74 0.59375 9.5 0.59375C10.26 0.59375 10.8864 1.52742 11.587 1.71445C12.3114 1.90742 13.3208 1.41906 13.9546 1.7857C14.5988 2.15828 14.676 3.27898 15.1985 3.80148C15.721 4.32398 16.8417 4.40117 17.2143 5.04539C17.5809 5.67922 17.0926 6.68859 17.2855 7.41297C17.4726 8.11359 18.4062 8.74 18.4062 9.5Z" fill="#7EC74C" />
                    <path d="M12.0737 6.84593L8.68338 10.2362L6.92588 8.48022C6.54439 8.09874 5.92541 8.09874 5.54393 8.48022C5.16244 8.86171 5.16244 9.48069 5.54393 9.86218L8.00947 12.3277C8.38057 12.6988 8.98322 12.6988 9.35432 12.3277L13.4542 8.22788C13.8356 7.8464 13.8356 7.22741 13.4542 6.84593C13.0727 6.46444 12.4552 6.46444 12.0737 6.84593Z" fill="#FFFCEE" />
                </g> <defs><clipPath id="clip0_457_901"><rect width={19} height={19} fill="white" /></clipPath></defs>
                </svg>
            ))
        }
    ];
    return (
        <>
            <Banner
                bredcrumbs={["Services", "Residential Loans"]}
                title="Home Loans Made Simple"
                description1="Buying your first home, upgrading, or investing?"
                description2="Get access to multiple lenders, fast approvals, and personalised home loan solutions tailored to your needs."
                serviceItems={services}
                callToAction={{      // ✅ Changed from call-to-action
                    text: "Call Now",
                    link: "/contact"
                }}
                chatToAction={{      // ✅ Changed from chat-to-action
                    text: "Chat With Us",
                    link: "https://wa.me/0413 206 624"
                }}
                image="/residental-loan.webp"
            />
            <AboutResidentialLoans
                title="About Residential Loans"
                description1="LendSmart Mortgages helps individuals, families, and businesses access the right loan solutions with confidence."
                description2="We work with a wide network of lenders to help you find loan options that suit your financial goals. Whether you are purchasing a home, financing a vehicle, or expanding your business, we guide you through the entire loan process."
                ourGoalHeading="Our goal is to make borrowing "
                ourGoalDescription="simple, transparent, and stress-free."
                imageSrc="/approved-1.webp"

                // Customize stats
                stat1Value={78}
                stat1Suffix="%"
                stat1Label="Business from Referrals"
                stat2Value={45}
                stat2Suffix="+"
                stat2Label="Minute Verbal Commitment"

                // Customize clients section
                clientCount={8665}
                clientCountLabel="Popular Clients"
                clientImages={[
                    "1507003211169-0a1dd7228f2d",
                    "1494790108377-be9c29b29330",
                    "1472099645785-5658abf4ff4e"
                ]}

                // Customize CTA
                ctaText="Know More About Us"
                ctaLink="/about"

                // Toggle sections
                showStats={true}
                showClients={true}
                showCTA={true}
            />
            <WhatWeHelpWith />
        </>
    );
};

export default memo(Page);