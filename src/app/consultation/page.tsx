"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Calendar, Check, ShieldCheck, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import confetti from "canvas-confetti";

function ConsultationForm() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "Clinical Consultation";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: getTomorrowDate(),
    note: "",
  });
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredDate: formData.preferredDate,
          note: formData.note,
          service: selectedService,
          hp_clinical_token: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to schedule consultation. Please try again.");
      }

      setBookingRef(data.reference || `OST-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#00E5D0", "#A78BFA", "#F1EFE8", "#050607"],
        });
      } catch {
        // Fallback
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please call our clinic.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-[#050607] text-[#F1EFE8] flex items-center justify-center p-3.5 sm:p-6 py-6 sm:py-8 overflow-x-hidden">
      {/* Full-bleed Photographic Golden Hour Mountain Landscape Backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <picture>
          <source srcSet="/images/final-cta-dawn.webp" type="image/webp" />
          <img
            src="/images/final-cta-dawn.jpg"
            alt="Scenic golden hour mountain landscape"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/40 to-[#050607]/80" />
      </div>

      {/* Glassmorphic Form Card with Dual-Tone Gradient Outline - Exactly matching reference */}
      <div className="relative z-10 w-full max-w-lg p-[1px] rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-[#00E5D0]/60 via-white/15 to-[#A78BFA]/50 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
        <div className="relative rounded-[23px] sm:rounded-[29px] bg-[#0A0D10]/92 backdrop-blur-2xl p-4 sm:p-6 overflow-hidden">
          {/* Ambient Inner Glows */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#00E5D0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#A78BFA]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button top-right (Returns to Home) */}
          <Link
            href="/"
            className="absolute right-3.5 top-3.5 sm:right-5 sm:top-5 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Close and return to home"
          >
            <X className="w-4 h-4" />
          </Link>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
              {/* Centered Heading */}
              <div className="text-center pb-2 pt-1 px-6 sm:px-8">
                <h1 className="font-display text-2xl sm:text-[28px] font-bold text-[#F1EFE8] tracking-tight">
                  Make your Booking
                </h1>
                <p className="text-xs sm:text-[13px] text-[#8E9B9D] mt-1 font-normal">
                  Schedule a consultation with our clinical team in Cochin
                </p>
              </div>

              {/* 2-Column Responsive Input Grid (Both Mobile & Desktop) */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5 sm:gap-y-3">
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] sm:text-[11px] font-medium text-[#F1EFE8]/90">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-xs placeholder:text-[10px] sm:placeholder:text-xs text-[#F1EFE8] placeholder:text-[#8E9B9D]/50 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-[10px] sm:text-[11px] font-medium text-[#F1EFE8]/90">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-xs placeholder:text-[10px] sm:placeholder:text-xs text-[#F1EFE8] placeholder:text-[#8E9B9D]/50 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-[10px] sm:text-[11px] font-medium text-[#F1EFE8]/90">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-xs placeholder:text-[10px] sm:placeholder:text-xs text-[#F1EFE8] placeholder:text-[#8E9B9D]/50 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-1">
                  <label className="block text-[10px] sm:text-[11px] font-medium text-[#F1EFE8]/90">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={getTodayDate()}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-full bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] px-3 sm:px-3.5 py-1.5 sm:py-2 pr-7 sm:pr-8 text-[10px] sm:text-[11px] text-[#A5AAAB] focus:text-[#F1EFE8] focus:outline-none transition-all shadow-inner scheme-dark [&::-webkit-datetime-edit]:text-[10px] sm:[&::-webkit-datetime-edit]:text-[11px] [&::-webkit-datetime-edit-fields-wrapper]:p-0 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-7 sm:[&::-webkit-calendar-picker-indicator]:w-8"
                    />
                    <Calendar className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8E9B9D] pointer-events-none" />
                  </div>
                </div>

                {/* Option to Add a Note (Full Width Curved Square Box) */}
                <div className="space-y-1 col-span-2">
                  <label className="block text-[10px] sm:text-[11px] font-medium text-[#F1EFE8]/90">
                    Add a Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any specific requirements or notes (optional)..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    style={{ borderRadius: "18px" }}
                    className="w-full appearance-none rounded-[18px] bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0E1316] border border-white/20 focus:border-[#00E5D0] p-2.5 sm:p-3 text-[10px] sm:text-xs placeholder:text-[10px] sm:placeholder:text-xs text-[#F1EFE8] placeholder:text-[#8E9B9D]/50 focus:outline-none transition-all shadow-inner resize-none h-[60px] sm:h-[68px]"
                  />
                </div>
              </div>

              {/* Honeypot Bot Trap (Invisible to humans) */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="hp_clinical_token_page">Clinical field</label>
                <input
                  type="text"
                  id="hp_clinical_token_page"
                  name="hp_clinical_token_page"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-sans">
                  {errorMessage}
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="pt-0.5">
                <label className="inline-flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group text-[11px] sm:text-xs text-[#A5AAAB]">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                      acceptedTerms
                        ? "bg-[#00E5D0] border-[#00E5D0]"
                        : "border-white/35 group-hover:border-white/60 bg-white/5"
                    }`}
                  >
                    {acceptedTerms && <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#050607] stroke-[3]" />}
                  </div>
                  <span>I accept all terms and conditions.</span>
                </label>
              </div>

              {/* Submit Action Pill Button (Book Now) */}
              <div className="pt-1 flex justify-start">
                <button
                  type="submit"
                  disabled={!acceptedTerms || isSubmitting}
                  className={`inline-flex items-center justify-center px-7 sm:px-8 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] ${
                    !acceptedTerms || isSubmitting
                      ? "opacity-50 cursor-not-allowed bg-white/[0.04] border-white/20 text-[#8E9B9D]"
                      : "border-[#00E5D0]/40 bg-[#00E5D0]/10 hover:bg-[#00E5D0] text-[#00E5D0] hover:text-[#050607] shadow-[0_0_20px_rgba(0,229,208,0.15)] hover:shadow-[0_0_25px_rgba(0,229,208,0.4)] cursor-pointer"
                  }`}
                >
                  <span>{isSubmitting ? "Booking..." : "Book Now"}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 sm:py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#00E5D0]/10 border border-[#00E5D0] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,229,208,0.3)]">
                <ShieldCheck className="w-8 h-8 text-[#00E5D0]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-[0.22em] text-[#00E5D0] font-mono">
                  Consultation Confirmed
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F1EFE8]">
                  We look forward to meeting you.
                </h2>
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

              <Link
                href="/"
                className="inline-block px-8 py-3 rounded-full border border-[#00E5D0] bg-[#00E5D0] text-[#050607] font-semibold text-xs tracking-wider uppercase hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_25px_rgba(0,229,208,0.35)] cursor-pointer"
              >
                Return to Website
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ConsultationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050607]" />}>
      <ConsultationForm />
    </Suspense>
  );
}
