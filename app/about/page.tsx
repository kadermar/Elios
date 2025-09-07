"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import CeoLetter from "../components/CeoLetter";
import Team from "../components/Team";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <Navigation />
      <main className="pt-[174px]">
        {/* Hero Section */}
        <div className="content-stretch flex flex-col items-center justify-center relative size-full px-4 md:px-0">
          <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-8 md:gap-[100px] items-start justify-start relative shrink-0 w-full lg:w-[694px]">
              <div className="content-stretch flex flex-col gap-6 md:gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[36px] md:text-[64px] lg:text-[96px] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.76px]" style={{ width: "min-content" }}>
                  <p className="leading-[1.1] md:leading-[64px] lg:leading-[96px]">Bringing executive insight and recruiting expertise together.</p>
                </div>
                <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[16px] md:text-[20px] lg:text-[24px]" style={{ width: "min-content" }}>
                  <p className="leading-[32px]">We've lived the frustrations of slow, fragmented hiring—both in the boardroom and on the recruiting floor. That's why we built a team that blends the perspective of seasoned executives with the craft of expert recruiters. Together, we're reimagining what hiring can be: faster, fairer, and more human for everyone involved.</p>
                </div>
                <div className="content-stretch flex flex-col sm:flex-row gap-3 items-start justify-start relative shrink-0 w-full sm:w-auto">
                  <Link href="/book-demo" className="bg-[#fa6a20] box-border content-stretch flex gap-3 md:gap-4 h-[50px] md:h-[60px] items-center justify-center px-4 md:pl-[22px] md:pr-2 py-3 md:py-3.5 relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#e85a10] transition-colors w-full sm:w-auto">
                    <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center text-nowrap text-white">
                      <p className="leading-[20px] whitespace-pre">Book a Demo</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] md:p-[10px] relative rounded-[7px] shrink-0 size-[36px] md:size-[46px]">
                      <div className="relative shrink-0 size-3 md:size-4">
                        <div className="absolute inset-[15.67%_15%]">
                          <div className="absolute inset-[-7.8%_-7.65%]">
                            <Image alt="Arrow" src="/about-hero-arrow.svg" width={16} height={16} className="block max-w-none size-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/request-talent" className="box-border content-stretch flex gap-[3px] items-center justify-center px-4 md:px-[22px] py-3 md:py-[18px] relative rounded-[12px] self-stretch shrink-0 cursor-pointer hover:bg-gray-50 transition-colors w-full sm:w-auto">
                    <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black text-center text-nowrap">
                      <p className="leading-[20px] whitespace-pre">Request Talent</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="content-stretch flex flex-wrap gap-4 md:gap-[52px] items-center justify-center md:justify-start opacity-50 relative shrink-0">
                <div className="h-[28px] md:h-[38px] overflow-clip relative shrink-0 w-[68px] md:w-[90px]">
                  <div className="text-gray-600 text-xs md:text-sm font-medium flex items-center justify-center h-full">
                    Weatherford
                  </div>
                </div>
                <div className="h-2.5 md:h-3.5 overflow-clip relative shrink-0 w-[68px] md:w-[90px]">
                  <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                    <Image alt="Samsung" src="/samsung-group.svg" width={90} height={14} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="h-2.5 md:h-3.5 relative shrink-0 w-[60px] md:w-20">
                  <Image alt="Drata" src="/drata-wordmark.svg" width={80} height={14} className="block max-w-none size-full" />
                </div>
                <div className="h-[22px] md:h-[30px] relative shrink-0 w-[54px] md:w-[72px]">
                  <Image alt="Goldman Sachs" src="/goldman-sachs.svg" width={72} height={30} className="block max-w-none size-full" />
                </div>
                <div className="h-[22px] md:h-[30px] relative shrink-0 w-[74px] md:w-[98px]">
                  <Image alt="Amplify Change" src="/amplify-change.svg" width={98} height={30} className="block max-w-none size-full" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative shrink-0">
              <div className="bg-center bg-cover bg-no-repeat h-[600px] xl:h-[720px] rounded-[15px] w-[700px] xl:w-[804px]" style={{ backgroundImage: `url('/about-hero.png')` }}>
                <div aria-hidden="true" className="absolute border-[9px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
              </div>
            </div>
          </div>
        </div>

        {/* CEO Letter Section */}
        <CeoLetter />

        {/* Team Section */}
        <Team />

        {/* Footer with CTA */}
        <div className="relative">
          <Footer />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 md:px-0">
            <Cta />
          </div>
        </div>
      </main>
    </div>
  );
}