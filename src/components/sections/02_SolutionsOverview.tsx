"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SolutionsOverviewProps {
  onOpenConsultation?: (service?: string) => void;
  onOpenSolution?: (type: "prosthetics" | "orthotics") => void;
}

export const SolutionsOverviewSection: React.FC<SolutionsOverviewProps> = ({
  onOpenConsultation,
  onOpenSolution,
}) => {
  return (
    <section
      id="solutions"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 space-y-4">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.22em] text-[#8E9B9D]"
            >
              02 — OUR SOLUTIONS
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-extrabold uppercase text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-[#F1EFE8]"
            >
              PROSTHETICS
              <br />
              AND ORTHOTICS
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal max-w-xl"
            >
              From advanced prosthetic limbs to specialized braces and support systems, we design solutions that restore movement, improve function and support a better quality of life. Tap below to explore detailed systems.
            </motion.p>
          </div>
        </div>

        {/* 2 Editorial Cards in ONE ROW (grid-cols-2) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:gap-7">
          {/* Card 01: PROSTHETICS */}
          <motion.div
            role="button"
            tabIndex={0}
            onClick={() => onOpenSolution?.("prosthetics")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenSolution?.("prosthetics");
              }
            }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] p-3.5 sm:p-5 md:p-7 lg:p-8 flex flex-col justify-end md:justify-between min-h-[220px] sm:min-h-[270px] md:min-h-0 md:h-[245px] lg:h-[260px] shadow-2xl hover:border-[#00E5D0]/50 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E5D0]"
            aria-label="View Prosthetics Showcase"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/solutions-prosthetics-card.jpg"
                alt="Dynamic carbon fiber running prosthesis engineered for natural movement"
                className="w-full h-full object-cover object-center md:object-right filter brightness-[0.88] md:brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Mobile: Bottom-to-Top Fade; Desktop: Left-to-Right Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/75 to-transparent md:hidden z-10 pointer-events-none" />
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#050607] via-[#050607]/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Content & Action Container */}
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-4">
              <div className="space-y-1 sm:space-y-1.5 max-w-full md:max-w-[65%]">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#00E5D0] block">
                  Category 01 • Tap to View
                </span>
                <h3 className="font-display font-bold uppercase text-sm sm:text-lg md:text-2xl text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors tracking-tight leading-tight">
                  PROSTHETICS
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#A5AAAB] font-normal leading-snug line-clamp-2 md:line-clamp-none">
                  Engineered for natural movement.
                </p>
              </div>

              {/* Circle Action Icon */}
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:border-[#00E5D0] group-hover:bg-[#00E5D0] text-[#00E5D0] group-hover:text-[#050607] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] shrink-0 self-end sm:self-auto">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.div>

          {/* Card 02: ORTHOTICS */}
          <motion.div
            role="button"
            tabIndex={0}
            onClick={() => onOpenSolution?.("orthotics")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenSolution?.("orthotics");
              }
            }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] p-3.5 sm:p-5 md:p-7 lg:p-8 flex flex-col justify-end md:justify-between min-h-[220px] sm:min-h-[270px] md:min-h-0 md:h-[245px] lg:h-[260px] shadow-2xl hover:border-[#00E5D0]/50 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E5D0]"
            aria-label="View Orthotics Showcase"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/solutions-orthotics-card.jpg"
                alt="High performance carbon fiber articulated knee brace for orthopedic stability"
                className="w-full h-full object-cover object-center md:object-right filter brightness-[0.88] md:brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Mobile: Bottom-to-Top Fade; Desktop: Left-to-Right Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/75 to-transparent md:hidden z-10 pointer-events-none" />
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#050607] via-[#050607]/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Content & Action Container */}
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-4">
              <div className="space-y-1 sm:space-y-1.5 max-w-full md:max-w-[65%]">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#00E5D0] block">
                  Category 02 • Tap to View
                </span>
                <h3 className="font-display font-bold uppercase text-sm sm:text-lg md:text-2xl text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors tracking-tight leading-tight">
                  ORTHOTICS
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#A5AAAB] font-normal leading-snug line-clamp-2 md:line-clamp-none">
                  Support for stronger movement.
                </p>
              </div>

              {/* Circle Action Icon */}
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:border-[#00E5D0] group-hover:bg-[#00E5D0] text-[#00E5D0] group-hover:text-[#050607] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] shrink-0 self-end sm:self-auto">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
