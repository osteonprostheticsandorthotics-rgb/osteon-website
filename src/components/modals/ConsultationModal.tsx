"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Calendar, Clock, MapPin, User, Mail, Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = "Prosthetics",
}) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedGoal, setSelectedGoal] = useState("High-Activity Mobility & Upgrade");
  const [consultationType, setConsultationType] = useState("In-Clinic Precision Evaluation");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    preferredDate: "2026-10-15",
  });
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep(1);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const services = [
    { id: "prosthetics-lower", label: "Lower Extremity Prosthetics", desc: "Custom carbon fibre sockets, pylons, knees & prosthetic feet" },
    { id: "prosthetics-upper", label: "Upper Extremity Prosthetics", desc: "Myoelectric electrode sensors & bionic hands" },
    { id: "orthotics-lower", label: "Carbon Fibre & Dynamic Orthotics", desc: "AFOs, KAFOs, dynamic braces & spinal stabilization" },
    { id: "scoliosis-care", label: "Boston Brace Scoliosis Care", desc: "Custom-made spinal orthosis for curve control & stabilization" },
    { id: "pediatric-care", label: "Pediatric Orthotics & Care", desc: "Cranial orthoses, Pavlik harness, Denis Browne & night splints" },
    { id: "silicone-restoration", label: "Silicone Prosthetics", desc: "Lifelike custom facial and extremity restorations" },
  ];

  const goals = [
    "First-Time Device Evaluation",
    "Fit & Alignment Fine-Tuning",
    "Socket Comfort & Pressure Adjustment",
    "Pediatric Growth Alignment Check",
    "Clinical Consultation & Device Review",
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete booking
      const ref = `OST-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setStep(4);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00E5D0", "#0AE3D6", "#F4F7F8", "#11191A"],
        });
      } catch (e) {
        // Fallback if confetti is unavailable
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0B1112] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 bg-[#11191A]/60">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E5D0] animate-pulse" />
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-[#F4F7F8] uppercase">
                  Schedule Clinical Consultation
                </h3>
                <p className="text-xs text-[#8E9B9D]">Step {step} of 3 • Personalized Care Planning</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8E9B9D] hover:text-[#F4F7F8] hover:bg-white/5 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Progress Line */}
          {step < 4 && (
            <div className="w-full bg-white/5 h-1">
              <div
                className="bg-gradient-to-r from-[#00E5D0] to-[#0AE3D6] h-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-display text-2xl font-bold text-[#F4F7F8]">
                    What area of care are you seeking?
                  </h4>
                  <p className="text-sm text-[#8E9B9D] mt-1">
                    Select the primary service to connect you with our specialized clinical prosthetist or orthotist.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {services.map((srv) => {
                    const isSelected = selectedService === srv.label;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedService(srv.label)}
                        className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                          isSelected
                            ? "bg-[#00E5D0]/10 border-[#00E5D0] shadow-[0_0_20px_rgba(0,229,208,0.15)]"
                            : "bg-[#11191A]/80 border-white/5 hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold ${isSelected ? "text-[#00E5D0]" : "text-[#F4F7F8]"}`}>
                            {srv.label}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-[#00E5D0]" />}
                        </div>
                        <p className="text-xs text-[#8E9B9D] mt-1.5 leading-relaxed">{srv.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-display text-2xl font-bold text-[#F4F7F8]">
                    What is your primary clinical goal?
                  </h4>
                  <p className="text-sm text-[#8E9B9D] mt-1">
                    Understanding your aspirations helps us prepare customized clinical guidance before you arrive.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {goals.map((goal) => {
                    const isSelected = selectedGoal === goal;
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => setSelectedGoal(goal)}
                        className={`w-full p-4 rounded-xl text-left border flex items-center justify-between transition-all duration-300 ${
                          isSelected
                            ? "bg-[#00E5D0]/10 border-[#00E5D0] text-[#00E5D0]"
                            : "bg-[#11191A]/80 border-white/5 text-[#F4F7F8] hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        <span className="text-sm font-medium">{goal}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#00E5D0]" />}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <label className="text-xs uppercase tracking-wider text-[#8E9B9D] font-semibold block mb-2">
                    Consultation Format
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["In-Clinic Consultation", "Direct Phone / Virtual Inquiry"].map((format) => (
                      <button
                        key={format}
                        type="button"
                        onClick={() => setConsultationType(format)}
                        className={`p-3 rounded-lg border text-xs font-medium text-center transition-all ${
                          consultationType === format
                            ? "border-[#00E5D0] bg-[#00E5D0]/10 text-[#00E5D0]"
                            : "border-white/10 bg-[#11191A] text-[#8E9B9D] hover:text-[#F4F7F8]"
                        }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-5"
              >
                <div>
                  <h4 className="font-display text-2xl font-bold text-[#F4F7F8]">
                    Your Contact & Booking Details
                  </h4>
                  <p className="text-sm text-[#8E9B9D] mt-1">
                    We maintain strict confidentiality for all patient consultations.
                  </p>
                </div>

                <div className="space-y-3.5 pt-1">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E9B9D] font-semibold mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B9D]" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#11191A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-[#F4F7F8] placeholder-[#536062] focus:outline-none focus:border-[#00E5D0] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8E9B9D] font-semibold mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B9D]" />
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#11191A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-[#F4F7F8] placeholder-[#536062] focus:outline-none focus:border-[#00E5D0] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8E9B9D] font-semibold mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B9D]" />
                        <input
                          type="tel"
                          placeholder="+91 984 611 6481"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#11191A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-[#F4F7F8] placeholder-[#536062] focus:outline-none focus:border-[#00E5D0] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E9B9D] font-semibold mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B9D]" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#11191A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-[#F4F7F8] focus:outline-none focus:border-[#00E5D0] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#00E5D0]/10 border border-[#00E5D0] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,229,208,0.25)]">
                  <ShieldCheck className="w-8 h-8 text-[#00E5D0]" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#00E5D0] font-semibold">
                    Consultation Requested
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F7F8] mt-1">
                    We look forward to meeting you.
                  </h4>
                  <p className="text-sm text-[#8E9B9D] max-w-md mx-auto mt-2 leading-relaxed">
                    Our lead clinical coordinator will review your profile and reach out within 4 business hours to confirm your appointment time and intake scan details.
                  </p>
                </div>

                <div className="bg-[#11191A] border border-white/10 rounded-2xl p-5 text-left max-w-md mx-auto space-y-3">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                    <span className="text-[#8E9B9D]">Booking Reference:</span>
                    <span className="font-mono text-[#00E5D0] font-bold">{bookingRef || "OST-2026-8941"}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8E9B9D]">Service:</span>
                    <span className="text-[#F4F7F8] font-medium">{selectedService}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8E9B9D]">Clinical Goal:</span>
                    <span className="text-[#F4F7F8] font-medium">{selectedGoal}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8E9B9D]">Format:</span>
                    <span className="text-[#F4F7F8] font-medium">{consultationType}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-full bg-[#00E5D0] text-[#05090A] font-semibold text-xs tracking-wider uppercase hover:bg-[#0AE3D6] transition-all duration-300 shadow-[0_0_25px_rgba(0,229,208,0.3)]"
                >
                  Return to Website
                </button>
              </motion.div>
            )}
          </div>

          {/* Footer Navigation */}
          {step < 4 && (
            <div className="px-6 py-4 border-t border-white/8 bg-[#11191A]/60 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-[#8E9B9D] hover:text-[#F4F7F8] transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00E5D0] text-[#05090A] text-xs font-semibold uppercase tracking-wider hover:bg-[#0AE3D6] transition-all duration-300 shadow-[0_0_20px_rgba(0,229,208,0.25)]"
              >
                <span>{step === 3 ? "Confirm Consultation" : "Continue"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
