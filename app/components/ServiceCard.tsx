"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  type?: "Talent" | "Insights";
  className?: string;
}

export default function ServiceCard({ type = "Talent", className = "" }: ServiceCardProps) {
  const isTalent = type === "Talent";
  
  const config = {
    Talent: {
      title: "Elios Talent",
      description: "Our high-touch recruiting service. Powered by experienced recruiters who work side-by-side our clients to fill critical roles.",
      features: [
        "Dedicated recruiters who know your industry inside and out",
        "Curated network built from 1000s of successful placements",
        "Structured process for intake, shortlisting, and interview prep",
        "Human judgment supported by data and market insights"
      ],
      buttonText: "Request Talent",
      buttonHref: "/request-talent",
      bgImage: "/service-talent-bg.png",
      bgOverlay: "/service-card-flare.svg",
      bgClass: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    Insights: {
      title: "Elios Insights",
      description: "Our high-touch recruiting service. Powered by experienced recruiters who work side-by-side our clients to fill critical roles.",
      features: [
        "Dedicated recruiters who know your industry inside and out",
        "Curated network built from 1000s of successful placements",
        "Structured process for intake, shortlisting, and interview prep",
        "Human judgment supported by data and market insights"
      ],
      buttonText: "Request Talent",
      buttonHref: "/insights",
      bgImage: "/service-insights-bg.png",
      bgOverlay: null,
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100"
    }
  };

  const currentConfig = config[type];

  return (
    <div className={`bg-white rounded-[6px] border border-[#ececec] overflow-hidden ${className}`}>
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="relative h-[351px] w-full overflow-hidden bg-stone-100">
          {/* Background pattern/image */}
          <div className="absolute inset-0">
            <Image
              src={currentConfig.bgImage}
              alt=""
              fill
              className="object-cover mix-blend-multiply"
            />
          </div>
          
          {/* Overlay effect for Talent variant */}
          {currentConfig.bgOverlay && (
            <div className="absolute inset-0 mix-blend-screen">
              <Image
                src={currentConfig.bgOverlay}
                alt=""
                fill
                className="object-cover opacity-60"
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 pb-16">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#09141f] text-[36px] leading-[36px] font-semibold tracking-[-1.8px]">
                    {currentConfig.title}
                  </h3>
                  
                  {/* Icon placeholder - globe or graph icon */}
                  <div className="w-[62px] h-[62px] rounded-[16px] border border-[#e6e6e6] flex items-center justify-center">
                    {isTalent ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 20V10" />
                        <path d="M12 20V4" />
                        <path d="M6 20v-6" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <p className="text-[#595959] text-[16px] leading-[20px]">
                  {currentConfig.description}
                </p>
              </div>
              
              {/* Features List */}
              <div className="flex flex-col gap-2">
                {currentConfig.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path 
                          d="M13.5 4.5L6 12L2.5 8.5" 
                          stroke="#fb5d0b" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[14px] leading-[18px] font-semibold text-black flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <Link 
              href={currentConfig.buttonHref}
              className="bg-[#fb5d0b] hover:bg-[#e85a10] rounded-[12px] h-[62px] flex items-center justify-center gap-4 pl-6 pr-2 transition-colors"
            >
              <span className="text-white text-[16px] leading-[20px] font-semibold">
                {currentConfig.buttonText}
              </span>
              <div className="bg-white rounded-[7px] w-[46px] h-[46px] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path 
                    d="M6 3L11 8L6 13" 
                    stroke="#fb5d0b" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}