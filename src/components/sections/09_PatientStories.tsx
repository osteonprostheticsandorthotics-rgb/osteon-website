"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { CARE_COMMITMENTS, CareCommitment } from "@/lib/data";

interface PatientStoriesProps {
  onOpenConsultation: () => void;
}

export const PatientStoriesSection: React.FC<PatientStoriesProps> = ({ onOpenConsultation }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedCommitment, setSelectedCommitment] = useState<CareCommitment | null>(null);

  const currentCommitment = CARE_COMMITMENTS[activeIdx];

  const nextCommitment = () => {
    setActiveIdx((prev) => (prev + 1) % CARE_COMMITMENTS.length);
  };

  const prevCommitment = () => {
    setActiveIdx((prev) => (prev - 1 + CARE_COMMITMENTS.length) % CARE_COMMITMENTS.length);
  };

  return (
    <section
      id="care-philosophy"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                09 / CARE PHILOSOPHY
              </span>
            </div>
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

          {/* Selector Tabs & Pagination */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2 p-1.5 rounded-full bg-[#0A0D0F] border border-white/[0.08]">
              {CARE_COMMITMENTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all min-h-[40px] ${
                    activeIdx === idx
                      ? "bg-[#00E5D0] text-[#050607] font-bold shadow-[0_0_15px_rgba(0,229,208,0.25)]"
                      : "text-[#A5AAAB] hover:text-[#F1EFE8] hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.title.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={prevCommitment}
                className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#00E5D0] text-[#F1EFE8] hover:text-[#00E5D0] flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Previous commitment"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCommitment}
                className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#00E5D0] text-[#F1EFE8] hover:text-[#00E5D0] flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Next commitment"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Overlapping Editorial Commitment Composition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCommitment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Left: Large Framed Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl">
                <img
                  src={currentCommitment.image}
                  alt={currentCommitment.title}
                  className="w-full h-full object-cover object-top filter brightness-[0.9] contrast-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-[#050607]/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5D0]">
                  0{activeIdx + 1} / COMMITMENT
                </div>
              </div>
            </div>

            {/* Right: Overlapping Editorial Quote & Details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00E5D0] font-bold block">
                  {currentCommitment.title} • {currentCommitment.subtitle}
                </span>

                <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#F1EFE8] leading-tight">
                  &ldquo;{currentCommitment.quote}&rdquo;
                </blockquote>
              </div>

              <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal">
                {currentCommitment.description}
              </p>

              {/* Metadata Strip */}
              <div className="p-5 rounded-2xl bg-[#0A0D0F] border border-white/[0.08] grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#A5AAAB] block uppercase tracking-wider text-[10px]">Pillar</span>
                  <span className="font-bold text-[#F1EFE8] mt-1 block font-sans text-sm">{currentCommitment.title}</span>
                </div>
                <div>
                  <span className="text-[#A5AAAB] block uppercase tracking-wider text-[10px]">Clinical Focus</span>
                  <span className="font-bold text-[#00E5D0] mt-1 block font-sans text-sm">{currentCommitment.subtitle}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => setSelectedCommitment(currentCommitment)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#00E5D0]/90 transition-all shadow-[0_0_20px_rgba(0,229,208,0.2)] min-h-[48px]"
                >
                  <span>Explore Clinical Commitment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F1EFE8] text-xs font-mono uppercase tracking-wider transition-colors min-h-[48px]"
                >
                  <span>Contact Our Team</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Commitment Detail Modal Drawer */}
      <AnimatePresence>
        {selectedCommitment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCommitment(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A0D0F] border border-white/[0.08] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00E5D0] shrink-0">
                    <img
                      src={selectedCommitment.image}
                      alt={selectedCommitment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-[#F1EFE8]">
                      {selectedCommitment.title}
                    </h3>
                    <p className="text-xs text-[#00E5D0] font-mono">{selectedCommitment.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCommitment(null)}
                  className="p-2 text-[#A5AAAB] hover:text-white rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close commitment details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <blockquote className="text-sm sm:text-base text-[#F1EFE8] italic font-medium border-l-2 border-[#00E5D0] pl-4">
                  &ldquo;{selectedCommitment.quote}&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">{selectedCommitment.description}</p>

                <div className="p-4 rounded-xl bg-[#111518] border border-white/[0.06] grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[#A5AAAB] block">Commitment:</span>
                    <span className="font-bold text-white mt-1 block font-sans">{selectedCommitment.title}</span>
                  </div>
                  <div>
                    <span className="text-[#A5AAAB] block">Promise:</span>
                    <span className="font-bold text-[#00E5D0] mt-1 block font-sans">{selectedCommitment.subtitle}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedCommitment(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00E5D0] text-[#050607] text-xs font-bold uppercase tracking-wider hover:bg-[#00E5D0]/90 transition-all min-h-[44px]"
                >
                  Connect With Osteon
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

