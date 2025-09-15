"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
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
    quote: "Elios was what we were missing. My team was able to hire 30 candidates in less than 1 week.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Drata",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/drata-wordmark-dark-01.svg"
  },
  {
    id: 3,
    quote: "I absolutely love this company. They've revolutionized our talent acquisition.",
    name: "Michael Johnson",
    title: "Head of People",
    company: "Amplify Change",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-01.svg"
  },
  {
    id: 4,
    quote: "Duran and Ben hit it out of the park with our team. Best recruiting experience ever.",
    name: "Jun Young-hyun",
    title: "Talent Leader",
    company: "Samsung",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/samsung-group.svg"
  },
  {
    id: 5,
    quote: "The speed and quality of candidates exceeded all expectations. Game changer for our hiring.",
    name: "Emily Rodriguez",
    title: "Chief People Officer",
    company: "TechCorp",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/amplify-change-logo-simple.svg"
  },
  {
    id: 6,
    quote: "Their AI-powered matching saved us months of searching. Found our perfect CTO in 2 weeks.",
    name: "David Kim",
    title: "Founder & CEO",
    company: "StartupX",
    avatarUrl: "/testimonial-avatar.png",
    companyLogo: "/drata-wordmark-dark-01.svg"
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current && !isTransitioning) {
      setIsTransitioning(true);
      const container = scrollContainerRef.current;
      const cardWidth = 550; // Approximate width of new card design
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }
  };

  const handlePrev = () => handleScroll('prev');
  const handleNext = () => handleScroll('next');

  return (
    <div className="w-full py-24 md:py-[152px] relative">
      {/* Header Section */}
      <div className="flex flex-col gap-10 items-center justify-center px-4 lg:px-12 relative w-full mb-16 md:mb-[90px]">
        <Tagline text="testimonials" className="px-0 py-[18px]" />
        <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[48px] md:text-[64px] text-center tracking-[-2.4px] md:tracking-[-3.2px] max-w-4xl">
          <p className="leading-[0.9]">Proven Results, Real Impact</p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-visible">
        {/* Scroll Container with padding for hover space */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth w-full px-4 lg:px-12"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: '-20px',
            marginBottom: '-20px'
          }}
        >
          {/* Cards Grid with padding for scale space */}
          <div className="flex gap-5 py-2" style={{ width: 'max-content' }}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-[6px] p-8 shadow-sm hover:shadow-[1px_429px_120px_0px_rgba(249,176,130,0),0px_274px_110px_0px_rgba(249,176,130,0.01),0px_154px_93px_0px_rgba(249,176,130,0.05),0px_69px_69px_0px_rgba(249,176,130,0.09),0px_17px_38px_0px_rgba(249,176,130,0.1)] transition-all duration-300 cursor-pointer hover:scale-105 hover:z-20 w-[550px] h-[200px] transform-gpu relative isolate"
              >
                <div className="flex flex-col h-full justify-between">
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
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 lg:left-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
          aria-label="Previous testimonial"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rotate-180">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-6 lg:right-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-100"
          aria-label="Next testimonial"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}