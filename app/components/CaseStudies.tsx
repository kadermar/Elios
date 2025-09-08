"use client";

import Image from "next/image";
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
    quote: "We cannot believe how much we needed the Insights platform.",
    author: "Darren Styles, CEO of Amplify Change",
    bgImage: imgImage48,
    bgColor: "bg-white",
    textColor: "text-[#09141f]",
    logoType: "image"
  },
  {
    company: "Weatherford",
    logo: "weatherford",
    quote: "Elios simplified our entire hiring process.",
    author: "Darren Styles, CEO of Amplify Change",
    bgImage: imgImage47,
    bgColor: "bg-[#fae6a4]",
    textColor: "text-[#09141f]",
    logoType: "text"
  },
  {
    company: "Drata",
    logo: imgDrataWordmarkDark01,
    quote: "We cannot believe how much we needed the Insights platform.",
    author: "Darren Styles, CEO of Amplify Change",
    bgImage: imgImage52,
    bgColor: "bg-[#e0f1fe]",
    textColor: "text-[#09141f]",
    logoType: "image"
  },
  {
    company: "Samsung",
    logo: imgGroup,
    quote: "Wow. There's so many words.",
    author: "* Darren Styles, CEO of Amplify Change",
    bgImage: imgImage58,
    bgColor: "bg-white",
    textColor: "text-[#404453]",
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
    <div className="w-full py-[80px] md:py-[152px] relative" data-name="Case Studies">
      {/* Header Section - Constrained */}
      <div className="flex flex-col gap-6 md:gap-10 items-center justify-center px-4 lg:px-12 relative w-full mb-[60px] md:mb-[90px]" data-name="Subhead Section">
        <div className="flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px]" data-name="Tagline">
          <div className="h-[13px] relative w-4">
            <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
              <Image
                alt="Case Studies"
                src={imgVector622}
                width={16}
                height={13}
                className="block max-w-none w-full h-full"
              />
            </div>
          </div>
          <div className="font-semibold leading-[0] not-italic relative text-[#fa6a20] text-[16px] md:text-[20px] text-nowrap uppercase">
            <p className="leading-[24px] whitespace-pre">Case Studies</p>
          </div>
        </div>
        <div className="font-semibold leading-[0] not-italic relative text-[#09141f] text-[36px] md:text-[64px] text-center tracking-[-1.8px] md:tracking-[-3.2px] max-w-4xl">
          <p className="leading-[1.1] md:leading-[0.9]">Proven Results, Real Impact</p>
        </div>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full">
        {/* Scroll Container - Full Width with Edge Padding */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 items-stretch overflow-x-auto scrollbar-hide scroll-smooth w-full pl-4 pr-4 lg:pl-12 lg:pr-12"
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
              className="flex flex-col items-start justify-between overflow-clip pb-6 pt-6 md:pt-10 px-4 md:px-6 relative rounded-[15px] w-[320px] md:w-[380px] lg:w-[480px] min-h-[400px] md:h-[500px] lg:h-[564px] flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20"
              style={{
                backgroundImage: `url(${testimonial.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Logo Section */}
              <div className="flex flex-col gap-3 md:gap-5 items-start justify-start px-2.5 py-0 relative w-full">
                {testimonial.logoType === "text" ? (
                  <div className="text-white text-xl md:text-2xl font-medium opacity-90">
                    Weatherford
                  </div>
                ) : (
                  <div className={index === 0 ? "h-[40px] md:h-[50px] relative w-[130px] md:w-[162px]" : index === 2 ? "h-[22px] md:h-[27px] relative w-[123px] md:w-[154px]" : "h-[23px] md:h-[29px] overflow-clip relative w-[151px] md:w-[189px]"}>
                    <Image
                      alt={testimonial.company}
                      src={testimonial.logo}
                      width={index === 0 ? 162 : index === 2 ? 154 : 189}
                      height={index === 0 ? 50 : index === 2 ? 27 : 29}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* Quote Card */}
              <div className={`${testimonial.bgColor} flex flex-col gap-2.5 items-start justify-start p-4 md:p-[30px] relative rounded-[4px] w-full ${index === 3 ? "md:py-[50px]" : ""}`}>
                <div className="flex flex-col gap-6 md:gap-[50px] items-start justify-start leading-[0] not-italic relative w-full">
                  <div className={`font-semibold relative ${testimonial.textColor} text-[20px] md:text-[32px] tracking-[-0.6px] md:tracking-[-0.96px] w-full`}>
                    <p className="leading-[1.3] md:leading-[32px]">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <div className={`font-normal relative text-[#121212] ${index === 3 ? "text-[14px] md:text-[20px]" : "text-[14px] md:text-[16px]"} w-full`}>
                    <p className="leading-[1.4] md:leading-[32px]">{testimonial.author}</p>
                  </div>
                </div>
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