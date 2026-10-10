"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROSTHETIC_CATEGORIES } from "@/lib/data";

interface ProstheticsSectionProps {
  onOpenConsultation?: () => void;
}

export const ProstheticsSection: React.FC<ProstheticsSectionProps> = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const currentCategory = PROSTHETIC_CATEGORIES[activeCategoryIndex];

  // Automatically cycle to the next category every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategoryIndex((prev) =>
        prev < PROSTHETIC_CATEGORIES.length - 1 ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCategoryIndex]);

  const handlePrev = () => {
    setActiveCategoryIndex((prev) => (prev > 0 ? prev - 1 : PROSTHETIC_CATEGORIES.length - 1));
  };

  const handleNext = () => {
    setActiveCategoryIndex((prev) => (prev < PROSTHETIC_CATEGORIES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="prosthetics"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Tag */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#00E5D0]">
            03 — PROSTHETICS
          </span>
        </div>

        {/* MOBILE EDITORIAL SHOWCASE (< lg) */}
        <div className="block lg:hidden space-y-6">
          {/* Headline & Description */}
          <div className="space-y-3">
            <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl text-[#F1EFE8] tracking-tight leading-tight">
              {currentCategory.name}
            </h2>
            <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal">
              {currentCategory.description}
            </p>
          </div>

          {/* Large Cinematic Product Visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group"
            >
              <img
                src={currentCategory.heroImage}
                alt={currentCategory.name}
                className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Category Switcher Pills */}
          <div className="pt-4 border-t border-white/[0.08] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#60686B] block">
              SELECT PROSTHETIC SYSTEM
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PROSTHETIC_CATEGORIES.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                const formattedNumber = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-300 min-h-[44px] cursor-pointer ${
                      isActive
                        ? "bg-[#00E5D0]/10 border-[#00E5D0] text-[#00E5D0] shadow-[0_0_15px_rgba(0,229,208,0.15)]"
                        : "bg-[#0A0D0F] border-white/[0.06] text-[#A5AAAB] hover:text-[#F1EFE8] hover:border-white/[0.15]"
                    }`}
                  >
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                      {cat.name}
                    </span>
                    <span className="text-[11px] font-mono font-bold opacity-70">
                      {formattedNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP 12-COLUMN INTERACTIVE SHOWCASE SPREAD (>= lg) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Copy, CTA, and Carousel Arrows */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl text-[#F1EFE8] tracking-tight leading-tight">
              {currentCategory.name}
            </h2>

            <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal">
              {currentCategory.description}
            </p>

            {/* Carousel Navigation Arrows */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/[0.12] hover:border-[#00E5D0] bg-white/[0.03] hover:bg-[#00E5D0] text-[#A5AAAB] hover:text-[#050607] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous category"
              >
                <span className="text-sm">←</span>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/[0.12] hover:border-[#00E5D0] bg-white/[0.03] hover:bg-[#00E5D0] text-[#A5AAAB] hover:text-[#050607] flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next category"
              >
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Center Column: Framed Product Visual */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group"
              >
                <img
                  src={currentCategory.heroImage}
                  alt={currentCategory.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Vertical Category Selector Tabs */}
          <div className="lg:col-span-3 space-y-4 border-l border-white/[0.08] pl-6 lg:pl-8">
            {PROSTHETIC_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              const formattedNumber = String(idx + 1).padStart(2, "0");
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`w-full text-left py-3 transition-all duration-300 flex items-center gap-3 group cursor-pointer ${
                    isActive ? "text-[#00E5D0]" : "text-[#A5AAAB] hover:text-[#F1EFE8]"
                  }`}
                >
                  <span className="font-mono text-xs font-bold tracking-wider">
                    {formattedNumber}
                  </span>
                  <span className={`text-xs font-mono uppercase tracking-[0.18em] ${isActive ? "font-bold" : "font-normal"}`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

