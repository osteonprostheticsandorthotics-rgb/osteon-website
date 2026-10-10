"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Check, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "2026-10-15",
    note: "",
  });
  const [bookingRef, setBookingRef] = useState("");

  const handleModalClose = () => {
    setIsSubmitted(false);
    onClose();
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `OST-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#00E5D0", "#A78BFA", "#F1EFE8", "#050607"],
      });
    } catch {
      // Fallback if confetti is unavailable
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop with Photographic Scenery & Ambient Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModalClose}
          className="fixed inset-0 z-0 bg-[#050607]/80 backdrop-blur-xl"
        >
          {/* Subtle blurred scenic layer behind the card */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <img
              src="/images/final-cta-dawn.jpg"
              alt="Mountain golden hour backdrop"
              className="w-full h-full object-cover filter blur-md scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/80 pointer-events-none" />
        </motion.div>

        {/* Glassmorphic Form Card with Dual-Tone Gradient Outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl my-auto p-[1px] rounded-[28px] sm:rounded-[34px] bg-gradient-to-br from-[#00E5D0]/60 via-white/15 to-[#A78BFA]/50 shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          <div className="relative rounded-[27px] sm:rounded-[33px] bg-[#0A0D10]/85 backdrop-blur-2xl p-6 sm:p-9 md:p-10 overflow-hidden">
            {/* Ambient Inner Lights */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#00E5D0]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#A78BFA]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Centered Heading */}
                <div className="text-center space-y-1 pb-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F1EFE8] tracking-tight">
                    Make your Booking
                  </h3>
                  <p className="text-xs text-[#8E9B9D] font-normal">
                    Schedule a consultation with our clinical team in Cochin
                  </p>
                </div>

                {/* Focused Input Grid (Only Name, Phone, Email, Preferred Date, and Note) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#F1EFE8]">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-4.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#F1EFE8] placeholder:text-[#8E9B9D]/60 focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#F1EFE8]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-4.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#F1EFE8] placeholder:text-[#8E9B9D]/60 focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#F1EFE8]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-4.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#F1EFE8] placeholder:text-[#8E9B9D]/60 focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#F1EFE8]">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-4.5 sm:px-5 py-2.5 sm:py-3 pr-10 text-xs sm:text-sm text-[#F1EFE8] focus:outline-none transition-all shadow-inner scheme-dark"
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                    </div>
                  </div>

                  {/* Option to Add a Note (Full Width) */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-medium text-[#F1EFE8]">
                      Add a Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share any specific requirements or notes (optional)..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full rounded-2xl bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-4.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#F1EFE8] placeholder:text-[#8E9B9D]/60 focus:outline-none transition-all shadow-inner resize-none"
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="pt-1">
                  <label className="inline-flex items-center gap-2.5 cursor-pointer select-none group text-xs text-[#A5AAAB]">
                    <input
                      type="checkbox"
                      required
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                        acceptedTerms
                          ? "bg-[#00E5D0] border-[#00E5D0]"
                          : "border-white/30 group-hover:border-white/60 bg-white/5"
                      }`}
                    >
                      {acceptedTerms && <Check className="w-3 h-3 text-[#050607] stroke-[3]" />}
                    </div>
                    <span>I accept all terms and conditions.</span>
                  </label>
                </div>

                {/* Submit Action Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-2.5 sm:py-3 rounded-full border border-white/30 hover:border-[#00E5D0] bg-white/[0.04] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,229,208,0.15)] hover:shadow-[0_0_25px_rgba(0,229,208,0.4)] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Book Now</span>
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 sm:py-6 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#00E5D0]/10 border border-[#00E5D0] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,229,208,0.3)]">
                  <ShieldCheck className="w-8 h-8 text-[#00E5D0]" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#00E5D0] font-mono">
                    Consultation Confirmed
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#F1EFE8]">
                    We look forward to meeting you.
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8E9B9D] max-w-md mx-auto leading-relaxed">
                    Our clinical team will review your details and reach out within 4 business hours to finalize your appointment schedule.
                  </p>
                </div>

                {/* Summary Pill Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-left max-w-md mx-auto space-y-2.5 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-[#8E9B9D]">Booking Reference:</span>
                    <span className="font-mono text-[#00E5D0] font-bold">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8E9B9D]">Patient Name:</span>
                    <span className="text-[#F1EFE8] font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8E9B9D]">Phone Number:</span>
                    <span className="text-[#F1EFE8] font-medium">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8E9B9D]">Email:</span>
                    <span className="text-[#F1EFE8] font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8E9B9D]">Preferred Date:</span>
                    <span className="text-[#F1EFE8] font-medium">{formData.preferredDate}</span>
                  </div>
                  {formData.note && (
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-[#8E9B9D] block mb-1">Note:</span>
                      <p className="text-[#F1EFE8] italic bg-white/[0.02] p-2 rounded-lg border border-white/5">
                        {formData.note}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-8 py-3 rounded-full border border-[#00E5D0] bg-[#00E5D0] text-[#050607] font-semibold text-xs tracking-wider uppercase hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_25px_rgba(0,229,208,0.35)] cursor-pointer"
                >
                  Return to Website
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
