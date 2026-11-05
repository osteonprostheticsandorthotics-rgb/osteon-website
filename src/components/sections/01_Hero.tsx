"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React/DOM hydration safety: strictly enforce muted and playsinline attributes
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback: If browser autoplay policy or low-power mode pauses video, play on first user gesture
          const handleFirstGesture = () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
            window.removeEventListener("touchstart", handleFirstGesture);
            window.removeEventListener("click", handleFirstGesture);
            window.removeEventListener("scroll", handleFirstGesture);
          };

          window.addEventListener("touchstart", handleFirstGesture, { passive: true, once: true });
          window.addEventListener("click", handleFirstGesture, { once: true });
          window.addEventListener("scroll", handleFirstGesture, { passive: true, once: true });
        });
      }
    };

    startPlayback();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen min-h-[100svh] min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#050607] scroll-mt-24"
    >
      {/* Cinematic Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/osteonvideo1.mp4"
          autoPlay
          loop
          muted
          playsInline
          {...({
            "webkit-playsinline": "true",
            "x5-playsinline": "true",
            "x5-video-player-type": "h5-page",
          } as Record<string, string>)}
          preload="metadata"
          poster="/images/socket-engineering.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.99] contrast-[1.08] opacity-85"
        >
          <source src="/osteonvideo1.mp4" type="video/mp4" />
          <source src="/osteonvid1.mp4" type="video/mp4" />
          <source src="/media/osteonvideo1.mp4" type="video/mp4" />
          <source src="/osteon-video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Scrims for Rich Contrast & Glare Reduction */}
        <div className="absolute inset-0 bg-[#050607]/35 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/85 via-[#050607]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/60 z-10" />
      </div>

      {/* Main Hero Content Composition */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Category Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-3 sm:mb-5"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#00E5D0] font-semibold">
              Prosthetics &amp; Orthotics
            </span>
          </motion.div>

          {/* Oversized Luxury Art-Directed Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase text-[clamp(29px,8.8vw,48px)] sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[84px] leading-[0.96] tracking-[-0.03em] text-[#F1EFE8]"
          >
            MOVE
            <br />
            <span className="text-[#00E5D0]">
              FORWARD.
            </span>
            <br />
            LIVE
            <br />
            <span className="text-[#F1EFE8]">
              INDEPENDENTLY.
            </span>
          </motion.h1>

          {/* Editorial Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-[#A5AAAB] max-w-md sm:max-w-lg font-normal leading-relaxed"
          >
            Personalized prosthetic and orthotic solutions designed for real life, lasting comfort, and active movement.
          </motion.p>

          {/* Action Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 md:mt-10"
          >
            {/* Primary Framed Outline Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full border border-[#00E5D0]/40 hover:border-[#00E5D0] bg-white/[0.03] hover:bg-[#00E5D0] text-[#F1EFE8] hover:text-[#050607] text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 min-h-[46px] sm:min-h-[48px] cursor-pointer w-full sm:w-auto active:scale-[0.98]"
            >
              <span>Explore our solutions</span>
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

