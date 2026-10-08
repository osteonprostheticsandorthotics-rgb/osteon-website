"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: () => void;
  onOpenContact?: () => void;
  onOpenVideoStory?: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({
  onOpenConsultation,
  onOpenVideoStory,
}) => {
  return (
    <section
      id="final-cta"
      className="relative w-full min-h-[85svh] sm:min-h-[90svh] py-20 sm:py-24 md:py-28 bg-[#050607] flex items-center overflow-hidden border-t border-white/[0.07]"
    >
      {/* Cinematic Full-Bleed Background Imagery */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/final-cta-dawn.jpg"
          alt="Person with prosthetic limb standing on scenic mountain overlook at golden hour"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15]"
        />
        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/90 via-[#050607]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/70" />
      </div>

      {/* Content Composition */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Section Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.24em] text-[#00E5D0]"
          >
            06 — YOUR JOURNEY
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase text-[clamp(40px,12vw,64px)] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.93] tracking-[-0.035em] text-[#F1EFE8]"
          >
            MORE
            <br />
            THAN A <span className="text-[#00E5D0]">DEVICE.</span>
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#A5AAAB] leading-relaxed font-normal max-w-xl"
          >
            It&apos;s about confidence, independence, and a future with more possibilities. At Osteon, we&apos;re committed to walking this journey with you — at every step.
          </motion.p>

          {/* Dual Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6"
          >
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs sm:text-sm font-bold uppercase tracking-[0.14em] hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,208,0.25)] min-h-[48px] group cursor-pointer w-full sm:w-auto"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {onOpenVideoStory && (
              <button
                onClick={onOpenVideoStory}
                className="inline-flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-medium text-[#F1EFE8] hover:text-[#00E5D0] transition-colors py-2 px-3 group min-h-[44px] cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-[#00E5D0] group-hover:bg-[#00E5D0] group-hover:text-[#050607] transition-all shrink-0">
                  <span className="text-xs ml-0.5">▶</span>
                </span>
                <span className="uppercase tracking-wider text-xs font-mono">Watch our story</span>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


