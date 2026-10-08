"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ProstheticCategory } from "@/lib/data";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProstheticCategory | null;
  onBookConsultation: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  product,
  onBookConsultation,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0B1112] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 bg-[#11191A]/60">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E5D0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#00E5D0] font-bold">
                Clinical Technical Specification
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8E9B9D] hover:text-[#F4F7F8] hover:bg-white/5 rounded-full transition-colors"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8 flex-1">
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Product Visual */}
              <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#11191A]">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00E5D0]">
                    {product.name}
                  </span>
                  <p className="font-display text-lg font-bold text-[#F4F7F8]">{product.subType}</p>
                </div>
              </div>

              {/* Overview */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8E9B9D] font-semibold">
                    {product.name}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#F4F7F8] mt-1">
                    {product.subType}
                  </h3>
                  <p className="text-sm text-[#00E5D0] font-medium mt-1">{product.tagline}</p>
                </div>

                <p className="text-sm text-[#8E9B9D] leading-relaxed">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3 rounded-xl bg-[#11191A] border border-white/5"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#8E9B9D] block">
                        {spec.label}
                      </span>
                      <span className="text-sm font-bold text-[#F4F7F8] mt-0.5 block font-mono">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Clinical Features */}
            <div className="space-y-4 pt-4 border-t border-white/8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#8E9B9D] font-bold">
                Engineered Performance & Biocompatibility
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#11191A]/60 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00E5D0] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F4F7F8] leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-4 border-t border-white/8 bg-[#11191A]/60 flex items-center justify-between">
            <span className="text-xs text-[#8E9B9D]">Custom fabricated to individual prescription.</span>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00E5D0] text-[#05090A] text-xs font-semibold uppercase tracking-wider hover:bg-[#0AE3D6] transition-all shadow-[0_0_20px_rgba(0,229,208,0.25)]"
            >
              <span>Consult On This System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
