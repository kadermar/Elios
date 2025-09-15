"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import EliosTalentDropdown from "./EliosTalentDropdown";
import ConnectDropdown from "./ConnectDropdown";
import Button from "./Button";
import Logo from "./Logo";
import Link from "./Link";

const imgCarat = "/caret.svg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showConnectDropdown, setShowConnectDropdown] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const connectHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' : 'bg-transparent'
    }`} data-name="Nav" style={isScrolled ? {
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      backgroundColor: 'rgba(255, 255, 255, 0.85)'
    } : {}}>
      <div className="flex items-center justify-between max-w-full lg:max-w-[1638px] px-4 lg:px-0 py-[30px] md:py-[60px] relative rounded-[8px] w-full" data-name="Wrapper">
        <Logo variant={isScrolled ? "icon" : "full"} size="md" href="/" />
        
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
          
          <Link href="/insights" variant="nav" className="text-nowrap">
            Elios Insights
          </Link>
          
          <Link href="/about" variant="nav" className="text-nowrap">
            About
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
          <Button
            variant="secondary"
            size="md"
            href="/request-talent"
          >
            Request Talent
          </Button>

          <Button
            variant="primary"
            size="sm"
            href="/book-demo"
            showArrow={true}
          >
            Book a Demo
          </Button>
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
              <Button
                variant="secondary"
                size="md"
                href="/request-talent"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                Request Talent
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/book-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                showArrow={true}
                className="w-full"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
    
    {/* Dropdown positioned outside nav to avoid backdrop-blur inheritance */}
    {showDropdown && (
      <div
        className="fixed left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-auto w-full max-w-[1800px] px-4"
        style={{
          top: isScrolled ? '80px' : '120px',
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
          top: isScrolled ? '80px' : '120px',
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