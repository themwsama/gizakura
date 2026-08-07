"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

type Petal = {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
  rotate: number;
};

function makePetals(count: number, seed: number, staticLayout = false): Petal[] {
  const petals: Petal[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  for (let i = 0; i < count; i++) {
    petals.push({
      id: i,
      left: `${rand() * 100}%`,
      top: staticLayout ? `${10 + rand() * 80}%` : "0%",
      size: 6 + rand() * 14,
      delay: rand() * 8,
      duration: 10 + rand() * 14,
      drift: (rand() - 0.5) * 120,
      opacity: 0.25 + rand() * 0.45,
      rotate: rand() * 360,
    });
  }
  return petals;
}

const petalGradient = {
  hero: "var(--sakura-petal-hero)",
  light: "var(--sakura-petal-light)",
} as const;

export function SakuraField({
  density = "hero",
  className = "",
}: {
  density?: "hero" | "light";
  className?: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const count = density === "hero" ? (reduceMotion ? 6 : 12) : reduceMotion ? 3 : 4;
  const petals = useMemo(
    () => makePetals(count, density === "hero" ? 42 : 7, reduceMotion),
    [count, density, reduceMotion],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {petals.map((p) =>
        reduceMotion ? (
          <span
            key={p.id}
            className="absolute block"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size * 0.72,
              opacity: p.opacity * 0.85,
              rotate: `${p.rotate}deg`,
              borderRadius: "70% 10% 60% 20%",
              background: petalGradient[density],
            }}
          />
        ) : (
          <motion.span
            key={p.id}
            className="absolute top-[-10%] block"
            style={{
              left: p.left,
              width: p.size,
              height: p.size * 0.72,
              opacity: p.opacity,
              borderRadius: "70% 10% 60% 20%",
              background: petalGradient[density],
              filter: density === "hero" ? "blur(0.2px)" : "blur(0.6px)",
            }}
            initial={{
              y: "-10vh",
              x: 0,
              rotate: p.rotate,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              x: [0, p.drift * 0.4, p.drift],
              rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
              opacity: [0, p.opacity, p.opacity * 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ),
      )}
    </div>
  );
}
