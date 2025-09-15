"use client";

import Image from "next/image";
import Button from "./Button";

// Assets from Figma
const imgImage71 = "/assets/energy-hero-image-71.png";
const imgImage70 = "/assets/energy-hero-image-70.png";
const imgHeroBFlare = "/assets/energy-hero-b-flare.svg";

export default function EnergyHero() {
  return (
    <div className="box-border gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-16 py-0 relative size-full" data-name="Energy Hero">
      {/* Hero Text */}
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[104px] items-start justify-center relative shrink-0" data-name="Hero Text">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full" data-name="Top Section">
          <div className="font-['Aptos:Semibold',_sans-serif] leading-[64px] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[86px] tracking-[-5.16px]" style={{ width: "min-content" }}>
            <p>Fuel energy hiring</p>
          </div>
          <div className="font-['Aptos:Regular',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[20px]" style={{ width: "min-content" }}>
            <p>We place project-ready engineers, who are compliance-ready and producing results from day one.</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0" data-name="Button Row">
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
      </div>

      {/* Hero Image */}
      <div className="[grid-area:1_/_2] relative overflow-visible" data-name="Hero Image">
        {/* Background Flare */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[659px] h-[700px] z-0">
          <Image alt="" className="w-full h-full object-contain" src={imgHeroBFlare} width={659} height={700} />
        </div>

        {/* Main Oil Pump Image */}
        <div className="relative z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[400px] bg-center bg-cover rounded-[5px] border-4 border-white shadow-xl" style={{ backgroundImage: `url('${imgImage71}')` }}>
          {/* Secondary Image */}
          <div className="absolute bottom-[-20px] right-[-40px] w-[90px] h-[100px] bg-center bg-cover rounded-[4px] border-2 border-white shadow-lg" style={{ backgroundImage: `url('${imgImage70}')` }} />
        </div>
      </div>
    </div>
  );
}