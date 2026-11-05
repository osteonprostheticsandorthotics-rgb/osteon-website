"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => {
  // Height definitions maintaining exact aspect ratio of the official provided logo
  const sizeStyles = {
    sm: "h-[38px] sm:h-[42px] md:h-[48px]",
    md: "h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px]",
    lg: "h-[64px] sm:h-[76px] md:h-[88px]",
    xl: "h-[80px] sm:h-[96px] md:h-[112px]",
  };

  return (
    <Link
      href="#hero"
      className={`group inline-flex items-center transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="OSTEON Home"
    >
      <div className={`relative ${sizeStyles[size]} w-auto aspect-[1000/340] transition-transform duration-300 group-hover:scale-[1.02]`}>
        <picture>
          <source srcSet="/osteon-logo.webp" type="image/webp" />
          <img
            src="/osteon-logo.png"
            alt="OSTEON Prosthetics & Orthotics"
            decoding="async"
            fetchPriority="high"
            className="h-full w-auto object-contain brightness-[1.12] contrast-[1.05]"
          />
        </picture>
      </div>
    </Link>
  );
};
