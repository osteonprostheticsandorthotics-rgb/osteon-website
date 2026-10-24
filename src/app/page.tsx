"use client";

import React, { useState, useEffect } from "react";
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

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Prosthetics");
  const [solutionsModalOpen, setSolutionsModalOpen] = useState(false);
  const [activeSolutionType, setActiveSolutionType] = useState<SolutionType>("prosthetics");
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [activeSectionId, setActiveSectionId] = useState("hero");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "our-team",
      "solutions",
      "process",
      "specialized-care",
      "final-cta",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSectionId(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openConsultation = (serviceName: string = "General Consultation") => {
    setSelectedService(serviceName);
    setConsultationOpen(true);
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
          onOpenConsultation={() => openConsultation("Specialized Care")}
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

