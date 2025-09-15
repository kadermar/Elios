"use client";

import Tagline from "./Tagline";
import ServiceCard from "./ServiceCard";

const imgImage56 = "/services-image-56.png";
const imgImage58 = "/services-image-58.png";
const imgVector622 = "/services-vector-622.svg";
const imgImage57 = "/services-image-57.svg";
const imgUnion = "/services-union.svg";
const img = "/services-arrow.svg";

export default function Services() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] md:gap-[90px] items-center justify-center px-4 md:px-0 py-[80px] md:py-[152px] relative size-full" data-name="Services" data-node-id="65:1164">
      <div className="content-stretch flex flex-col gap-[80px] md:gap-[120px] items-center justify-center max-w-full lg:max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="65:1191">
        <div className="content-stretch flex flex-col gap-6 items-start justify-center relative size-full" data-name="Subhead Section" data-node-id="65:1192">
          <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full" data-name="Top">
            <Tagline text="services" />
            <div
              className="relative shrink-0 text-nowrap"
              style={{
                color: 'var(--Neutral-Charcoal, #0F1012)',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
                fontSize: 'var(--Typeface-Size-H2, 54px)',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '54px',
                letterSpacing: '-3.24px'
              }}
            >
              <p className="leading-[54px] whitespace-pre">Two offerings. One Mission.</p>
            </div>
          </div>
          <div
            className="relative shrink-0 w-[635px]"
            style={{
              color: '#535960',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Body, Aptos)',
              fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px; /* 120% */'
            }}
          >
            <p className="leading-[24px]">Elios blends high-touch recruiters (Elios Talent) with an AI platform (Elios Insights) that sits over your ATS. We deliver explainable Candidate FitScores, orchestrate scheduling, and standardize feedback—keeping humans in the loop for faster, fairer hiring.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-stretch justify-start relative shrink-0 w-full" data-node-id="65:1197">
          <ServiceCard type="Talent" />
          <ServiceCard type="Insights" />
        </div>
      </div>
    </div>
  );
}