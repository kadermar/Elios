"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Tagline from "./Tagline";

const imgVector622 = "/vector-622.svg";
const imgDrataWordmarkDark01 = "/drata-wordmark-dark-01.svg";
const imgAmplifyChangeLogo01 = "/amplify-change-logo-01.svg";
const imgGroup = "/samsung-group.svg";
const img = "/testimonials-arrow-left.svg";
const img1 = "/testimonials-arrow-right.svg";

const testimonials = [
  {
    id: 1,
    company: "Drata",
    logo: imgDrataWordmarkDark01,
    quote: "Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.",
    author: "Darren Styles, CEO",
    bgColor: "bg-white",
    logoWidth: 120,
    logoHeight: 21,
    isHighlighted: false
  },
  {
    id: 2,
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    quote: "I absolutely love this company.",
    author: "Darren Styles, CEO",
    bgColor: "bg-white",
    logoWidth: 130,
    logoHeight: 40,
    isHighlighted: true
  },
  {
    id: 3,
    company: "Samsung",
    logo: imgGroup,
    quote: "Duran and Ben hit it out of the park with our team.",
    author: "Jun Young-hyun, Talent Leader",
    bgColor: "bg-white",
    logoWidth: 141,
    logoHeight: 22,
    isHighlighted: false
  },
  {
    id: 4,
    company: "Drata",
    logo: imgDrataWordmarkDark01,
    quote: "Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.",
    author: "Darren Styles, CEO",
    bgColor: "bg-[#e0f1fe]",
    logoWidth: 120,
    logoHeight: 21,
    isHighlighted: false
  },
  {
    id: 5,
    company: "Samsung",
    logo: imgGroup,
    quote: "Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.",
    author: "Jun Young-hyun, Talent Leader",
    bgColor: "bg-[#fae6a4]",
    logoWidth: 141,
    logoHeight: 22,
    isHighlighted: false
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate scroll amount for each navigation action
  const getScrollAmount = () => {
    if (typeof window === 'undefined') return 632 + 20; // fallback for SSR
    const viewportWidth = window.innerWidth;
    const cardWidth = 632;
    const gap = 20;
    
    // Scroll by visible viewport width sections
    if (viewportWidth < 768) return cardWidth + gap; // mobile: 1 card per scroll
    if (viewportWidth < 1024) return (cardWidth + gap) * 2; // tablet: 2 cards per scroll  
    return (cardWidth + gap) * 3; // desktop: 3 cards per scroll
  };

  // Initialize scroll position to the middle copy for infinite loop
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const totalSectionWidth = (632 + 20) * 5; // 5 cards per row
      // Start at the second copy (middle)
      container.scrollTo({ left: totalSectionWidth, behavior: 'auto' });
    }
  }, []);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current && !isTransitioning) {
      setIsTransitioning(true);
      const container = scrollContainerRef.current;
      const scrollAmount = getScrollAmount();
      const totalSectionWidth = (632 + 20) * 5; // Total width of one complete set
      
      // Update section index for infinite loop
      const newSection = direction === 'next' 
        ? currentSection + 1
        : currentSection - 1;
      setCurrentSection(newSection);
      
      // Scroll by the calculated amount
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      
      // Handle infinite loop by resetting position when needed
      setTimeout(() => {
        const currentScroll = container.scrollLeft;
        
        // If we've scrolled too far left (approaching first copy edge), jump to middle copy
        if (currentScroll <= scrollAmount * 0.5) {
          container.scrollTo({ 
            left: currentScroll + totalSectionWidth, 
            behavior: 'auto' 
          });
        }
        // If we've scrolled too far right (approaching third copy edge), jump back to middle copy
        else if (currentScroll >= totalSectionWidth * 3 - scrollAmount * 0.5) {
          container.scrollTo({ 
            left: currentScroll - totalSectionWidth, 
            behavior: 'auto' 
          });
        }
        
        setIsTransitioning(false);
      }, 400);
    }
  };

  const handlePrev = () => handleScroll('prev');
  const handleNext = () => handleScroll('next');

  return (
    <div className="w-full py-[152px] relative" data-name="Testimonials">
      {/* Header Section - Constrained */}
      <div className="flex flex-col gap-10 items-center justify-center px-4 lg:px-12 relative w-full mb-[90px]" data-name="Subhead Section">
        <Tagline text="testimonials" className="px-0 py-[18px]" />
        <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[64px] text-center tracking-[-3.2px] max-w-4xl">
          <p className="leading-[0.9]">Proven Results, Real Impact</p>
        </div>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full" data-name="Testimonials Carousel">
        {/* Horizontal Scroll Container - Full Width with Edge Padding */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth w-full pl-4 pr-4 lg:pl-12 lg:pr-12"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollPaddingLeft: '1rem',
            scrollPaddingRight: '1rem'
          }}
        >
            {/* Triple copies for seamless infinite scroll */}
            <div className="flex" style={{ width: 'max-content' }}>
              {/* First copy */}
              <div className="content-stretch flex flex-col gap-5 items-center justify-center relative shrink-0 mr-5" data-name="Card Quotes Copy 1" style={{ width: 'max-content' }}>
                {/* Two-Row Grid Layout - Preserved from Figma */}
              {/* First Row */}
              <div className="content-stretch flex gap-5 items-center justify-center relative shrink-0" data-name="Row" data-node-id="65:1461">
                <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1462">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1463">
                    <div className="h-[21px] relative shrink-0 w-[120px]" data-name="Drata_wordmark_dark_0 1" data-node-id="65:1464">
                      <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1470">
                    <div className="font-normal relative shrink-0 text-[24px] text-black w-full" data-node-id="65:1471">
                      <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                    </div>
                    <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1472">
                      <p className="leading-[32px]">Darren Styles, CEO</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1473">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1474">
                    <div className="h-[21px] relative shrink-0 w-[120px]" data-name="Drata_wordmark_dark_0 1" data-node-id="65:1475">
                      <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1481">
                    <div className="font-normal relative shrink-0 text-[24px] text-black w-full" data-node-id="65:1482">
                      <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                    </div>
                    <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1483">
                      <p className="leading-[32px]">Darren Styles, CEO</p>
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-10 pt-0 px-0 relative shrink-0 w-[632px]" data-name="Highlight" data-node-id="65:1484">
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1485">
                    <div aria-hidden="true" className="absolute border border-[#fa6a20] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_130px_36px_0px_rgba(254,164,62,0),0px_83px_33px_0px_rgba(254,164,62,0.02),0px_47px_28px_0px_rgba(254,164,62,0.06),0px_21px_21px_0px_rgba(254,164,62,0.1),0px_5px_11px_0px_rgba(254,164,62,0.12)]" />
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1486">
                      <div className="h-[39.964px] relative shrink-0 w-[129.6px]" data-name="AmplifyChange_Logo_0 1" data-node-id="65:1487">
                        <Image alt="Amplify Change" src={imgAmplifyChangeLogo01} width={130} height={40} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1506">
                      <div className="min-w-full relative shrink-0 text-[24px] text-black" data-node-id="65:1507" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">&ldquo;I absolutely love this company.&rdquo;</p>
                      </div>
                      <div className="relative shrink-0 text-[#535960] text-[16px] text-nowrap" data-node-id="65:1508">
                        <p className="leading-[32px] whitespace-pre">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1509">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1510">
                    <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]" data-name="Samsung_idkTmfps1i_0 1" data-node-id="65:1511">
                      <div className="absolute bottom-[-0.12%] left-0 right-0 top-0" data-name="Group" data-node-id="65:1512">
                        <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1514">
                    <div className="relative shrink-0 text-[20px] text-black w-full" data-node-id="65:1515">
                      <p className="leading-[24px]">&ldquo;Duran and Ben hit it out of the park with our team.&rdquo;</p>
                    </div>
                    <div className="relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1516">
                      <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1517">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1518">
                    <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]" data-name="Samsung_idkTmfps1i_0 1" data-node-id="65:1519">
                      <div className="absolute bottom-[-0.12%] left-0 right-0 top-0" data-name="Group" data-node-id="65:1520">
                        <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1522">
                    <div className="relative shrink-0 text-[20px] text-black w-full" data-node-id="65:1523">
                      <p className="leading-[24px]">&ldquo;Duran and Ben hit it out of the park with our team.&rdquo;</p>
                    </div>
                    <div className="relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1524">
                      <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Row */}
              <div className="content-stretch flex gap-5 items-center justify-center relative shrink-0" data-name="Row" data-node-id="65:1525">
                <div className="bg-[#e0f1fe] box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1526">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1527">
                    <div className="h-[21px] relative shrink-0 w-[120px]" data-name="Drata_wordmark_dark_0 1" data-node-id="65:1528">
                      <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1534">
                    <div className="font-normal relative shrink-0 text-[24px] text-black w-full" data-node-id="65:1535">
                      <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                    </div>
                    <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1536">
                      <p className="leading-[32px]">Darren Styles, CEO</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1537">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1538">
                    <div className="h-[21px] relative shrink-0 w-[120px]" data-name="Drata_wordmark_dark_0 1" data-node-id="65:1539">
                      <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1545">
                    <div className="font-normal relative shrink-0 text-[24px] text-black w-full" data-node-id="65:1546">
                      <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                    </div>
                    <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1547">
                      <p className="leading-[32px]">Darren Styles, CEO</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#fae6a4] box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1548">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1549">
                    <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]" data-name="Samsung_idkTmfps1i_0 1" data-node-id="65:1550">
                      <div className="absolute bottom-[-0.12%] left-0 right-0 top-0" data-name="Group" data-node-id="65:1551">
                        <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1553">
                    <div className="font-normal relative shrink-0 text-[24px] text-black w-full" data-node-id="65:1554">
                      <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                    </div>
                    <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full" data-node-id="65:1555">
                      <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card" data-node-id="65:1556">
                  <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top" data-node-id="65:1557">
                    <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]" data-name="Samsung_idkTmfps1i_0 1" data-node-id="65:1558">
                      <div className="absolute bottom-[-0.12%] left-0 right-0 top-0" data-name="Group" data-node-id="65:1559">
                        <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text" data-node-id="65:1561">
                    <div className="font-normal leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre" data-node-id="65:1562">
                      <p className="mb-0">&ldquo;Elios was what we were missing. </p>
                      <p className="">My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                    </div>
                    <div className="font-normal min-w-full relative shrink-0 text-[#535960] text-[16px]" data-node-id="65:1563" style={{ width: "min-content" }}>
                      <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
              {/* Second copy for infinite scroll */}
              <div className="content-stretch flex flex-col gap-5 items-center justify-center relative shrink-0 mr-5" data-name="Card Quotes Copy 2" style={{ width: 'max-content' }}>
                {/* First Row - Duplicate */}
                <div className="content-stretch flex gap-5 items-center justify-center relative shrink-0" data-name="Row">
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-10 pt-0 px-0 relative shrink-0 w-[632px]" data-name="Highlight">
                    <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                      <div aria-hidden="true" className="absolute border border-[#fa6a20] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_130px_36px_0px_rgba(254,164,62,0),0px_83px_33px_0px_rgba(254,164,62,0.02),0px_47px_28px_0px_rgba(254,164,62,0.06),0px_21px_21px_0px_rgba(254,164,62,0.1),0px_5px_11px_0px_rgba(254,164,62,0.12)]" />
                      <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                        <div className="h-[39.964px] relative shrink-0 w-[129.6px]">
                          <Image alt="Amplify Change" src={imgAmplifyChangeLogo01} width={130} height={40} className="block max-w-none size-full" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                        <div className="min-w-full relative shrink-0 text-[24px] text-black" style={{ width: "min-content" }}>
                          <p className="leading-[24px]">&ldquo;I absolutely love this company.&rdquo;</p>
                        </div>
                        <div className="relative shrink-0 text-[#535960] text-[16px] text-nowrap">
                          <p className="leading-[32px] whitespace-pre">Darren Styles, CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="relative shrink-0 text-[20px] text-black w-full">
                        <p className="leading-[24px]">&ldquo;Duran and Ben hit it out of the park with our team.&rdquo;</p>
                      </div>
                      <div className="relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="relative shrink-0 text-[20px] text-black w-full">
                        <p className="leading-[24px]">&ldquo;Duran and Ben hit it out of the park with our team.&rdquo;</p>
                      </div>
                      <div className="relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Second Row - Duplicate */}
                <div className="content-stretch flex gap-5 items-center justify-center relative shrink-0" data-name="Row">
                  <div className="bg-[#e0f1fe] box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fae6a4] box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">
                        <p className="mb-0">&ldquo;Elios was what we were missing. </p>
                        <p className="">My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal min-w-full relative shrink-0 text-[#535960] text-[16px]" style={{ width: "min-content" }}>
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Third copy for seamless infinite scroll */}
              <div className="content-stretch flex flex-col gap-5 items-center justify-center relative shrink-0 mr-5" data-name="Card Quotes Copy 3" style={{ width: 'max-content' }}>
                {/* First Row - Third Copy */}
                <div className="content-stretch flex gap-5 items-center justify-center relative shrink-0" data-name="Row">
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-10 pt-0 px-0 relative shrink-0 w-[632px]" data-name="Highlight">
                    <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                      <div aria-hidden="true" className="absolute border border-[#fa6a20] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_130px_36px_0px_rgba(254,164,62,0),0px_83px_33px_0px_rgba(254,164,62,0.02),0px_47px_28px_0px_rgba(254,164,62,0.06),0px_21px_21px_0px_rgba(254,164,62,0.1),0px_5px_11px_0px_rgba(254,164,62,0.12)]" />
                      <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                        <div className="h-[39.964px] relative shrink-0 w-[129.6px]">
                          <Image alt="Amplify Change" src={imgAmplifyChangeLogo01} width={130} height={40} className="block max-w-none size-full" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                        <div className="min-w-full relative shrink-0 text-[24px] text-black" style={{ width: "min-content" }}>
                          <p className="leading-[24px]">&ldquo;I absolutely love this company.&rdquo;</p>
                        </div>
                        <div className="relative shrink-0 text-[#535960] text-[16px] text-nowrap">
                          <p className="leading-[32px] whitespace-pre">Darren Styles, CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="relative shrink-0 text-[20px] text-black w-full">
                        <p className="leading-[24px]">&ldquo;Duran and Ben hit it out of the park with our team.&rdquo;</p>
                      </div>
                      <div className="relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col font-normal gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="relative shrink-0 text-[20px] text-black w-full">
                        <p className="leading-[24px]">&ldquo;Duran and Ben hit it out of the park with our team.&rdquo;</p>
                      </div>
                      <div className="relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Second Row - Third Copy */}
                <div className="content-stretch flex gap-5 items-center justify-center relative shrink-0" data-name="Row">
                  <div className="bg-[#e0f1fe] box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[21px] relative shrink-0 w-[120px]">
                        <Image alt="Drata" src={imgDrataWordmarkDark01} width={120} height={21} className="block max-w-none size-full" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Darren Styles, CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fae6a4] box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal relative shrink-0 text-[24px] text-black w-full">
                        <p className="leading-[30px]">&ldquo;Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal relative shrink-0 text-[#535960] text-[16px] w-full">
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col h-[300px] items-start justify-between px-[30px] py-9 relative rounded-[15px] shrink-0 w-[632px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 hover:z-20 cursor-pointer" data-name="Card">
                    <div className="content-stretch flex flex-col gap-2.5 h-[50px] items-start justify-center relative shrink-0 w-full" data-name="Top">
                      <div className="h-[22px] overflow-clip relative shrink-0 w-[141.429px]">
                        <div className="absolute bottom-[-0.12%] left-0 right-0 top-0">
                          <Image alt="Samsung" src={imgGroup} width={141} height={22} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
                      <div className="font-normal leading-[30px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">
                        <p className="mb-0">&ldquo;Elios was what we were missing. </p>
                        <p className="">My team was able to hire 30 candidates in less than 1 week.&rdquo;</p>
                      </div>
                      <div className="font-normal min-w-full relative shrink-0 text-[#535960] text-[16px]" style={{ width: "min-content" }}>
                        <p className="leading-[32px]">Jun Young-hyun, Talent Leader</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 lg:left-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
          aria-label="Previous section"
        >
          <Image
            alt="Previous"
            src={img1}
            width={20}
            height={20}
            className="block max-w-none rotate-180"
          />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-6 lg:right-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
          aria-label="Next section"
        >
          <Image
            alt="Next"
            src={img1}
            width={20}
            height={20}
            className="block max-w-none"
          />
        </button>
      </div>
    </div>
  );
}