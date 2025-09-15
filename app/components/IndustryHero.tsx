"use client";

import React from "react";
import Image from "next/image";
import Icon from "./Icon";

// Local asset paths
const imgImage71 = "/assets/industry-hero/image-71.png";
const imgImage70 = "/assets/industry-hero/image-70.png";
const imgImage72 = "/assets/industry-hero/image-72.png";
const imgHeroBFlare = "/assets/industry-hero/hero-b-flare.svg";
const imgRectangle716 = "/assets/industry-hero/rectangle-716.svg";
const imgVector170 = "/assets/industry-hero/vector-170.svg";
const imgVector180 = "/assets/industry-hero/vector-180.svg";
const imgVector182 = "/assets/industry-hero/vector-182.svg";
const imgVector168 = "/assets/industry-hero/vector-168.svg";
const imgVector181 = "/assets/industry-hero/vector-181.svg";
const imgEllipse164 = "/assets/industry-hero/ellipse-164.svg";
const imgImage73 = "/assets/industry-hero/image-73.svg";

interface ButtonPrimaryLgProps {
  state?: "Rest" | "Hover";
}

function ButtonPrimaryLg({ state = "Rest" }: ButtonPrimaryLgProps) {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] size-full">
      <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Book a Demo</p>
      </div>
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px]">
        <Icon type="arrow" size="regular" />
      </div>
    </div>
  );
}

interface ButtonSecondaryLgProps {
  state?: "Rest" | "Hover";
}

function ButtonSecondaryLg({ state = "Rest" }: ButtonSecondaryLgProps) {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center px-6 py-2 relative rounded-[12px] size-full">
      <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[16px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Request Talent</p>
      </div>
    </div>
  );
}

export default function IndustryHero() {
  return (
    <div className="box-border gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-16 py-0 relative size-full">
      {/* Hero Text - Left Column */}
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[104px] items-start justify-center relative shrink-0">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
          <div className="font-['Aptos:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[86px] tracking-[-5.16px]" style={{ width: "min-content" }}>
            <p className="leading-[64px]">Industry knowledge meets hiring precision</p>
          </div>
          <div className="font-['Aptos:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[20px]" style={{ width: "min-content" }}>
            <p className="leading-[24px]">Backed by cross-industry experience, Elios adapts to each sector's unique hiring challenges.</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <div className="bg-[#fb5d0b] box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] shrink-0 h-[62px] cursor-pointer hover:bg-[#e85a10] transition-colors">
              <a href="/book-demo" className="contents">
                <ButtonPrimaryLg />
              </a>
            </div>
            <div className="box-border content-stretch flex gap-4 h-[62px] items-center justify-center px-6 py-2 relative rounded-[12px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <a href="/request-talent" className="contents">
                <ButtonSecondaryLg />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Right Column */}
      <div className="[grid-area:1_/_2] contents relative size-full">
        {/* Background Flare */}
        <div className="absolute flex h-[699.963px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[659.031px]" style={{ top: "calc(50% - 0.018px)", left: "calc(50% + 365.516px)" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[699.963px] relative w-[659.031px]">
              <div className="absolute inset-[-9.01%_-9.57%]">
                <Image alt="" src={imgHeroBFlare} width={800} height={800} className="block max-w-none size-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Illustration */}
        <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 0.424px)", left: "calc(50% + 366px)" }}>
          {/* Primary Dashboard Image */}
          <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 76.117px)", left: "calc(50% + 371.5px)" }}>
            <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 76.117px)", left: "calc(50% + 371.5px)" }}>
              {/* Main Dashboard Image */}
              <div
                className="absolute bg-center bg-cover bg-no-repeat h-[408.49px] rounded-[4.653px] translate-x-[-50%] translate-y-[-50%] w-[316.383px]"
                style={{
                  top: "calc(50% - 65.479px)",
                  left: "calc(50% + 382.808px)",
                  backgroundImage: `url('${imgImage71}')`
                }}
              >
                <div className="absolute border-[3.687px] border-solid border-white inset-0 pointer-events-none rounded-[4.653px]" />
              </div>
            </div>
          </div>

          {/* Weekly Trend Data Chart Component */}
          <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 156.162px)", left: "calc(50% + 174.142px)" }}>
            <div
              className="absolute bg-white h-[193.444px] rounded-[8.379px] shadow-[0px_3.352px_9.496px_-2.793px_rgba(58,77,233,0.15)] translate-x-[-50%] translate-y-[-50%] w-[210.284px]"
              style={{
                top: "calc(50% + 156.162px)",
                left: "calc(50% + 174.142px)"
              }}
            />

            {/* Chart Title */}
            <div
              className="absolute font-['Aptos:SemiBold',_sans-serif] h-[12.616px] leading-[0] not-italic text-[9.496px] text-black w-[86.216px]"
              style={{
                top: "calc(50% + 74.859px)",
                left: "calc(50% + 131.335px)"
              }}
            >
              <p className="leading-[normal]">Weekly Trend Data</p>
            </div>

            {/* Chart Data Points and Labels */}
            {/* Day Labels */}
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-50 text-[6.145px] text-black w-[12.617px]" style={{ top: "calc(50% + 100.201px)", left: "calc(50% + 87.63px)" }}>
              <p className="leading-[normal]">Mon</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-70 text-[6.145px] text-black w-[7.71px]" style={{ top: "calc(50% + 112.862px)", left: "calc(50% + 90.72px)" }}>
              <p className="leading-[normal]">10</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-50 text-[6.145px] text-black w-[13.318px]" style={{ top: "calc(50% + 100.201px)", left: "calc(50% + 120.368px)" }}>
              <p className="leading-[normal]">Tues</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-70 text-[6.145px] text-black w-[7.71px]" style={{ top: "calc(50% + 112.862px)", left: "calc(50% + 123.456px)" }}>
              <p className="leading-[normal]">11</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-70 text-[6.145px] text-black w-[7.71px]" style={{ top: "calc(50% + 112.862px)", left: "calc(50% + 154.649px)" }}>
              <p className="leading-[normal]">12</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-70 text-[6.145px] text-black w-[7.71px]" style={{ top: "calc(50% + 112.862px)", left: "calc(50% + 188.313px)" }}>
              <p className="leading-[normal]">13</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-70 text-[6.145px] text-black w-[7.71px]" style={{ top: "calc(50% + 112.862px)", left: "calc(50% + 218.89px)" }}>
              <p className="leading-[normal]">14</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-70 text-[6.145px] text-black w-[7.71px]" style={{ top: "calc(50% + 112.862px)", left: "calc(50% + 249.773px)" }}>
              <p className="leading-[normal]">15</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-50 text-[6.145px] text-black w-[16.122px]" style={{ top: "calc(50% + 100.201px)", left: "calc(50% + 149.708px)" }}>
              <p className="leading-[normal]">Weds</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-50 text-[6.145px] text-black w-[15.421px]" style={{ top: "calc(50% + 100.201px)", left: "calc(50% + 182.137px)" }}>
              <p className="leading-[normal]">Thurs</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-50 text-[6.145px] text-black w-[7.009px]" style={{ top: "calc(50% + 100.201px)", left: "calc(50% + 218.58px)" }}>
              <p className="leading-[normal]">Fri</p>
            </div>
            <div className="absolute font-['Aptos:Display',_sans-serif] h-[8.411px] leading-[0] not-italic opacity-50 text-[6.145px] text-black w-[9.112px]" style={{ top: "calc(50% + 100.201px)", left: "calc(50% + 248.847px)" }}>
              <p className="leading-[normal]">Sat</p>
            </div>

            {/* Chart Lines and Data Points */}
            <div className="absolute h-[92.134px] translate-x-[-50%] translate-y-[-50%] w-0" style={{ top: "calc(50% + 183.692px)", left: "calc(50% + 254.399px)" }}>
              <div className="absolute bottom-0 left-[-0.14px] right-[-0.14px] top-0">
                <Image alt="" src={imgVector170} width={1} height={92} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute h-[92.134px] translate-x-[-50%] translate-y-[-50%] w-0" style={{ top: "calc(50% + 183.692px)", left: "calc(50% + 190.469px)" }}>
              <div className="absolute bottom-0 left-[-0.14px] right-[-0.14px] top-0">
                <Image alt="" src={imgVector170} width={1} height={92} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute h-[92.134px] translate-x-[-50%] translate-y-[-50%] w-0" style={{ top: "calc(50% + 183.692px)", left: "calc(50% + 158.657px)" }}>
              <div className="absolute bottom-0 left-[-0.14px] right-[-0.14px] top-0">
                <Image alt="" src={imgVector170} width={1} height={92} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute h-[92.134px] translate-x-[-50%] translate-y-[-50%] w-0" style={{ top: "calc(50% + 183.692px)", left: "calc(50% + 126.847px)" }}>
              <div className="absolute bottom-0 left-[-0.14px] right-[-0.14px] top-0">
                <Image alt="" src={imgVector170} width={1} height={92} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute h-[92.134px] translate-x-[-50%] translate-y-[-50%] w-0" style={{ top: "calc(50% + 183.692px)", left: "calc(50% + 95.344px)" }}>
              <div className="absolute bottom-0 left-[-0.14px] right-[-0.14px] top-0">
                <Image alt="" src={imgVector170} width={1} height={92} className="block max-w-none size-full" />
              </div>
            </div>

            {/* Chart Area and Line */}
            <div className="absolute flex h-[69.941px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[139.805px]" style={{ top: "calc(50% + 195.403px)", left: "calc(50% + 152.807px)" }}>
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-[69.941px] relative w-[139.805px]" style={{ WebkitMaskImage: `url('${imgRectangle716}')`, maskImage: `url('${imgRectangle716}')` }}>
                  <div className="absolute bottom-0 left-0 right-0 top-[2.65%]">
                    <Image alt="" src={imgVector180} width={140} height={70} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute h-0 translate-x-[-50%] translate-y-[-50%] w-[26.883px]" style={{ top: "calc(50% + 181.394px)", left: "calc(50% + 238.927px)" }}>
              <div className="absolute bottom-[-0.56px] left-0 right-0 top-[-0.56px]">
                <Image alt="" src={imgVector182} width={27} height={1} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute h-[92.134px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-210.588px_-487.625px] mask-size-[708px_700px] translate-x-[-50%] translate-y-[-50%] w-0" style={{ top: "calc(50% + 183.692px)", left: "calc(50% + 222.588px)" }}>
              <div className="absolute bottom-0 left-[-0.21px] right-[-0.21px] top-0">
                <Image alt="" src={imgVector168} width={1} height={92} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute flex h-[43.219px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[139.863px]" style={{ top: "calc(50% + 182.042px)", left: "calc(50% + 152.835px)" }}>
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-[43.219px] relative w-[139.863px]" style={{ WebkitMaskImage: `url('${imgRectangle716}')`, maskImage: `url('${imgRectangle716}')` }}>
                  <div className="absolute inset-[3%_-0.4%_-1.29%_-0.4%]">
                    <Image alt="" src={imgVector181} width={140} height={43} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Point */}
            <div className="absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-206.302px_-526.488px] mask-size-[708px_700px] size-[8.05px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 180.512px)", left: "calc(50% + 222.327px)" }}>
              <div className="absolute inset-[-117.7%_-125.29%_-117.7%_-110.11%]">
                <Image alt="" src={imgEllipse164} width={20} height={20} className="block max-w-none size-full" />
              </div>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 239.555px)", left: "calc(50% + 518.609px)" }}>
            <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 239.555px)", left: "calc(50% + 518.609px)" }}>
              <div
                className="absolute bg-center bg-cover bg-no-repeat h-[101.196px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-463px_-538.957px] mask-size-[708px_700px] rounded-[4px] translate-x-[-50%] translate-y-[-50%] w-[87.217px]"
                style={{
                  top: "calc(50% + 239.555px)",
                  left: "calc(50% + 518.609px)",
                  backgroundImage: `url('${imgImage70}')`,
                  WebkitMaskImage: `url('${imgRectangle716}')`,
                  maskImage: `url('${imgRectangle716}')`
                }}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute contents left-[1296px] top-[216.99px]">
            <div className="absolute contents left-[1296px] top-[216.99px]">
              <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 82.24px)", left: "calc(50% + 619.609px)" }}>
                <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 82.24px)", left: "calc(50% + 619.609px)" }}>
                  <div
                    className="absolute bg-center bg-cover bg-no-repeat h-[101.196px] rounded-[4px] translate-x-[-50%] translate-y-[-50%] w-[87.217px]"
                    style={{
                      top: "calc(50% - 82.24px)",
                      left: "calc(50% + 619.609px)",
                      backgroundImage: `url('${imgImage72}')`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}