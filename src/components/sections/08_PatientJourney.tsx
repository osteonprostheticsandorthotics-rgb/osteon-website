"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CLINICAL_PROCESS_STEPS } from "@/lib/data";

interface PatientJourneyProps {
  onOpenConsultation: () => void;
}

export const PatientJourneySection: React.FC<PatientJourneyProps> = ({ onOpenConsultation }) => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="journey"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                08 / CLINICAL PROCESS
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              YOUR JOURNEY
              <br />
              WITH <span className="text-[#00E5D0]">OSTEON.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              At Osteon, trust is built through understanding, listening, and ongoing support. We take the time to know each patient&apos;s challenges, goals, and daily realities before designing a solution.
            </p>
          </div>
        </div>

        {/* Desktop Connected 5-Stage Horizontal Progression */}
        <div className="hidden lg:block relative mb-16">
          {/* Thin Hairline Connecting Line */}
          <div className="absolute top-12 inset-x-10 h-px bg-white/[0.12] z-0">
            <motion.div
              className="h-full bg-[#00E5D0]"
              style={{ width: `${(activeStage / (CLINICAL_PROCESS_STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* 5 Stages Grid */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {CLINICAL_PROCESS_STEPS.map((stage, idx) => {
              const isActive = activeStage === idx;
              const isPassed = activeStage >= idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col cursor-pointer group space-y-6"
                >
                  {/* Step Indicator Node */}
                  <div className="flex items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 border ${
                        isActive
                          ? "bg-[#00E5D0] text-[#050607] border-[#00E5D0] shadow-[0_0_20px_rgba(0,229,208,0.35)] scale-110"
                          : isPassed
                          ? "bg-[#050607] text-[#00E5D0] border-[#00E5D0]"
                          : "bg-[#050607] text-[#A5AAAB] border-white/[0.15] group-hover:border-white/[0.3]"
                      }`}
                    >
                      {stage.step}
                    </div>
                  </div>

                  {/* Stage Details */}
                  <div className="space-y-2 pr-4">
                    <span className="text-[10px] font-mono text-[#00E5D0] uppercase tracking-widest block font-bold">
                      STAGE {stage.step}
                    </span>
                    <h3
                      className={`font-display text-lg font-bold uppercase transition-colors ${
                        isActive ? "text-[#00E5D0]" : "text-[#F1EFE8] group-hover:text-[#F1EFE8]"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#A5AAAB] leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Focus Banner on Desktop */}
        <div className="hidden lg:block">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] flex items-center justify-between gap-8"
          >
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                STAGE {CLINICAL_PROCESS_STEPS[activeStage].step} • {CLINICAL_PROCESS_STEPS[activeStage].title}
              </span>
              <h4 className="font-display text-2xl font-bold uppercase text-[#F1EFE8]">
                {CLINICAL_PROCESS_STEPS[activeStage].subtitle}
              </h4>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#00E5D0]/90 transition-all shrink-0 shadow-[0_0_20px_rgba(0,229,208,0.2)] min-h-[48px]"
            >
              <span>Begin With Stage 01</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Dedicated Mobile Vertical Timeline (Visible only on mobile/tablet < lg) */}
        <div className="lg:hidden relative pl-6 border-l border-white/[0.12] ml-4 space-y-8">
          {CLINICAL_PROCESS_STEPS.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative space-y-3"
            >
              {/* Bullet Node */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#050607] border-2 border-[#00E5D0] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              </div>

              <div className="p-5 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#00E5D0] uppercase font-bold">
                    STAGE {stage.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#A5AAAB]">
                    OSTEON CARE
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-[#F1EFE8]">
                  {stage.title}
                </h4>
                <p className="text-xs text-[#00E5D0] font-medium font-sans">{stage.subtitle}</p>
                <p className="text-xs text-[#A5AAAB] leading-relaxed pt-2 border-t border-white/[0.06] font-normal">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full py-4 rounded-full bg-[#00E5D0] text-[#050607] font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

