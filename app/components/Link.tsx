"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: "default" | "footer" | "nav";
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  showUnderline?: boolean;
  ariaLabel?: string;
}

export default function Link({
  href,
  children,
  className = "",
  external = false,
  onClick,
  variant = "default",
  size = "md",
  weight = "semibold",
  showUnderline = false,
  ariaLabel,
}: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Size configurations
  const sizeClasses = {
    sm: "text-[14px] leading-[20px]",
    md: "text-[16px] leading-[22px]",
    lg: "text-[18px] leading-[24px]",
  };

  // Weight configurations
  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  // Variant-specific styles
  const variantStyles = {
    default: {
      base: "text-[#0f1012] hover:text-[#fb5d0b] transition-colors duration-200",
      active: "text-[#fb5d0b]",
    },
    footer: {
      base: "text-[#0f1012] hover:text-[#fb5d0b] transition-colors duration-200",
      active: "text-[#fb5d0b]",
    },
    nav: {
      base: "text-[#09141f] hover:text-[#fb5d0b] hover:opacity-100 transition-all duration-200",
      active: "text-[#fb5d0b]",
    },
  };

  const styles = variantStyles[variant];

  // Combine classes
  const combinedClasses = `
    inline-flex items-center gap-1.5 cursor-pointer
    ${sizeClasses[size]}
    ${weightClasses[weight]}
    ${isActive ? styles.active : styles.base}
    ${showUnderline ? "underline hover:no-underline" : ""}
    ${className}
  `.trim();

  // External link
  if (external) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // Internal link
  return (
    <NextLink
      href={href}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </NextLink>
  );
}