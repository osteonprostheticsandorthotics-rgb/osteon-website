"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-12 sm:h-14",
  };

  return (
    <Link
      href="#hero"
      className={`group inline-flex items-center transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="OSTEON Home"
    >
      <div className={`relative ${sizeStyles[size]} w-auto aspect-[1000/340] transition-transform duration-300 group-hover:scale-[1.02]`}>
        <img
          src="/osteon-logo.png"
          alt="OSTEON Prosthetics & Orthotics"
          className="h-full w-auto object-contain brightness-[1.12] contrast-[1.05]"
        />
      </div>
    </Link>
  );
};
