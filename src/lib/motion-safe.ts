"use client";

import { useReducedMotion } from "motion/react";

/** Shared motion props that respect prefers-reduced-motion. */
export function useMotionSafe() {
  const reduceMotion = useReducedMotion() ?? false;

  return {
    reduceMotion,
    enter(initial: { opacity?: number; y?: number } = { opacity: 0, y: 16 }) {
      if (reduceMotion) return { initial: false as const };
      return {
        initial,
        animate: { opacity: 1, y: 0 },
      };
    },
    inView(
      initial: { opacity?: number; y?: number } = { opacity: 0, y: 20 },
      delay = 0,
    ) {
      if (reduceMotion) return { initial: false as const };
      return {
        initial,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-8%" as const },
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
      };
    },
  };
}
