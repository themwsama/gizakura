"use client";

import { motion } from "motion/react";
import { FlowButton } from "@/components/ui/flow-button";
import { EditorialTextLink } from "@/components/ui/editorial-button";
import { GlassPanel } from "@/components/ui/liquid-glass";
import { ShaderBackground } from "@/components/ui/rds-silk";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";

/**
 * Editorial hero with ghost wordmark + copy panel.
 */
export function HeroSection() {
  const { enter, reduceMotion } = useMotionSafe();

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-[var(--bg-hero)]"
    >
      <ShaderBackground className="absolute inset-0 z-0" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[color-mix(in_srgb,var(--bg-hero)_55%,transparent)]"
        aria-hidden
      />
      <div className="pattern-diagonal absolute inset-0 z-[1] opacity-30" aria-hidden />
      <SakuraField density="hero" className="z-[2]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 pb-14 pt-[var(--nav-height)] md:px-10 md:pb-16">
        <motion.div
          className="flex items-center gap-3"
          {...enter({ opacity: 0, y: 12 })}
          transition={{ duration: 0.5 }}
        >
          <span
            className="h-px w-8 bg-[var(--border-strong)]"
            aria-hidden
          />
          <p className="type-label text-muted">{site.tagline}</p>
        </motion.div>

        <div className="relative mt-8 isolate">
          <motion.p
            className="pointer-events-none absolute -left-[2%] top-[-12%] z-0 select-none font-display text-[clamp(5rem,18vw,11rem)] leading-[0.85] tracking-[-0.03em] text-[var(--accent)]"
            style={{ opacity: 0.16 }}
            aria-hidden
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 0.16, y: 0 },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                })}
          >
            {site.name}
          </motion.p>
          <motion.h1
            className="relative z-[1] type-display-hero tracking-tight text-[var(--fg)]"
            {...enter({ opacity: 0, y: 28 })}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}
          </motion.h1>
        </div>

        <motion.div
          className="mt-8 max-w-xl md:mt-10"
          {...enter({ opacity: 0, y: 18 })}
          transition={{ delay: 0.08, duration: 0.55 }}
        >
          <GlassPanel
            tone="light"
            radius="2xl"
            className="border border-[var(--border)] p-6 md:p-8"
          >
            <p className="type-body-lg measure-prose font-medium text-[var(--fg)]">
              {site.heroLine}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-5">
              <FlowButton
                href="#about"
                text="About the studio"
                variant="primary-glow"
                aria-label="Learn about Gizakura"
              />
              <EditorialTextLink href="#team" muted>
                Meet the founders →
              </EditorialTextLink>
            </div>
          </GlassPanel>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-8"
        {...enter({ opacity: 0, y: 0 })}
        transition={{ delay: 0.6, duration: 0.6 }}
        aria-hidden
      >
        <span className="h-8 w-px bg-[var(--border-strong)]" />
        <span className="type-label-xs text-faint">Scroll</span>
      </motion.div>
    </section>
  );
}
