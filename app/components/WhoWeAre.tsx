"use client";

import Image from "next/image";
import Link from "next/link";
import Tagline from "./Tagline";

const imgEliosTalentJasonLeonardRemovebgPreview12 = "/who-we-are-jason-leonard.png";
const imgEliosTalentDuranWorkmanRemovebgPreview1 = "/who-we-are-duran-workman.png";
const imgEliosTalentNicoleGreenleaRemovebgPreview1 = "/who-we-are-nicole-greenlea.png";
const imgEliosTalentJasonLeonardRemovebgPreview13 = "/who-we-are-jason-mask.svg";
const imgEliosTalentDuranWorkmanRemovebgPreview2 = "/who-we-are-duran-mask.svg";
const imgEliosTalentNicoleGreenleaRemovebgPreview2 = "/who-we-are-nicole-mask.svg";

export default function WhoWeAre() {
  return (
    <div className="bg-[#0f1012] box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full overflow-hidden" data-name="Section">
      {/* First C Flare Background */}
      <div className="absolute flex h-[570.117px] items-center justify-center left-[-297.39px] top-[-42.6px] w-[693.588px] z-0">
        <div className="flex-none rotate-[101.471deg]">
          <div className="h-[615px] relative w-[456.951px]">
            <div className="absolute inset-[-18.54%_-24.95%]">
              <Image alt="" className="block max-w-none size-full" src="/images/c-flare.svg" fill />
            </div>
          </div>
        </div>
      </div>
      {/* Second C Flare Background */}
      <div className="absolute flex h-[740.687px] items-center justify-center left-[-493px] top-[85.4px] w-[728.201px] z-0">
        <div className="flex-none rotate-[101.471deg]">
          <div className="h-[615px] relative w-[631px]">
            <div className="absolute inset-[-18.54%_-18.07%]">
              <Image alt="" className="block max-w-none size-full" src="/images/c-flare.svg" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[104px] items-center justify-center max-w-[1800px] relative shrink-0 w-full z-10" data-name="Content">
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full" data-name="Subhead Section">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            <Tagline text="who we are" />
            <div
              className="relative shrink-0 text-center text-nowrap"
              style={{
                color: 'var(--Neutral-White, #FFF)',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
                fontSize: 'var(--Typeface-Size-H2, 54px)',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '54px',
                letterSpacing: '-3.24px'
              }}
            >
              <p className="whitespace-pre">The Team Behind the Hiring Revolution</p>
            </div>
          </div>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[460px] relative shrink-0 w-full">
          <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-10 items-start justify-center max-w-[580px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Text">
              <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-full" data-name="Top Bar">
                <Image
                  src="/who-we-are-industry-icon.svg"
                  alt="Industry Veterans"
                  width={24}
                  height={24}
                  className="shrink-0 size-6"
                />
                <div
                  className="basis-0 grow min-h-px min-w-px relative shrink-0"
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                    fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '24px'
                  }}
                >
                  <p>Industry Veterans</p>
                </div>
              </div>
              <div
                className="relative shrink-0 w-full"
                style={{
                  color: '#D0D4D7',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                  fontSize: 'var(--Typeface-Size-Paragraph-md, 16px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <p>We&apos;ve run teams, scaled organizations, and experienced the frustration of critical roles sitting open for months. That shared experience drives our obsession with solving today&apos;s staffing challenges.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Text">
              <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-full" data-name="Top Bar">
                <Image
                  src="/who-we-are-technology-icon.svg"
                  alt="Technology Leaders"
                  width={24}
                  height={24}
                  className="shrink-0 size-6"
                />
                <div
                  className="basis-0 grow min-h-px min-w-px relative shrink-0"
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                    fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '24px'
                  }}
                >
                  <p>Technology Leaders</p>
                </div>
              </div>
              <div
                className="relative shrink-0 w-full"
                style={{
                  color: '#D0D4D7',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                  fontSize: 'var(--Typeface-Size-Paragraph-md, 16px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <p>We understand the power of data and automation. That&apos;s why we&apos;ve built tools that eliminate inefficiencies and give recruiters time back for the human interactions that drive successful placements.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Text">
              <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-full" data-name="Top Bar">
                <Image
                  src="/who-we-are-recruiting-icon.svg"
                  alt="Recruiting Experts"
                  width={24}
                  height={24}
                  className="shrink-0 size-6"
                />
                <div
                  className="basis-0 grow min-h-px min-w-px relative shrink-0"
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                    fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '24px'
                  }}
                >
                  <p>Recruiting Experts</p>
                </div>
              </div>
              <div
                className="relative shrink-0 w-full"
                style={{
                  color: '#D0D4D7',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                  fontSize: 'var(--Typeface-Size-Paragraph-md, 16px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <p>With thousands of interviews and successful placements, we found what separates lasting hires from costly mismatches. Elios combines that expertise with AI to raise the standard for hiring precision.</p>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0" data-name="Container">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Elios Team">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[354.887px] mt-[78.6px] place-items-start relative" data-name="Mask group" style={{ width: "calc(1px * ((var(--transform-inner-height) * 0.06700757145881653) + (var(--transform-inner-width) * 0.9977524876594543)))", height: "calc(1px * ((var(--transform-inner-width) * 0.06700757145881653) + (var(--transform-inner-height) * 0.9977524876594543)))" }}>
                <div className="[grid-area:1_/_1] flex h-[353.9px] items-center justify-center ml-[-31.083px] mt-[-33.62px] relative w-[353.9px]">
                  <div className="flex-none rotate-[3.842deg]">
                    <div className="bg-center bg-cover bg-no-repeat mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[31.539px_35.627px] mask-size-[289.113px_308.379px] opacity-90 size-[332.39px]" data-name="EliosTalent_JasonLeonard-removebg-preview (1) 2" style={{ backgroundImage: `url('${imgEliosTalentJasonLeonardRemovebgPreview12}')`, maskImage: `url('${imgEliosTalentJasonLeonardRemovebgPreview13}')` }} />
                  </div>
                </div>
              </div>
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[106.685px] mt-0 place-items-start relative" data-name="Mask group">
                <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.615px_-0.111px] mask-size-[419.962px_464.639px] ml-[-5.615px] mt-[0.112px] size-[432.715px]" data-name="EliosTalent_DuranWorkman-removebg-preview 1" style={{ backgroundImage: `url('${imgEliosTalentDuranWorkmanRemovebgPreview1}')`, maskImage: `url('${imgEliosTalentDuranWorkmanRemovebgPreview2}')` }} />
              </div>
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[78.599px] place-items-start relative" data-name="Mask group" style={{ width: "calc(1px * ((var(--transform-inner-height) * 0.03751681372523308) + (var(--transform-inner-width) * 0.9992960095405579)))", height: "calc(1px * ((var(--transform-inner-width) * 0.03751681372523308) + (var(--transform-inner-height) * 0.9992960095405579)))" }}>
                <div className="[grid-area:1_/_1] flex h-[316.034px] items-center justify-center ml-[-32.37px] mt-[-19.984px] relative w-[316.034px]">
                  <div className="flex-none rotate-[357.85deg]">
                    <div className="bg-center bg-cover bg-no-repeat mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33.097px_21.198px] mask-size-[249.832px_281.844px] size-[304.831px]" data-name="EliosTalent_NicoleGreenlea-removebg-preview 1" style={{ backgroundImage: `url('${imgEliosTalentNicoleGreenleaRemovebgPreview1}')`, maskImage: `url('${imgEliosTalentNicoleGreenleaRemovebgPreview2}')` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/about" className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[12px] shrink-0 hover:bg-white/10 transition-colors duration-200" data-name="Button-Tertiary-lg">
          <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[20px] whitespace-pre">See More About Us</p>
          </div>
          <Image
            src="/who-we-are-arrow.svg"
            alt="Arrow"
            width={24}
            height={24}
            className="shrink-0 size-6"
          />
        </Link>
      </div>
    </div>
  );
}