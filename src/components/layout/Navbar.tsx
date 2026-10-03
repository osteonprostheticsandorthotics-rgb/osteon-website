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
    { label: "Solutions", href: "#prosthetics", id: "prosthetics" },
    { label: "Technology", href: "#technology", id: "technology" },
    { label: "About", href: "#human-story", id: "human-story" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Resources", href: "#trust", id: "trust" },
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
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 relative py-1 group ${
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00E5D0] text-[#050607] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#00E5D0]/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,208,0.2)] min-h-[44px] group"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-[#00E5D0] text-[#050607] text-[11px] font-bold uppercase tracking-wider min-h-[44px] items-center"
            >
              Consult
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#050607] px-6 sm:px-10 py-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <Logo size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#F1EFE8] min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation List with Oversized Typography */}
            <div className="py-8 space-y-4">
              {/* SOLUTIONS */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between py-3 text-3xl sm:text-4xl font-display font-bold uppercase text-[#F1EFE8] border-b border-white/[0.06]"
                >
                  <span className="hover:text-[#00E5D0] transition-colors">SOLUTIONS</span>
                  {mobileSolutionsOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#00E5D0]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#A5AAAB]" />
                  )}
                </button>
                {mobileSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pl-4 py-4 space-y-3 border-l border-[#00E5D0]/40 ml-2 mt-2"
                  >
                    <a
                      href="#prosthetics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0]"
                    >
                      Prosthetics (Lower & Upper)
                    </a>
                    <a
                      href="#orthotics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0]"
                    >
                      Dynamic Orthotics & AFOs
                    </a>
                    <a
                      href="#scoliosis"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0]"
                    >
                      Scoliosis 3D Care
                    </a>
                    <a
                      href="#kids"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-mono uppercase tracking-wider text-[#A5AAAB] hover:text-[#00E5D0]"
                    >
                      Pediatric Solutions
                    </a>
                  </motion.div>
                )}
              </div>

              {/* TECHNOLOGY */}
              <a
                href="#technology"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-3xl sm:text-4xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.06] transition-colors"
              >
                <span>TECHNOLOGY</span>
              </a>

              {/* ABOUT */}
              <a
                href="#human-story"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-3xl sm:text-4xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.06] transition-colors"
              >
                <span>ABOUT</span>
              </a>

              {/* OUR JOURNEY */}
              <a
                href="#journey"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-3xl sm:text-4xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.06] transition-colors"
              >
                <span>OUR JOURNEY</span>
              </a>

              {/* RESOURCES */}
              <a
                href="#trust"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-3xl sm:text-4xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.06] transition-colors"
              >
                <span>RESOURCES</span>
              </a>

              {/* CONTACT */}
              <a
                href="#final-cta"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-3xl sm:text-4xl font-display font-bold uppercase text-[#F1EFE8] hover:text-[#00E5D0] border-b border-white/[0.06] transition-colors"
              >
                <span>CONTACT</span>
              </a>
            </div>

            {/* Bottom Full-Width CTA */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 rounded-full bg-[#00E5D0] text-[#050607] font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 min-h-[48px] shadow-[0_0_25px_rgba(0,229,208,0.25)]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs font-mono text-[#A5AAAB]">
                Direct Care Intake: <a href="tel:+919846116481" className="text-[#00E5D0] font-semibold">+91 984 611 6481</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

