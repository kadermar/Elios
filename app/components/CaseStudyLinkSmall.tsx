"use client";

import Link from "next/link";
import { useState } from "react";

interface CaseStudyLinkSmallProps {
  title: string;
  highlightText?: string;
  backgroundImage?: string;
  href?: string;
  className?: string;
}

export default function CaseStudyLinkSmall({
  title,
  highlightText = "7 days",
  backgroundImage = "/elios-difference-case-study-bg.png",
  href = "/case-studies/weatherford",
  className = ""
}: CaseStudyLinkSmallProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`block relative rounded-[6px] h-[177px] overflow-hidden group transition-all duration-300 ${
        isHovered ? 'ring-[3px] ring-[#fb5d0b] shadow-[0px_4px_24px_0px_inset_#fb5d0b]' : ''
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Mask */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: '101.1% -147.27%',
          backgroundSize: '86% 85.9%'
        }}
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute h-full left-0 top-0 w-[511px] bg-gradient-to-r from-black/80 via-black/40 to-transparent"
      />

      {/* Content */}
      <div className="relative h-full flex items-center justify-between p-8">
        <div className="flex flex-col justify-between h-full flex-1">
          {/* Tagline */}
          <div className="inline-flex">
            <span className="text-[#fb5d0b] text-[16px] leading-[20px] font-semibold uppercase">
              case study
            </span>
          </div>

          {/* Title */}
          <div className="max-w-[429px]">
            <h3 className="text-white text-[28px] leading-[28px] font-semibold tracking-[-0.84px]">
              {title.split(highlightText).map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="underline decoration-solid underline-offset-2">
                      {highlightText}
                    </span>
                  )}
                </span>
              ))}
            </h3>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="bg-white rounded-[7px] w-[46px] h-[46px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            className="text-[#fb5d0b]"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}