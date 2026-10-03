"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRUST_PILLARS } from "@/lib/data";

interface TrustCredibilityProps {
  onOpenConsultation: () => void;
}

export const TrustCredibilitySection: React.FC<TrustCredibilityProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="trust"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                10 / CLINICAL COMMITMENTS
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              STANDARDS
              <br />
              BUILT ON <span className="text-[#00E5D0]">TRUST.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              Combining medical expertise with innovative technology to design prosthetic and orthotic solutions that feel natural, comfortable, and precisely tailored to each individual.
            </p>
          </div>
        </div>

        {/* 4 Pillars using Typography and Hairline Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TRUST_PILLARS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-white/[0.12] pt-8 space-y-4 group hover:border-[#00E5D0] transition-colors duration-400"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#00E5D0]">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono text-[#A5AAAB] uppercase tracking-widest">
                  OSTEON COMMITMENT
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


