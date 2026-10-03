"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PEDIATRIC_SOLUTIONS } from "@/lib/data";

interface OsteonKidsProps {
  onOpenConsultation: () => void;
}

export const OsteonKidsSection: React.FC<OsteonKidsProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="kids"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                07 / PEDIATRIC SOLUTIONS
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              FOR
              <br />
              GROWING
              <br />
              <span className="text-[#00E5D0]">LIVES.</span>
            </motion.h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              Osteon for Kids offers safe, comfortable, and child-friendly orthotic solutions that support healthy growth and development. Each device is carefully fitted to provide gentle correction, better alignment, and improved mobility.
            </p>
            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00E5D0] hover:text-[#00E5D0]/80 transition-colors"
              >
                <span>Pediatric Clinical Intake</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Multi-Column Sophisticated Gallery */}
        <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {PEDIATRIC_SOLUTIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-all duration-500 flex flex-col justify-between shadow-2xl min-w-[290px] sm:min-w-[340px] md:min-w-0 snap-center shrink-0 md:shrink"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111518]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.9] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0F] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5D0] border border-white/[0.08]">
                  OSTEON KIDS
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {item.subtitle && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5D0] block">
                      {item.subtitle}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#00E5D0] font-medium font-sans">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed pt-1 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-mono uppercase tracking-wider text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors flex items-center gap-2 min-h-[44px]"
                  >
                    <span>Schedule Pediatric Fitting</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#00E5D0]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

