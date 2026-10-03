"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenVideoStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenVideoStory,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050607]"
    >
      {/* Cinematic Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=85"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.52] contrast-[1.15]"
        >
          <source src="/osteon-video.mp4" type="video/mp4" />
          <source src="/media/osteon video.mp4" type="video/mp4" />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-walking-on-a-running-track-41480-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-Layer Dark Editorial Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/95 via-[#050607]/75 to-[#050607]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,208,0.06)_0%,_transparent_70%)] z-10" />
      </div>

      {/* Top Spacer for Navbar */}
      <div className="h-20 sm:h-24 md:h-28" />

      {/* Main Hero Content Composition */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full py-2 sm:py-4 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Section Micro Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
              01 / OSTEON PROSTHETICS & ORTHOTICS
            </span>
          </motion.div>

          {/* Oversized Art-Directed Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase text-[38px] sm:text-[56px] md:text-[72px] lg:text-[84px] xl:text-[96px] leading-[0.93] tracking-[-0.04em] text-[#F1EFE8]"
          >
            MOVE
            <br />
            <span className="inline-block ml-2 sm:ml-6 lg:ml-10 text-[#00E5D0]">
              FORWARD.
            </span>
            <br />
            LIVE
            <br />
            <span className="text-[#F1EFE8]/90">
              INDEPENDENTLY.
            </span>
          </motion.h1>

          {/* Editorial Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#A5AAAB] max-w-xl font-normal leading-relaxed"
          >
            A trusted provider of advanced prosthetic and orthotic care, combining medical expertise with innovative technology to design solutions precisely tailored to each individual.
          </motion.p>

          {/* Dual Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            {/* Primary Pill Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,208,0.22)] hover:shadow-[0_0_40px_rgba(0,229,208,0.35)] min-h-[48px] group"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Text Action */}
            <button
              onClick={onOpenVideoStory}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F1EFE8] text-xs sm:text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 min-h-[48px] group"
            >
              <span className="w-6 h-6 rounded-full bg-[#00E5D0]/15 border border-[#00E5D0]/60 flex items-center justify-center text-[#00E5D0] transition-transform duration-300 group-hover:scale-110">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>Watch Our Story</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar: Technical Indicators & Minimal Progress */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full pb-6 pt-4 border-t border-white/[0.07]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#A5AAAB]">
          {/* Subtle Technical Standards */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-[11px] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[#F1EFE8]">Custom Carbon Fibre Sockets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[#F1EFE8]">Dynamic Energy Return</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[#F1EFE8]">Lifelong Support & Care</span>
            </div>
          </div>

          {/* Minimal Scroll Indicator */}
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#A5AAAB]">
            <span>01 / 11</span>
            <a
              href="#human-story"
              className="inline-flex items-center gap-2 hover:text-[#00E5D0] transition-colors"
            >
              <span>SCROLL</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#00E5D0]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

