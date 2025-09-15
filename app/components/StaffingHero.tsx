"use client";

import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function StaffingHero() {
  return (
    <div className="box-border gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-16 py-0 relative size-full">
      {/* Hero Text - Left Column */}
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[104px] items-start justify-center relative shrink-0">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
          <div className="font-aptos-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[86px] tracking-[-5.16px]" style={{ width: "min-content" }}>
            <p className="leading-[64px]">Staffing that moves as fast as you do</p>
          </div>
          <div className="font-aptos-regular leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[20px]" style={{ width: "min-content" }}>
            <p className="leading-[24px]">We combine seasoned recruiters and a curated talent network with AI-enhanced workflows to deliver the right candidates fast, so work never stalls.</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <Button href="/book-demo" variant="primary" size="lg">
              Book a Demo
            </Button>
            <Button href="/request-talent" variant="secondary" size="lg">
              Request Talent
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image - Right Column */}
      <div className="[grid-area:1_/_2] relative overflow-hidden">
        {/* Hero B Flare Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[701.687px] h-[745.268px]">
          <div className="absolute inset-0 scale-110">
            <Image
              src="/assets/staffing-hero-flare.svg"
              alt=""
              width={770}
              height={818}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Illustration Container */}
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[500px]">
          {/* Phone/Device Frame */}
          <div className="absolute top-[20%] left-[30%] backdrop-blur-[6.072px] backdrop-filter bg-gradient-to-b from-[#121212] from-[12.5%] h-[320px] relative rounded-[6.804px] to-[#1a1a1a] to-[94.231%] w-[250px]">
            <div className="absolute inset-0 pointer-events-none shadow-[3.036px_3.036px_0.506px_-3.542px_inset_rgba(255,255,255,0.5),2.024px_2.024px_1.012px_-2.024px_inset_#b3b3b3,-2.024px_-2.024px_1.012px_-2.024px_inset_#b3b3b3,0px_0px_0px_1.012px_inset_#999999,0px_0px_22.264px_0px_inset_rgba(242,242,242,0.5)]" />

            {/* Profile Image */}
            <div className="absolute top-4 left-4 right-4 h-[300px] rounded-[4px] overflow-hidden">
              <Image
                src="/assets/staffing-hero-person.png"
                alt="Professional candidate profile"
                width={708}
                height={700}
                className="w-full h-full object-cover"
              />
              <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-[-3px] pointer-events-none rounded-[7px]" />
            </div>

            {/* Success Badge */}
            <div className="absolute top-6 left-6 bg-[#92fb4d] flex items-center justify-center px-3 py-1 rounded-[4px]">
              <div className="font-aptos-semibold text-[12px] text-black">
                Great Fit!
              </div>
            </div>

            {/* Profile Details Section */}
            <div className="absolute bottom-12 left-6 text-white">
              <div className="font-aptos-semibold text-[24px] mb-1">
                Jessica M.
              </div>
              <div className="font-aptos-regular text-[16px]">
                Senior Health Tech
              </div>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="absolute bottom-[15%] right-[5%] bg-white h-[140px] rounded-[6px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-[180px] p-4">
            <div className="font-inter font-semibold text-[14px] text-black mb-1">
              34 Days
            </div>
            <div className="font-aptos opacity-60 text-[10px] text-black mb-4">
              Time to Hire
            </div>
            <div className="h-[60px] relative">
              <div className="w-full h-full bg-gradient-to-r from-blue-200 to-blue-400 rounded-sm opacity-70"></div>
            </div>
          </div>

          {/* Talent Card */}
          <div className="absolute top-[55%] right-[-10%] bg-white h-[110px] overflow-hidden rounded-[6px] w-[200px] p-3">
            <div className="flex items-start gap-2 mb-3">
              <div className="w-[25px] h-[25px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/staffing-hero-profile.png"
                  alt="Jessica M."
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="font-inter font-semibold text-[#16191d] text-[10px]">
                    Jessica M.
                  </div>
                  <div className="bg-[#d3f8e4] px-1.5 py-0.5 rounded-[3px]">
                    <div className="font-inter font-semibold text-[#0e9f6e] text-[8px]">
                      97% Fit Score
                    </div>
                  </div>
                </div>
                <div className="font-inter font-semibold text-[#3a4252] text-[7px]">
                  Portland, OR
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex gap-2">
                <div className="bg-[#d6d6d6] h-[4px] flex-1 rounded-full" />
                <div className="bg-[#d6d6d6] h-[4px] flex-1 rounded-full" />
              </div>
              <div className="bg-[#d6d6d6] h-[4px] w-[60px] rounded-full" />
              <div className="bg-[#d6d6d6] h-[4px] w-full rounded-full" />
              <div className="bg-[#d6d6d6] h-[4px] w-[80%] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}