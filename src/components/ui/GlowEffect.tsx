"use client";

import React from "react";

interface GlowEffectProps {
  position?: "top-left" | "top-right" | "center" | "bottom-left" | "bottom-right";
  intensity?: "subtle" | "medium" | "strong";
  color?: "teal" | "cyan" | "white";
  className?: string;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  position = "center",
  intensity = "subtle",
  color = "teal",
  className = "",
}) => {
  const positionClasses = {
    "top-left": "top-0 -left-48",
    "top-right": "top-0 -right-48",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 -left-48",
    "bottom-right": "bottom-0 -right-48",
  };

  const colorStyles = {
    teal: "from-[#00E5D0]/15 via-[#00E5D0]/5 to-transparent",
    cyan: "from-[#0AE3D6]/15 via-[#0AE3D6]/5 to-transparent",
    white: "from-white/10 via-white/3 to-transparent",
  };

  const intensityClasses = {
    subtle: "w-[450px] h-[450px] opacity-40 blur-[100px]",
    medium: "w-[600px] h-[600px] opacity-55 blur-[120px]",
    strong: "w-[750px] h-[750px] opacity-70 blur-[140px]",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-radial ${colorStyles[color]} ${positionClasses[position]} ${intensityClasses[intensity]} ${className}`}
    />
  );
};
