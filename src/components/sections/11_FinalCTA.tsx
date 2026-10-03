"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO } from "@/lib/data";

interface FinalCTAProps {
  onOpenConsultation: () => void;
  onOpenContact?: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({
  onOpenConsultation,
  onOpenContact,
}) => {
  return (
    <section
      id="final-cta"
      className="relative w-full min-h-[85vh] py-28 md:py-44 bg-[#050607] flex items-center justify-center overflow-hidden border-t border-white/[0.07]"
    >
      {/* Cinematic Full-Bleed Background Imagery */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/final-cta-dawn.jpg"
          alt="Person walking freely with prosthetic toward open horizon at dawn"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.18]"
        />
        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/50 to-[#050607]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,208,0.06)_0%,_transparent_70%)]" />
      </div>

      {/* Centerpiece Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-8">
        {/* Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <Logo size="lg" />
        </motion.div>

        {/* Micro Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
            11 / BEGIN YOUR JOURNEY
          </span>
        </motion.div>

        {/* Gigantic Closing Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold uppercase text-[42px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
        >
          YOUR MOVEMENT.
          <br />
          OUR <span className="text-[#00E5D0]">COMMITMENT.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#A5AAAB] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Let&apos;s find the right solution for you. We provide personalized care and support every step of the way.
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#00E5D0] text-[#050607] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_35px_rgba(0,229,208,0.25)] hover:shadow-[0_0_50px_rgba(0,229,208,0.4)] min-h-[48px] group"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#F1EFE8] text-xs sm:text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 min-h-[48px] group"
          >
            <Phone className="w-3.5 h-3.5 text-[#00E5D0]" />
            <span>Call {COMPANY_INFO.contact.primaryPhone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};


