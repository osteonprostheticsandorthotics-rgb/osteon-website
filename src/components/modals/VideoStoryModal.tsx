"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";

interface VideoStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoStoryModal: React.FC<VideoStoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { time: "00:00", title: "Quiet Preparation", desc: "Mindful moments before the morning fit." },
    { time: "00:45", title: "Precision Fitting", desc: "Sub-millimeter suction socket engagement." },
    { time: "01:20", title: "First Steps", desc: "Weight transfer and neuromuscular harmony." },
    { time: "02:10", title: "Dynamic Cadence", desc: "Effortless pace along city streets." },
    { time: "03:00", title: "Outdoor Freedom", desc: "Summitting Alpine ridge lines with unyielding confidence." },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsPlaying(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#0B1112] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#11191A]/80 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00E5D0] animate-ping" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#00E5D0] font-bold">
                Cinematic Feature Film
              </span>
              <span className="hidden sm:inline text-xs text-[#8E9B9D]">|</span>
              <span className="hidden sm:inline text-xs text-[#F4F7F8] font-medium">
                The Anatomy of Movement • Osteon Film
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8E9B9D] hover:text-[#F4F7F8] hover:bg-white/5 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Display Area */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=85"
            >
              <source src="/osteon-video.mp4" type="video/mp4" />
              <source src="/media/osteon-video.mp4" type="video/mp4" />
            </video>

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* In-Video Story Quote Overlay */}
            <div className="absolute bottom-16 left-6 right-6 md:left-10 md:right-10 pointer-events-none">
              <div className="max-w-xl bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-widest text-[#00E5D0] font-bold block mb-1">
                  Chapter {activeChapter + 1} • {chapters[activeChapter].title}
                </span>
                <p className="text-xs md:text-sm text-[#F4F7F8] leading-relaxed">
                  &ldquo;{chapters[activeChapter].desc}&rdquo;
                </p>
              </div>
            </div>

            {/* Interactive Player Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-[#00E5D0] text-[#05090A] flex items-center justify-center hover:bg-[#0AE3D6] transition-transform hover:scale-105 min-w-[44px] min-h-[44px]"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-white/10 text-[#F4F7F8] hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Progress Scrub Bar */}
              <div className="flex-1 max-w-md hidden sm:block">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden relative cursor-pointer">
                  <div
                    className="bg-[#00E5D0] h-full transition-all duration-300"
                    style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="text-xs font-mono text-[#8E9B9D]">
                {chapters[activeChapter].time} / 03:45
              </div>
            </div>
          </div>

          {/* Chapter Selector Strip */}
          <div className="p-4 md:p-6 bg-[#0B1112] border-t border-white/8 overflow-x-auto no-scrollbar">
            <div className="flex gap-3 min-w-max">
              {chapters.map((chap, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={chap.title}
                    onClick={() => setActiveChapter(idx)}
                    className={`px-4 py-2.5 rounded-xl text-left border transition-all min-h-[44px] flex items-center ${
                      isActive
                        ? "bg-[#00E5D0]/10 border-[#00E5D0] text-[#00E5D0]"
                        : "bg-[#11191A] border-white/5 text-[#8E9B9D] hover:border-white/20 hover:text-[#F4F7F8]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono opacity-60">{chap.time}</span>
                      <span className="text-xs font-semibold">{chap.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
