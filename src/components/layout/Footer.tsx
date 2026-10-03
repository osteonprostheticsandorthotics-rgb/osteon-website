"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050607] border-t border-white/[0.08] pt-16 md:pt-24 pb-12 overflow-hidden z-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Header Strip */}
        <div className="pb-12 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-base sm:text-lg text-[#F1EFE8] font-display font-bold uppercase tracking-tight">
              DIGNITY, CONFIDENCE, AND <span className="text-[#00E5D0]">FREEDOM OF MOVEMENT.</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00E5D0] text-[#050607] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#00E5D0]/90 transition-all shadow-[0_0_20px_rgba(0,229,208,0.2)] min-h-[44px]"
            >
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>

        {/* Minimal Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-white/[0.08] text-xs font-mono">
          {/* Column 1: Solutions */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#00E5D0] font-bold block">
              Solutions
            </span>
            <ul className="space-y-2 text-[#A5AAAB]">
              <li><a href="#prosthetics" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Lower Extremity (TT & TF)</a></li>
              <li><a href="#prosthetics" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Upper Extremity (TR & TH)</a></li>
              <li><a href="#prosthetics" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Silicone Prosthetics</a></li>
              <li><a href="#orthotics" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Carbon Fibre & Knee Braces</a></li>
              <li><a href="#scoliosis" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Boston Brace (Scoliosis)</a></li>
              <li><a href="#kids" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Osteon for Kids</a></li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#00E5D0] font-bold block">
              Technology
            </span>
            <ul className="space-y-2 text-[#A5AAAB]">
              <li><a href="#technology" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Carbon Fibre Matrix</a></li>
              <li><a href="#technology" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Myoelectric Sensors</a></li>
              <li><a href="#technology" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Custom-Molded Sockets</a></li>
              <li><a href="#technology" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Dynamic Suspension</a></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#00E5D0] font-bold block">
              About
            </span>
            <ul className="space-y-2 text-[#A5AAAB]">
              <li><a href="#human-story" className="hover:text-[#F1EFE8] transition-colors block py-0.5">About Us & Vision</a></li>
              <li><a href="#human-story" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Our Mission</a></li>
              <li><a href="#trust" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Why Patients Trust Us</a></li>
              <li><a href="#stories" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Lifelong Support</a></li>
            </ul>
          </div>

          {/* Column 4: Patient Resources */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#00E5D0] font-bold block">
              Patient Care
            </span>
            <ul className="space-y-2 text-[#A5AAAB]">
              <li><a href="#journey" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Care Journey Process</a></li>
              <li><a href="#trust" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Value-Based Care</a></li>
              <li><a href="#final-cta" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Schedule Consultation</a></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <span className="text-[11px] uppercase tracking-widest text-[#00E5D0] font-bold block">
              Contact & Clinic
            </span>
            <ul className="space-y-2 text-[#A5AAAB]">
              <li><a href="tel:+919846116481" className="hover:text-[#00E5D0] transition-colors block py-0.5">+91 984 611 6481</a></li>
              <li><a href="tel:+919846116411" className="hover:text-[#00E5D0] transition-colors block py-0.5">+91 984 611 6411</a></li>
              <li><a href="mailto:support@osteonprosthetics.com" className="hover:text-[#00E5D0] transition-colors block py-0.5">support@osteonprosthetics.com</a></li>
              <li className="text-[#60686B] pt-1 text-[11px] leading-relaxed">
                St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin - 682025
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Legal, Socials, Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#60686B] font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© 2026 Osteon. Prosthetics and Orthotics. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="http://www.osteonprosthetics.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A5AAAB] transition-colors">www.osteonprosthetics.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#A5AAAB] hover:text-[#00E5D0] hover:border-[#00E5D0]/40 transition-all flex items-center justify-center min-h-[44px] min-w-[44px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

