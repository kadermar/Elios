"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import Button from "./Button";

const imgTalentGlobe = "/images/talet-globe-colorized.png";
const imgWarpSpeed = "/images/warp-speed-colorized.png";

interface ServiceCardProps {
  type?: "Talent" | "Insights";
  className?: string;
}

export default function ServiceCard({ type = "Talent", className = "" }: ServiceCardProps) {
  const config = {
    Talent: {
      title: "Elios Talent",
      description: "Our high-touch recruiting service, powered by experienced recruiters who work with clients to fill critical roles. We blend deep industry knowledge with AI-enhanced workflows, to deliver a human-centered experience that ensures long-lasting organizational impact.",
      features: [
        "Dedicated recruiters who know your industry inside and out",
        "Curated network built from 1000s of successful placements",
        "Structured process for intake, shortlisting, and interview prep",
        "Human judgment supported by data and market insights"
      ],
      buttonText: "Request Talent",
      buttonHref: "/request-talent",
      bgImage: imgTalentGlobe
    },
    Insights: {
      title: "Elios Insights",
      description: "Our AI layer transforms your ATS into a hiring intelligence powerhouse. Our platform automates recruiter workflows while surfacing top candidates faster, empowering your teams to focus on high-value conversations and strong decision-making.",
      features: [
        "AI matching on top of your ATS",
        "Automated scheduling, feedback, and interview coordination",
        "Real-time dashboards for funnel health and KPIs",
        "Recruiter-in-the-loop so humans stay in control"
      ],
      buttonText: "Book a Demo",
      buttonHref: "/book-demo",
      bgImage: imgWarpSpeed
    }
  };

  const currentConfig = config[type];

  return (
    <div className={`basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0 ${className}`}>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start overflow-clip pb-16 pt-4 px-4 relative size-full">
        {/* Image Container */}
        <div className="content-stretch flex gap-2.5 h-[350px] items-start justify-start overflow-clip relative shrink-0 w-full">
          <div className="aspect-[1682/1682] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-[4px] shrink-0" style={{ backgroundImage: `url('${currentConfig.bgImage}')` }} />
        </div>

        {/* Content */}
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-6 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              {/* Header */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div
                  className="relative shrink-0 text-nowrap"
                  style={{
                    color: '#09141F',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
                    fontSize: 'var(--Typeface-Size-H4, 36px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '36px',
                    letterSpacing: '-1.8px'
                  }}
                >
                  <p className="whitespace-pre">{currentConfig.title}</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[62px]">
                  <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <Icon type={type === "Talent" ? "globe-03" : "data"} size="regular" color="#09141f" />
                </div>
              </div>

              {/* Description */}
              <div
                className="relative shrink-0 w-full"
                style={{
                  color: 'var(--Neutral-Medium-Gray, #595959)',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                  fontSize: 'var(--Typeface-Size-Paragraph-md, 16px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <p>{currentConfig.description}</p>
              </div>
            </div>

            {/* Features List */}
            <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
              {currentConfig.features.map((feature, index) => (
                <div key={index} className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
                  <div className="shrink-0 size-4 flex items-center justify-center">
                    <Icon type="check" size="sm" color="#0f1012" />
                  </div>
                  <div className="h-full relative shrink-0 w-[540px]" style={{
                    color: '#000',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                    fontSize: 'var(--Typeface-Size-Paragraph-sm, 14px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '18px'
                  }}>
                    <p>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <Button
            variant="primary"
            size="lg"
            href={currentConfig.buttonHref}
            showArrow={true}
            className="shrink-0"
          >
            {currentConfig.buttonText}
          </Button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}