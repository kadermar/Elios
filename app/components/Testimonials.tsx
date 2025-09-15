"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Tagline from "./Tagline";

const testimonials = [
  {
    id: 1,
    quote: "They transformed my hiring process. I cannot believe how fast I can hire now.",
    name: "Darren Styles",
    title: "Chief Executive Officer",
    company: "Meta",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  },
  {
    id: 2,
    quote: "They transformed my hiring process. I cannot believe how fast I can hire now.",
    name: "Darren Styles",
    title: "Chief Executive Officer",
    company: "Meta",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  },
  {
    id: 3,
    quote: "They transformed my hiring process. I cannot believe how fast I can hire now.",
    name: "Darren Styles",
    title: "Chief Executive Officer",
    company: "Meta",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  },
  {
    id: 4,
    quote: "They transformed my hiring process. I cannot believe how fast I can hire now.",
    name: "Darren Styles",
    title: "Chief Executive Officer",
    company: "Meta",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  },
  {
    id: 5,
    quote: "They transformed my hiring process. I cannot believe how fast I can hire now.",
    name: "Darren Styles",
    title: "Chief Executive Officer",
    company: "Meta",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  },
  {
    id: 6,
    quote: "They transformed my hiring process. I cannot believe how fast I can hire now.",
    name: "Darren Styles",
    title: "Chief Executive Officer",
    company: "Meta",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Create extended array with clones for infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const centerOffset = testimonials.length; // Start in the middle set

  // Initialize scroll position to center on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 550; // Fixed card width
      const gap = 24; // Gap between cards
      const initialScroll = (cardWidth + gap) * centerOffset;
      container.scrollTo({ left: initialScroll, behavior: 'auto' });
    }
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current && !isTransitioning) {
      setIsTransitioning(true);
      const container = scrollContainerRef.current;
      const cardWidth = 550;
      const gap = 24;
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
    <div className="w-full py-[80px] md:py-[152px] relative">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-start gap-6 self-stretch px-4 lg:px-16 relative w-full mb-[60px] md:mb-[90px]">
        <Tagline text="testimonials" />
        <div
          className="relative max-w-full"
          style={{
            color: 'var(--Neutral-Charcoal, #0F1012)',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
            fontSize: 'var(--Typeface-Size-H2, 54px)',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '54px',
            letterSpacing: '-3.24px'
          }}
        >
          <p className="mb-0">What Our Clients Are Saying</p>
        </div>
      </div>

      {/* Carousel Container - Desktop Only */}
      <div className="hidden md:block relative w-full overflow-visible">
        {/* Horizontally Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth w-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseEnter={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          }}
          onMouseLeave={() => {
            intervalRef.current = setInterval(() => {
              handleNext();
            }, 4000);
          }}
        >
          {/* Two-row Staggered Layout */}
          <div className="relative flex flex-nowrap gap-6 px-4 lg:px-16 py-4 min-w-max">
            {/* First Row - Normal alignment */}
            <div className="flex flex-nowrap gap-6 absolute top-0 left-4 lg:left-16">
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="bg-white rounded-[6px] p-[32px] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[260px] border border-[#ececec] w-[550px] flex-shrink-0"
                >
                  <div className="flex flex-col h-full justify-between w-full">
                    {/* Quote */}
                    <div className="mb-6">
                      <p className="text-[#0f1012] text-[20px] leading-[24px] font-normal line-clamp-2">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Person and Company Info */}
                    <div className="flex items-end justify-between">
                      {/* Person Info */}
                      <div className="flex items-center gap-4 flex-1">
                        {/* Avatar */}
                        <div className="relative w-[44px] h-[44px] flex-shrink-0">
                          <Image
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                            width={44}
                            height={44}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        {/* Name and Title */}
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-[#0f1012] text-[16px] leading-[20px] font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-[#595959] text-[16px] leading-[20px] font-normal">
                            {testimonial.title} @ {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {/* Company Logo */}
                      {testimonial.companyLogo && (
                        <div className="flex-shrink-0 ml-4 opacity-60">
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={65}
                            height={20}
                            className="h-5 w-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Second Row - Staggered with offset */}
            <div className="flex flex-nowrap gap-6 absolute top-[284px] left-4 lg:left-16 translate-x-[287px]">
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="bg-white rounded-[6px] p-[32px] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[260px] border border-[#ececec] w-[550px] flex-shrink-0"
                >
                  <div className="flex flex-col h-full justify-between w-full">
                    {/* Quote */}
                    <div className="mb-6">
                      <p className="text-[#0f1012] text-[20px] leading-[24px] font-normal line-clamp-2">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Person and Company Info */}
                    <div className="flex items-end justify-between">
                      {/* Person Info */}
                      <div className="flex items-center gap-4 flex-1">
                        {/* Avatar */}
                        <div className="relative w-[44px] h-[44px] flex-shrink-0">
                          <Image
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                            width={44}
                            height={44}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        {/* Name and Title */}
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-[#0f1012] text-[16px] leading-[20px] font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-[#595959] text-[16px] leading-[20px] font-normal">
                            {testimonial.title} @ {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {/* Company Logo */}
                      {testimonial.companyLogo && (
                        <div className="flex-shrink-0 ml-4 opacity-60">
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={65}
                            height={20}
                            className="h-5 w-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Spacer to ensure proper scroll width */}
            <div className="w-full h-[568px]" />
          </div>
        </div>

        {/* Navigation Arrows - Outside container */}
        <div className="flex items-center gap-3 justify-start mt-8 px-4 lg:px-16">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="bg-white flex items-center justify-center w-12 h-12 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 border border-[#ececec] hover:border-[#d0d0d0] disabled:opacity-50"
            aria-label="Previous testimonials"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="#0f1012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="bg-white flex items-center justify-center w-12 h-12 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 border border-[#ececec] hover:border-[#d0d0d0] disabled:opacity-50"
            aria-label="Next testimonials"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="#0f1012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Layout - Single Column */}
      <div className="md:hidden px-4">
        <div className="flex flex-col gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={`mobile-${index}`}
              className="bg-white rounded-[6px] p-[32px] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-[#ececec] w-full"
            >
              <div className="flex flex-col gap-6">
                {/* Quote */}
                <div>
                  <p className="text-[#0f1012] text-[18px] leading-[22px] font-normal">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Person and Company Info */}
                <div className="flex items-end justify-between">
                  {/* Person Info */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Avatar */}
                    <div className="relative w-[44px] h-[44px] flex-shrink-0">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Name and Title */}
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <div className="text-[#0f1012] text-[16px] leading-[20px] font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-[#595959] text-[16px] leading-[20px] font-normal">
                        {testimonial.title} @ {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Company Logo */}
                  {testimonial.companyLogo && (
                    <div className="flex-shrink-0 ml-4 opacity-60">
                      <Image
                        src={testimonial.companyLogo}
                        alt={`${testimonial.company} logo`}
                        width={65}
                        height={20}
                        className="h-5 w-auto"
                      />
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}