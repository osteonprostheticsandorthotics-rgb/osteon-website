"use client";

import React from "react";

interface SectionBadgeProps {
  label: string;
  className?: string;
  variant?: "teal" | "subtle" | "outline";
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  label,
  className = "",
  variant = "teal",
}) => {
  const variantStyles = {
    teal: "text-[#00E5D0] border-[#00E5D0]/20 bg-[#00E5D0]/5",
    subtle: "text-[#8E9B9D] border-white/10 bg-white/5",
    outline: "text-[#F4F7F8] border-white/15 bg-transparent",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.25em] border backdrop-blur-md transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0] animate-pulse" />
      <span>{label}</span>
    </div>
  );
};
