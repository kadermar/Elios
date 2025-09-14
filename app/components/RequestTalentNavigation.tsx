"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import EliosTalentDropdown from "./EliosTalentDropdown";
import Logo from "./Logo";

const imgCarat = "/request-talent-nav-caret.svg";
const imgNavArrow = "/request-talent-nav-arrow.svg";

export default function RequestTalentNavigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('[data-dropdown-container]')) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
    <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-full" data-name="Nav" data-node-id="102:1305">
      <div className="box-border content-stretch flex items-center justify-between max-w-[1638px] px-0 py-[60px] relative rounded-[8px] shrink-0 w-full" data-name="Wrapper" data-node-id="102:1306">
        <Logo variant="full" size="md" href="/" className="h-[49.999px] w-[126.2px]" />
        <div className="box-border content-stretch flex gap-9 items-center justify-start p-[20px] relative rounded-[18px] shrink-0" data-name="Nav List" data-node-id="102:1340">
          <div 
            className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
            data-name="Link" 
            data-node-id="102:1341"
            data-dropdown-container
            onClick={handleClick}
          >
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center text-nowrap" data-node-id="102:1342">
              <p className="leading-[22px] whitespace-pre">Elios Talent</p>
            </div>
            <div className="relative shrink-0 size-3.5" data-name="Carat" data-node-id="102:1343">
              <Image alt="" src={imgCarat} width={14} height={14} className="block max-w-none size-full" />
            </div>
          </div>
          <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-name="Link" data-node-id="102:1345">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center text-nowrap" data-node-id="102:1346">
              <p className="leading-[22px] whitespace-pre">Elios Insights</p>
            </div>
          </div>
          <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-name="Link" data-node-id="102:1347">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center text-nowrap" data-node-id="102:1349">
              <p className="leading-[22px] whitespace-pre">About</p>
            </div>
          </div>
          <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-name="Link" data-node-id="102:1350">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center text-nowrap" data-node-id="102:1351">
              <p className="leading-[22px] whitespace-pre">Connect</p>
            </div>
            <div className="relative shrink-0 size-3.5" data-name="Carat" data-node-id="102:1352">
              <Image alt="" src={imgCarat} width={14} height={14} className="block max-w-none size-full" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Button Row" data-node-id="102:1354">
          <div className="box-border content-stretch flex gap-[3px] items-center justify-center px-[22px] py-[18px] relative rounded-[12px] shrink-0 hover:bg-gray-50 transition-colors cursor-pointer" data-name="Min Secondary Button" data-node-id="102:1355">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap" data-node-id="102:1356">
              <p className="leading-[20px] whitespace-pre">Request Talent</p>
            </div>
          </div>
          <div className="bg-[#fa6a20] box-border content-stretch flex gap-2 items-center justify-center px-5 py-4 relative rounded-[8px] shrink-0 hover:bg-[#e85a10] transition-colors cursor-pointer" data-name="Min Primary Button" data-node-id="102:1357">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white" data-node-id="102:1358">
              <p className="leading-[20px] whitespace-pre">Book a Demo</p>
            </div>
            <div className="relative shrink-0 size-3" data-name="Line Rounded/Arrow rigth" data-node-id="102:1359">
              <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth" id="node-I102_1359-4940_34491">
                <div className="absolute inset-[-7.8%_-7.65%]">
                  <Image alt="" src={imgNavArrow} width={12} height={12} className="block max-w-none size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Dropdown positioned outside nav to avoid any blur inheritance */}
    {showDropdown && (
      <div 
        className="fixed left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-auto"
        style={{ 
          top: '150px', 
          isolation: 'isolate',
          willChange: 'transform'
        }}
        data-dropdown-container
      >
        <EliosTalentDropdown />
      </div>
    )}
    </>
  );
}