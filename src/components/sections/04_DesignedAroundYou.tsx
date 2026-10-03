"use client";

import React from "react";
import { motion } from "framer-motion";

export const DesignedAroundYouSection: React.FC = () => {
  return (
    <section
      id="designed-around-you"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                03 / ANATOMICAL HARMONY
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              DESIGNED
              <br />
              AROUND
              <br />
              <span className="text-[#00E5D0]">YOU.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#A5AAAB] leading-relaxed font-normal">
              By combining medical expertise with innovative technology, we design prosthetic solutions that feel natural, comfortable, and precisely tailored to each individual.
            </p>
          </div>
        </div>

        {/* Visual Composition with Technical Annotations and Hairline Lines */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Fitting Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl"
          >
            <img
              src="/images/socket-engineering.jpg"
              alt="Close-up custom prosthetic socket engineering and titanium interface"
              className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/80 via-transparent to-transparent pointer-events-none" />

            {/* Desktop Hairline Technical Overlay Points */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {/* Point 01: FIT */}
              <div className="absolute top-[22%] left-[28%] flex items-center gap-3">
                <div className="w-3 h-3 rounded-full border border-[#00E5D0] flex items-center justify-center bg-[#050607]">
                  <span className="w-1 h-1 rounded-full bg-[#00E5D0]" />
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-[#00E5D0]/80 to-transparent" />
                <div className="px-3 py-1 rounded bg-[#050607]/90 border border-white/[0.08] backdrop-blur-md">
                  <span className="text-[10px] font-mono text-[#00E5D0] font-bold">01 / FIT</span>
                  <span className="text-[10px] font-mono text-[#A5AAAB] ml-2">CARBON FIBRE SOCKET</span>
                </div>
              </div>

              {/* Point 02: FUNCTION */}
              <div className="absolute top-[52%] right-[18%] flex items-center flex-row-reverse gap-3">
                <div className="w-3 h-3 rounded-full border border-[#00E5D0] flex items-center justify-center bg-[#050607]">
                  <span className="w-1 h-1 rounded-full bg-[#00E5D0]" />
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-[#00E5D0]/80 to-transparent" />
                <div className="px-3 py-1 rounded bg-[#050607]/90 border border-white/[0.08] backdrop-blur-md text-right">
                  <span className="text-[10px] font-mono text-[#00E5D0] font-bold">02 / FUNCTION</span>
                  <span className="text-[10px] font-mono text-[#A5AAAB] ml-2">LOAD-BEARING PYLON</span>
                </div>
              </div>

              {/* Point 03: COMFORT */}
              <div className="absolute bottom-[20%] left-[34%] flex items-center gap-3">
                <div className="w-3 h-3 rounded-full border border-[#00E5D0] flex items-center justify-center bg-[#050607]">
                  <span className="w-1 h-1 rounded-full bg-[#00E5D0]" />
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-[#00E5D0]/80 to-transparent" />
                <div className="px-3 py-1 rounded bg-[#050607]/90 border border-white/[0.08] backdrop-blur-md">
                  <span className="text-[10px] font-mono text-[#00E5D0] font-bold">03 / COMFORT</span>
                  <span className="text-[10px] font-mono text-[#A5AAAB] ml-2">PROTECTIVE LINER</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Annotations Stack (Side on Desktop, Stack on Mobile) */}
          <div className="lg:col-span-4 space-y-6">
            {/* 01 FIT */}
            <div className="border-l border-white/[0.12] pl-5 space-y-2 hover:border-[#00E5D0] transition-colors group">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                01 / FIT
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8]">
                Custom-Made Carbon Fibre Socket
              </h4>
              <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed">
                Grips the residual limb, redistributes load, and provides a secure base for component attachment.
              </p>
            </div>

            {/* 02 FUNCTION */}
            <div className="border-l border-white/[0.12] pl-5 space-y-2 hover:border-[#00E5D0] transition-colors group">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                02 / FUNCTION
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8]">
                Load-Bearing Pylon & Adaptors
              </h4>
              <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed">
                Acts as a rigid, load-bearing shaft between the socket and the foot to absorb shock and support walking.
              </p>
            </div>

            {/* 03 COMFORT */}
            <div className="border-l border-white/[0.12] pl-5 space-y-2 hover:border-[#00E5D0] transition-colors group">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00E5D0] font-bold">
                03 / COMFORT
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-[#F1EFE8]">
                Removable, Washable Inner Liner
              </h4>
              <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed">
                Acts as an intimate interface and protects the residual limb and skin for long-term daily wear.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

