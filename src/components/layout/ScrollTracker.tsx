"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollTrackerProps {
  currentSectionIndex: number;
  totalSections?: number;
  sectionName?: string;
}

export const ScrollTracker: React.FC<ScrollTrackerProps> = ({
  currentSectionIndex = 1,
  totalSections = 12,
  sectionName = "HERO",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formattedCurrent = String(currentSectionIndex).padStart(2, "0");
  const formattedTotal = String(totalSections).padStart(2, "0");

  return (
    <div className="fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3 pointer-events-none select-none">
      {/* Current Step Counter */}
      <span className="font-mono text-xs font-bold text-[#00E5D0] tracking-widest">
        {formattedCurrent}
      </span>

      {/* Vertical Progress Track */}
      <div className="w-[1.5px] h-20 bg-white/[0.1] rounded-full overflow-hidden relative">
        <motion.div
          className="w-full bg-[#00E5D0]"
          style={{ height: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        />
      </div>

      {/* Total Sections Counter */}
      <span className="font-mono text-[11px] text-[#60686B] tracking-widest">
        {formattedTotal}
      </span>

      {/* Vertical 'SCROLL' label */}
      <div className="mt-4 flex flex-col items-center gap-1">
        <span className="[writing-mode:vertical-lr] text-[9px] font-mono uppercase tracking-[0.3em] text-[#A5AAAB]">
          {sectionName || "SCROLL"}
        </span>
      </div>
    </div>
  );
};

