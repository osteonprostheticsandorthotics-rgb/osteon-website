"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenSolution?: (type: "prosthetics" | "orthotics") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenSolution }) => {

  return (
    <footer className="relative bg-[#050607] border-t border-white/[0.08] pt-14 sm:pt-18 md:pt-20 pb-12 overflow-hidden z-20">
      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,229,208,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12 relative z-10 space-y-12 lg:space-y-16">
        {/* Top Feature: Clinic Banner & Direct Intake */}
        <div className="p-5 sm:p-8 lg:p-12 rounded-3xl bg-[#0A0D0F] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 relative overflow-hidden shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#F1EFE8] leading-tight">
              Ready to begin your <span className="text-[#00E5D0]">mobility journey?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
              Schedule a comprehensive clinical assessment with our certified prosthetists and orthotists in Cochin.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center w-full sm:w-auto shrink-0">
            <Link
              href="/consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full border border-[#00E5D0]/40 hover:border-[#00E5D0] bg-white/[0.03] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-[0.14em] transition-all duration-300 min-h-[46px] sm:min-h-[48px] group cursor-pointer active:scale-[0.98] max-w-full"
            >
              <span className="truncate sm:whitespace-nowrap">Book Clinical Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* MOBILE DIRECTORY HIERARCHY (< lg) */}
        <div className="block lg:hidden space-y-6 pt-4 border-t border-white/[0.08]">
          {/* Brand & Clinic Info */}
          <div className="space-y-3.5">
            <Logo size="md" />
            <p className="text-xs text-[#A5AAAB] leading-relaxed font-normal max-w-sm">
              OSTEON delivers precision prosthetics, custom carbon-fibre orthotics, 3D scoliosis solutions, and specialized pediatric care engineered for dignity and lasting movement.
            </p>

            <div className="space-y-2 pt-1 text-xs font-mono text-[#A5AAAB]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00E5D0] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin – 682025
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00E5D0] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00E5D0] shrink-0" />
                <a href="mailto:osteonprostheticsandorthotics@gmail.com" className="text-[#00E5D0] break-all">
                  osteonprostheticsandorthotics@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Direct Helplines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="tel:+919846116481"
              className="px-3.5 py-2.5 rounded-xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 flex items-center justify-between transition-colors"
            >
              <div className="space-y-0.5">
                <span className="text-[9.5px] text-[#A5AAAB] block uppercase font-mono tracking-wider">Primary Helpline</span>
                <span className="text-xs font-bold text-[#F1EFE8] font-mono tracking-wide">+91 984 611 6481</span>
              </div>
              <Phone className="w-3.5 h-3.5 text-[#00E5D0]" />
            </a>

            <a
              href="tel:+919846116411"
              className="px-3.5 py-2.5 rounded-xl bg-[#0A0D0F] border border-white/[0.08] hover:border-[#00E5D0]/40 flex items-center justify-between transition-colors"
            >
              <div className="space-y-0.5">
                <span className="text-[9.5px] text-[#A5AAAB] block uppercase font-mono tracking-wider">Secondary Line</span>
                <span className="text-xs font-bold text-[#F1EFE8] font-mono tracking-wide">+91 984 611 6411</span>
              </div>
              <Phone className="w-3.5 h-3.5 text-[#00E5D0]" />
            </a>
          </div>
        </div>

        {/* 3-Column Architectural Editorial Navigation Grid (>= lg) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 pt-6 border-t border-white/[0.08]">
          {/* Column 1: Brand & Clinical Ethos (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal max-w-md">
              OSTEON delivers precision prosthetics, custom carbon-fibre orthotics, 3D scoliosis solutions, and specialized pediatric care engineered for dignity, independence, and lasting movement.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-[#A5AAAB]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00E5D0] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin – 682025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00E5D0] shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 6:30 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00E5D0] shrink-0" />
                <a href="mailto:osteonprostheticsandorthotics@gmail.com" className="hover:text-[#00E5D0] transition-colors break-all">
                  osteonprostheticsandorthotics@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Patient Care (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#00E5D0] font-bold block">
              Patient Care
            </span>
            <ul className="space-y-2.5 text-[#A5AAAB]">
              <li><a href="#specialized-care" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Osteon for Kids</a></li>
              <li><a href="#specialized-care" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Cranial Remolding Helmets</a></li>
              <li><a href="#specialized-care" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Pavlik Harness (DDH)</a></li>
              <li><a href="#about" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Clinical Care Philosophy</a></li>
              <li><a href="#process" className="hover:text-[#F1EFE8] transition-colors block py-0.5">Lifelong Clinical Care</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Clinical Lines (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#00E5D0] font-bold block">
              Helpline
            </span>
            <div className="space-y-3">
              <a
                href="tel:+919846116481"
                className="block p-3 rounded-xl bg-[#0A0D0F] border border-white/[0.06] hover:border-[#00E5D0]/40 transition-colors group"
              >
                <span className="text-[10px] text-[#A5AAAB] block uppercase">Primary Care</span>
                <span className="text-xs font-bold text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  +91 984 611 6481
                </span>
              </a>

              <a
                href="tel:+919846116411"
                className="block p-3 rounded-xl bg-[#0A0D0F] border border-white/[0.06] hover:border-[#00E5D0]/40 transition-colors group"
              >
                <span className="text-[10px] text-[#A5AAAB] block uppercase">Secondary Line</span>
                <span className="text-xs font-bold text-[#F1EFE8] group-hover:text-[#00E5D0] transition-colors">
                  +91 984 611 6411
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Centered Developer Watermark */}
        <div className="pt-8 border-t border-white/[0.06] flex items-center justify-center text-center">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#A5AAAB]">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/paul-antony-4498ab3a5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E5D0] font-semibold hover:underline transition-colors hover:text-[#00E5D0]/80"
            >
              paulantony
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};


