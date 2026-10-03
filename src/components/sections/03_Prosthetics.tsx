"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { PROSTHETIC_CATEGORIES, ProstheticCategory } from "@/lib/data";

interface ProstheticsSectionProps {
  onSelectProduct: (product: ProstheticCategory) => void;
  onOpenConsultation: () => void;
}

export const ProstheticsSection: React.FC<ProstheticsSectionProps> = ({
  onSelectProduct,
  onOpenConsultation,
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const currentCategory = PROSTHETIC_CATEGORIES[activeCategoryIndex];

  return (
    <section
      id="prosthetics"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                02 / SOLUTIONS
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              PROSTHETICS
            </motion.h2>
          </div>

          {/* Minimal Pill Category Selector */}
          <div className="flex gap-2 p-1.5 rounded-full bg-[#0A0D0F] border border-white/[0.08] overflow-x-auto no-scrollbar scroll-smooth w-full sm:w-auto">
            {PROSTHETIC_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 min-h-[44px] flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-[#00E5D0] text-[#050607] font-bold shadow-[0_0_20px_rgba(0,229,208,0.25)]"
                      : "text-[#A5AAAB] hover:text-[#F1EFE8] hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Editorial Visual Composition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#00E5D0] font-mono text-[11px] uppercase tracking-widest">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{currentCategory.subType}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F1EFE8] tracking-tight">
                  {currentCategory.name}
                </h3>
                <p className="text-sm sm:text-base text-[#00E5D0] font-medium font-sans">
                  {currentCategory.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal">
                {currentCategory.description}
              </p>

              {/* Minimalist Specs Table */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-xl overflow-hidden">
                {currentCategory.specs.map((spec) => (
                  <div key={spec.label} className="p-4 bg-[#0A0D0F] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A5AAAB] block">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#F1EFE8] block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary and Secondary CTA buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_25px_rgba(0,229,208,0.2)] min-h-[48px]"
                >
                  <span>Book Clinical Fitting</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectProduct(currentCategory)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F1EFE8] text-xs font-mono uppercase tracking-wider transition-colors min-h-[48px]"
                >
                  <span>Inspect System Specs</span>
                </button>
              </div>
            </div>

            {/* Right Column: Enormous Framed Hero Product Presentation */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group">
                <img
                  src={currentCategory.heroImage}
                  alt={currentCategory.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Micro Metadata Annotation */}
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#050607]/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5D0]">
                  SPEC / {currentCategory.name}
                </div>

                <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-[#050607]/85 backdrop-blur-md border border-white/[0.08] text-xs font-mono text-[#A5AAAB]">
                  <span className="w-2 h-2 rounded-full bg-[#00E5D0]" />
                  <span>PRECISELY TAILORED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

