"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";

export type SolutionType = "prosthetics" | "orthotics";

interface SolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: SolutionType;
  initialCategoryIdx?: number;
  onOpenConsultation?: (serviceName?: string) => void;
}

interface SolutionItem {
  id: string;
  categoryTag: string;
  subGroup?: "lower" | "upper" | "silicone" | "foot-ankle" | "knee-hip" | "spine";
  title: string;
  level?: string;
  description: string;
  image: string;
  features: string[];
}

const PROSTHETICS_DATA: SolutionItem[] = [
  // 1. Lower Extremity Prostheses
  {
    id: "partial-foot-prosthesis",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Partial-Foot Prosthesis",
    level: "Toe, transmetatarsal & midfoot amputations",
    description: "Custom partial-foot device restoring push-off leverage and normal footwear fit.",
    image: "/images/products/partial-foot-prosthesis.jpg",
    features: [
      "Custom partial-foot device & toe filler",
      "Silicone or cosmetic restoration options",
      "Accommodates standard everyday footwear",
    ],
  },
  {
    id: "ankle-disarticulation-syme",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Ankle Disarticulation (Syme's)",
    level: "Amputation through the ankle joint",
    description: "Distal weight-bearing socket and foot built for through-ankle limb loss.",
    image: "/images/products/symes-prosthesis.jpg",
    features: [
      "Custom socket suited to residual anatomy",
      "Low-profile dynamic energy-return foot",
      "Optimized for build height & footwear",
    ],
  },
  {
    id: "transtibial-bk",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Transtibial Prosthesis (BK)",
    level: "Below-knee amputation · Knee retained",
    description: "Custom below-knee limb with retained knee restoring natural walking rhythm.",
    image: "/images/prosthetics-lower.jpg",
    features: [
      "PTB or total-surface-bearing socket",
      "Silicone liner & vacuum suspension",
      "Dynamic carbon pylon & prosthetic foot",
    ],
  },
  {
    id: "knee-disarticulation",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Knee Disarticulation Prosthesis",
    level: "Through-knee amputation",
    description: "Full distal weight-bearing socket offering superior sitting comfort and control.",
    image: "/images/products/knee-disarticulation.jpg",
    features: [
      "Full distal weight-bearing socket",
      "Low-build-height stability knee unit",
      "Multi-axial shock-absorbing foot",
    ],
  },
  {
    id: "transfemoral-ak",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Transfemoral Prosthesis (AK)",
    level: "Above-knee amputation",
    description: "High-stability knee and socket system engineered for stumble-free walking.",
    image: "/images/socket-engineering.jpg",
    features: [
      "Custom ischial-bearing socket & liner",
      "Mechanical, hydraulic or microprocessor knee",
      "Multi-terrain flexible carbon foot",
    ],
  },
  {
    id: "hip-disarticulation",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Hip Disarticulation Prosthesis",
    level: "Through-hip amputation",
    description: "Integrated pelvic socket and hip unit restoring upright balance and gait.",
    image: "/images/products/hip-disarticulation.jpg",
    features: [
      "Pelvic socket support interface",
      "Polycentric hip joint & knee unit",
      "Pylon, foot & specialized gait training",
    ],
  },
  {
    id: "hemipelvectomy",
    categoryTag: "Lower Extremity",
    subGroup: "lower",
    title: "Hemipelvectomy Prosthesis",
    level: "Limb loss with part of pelvis removed",
    description: "Individualized pelvic suspension restoring posture and supported ambulation.",
    image: "/images/products/hemipelvectomy.jpg",
    features: [
      "Individualized pelvic interface & suspension",
      "Clinically synchronized hip, knee & foot",
      "Lightweight composite structural build",
    ],
  },

  // 2. Upper Extremity Prostheses
  {
    id: "partial-hand-prosthesis",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Partial-Hand Prosthesis",
    level: "Loss of one or more fingers or part of hand",
    description: "Cosmetic or functional device restoring finger grasp and hand appearance.",
    image: "/images/products/partial-hand.jpg",
    features: [
      "Passive silicone or cosmetic digits",
      "Functional partial-hand mechanical devices",
      "Task-specific attachments & grip",
    ],
  },
  {
    id: "wrist-disarticulation",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Wrist Disarticulation Prosthesis",
    level: "Amputation through wrist or carpal region",
    description: "Low-profile socket maximizing forearm rotation and terminal device control.",
    image: "/images/products/wrist-disarticulation.jpg",
    features: [
      "Custom socket suited to residual anatomy",
      "Low-profile wrist & terminal device",
      "Preserves natural forearm rotational range",
    ],
  },
  {
    id: "transradial-be",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Transradial Prosthesis (BE)",
    level: "Below-elbow amputation · Elbow retained",
    description: "Below-elbow limb with retained elbow for body-powered or myoelectric control.",
    image: "/images/bionic-arm-prosthesis.jpg",
    features: [
      "Anatomical socket & suspension interface",
      "Body-powered hook or powered bionic hand",
      "Multi-position wrist rotation unit",
    ],
  },
  {
    id: "elbow-disarticulation",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Elbow Disarticulation Prosthesis",
    level: "Through-elbow amputation",
    description: "Through-elbow system preserving upper-arm length with external hinge joints.",
    image: "/images/products/elbow-disarticulation.jpg",
    features: [
      "Custom socket preserving residual limb length",
      "External locking elbow hinges",
      "Selected terminal hand device",
    ],
  },
  {
    id: "transhumeral-ae",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Transhumeral Prosthesis (AE)",
    level: "Above-elbow amputation",
    description: "Coordinated prosthetic arm with mechanical or powered elbow and hand control.",
    image: "/images/products/transhumeral.jpg",
    features: [
      "Comfort upper-arm anatomical socket",
      "Mechanical or powered electric elbow",
      "Integrated wrist rotator & hook or hand",
    ],
  },
  {
    id: "shoulder-disarticulation",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Shoulder Disarticulation Prosthesis",
    level: "Arm removed through shoulder joint",
    description: "Custom shoulder-chest interface coordinating shoulder, elbow, and hand units.",
    image: "/images/products/shoulder-disarticulation.jpg",
    features: [
      "Custom shoulder & chest interface frame",
      "Multi-position shoulder & elbow units",
      "Goal-oriented terminal hand device",
    ],
  },
  {
    id: "forequarter-prosthesis",
    categoryTag: "Upper Extremity",
    subGroup: "upper",
    title: "Forequarter Prosthesis",
    level: "Upper limb & part of shoulder girdle removed",
    description: "Individualized suspension restoring shoulder contour, symmetry, and posture.",
    image: "/images/products/forequarter.jpg",
    features: [
      "Highly individualized suspension interface",
      "Custom thoracic contour & cosmetic balance",
      "Lightweight component configuration",
    ],
  },

  // 3. Silicone Restorations
  {
    id: "silicone-toe-prosthesis",
    categoryTag: "Silicone Restoration",
    subGroup: "silicone",
    title: "Silicone Toe Prosthesis",
    level: "Single or multiple toe loss",
    description: "Restores natural look, skin tone, and contour of missing toes.",
    image: "/images/products/silicone-toe.jpg",
    features: [
      "Custom color & acrylic nail detail",
      "Medical-grade biocompatible silicone",
      "Comfortable inside standard footwear",
    ],
  },
  {
    id: "silicone-midfoot-prosthesis",
    categoryTag: "Silicone Restoration",
    subGroup: "silicone",
    title: "Midfoot & Partial Foot Restoration",
    level: "Transmetatarsal & midfoot loss",
    description: "Restores forefoot contour, walking balance, and footwear comfort.",
    image: "/images/products/silicone-midfoot.jpg",
    features: [
      "Custom shape & lifelike skin tone match",
      "Dynamic forefoot push-off leverage",
      "Protects sensitive distal skin",
    ],
  },
  {
    id: "silicone-symes-prosthesis",
    categoryTag: "Silicone Restoration",
    subGroup: "silicone",
    title: "Syme's Silicone Restoration",
    level: "Through-ankle disarticulation",
    description: "Designed for ankle disarticulation with realistic skin texture and shape.",
    image: "/images/products/silicone-symes.jpg",
    features: [
      "Custom anatomical socket contour",
      "Hand-painted skin texture match",
      "Durable, flexible & shoe-ready",
    ],
  },
  {
    id: "silicone-finger-prosthesis",
    categoryTag: "Silicone Restoration",
    subGroup: "silicone",
    title: "Silicone Finger Prosthesis",
    level: "Single or multiple finger loss",
    description: "Recreates the natural look and contour of missing fingers.",
    image: "/images/products/silicone-finger.jpg",
    features: [
      "Custom nail & vein detailing",
      "Airtight anatomical suction fit",
      "Restores passive grasp & typing support",
    ],
  },
  {
    id: "silicone-palm-prosthesis",
    categoryTag: "Silicone Restoration",
    subGroup: "silicone",
    title: "Partial Hand & Palm Prosthesis",
    level: "Partial hand & palm loss",
    description: "Restores hand shape, cosmetic balance, and passive grasp after hand loss.",
    image: "/images/products/silicone-palm.jpg",
    features: [
      "Accommodates remaining fingers",
      "Lifelike skin tone & texture matching",
      "Passive grasp & keyboard support",
    ],
  },
  {
    id: "silicone-nose-prosthesis",
    categoryTag: "Facial Silicone",
    subGroup: "silicone",
    title: "Silicone Nose Prosthesis",
    level: "Partial or total rhinectomy",
    description: "Specialist facial restoration providing natural shape and facial harmony.",
    image: "/images/products/silicone-nose.jpg",
    features: [
      "Natural anatomical nasal shape",
      "Lightweight medical-grade silicone",
      "Skin-safe adhesive or implant hold",
    ],
  },
  {
    id: "silicone-ear-prosthesis",
    categoryTag: "Facial Silicone",
    subGroup: "silicone",
    title: "Silicone Ear Prosthesis",
    level: "Microtia or ear loss",
    description: "Custom-sculpted ear recreation with realistic cartilage contours and texture.",
    image: "/images/products/silicone-ear.jpg",
    features: [
      "Custom sculpted cartilage contours",
      "Color-matched skin gradients & pores",
      "Skin-safe adhesive or implant hold",
    ],
  },
  {
    id: "silicone-orbital-prosthesis",
    categoryTag: "Facial Silicone",
    subGroup: "silicone",
    title: "Facial & Orbital Prosthesis",
    level: "Orbital & midfacial restoration",
    description: "Specialist service restoring natural facial contours, symmetry, and balance.",
    image: "/images/products/silicone-orbital.jpg",
    features: [
      "Restores natural facial symmetry",
      "Feather-thin skin-safe margins",
      "Custom hand-painted ocular iris match",
    ],
  },
];

const ORTHOTICS_DATA: SolutionItem[] = [
  // 1. Foot & Ankle
  {
    id: "foot-orthoses-fo",
    categoryTag: "Foot Orthoses",
    subGroup: "foot-ankle",
    title: "Foot Orthoses (FO & Insoles)",
    level: "Plantar pressure redistribution & arch pain",
    description: "Orthoses designed to support, align, or redistribute pressure across the foot.",
    image: "/images/products/orthotic-insole.jpg",
    features: [
      "Custom foot orthoses & insoles",
      "Flat-foot & high-arch orthoses",
      "Metatarsal pads & forefoot orthoses",
      "Diabetic & pressure-relieving insoles",
      "UCBL deep-heel subtalar control",
    ],
  },
  {
    id: "ankle-foot-orthoses-afo",
    categoryTag: "Ankle-Foot",
    subGroup: "foot-ankle",
    title: "Ankle-Foot Orthoses (AFO)",
    level: "Foot drop, stroke, gait abnormalities & instability",
    description: "Support the ankle and foot and help control foot position during standing and walking.",
    image: "/images/carbon-fibre-afo.jpg",
    features: [
      "Solid AFO (rigid immobilization)",
      "Articulated or hinged dynamic AFO",
      "Ground-reaction AFO (GRAFO)",
      "Supramalleolar orthosis (SMO)",
    ],
  },

  // 2. Knee & Hip
  {
    id: "knee-orthoses-ko",
    categoryTag: "Knee Joint",
    subGroup: "knee-hip",
    title: "Knee Orthoses (KO & Braces)",
    level: "Osteoarthritis, ligament tears & post-op recovery",
    description: "Targeted joint stability, unloader decompression, and range-of-motion protection.",
    image: "/images/unloader-knee-brace.jpg",
    features: [
      "Functional and ligament knee braces",
      "Unloader knee orthoses (OA pain relief)",
      "Post-operative knee orthoses (dial-lock ROM)",
    ],
  },
  {
    id: "knee-ankle-foot-kafo",
    categoryTag: "Knee & Leg",
    subGroup: "knee-hip",
    title: "Knee-Ankle-Foot Orthoses (KAFO)",
    level: "Quadriceps weakness, neurological deficit & instability",
    description: "Multi-joint lower-limb bracing for secure upright stability and natural progression.",
    image: "/images/products/orthotic-kafo.jpg",
    features: [
      "KAFO with locking knee joint",
      "Stance-control KAFO (dynamic stance lock)",
      "Lightweight rigid composite uprights",
    ],
  },
  {
    id: "hip-orthoses-ho",
    categoryTag: "Hip & Pelvis",
    subGroup: "knee-hip",
    title: "Hip Orthoses (HO)",
    level: "Post-op hip arthroplasty, dislocation & pelvic instability",
    description: "Rigid pelvic and thigh alignment controlling abduction and stabilizing hip kinematics.",
    image: "/images/products/orthotic-hkafo.jpg",
    features: [
      "Hip abduction orthosis (dislocation guard)",
      "Hip stabilisation orthosis (pelvic control)",
      "Multi-axis adjustable hip joint",
    ],
  },
  {
    id: "hkafo-rgo-systems",
    categoryTag: "Full Lower Limb",
    subGroup: "knee-hip",
    title: "HKAFO & Reciprocating Gait (RGO)",
    level: "Paraplegia, spina bifida & bilateral limb weakness",
    description: "Comprehensive pelvic and lower-limb stabilization to control hip movement and facilitate upright mobility.",
    image: "/images/products/orthotic-thkafo.jpg",
    features: [
      "HKAFO multi-joint anatomical alignment",
      "Reciprocating gait orthosis (RGO)",
      "Dynamic pelvic cable reciprocal stepping",
    ],
  },

  // 3. Spine & Scoliosis
  {
    id: "cervical-spine-orthoses",
    categoryTag: "Cervical Spine",
    subGroup: "spine",
    title: "Cervical Orthoses (CO & CTO)",
    level: "Cervical trauma, fractures, post-op & disc herniation",
    description: "High-precision cervical and cervicothoracic motion restriction and stabilization.",
    image: "/images/products/orthotic-miami-j.jpg",
    features: [
      "Cervical orthoses (CO Miami J / Philadelphia)",
      "Cervicothoracic orthoses (CTO Miami JTO)",
      "Occipital cradling & tracheotomy opening",
    ],
  },
  {
    id: "torso-spinal-orthoses",
    categoryTag: "Spinal Orthoses",
    subGroup: "spine",
    title: "Spinal Orthoses (TLSO, LSO, TLO)",
    level: "Vertebral compression fractures, fusion & instability",
    description: "Custom-molded multi-plane rigid torso jackets and lumbosacral offloading belts.",
    image: "/images/products/orthotic-miami-tlso.jpg",
    features: [
      "Thoracolumbosacral orthoses (TLSO 456/464)",
      "Lumbosacral orthoses (LSO rigid belts)",
      "Thoracolumbar orthoses (TLO hyperextension)",
    ],
  },
  {
    id: "scoliosis-braces",
    categoryTag: "Scoliosis Care",
    subGroup: "spine",
    title: "Scoliosis Braces (Boston Brace)",
    level: "Adolescent idiopathic scoliosis & curve progression",
    description: "Custom-fabricated 3D corrective spinal jackets applying gentle pressure to arrest curves.",
    image: "/images/boston-brace-scoliosis.jpg",
    features: [
      "Custom 3D Boston Brace system",
      "Derotational corrective pads",
      "Discreet low-profile fit under clothing",
    ],
  },

  // 4. Upper Limb
  {
    id: "upper-limb-shoulder-elbow",
    categoryTag: "Shoulder & Elbow",
    subGroup: "upper",
    title: "Shoulder & Elbow Orthoses",
    level: "Rotator cuff injuries, subluxation & joint contractures",
    description: "Supportive abduction, joint rest, and controlled range-of-motion for the upper limb.",
    image: "/images/products/orthotic-elbow-shoulder.jpg",
    features: [
      "Shoulder orthoses (subluxation & abduction)",
      "Elbow orthoses (hinged ROM control)",
      "Post-operative joint recovery",
    ],
  },
  {
    id: "upper-limb-wrist-hand",
    categoryTag: "Wrist & Hand",
    subGroup: "upper",
    title: "Wrist, Hand & Finger Orthoses (WHO)",
    level: "Carpal tunnel, arthritis, tendonitis & finger deformities",
    description: "Anatomical splints stabilizing wrist, hand, and fingers for functional rest and recovery.",
    image: "/images/upper-limb-orthotics.jpg",
    features: [
      "Wrist-hand orthoses (WHO) & cock-up splints",
      "Hand orthoses & thumb spica supports",
      "Finger orthoses (swan neck & ring splints)",
    ],
  },
  {
    id: "upper-limb-articulated",
    categoryTag: "Upper Limb Systems",
    subGroup: "upper",
    title: "Articulated Systems (SEWHO & EWHO)",
    level: "Severe spasticity, burn contractures & kinetic chain palsy",
    description: "Complete multi-joint kinetic chain positioning from shoulder/elbow to fingers.",
    image: "/images/products/upper-limb-splints.jpg",
    features: [
      "Shoulder-elbow-wrist-hand orthoses (SEWHO)",
      "Elbow-wrist-hand orthoses (EWHO)",
      "Dynamic contracture & tone management",
    ],
  },
];

const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const modalContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 14,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SolutionsModal: React.FC<SolutionsModalProps> = ({
  isOpen,
  onClose,
  initialType = "prosthetics",
  onOpenConsultation,
}) => {
  const [activeType, setActiveType] = useState<SolutionType>(initialType);
  const [subFilter, setSubFilter] = useState<"all" | "lower" | "upper" | "silicone">("all");
  const [orthoticSubFilter, setOrthoticSubFilter] = useState<
    "all" | "foot-ankle" | "knee-hip" | "spine" | "upper"
  >("all");
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});
  const [prevProps, setPrevProps] = useState({ isOpen, initialType });

  const toggleSpecs = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSpecs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (prevProps.isOpen !== isOpen || prevProps.initialType !== initialType) {
    setPrevProps({ isOpen, initialType });
    if (isOpen) {
      setActiveType(initialType);
      setSubFilter("all");
      setOrthoticSubFilter("all");
      setExpandedSpecs({});
    }
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen]);

  const handleSwitchType = (type: SolutionType) => {
    setActiveType(type);
    setSubFilter("all");
    setOrthoticSubFilter("all");
    setExpandedSpecs({});
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProsthetics =
    subFilter === "all"
      ? PROSTHETICS_DATA
      : PROSTHETICS_DATA.filter((item) => item.subGroup === subFilter);

  const filteredOrthotics =
    orthoticSubFilter === "all"
      ? ORTHOTICS_DATA
      : ORTHOTICS_DATA.filter((item) => item.subGroup === orthoticSubFilter);

  const currentItems = activeType === "prosthetics" ? filteredProsthetics : filteredOrthotics;

  const handleCardConsultation = (itemTitle: string) => {
    const serviceName = `${activeType === "prosthetics" ? "Prosthetics" : "Orthotics"}: ${itemTitle}`;
    onClose();
    if (onOpenConsultation) {
      onOpenConsultation(serviceName);
    }
  };

  const handleGeneralConsultation = () => {
    const serviceName =
      activeType === "prosthetics" ? "Prosthetics Consultation" : "Orthotics Consultation";
    onClose();
    if (onOpenConsultation) {
      onOpenConsultation(serviceName);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 md:p-6"
          data-lenis-prevent="true"
          style={{
            paddingTop: "max(8px, env(safe-area-inset-top))",
            paddingBottom: "max(8px, env(safe-area-inset-bottom))",
          }}
        >
          {/* Solid Dark Backdrop */}
          <motion.div
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Window Container */}
          <motion.div
            variants={modalContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            data-lenis-prevent="true"
            className="relative w-full max-w-7xl h-[92vh] sm:h-[90vh] max-h-[900px] bg-[#0A0D10] border border-white/[0.1] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header Bar */}
            <div className="px-3 sm:px-7 py-2.5 sm:py-3.5 border-b border-white/[0.08] bg-[#0D1115] flex items-center justify-between gap-2 sm:gap-4 shrink-0 z-20">
              {/* Title & 2-Option Switcher */}
              <div className="flex items-center gap-2 sm:gap-5 min-w-0">
                <h2 className="text-xs sm:text-base font-display font-bold uppercase tracking-wider text-[#F1EFE8] leading-tight shrink-0 hidden xs:block">
                  Solutions
                </h2>

                {/* Segmented Switcher — 2 OPTIONS ONLY */}
                <div className="flex items-center bg-[#141A1F] p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-white/[0.08] shrink-0">
                  <button
                    type="button"
                    onClick={() => handleSwitchType("prosthetics")}
                    className={`px-2.5 sm:px-5 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10.5px] sm:text-xs font-sans sm:font-display font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer ${activeType === "prosthetics"
                      ? "bg-[#1E262E] text-[#00E5D0] border border-white/[0.12] shadow-sm"
                      : "text-[#A5AAAB] hover:text-[#F1EFE8]"
                      }`}
                  >
                    Prosthetics ({PROSTHETICS_DATA.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSwitchType("orthotics")}
                    className={`px-2.5 sm:px-5 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10.5px] sm:text-xs font-sans sm:font-display font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer ${activeType === "orthotics"
                      ? "bg-[#1E262E] text-[#00E5D0] border border-white/[0.12] shadow-sm"
                      : "text-[#A5AAAB] hover:text-[#F1EFE8]"
                      }`}
                  >
                    Orthotics ({ORTHOTICS_DATA.length})
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/[0.1] bg-[#141A1F] hover:bg-white/[0.08] hover:border-white/[0.2] text-[#A5AAAB] hover:text-[#F1EFE8] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close solutions modal"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Sub-Filter Bar (For Prosthetics) */}
            {/* Sub-Filter Bar (For Prosthetics) */}
            {activeType === "prosthetics" && (
              <>
                {/* Mobile View: Clean Dropdown Menu */}
                <div className="sm:hidden px-3 py-2 bg-[#0C1014] border-b border-white/[0.06] flex items-center gap-2 shrink-0 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A9CA5] shrink-0">
                    Category:
                  </span>
                  <div className="relative flex-1">
                    <select
                      value={subFilter}
                      onChange={(e) => {
                        setSubFilter(e.target.value as "all" | "lower" | "upper" | "silicone");
                        if (scrollContainerRef.current) {
                          scrollContainerRef.current.scrollTop = 0;
                        }
                      }}
                      className="w-full appearance-none bg-[#141A1F] border border-white/[0.1] rounded-lg py-1 pl-2.5 pr-7 text-[11px] font-sans font-medium text-[#F1EFE8] focus:outline-none focus:border-[#00E5D0]"
                    >
                      <option value="all">All Prosthetics ({PROSTHETICS_DATA.length})</option>
                      <option value="lower">
                        Lower Extremity ({PROSTHETICS_DATA.filter((i) => i.subGroup === "lower").length})
                      </option>
                      <option value="upper">
                        Upper Extremity ({PROSTHETICS_DATA.filter((i) => i.subGroup === "upper").length})
                      </option>
                      <option value="silicone">
                        Silicone & Facial ({PROSTHETICS_DATA.filter((i) => i.subGroup === "silicone").length})
                      </option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7A9CA5] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Desktop / Tablet View: Segmented Buttons */}
                <div className="hidden sm:flex px-5 sm:px-7 py-2.5 bg-[#0C1014] border-b border-white/[0.06] items-center gap-2 overflow-x-auto scrollbar-none shrink-0 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A9CA5] mr-1">
                    Category:
                  </span>
                  {[
                    { key: "all", label: `All (${PROSTHETICS_DATA.length})` },
                    {
                      key: "lower",
                      label: `Lower Extremity (${PROSTHETICS_DATA.filter((i) => i.subGroup === "lower").length})`,
                    },
                    {
                      key: "upper",
                      label: `Upper Extremity (${PROSTHETICS_DATA.filter((i) => i.subGroup === "upper").length})`,
                    },
                    {
                      key: "silicone",
                      label: `Silicone & Facial (${PROSTHETICS_DATA.filter((i) => i.subGroup === "silicone").length})`,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => {
                        setSubFilter(tab.key as "all" | "lower" | "upper" | "silicone");
                        if (scrollContainerRef.current) {
                          scrollContainerRef.current.scrollTop = 0;
                        }
                      }}
                      className={`px-3 py-1 rounded-md text-[11px] font-display font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-150 cursor-pointer ${subFilter === tab.key
                        ? "bg-[#1E262E] text-[#00E5D0] border border-[#00E5D0]/30 shadow-sm"
                        : "text-[#8E9B9D] hover:text-[#F1EFE8] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Sub-Filter Bar (For Orthotics) */}
            {activeType === "orthotics" && (
              <>
                {/* Mobile View: Clean Dropdown Menu */}
                <div className="sm:hidden px-3 py-2 bg-[#0C1014] border-b border-white/[0.06] flex items-center gap-2 shrink-0 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A9CA5] shrink-0">
                    Category:
                  </span>
                  <div className="relative flex-1">
                    <select
                      value={orthoticSubFilter}
                      onChange={(e) => {
                        setOrthoticSubFilter(
                          e.target.value as "all" | "foot-ankle" | "knee-hip" | "spine" | "upper"
                        );
                        if (scrollContainerRef.current) {
                          scrollContainerRef.current.scrollTop = 0;
                        }
                      }}
                      className="w-full appearance-none bg-[#141A1F] border border-white/[0.1] rounded-lg py-1 pl-2.5 pr-7 text-[11px] font-sans font-medium text-[#F1EFE8] focus:outline-none focus:border-[#00E5D0]"
                    >
                      <option value="all">All Orthotics ({ORTHOTICS_DATA.length})</option>
                      <option value="foot-ankle">
                        Foot & Ankle ({ORTHOTICS_DATA.filter((i) => i.subGroup === "foot-ankle").length})
                      </option>
                      <option value="knee-hip">
                        Knee & Hip ({ORTHOTICS_DATA.filter((i) => i.subGroup === "knee-hip").length})
                      </option>
                      <option value="spine">
                        Spine & Scoliosis ({ORTHOTICS_DATA.filter((i) => i.subGroup === "spine").length})
                      </option>
                      <option value="upper">
                        Upper Limb ({ORTHOTICS_DATA.filter((i) => i.subGroup === "upper").length})
                      </option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7A9CA5] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Desktop / Tablet View: Segmented Buttons */}
                <div className="hidden sm:flex px-5 sm:px-7 py-2.5 bg-[#0C1014] border-b border-white/[0.06] items-center gap-2 overflow-x-auto scrollbar-none shrink-0 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A9CA5] mr-1">
                    Category:
                  </span>
                  {[
                    { key: "all", label: `All (${ORTHOTICS_DATA.length})` },
                    {
                      key: "foot-ankle",
                      label: `Foot & Ankle (${ORTHOTICS_DATA.filter((i) => i.subGroup === "foot-ankle").length})`,
                    },
                    {
                      key: "knee-hip",
                      label: `Knee & Hip (${ORTHOTICS_DATA.filter((i) => i.subGroup === "knee-hip").length})`,
                    },
                    {
                      key: "spine",
                      label: `Spine & Scoliosis (${ORTHOTICS_DATA.filter((i) => i.subGroup === "spine").length})`,
                    },
                    {
                      key: "upper",
                      label: `Upper Limb (${ORTHOTICS_DATA.filter((i) => i.subGroup === "upper").length})`,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => {
                        setOrthoticSubFilter(
                          tab.key as "all" | "foot-ankle" | "knee-hip" | "spine" | "upper"
                        );
                        if (scrollContainerRef.current) {
                          scrollContainerRef.current.scrollTop = 0;
                        }
                      }}
                      className={`px-3 py-1 rounded-md text-[11px] font-display font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-150 cursor-pointer ${orthoticSubFilter === tab.key
                        ? "bg-[#1E262E] text-[#00E5D0] border border-[#00E5D0]/30 shadow-sm"
                        : "text-[#8E9B9D] hover:text-[#F1EFE8] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Modal Body: Clean, Minimal 4-Card Grid */}
            <div
              ref={scrollContainerRef}
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2.5 sm:p-6"
              style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
            >
              <motion.div
                key={`${activeType}-${activeType === "prosthetics" ? subFilter : orthoticSubFilter}`}
                variants={gridContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4"
              >
                {currentItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardItemVariants}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCardConsultation(item.title)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCardConsultation(item.title);
                      }
                    }}
                    className="group relative bg-[#12161A] hover:bg-[#151A1F] border border-white/[0.07] hover:border-white/[0.18] rounded-lg sm:rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.55)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5D0]/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/[0.14] before:to-transparent before:transition-all before:duration-300 group-hover:before:via-[#00E5D0]/30"
                  >
                    {/* Card Image Header */}
                    <div>
                      <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full bg-gradient-to-b from-[#181E23] to-[#13171B] overflow-hidden border-b border-white/[0.05]">
                        <picture>
                          <source srcSet={item.image.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                      </div>

                      {/* Card Content */}
                      <div className="p-2.5 sm:p-4 space-y-2 sm:space-y-2.5">
                        <div>
                          <div className="min-h-0 sm:min-h-[2.6rem] flex items-start">
                            <h3 className="text-xs sm:text-[14px] font-sans font-bold text-[#F3F4F6] group-hover:text-[#00E5D0] tracking-[-0.01em] leading-snug transition-colors duration-200">
                              {item.title}
                            </h3>
                          </div>

                          {item.level && (
                            <div className="mt-1 flex items-center">
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[9.5px] sm:text-[10px] font-mono text-[#8E9B9D] uppercase tracking-wide truncate max-w-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5D0]/80 shrink-0" />
                                <span className="truncate">{item.level}</span>
                              </span>
                            </div>
                          )}
                        </div>

                        <p className="text-[11px] sm:text-xs text-[#9CA3AF] font-sans leading-relaxed line-clamp-2 min-h-0 sm:min-h-[2.1rem]">
                          {item.description}
                        </p>

                        {/* Technical Specification / Configuration Section (Dropdown Accordion) */}
                        <div className="pt-2 border-t border-white/[0.05]">
                          <button
                            type="button"
                            onClick={(e) => toggleSpecs(item.id, e)}
                            className="w-full flex items-center justify-between py-1 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.14em] text-[#7A8890] hover:text-[#00E5D0] transition-colors cursor-pointer group/spec focus:outline-none"
                            aria-expanded={expandedSpecs[item.id] ?? false}
                          >
                            <span className="flex items-center gap-1.5">
                              <span>Configuration & Options</span>
                              <span className="text-[8.5px] sm:text-[9px] text-[#55636E]">({item.features.length})</span>
                            </span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${expandedSpecs[item.id]
                                ? "rotate-180 text-[#00E5D0]"
                                : "text-[#55636E] group-hover/spec:text-[#00E5D0]"
                                }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {expandedSpecs[item.id] && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="space-y-1 sm:space-y-1.5 pt-1.5 pb-0.5 text-[10.5px] sm:text-[11px] overflow-hidden"
                              >
                                {item.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-start gap-1.5 sm:gap-2 text-[#C4CBD0]">
                                    <span className="text-[#64748B] select-none text-[10px] sm:text-[11px] leading-tight shrink-0 font-mono">—</span>
                                    <span className="font-sans text-[10.5px] sm:text-[11px] text-[#CBD5E1] leading-tight">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Footer Bar */}
            <div className="px-3 sm:px-7 py-2 sm:py-3 border-t border-white/[0.08] bg-[#0D1115] flex items-center justify-between gap-2 sm:gap-3 shrink-0 z-20">
              {/* Desktop / Tablet Fabricated Text */}
              <div className="hidden md:flex items-center gap-2 text-xs text-[#8E9B9D] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#00E5D0] shrink-0" />
                <span>Custom-measured and fabricated to prescription in Cochin.</span>
              </div>

              {/* Mobile Mini Fabricated Badge */}
              <div className="flex md:hidden items-center gap-1.5 text-[10px] text-[#8E9B9D] font-sans min-w-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5D0] shrink-0" />
                <span className="truncate">Cochin Fabrication</span>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-auto sm:ml-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/[0.1] hover:border-white/[0.2] text-[11px] sm:text-sm font-sans font-medium uppercase tracking-wider text-[#A5AAAB] hover:text-[#F1EFE8] transition-colors cursor-pointer text-center"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleGeneralConsultation}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-[#00E5D0] hover:bg-[#00E5D0]/90 text-[#050607] text-[11px] sm:text-sm font-sans font-bold uppercase tracking-wider transition-all cursor-pointer group shrink-0"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


