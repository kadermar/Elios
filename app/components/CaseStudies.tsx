"use client";

import Image from "next/image";
import Tagline from "./Tagline";
import AFlare from "./AFlare";
import React, { useRef, useState } from "react";

const imgImage48 = "/images/case-study-1.png";
const imgImage47 = "/images/case-study-2.png";
const imgImage52 = "/images/case-study-3.png";
const imgImage58 = "/images/case-study-4.png";
const imgVector622 = "/vector-622.svg";
const imgAmplifyChangeLogo01 = "/amplify-change-logo-alt.svg";
const imgDrataWordmarkDark01 = "/drata-logo-alt.svg";
const imgGroup = "/samsung-logo-alt.svg";
const img = "/arrow-left.svg";
const img1 = "/arrow-right.svg";

interface CaseStudiesProps {
  title?: string;
  taglineText?: string;
}

const testimonials = [
  {
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    title: "Enabling Velocity for Product & Design Launches",
    bullets: [
      "28 hires in under a week",
      "10x faster cycle time with 0% schedule slippage"
    ],
    bgImage: imgImage48,
    logoType: "image"
  },
  {
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    title: "Unblocking stalled engineering pipelines",
    bullets: [
      "7-month-old requisitions closed in <14 days",
      "Precision pipelines + decisive hiring clarity"
    ],
    bgImage: imgImage47,
    logoType: "image"
  },
  {
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    title: "Capturing New Revenue Without Slowing Core Ops",
    bullets: [
      "Blockchain product team staffed in 3 days",
      "From scope to staffed, no operational slowdown"
    ],
    bgImage: imgImage52,
    logoType: "image"
  },
  {
    company: "Amplify Change",
    logo: imgAmplifyChangeLogo01,
    title: "Precision > Volume: Two Candidates, One Perfect Hire",
    bullets: [
      "2 candidates submitted vs. 50 from others",
      "First hire covered both roles, second req shelved"
    ],
    bgImage: imgImage58,
    logoType: "image"
  }
];

export default function CaseStudies({
  title = "Proven results. Real impact.",
  taglineText = "Case Studies"
}: CaseStudiesProps = {}) {
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
      <div className="flex flex-col gap-6 items-start justify-center self-stretch px-4 lg:px-12 relative w-full mb-[60px] md:mb-[90px] z-10" data-name="Subhead Section">
        <div className="flex flex-col gap-4 items-start justify-center self-stretch relative w-full" data-name="Top">
          <Tagline text={taglineText} />
          <div className="font-semibold leading-[54px] not-italic relative text-[#0f1012] text-[54px] whitespace-nowrap tracking-[-3.24px]">
            {title}
          </div>
        </div>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full overflow-visible">
        {/* A Flare Background */}
        <div className="absolute h-[601px] left-[-185px] bottom-[-275px] w-[529px] pointer-events-none z-0" data-name="A Flare">
          <div className="absolute inset-[-13.98%_-15.88%]">
            <AFlare />
          </div>
        </div>

        {/* Scroll Container - Full Width with Edge Padding */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 items-stretch overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth w-full pl-4 pr-4 lg:pl-12 lg:pr-12 py-4 relative z-10"
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
                  <div
                    className="relative shrink-0 w-full"
                    style={{
                      color: 'var(--Neutral-White, #FFF)',
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
                      fontSize: 'var(--Typeface-Size-H4, 36px)',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '36px',
                      letterSpacing: '-1.8px'
                    }}
                  >
                    <p>{testimonial.title}</p>
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

      </div>


      {/* Button Row - Navigation */}
      <div className="flex items-start gap-3 justify-start mt-16 px-4 lg:px-12 relative z-10" data-name="Button Row">
        <button
          onClick={handlePrev}
          className="bg-white box-border flex gap-4 items-center justify-center p-[8px] rounded-[12px] transition-all duration-300 hover:shadow-lg"
          aria-label="Previous testimonial"
        >
          <div className="box-border flex gap-2.5 items-center justify-center p-[10px] rounded-[7px] size-[46px]">
            <svg className="size-4" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="#0f1012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        <button
          onClick={handleNext}
          className="bg-white box-border flex gap-4 items-center justify-center p-[8px] rounded-[12px] transition-all duration-300 hover:shadow-lg"
          aria-label="Next testimonial"
        >
          <div className="box-border flex gap-2.5 items-center justify-center p-[10px] rounded-[7px] size-[46px]">
            <svg className="size-4" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="#0f1012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}