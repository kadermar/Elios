"use client";

import { useState } from "react";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

const imgVector = "/bar-chart-vector-1.svg";
const imgVector1 = "/bar-chart-vector-2.svg";

interface BarChartIllustrationProps {
  className?: string;
}

export default function BarChartIllustration({ className = "" }: BarChartIllustrationProps) {
  const [hoveredHelp, setHoveredHelp] = useState<string | null>(null);

  return (
    <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] max-w-[1000px] place-items-start relative shrink-0 w-full ${className}`} data-name="Bar Char Illustration">
      {/* Traditional Hiring - 30+ Days */}
      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[38.331px] h-[403px] items-start justify-start ml-[524px] mt-0 pb-[32.622px] pt-[40.777px] px-10 relative w-[476px]" style={{
        borderRadius: '0 36.7px 0 12.233px',
        borderTop: '4px solid #FFF',
        borderRight: '4.893px solid #FFF',
        background: 'linear-gradient(134deg, #F7F5F5 25.37%, #33322D 132.95%)'
      }} data-name="Traditional Hiring">
        <div className="basis-0 content-stretch flex flex-col grow items-end justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Top Bar">
            <div className="relative shrink-0 size-[53.826px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
            <div
              className="shrink-0 size-6 relative cursor-help"
              data-name="Regular"
              onMouseEnter={() => setHoveredHelp('traditional')}
              onMouseLeave={() => setHoveredHelp(null)}
            >
              <Icon type="help" size="regular" color="white" />
              {hoveredHelp === 'traditional' && (
                <div className="absolute right-0 top-6 z-10">
                  <Tooltip position="bottom">
                    Traditional hiring processes typically involve multiple rounds of interviews, extensive paperwork, and lengthy decision-making cycles, resulting in 30+ day timeframes.
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Aptos:Semibold',_sans-serif] gap-2 items-end justify-end leading-[0] not-italic relative shrink-0 text-right text-white w-full" data-name="Bottom Bar">
            <div className="relative shrink-0 w-full" style={{
              color: '#FFF',
              textAlign: 'right',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H4, 36px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '36px',
              letterSpacing: '-1.8px'
            }}>
              <p className="leading-[36px]">30+ Days</p>
            </div>
            <div className="relative shrink-0 w-full" style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H6, 22px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '22px',
              letterSpacing: '-0.66px'
            }}>
              <p className="leading-[22px]">Traditional Hiring</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Only Hiring - 14 Days */}
      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[38.331px] h-[329px] items-start justify-start ml-[228px] mt-[74px] pb-[32.622px] pt-[40.777px] px-10 relative w-[458px]" style={{
        borderRadius: '0 36.7px 0 12.233px',
        borderTop: '4px solid #FFF',
        borderRight: '4.893px solid #FFF',
        background: 'linear-gradient(134deg, #F7F5F5 25.37%, #33322D 132.95%)'
      }} data-name="AI-Only Hiring">
        <div className="basis-0 content-stretch flex flex-col grow items-end justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Top Bar">
            <div className="relative shrink-0 size-[53.826px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
            <div
              className="shrink-0 size-6 relative cursor-help"
              data-name="Regular"
              onMouseEnter={() => setHoveredHelp('ai-only')}
              onMouseLeave={() => setHoveredHelp(null)}
            >
              <Icon type="help" size="regular" color="white" />
              {hoveredHelp === 'ai-only' && (
                <div className="absolute right-0 top-6 z-10">
                  <Tooltip position="bottom">
                    AI-only hiring relies solely on automated screening and algorithms, which can reduce time but may miss nuanced candidate qualities that human insight provides.
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Aptos:Semibold',_sans-serif] gap-2 items-end justify-end leading-[0] not-italic relative shrink-0 text-right text-white w-full" data-name="Bottom Bar">
            <div className="relative shrink-0 w-full" style={{
              color: '#FFF',
              textAlign: 'right',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H4, 36px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '36px',
              letterSpacing: '-1.8px'
            }}>
              <p className="leading-[36px]">14 Days</p>
            </div>
            <div className="relative shrink-0 w-full" style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H6, 22px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '22px',
              letterSpacing: '-0.66px'
            }}>
              <p className="leading-[22px]">AI-Only Hiring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elios - 7 Days */}
      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[38.331px] h-[261px] items-start justify-start ml-0 mt-[142px] pb-[32.622px] pt-[40.777px] px-10 relative rounded-tr-[36.7px] w-[375px]" style={{ background: 'linear-gradient(135deg, #fb5d0b 0%, #e55a10 100%)' }} data-name="Elios">
        <div aria-hidden="true" className="absolute border-[4px_4.893px_0px_0px] border-solid border-white inset-0 pointer-events-none rounded-tr-[36.7px]" />
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Top Bar">
            <div className="relative shrink-0 size-[53.826px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
            <div
              className="shrink-0 size-6 relative cursor-help"
              data-name="Regular"
              onMouseEnter={() => setHoveredHelp('elios')}
              onMouseLeave={() => setHoveredHelp(null)}
            >
              <Icon type="help" size="regular" color="white" />
              {hoveredHelp === 'elios' && (
                <div className="absolute right-0 top-6 z-10">
                  <Tooltip position="bottom">
                    Elios combines the best of both worlds: AI efficiency for screening and human expertise for final decisions, delivering quality hires in just 7 days.
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Aptos:Semibold',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-white w-full" data-name="Bottom Bar">
            <div className="h-11 relative shrink-0 w-[258px]" style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H3, 44px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '44px',
              letterSpacing: '-2.64px'
            }}>
              <p className="leading-[44px]">7 Days</p>
            </div>
            <div className="min-w-full relative shrink-0" style={{
              width: "min-content",
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H6, 22px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '22px',
              letterSpacing: '-0.66px'
            }}>
              <p className="leading-[22px]">Elios (Human + AI Hiring)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}