"use client";

import React from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageryGalleryProps {
  className?: string;
}

const imageItems: ImageItem[] = [
  {
    src: "/images/blockchain-marketing-case-study.png",
    alt: "Blockchain Marketing Case Study",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/data-consulting-case-study.png",
    alt: "Data Consulting Case Study",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/talet-globe-colorized.png",
    alt: "Talet Globe Colorized",
    width: 841,
    height: 841,
  },
  {
    src: "/images/warp-speed-colorized.png",
    alt: "Warp Speed Colorized",
    width: 841,
    height: 841,
  },
  {
    src: "/images/gemini-image-1.png",
    alt: "Professional Business Meeting",
    width: 1152,
    height: 896,
  },
  {
    src: "/images/gemini-image-2.png",
    alt: "Business Technology Visualization",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-3.png",
    alt: "Data Analytics Visualization",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-4.png",
    alt: "Business Process Automation",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-5.png",
    alt: "Technology Infrastructure",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-6.png",
    alt: "Digital Innovation Concept",
    width: 1120,
    height: 928,
  },
  {
    src: "/images/gemini-image-7.png",
    alt: "Advanced Computing Solutions",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-8.png",
    alt: "Enterprise Technology Platform",
    width: 1078,
    height: 820,
  },
  {
    src: "/images/gemini-image-9.png",
    alt: "Digital Transformation Concept",
    width: 2048,
    height: 2048,
  },
  {
    src: "/images/gemini-image-10.png",
    alt: "Business Intelligence Dashboard",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-11.png",
    alt: "Professional Consulting Environment",
    width: 1152,
    height: 896,
  },
  {
    src: "/images/gemini-image-12.png",
    alt: "Technology Solutions Portfolio",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-13.png",
    alt: "Innovation Technology Hub",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-14.png",
    alt: "Strategic Business Planning",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-15.png",
    alt: "Corporate Technology Solutions",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-16.png",
    alt: "Data Science Visualization",
    width: 975,
    height: 1016,
  },
  {
    src: "/images/gemini-image-17.png",
    alt: "Enterprise Analytics Platform",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-18.png",
    alt: "Business Process Excellence",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-19.png",
    alt: "Digital Strategy Implementation",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-20.png",
    alt: "Technology Innovation Center",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/gemini-image-21.png",
    alt: "Advanced Business Solutions",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/oilfield-case-study.png",
    alt: "Oilfield Case Study",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/product-studio-case-study.png",
    alt: "Product Studio Case Study",
    width: 1024,
    height: 1024,
  },
];

export default function ImageryGallery({ className = "" }: ImageryGalleryProps) {
  return (
    <div
      className={`content-start flex flex-wrap gap-[104px] items-start justify-start relative size-full ${className}`}
      data-node-id="3088:16645"
    >
      {imageItems.map((item, index) => (
        <div
          key={index}
          className="bg-center bg-cover bg-no-repeat shrink-0 relative"
          style={{
            width: `${item.width}px`,
            height: `${item.height}px`,
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="object-cover w-full h-full"
            priority={index < 4} // Prioritize loading first 4 images
          />
        </div>
      ))}
    </div>
  );
}