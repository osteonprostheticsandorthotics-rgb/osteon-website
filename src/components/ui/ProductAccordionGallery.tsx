"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Activity,
  Layers,
} from "lucide-react";

export interface ProductAccordionItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  tag?: string;
  description: string;
  highlights?: string[];
  options?: string[];
  specs?: { label: string; value: string }[];
  image: string;
}

interface ProductAccordionGalleryProps {
  items: ProductAccordionItem[];
  onSelectAction?: (itemTitle: string) => void;
  actionButtonLabel?: string;
}

export const ProductAccordionGallery: React.FC<ProductAccordionGalleryProps> = ({
  items,
  onSelectAction,
  actionButtonLabel = "Consult On This System",
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Hover expansion on fine pointer / desktop devices
  const handleCardHover = (index: number) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      setActiveIndex(index);
    }
  };

  // Click / tap expansion with auto-scroll into view on mobile
  const handleCardClick = (index: number) => {
    setActiveIndex(index);

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const cardEl = cardRefs.current[index];
      const container = containerRef.current;
      if (cardEl && container) {
        const cardRect = cardEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const targetScrollLeft =
          container.scrollLeft +
          (cardRect.left - containerRect.left) -
          (containerRect.width - cardRect.width) / 2;
        container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
      }
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Quick Navigation Chips Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E7A7D] mr-2 shrink-0 hidden sm:inline">
          Systems:
        </span>
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleCardClick(idx)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
              activeIndex === idx
                ? "bg-[#00E5D0]/15 border border-[#00E5D0] text-[#00E5D0] font-bold shadow-[0_0_10px_rgba(0,229,208,0.2)]"
                : "bg-white/[0.03] border border-white/[0.06] text-[#8E9B9D] hover:text-[#F1EFE8] hover:border-white/20"
            }`}
          >
            <span className="opacity-60 mr-1">{item.number}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* Main Flex Accordion Gallery Container */}
      <div
        ref={containerRef}
        className="relative w-full flex flex-row h-[480px] sm:h-[510px] md:h-[540px] gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible custom-scrollbar pb-2 sm:pb-0"
      >
        {items.map((item, idx) => {
          const isExpanded = activeIndex === idx;

          return (
            <motion.div
              key={item.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              layout
              onClick={() => handleCardClick(idx)}
              onMouseEnter={() => handleCardHover(idx)}
              onFocus={() => setActiveIndex(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={isExpanded}
              aria-label={`${item.title} - ${isExpanded ? "Expanded" : "Tap or hover to expand"}`}
              animate={{
                flex: isExpanded ? 4.5 : 1,
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative h-full rounded-2xl overflow-hidden border transition-colors duration-500 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#00E5D0] ${
                isExpanded
                  ? "border-[#00E5D0]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,208,0.12)] min-w-[280px] sm:min-w-[380px] md:min-w-[440px]"
                  : "border-white/[0.08] hover:border-white/[0.22] min-w-[50px] sm:min-w-[62px] md:min-w-[74px] bg-[#070A0C]"
              }`}
            >
              {/* 1. LAYERED BACKGROUND: High-Resolution Photographic Scrim */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                    isExpanded
                      ? "scale-105 filter brightness-[0.7] contrast-[1.08]"
                      : "scale-100 filter brightness-[0.35] contrast-[0.98] group-hover:brightness-[0.45]"
                  }`}
                />
                {/* Darkening Scrims */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/80 to-[#050607]/40 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/90 via-[#050607]/60 to-transparent pointer-events-none" />
              </div>

              {/* 2. RESTRAINED AMBIENT RADIAL LIGHTING */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-700"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  background:
                    "radial-gradient(ellipse at 18% 18%, rgba(0, 229, 208, 0.16) 0%, rgba(5, 6, 7, 0) 65%), radial-gradient(circle at 85% 85%, rgba(0, 229, 208, 0.08) 0%, rgba(5, 6, 7, 0) 50%)",
                }}
              />

              {/* 3. COLLAPSED STATE DECORATIVE MARKERS */}
              {/* Top Number Pill */}
              <motion.div
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                className="absolute top-4 inset-x-0 flex flex-col items-center justify-center gap-1.5 z-20 pointer-events-none"
              >
                <span className="text-[11px] font-mono font-bold text-[#00E5D0] tracking-wider">
                  {item.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#00E5D0] group-hover:shadow-[0_0_8px_#00E5D0] transition-all duration-300" />
              </motion.div>

              {/* Bottom Collapsed Icon */}
              <motion.div
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 inset-x-0 flex flex-col items-center justify-center gap-1 z-20 pointer-events-none"
              >
                <div className="w-6 h-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center text-[#8E9B9D] group-hover:text-[#00E5D0] group-hover:border-[#00E5D0]/40 transition-all">
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.div>

              {/* 4. ANIMATED TITLE: Physical smooth rotation from 90° Vertical to 0° Horizontal */}
              <motion.div
                animate={{
                  rotate: isExpanded ? 0 : -90,
                  top: isExpanded ? 20 : "50%",
                  left: isExpanded ? 20 : "50%",
                  x: isExpanded ? "0%" : "-50%",
                  y: isExpanded ? "0%" : "-50%",
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transformOrigin: isExpanded ? "0% 50%" : "center center",
                }}
                className="absolute z-20 pointer-events-none whitespace-nowrap"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
                  {isExpanded && item.tag && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#00E5D0]/10 border border-[#00E5D0]/20 text-[9px] font-mono font-bold text-[#00E5D0] tracking-widest uppercase w-fit">
                      <Sparkles className="w-2.5 h-2.5" />
                      {`${item.number} • ${item.tag}`}
                    </span>
                  )}

                  <h4
                    className={`font-display font-extrabold uppercase tracking-tight transition-all duration-500 ${
                      isExpanded
                        ? "text-lg sm:text-xl md:text-2xl text-[#F1EFE8] leading-tight"
                        : "text-xs font-mono tracking-[0.24em] text-[#CFD7D9] group-hover:text-[#00E5D0]"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </motion.div>

              {/* 5. EXPANDED CONTENT: Staggered reveal of minimal data */}
              <div className="relative z-20 h-full flex flex-col justify-between p-4 sm:p-6 md:p-7 pt-16 sm:pt-20 md:pt-22 pointer-events-none">
                {/* Middle Content Section */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    y: isExpanded ? 0 : 20,
                    pointerEvents: isExpanded ? "auto" : "none",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isExpanded ? 0.18 : 0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="space-y-3 sm:space-y-4 max-w-xl"
                >
                  {/* Indication / Subtitle */}
                  {item.subtitle && (
                    <motion.div
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 12 }}
                      transition={{ duration: 0.45, delay: isExpanded ? 0.22 : 0 }}
                      className="flex items-start gap-2"
                    >
                      <Activity className="w-3.5 h-3.5 text-[#00E5D0] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#00E5D0] font-mono leading-snug">
                        {item.subtitle}
                      </p>
                    </motion.div>
                  )}

                  {/* Concise Description */}
                  <motion.p
                    initial={false}
                    animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 12 }}
                    transition={{ duration: 0.45, delay: isExpanded ? 0.28 : 0 }}
                    className="text-xs sm:text-sm text-[#C4C9CA] leading-relaxed font-normal line-clamp-3 sm:line-clamp-none"
                  >
                    {item.description}
                  </motion.p>

                  {/* Key Highlights Chips */}
                  {item.highlights && item.highlights.length > 0 && (
                    <motion.div
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 12 }}
                      transition={{ duration: 0.45, delay: isExpanded ? 0.34 : 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1"
                    >
                      {item.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.035] border border-white/[0.07] backdrop-blur-md"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#00E5D0] shrink-0" />
                          <span className="text-[11px] font-medium text-[#DDE3E4] leading-tight">
                            {h}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Options Pills */}
                  {item.options && item.options.length > 0 && (
                    <motion.div
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 12 }}
                      transition={{ duration: 0.45, delay: isExpanded ? 0.4 : 0 }}
                      className="space-y-1.5 pt-1"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#7E8B8D]">
                        <Layers className="w-3 h-3 text-[#00E5D0]" />
                        <span>Formulation Options:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.options.map((opt, oIdx) => (
                          <span
                            key={oIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[#A5AAAB] border border-white/[0.05]"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Specs Data */}
                  {item.specs && item.specs.length > 0 && (
                    <motion.div
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 12 }}
                      transition={{ duration: 0.45, delay: isExpanded ? 0.44 : 0 }}
                      className="flex flex-wrap items-center gap-3 pt-1 border-t border-white/[0.06] text-[11px]"
                    >
                      {item.specs.map((spec, spIdx) => (
                        <div key={spIdx} className="flex items-center gap-1.5">
                          <span className="font-mono text-[9px] uppercase text-[#738284]">
                            {spec.label}:
                          </span>
                          <span className="font-bold text-[#F1EFE8]">{spec.value}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Bottom Action Bar */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    y: isExpanded ? 0 : 16,
                    pointerEvents: isExpanded ? "auto" : "none",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: isExpanded ? 0.48 : 0,
                  }}
                  className="pt-3 flex items-center justify-between gap-3 border-t border-white/[0.06]"
                >
                  <span className="text-[10px] font-mono text-[#8E9B9D] hidden sm:inline">
                    Custom fitted to anatomical capture
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectAction?.(item.title);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5D0] hover:bg-[#00E5D0]/90 text-[#050607] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_18px_rgba(0,229,208,0.25)] hover:shadow-[0_0_24px_rgba(0,229,208,0.4)] cursor-pointer ml-auto"
                  >
                    <span>{actionButtonLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
