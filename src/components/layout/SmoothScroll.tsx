"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

/**
 * Detects if the primary input is touch-only (mobile/tablet).
 * On these devices, native momentum scroll is superior — we disable
 * Lenis smooth-wheel hijacking while still keeping Lenis alive for
 * programmatic scrollTo() calls used by the navbar.
 */
function isTouchOnlyDevice(): boolean {
  if (typeof window === "undefined") return false;
  const isTouchQuery = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
  const hasTouchPoints = typeof navigator !== "undefined" && (navigator.maxTouchPoints > 0 || ((navigator as unknown as { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0) > 0);
  const isTouchEvent = "ontouchstart" in window;
  return Boolean(isTouchQuery || hasTouchPoints || isTouchEvent);
}

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const touchOnly = isTouchOnlyDevice();

    const lenis = new Lenis({
      duration: touchOnly ? 0.6 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Disable smooth wheel on touch-only to let native momentum scroll work
      smoothWheel: !touchOnly,
      wheelMultiplier: 0.9,
      // Lower touch multiplier to feel more natural on mobile
      touchMultiplier: touchOnly ? 1.0 : 1.5,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
