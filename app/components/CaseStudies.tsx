"use client";

import Image from "next/image";
import Tagline from "./Tagline";
import React, { useRef, useState } from "react";

const imgImage48 = "/testimonial-bg-amplify.png";
const imgImage47 = "/testimonial-bg-weatherford.png";
const imgImage52 = "/testimonial-bg-drata.png";
const imgImage58 = "/testimonial-bg-samsung.png";
const imgVector622 = "/vector-622.svg";
const imgAmplifyChangeLogo01 = "/amplify-change-logo-alt.svg";
const imgDrataWordmarkDark01 = "/drata-logo-alt.svg";
const imgGroup = "/samsung-logo-alt.svg";
const img = "/arrow-left.svg";
const img1 = "/arrow-right.svg";

const testimonials = [
  {
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    title: "Unblocking stalled engineering pipelines",
    bullets: [
      "28 hires in under a week",
      "10x faster cycle time with 0% schedule slippage"
    ],
    bgImage: imgImage48,
    logoType: "image"
  },
  {
    company: "Weatherford",
    logo: "weatherford",
    title: "Scaling operations across global markets",
    bullets: [
      "45 technical hires in 3 weeks",
      "Reduced time-to-hire by 60%"
    ],
    bgImage: imgImage47,
    logoType: "text"
  },
  {
    company: "Drata",
    logo: imgDrataWordmarkDark01,
    title: "Building security-first engineering teams",
    bullets: [
      "15 senior engineers hired in 2 weeks",
      "Zero compromise on security clearances"
    ],
    bgImage: imgImage52,
    logoType: "image"
  },
  {
    company: "Samsung",
    logo: imgGroup,
    title: "Accelerating mobile innovation cycles",
    bullets: [
      "50+ engineers across 5 specializations",
      "Fastest product launch in company history"
    ],
    bgImage: imgImage58,
    logoType: "image"
  }
];

export default function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an extended array with clones for infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const centerOffset = testimonials.length; // Start in the middle set

  // Initialize scroll position to center on mount
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
      const gap = 20;
      const initialScroll = (cardWidth + gap) * centerOffset;
      container.scrollTo({ left: initialScroll, behavior: 'auto' });
    }
  }, []);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current && !isTransitioning) {
      setIsTransitioning(true);
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      
      // Update index
      const newIndex = direction === 'next' 
        ? (currentIndex + 1) % testimonials.length
        : (currentIndex - 1 + testimonials.length) % testimonials.length;
      setCurrentIndex(newIndex);
      
      // Scroll in the direction
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      
      // Check if we need to reset position for infinite loop
      setTimeout(() => {
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const minThreshold = scrollAmount * 2;
        const maxThreshold = maxScroll - (scrollAmount * 2);
        
        // If we're too far left, jump to the center
        if (currentScroll < minThreshold) {
          const newScroll = currentScroll + (scrollAmount * testimonials.length);
          container.scrollTo({ left: newScroll, behavior: 'auto' });
        }
        // If we're too far right, jump to the center
        else if (currentScroll > maxThreshold) {
          const newScroll = currentScroll - (scrollAmount * testimonials.length);
          container.scrollTo({ left: newScroll, behavior: 'auto' });
        }
        setIsTransitioning(false);
      }, 400);
    }
  };

  const handlePrev = () => handleScroll('prev');
  const handleNext = () => handleScroll('next');

  return (
    <div className="w-full py-[80px] md:py-[152px] relative overflow-visible" data-name="Case Studies">
      {/* Header Section - Constrained */}
      <div className="flex flex-col gap-6 md:gap-10 items-center justify-center px-4 lg:px-12 relative w-full mb-[60px] md:mb-[90px]" data-name="Subhead Section">
        <Tagline text="Case Studies" className="px-0 py-[18px]" />
        <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[36px] md:text-[64px] text-center tracking-[-1.8px] md:tracking-[-3.2px] max-w-4xl">
          <p className="leading-[1.1] md:leading-[0.9]">Proven Results, Real Impact</p>
        </div>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full overflow-visible">
        {/* Scroll Container - Full Width with Edge Padding */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 items-stretch overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth w-full pl-4 pr-4 lg:pl-12 lg:pr-12 py-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollPaddingLeft: '1rem',
            scrollPaddingRight: '1rem'
          }}
        >
          {/* Triple testimonials for seamless infinite scroll */}
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="box-border content-stretch flex items-center justify-between overflow-clip p-[40px] relative rounded-[6px] w-[400px] md:w-[520px] lg:w-[600px] h-[280px] md:h-[320px] lg:h-[367px] flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:z-20 group"
              style={{
                backgroundImage: `url(${testimonial.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent rounded-[6px]" />
              
              {/* Content Container */}
              <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px relative shrink-0 z-10">
                {/* Logo Section */}
                <div className="shrink-0">
                  {testimonial.logoType === "text" ? (
                    <div className="text-white text-xl md:text-2xl font-medium opacity-90">
                      Weatherford
                    </div>
                  ) : (
                    <div className="h-[24px] md:h-[30px] relative w-auto max-w-[120px] md:max-w-[150px]">
                      <Image
                        alt={testimonial.company}
                        src={testimonial.logo}
                        width={150}
                        height={30}
                        className="block max-w-none h-full w-auto object-contain object-left"
                      />
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="content-stretch flex flex-col gap-4 md:gap-6 items-start justify-start leading-[0] not-italic relative shrink-0 text-white max-w-[400px] md:max-w-[480px]">
                  <div className="font-aptos-semibold relative shrink-0 text-[28px] md:text-[36px] tracking-[-1.4px] md:tracking-[-1.8px] w-full">
                    <p className="leading-[30px] md:leading-[36px]">{testimonial.title}</p>
                  </div>
                  <div className="font-aptos-regular relative shrink-0 text-[14px] md:text-[16px] w-full">
                    <p className="leading-[18px] md:leading-[20px]">
                      {testimonial.bullets.map((bullet, bulletIndex) => (
                        <span key={bulletIndex}>
                          • {bullet}
                          {bulletIndex < testimonial.bullets.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover Effects - Orange border and inner shadow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[6px]">
                {/* Inner shadow */}
                <div className="absolute inset-0 shadow-[inset_0px_4px_24px_0px_rgba(251,93,11,1)] rounded-[6px]" />
                {/* Orange border */}
                <div className="absolute inset-0 border-[3px] border-solid border-[#fb5d0b] rounded-[6px]" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 lg:left-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
          aria-label="Previous testimonial"
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
          aria-label="Next testimonial"
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
      
      {/* Scroll Indicators */}
      <div className="flex justify-center gap-2 mt-8 px-4 lg:px-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const cardWidth = container.children[0]?.getBoundingClientRect().width || 0;
                const gap = 20;
                const scrollAmount = (cardWidth + gap) * index;
                container.scrollTo({
                  left: scrollAmount,
                  behavior: 'smooth'
                });
                setCurrentIndex(index);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-[#fa6a20] w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}