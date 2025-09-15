"use client";

import Image from "next/image";
import Tagline from "./Tagline";
import BFlare from "./BFlare";

const imgImage28 = "/assets/7baf860083bbdda66f2251745278bcd47b4c491e.png";
const imgImage29 = "/assets/551ed2980549fa343b4799d89e7d90596684ff5f.png";
const imgVector622 = "/assets/3656ef6b456537fb32f92022845eaecdd1a81f93.svg";
const imgBenefitInput = "/assets/145568baaf7be24b0c1f1dd11124d63a6f502e91.svg";
const imgVector619 = "/assets/26c81478297773cb4d59ec641e3b598842c6beda.svg";
const imgFrame = "/assets/289664b520aa5e3322e395c329e23c9dc01b8d52.svg";
const imgVector621 = "/assets/4179c8afb7ea566af721e8ee8da6f97ad9117281.svg";
const imgVector = "/assets/726a95972625b5aa6568795136463d562dfbee82.svg";
const imgVector620 = "/assets/36a6d1ff7fe4882ef7e4618138af35cfbeb800ff.svg";
const imgFrame1 = "/assets/62867704be67e6fbf6d435012623983939a8a7df.svg";

export default function OurProcess() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-0 py-[152px] relative size-full" data-name="Our Process" data-node-id="65:1074">
      <div className="content-stretch flex flex-col gap-[120px] items-center justify-center max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="65:1101">
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative size-full" data-name="Subhead Section" data-node-id="216:3975">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            <Tagline text="our process" className="content-stretch" />
            <h1
              className="relative shrink-0 text-nowrap whitespace-pre"
              style={{
                color: 'var(--Neutral-Charcoal, #0F1012)',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
                fontSize: 'var(--Typeface-Size-H2, 54px)',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '54px',
                letterSpacing: '-3.24px'
              }}
            >
              <div className="mb-0">Elios doesn&apos;t just improve hiring.</div>
              <div>We reimagine it.</div>
            </h1>
          </div>
          <div
            className="relative shrink-0 w-[635px]"
            style={{
              color: 'var(--Neutral-Medium-Gray, #595959)',
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Body, Aptos)',
              fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px'
            }}
          >
            <p>Our AI automation handles the busywork so recruiters can focus on what matters most: connecting top talent to the right roles.</p>
          </div>
        </div>
        
        {/* Desktop Flow Chart */}
        <div className="hidden lg:block relative z-10" data-name="Flow Chart">
          {/* B Flare Background */}
          <div className="absolute h-[614px] opacity-80 w-[805px] pointer-events-none z-0" data-name="B Flare" style={{ top: "calc(50% + 59px)", left: "calc(50% + 416px)", transform: "translate(-50%, -50%)" }}>
            <BFlare />
          </div>

          <div className="relative w-[944px] h-[344px] z-20" data-name="Content=Elios Diagram 1" data-node-id="2398:25996">
            <div className="absolute h-0 left-[630px] top-[172.23px] w-[65.655px]" data-node-id="2398:25941">
              <div className="absolute bottom-[-0.81px] left-0 right-0 top-[-0.81px]">
                <Image alt="" src={imgVector622} width={66} height={1} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="absolute flex items-center justify-center left-[362.41px] size-[268.448px] top-[38px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="relative size-[268.448px]" data-name="Benefit Input" data-node-id="2398:25942">
                  <div className="absolute inset-[-0.9%_-5.42%_-18.98%_-5.42%]">
                    <Image alt="" src={imgBenefitInput} width={268} height={268} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-0 top-[135.03px]" data-name="Benefit Input" data-node-id="2398:25970">
              <div className="absolute h-0 left-[172.23px] top-[172.23px] w-[227.615px]" data-node-id="2398:25971">
                <div className="absolute bottom-[-0.81px] left-0 right-0 top-[-0.81px]">
                  <Image alt="" src={imgVector619} width={228} height={1} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] left-0 rounded-[48.515px] top-[135.03px]" data-name="Frame" data-node-id="2398:25972">
                <div className="box-border content-stretch flex flex-col gap-[12.129px] items-center justify-center overflow-clip px-[32.343px] py-[16.172px] relative">
                  <div className="relative shrink-0 size-[19.406px]" data-name="Frame" data-node-id="2398:25973">
                    <Image alt="" src={imgFrame} width={19} height={19} className="block max-w-none size-full" />
                  </div>
                  <div className="font-['Aptos:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16.172px] text-black text-center text-nowrap tracking-[-0.1617px]" data-node-id="2398:25975">
                    <p className="leading-[19.406px] whitespace-pre">Expert Recruiters</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.617px] border-solid border-white inset-0 pointer-events-none rounded-[48.515px] shadow-[0px_57.409px_16.172px_0px_rgba(0,0,0,0),0px_36.386px_14.554px_0px_rgba(0,0,0,0.01),0px_20.214px_12.129px_0px_rgba(0,0,0,0.03),0px_8.894px_8.894px_0px_rgba(0,0,0,0.04),0px_2.426px_4.851px_0px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
            <div className="absolute contents left-[95.01px] top-0" data-name="Benefit Input" data-node-id="2398:25976">
              <div className="absolute h-[60.643px] left-[196.4px] top-[46.09px] w-[224.785px]" data-node-id="2398:25977">
                <div className="absolute bottom-[-1.33%] left-[-0.36%] right-0 top-0">
                  <Image alt="" src={imgVector621} width={225} height={61} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] left-[95.01px] rounded-[48.515px] top-0" data-name="Frame" data-node-id="2398:25978">
                <div className="box-border content-stretch flex flex-col gap-[12.129px] items-center justify-center overflow-clip px-[32.343px] py-[16.172px] relative">
                  <div className="h-[13.746px] relative shrink-0 w-[16.172px]" data-name="Vector" data-node-id="2398:25979">
                    <div className="absolute inset-[-5.88%_-5%]">
                      <Image alt="" src={imgVector} width={16} height={14} className="block max-w-none size-full" />
                    </div>
                  </div>
                  <div className="font-['Aptos:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16.172px] text-black text-center text-nowrap tracking-[-0.1617px]" data-node-id="2398:25980">
                    <p className="leading-[19.406px] whitespace-pre">Elios Talent Network</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.617px] border-solid border-white inset-0 pointer-events-none rounded-[48.515px] shadow-[0px_57.409px_16.172px_0px_rgba(0,0,0,0),0px_36.386px_14.554px_0px_rgba(0,0,0,0.01),0px_20.214px_12.129px_0px_rgba(0,0,0,0.03),0px_8.894px_8.894px_0px_rgba(0,0,0,0.04),0px_2.426px_4.851px_0px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
            <div className="absolute contents left-[88.54px] top-[223.17px]" data-node-id="2398:25981">
              <div className="absolute flex h-[60.643px] items-center justify-center left-[196.4px] top-[223.17px] w-[224.785px]">
                <div className="flex-none scale-y-[-100%]">
                  <div className="h-[60.643px] relative w-[224.785px]" data-node-id="2398:25982">
                    <div className="absolute bottom-[-1.33%] left-[-0.36%] right-0 top-0">
                      <Image alt="" src={imgVector620} width={225} height={61} className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.8)] left-[88.54px] rounded-[48.515px] top-[271.68px]" data-name="Frame" data-node-id="2398:25983">
                <div className="box-border content-stretch flex flex-col gap-[12.129px] items-center justify-center overflow-clip px-[32.343px] py-[16.172px] relative">
                  <div className="relative shrink-0 size-[19.406px]" data-name="Frame" data-node-id="2398:25984">
                    <Image alt="" src={imgFrame1} width={19} height={19} className="block max-w-none size-full" />
                  </div>
                  <div className="font-['Aptos:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16.172px] text-black text-center text-nowrap tracking-[-0.1617px]" data-node-id="2398:25987">
                    <p className="leading-[19.406px] whitespace-pre">Elios Insights Platform</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.617px] border-solid border-white inset-0 pointer-events-none rounded-[48.515px] shadow-[0px_57.409px_16.172px_0px_rgba(0,0,0,0),0px_36.386px_14.554px_0px_rgba(0,0,0,0.01),0px_20.214px_12.129px_0px_rgba(0,0,0,0.03),0px_8.894px_8.894px_0px_rgba(0,0,0,0.04),0px_2.426px_4.851px_0px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
            <div className="absolute contents left-[723px] top-[32.34px]" data-name="Candidate Photos" data-node-id="2398:25988">
              <div className="absolute flex h-[274.549px] items-center justify-center left-[771.51px] top-[97.03px] w-[204.205px]">
                <div className="flex-none rotate-[11.35deg]">
                  <div className="bg-[#e0f1fe] box-border content-stretch flex flex-col gap-[8.086px] h-[248.233px] items-center justify-center overflow-clip p-[8.086px] relative rounded-bl-[8.086px] rounded-br-[8.086px] rounded-tl-[64.686px] rounded-tr-[8.086px] shadow-[0px_57.409px_16.172px_0px_rgba(0,0,0,0),0px_36.386px_14.554px_0px_rgba(0,0,0,0.01),0px_20.214px_12.129px_0px_rgba(0,0,0,0.03),0px_8.894px_8.894px_0px_rgba(0,0,0,0.04),0px_2.426px_4.851px_0px_rgba(0,0,0,0.05)]" data-name="Frame" data-node-id="2398:25989">
                    <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-bl-[2.426px] rounded-br-[1.617px] rounded-tl-[56.6px] rounded-tr-[1.617px] shrink-0 w-[142.31px]" data-name="image 28" data-node-id="2398:25990" style={{ backgroundImage: `url('${imgImage28}')` }} />
                    <div className="font-['Aptos:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16.172px] text-[rgba(255,255,255,0)] text-center tracking-[-0.6469px] w-[118.052px]" data-node-id="2398:25991">
                      <p className="leading-[19.406px]">The Perfect Candidate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#063852] box-border content-stretch flex flex-col gap-[8.086px] h-[248.233px] items-center justify-center left-[723px] overflow-clip p-[8.086px] rounded-[8.086px] shadow-[0px_57.409px_16.172px_0px_rgba(0,0,0,0),0px_36.386px_14.554px_0px_rgba(0,0,0,0.01),0px_20.214px_12.129px_0px_rgba(0,0,0,0.03),0px_8.894px_8.894px_0px_rgba(0,0,0,0.04),0px_2.426px_4.851px_0px_rgba(0,0,0,0.05)] top-[32.34px]" data-name="Frame" data-node-id="2398:25992">
                <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-[1.617px] shrink-0 w-[142.31px]" data-name="image 28" data-node-id="2398:25993" style={{ backgroundImage: `url('${imgImage29}')` }} />
                <div className="font-['Aptos:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16.172px] text-center text-white tracking-[-0.6469px] w-[118.052px]" data-node-id="2398:25994">
                  <p className="leading-[16.172px]">The Perfect Candidate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Mobile Process */}
        <div className="lg:hidden flex flex-col gap-8 items-center w-full relative z-10" data-name="Mobile Process">
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="bg-[rgba(255,255,255,0.8)] rounded-[30px] px-6 py-4 shadow-lg">
              <div className="flex flex-col gap-3 items-center">
                <div className="relative w-6 h-6">
                  <Image alt="" src={imgFrame} width={24} height={24} className="block max-w-none w-full h-full" />
                </div>
                <div className="font-normal text-[18px] text-black text-center">Expert Recruiters</div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="bg-[rgba(255,255,255,0.8)] rounded-[30px] px-6 py-4 shadow-lg">
              <div className="flex flex-col gap-3 items-center">
                <div className="relative w-5 h-4">
                  <Image alt="" src={imgVector} width={20} height={17} className="block max-w-none w-full h-full" />
                </div>
                <div className="font-normal text-[18px] text-black text-center">Elios Talent Network</div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="bg-[rgba(255,255,255,0.8)] rounded-[30px] px-6 py-4 shadow-lg">
              <div className="flex flex-col gap-3 items-center">
                <div className="relative w-6 h-6">
                  <Image alt="" src={imgFrame1} width={24} height={24} className="block max-w-none w-full h-full" />
                </div>
                <div className="font-normal text-[18px] text-black text-center">Elios Insights Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}