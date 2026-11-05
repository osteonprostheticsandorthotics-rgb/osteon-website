"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/01_Hero";
import { OurTeamSection } from "@/components/sections/02b_OurTeam";
import { HumanStorySection } from "@/components/sections/02_HumanStory";
import { SolutionsOverviewSection } from "@/components/sections/02_SolutionsOverview";
import { PatientJourneySection } from "@/components/sections/08_PatientJourney";
import { SpecializedCareSection } from "@/components/sections/05_SpecializedCare";
import { FinalCTASection } from "@/components/sections/11_FinalCTA";

import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { SolutionsModal, SolutionType } from "@/components/modals/SolutionsModal";

const SECTION_IDS = [
  "hero",
  "about",
  "our-team",
  "solutions",
  "process",
  "specialized-care",
  "final-cta",
];

export default function Home() {
  const router = useRouter();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Prosthetics");
  const [solutionsModalOpen, setSolutionsModalOpen] = useState(false);
  const [activeSolutionType, setActiveSolutionType] = useState<SolutionType>("prosthetics");
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [activeSectionId, setActiveSectionId] = useState("hero");

  const isClickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSectionNavigate = (sectionId: string) => {
    setActiveSectionId(sectionId);
    isClickScrollingRef.current = true;
    if (clickScrollTimeoutRef.current) {
      clearTimeout(clickScrollTimeoutRef.current);
    }
    clickScrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1200);
  };

  useEffect(() => {
    let rafId: number | null = null;

    const determineActiveSection = () => {
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Extreme top: definitely Hero
      if (scrollY < 80) {
        setActiveSectionId("hero");
        return;
      }

      // 2. Extreme bottom: definitely Final CTA / Contact
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSectionId("final-cta");
        return;
      }

      // 3. Focal evaluation: reading focal line (200-240px below viewport top, beneath 76px header)
      const focalPoint = scrollY + Math.min(windowHeight * 0.35, 240);

      let activeCandidate: string | null = null;
      let maxVisibleHeight = 0;
      let fallbackCandidate: string | null = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elTop = rect.top + scrollY;
        const elBottom = elTop + rect.height;

        // Check if focalPoint is inside this section
        if (elTop <= focalPoint && elBottom > focalPoint) {
          activeCandidate = id;
          break;
        }

        // Calculate visible overlap within the viewport [scrollY + 76, scrollY + windowHeight]
        const visibleTop = Math.max(elTop, scrollY + 76);
        const visibleBottom = Math.min(elBottom, scrollY + windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          fallbackCandidate = id;
        }
      }

      const determined = activeCandidate || fallbackCandidate;
      if (determined) {
        setActiveSectionId((prev) => (prev !== determined ? determined : prev));
      }
    };

    const handleScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(determineActiveSection);
    };

    // Initial evaluation
    determineActiveSection();

    // Check URL hash on initial load and handle hash changes (direct URL changes / reload / back-forward)
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hashId = window.location.hash.replace("#", "");
        if (SECTION_IDS.includes(hashId)) {
          setActiveSectionId(hashId);
          isClickScrollingRef.current = true;
          setTimeout(() => {
            const targetEl = document.getElementById(hashId);
            if (targetEl) {
              const lenis = (
                window as unknown as {
                  __lenis?: {
                    scrollTo: (el: HTMLElement | string, options?: { offset?: number; immediate?: boolean }) => void;
                  };
                }
              ).__lenis;
              if (lenis && typeof lenis.scrollTo === "function") {
                lenis.scrollTo(targetEl, { offset: -76, immediate: true });
              } else {
                targetEl.scrollIntoView();
              }
            }
            setTimeout(() => {
              isClickScrollingRef.current = false;
            }, 400);
          }, 150);
        }
      }
    };

    handleHash();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHash);

    // Synchronize directly with Lenis scroll event if initialized
    const lenis = (
      window as unknown as {
        __lenis?: {
          on: (event: string, cb: () => void) => void;
          off: (event: string, cb: () => void) => void;
        };
      }
    ).__lenis;

    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHash);
      if (lenis && typeof lenis.off === "function") {
        lenis.off("scroll", handleScroll);
      }
      if (clickScrollTimeoutRef.current) {
        clearTimeout(clickScrollTimeoutRef.current);
      }
    };
  }, []);

  const openConsultation = (serviceName: string = "General Consultation") => {
    if (serviceName && serviceName !== "General Consultation") {
      router.push(`/consultation?service=${encodeURIComponent(serviceName)}`);
    } else {
      router.push("/consultation");
    }
  };

  const handleOpenSolution = (type: SolutionType, categoryIdx: number = 0) => {
    setActiveSolutionType(type);
    setActiveCategoryIdx(categoryIdx);
    setSolutionsModalOpen(true);
  };

  return (
    <SmoothScroll>
      <main className="relative bg-[#050607] text-[#F1EFE8] min-h-screen overflow-x-hidden selection:bg-[#00E5D0] selection:text-[#050607]">
        {/* Top Minimal Navbar */}
        <Navbar
          onOpenConsultation={() => openConsultation("General Consultation")}
          activeSection={activeSectionId}
          onNavigate={handleSectionNavigate}
        />

        {/* 01 — HERO (Cinematic fullscreen video + oversized typography) */}
        <HeroSection
          onOpenConsultation={() => openConsultation("Prosthetics & Orthotics")}
        />

        {/* 01 — ABOUT OSTEON (Human Potential in Motion + 3-Image Mosaic) */}
        <HumanStorySection
          onOpenConsultation={() => openConsultation("Clinical Evaluation")}
        />

        {/* 02 — OUR TEAM (Premium 3D Individual Team Member Carousel) */}
        <OurTeamSection />

        {/* 02 — OUR SOLUTIONS (Prosthetics & Orthotics Interactive Flex Accordion Gallery) */}
        <SolutionsOverviewSection
          onOpenConsultation={(service?: string) => openConsultation(service || "Prosthetics & Orthotics")}
          onOpenSolution={handleOpenSolution}
        />

        {/* 03 — THE PROCESS (Designed Around You 5-Stage Connected Storyline) */}
        <PatientJourneySection
          onOpenConsultation={() => openConsultation("Process & Fitting")}
        />

        {/* 05 — SPECIALIZED CARE (Scoliosis, Pediatric, and Custom Orthotics) */}
        <SpecializedCareSection
          onOpenConsultation={(service?: string) => openConsultation(service || "Specialized Care")}
          onOpenSolution={handleOpenSolution}
        />

        {/* 06 — YOUR JOURNEY (More Than a Device Cinematic Closing) */}
        <FinalCTASection
          onOpenConsultation={() => openConsultation("Full Clinical Assessment")}
          onOpenContact={() => openConsultation("Contact Clinical Team")}
        />

        {/* 07 — FOOTER (4-Column Architecture + Verified Contact + Developer Watermark) */}
        <Footer
          onOpenConsultation={() => openConsultation("General Consultation")}
          onOpenSolution={handleOpenSolution}
        />

        {/* Interactive Modals */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          initialService={selectedService}
        />

        {/* Detailed Solutions Showcase Modal (Prosthetics & Orthotics) */}
        <SolutionsModal
          isOpen={solutionsModalOpen}
          onClose={() => setSolutionsModalOpen(false)}
          initialType={activeSolutionType}
          initialCategoryIdx={activeCategoryIdx}
          onOpenConsultation={(service) => openConsultation(service || "Clinical Consultation")}
        />
      </main>
    </SmoothScroll>
  );
}
