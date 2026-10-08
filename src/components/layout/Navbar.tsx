"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  activeSection = "hero",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Solutions", href: "#solutions", id: "solutions" },
    { label: "Prosthetics", href: "#prosthetics", id: "prosthetics" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Specialized Care", href: "#specialized-care", id: "specialized-care" },
    { label: "Contact", href: "#final-cta", id: "final-cta" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "py-3 bg-[#050607]/85 backdrop-blur-md border-b border-white/[0.08]"
            : "py-5 sm:py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size={isScrolled ? "sm" : "md"} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-sans font-medium transition-all duration-300 relative py-1 group ${
                    isActive ? "text-[#00E5D0]" : "text-[#A5AAAB] hover:text-[#F1EFE8]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#00E5D0] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Minimal Pill CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/[0.03] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] border border-[#00E5D0]/40 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 min-h-[44px] group"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-[#00E5D0] text-[#050607] text-[11px] font-bold uppercase tracking-wider min-h-[44px] items-center"
            >
              Get in touch
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-[#F1EFE8] hover:bg-white/[0.08] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#050607] px-6 sm:px-10 py-7 flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <Logo size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#F1EFE8] hover:text-[#00E5D0] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation List with Oversized Numbered Editorial Typography */}
            <div className="py-6 space-y-3">
              {/* 01 HOME */}
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.05] transition-colors group"
              >
                <span>HOME</span>
                <span className="text-xs font-mono font-normal text-[#60686B] group-hover:text-[#00E5D0]">01</span>
              </a>

              {/* 02 ABOUT */}
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.05] transition-colors group"
              >
                <span>ABOUT OSTEON</span>
                <span className="text-xs font-mono font-normal text-[#60686B] group-hover:text-[#00E5D0]">02</span>
              </a>

              {/* 03 SOLUTIONS ACCORDION */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] border-b border-white/[0.05] group"
                >
                  <span className="group-hover:text-[#00E5D0] transition-colors">OUR SOLUTIONS</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-normal text-[#60686B]">03</span>
                    {mobileSolutionsOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#00E5D0]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#A5AAAB]" />
                    )}
                  </div>
                </button>
                {mobileSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 py-3 space-y-2.5 border-l border-[#00E5D0]/30 ml-2 mt-2"
                  >
                    <a
                      href="#prosthetics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0] py-1"
                    >
                      • Lower &amp; Upper Prosthetics
                    </a>
                    <a
                      href="#solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0] py-1"
                    >
                      • Custom Carbon Orthotics (AFO/KAFO)
                    </a>
                    <a
                      href="#specialized-care"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0] py-1"
                    >
                      • Scoliosis (Boston Brace) &amp; Pediatric Care
                    </a>
                  </motion.div>
                )}
              </div>

              {/* 04 PROSTHETICS */}
              <a
                href="#prosthetics"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.05] transition-colors group"
              >
                <span>PROSTHETICS</span>
                <span className="text-xs font-mono font-normal text-[#60686B] group-hover:text-[#00E5D0]">04</span>
              </a>

              {/* 05 THE PROCESS */}
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.05] transition-colors group"
              >
                <span>THE PROCESS</span>
                <span className="text-xs font-mono font-normal text-[#60686B] group-hover:text-[#00E5D0]">05</span>
              </a>

              {/* 06 SPECIALIZED CARE */}
              <a
                href="#specialized-care"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.05] transition-colors group"
              >
                <span>SPECIALIZED CARE</span>
                <span className="text-xs font-mono font-normal text-[#60686B] group-hover:text-[#00E5D0]">06</span>
              </a>

              {/* 07 CONTACT */}
              <a
                href="#final-cta"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between py-2.5 text-2xl sm:text-3xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.05] transition-colors group"
              >
                <span>CONTACT</span>
                <span className="text-xs font-mono font-normal text-[#60686B] group-hover:text-[#00E5D0]">07</span>
              </a>
            </div>

            {/* Bottom Full-Width CTA and Phone Link */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 rounded-full bg-[#00E5D0] text-[#050607] font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 min-h-[48px] shadow-[0_0_25px_rgba(0,229,208,0.25)] cursor-pointer"
              >
                <span>Book Clinical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs font-mono text-[#A5AAAB] pt-1">
                <span>Direct Helpline</span>
                <a
                  href="tel:+919846116481"
                  className="text-[#00E5D0] font-semibold hover:underline"
                >
                  +91 984 611 6481
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

