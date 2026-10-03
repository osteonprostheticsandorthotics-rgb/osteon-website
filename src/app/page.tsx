"use client";

import React, { useState, useEffect } from "react";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTracker } from "@/components/layout/ScrollTracker";

import { HeroSection } from "@/components/sections/01_Hero";
import { HumanStorySection } from "@/components/sections/02_HumanStory";
import { ProstheticsSection } from "@/components/sections/03_Prosthetics";
import { DesignedAroundYouSection } from "@/components/sections/04_DesignedAroundYou";
import { TechnologySection } from "@/components/sections/04_Technology";
import { OrthoticsSection } from "@/components/sections/05_Orthotics";
import { ScoliosisSection } from "@/components/sections/06_Scoliosis";
import { OsteonKidsSection } from "@/components/sections/07_OsteonKids";
import { PatientJourneySection } from "@/components/sections/08_PatientJourney";
import { PatientStoriesSection } from "@/components/sections/09_PatientStories";
import { TrustCredibilitySection } from "@/components/sections/10_TrustCredibility";
import { FinalCTASection } from "@/components/sections/11_FinalCTA";

import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { VideoStoryModal } from "@/components/modals/VideoStoryModal";
import { ProductDetailModal } from "@/components/modals/ProductDetailModal";
import { ProstheticCategory } from "@/lib/data";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoStoryOpen, setVideoStoryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProstheticCategory | null>(null);
  const [selectedService, setSelectedService] = useState<string>("Prosthetics");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(1);
  const [activeSectionId, setActiveSectionId] = useState("hero");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "human-story",
      "prosthetics",
      "designed-around-you",
      "technology",
      "orthotics",
      "scoliosis",
      "kids",
      "journey",
      "stories",
      "trust",
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
          const index = sectionIds.indexOf(id);
          if (index !== -1) {
            setCurrentSectionIndex(index + 1);
          }
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

  const openConsultation = (serviceName: string = "Lower Extremity Prosthetics") => {
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

        {/* Right Side Vertical Scroll Progress */}
        <ScrollTracker
          currentSectionIndex={currentSectionIndex}
          totalSections={12}
          sectionName={activeSectionId.toUpperCase()}
        />

        {/* 01 — HERO (Cinematic fullscreen video + oversized typography) */}
        <HeroSection
          onOpenConsultation={() => openConsultation("Prosthetics & Orthotics")}
          onOpenVideoStory={() => setVideoStoryOpen(true)}
        />

        {/* 02 — SECTION 01: INTRODUCTION / HUMAN STORY */}
        <HumanStorySection
          onOpenConsultation={() => openConsultation("Clinical Evaluation")}
        />

        {/* 03 — SECTION 02: PROSTHETICS (Interactive luxury showcase) */}
        <ProstheticsSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenConsultation={() => openConsultation("Prosthetics Fitting")}
        />

        {/* 04 — SECTION 03: DESIGNED AROUND YOU (Anatomical technical annotations) */}
        <DesignedAroundYouSection />

        {/* 05 — SECTION 04: TECHNOLOGY (Engineering architecture & composite matrix) */}
        <TechnologySection
          onOpenConsultation={() => openConsultation("Technology Consultation")}
        />

        {/* 06 — SECTION 05: ORTHOTICS (Horizontal image gallery system) */}
        <OrthoticsSection
          onOpenConsultation={() => openConsultation("Dynamic Orthotics")}
        />

        {/* 07 — SECTION 06: SCOLIOSIS CARE (Quiet, trustworthy clinical precision) */}
        <ScoliosisSection
          onOpenConsultation={() => openConsultation("Scoliosis 3D Care")}
        />

        {/* 08 — SECTION 07: OSTEON FOR KIDS (Sophisticated pediatric care) */}
        <OsteonKidsSection
          onOpenConsultation={() => openConsultation("Osteon Pediatric Care")}
        />

        {/* 09 — SECTION 08: PATIENT JOURNEY (5-stage progression timeline) */}
        <PatientJourneySection
          onOpenConsultation={() => openConsultation("Initial Consultation")}
        />

        {/* 10 — SECTION 09: PATIENT STORIES (Editorial portrait spread) */}
        <PatientStoriesSection
          onOpenConsultation={() => openConsultation("Patient Care Consultation")}
        />

        {/* 11 — SECTION 10: TRUST & STANDARDS (Typography & spacing driven) */}
        <TrustCredibilitySection
          onOpenConsultation={() => openConsultation("Clinical Consultation")}
        />

        {/* 12 — SECTION 11: FINAL CTA (Cinematic dawn closure) */}
        <FinalCTASection
          onOpenConsultation={() => openConsultation("Full Clinical Assessment")}
          onOpenContact={() => openConsultation("Contact Clinical Team")}
        />

        {/* FOOTER */}
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

        <ProductDetailModal
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onBookConsultation={() => {
            if (selectedProduct) {
              openConsultation(selectedProduct.name);
            } else {
              openConsultation("Prosthetics");
            }
          }}
        />
      </main>
    </SmoothScroll>
  );
}

