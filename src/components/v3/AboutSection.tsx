"use client";

import { motion } from "motion/react";
import { GlassPanel } from "@/components/ui/liquid-glass";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";

export function AboutSection() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="about"
      className="relative scroll-mt-[var(--nav-height)] overflow-hidden bg-[var(--bg-dark)] text-[var(--fg-on-dark)]"
    >
      <div className="pattern-diagonal-dark absolute inset-0" aria-hidden />
      <SakuraField density="light" className="opacity-35" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <GlassPanel
          tone="dark"
          radius="2xl"
          className="border border-[var(--border-on-dark)] p-8 md:p-12"
        >
          <p className="type-label section-label-dark">001 — About</p>

          <motion.h2
            className="type-headline mt-6 max-w-2xl md:mt-8"
            {...inView({ opacity: 0, y: 20 })}
          >
            {site.aboutHeading}
          </motion.h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-14">
            {site.aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className={`type-body-lg text-muted-on-dark ${i === 0 ? "measure-prose md:col-span-2 max-w-3xl" : "measure-prose"}`}
                {...inView({ opacity: 0, y: 16 }, 0.06 * i)}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
