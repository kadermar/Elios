"use client";

import Image from "next/image";
import Button from "./Button";

export default function InsightsHero() {
  return (
    <section className="box-border gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-16 py-0 relative size-full bg-[#F4F4F4]">
      {/* Left Side - Hero Text */}
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[104px] items-start justify-center relative shrink-0">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
          <div className="font-['Aptos:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[86px] tracking-[-5.16px] w-[534px]">
            <p className="leading-[64px]">Elios Insights: The AI Talent Intelligence Platform</p>
          </div>
          <div className="font-['Aptos:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[20px]" style={{ width: "min-content" }}>
            <p className="leading-[24px]">Supercharge recruiting from intake to offer with AI-powered automation and human expertise where it matters most.</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <Button
              href="/book-demo"
              variant="primary"
              size="lg"
              showArrow={true}
            >
              Book a Demo
            </Button>
            <Button
              href="/request-talent"
              variant="secondary"
              size="lg"
            >
              Request Talent
            </Button>
          </div>
        </div>

        {/* Logo Reel */}
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
            <div className="[grid-area:1_/_1] h-[38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[590px_38px] ml-0 mt-0 overflow-clip relative w-[590px]" style={{ maskImage: `url('/assets/insights-logo-slideshow.svg')` }}>
              <div className="absolute content-stretch flex gap-10 items-center justify-center left-0 opacity-50 top-0">
                <div className="text-gray-600 text-sm font-medium h-[38px] w-[90px] flex items-center justify-center">
                  Weatherford
                </div>
                <div className="h-3.5 w-[90px] flex items-center justify-center">
                  <Image alt="Samsung" src="/samsung-group.svg" width={90} height={14} className="opacity-50" />
                </div>
                <div className="h-3.5 w-20 flex items-center justify-center">
                  <Image alt="Drata" src="/drata-wordmark.svg" width={80} height={14} className="opacity-50" />
                </div>
                <div className="h-[30px] w-[72px] flex items-center justify-center">
                  <Image alt="Goldman Sachs" src="/goldman-sachs.svg" width={72} height={30} className="opacity-50" />
                </div>
                <div className="h-[30px] w-[98px] flex items-center justify-center">
                  <Image alt="Amplify Change" src="/amplify-change.svg" width={98} height={30} className="opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="[grid-area:1_/_2] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        {/* Hero Flare Background */}
        <div className="[grid-area:1_/_1] h-[752px] ml-[732px] mt-0 relative w-[628px]">
          <div className="absolute inset-[-7.88%_-9.43%]">
            <Image alt="" src="/assets/insights-hero-flare.svg" fill className="block max-w-none size-full" />
          </div>
        </div>

        {/* Software Interface */}
        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[824.567px] mt-9 place-items-start relative">
          {/* Background Glass Panels */}
          <div className="[grid-area:1_/_1] backdrop-blur-[5.936px] backdrop-filter bg-[#1a1a1a] h-[664.977px] ml-[824.567px] mt-[105.464px] relative rounded-[11.477px] w-[370.186px]">
            <div className="absolute inset-0 pointer-events-none shadow-[2.968px_2.968px_0.495px_-3.463px_inset_rgba(255,255,255,0.5),1.979px_1.979px_0.989px_-1.979px_inset_#b3b3b3,-1.979px_-1.979px_0.989px_-1.979px_inset_#b3b3b3,0px_0px_0px_0.989px_inset_#999999,0px_0px_21.766px_0px_inset_rgba(242,242,242,0.5)]" />
          </div>
          <div className="[grid-area:1_/_1] backdrop-blur-[5.936px] backdrop-filter bg-[#1a1a1a] h-[732.746px] ml-[841.73px] mt-[71.579px] relative rounded-[11.477px] w-[370.186px]">
            <div className="absolute inset-0 pointer-events-none shadow-[2.968px_2.968px_0.495px_-3.463px_inset_rgba(255,255,255,0.5),1.979px_1.979px_0.989px_-1.979px_inset_#b3b3b3,-1.979px_-1.979px_0.989px_-1.979px_inset_#b3b3b3,0px_0px_0px_0.989px_inset_#999999,0px_0px_21.766px_0px_inset_rgba(242,242,242,0.5)]" />
          </div>

          {/* Main Screenshot */}
          <div
            className="[grid-area:1_/_1] h-[774.622px] ml-[861.435px] mt-9 rounded-[11.477px] shadow-[0px_71.266px_20.362px_0px_rgba(250,93,11,0),0px_46.276px_18.511px_0px_rgba(250,93,11,0.01),0px_25.915px_15.734px_0px_rgba(250,93,11,0.05),0px_11.106px_11.106px_0px_rgba(250,93,11,0.09),0px_2.777px_6.479px_0px_rgba(250,93,11,0.1)] w-[1377.11px] bg-cover bg-left-top bg-no-repeat"
            style={{ backgroundImage: `url('/assets/insights-hero-new.png')` }}
          />
        </div>
      </div>
    </section>
  );
}