"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Default arrow icon for primary buttons
const defaultArrowIcon = "/nav-arrow-alt.svg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dropdown" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  iconPosition = "right",
  showArrow = false,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-aptos-semibold text-center transition-all duration-200 cursor-pointer";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-[#fb5d0b] text-white hover:bg-[#d45413] active:bg-[#b8460f] disabled:bg-gray-300 disabled:text-gray-500",
    secondary: "bg-transparent text-[#0f1012] hover:bg-gray-50 active:bg-gray-100 border border-transparent hover:border-gray-200 disabled:text-gray-400",
    dropdown: "bg-transparent text-[#0f1012] hover:bg-gray-50 active:bg-gray-100 disabled:text-gray-400",
    icon: "bg-transparent text-[#0f1012] hover:bg-gray-50 active:bg-gray-100 disabled:text-gray-400",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-[16px] py-[8px] text-[14px] leading-[20px] rounded-[8px] gap-[8px]",
    md: "px-[20px] py-[12px] text-[16px] leading-[20px] rounded-[8px] gap-[8px]",
    lg: "px-[24px] py-[16px] text-[16px] leading-[20px] rounded-[12px] gap-[12px]",
  };

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Determine if we should show an arrow (for primary buttons by default)
  const shouldShowArrow = showArrow || (variant === "primary" && !icon);
  
  // Determine the icon to display
  let iconSrc = icon;
  if (shouldShowArrow && !icon) {
    iconSrc = defaultArrowIcon;
  }

  // Button content with icon/arrow
  const buttonContent = (
    <>
      {iconSrc && iconPosition === "left" && (
        <div className="relative w-4 h-4">
          <Image 
            src={iconSrc} 
            alt="" 
            width={16} 
            height={16} 
            className="block max-w-none w-full h-full"
          />
        </div>
      )}
      <span>{children}</span>
      {iconSrc && iconPosition === "right" && (
        <div className="relative w-4 h-4">
          <Image 
            src={iconSrc} 
            alt="" 
            width={16} 
            height={16} 
            className="block max-w-none w-full h-full"
          />
        </div>
      )}
      {variant === "dropdown" && !iconSrc && (
        <div className="relative w-3.5 h-3.5">
          <Image
            src="/caret.svg"
            alt=""
            width={14}
            height={14}
            className="block max-w-none w-full h-full"
          />
        </div>
      )}
    </>
  );

  // Handle different button behaviors
  if (disabled) {
    return (
      <div className={`${buttonStyles} opacity-50 cursor-not-allowed`}>
        {buttonContent}
      </div>
    );
  }

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonStyles}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}