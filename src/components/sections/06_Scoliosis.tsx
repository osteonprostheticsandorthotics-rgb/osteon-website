"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SCOLIOSIS_DETAILS } from "@/lib/data";

interface ScoliosisProps {
  onOpenConsultation: () => void;
}

export const ScoliosisSection: React.FC<ScoliosisProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="scoliosis"
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
              SCOLIOSIS
              <br />
              <span className="text-[#00E5D0]">CARE.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              {SCOLIOSIS_DETAILS.description}
            </p>
            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00E5D0] hover:text-[#00E5D0]/80 transition-colors"
              >
                <span>Consult Scoliosis Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Clinical Visual Composition: Spine Topography Visual + Restrained Orthosis Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Anatomical Spinal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl"
          >
            <img
              src="/images/scoliosis-spine.jpg"
              alt="Anatomical spinal alignment visualization and 3D derotation map"
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
            />
          </motion.div>

          {/* Right Column: Restrained Clinical Features */}
          <div className="lg:col-span-5 space-y-6">
            {/* Feature 1: Boston Brace 3D */}
            <div className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] flex gap-5 items-center group">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#111518] shrink-0 border border-white/[0.06]">
                <img
                  src="/images/boston-brace-scoliosis.jpg"
                  alt="Boston Brace 3D thermoformed orthosis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                  CUSTOM THERMOFORMED MATRIX
                </span>
                <h4 className="font-display text-lg font-bold uppercase text-[#F1EFE8]">
                  BOSTON BRACE 3D
                </h4>
                <p className="text-xs text-[#A5AAAB] leading-relaxed">
                  Ultra-low profile thermoplastic with breathing relief zones.
                </p>
              </div>
            </div>

            {/* Feature 2: Discreet Daily Life */}
            <div className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] flex gap-5 items-center group">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#111518] shrink-0 border border-white/[0.06]">
                <img
                  src="/images/brochure/page_17_img_1_52.jpeg"
                  alt="Clinical Boston Brace alignment and discreet under-clothing fit"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                  DISCREET ERGONOMICS
                </span>
                <h4 className="font-display text-lg font-bold uppercase text-[#F1EFE8]">
                  UNDER-CLOTHING FIT
                </h4>
                <p className="text-xs text-[#A5AAAB] leading-relaxed">
                  Sculpted to disappear naturally under everyday clothing and athletic gear.
                </p>
              </div>
            </div>

            {/* Technical Verification List */}
            <div className="p-5 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-[#F1EFE8]">
                <Check className="w-3.5 h-3.5 text-[#00E5D0]" />
                <span>Lightweight, durable medical-grade material</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F1EFE8]">
                <Check className="w-3.5 h-3.5 text-[#00E5D0]" />
                <span>Custom-fabricated for precise fit and effectiveness</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F1EFE8]">
                <Check className="w-3.5 h-3.5 text-[#00E5D0]" />
                <span>Low-profile design for discreet wear under clothing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F1EFE8]">
                <Check className="w-3.5 h-3.5 text-[#00E5D0]" />
                <span>Adjustable for growth and long-term use</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

