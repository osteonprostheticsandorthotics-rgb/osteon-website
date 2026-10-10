"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowRight,
  Check,
} from "lucide-react";

interface PatientJourneyProps {
  onOpenConsultation: () => void;
}

const CLINICAL_STAGES = [
  {
    step: "01",
    tag: "Clinical Intake",
    title: "Understanding & Listening",
    description:
      "An in-depth consultation to understand your lifestyle, physical routine, and personal mobility goals before taking any measurements.",
    image: "/images/about-clinician-hero.jpg",
  },
  {
    step: "02",
    tag: "Biomechanics",
    title: "Anatomical Assessment",
    description:
      "High-precision 3D limb capture and gait analysis to map residual anatomy, range of motion, and dynamic load tolerance.",
    image: "/images/tech-gait-kinematics.jpg",
  },
  {
    step: "03",
    tag: "Custom Craft",
    title: "Precision Tailoring & Design",
    description:
      "Sculpting custom carbon fibre sockets and articulated orthotic braces calibrated specifically to your body weight and activity level.",
    image: "/images/socket-engineering.jpg",
  },
  {
    step: "04",
    tag: "Dynamic Fitting",
    title: "Fitting & Gait Tuning",
    description:
      "Dynamic test-walking sessions to fine-tune alignment, relieve pressure hotspots, and restore a natural walking cadence.",
    image: "/images/prosthetics-lower.jpg",
  },
  {
    step: "05",
    tag: "Lifelong Care",
    title: "Ongoing Clinical Support",
    description:
      "Scheduled check-ups, socket relining, and routine adjustments to ensure lasting comfort and peak performance as your body adapts.",
    image: "/images/about-runner-hero.jpg",
  },
];

export const PatientJourneySection: React.FC<PatientJourneyProps> = ({
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  // Scroll Progress Tracking across the vertical Zigzag container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  // Silky smooth spring for the glowing serpentine laser path
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  // Track active checkpoint as snake progresses down the curve
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    let stage = 0;
    if (latest >= 0.85) {
      stage = 4;
    } else if (latest >= 0.65) {
      stage = 3;
    } else if (latest >= 0.42) {
      stage = 2;
    } else if (latest >= 0.18) {
      stage = 1;
    } else {
      stage = 0;
    }

    if (stage !== activeStage) {
      setActiveStage(stage);
    }
  });

  // Programmatic scroll to specific checkpoint
  const scrollToStage = (stageIndex: number) => {
    const el = document.getElementById(`process-stage-${stageIndex}`);
    if (!el) return;

    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (
            target: HTMLElement | string | number,
            options?: { offset?: number }
          ) => void;
        };
      }
    ).__lenis;

    if (lenis) {
      lenis.scrollTo(el, { offset: -90 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Continuous S-Curve Zigzag Bézier Path:
  // Node 1: (60, 100) -> Node 2: (940, 360) -> Node 3: (60, 620) -> Node 4: (940, 880) -> Node 5: (60, 1140)
  const zigzagSvgPath =
    "M 60 100 C 60 230, 940 230, 940 360 C 940 490, 60 490, 60 620 C 60 750, 940 750, 940 880 C 940 1010, 60 1010, 60 1140";

  return (
    <section
      id="process"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050607] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* ========================================================================= */}
        {/* SECTION HEADER (LEFT-ALIGNED EDITORIAL GRID) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 space-y-4">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.22em] text-[#8E9B9D]"
            >
              04 — THE PROCESS
            </motion.div>

            {/* Giant Stacked Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-extrabold uppercase text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-[#F1EFE8]"
            >
              DESIGNED
              <br />
              AROUND <span className="text-[#00E5D0]">YOU.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed font-normal max-w-xl"
            >
              A 5-step clinical journey from initial intake to lifelong care —
              engineered to restore natural movement, confidence, and lasting comfort.
            </motion.p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SERPENTINE ZIGZAG TIMELINE CONTAINER */}
        {/* ========================================================================= */}
        <div
          ref={containerRef}
          className="relative max-w-[1100px] mx-auto py-4"
        >
          {/* DESKTOP CURVED ZIGZAG SVG OVERLAY (Hidden on mobile) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 1240"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              {/* Filter for subtle neon laser glow */}
              <defs>
                <filter
                  id="snakeGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Hairline Track */}
              <path
                d={zigzagSvgPath}
                stroke="rgba(255, 255, 255, 0.09)"
                strokeWidth="1.75"
                strokeDasharray="4 6"
                fill="none"
              />

              {/* Glowing Neon Cyan Laser Snake */}
              <motion.path
                d={zigzagSvgPath}
                stroke="#00E5D0"
                strokeWidth="2.25"
                fill="none"
                strokeLinecap="round"
                style={{
                  pathLength: smoothProgress,
                  filter: "url(#snakeGlow)",
                }}
              />
            </svg>
          </div>

          {/* MOBILE STRAIGHT/WAVE CONNECTING LINE (< lg) */}
          <div className="lg:hidden absolute left-4 sm:left-6 top-6 bottom-6 w-px bg-white/[0.1] z-0">
            <motion.div
              className="w-full bg-[#00E5D0] origin-top shadow-[0_0_12px_#00E5D0]"
              style={{
                scaleY: smoothProgress,
                height: "100%",
              }}
            />
          </div>

          {/* ========================================================================= */}
          {/* 5 STAGES WITH ALTERNATING ZIGZAG NODES */}
          {/* ========================================================================= */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
            {CLINICAL_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 1; // 0, 2, 4 = Left node; 1, 3 = Right node
              const isPassed = activeStage >= idx;
              const isCurrent = activeStage === idx;

              return (
                <div
                  key={stage.step}
                  id={`process-stage-${idx}`}
                  className="relative scroll-mt-24"
                >
                  {/* DESKTOP 2-COLUMN ALTERNATING ROW (lg and above) */}
                  <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[190px]">
                    {/* LEFT COLUMN */}
                    <div className="col-span-6 flex justify-start">
                      {!isEven ? (
                        /* Odd Stage (0, 2, 4): Left Node + Compact Card */
                        <div className="flex items-start gap-5 max-w-[480px] w-full">
                          {/* Checkpoint Node */}
                          <CheckpointNode
                            step={stage.step}
                            isPassed={isPassed}
                            isCurrent={isCurrent}
                            onClick={() => scrollToStage(idx)}
                          />

                          {/* Compact Minimal Card */}
                          <CompactStageCard
                            stage={stage}
                            isPassed={isPassed}
                            isCurrent={isCurrent}
                          />
                        </div>
                      ) : (
                        /* Even Stage (1, 3): Compact Image Frame on Left */
                        <div className="w-full flex justify-end pr-8">
                          <CompactVisualPreview
                            stage={stage}
                            isPassed={isPassed}
                          />
                        </div>
                      )}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-span-6 flex justify-end">
                      {isEven ? (
                        /* Even Stage (1, 3): Right Node + Compact Card */
                        <div className="flex flex-row-reverse items-start gap-5 max-w-[480px] w-full">
                          {/* Checkpoint Node */}
                          <CheckpointNode
                            step={stage.step}
                            isPassed={isPassed}
                            isCurrent={isCurrent}
                            onClick={() => scrollToStage(idx)}
                          />

                          {/* Compact Minimal Card */}
                          <CompactStageCard
                            stage={stage}
                            isPassed={isPassed}
                            isCurrent={isCurrent}
                          />
                        </div>
                      ) : (
                        /* Odd Stage (0, 2, 4): Compact Image Frame on Right */
                        <div className="w-full flex justify-start pl-8">
                          <CompactVisualPreview
                            stage={stage}
                            isPassed={isPassed}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* MOBILE & TABLET IMMERSIVE STORYTELLING VIEW (< lg) */}
                  <div className="lg:hidden pl-11 sm:pl-16 relative py-6 sm:py-8">
                    {/* Mobile Left Rail Node */}
                    <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-8 z-20">
                      <CheckpointNode
                        step={stage.step}
                        isPassed={isPassed}
                        isCurrent={isCurrent}
                        onClick={() => scrollToStage(idx)}
                        isMobile
                      />
                    </div>

                    {/* Substantial Mobile Storytelling Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`rounded-2xl border transition-all duration-500 overflow-hidden space-y-4 p-5 sm:p-6 shadow-2xl ${
                        isCurrent
                          ? "bg-[#090C0E] border-[#00E5D0]/50 shadow-[0_10px_35px_rgba(0,229,208,0.12)]"
                          : isPassed
                          ? "bg-[#080A0C] border-white/[0.1]"
                          : "bg-[#080A0C]/70 border-white/[0.06] opacity-85"
                      }`}
                    >
                      {/* Stage Headline */}
                      <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#F1EFE8] leading-tight">
                        {stage.title}
                      </h3>

                      {/* Large Clinical Photography Frame */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#050607]">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Narrative Description */}
                      <p className="text-xs sm:text-sm text-[#A5AAAB] leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT BOTTOM CONSULTATION TOUCHPOINT */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#080B0D] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto text-center sm:text-left"
        >
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#00E5D0] uppercase tracking-wider font-semibold">
              BEGIN YOUR JOURNEY
            </div>
            <h3 className="font-display font-bold uppercase text-lg sm:text-xl text-[#F1EFE8]">
              Book an Initial Clinical Evaluation
            </h3>
            <p className="text-xs text-[#A5AAAB] max-w-md font-normal">
              Meet with our prosthetic and orthotic specialists to map your personalized care pathway.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#00E5D0]/40 hover:border-[#00E5D0] bg-white/[0.03] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 shrink-0 cursor-pointer min-h-[44px] group"
          >
            <span>Start Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// =========================================================================
// SUB-COMPONENT: CHECKPOINT NODE
// =========================================================================
interface CheckpointNodeProps {
  step: string;
  isPassed: boolean;
  isCurrent: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

const CheckpointNode: React.FC<CheckpointNodeProps> = ({
  step,
  isPassed,
  isCurrent,
  onClick,
  isMobile = false,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 focus:outline-none group cursor-pointer"
      aria-label={`Jump to stage ${step}`}
    >
      {/* Active Pulse Ring */}
      {isCurrent && (
        <span className="absolute inset-0 rounded-full bg-[#00E5D0]/30 blur-sm animate-ping" />
      )}

      <motion.div
        animate={{
          scale: isCurrent ? 1.12 : 1.0,
          backgroundColor: isCurrent
            ? "#00E5D0"
            : isPassed
            ? "#071c19"
            : "#0A0D0F",
          borderColor: isPassed ? "#00E5D0" : "rgba(255, 255, 255, 0.16)",
          color: isCurrent ? "#050607" : isPassed ? "#00E5D0" : "#7A8387",
        }}
        transition={{ duration: 0.25 }}
        className={`rounded-full flex items-center justify-center font-mono font-bold border transition-shadow duration-300 ${
          isMobile ? "w-8 h-8 text-[11px]" : "w-10 h-10 text-xs"
        } ${
          isCurrent
            ? "shadow-[0_0_20px_rgba(0,229,208,0.6)]"
            : isPassed
            ? "shadow-[0_0_10px_rgba(0,229,208,0.25)]"
            : "group-hover:border-white/40"
        }`}
      >
        {isPassed && !isCurrent ? (
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        ) : (
          step
        )}
      </motion.div>
    </button>
  );
};

// =========================================================================
// SUB-COMPONENT: COMPACT STAGE CARD (MINIMAL & UNCLUTTERED)
// =========================================================================
interface CompactStageCardProps {
  stage: (typeof CLINICAL_STAGES)[0];
  isPassed: boolean;
  isCurrent: boolean;
}

const CompactStageCard: React.FC<CompactStageCardProps> = ({
  stage,
  isPassed,
  isCurrent,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 space-y-2.5 ${
        isCurrent
          ? "bg-[#090C0E] border-[#00E5D0]/40 shadow-[0_8px_25px_rgba(0,229,208,0.1)]"
          : isPassed
          ? "bg-[#080A0C] border-white/[0.1]"
          : "bg-[#080A0C]/70 border-white/[0.06] opacity-80"
      }`}
    >
      {/* Title */}
      <h4 className="font-display font-bold uppercase text-base sm:text-lg text-[#F1EFE8] leading-tight tracking-tight">
        {stage.title}
      </h4>

      {/* Clean 1-2 sentence description */}
      <p className="text-xs text-[#A5AAAB] leading-relaxed font-normal">
        {stage.description}
      </p>
    </motion.div>
  );
};

// =========================================================================
// SUB-COMPONENT: COMPACT VISUAL PREVIEW (EDITORIAL CROP)
// =========================================================================
interface CompactVisualPreviewProps {
  stage: (typeof CLINICAL_STAGES)[0];
  isPassed: boolean;
}

const CompactVisualPreview: React.FC<CompactVisualPreviewProps> = ({
  stage,
  isPassed,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[320px] w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] bg-[#0A0D0F] shadow-lg group relative"
    >
      <img
        src={stage.image}
        alt={stage.title}
        className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </motion.div>
  );
};
