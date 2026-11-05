"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  activeSection = "hero",
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Robust scroll lock when mobile menu is open (handles touch, Lenis, html & body)
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      lenis?.start();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      lenis?.start();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Team", href: "#our-team", id: "our-team" },
    { label: "Solutions", href: "#solutions", id: "solutions" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Specialized Care", href: "#specialized-care", id: "specialized-care" },
    { label: "Contact", href: "#final-cta", id: "final-cta" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { href: string; id: string }
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Immediately restore scroll before calculating position
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    const lenis = (window as unknown as { __lenis?: { start: () => void; scrollTo: (target: HTMLElement | string, options?: { offset?: number; duration?: number }) => void } }).__lenis;
    lenis?.start();

    onNavigate?.(link.id);

    // Give react state update and layout a microtask tick so scroll unlock is applied
    setTimeout(() => {
      const targetEl = document.getElementById(link.id);
      if (targetEl) {
        // Scroll exactly to the top of the section (accounting for the 76px sticky header)
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetEl, { offset: 0, duration: 1.1 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (typeof window !== "undefined" && window.history?.pushState) {
        window.history.pushState(null, "", link.href);
      }
    }, 40);
  };

  const isHero = activeSection === "hero";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 h-[76px] transition-all duration-500 ease-out ${
          isHero
            ? "bg-transparent backdrop-blur-none border-b border-transparent"
            : "bg-[#050607]/85 backdrop-blur-xl border-b border-white/[0.08]"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto h-full px-6 sm:px-10 lg:px-12 relative flex items-center justify-between">
          {/* LEFT: Brand Logo */}
          <div className="flex items-center justify-start min-w-0 z-10">
            <Logo size="sm" />
          </div>

          {/* CENTER: Navigation Pill (Horizontally centered relative to the viewport) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center pointer-events-auto">
            <nav
              aria-label="Main Navigation"
              className="flex items-center p-1.5 rounded-full bg-[#080B0E]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.08)] relative overflow-hidden"
            >
              {/* Subtle Ambient Glass Top Sheen */}
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-full" />

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`relative px-3.5 xl:px-4 py-2 rounded-full text-xs font-sans transition-colors duration-200 select-none whitespace-nowrap min-h-[38px] flex items-center justify-center ${
                      isActive
                        ? "text-[#080B0E] font-bold"
                        : "text-[#9EACB0] hover:text-[#F1EFE8] font-medium hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* The Tactile 3D Glass Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-tactile-pill"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                        className="absolute inset-0 rounded-full z-0 overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(180deg, #FFFFFF 0%, #EEEEF1 50%, #D2D5DC 100%)",
                          boxShadow:
                            "0 4px 14px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.18)",
                          border: "1px solid rgba(255, 255, 255, 0.75)",
                        }}
                      >
                        {/* Subtle chromatic / prism refraction specular highlight at top curve */}
                        <div className="absolute inset-x-3 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-rose-400/25 via-cyan-300/40 to-teal-400/25 blur-[0.6px]" />
                        {/* Crisp white top edge rim */}
                        <div className="absolute inset-x-2 top-[1px] h-[1px] rounded-full bg-white/95" />
                      </motion.div>
                    )}

                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: CTA Button & Mobile Trigger */}
          <div className="flex items-center justify-end gap-3 min-w-0 z-10">
            <Link
              href="/consultation"
              className="hidden lg:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/[0.04] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] border border-[#00E5D0]/40 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 min-h-[44px] group shadow-[0_0_15px_rgba(0,229,208,0.1)] hover:shadow-[0_0_25px_rgba(0,229,208,0.35)] cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Header Buttons */}
            <Link
              href="/consultation"
              className="hidden sm:inline-flex lg:hidden px-5 py-2.5 rounded-full border border-[#00E5D0]/40 hover:border-[#00E5D0] bg-white/[0.03] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] text-[11px] font-bold uppercase tracking-wider min-h-[44px] items-center transition-all cursor-pointer"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 lg:hidden rounded-xl bg-white/[0.05] border border-white/[0.08] text-[#F1EFE8] hover:bg-white/[0.08] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#050607] flex flex-col justify-between h-[100dvh] overflow-hidden select-none"
            style={{
              paddingBottom: "max(16px, env(safe-area-inset-bottom))",
            }}
          >
            {/* Top Bar - Identical alignment and height as main Header for seamless sync */}
            <div className="h-[76px] px-6 sm:px-10 lg:px-12 flex items-center justify-between shrink-0">
              <Logo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-[#F1EFE8] hover:text-[#00E5D0] transition-colors cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="Close menu"
              >
                <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
              </button>
            </div>

            {/* Navigation List - Fits Single Viewport with Zero Scrolling */}
            <div className="flex-1 flex flex-col justify-evenly py-2 px-6 sm:px-10 lg:px-12 min-h-0">
              <nav className="flex flex-col justify-evenly h-full divide-y divide-white/[0.12] border-y border-white/[0.12]">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="group flex-1 flex items-center justify-between transition-colors px-1"
                    >
                      <span
                        className={`font-display font-bold tracking-tight transition-colors text-[clamp(22px,5.8vh,34px)] leading-none ${
                          isActive
                            ? "text-[#00E5D0]"
                            : "text-[#F1EFE8] group-hover:text-[#00E5D0]"
                        }`}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5] transition-transform duration-300 ${
                          isActive
                            ? "text-[#00E5D0] translate-x-0.5 -translate-y-0.5"
                            : "text-[#F1EFE8] group-hover:text-[#00E5D0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Pill CTA */}
            <div className="shrink-0 pt-2 pb-1 px-6 sm:px-10 lg:px-12">
              <Link
                href="/consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 sm:py-3.5 rounded-full border border-[#00E5D0] text-[#00E5D0] hover:bg-[#00E5D0] hover:text-[#050607] font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 min-h-[44px] shadow-[0_0_20px_rgba(0,229,208,0.12)] cursor-pointer active:scale-[0.98] transition-all duration-300 font-semibold"
              >
                <span>Book Clinical Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
