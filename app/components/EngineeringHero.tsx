"use client";

import Image from "next/image";
import Link from "./Link";

// Image assets from Figma
const imgImage71 = "/assets/engineering-hero-image-71.png";
const imgImage70 = "/assets/engineering-hero-image-70.png";
const imgHeroBFlare = "/assets/engineering-hero-b-flare.svg";
const imgRectangle716 = "/assets/engineering-hero-rectangle.svg";

interface ButtonPrimaryLgProps {
  state?: "Rest" | "Hover";
}

function ButtonPrimaryLg({ state = "Rest" }: ButtonPrimaryLgProps) {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] size-full" data-name="State=Rest">
      <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Book a Demo</p>
      </div>
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px]">
        <div className="shrink-0 size-4">
          <Image
            src="/cta-arrow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="block max-w-none size-full"
          />
        </div>
      </div>
    </div>
  );
}

interface ButtonSecondaryLgProps {
  state?: "Rest" | "Hover";
}

function ButtonSecondaryLg({ state = "Rest" }: ButtonSecondaryLgProps) {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center px-6 py-2 relative rounded-[12px] size-full" data-name="State=Rest">
      <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[16px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Request Talent</p>
      </div>
    </div>
  );
}

export default function EngineeringHero() {
  return (
    <div className="box-border gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-16 py-0 relative size-full" data-name="Hero Beta">
      {/* Hero Text - Left Column */}
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[104px] items-start justify-center relative shrink-0" data-name="Hero Text">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full" data-name="Top Section">
          <div className="font-['Aptos:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[86px] tracking-[-5.16px]" style={{ width: "min-content" }}>
            <p className="leading-[64px]">Power engineering hiring</p>
          </div>
          <div className="font-['Aptos:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[20px]" style={{ width: "min-content" }}>
            <p className="leading-[24px]">We place project-ready engineers, who are compliance-ready and producing results from day one.</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0" data-name="Button Row">
            <Link href="/book-demo">
              <div className="bg-[#fb5d0b] box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105" data-name="Button-Primary-lg">
                <ButtonPrimaryLg />
              </div>
            </Link>
            <Link href="/request-talent">
              <div className="box-border content-stretch flex gap-4 h-[62px] items-center justify-center px-6 py-2 relative rounded-[12px] shrink-0 bg-white transition-all duration-300 hover:shadow-lg hover:scale-105" data-name="Button-Secondary-Lg">
                <ButtonSecondaryLg />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image - Right Column */}
      <div className="[grid-area:1_/_2] relative overflow-visible" data-name="Hero Image">
        {/* Hero B Flare Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[659px] h-[700px] z-0">
          <Image alt="" className="w-full h-full object-contain" src={imgHeroBFlare} width={659} height={700} />
        </div>

        {/* Main Engineering Image Container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="relative">
            {/* Background Frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] from-[12.5%] to-[#1a1a1a] to-[94.231%] rounded-[6px] backdrop-blur-[6px] shadow-lg">
              <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_3px_0px_rgba(255,255,255,0.5),inset_2px_2px_1px_#b3b3b3,inset_-2px_-2px_1px_#b3b3b3,inset_0px_0px_0px_1px_#999999,inset_0px_0px_23px_rgba(242,242,242,0.5)]" />
            </div>

            {/* Main Engineering Image */}
            <div
              className="w-[320px] h-[400px] bg-center bg-cover rounded-[5px] border-4 border-white shadow-xl relative z-10"
              style={{
                backgroundImage: `url('${imgImage71}')`
              }}
            >
              {/* Secondary Small Image */}
              <div
                className="absolute bottom-[-20px] right-[-40px] w-[90px] h-[100px] bg-center bg-cover rounded-[4px] border-2 border-white shadow-lg"
                style={{
                  backgroundImage: `url('${imgImage70}')`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}