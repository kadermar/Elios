"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";

const imgCaseStudy2 = "/case-study-bg-new.png";

interface CaseStudyLinkSmallProps {
  title?: string;
  highlightText?: string;
  backgroundImage?: string;
  href?: string;
  className?: string;
}

export default function CaseStudyLinkSmall({
  title = "See how we hired a complete team for Weatherford in 7 days",
  highlightText = "7 days",
  href = "/case-studies/weatherford",
  className = ""
}: CaseStudyLinkSmallProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="box-border content-stretch flex items-center justify-between overflow-hidden p-[32px] relative rounded-[6px] size-full">
        {/* Background Image */}
        <Image
          src={imgCaseStudy2}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Content Container */}
        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px relative shrink-0 z-10">
          {/* Case Study Label */}
          <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
            <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fb5d0b] text-[16px] text-nowrap uppercase">
              <p className="leading-[20px] whitespace-pre">case study</p>
            </div>
          </div>

          {/* Title */}
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 max-w-[500px]">
            <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-white tracking-[-0.84px] w-full">
              <p className="leading-[28px] text-[28px]">
                <span>See how we hired a complete team for Weatherford in </span>
                <span className="underline decoration-solid underline-offset-2">7 days</span>
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px] z-10">
          <Icon type="arrow" size="sm" color="#000000" />
        </div>

        {/* Hover Effects */}
        {isHovered && (
          <>
            <div className="absolute inset-[-3px] pointer-events-none shadow-[0px_4px_24px_0px_inset_#fb5d0b]" />
            <div aria-hidden="true" className="absolute border-[#fb5d0b] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[9px]" />
          </>
        )}
      </div>
    </Link>
  );
}