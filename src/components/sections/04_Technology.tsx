"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Scan, Cpu, Compass } from "lucide-react";

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
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                04 / ENGINEERING ARCHITECTURE
              </span>
            </div>
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

        {/* 4-Column Technical Editorial Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 01: Carbon Fibre Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-5 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/tech-composite-matrix.jpg"
                  alt="High-performance carbon fibre orthotic engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#00E5D0] border border-white/[0.08]">
                  CARBON FIBRE MATRIX
                </span>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-[#A5AAAB] uppercase tracking-widest block">
                  LAYER 01
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  HIGH-PERFORMANCE CARBON
                </h4>
                <p className="text-xs text-[#A5AAAB] leading-relaxed">
                  Engineered with high-performance carbon fibre, providing superior strength, elasticity, and energy return.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A5AAAB]">
              <span>CARBON FIBRE</span>
              <span className="text-[#00E5D0]">ENERGY RETURN</span>
            </div>
          </motion.div>

          {/* Pillar 02: Myoelectric Sensing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-5 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Myoelectric electrode sensors and circuitry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#00E5D0] border border-white/[0.08]">
                  MYOELECTRIC SENSING
                </span>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-[#A5AAAB] uppercase tracking-widest block">
                  LAYER 02
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  ELECTRODE SENSORS
                </h4>
                <p className="text-xs text-[#A5AAAB] leading-relaxed">
                  Sensors that capture muscle signals to trigger motion and coordinate electric bionic hand and elbow movement.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A5AAAB]">
              <span>ELECTRODES</span>
              <span className="text-[#00E5D0]">MUSCLE SIGNALS</span>
            </div>
          </motion.div>

          {/* Pillar 03: Custom-Molded Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#0A0F10] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-5 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/socket-engineering.jpg"
                  alt="Custom carbon fibre socket sculpting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#00E5D0] border border-white/[0.08]">
                  CUSTOM SOCKETS
                </span>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-[#A5AAAB] uppercase tracking-widest block">
                  LAYER 03
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  ANATOMICAL INTERFACE
                </h4>
                <p className="text-xs text-[#A5AAAB] leading-relaxed">
                  Custom-molded sockets engineered to grip the residual limb, redistribute load, and provide a comfortable fit.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A5AAAB]">
              <span>CARBON / SILICONE</span>
              <span className="text-[#00E5D0]">CUSTOM-MOLDED</span>
            </div>
          </motion.div>

          {/* Pillar 04: Dynamic Suspension & Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#0A0F10] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-colors duration-400 space-y-5 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111518] border border-white/[0.06]">
                <img
                  src="/images/tech-gait-kinematics.jpg"
                  alt="Dynamic cadence and gait biomechanics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#00E5D0] border border-white/[0.08]">
                  DYNAMIC SUSPENSION
                </span>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-[#A5AAAB] uppercase tracking-widest block">
                  LAYER 04
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  SUSPENSION & ALIGNMENT
                </h4>
                <p className="text-xs text-[#A5AAAB] leading-relaxed">
                  Pin-lock and vacuum-based suspension with rigid pylon shafts and shock-absorbing prosthetic feet.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A5AAAB]">
              <span>SUSPENSION</span>
              <span className="text-[#00E5D0]">SHOCK ABSORPTION</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
