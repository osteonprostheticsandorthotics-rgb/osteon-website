"use client";

import React, { useState, useEffect } from "react";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/01_Hero";
import { HumanStorySection } from "@/components/sections/02_HumanStory";
import { SolutionsOverviewSection } from "@/components/sections/02_SolutionsOverview";
import { ProstheticsSection } from "@/components/sections/03_Prosthetics";
import { PatientJourneySection } from "@/components/sections/08_PatientJourney";
import { SpecializedCareSection } from "@/components/sections/05_SpecializedCare";
import { FinalCTASection } from "@/components/sections/11_FinalCTA";

import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { VideoStoryModal } from "@/components/modals/VideoStoryModal";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoStoryOpen, setVideoStoryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Prosthetics");
  const [activeSectionId, setActiveSectionId] = useState("hero");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "solutions",
      "prosthetics",
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
          onOpenVideoStory={() => setVideoStoryOpen(true)}
        />

        {/* 01 — ABOUT OSTEON (Human Potential in Motion + 3-Image Mosaic) */}
        <HumanStorySection
          onOpenConsultation={() => openConsultation("Clinical Evaluation")}
        />

        {/* 02 — OUR SOLUTIONS (Prosthetics & Orthotics 2 Large Editorial Cards) */}
        <SolutionsOverviewSection
          onOpenConsultation={() => openConsultation("Prosthetics & Orthotics")}
        />

        {/* 03 — PROSTHETICS (Interactive Lower & Upper Extremity Showcase) */}
        <ProstheticsSection
          onOpenConsultation={() => openConsultation("Prosthetics Fitting")}
        />

        {/* 04 — THE PROCESS (Designed Around You 5-Stage Connected Storyline) */}
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
          onOpenVideoStory={() => setVideoStoryOpen(true)}
        />

        {/* 07 — FOOTER (4-Column Architecture + Verified Contact + Developer Watermark) */}
        <Footer onOpenConsultation={() => openConsultation("General Consultation")} />

        {/* Interactive Modals */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          initialService={selectedService}
        />

        <VideoStoryModal
          isOpen={videoStoryOpen}
          onClose={() => setVideoStoryOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}

