"use client";

import React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "paragraph-lg"
  | "paragraph"
  | "paragraph-sm";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  as?: TypographyElement;
  className?: string;
  color?: string;
}

const typographyStyles: Record<TypographyVariant, string> = {
  h1: "font-['Aptos:Semibold',_sans-serif] text-[86px] leading-[64px] tracking-[-5.16px] font-semibold",
  h2: "font-['Aptos:Semibold',_sans-serif] text-[54px] leading-[54px] tracking-[-3.24px] font-semibold",
  h3: "font-['Aptos:Semibold',_sans-serif] text-[44px] leading-[44px] tracking-[-2.64px] font-semibold",
  h4: "font-['Aptos:Semibold',_sans-serif] text-[36px] leading-[36px] tracking-[-1.8px] font-semibold",
  h5: "font-['Aptos:Semibold',_sans-serif] text-[28px] leading-[28px] tracking-[-0.84px] font-semibold",
  h6: "font-['Aptos:Semibold',_sans-serif] text-[22px] leading-[22px] tracking-[-0.66px] font-semibold",
  "paragraph-lg": "font-['Aptos:Regular',_sans-serif] text-[20px] leading-[24px] font-normal",
  paragraph: "font-['Aptos:Regular',_sans-serif] text-[16px] leading-[20px] font-normal",
  "paragraph-sm": "font-['Aptos:Regular',_sans-serif] text-[14px] leading-[18px] font-normal",
};

const defaultElements: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  "paragraph-lg": "p",
  paragraph: "p",
  "paragraph-sm": "p",
};

export default function Typography({
  children,
  variant = "paragraph",
  as,
  className = "",
  color,
}: TypographyProps) {
  const Component = as || defaultElements[variant];
  const baseStyles = typographyStyles[variant];
  const colorClass = color ? `text-[${color}]` : "text-black";

  const combinedClassName = `${baseStyles} ${colorClass} ${className}`.trim();

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
}

// Convenience components for better developer experience
export const H1 = ({ children, className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'>) => (
  <Typography variant="h1" as="h1" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const H2 = ({ children, className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'>) => (
  <Typography variant="h2" as="h2" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const H3 = ({ children, className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'>) => (
  <Typography variant="h3" as="h3" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const H4 = ({ children, className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'>) => (
  <Typography variant="h4" as="h4" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const H5 = ({ children, className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'>) => (
  <Typography variant="h5" as="h5" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const H6 = ({ children, className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'>) => (
  <Typography variant="h6" as="h6" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const Paragraph = ({ children, size = "paragraph", className, color, ...props }: Omit<TypographyProps, 'variant' | 'as'> & { size?: "paragraph-lg" | "paragraph" | "paragraph-sm" }) => (
  <Typography variant={size} as="p" className={className} color={color} {...props}>
    {children}
  </Typography>
);

export const Text = ({ children, size = "paragraph", as = "span", className, color, ...props }: Omit<TypographyProps, 'variant'> & { size?: "paragraph-lg" | "paragraph" | "paragraph-sm" }) => (
  <Typography variant={size} as={as} className={className} color={color} {...props}>
    {children}
  </Typography>
);