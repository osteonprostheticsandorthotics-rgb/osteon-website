"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HumanStoryProps {
  onOpenConsultation: () => void;
}

export const HumanStorySection: React.FC<HumanStoryProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="human-story"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Asymmetrical 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Micro-Label & Massive Typographic Statement */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                01 / ABOUT OSTEON
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[82px] lg:text-[96px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              EVERY BODY
              <br />
              MOVES
              <br />
              <span className="text-[#00E5D0]">DIFFERENTLY.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 pt-4 max-w-lg"
            >
              <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
                Osteon is a trusted provider of advanced prosthetic and orthotic care, dedicated to restoring mobility, independence, and quality of life. By combining medical expertise with innovative technology, we design solutions that feel natural, comfortable, and precisely tailored to each individual.
              </p>

              <p className="text-sm text-[#A5AAAB]/80 leading-relaxed font-normal">
                We support people of all ages, from children with congenital conditions to adults recovering from trauma or managing complex medical challenges. At every stage, our team offers personalized guidance, compassionate, patient-centered care, and unwavering support.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#F1EFE8] hover:text-[#00E5D0] group transition-colors"
                >
                  <span>Learn More About Our Clinical Care</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 text-[#00E5D0]" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Framed Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[10/11] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85"
                alt="Osteon patient care"
                className="w-full h-full object-cover object-top filter brightness-[0.88] contrast-[1.06] hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/90 via-[#050607]/20 to-transparent" />

              {/* Minimal Metadata Annotation on image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0A0D0F]/85 backdrop-blur-md border border-white/[0.08] max-w-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                    01.1 / OUR MISSION
                  </span>
                  <span className="text-[10px] font-mono text-[#A5AAAB]">PATIENT-CENTERED</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F1EFE8] font-normal leading-snug">
                  &ldquo;Mobility challenges should never limit human potential. We believe in dignity, confidence, and freedom of movement.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

