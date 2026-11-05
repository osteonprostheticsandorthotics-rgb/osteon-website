"use client";

import React from "react";
import { motion } from "framer-motion";

interface SpecializedCareProps {
  onOpenConsultation: (serviceName?: string) => void;
  onOpenSolution?: (type: "prosthetics" | "orthotics") => void;
}

export const SpecializedCareSection: React.FC<SpecializedCareProps> = ({
  onOpenConsultation,
  onOpenSolution,
}) => {
  const specializedCards = [
    {
      id: "scoliosis",
      title: "SCOLIOSIS CARE",
      subtitle: "Boston braces and spinal solutions.",
      image: "/images/boston-brace-scoliosis.jpg",
      serviceName: "Orthotics: Scoliosis Braces",
    },
    {
      id: "pediatric",
      title: "PEDIATRIC SOLUTIONS",
      subtitle: "Supporting growing lives.",
      image: "/images/pediatric-solutions.jpg",
      serviceName: "Pediatric Orthotics & Care",
    },
    {
      id: "custom-orthotics",
      title: "CUSTOM ORTHOTICS",
      subtitle: "Precision support for everyday life.",
      image: "/images/carbon-fibre-afo.jpg",
      serviceName: "Orthotics: Custom Orthotics",
    },
  ];

  const handleCardClick = (card: (typeof specializedCards)[0]) => {
    if (card.id === "scoliosis" || card.id === "custom-orthotics") {
      if (onOpenSolution) {
        onOpenSolution("orthotics");
        return;
      }
    }
    onOpenConsultation(card.serviceName);
  };

  return (
    <section
      id="specialized-care"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050607] overflow-hidden border-t border-white/[0.07] scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.24em] text-[#00E5D0]"
            >
              05 — SPECIALIZED CARE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[36px] sm:text-[50px] md:text-[64px] lg:text-[72px] leading-[0.96] tracking-[-0.035em] text-[#F1EFE8]"
            >
              SOLUTIONS
              <br />
              FOR EVERY STAGE
              <br />
              OF <span className="text-[#00E5D0]">LIFE.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal">
              From growing children to adults with complex needs, we provide specialized orthotic solutions for scoliosis care, pediatric conditions and more.
            </p>
          </div>
        </div>        {/* MOBILE TOUCH-FIRST HORIZONTAL SNAP CAROUSEL (< md) */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto snap-x-mandatory no-scrollbar gap-4 -mx-6 px-6 pb-4">
            {specializedCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => handleCardClick(card)}
                className="w-[72vw] max-w-[280px] shrink-0 snap-center rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] p-4.5 sm:p-5 flex flex-col justify-between min-h-[300px] shadow-2xl relative cursor-pointer active:scale-[0.99] transition-transform"
              >
                {/* Background Photography */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <picture>
                    <source srcSet={card.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/45 to-transparent z-10" />
                </div>

                {/* Top Counter */}
                <div className="relative z-20 flex items-center justify-end">
                  <span className="text-[11px] font-mono font-bold text-[#F1EFE8]/70">
                    0{idx + 1} / 03
                  </span>
                </div>

                {/* Bottom Meta */}
                <div className="relative z-20 space-y-1.5 pt-6">
                  <h3 className="font-display font-bold uppercase text-lg sm:text-xl text-[#F1EFE8] tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#A5AAAB] font-normal leading-relaxed line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Swipe Cue Indicator */}
          <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#60686B]">
            <span className="uppercase tracking-wider">Swipe to explore (3 solutions)</span>
            <span className="text-[#00E5D0]">← →</span>
          </div>
        </div>

        {/* DESKTOP 3-COLUMN EDITORIAL PRODUCT CARDS (>= md) */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6">
          {specializedCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={() => handleCardClick(card)}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] p-5 sm:p-6 flex flex-col justify-between min-h-[310px] sm:min-h-[330px] shadow-2xl hover:border-[#00E5D0]/40 transition-all duration-500 cursor-pointer"
            >
              {/* Card Background Image with Subtle Vignette */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <picture>
                  <source srcSet={card.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/40 to-[#050607]/70 z-10" />
              </div>

              {/* Top Counter */}
              <div className="relative z-20 flex items-center justify-end">
                <span className="text-[11px] font-mono font-bold text-[#F1EFE8]/70">
                  0{idx + 1} / 03
                </span>
              </div>

              {/* Bottom Card Meta */}
              <div className="relative z-20 space-y-1.5 pt-6">
                <h3 className="font-display font-bold uppercase text-lg sm:text-xl text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5AAAB] font-sans">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
