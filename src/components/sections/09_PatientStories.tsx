"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CARE_COMMITMENTS } from "@/lib/data";

interface PatientStoriesProps {
  onOpenConsultation: () => void;
}

export const PatientStoriesSection: React.FC<PatientStoriesProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="stories"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              CARE BEYOND
              <br />
              <span className="text-[#00E5D0]">THE DEVICE.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              Prosthetic and orthotic care is a lifelong partnership. We stand beside each patient through every step of their journey — from initial clinical evaluation to continuous long-term refinement.
            </p>
          </div>
        </div>

        {/* 3-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CARE_COMMITMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-all duration-400 flex flex-col justify-between space-y-6 group shadow-xl"
            >
              {/* Card Header & Image */}
              <div className="space-y-5">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                  <picture>
                    <source srcSet={item.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0F]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#00E5D0] font-bold">0{idx + 1}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-[#A5AAAB] uppercase tracking-wider">{item.subtitle}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Editorial Quote in Natural Sentence Case */}
                <blockquote className="text-sm sm:text-[15px] text-[#F1EFE8] italic font-normal leading-relaxed border-l-2 border-[#00E5D0] pl-4 py-1">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Body Description */}
                <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[#00E5D0] hover:text-[#00E5D0]/80 transition-colors group/btn min-h-[40px]"
                >
                  <span>Consult Clinical Team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


