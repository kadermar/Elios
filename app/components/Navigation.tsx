"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import EliosTalentDropdown from "./EliosTalentDropdown";

const imgEliosLogo = "/elios-logo-alt.svg";
const imgCarat = "/caret.svg";
const imgArrow = "/nav-arrow-alt.svg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(true);
    }, 200); // 200ms delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150); // Slightly shorter delay for closing
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150);
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
    <nav className={`fixed top-0 left-0 right-0 z-40 flex flex-col gap-[10px] items-center justify-center self-stretch w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/25 backdrop-blur-sm' : 'bg-transparent'
    }`} data-name="Nav">
      <div className="flex items-center justify-between max-w-[1638px] px-4 md:px-0 py-[30px] md:py-[60px] relative rounded-[8px] w-full" data-name="Wrapper">
        <Link href="/" className="h-[49.999px] relative w-[126.2px]" data-name="Elios Logo">
          <Image
            alt="Elios"
            src={imgEliosLogo}
            width={126}
            height={50}
            className="block max-w-none w-full h-full"
          />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-9 items-center justify-start p-[20px] relative rounded-[18px]" data-name="Nav List">
          <div 
            className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" 
            data-name="Link"
            data-dropdown-container
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">Elios Talent</p>
            </div>
            <div className="relative w-3.5 h-3.5" data-name="Carat">
              <Image
                alt="Dropdown"
                src={imgCarat}
                width={14}
                height={14}
                className="block max-w-none w-full h-full"
              />
            </div>
          </div>
          
          <div className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" data-name="Link">
            <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">Elios Insights</p>
            </div>
          </div>
          
          <div className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" data-name="Link">
            <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">About</p>
            </div>
          </div>
          
          <div className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" data-name="Link">
            <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">Connect</p>
            </div>
            <div className="relative w-3.5 h-3.5" data-name="Carat">
              <Image
                alt="Dropdown"
                src={imgCarat}
                width={14}
                height={14}
                className="block max-w-none w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 items-center justify-start relative" data-name="Button Row">
          <Link href="/request-talent" className="flex gap-[3px] items-center justify-center px-[22px] py-[18px] relative rounded-[12px] hover:bg-gray-50 transition-colors" data-name="Min Secondary Button">
            <div className="font-semibold leading-[0] not-italic relative text-[14px] text-black text-center text-nowrap">
              <p className="leading-[20px] whitespace-pre">Request Talent</p>
            </div>
          </Link>
          
          <Link href="/book-demo" className="bg-[#fa6a20] flex gap-2 items-center justify-center px-5 py-4 relative rounded-[8px] hover:bg-[#e85a10] transition-colors" data-name="Min Primary Button">
            <div className="font-semibold leading-[0] not-italic relative text-[14px] text-center text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">Book a Demo</p>
            </div>
            <div className="relative w-3 h-3">
              <div className="absolute inset-[15.67%_15%]">
                <div className="absolute inset-[-7.8%_-7.65%]">
                  <Image
                    alt="Arrow"
                    src={imgArrow}
                    width={12}
                    height={12}
                    className="block max-w-none w-full h-full"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
    
    {/* Dropdown positioned outside nav to avoid backdrop-blur inheritance */}
    {showDropdown && (
      <div 
        className="fixed left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-auto"
        style={{ 
          top: isScrolled ? '150px' : '174px', 
          isolation: 'isolate',
          willChange: 'transform'
        }}
        data-dropdown-container
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <EliosTalentDropdown />
      </div>
    )}
    </>
  );
}