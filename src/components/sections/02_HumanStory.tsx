"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface HumanStoryProps {
  onOpenConsultation: () => void;
}

export const HumanStorySection: React.FC<HumanStoryProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline & Story */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.22em] text-[#8E9B9D]"
            >
              01 — ABOUT OSTEON
            </motion.div>

            {/* Giant Stacked Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-extrabold uppercase text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-[#F1EFE8]"
            >
              HUMAN
              <br />
              POTENTIAL
              <br />
              IN <span className="text-[#00E5D0]">MOTION.</span>
            </motion.h2>

            {/* Narrative & Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal max-w-xl">
                We create personalized prosthetic and orthotic solutions that combine clinical expertise, advanced materials, and a deep understanding of human movement — helping people of all ages live with greater confidence, comfort, and independence.
              </p>

              <div>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#00E5D0] text-[#00E5D0] bg-transparent hover:bg-[#00E5D0] hover:text-[#050607] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 group shadow-[0_0_20px_rgba(0,229,208,0.12)] hover:shadow-[0_0_25px_rgba(0,229,208,0.3)] min-h-[44px]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Spread (Mobile: Magazine Layering, Desktop: 3-Image Staggered Mosaic) */}
          <div className="lg:col-span-7 relative pt-4 sm:pt-6 lg:pt-0">
            {/* MOBILE EDITORIAL LAYERED SPREAD (< lg) */}
            <div className="block lg:hidden relative pb-4 max-w-[280px] sm:max-w-[340px] mx-auto">
              {/* Primary Dominant Clinical Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-[88%] aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl relative"
              >
                <img
                  src="/images/about-clinician-hero.jpg"
                  alt="Osteon clinician with precision prosthetic device"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#050607]/80 backdrop-blur-md text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#00E5D0] border border-white/[0.08]">
                  Precision Craftsmanship
                </span>
              </motion.div>

              {/* Overlapping Secondary Images Strip */}
              <div className="flex items-end justify-between -mt-12 sm:-mt-16 relative z-10 gap-3">
                {/* Overlapping Carbon Fiber Matrix Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[40%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0D0F] shadow-2xl relative"
                >
                  <img
                    src="/images/about-carbon-hero.jpg"
                    alt="Carbon fiber matrix composite weave engineering"
                    className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Overlapping Athlete in Motion Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[54%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0D0F] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <img
                    src="/images/about-runner-hero.jpg"
                    alt="Human potential in motion - athlete with prosthetic limb"
                    className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.05]"
                  />
                </motion.div>
              </div>
            </div>

            {/* DESKTOP 3-IMAGE ASYMMETRICAL MOSAIC (>= lg) */}
            <div className="hidden lg:flex items-end gap-3.5 sm:gap-4 md:gap-5">
              {/* Image 1: Left staggered portrait */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[33%] self-end translate-y-12"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group">
                  <img
                    src="/images/about-runner-hero.jpg"
                    alt="Human potential in motion - athlete with prosthetic limb walking on street"
                    className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </motion.div>

              {/* Image 2: Center Main Hero */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-[45%] self-start"
              >
                <div className="relative aspect-[4/4.9] rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group">
                  <img
                    src="/images/about-clinician-hero.jpg"
                    alt="Osteon clinician in workshop fitting precision prosthetic device"
                    className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </motion.div>

              {/* Image 3 & Circular Stamp: Right narrow sliver */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-[22%] self-start flex flex-col justify-between gap-4"
              >
                <div className="relative aspect-[9/19] rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group">
                  <img
                    src="/images/about-carbon-hero.jpg"
                    alt="Carbon fiber matrix composite weave engineering"
                    className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Floating Circular Badge Stamp */}
                <div className="pt-4 flex justify-center items-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center select-none">
                    <motion.svg
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                    >
                      <defs>
                        <path
                          id="circleStampPath"
                          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                        />
                      </defs>
                      <text className="text-[9px] font-mono uppercase tracking-[0.24em] fill-[#8E9B9D]">
                        <textPath href="#circleStampPath" startOffset="0%">
                          OSTEON • PRECISION • MOTION •
                        </textPath>
                      </text>
                    </motion.svg>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <ArrowUpRight className="w-5 h-5 text-[#00E5D0]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
