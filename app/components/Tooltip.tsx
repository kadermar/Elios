"use client";

import { ReactNode } from "react";

// Inline SVG for tooltip pointer
const TooltipPointer = () => (
  <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 0L22.5 14.5H0.5L11.5 0Z" fill="white"/>
  </svg>
);

interface TooltipProps {
  children: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({ children, className = "", position = "bottom" }: TooltipProps) {
  return (
    <div className={`content-stretch flex flex-col items-center justify-start relative ${className}`} data-name="Tooltip">
      {position === "top" && (
        <div className="h-[14.75px] relative shrink-0 w-[22.517px] rotate-180 mb-0" data-name="Polygon">
          <div className="absolute bottom-[8.79%] left-0 right-0 top-0">
            <TooltipPointer />
          </div>
        </div>
      )}
      
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[16px] relative rounded-[8px] shadow-[0px_66px_18px_0px_rgba(0,0,0,0),0px_42px_17px_0px_rgba(0,0,0,0.01),0px_24px_14px_0px_rgba(0,0,0,0.02),0px_10px_10px_0px_rgba(0,0,0,0.03),0px_3px_6px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Tooltip Content">
        <div className="basis-0 font-['Aptos:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0f1012] text-[14px]">
          <div className="leading-[18px]">{children}</div>
        </div>
      </div>
      
      {position === "bottom" && (
        <div className="h-[14.75px] relative shrink-0 w-[22.517px] mt-0" data-name="Polygon">
          <div className="absolute bottom-[8.79%] left-0 right-0 top-0">
            <TooltipPointer />
          </div>
        </div>
      )}
    </div>
  );
}

// Example usage component for demonstration
export function TooltipExample() {
  return (
    <Tooltip>
      <p>
        7 days reflects peak performance from intake to qualified shortlist in optimal conditions with defined requirements and responsive decision-making.
        <br />
        <br />
        Results vary by role complexity, market conditions, and organizational readiness.
        <br />
        Median performance typically ranges 7-14 days.
      </p>
    </Tooltip>
  );
}