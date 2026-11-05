"use client";

import React from "react";
import { motion } from "framer-motion";

export const DesignedAroundYouSection: React.FC = () => {
  const designPillars = [
    {
      number: "01",
      title: "Custom-Molded Carbon Fibre Socket",
      description:
        "Sculpted directly to the residual limb to distribute pressure evenly, eliminate focal points, and establish a stable anatomical foundation.",
    },
    {
      number: "02",
      title: "Load-Bearing Pylon & Alignment",
      description:
        "Rigid structural shaft connecting the socket to the foot, calibrated to absorb dynamic impact forces and support a natural, balanced gait cycle.",
    },
    {
      number: "03",
      title: "Intimate Protective Liner",
      description:
        "Medical-grade washable interface that cushions sensitive tissue, reduces friction, and protects skin integrity during all-day wear.",
    },
  ];

  return (
    <section
      id="designed-around-you"
      className="relative w-full py-28 md:py-36 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
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
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
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
              Prosthetic fitting is an intimate craft. By combining medical precision with lightweight composite engineering, every device is shaped for natural biomechanics, stability, and enduring daily comfort.
            </p>
          </div>
        </div>

        {/* Clean Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-2xl group"
          >
            <picture>
              <source srcSet="/images/socket-engineering.webp" type="image/webp" />
              <img
                src="/images/socket-engineering.jpg"
                alt="Custom carbon fibre socket sculpting, pylon alignment, and precision prosthetic fabrication"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Minimalist 3-Pillar Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-center divide-y divide-white/[0.08]">
            {designPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-6 sm:py-7 first:pt-0 last:pb-0 space-y-2 group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#00E5D0] tracking-wider font-semibold">
                    {pillar.number}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#A5AAAB] leading-relaxed pl-8 font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


