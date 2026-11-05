"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ORTHOTIC_CATEGORIES } from "@/lib/data";

interface OrthoticsSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export const OrthoticsSection: React.FC<OrthoticsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const filterPills = [
    { label: "ALL", key: "all" },
    { label: "FOOT (FO)", key: "foot" },
    { label: "ANKLE-FOOT (AFO)", key: "ankle" },
    { label: "KNEE & KAFO", key: "knee" },
    { label: "HIP & HKAFO", key: "hip" },
    { label: "SPINE", key: "spine" },
    { label: "UPPER LIMB", key: "upper" },
  ];

  const filteredCategories =
    selectedCat === "all"
      ? ORTHOTIC_CATEGORIES
      : ORTHOTIC_CATEGORIES.filter((c) => {
          const key = selectedCat.toLowerCase();
          return (
            c.category.toLowerCase().includes(key) ||
            c.title.toLowerCase().includes(key) ||
            c.id.toLowerCase().includes(key)
          );
        });

  return (
    <section
      id="orthotics"
      className="relative w-full py-24 md:py-36 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#00E5D0]">
              05 — CLINICAL ORTHOTICS
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[40px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.94] tracking-[-0.04em] text-[#F1EFE8]"
            >
              ORTHOTICS
            </motion.h2>
            <p className="text-sm sm:text-base text-[#A5AAAB] max-w-xl leading-relaxed">
              Precision anatomical orthoses engineered to support, align, prevent deformity, and restore natural human locomotion.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 p-1.5 rounded-full bg-[#0A0D0F] border border-white/[0.08] overflow-x-auto no-scrollbar scroll-smooth w-full sm:w-auto">
            {filterPills.map((item) => {
              const active = selectedCat === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setSelectedCat(item.key)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all min-h-[40px] flex items-center shrink-0 cursor-pointer ${
                    active
                      ? "bg-[#00E5D0] text-[#050607] font-bold shadow-[0_0_15px_rgba(0,229,208,0.25)]"
                      : "text-[#A5AAAB] hover:text-[#F1EFE8] hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Editorial Grid on Desktop, Touch Snap Peek on Mobile */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory pb-6 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {filteredCategories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-all duration-500 flex flex-col justify-between shadow-2xl min-w-[310px] sm:min-w-[360px] lg:min-w-0 snap-center shrink-0 lg:shrink"
            >
              {/* Image Container with Framing */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111518]">
                <picture>
                  <source srcSet={item.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.05]"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0F] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5D0] border border-white/[0.08]">
                  {item.category}
                </span>
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#A5AAAB] border border-white/[0.06]">
                  {item.items.length} Systems
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Included Devices Showcase */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A9CA5] block">
                      Included Devices ({item.items.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.items.map((subItem) => (
                        <span
                          key={subItem.name}
                          className="px-2.5 py-1 rounded-md bg-[#141A1F] border border-white/[0.08] text-[11px] font-mono text-[#D1D5D8] group-hover:border-[#00E5D0]/30 transition-colors"
                        >
                          {subItem.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#00E5D0] uppercase tracking-wider line-clamp-1">
                    {item.keyBenefit}
                  </span>
                  <button
                    onClick={() => onOpenConsultation?.(`Orthotics: ${item.title}`)}
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:bg-[#00E5D0] group-hover:text-[#050607] flex items-center justify-center text-[#F1EFE8] transition-all duration-300 min-w-[44px] min-h-[44px] shrink-0 cursor-pointer"
                    aria-label={`Consult about ${item.title}`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


