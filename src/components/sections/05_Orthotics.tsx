"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ORTHOTIC_CATEGORIES } from "@/lib/data";

interface OrthoticsSectionProps {
  onOpenConsultation: () => void;
}

export const OrthoticsSection: React.FC<OrthoticsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const filteredCategories =
    selectedCat === "all"
      ? ORTHOTIC_CATEGORIES
      : ORTHOTIC_CATEGORIES.filter((c) => c.category.toLowerCase().includes(selectedCat.toLowerCase()));

  return (
    <section
      id="orthotics"
      className="relative w-full py-28 md:py-40 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A5AAAB]">
                05 / SOLUTIONS
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.92] tracking-[-0.04em] text-[#F1EFE8]"
            >
              ORTHOTICS
            </motion.h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 p-1.5 rounded-full bg-[#0A0D0F] border border-white/[0.08] overflow-x-auto no-scrollbar scroll-smooth w-full sm:w-auto">
            {["ALL", "CARBON FIBRE", "LOWER LIMB", "FOOT & ANKLE", "KNEE", "UPPER LIMB", "SPINE & CERVICAL"].map((item) => {
              const active =
                (item === "ALL" && selectedCat === "all") ||
                selectedCat.toLowerCase() === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => setSelectedCat(item === "ALL" ? "all" : item)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all min-h-[40px] flex items-center shrink-0 ${
                    active
                      ? "bg-[#00E5D0] text-[#050607] font-bold shadow-[0_0_15px_rgba(0,229,208,0.25)]"
                      : "text-[#A5AAAB] hover:text-[#F1EFE8] hover:bg-white/[0.04]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spacious Editorial Horizontal Gallery: Grid on Desktop, Touch Snap Peek on Mobile */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory pb-6 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {filteredCategories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 transition-all duration-500 flex flex-col justify-between shadow-2xl min-w-[290px] sm:min-w-[340px] lg:min-w-0 snap-center shrink-0 lg:shrink"
            >
              {/* Image Container with Framing */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111518]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0F] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050607]/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5D0] border border-white/[0.08]">
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#00E5D0] uppercase tracking-wider">
                    {item.items?.[0]?.name || item.category}
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:bg-[#00E5D0] group-hover:text-[#050607] flex items-center justify-center text-[#F1EFE8] transition-all duration-300 min-w-[44px] min-h-[44px]"
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

