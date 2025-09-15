"use client";

import React, { useState } from "react";
import Image from "next/image";

const imgCloseIcon = "/accordion-close-icon.svg";

interface AccordionProps {
  question: string;
  answer: string;
  isOpenByDefault?: boolean;
  className?: string;
}

export default function Accordion({
  question,
  answer,
  isOpenByDefault = false,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`bg-white rounded-[6px] border border-[#ececec] transition-all duration-300 hover:shadow-sm ${className}`}
    >
      <button
        onClick={handleToggle}
        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#fb5d0b] focus:ring-offset-2 rounded-[6px]"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Question */}
          <h3 className="font-semibold text-[#0f1012] text-[22px] leading-[22px] tracking-[-0.66px] flex-1">
            {question}
          </h3>
          
          {/* Icon */}
          <div 
            className={`flex items-center justify-center w-[30px] h-[30px] rounded-[4px] transition-all duration-200 ${
              isOpen 
                ? 'bg-[#0f1012]' 
                : 'bg-[#fb5d0b]'
            }`}
          >
            {isOpen ? (
              // Close icon (×) - white on black background
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Plus icon (+) - white on orange background
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                <path
                  d="M8 3.5V12.5M3.5 8H12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
        
        {/* Answer - Expandable Content */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-[#595959] text-[16px] leading-[20px] pr-10">
            {answer}
          </div>
        </div>
      </button>
    </div>
  );
}