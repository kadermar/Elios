"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import EliosTalentDropdown from "./EliosTalentDropdown";
import ConnectDropdown from "./ConnectDropdown";

const imgEliosLogo = "/elios-logo-alt.svg";
const imgCarat = "/caret.svg";
const imgArrow = "/nav-arrow-alt.svg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showConnectDropdown, setShowConnectDropdown] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const connectHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleConnectClick = () => {
    // Redirect to connect page when clicked
    window.location.href = '/connect';
  };

  const handleConnectMouseEnter = () => {
    if (connectHoverTimeoutRef.current) {
      clearTimeout(connectHoverTimeoutRef.current);
    }
    connectHoverTimeoutRef.current = setTimeout(() => {
      setShowConnectDropdown(true);
    }, 200);
  };

  const handleConnectMouseLeave = () => {
    if (connectHoverTimeoutRef.current) {
      clearTimeout(connectHoverTimeoutRef.current);
    }
    connectHoverTimeoutRef.current = setTimeout(() => {
      setShowConnectDropdown(false);
    }, 150);
  };

  const handleConnectDropdownMouseEnter = () => {
    if (connectHoverTimeoutRef.current) {
      clearTimeout(connectHoverTimeoutRef.current);
    }
  };

  const handleConnectDropdownMouseLeave = () => {
    if (connectHoverTimeoutRef.current) {
      clearTimeout(connectHoverTimeoutRef.current);
    }
    connectHoverTimeoutRef.current = setTimeout(() => {
      setShowConnectDropdown(false);
    }, 150);
  };


  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('[data-dropdown-container]')) {
      setShowDropdown(false);
      setShowConnectDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown || showConnectDropdown) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown, showConnectDropdown]);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-40 flex flex-col gap-[10px] items-center justify-center self-stretch w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/25 backdrop-blur-sm' : 'bg-transparent'
    }`} data-name="Nav">
      <div className="flex items-center justify-between max-w-full lg:max-w-[1638px] px-4 lg:px-0 py-[30px] md:py-[60px] relative rounded-[8px] w-full" data-name="Wrapper">
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
          className="md:hidden flex flex-col gap-1 p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Mobile CTA buttons - visible on mobile */}
        <div className="md:hidden flex gap-2 items-center">
          <Link href="/book-demo" className="bg-[#fa6a20] flex items-center justify-center px-4 py-2 rounded-[8px] hover:bg-[#e85a10] transition-colors">
            <div className="font-semibold text-[12px] text-white">
              Book Demo
            </div>
          </Link>
        </div>

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
          
          <Link href="/insights" className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" data-name="Link">
            <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">Elios Insights</p>
            </div>
          </Link>
          
          <Link href="/about" className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" data-name="Link">
            <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">About</p>
            </div>
          </Link>
          
          <div 
            className="flex gap-1.5 items-center justify-start relative cursor-pointer hover:opacity-70 transition-opacity" 
            data-name="Link"
            data-dropdown-container
            onClick={handleConnectClick}
            onMouseEnter={handleConnectMouseEnter}
            onMouseLeave={handleConnectMouseLeave}
          >
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

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-white pt-28">
          <div className="flex flex-col gap-8 px-8 py-8">
            <div className="flex flex-col gap-2 items-start justify-start">
              <div className="font-semibold text-[#09141f] text-[20px] mb-2">
                Elios Talent
              </div>
              <div className="flex flex-col gap-4 pl-4 text-[#666] text-[16px]">
                <Link href="/request-talent" className="hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Request Talent</Link>
                <Link href="/staffing-services" className="hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Talent Solutions</Link>
                <Link href="/industries" className="hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              </div>
            </div>
            
            <Link href="/blog" className="font-semibold text-[#09141f] text-[20px] hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Elios Insights
            </Link>
            
            <Link href="/about" className="font-semibold text-[#09141f] text-[20px] hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            
            <div className="flex flex-col gap-2 items-start justify-start">
              <div className="font-semibold text-[#09141f] text-[20px] mb-2">
                Connect
              </div>
              <div className="flex flex-col gap-4 pl-4 text-[#666] text-[16px]">
                <Link href="/connect" className="hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                <Link href="/blog" className="hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                <Link href="/connect" className="hover:text-[#fa6a20] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 pt-8 border-t border-gray-200">
              <Link href="/request-talent" className="bg-gray-100 flex items-center justify-center px-6 py-4 rounded-[12px] hover:bg-gray-200 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="font-semibold text-[16px] text-black">
                  Request Talent
                </div>
              </Link>
              <Link href="/book-demo" className="bg-[#fa6a20] flex items-center justify-center px-6 py-4 rounded-[8px] hover:bg-[#e85a10] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="font-semibold text-[16px] text-white">
                  Book a Demo
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
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

    {/* Connect Dropdown positioned outside nav to avoid backdrop-blur inheritance */}
    {showConnectDropdown && (
      <div 
        className="fixed left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-auto"
        style={{ 
          top: isScrolled ? '150px' : '174px', 
          isolation: 'isolate',
          willChange: 'transform'
        }}
        data-dropdown-container
        onMouseEnter={handleConnectDropdownMouseEnter}
        onMouseLeave={handleConnectDropdownMouseLeave}
      >
        <ConnectDropdown />
      </div>
    )}
    </>
  );
}