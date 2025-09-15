"use client";

import { ReactNode } from "react";

const img = "/tooltip-arrow.svg";

interface TooltipProps {
  children?: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({ children, className = "", position = "bottom" }: TooltipProps) {
  const defaultContent = "Complete hiring processes from intake to signed offers. Our hybrid approach has enabled full team builds and critical role fills in under a week through AI-accelerated sourcing combined with recruiting expertise and streamlined decision-making.";

  if (position === "top") {
    return (
      <div className={`content-stretch flex flex-col items-center justify-start relative size-full ${className}`} data-name="Tooltip" data-node-id="3102:72510">
        <div className="h-[14.75px] relative shrink-0 w-[22.517px] rotate-180" data-name="Polygon" id="node-I3102_72510-2793_5909">
          <div className="absolute bottom-[8.79%] left-0 right-0 top-0">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[16px] relative rounded-[8px] shadow-[0px_66px_18px_0px_rgba(0,0,0,0),0px_42px_17px_0px_rgba(0,0,0,0.01),0px_24px_14px_0px_rgba(0,0,0,0.02),0px_10px_10px_0px_rgba(0,0,0,0.03),0px_3px_6px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Tooltip" id="node-I3102_72510-2793_5907">
          <div className="basis-0 font-['Aptos:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0f1012] text-[14px]" id="node-I3102_72510-2793_5908">
            <p className="leading-[18px]">{children || defaultContent}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`content-stretch flex flex-col items-center justify-start relative size-full ${className}`} data-name="Tooltip" data-node-id="3102:72510">
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[16px] relative rounded-[8px] shadow-[0px_66px_18px_0px_rgba(0,0,0,0),0px_42px_17px_0px_rgba(0,0,0,0.01),0px_24px_14px_0px_rgba(0,0,0,0.02),0px_10px_10px_0px_rgba(0,0,0,0.03),0px_3px_6px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Tooltip" id="node-I3102_72510-2793_5907">
        <div className="basis-0 font-['Aptos:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0f1012] text-[14px]" id="node-I3102_72510-2793_5908">
          <p className="leading-[18px]">{children || defaultContent}</p>
        </div>
      </div>
      <div className="h-[14.75px] relative shrink-0 w-[22.517px]" data-name="Polygon" id="node-I3102_72510-2793_5909">
        <div className="absolute bottom-[8.79%] left-0 right-0 top-0">
          <img alt="" className="block max-w-none size-full" src={img} />
        </div>
      </div>
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