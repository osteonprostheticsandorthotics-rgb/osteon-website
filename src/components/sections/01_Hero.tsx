"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenVideoStory?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenVideoStory,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#050607]"
    >
      {/* Cinematic Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/socket-engineering.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.75] sm:brightness-[0.85] contrast-[1.08]"
        >
          <source src="/osteon-video.mp4" type="video/mp4" />
          <source src="/media/osteon video.mp4" type="video/mp4" />
        </video>

        {/* Soft Editorial Dark Overlays for Razor-Sharp Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/95 via-[#050607]/80 to-[#050607]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/80 z-10" />
      </div>

      {/* Main Hero Content Composition */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-12 w-full pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Category Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-3 sm:mb-5"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#00E5D0] font-semibold">
              Prosthetics &amp; Orthotics
            </span>
          </motion.div>

          {/* Oversized Luxury Art-Directed Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase text-[clamp(29px,8.8vw,48px)] sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[84px] leading-[0.96] tracking-[-0.03em] text-[#F1EFE8]"
          >
            MOVE
            <br />
            <span className="text-[#00E5D0]">
              FORWARD.
            </span>
            <br />
            LIVE
            <br />
            <span className="text-[#F1EFE8]">
              INDEPENDENTLY.
            </span>
          </motion.h1>

          {/* Editorial Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-[#A5AAAB] max-w-md sm:max-w-lg font-normal leading-relaxed"
          >
            Personalized prosthetic and orthotic solutions designed for real life, lasting comfort, and active movement.
          </motion.p>

          {/* Dual Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5"
          >
            {/* Primary Pill Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs sm:text-sm font-bold uppercase tracking-[0.14em] hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_25px_rgba(0,229,208,0.25)] min-h-[46px] sm:min-h-[48px] group cursor-pointer w-full sm:w-auto active:scale-[0.98]"
            >
              <span>Explore our solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Video Button */}
            {onOpenVideoStory && (
              <button
                onClick={onOpenVideoStory}
                className="inline-flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm font-medium text-[#F1EFE8] hover:text-[#00E5D0] transition-colors py-2 px-3 group min-h-[42px] cursor-pointer"
              >
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] border border-white/[0.14] flex items-center justify-center text-[#00E5D0] group-hover:bg-[#00E5D0] group-hover:text-[#050607] transition-all shrink-0 shadow-lg">
                  <span className="text-[10px] sm:text-xs ml-0.5">▶</span>
                </span>
                <span className="uppercase tracking-wider text-xs font-mono">Watch our story</span>
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Mobile Subtle Bottom Scroll Prompt */}
      <div className="absolute left-5 bottom-3 z-20 flex lg:hidden items-center gap-2 pointer-events-none opacity-60">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0] animate-pulse" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#A5AAAB]">Scroll to discover</span>
      </div>

      {/* Right-Side Vertical Scroll Indicator */}
      <div className="absolute right-6 sm:right-10 bottom-12 z-20 hidden lg:flex flex-col items-center gap-2 pointer-events-none select-none">
        <span className="[writing-mode:vertical-lr] text-[9px] font-mono uppercase tracking-[0.3em] text-[#A5AAAB]">
          SCROLL
        </span>
        <span className="font-mono text-[10px] text-[#00E5D0] font-bold">
          01 / 07
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#00E5D0] to-transparent animate-pulse" />
      </div>
    </section>
  );
};

