"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  color?: "default" | "white" | "black";
}

export default function Logo({
  variant = "full",
  size = "md",
  href = "/",
  className = "",
  color = "default"
}: LogoProps) {
  // Determine actual color based on default
  const actualColor = color === "default" ? "black" : color;

  // Unified size configurations - same container dimensions for both variants
  const logoSizes = {
    sm: { 
      containerClass: "h-8 w-[75px]", // Fixed width to prevent layout shift
      iconSize: 22, 
      textWidth: 35, 
      textHeight: 12, 
      gap: 7 
    },
    md: { 
      containerClass: "h-[50px] w-[112px]", // Fixed width: 44px icon + 12px gap + 56px text
      iconSize: 44, 
      textWidth: 56, 
      textHeight: 19, 
      gap: 12 
    },
    lg: { 
      containerClass: "h-16 w-[142px]", // Fixed width to prevent layout shift
      iconSize: 56, 
      textWidth: 71, 
      textHeight: 24, 
      gap: 15 
    }
  };

  // Asset paths
  const iconSrc = actualColor === "white" ? "/elios-icon-white.svg" : "/elios-icon-black.svg";
  const typeSrc = actualColor === "white" ? "/elios-type-white.svg" : "/elios-type-black.svg";
  const iconOnlySrc = actualColor === "white" ? "/elios-icon-only-white.svg" : "/elios-icon-only-black.svg";

  // Logo component with seamless transitions
  const LogoComponent = () => {
    const config = logoSizes[size];
    
    return (
      <div className={`relative ${config.containerClass} ${className}`}>
        <div className="absolute inset-0 flex items-center justify-start">
          {/* Icon - always present */}
          <div 
            className="relative transition-all duration-300 ease-in-out flex-shrink-0" 
            style={{ 
              width: `${config.iconSize}px`, 
              height: `${config.iconSize}px`,
              marginLeft: variant === "icon" ? '34px' : '0', // Center icon when alone (112px width - 44px icon) / 2 = 34px
            }}
          >
            <Image
              alt=""
              src={iconSrc}
              width={config.iconSize}
              height={config.iconSize}
              className="block w-full h-full object-contain"
              priority
            />
          </div>
          
          {/* Text - slides in/out */}
          <div 
            className="transition-all duration-300 ease-in-out flex-shrink-0" 
            style={{ 
              marginLeft: `${config.gap}px`,
              width: `${config.textWidth}px`, 
              height: `${config.textHeight}px`,
              opacity: variant === "full" ? 1 : 0,
              transform: variant === "full" ? 'translateX(0)' : 'translateX(-20px)',
              pointerEvents: variant === "full" ? 'auto' : 'none'
            }}
          >
            <Image
              alt="Elios"
              src={typeSrc}
              width={config.textWidth}
              height={config.textHeight}
              className="block w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    );
  };

  // Return with or without link
  if (href) {
    return (
      <Link href={href} className="inline-block transition-all duration-300">
        <LogoComponent />
      </Link>
    );
  }

  return <LogoComponent />;
}