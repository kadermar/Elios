"use client";

import CaseStudyLinkSmall from "./CaseStudyLinkSmall";
import Tagline from "./Tagline";
import BarChartIllustration from "./BarChartIllustration";

export default function EliosDifference() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[104px] items-center justify-center max-w-[1800px] relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full" data-name="Subhead Section">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            <Tagline text="The Elios Difference" />
            <div
              className="relative shrink-0 text-nowrap"
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
              <p>From months to days.<br />Hiring at the speed of business.</p>
            </div>
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
            <p>Elios combines elite recruiters with an intelligent AI layer that reduces the noise and moves the right people to you. Fast.</p>
          </div>
        </div>
        <BarChartIllustration />
        <CaseStudyLinkSmall
          title="See how we hired a complete team for Weatherford in 7 days"
          highlightText="7 days"
          href="/case-studies/weatherford"
          className="w-[784px] h-[177px]"
        />
      </div>
    </div>
  );
}