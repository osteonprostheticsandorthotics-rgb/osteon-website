"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Department =
  | "Clinical Leadership"
  | "Clinical Team"
  | "Workshop & Fabrication"
  | "Operations & Accounts";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  department: Department;
  photo?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAM_MEMBERS: TeamMember[] = [
  { id: 1,  name: "Dr. R. Balamurugan", designation: "Clinical & Technical Director",    department: "Clinical Leadership"      },
  { id: 2,  name: "Joseph Littu",       designation: "Senior Prosthetist & Orthotist",   department: "Clinical Team"            },
  { id: 3,  name: "Vishnu",             designation: "Prosthetist & Orthotist",           department: "Clinical Team"            },
  { id: 4,  name: "Ameera",             designation: "Certified P&O Professional",        department: "Clinical Team",          photo: "/images/team/Ameera.jpeg" },
  { id: 5,  name: "Yeshu Kumar",        designation: "Senior Technician",                 department: "Workshop & Fabrication", photo: "/images/team/yeshu-kumar.jpeg" },
  { id: 6,  name: "Bineesh",            designation: "Senior Technician",                 department: "Workshop & Fabrication", photo: "/images/team/Bineesh.jpeg" },
  { id: 7,  name: "Vyshak",             designation: "Assistant Technician",              department: "Workshop & Fabrication", photo: "/images/team/Vyshak.jpeg" },
  { id: 8,  name: "Godson",             designation: "Sales & Operations",                department: "Operations & Accounts"    },
  { id: 9,  name: "Neenu",              designation: "Administrative Executive",          department: "Operations & Accounts",  photo: "/images/team/Neenu.jpeg" },
  { id: 10, name: "Aneena",             designation: "Accounts",                          department: "Operations & Accounts",  photo: "/images/team/Aneena.jpeg" },
];

const DEPT_ACCENT: Record<Department, string> = {
  "Clinical Leadership":    "#00E5D0",
  "Clinical Team":          "#00C8B8",
  "Workshop & Fabrication": "#00ADA0",
  "Operations & Accounts":  "#009590",
};

// ─── Responsive breakpoint ────────────────────────────────────────────────────
// visibleRange: how many positions each side to render (1 = ±1, 2 = ±2, 3 = ±3)

function useVisibleRange() {
  const [range, setRange] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)  setRange(1);
      else if (w < 1024) setRange(2);
      else               setRange(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return range;
}

// ─── Card position styles (pixel-based from stage centre) ─────────────────────

interface CardStyle {
  x: number;        // px offset from centre
  scale: number;
  rotateY: number;  // degrees
  z: number;        // translateZ px
  opacity: number;
  zIndex: number;
}

/**
 * Compute the 3D style for a given position.
 * `spread` is the half-width of the stage in px.
 * On mobile (range=1) we use a compact layout.
 */
function getCardStyle(position: number, spread: number, range: number): CardStyle {
  const abs = Math.abs(position);
  const dir = position >= 0 ? 1 : -1;

  if (range === 1) {
    // Mobile: dominant centre + peek
    switch (abs) {
      case 0: return { x: 0,          scale: 1,    rotateY:  0,           z:   0,  opacity: 1,    zIndex: 12 };
      case 1: return { x: dir * spread * 0.72, scale: 0.84, rotateY: dir * -12, z: -80,  opacity: 0.45, zIndex: 7  };
      default:return { x: dir * spread * 1.5,  scale: 0.7,  rotateY: dir * -20, z: -160, opacity: 0,    zIndex: 1  };
    }
  }

  if (range === 2) {
    // Tablet: 5 cards
    switch (abs) {
      case 0: return { x: 0,                   scale: 1,    rotateY:  0,           z:    0, opacity: 1,    zIndex: 12 };
      case 1: return { x: dir * spread * 0.40, scale: 0.88, rotateY: dir * -15,    z:  -80, opacity: 0.80, zIndex: 10 };
      case 2: return { x: dir * spread * 0.78, scale: 0.72, rotateY: dir * -26,    z: -180, opacity: 0.50, zIndex: 7  };
      default:return { x: dir * spread * 1.20, scale: 0.58, rotateY: dir * -34,    z: -280, opacity: 0,    zIndex: 1  };
    }
  }

  // Desktop: 7 cards (±3)
  // Target offsets: ±280, ±520, ±720 scaled to the actual container half-width
  // Reference container half-width for tuning: 720px (1440px total)
  const ref = 720;
  switch (abs) {
    case 0: return { x: 0,                          scale: 1,    rotateY:  0,        z:    0, opacity: 1,    zIndex: 12 };
    case 1: return { x: dir * (spread * 280 / ref), scale: 0.90, rotateY: dir * -15, z:  -90, opacity: 0.85, zIndex: 10 };
    case 2: return { x: dir * (spread * 520 / ref), scale: 0.78, rotateY: dir * -25, z: -190, opacity: 0.60, zIndex: 7  };
    case 3: return { x: dir * (spread * 720 / ref), scale: 0.65, rotateY: dir * -30, z: -290, opacity: 0.35, zIndex: 4  };
    default:return { x: dir * (spread * 900 / ref), scale: 0.50, rotateY: dir * -38, z: -380, opacity: 0,    zIndex: 1  };
  }
}

// ─── Placeholder Portrait ─────────────────────────────────────────────────────

function PlaceholderPortrait({ name, department }: { name: string; department: Department }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const accent   = DEPT_ACCENT[department];
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-6 sm:pt-10 relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${accent}55 1px, transparent 1px), linear-gradient(90deg, ${accent}55 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 36%, ${accent}, transparent)` }}
      />
      {/* Icon */}
      <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
        <div
          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border"
          style={{ borderColor: `${accent}40`, background: `${accent}0E` }}
        >
          <User className="w-7 h-7 sm:w-10 sm:h-10" style={{ color: `${accent}80` }} />
        </div>
        <span
          className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.28em] opacity-25"
          style={{ color: accent }}
        >
          {initials}
        </span>
      </div>
      {/* Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0A0D0F] to-transparent pointer-events-none" />
    </div>
  );
}

// ─── Individual Team Card ─────────────────────────────────────────────────────

interface CardProps {
  member: TeamMember;
  position: number;
  spread: number;
  visibleRange: number;
  isActive: boolean;
  onClick: () => void;
}

function TeamCard({ member, position, spread, visibleRange, isActive, onClick }: CardProps) {
  const s      = getCardStyle(position, spread, visibleRange);
  const accent = DEPT_ACCENT[member.department];

  return (
    <motion.div
      onClick={!isActive ? onClick : undefined}
      animate={{
        x:       s.x,
        scale:   s.scale,
        rotateY: s.rotateY,
        z:       s.z,
        opacity: s.opacity,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 25, mass: 0.8 }}
      style={{
        position:        "absolute",
        zIndex:          s.zIndex,
        cursor:          isActive ? "default" : "pointer",
        transformOrigin: "center center",
        WebkitTransformOrigin: "center center",
        willChange:      "transform, opacity",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        WebkitTransformStyle: "preserve-3d",
        transformStyle: "preserve-3d",
      }}
      /* Active card: scales nicely across mobile & desktop */
      className="w-[160px] sm:w-[210px] md:w-[250px] lg:w-[280px] xl:w-[298px]"
    >
      <div
        className={`relative rounded-xl sm:rounded-2xl overflow-hidden border transition-colors duration-300 ${
          isActive
            ? "border-white/[0.16] shadow-[0_28px_80px_rgba(0,0,0,0.75),0_0_50px_rgba(0,229,208,0.06)]"
            : "border-white/[0.06]"
        }`}
        style={{ background: isActive ? "#0A0D0F" : "#080A0C" }}
      >
        {/* ── Portrait area ── */}
        <div className="relative aspect-[3/3.3] sm:aspect-[3/3.6] w-full overflow-hidden bg-[#060808]">
          {member.photo ? (
            <picture>
              <source srcSet={member.photo.replace(/\.(jpeg|jpg|png)$/i, '.webp')} type="image/webp" />
              <img
                src={member.photo}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </picture>
          ) : (
            <PlaceholderPortrait name={member.name} department={member.department} />
          )}

          {/* Bottom scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0F] via-[#0A0D0F]/5 to-transparent pointer-events-none" />
        </div>

        {/* ── Info area ── */}
        <div className="px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
          <div className="w-5 sm:w-7 h-[2px] rounded-full mb-1.5 sm:mb-2.5 opacity-80" style={{ background: accent }} />
          <h3
            className={`font-display font-bold uppercase leading-[1.1] tracking-[-0.02em] mb-0.5 sm:mb-1 transition-colors duration-300 ${
              isActive ? "text-[#F1EFE8]" : "text-[#F1EFE8]/60"
            }`}
            style={{ fontSize: "clamp(11px, 0.95vw, 15px)" }}
          >
            {member.name}
          </h3>
          <p
            className={`text-[9.5px] sm:text-[11px] leading-snug transition-colors duration-300 ${
              isActive ? "text-[#A5AAAB]" : "text-[#A5AAAB]/50"
            }`}
          >
            {member.designation}
          </p>
        </div>

        {/* Active accent bar */}
        {isActive && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}CC, transparent)` }}
          />
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function OurTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(720); // half-width of stage in px
  const visibleRange = useVisibleRange();

  // Measure stage half-width
  useEffect(() => {
    const measure = () => {
      if (stageRef.current) {
        setSpread(stageRef.current.offsetWidth / 2);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  const filteredMembers = TEAM_MEMBERS;
  const totalMembers = filteredMembers.length;

  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % totalMembers), [totalMembers]);
  const goPrev = useCallback(() => setActiveIndex((i) => (i - 1 + totalMembers) % totalMembers), [totalMembers]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const onPointerDown = (e: React.PointerEvent) => { touchStartX.current = e.clientX; };
  const onPointerUp   = (e: React.PointerEvent) => {
    const delta = touchStartX.current - e.clientX;
    if (Math.abs(delta) > 48) {
      if (delta > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  // Relative positions with wrap-around
  const cardEntries = filteredMembers.map((member, idx) => {
    let pos = idx - activeIndex;
    const half = Math.floor(totalMembers / 2);
    if (pos >  half) pos -= totalMembers;
    if (pos < -half) pos += totalMembers;
    return { member, pos, idx };
  });

  const activeMember = filteredMembers[activeIndex];

  return (
    <section
      id="our-team"
      className="relative w-full py-10 sm:py-14 lg:py-20 bg-[#050607] overflow-hidden border-t border-white/[0.07] scroll-mt-24"
      aria-label="Our Team"
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-[0.04] blur-3xl rounded-full"
        style={{ background: "radial-gradient(ellipse, #00E5D0, transparent 70%)" }}
      />

      {/* ── Header + filters inside max-width wrapper ── */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-3 sm:space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#8E9B9D]"
            >
              02 — OUR TEAM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[#F1EFE8]"
              style={{ fontSize: "clamp(22px, 3.6vw, 48px)" }}
            >
              THE PEOPLE
              <br />
              BEHIND <span className="text-[#00E5D0]">YOUR CARE.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-sm sm:text-base text-[#A5AAAB] leading-relaxed max-w-xs sm:max-w-sm"
          >
            Clinicians, technicians, and specialists — dedicated to restoring
            mobility and independence.
          </motion.p>
        </div>
      </div>

      {/* ── Full-width carousel stage ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full"
      >
        {/*
          The stage uses the full section width with padding so cards reach
          toward both edges. overflow-visible lets side cards extend naturally;
          the section's own overflow-hidden provides the final clip.
        */}
        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center touch-pan-y"
          style={{
            height:            "clamp(280px, 34vw, 440px)",
            perspective:       "1600px",
            WebkitPerspective: "1600px",
            perspectiveOrigin: "50% 44%",
            WebkitPerspectiveOrigin: "50% 44%",
            overflow:          "visible",
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          role="region"
          aria-label={`Team carousel — ${activeMember?.name ?? ""}`}
        >
          {cardEntries
            .filter(({ pos }) => Math.abs(pos) <= visibleRange)
            .map(({ member, pos, idx }) => (
              <TeamCard
                key={member.id}
                member={member}
                position={pos}
                spread={spread}
                visibleRange={visibleRange}
                isActive={pos === 0}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-5 mt-8 sm:mt-10">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={goPrev}
            disabled={totalMembers <= 1}
            aria-label="Previous team member"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-[#A5AAAB] hover:border-[#00E5D0]/40 hover:text-[#00E5D0] hover:bg-[#00E5D0]/[0.06] transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Team member navigation">
            {filteredMembers.map((m, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active}
                  aria-label={m.name}
                  onClick={() => setActiveIndex(i)}
                  className="flex items-center justify-center py-2"
                >
                  <motion.div
                    animate={{ width: active ? 22 : 5, opacity: active ? 1 : 0.28 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="h-1.5 rounded-full bg-[#00E5D0]"
                  />
                </button>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={goNext}
            disabled={totalMembers <= 1}
            aria-label="Next team member"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-[#A5AAAB] hover:border-[#00E5D0]/40 hover:text-[#00E5D0] hover:bg-[#00E5D0]/[0.06] transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* ── Active member strip (desktop & tablet only, hidden on mobile) ── */}
        <AnimatePresence mode="wait">
          {activeMember && (
            <motion.div
              key={`strip-${activeMember.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block mt-7 sm:mt-9 text-center space-y-1"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8E9B9D]">
                {activeIndex + 1} / {totalMembers}
              </p>
              <p
                className="font-display font-bold uppercase text-[#F1EFE8] tracking-[-0.01em]"
                style={{ fontSize: "clamp(16px, 1.8vw, 24px)" }}
              >
                {activeMember.name}
              </p>
              <p className="text-[13px] text-[#A5AAAB]">{activeMember.designation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom spacer */}
      <div className="h-10 sm:h-14" />
    </section>
  );
}
