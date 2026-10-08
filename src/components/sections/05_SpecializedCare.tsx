"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface SpecializedCareProps {
  onOpenConsultation: () => void;
}

export const SpecializedCareSection: React.FC<SpecializedCareProps> = ({
  onOpenConsultation,
}) => {
  const specializedCards = [
    {
      id: "scoliosis",
      title: "SCOLIOSIS CARE",
      subtitle: "Boston braces and spinal solutions.",
      image: "/images/boston-brace-scoliosis.jpg",
      href: "#scoliosis",
    },
    {
      id: "pediatric",
      title: "PEDIATRIC SOLUTIONS",
      subtitle: "Supporting growing lives.",
      image: "/images/pediatric-solutions.jpg",
      href: "#kids",
    },
    {
      id: "custom-orthotics",
      title: "CUSTOM ORTHOTICS",
      subtitle: "Precision support for everyday life.",
      image: "/images/carbon-fibre-afo.jpg",
      href: "#orthotics",
    },
  ];

  return (
    <section
      id="specialized-care"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.24em] text-[#00E5D0]"
            >
              05 — SPECIALIZED CARE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[36px] sm:text-[50px] md:text-[64px] lg:text-[72px] leading-[0.96] tracking-[-0.035em] text-[#F1EFE8]"
            >
              SOLUTIONS
              <br />
              FOR EVERY STAGE
              <br />
              OF <span className="text-[#00E5D0]">LIFE.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal">
              From growing children to adults with complex needs, we provide specialized orthotic solutions for scoliosis care, pediatric conditions and more.
            </p>

            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-[#00E5D0] border border-white/[0.1] hover:border-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 min-h-[44px] group"
              >
                <span>Explore all solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE TOUCH-FIRST HORIZONTAL SNAP CAROUSEL (< md) */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto snap-x-mandatory no-scrollbar gap-4 -mx-6 px-6 pb-4">
            {specializedCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={onOpenConsultation}
                className="w-[84vw] max-w-[330px] shrink-0 snap-center rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] p-6 flex flex-col justify-between min-h-[460px] shadow-2xl relative cursor-pointer active:scale-[0.99] transition-transform"
              >
                {/* Background Photography */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/45 to-transparent z-10" />
                </div>

                {/* Top Badge & Counter */}
                <div className="relative z-20 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5D0] border border-white/[0.08]">
                    Specialized Care
                  </span>
                  <span className="text-xs font-mono font-bold text-[#F1EFE8]/70">
                    0{idx + 1} / 03
                  </span>
                </div>

                {/* Bottom Meta & Action */}
                <div className="relative z-20 space-y-4 pt-20">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold uppercase text-2xl text-[#F1EFE8] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A5AAAB] font-normal leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#00E5D0]">
                      Explore program
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.12] text-[#00E5D0] flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Swipe Cue Indicator */}
          <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#60686B]">
            <span className="uppercase tracking-wider">Swipe to explore (3 solutions)</span>
            <span className="text-[#00E5D0]">← →</span>
          </div>
        </div>

        {/* DESKTOP 3-COLUMN EDITORIAL PRODUCT CARDS (>= md) */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {specializedCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={onOpenConsultation}
              className="group relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] p-6 sm:p-8 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] shadow-2xl hover:border-[#00E5D0]/40 transition-all duration-500 cursor-pointer"
            >
              {/* Card Background Image with Subtle Vignette */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/40 to-[#050607]/70 z-10" />
              </div>

              {/* Top Placeholder / Spacer */}
              <div className="relative z-20" />

              {/* Bottom Card Meta & Action */}
              <div className="relative z-20 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5AAAB] font-sans">
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] group-hover:bg-[#00E5D0] text-[#00E5D0] group-hover:text-[#050607] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
