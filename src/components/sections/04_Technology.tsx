"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TechnologySectionProps {
  onOpenConsultation: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="technology"
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
              PRECISION
              <br />
              MEETS
              <br />
              <span className="text-[#00E5D0]">MOVEMENT.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              Combining medical expertise with innovative technology to design prosthetic and orthotic solutions that feel natural, comfortable, and precisely tailored to each individual.
            </p>
            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#00E5D0] hover:text-[#00E5D0]/80 transition-colors"
              >
                <span>Consult Our Clinical Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Technical Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 01: Carbon Fibre Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-4 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/tech-composite-matrix.jpg"
                  alt="High-performance carbon fibre orthotic engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#00E5D0] tracking-wider block font-semibold">
                  01
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  High-Performance Carbon
                </h4>
                <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                  Engineered with aerospace-grade carbon weave, providing exceptional strength-to-weight ratio, structural elasticity, and responsive energy return.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 02: Myoelectric Sensing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-4 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/bionic-arm-prosthesis.jpg"
                  alt="Myoelectric electrode sensors and bionic hand prosthesis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#00E5D0] tracking-wider block font-semibold">
                  02
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  Myoelectric Sensors
                </h4>
                <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                  Non-invasive surface electrode sensors that detect minute residual muscle impulses to intuitively coordinate bionic hand, wrist, and elbow articulations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 03: Custom-Molded Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-4 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/socket-engineering.jpg"
                  alt="Custom carbon fibre socket sculpting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#00E5D0] tracking-wider block font-semibold">
                  03
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  Anatomical Interface
                </h4>
                <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                  Precision-molded sockets tailored directly from individual scans to cushion sensitive bony prominences and distribute load comfortably.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 04: Dynamic Suspension & Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-4 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/tech-gait-kinematics.jpg"
                  alt="Dynamic cadence and gait biomechanics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#00E5D0] tracking-wider block font-semibold">
                  04
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  Dynamic Suspension
                </h4>
                <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                  Pin-lock and elevated vacuum suspension mechanisms paired with rigid pylons and multi-axial carbon feet for fluid cadence adaptation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
