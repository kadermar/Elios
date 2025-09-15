"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";

interface DropdownMenuItem {
  icon: string;
  title: string;
  description?: string;
  href: string;
}

interface DropdownSection {
  title: string;
  items: DropdownMenuItem[];
}

interface NavigationDropdownProps {
  title: string;
  sections: DropdownSection[];
  featureTitle?: string;
  featureDescription?: string;
  featureImage?: string;
  className?: string;
}

export default function NavigationDropdown({
  title,
  sections,
  featureTitle = "Why Elios Talent?",
  featureDescription = "Because finding the right people isn't about volume—it's about precision. Elios combines AI matching with human expertise to deliver top candidates faster, tailored to your industry's unique challenges.",
  featureImage = "/dropdown-service-bg.png",
  className = ""
}: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Trigger */}
      <button
        className="flex items-center gap-1 text-[14px] font-semibold text-[#0f1012] hover:text-[#fb5d0b] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{title}</span>
        <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <Icon type="chevron-down" size="sm" />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/10 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Content */}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-[8px] shadow-[0px_167px_47px_0px_rgba(0,0,0,0),0px_107px_43px_0px_rgba(0,0,0,0.01),0px_60px_36px_0px_rgba(0,0,0,0.02),0px_27px_27px_0px_rgba(0,0,0,0.03),0px_7px_15px_0px_rgba(0,0,0,0.04)] z-50 w-[1437px] max-w-[calc(100vw-2rem)]"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex gap-8 items-start justify-start p-8">
              {/* Feature Section */}
              <div className="basis-0 flex flex-col gap-6 grow items-start justify-center pr-6">
                <h3 className="font-semibold text-[22px] text-[#09141f] tracking-[-0.66px] leading-[22px]">
                  {featureTitle}
                </h3>
                <p className="font-normal text-[14px] text-[#535960] leading-[18px]">
                  {featureDescription}
                </p>
                
                {/* Feature Image */}
                <div className="relative w-full">
                  <div className="grid grid-cols-1 place-items-start relative w-full">
                    {/* Flare Effect */}
                    <div className="grid-area-1-1 flex h-[351px] items-center justify-center relative w-[700px] -ml-[157px] -mt-[69px]">
                      <div className="flex-none h-[351px] w-[700px] scale-y-[-100%]">
                        <div 
                          className="relative size-full"
                          style={{
                            maskImage: `url('/dropdown-flare.svg')`,
                            maskPosition: '157px 69px',
                            maskSize: '286px 148px',
                            maskRepeat: 'no-repeat'
                          }}
                        >
                          <div className="absolute inset-[-22%_-12%_-24%_-12%]">
                            <Image
                              src="/dropdown-flare-inner.svg"
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Image */}
                    <div 
                      className="grid-area-1-1 h-[411px] w-[471px] -ml-[84px] -mt-[33px] rounded-[4px] bg-cover bg-center mix-blend-multiply"
                      style={{
                        backgroundImage: `url(${featureImage})`,
                        maskImage: `url('/dropdown-flare.svg')`,
                        maskPosition: '84px 33px',
                        maskSize: '286px 148px',
                        maskRepeat: 'no-repeat'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Menu Sections */}
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="basis-0 flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-[14px] text-[#0f1012] leading-[18px]">
                      {section.title}
                    </span>
                    <Icon type="chevron-right" size="sm" />
                  </div>
                  
                  <div className="flex flex-col items-start justify-start w-full">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="w-full py-2.5 px-0 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex gap-4 items-center justify-start w-[310px]">
                          <div className="bg-[#f4f4f4] flex items-center justify-center p-[14px] rounded-[2px] w-11 h-11">
                            <div className="w-5 h-5">
                              {/* Icon placeholder - you can replace with actual icons */}
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px">
                            <div className="font-semibold text-[14px] text-[#09141f] leading-[18px] w-full">
                              {item.title}
                            </div>
                            {item.description && (
                              <div className="font-normal text-[14px] text-[#535960] leading-[18px] w-full">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}