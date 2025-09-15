"use client";

import Image from "next/image";

interface CaseStudyLinkProps {
  logoSrc: string;
  logoAlt: string;
  backgroundSrc: string;
  title: string;
  metric1: string;
  metric2: string;
  href?: string;
  className?: string;
}

export default function CaseStudyLink({
  logoSrc,
  logoAlt,
  backgroundSrc,
  title,
  metric1,
  metric2,
  href,
  className = "",
}: CaseStudyLinkProps) {
  const content = (
    <div
      className={`bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-8 h-[400px] items-start justify-end p-8 relative rounded-3xl w-[280px] ${className}`}
      style={{ backgroundImage: `url('${backgroundSrc}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-3xl pointer-events-none" />

      <div className="relative z-10 content-stretch flex flex-col gap-8 items-start justify-end size-full">
        <div className="content-stretch flex items-start justify-start relative w-full">
          <div className="bg-white box-border flex h-16 items-center justify-center p-4 relative rounded-2xl shrink-0 w-16">
            <Image
              alt={logoAlt}
              src={logoSrc}
              width={32}
              height={32}
              className="block max-w-none"
            />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-4 items-start justify-start relative w-full">
          <div
            className="relative w-full"
            style={{
              color: "var(--Neutral-White, #FFF)",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "var(--Typeface-Family-Heading, Aptos)",
              fontSize: "var(--Typeface-Size-H3, 24px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "28px"
            }}
          >
            <p>{title}</p>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative w-full">
            <div
              className="relative w-full"
              style={{
                color: "var(--Neutral-White, #FFF)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "var(--Typeface-Family-Body, Aptos)",
                fontSize: "var(--Typeface-Size-Paragraph-md, 16px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px"
              }}
            >
              <p>{metric1}</p>
            </div>
            <div
              className="relative w-full"
              style={{
                color: "var(--Neutral-White, #FFF)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "var(--Typeface-Family-Body, Aptos)",
                fontSize: "var(--Typeface-Size-Paragraph-md, 16px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px"
              }}
            >
              <p>{metric2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}