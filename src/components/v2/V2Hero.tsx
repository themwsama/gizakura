"use client";

import { motion } from "motion/react";
import { FlowButton } from "@/components/ui/flow-button";
import { EditorialTextLink } from "@/components/ui/editorial-button";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";
import { FrameOverlay } from "./DossierChrome";
import { StarMark } from "./FieldMarks";

export function V2Hero() {
  const { enter } = useMotionSafe();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[var(--bg-hero)]"
    >
      <div className="pattern-diagonal absolute inset-0 opacity-70" aria-hidden />
      <SakuraField density="hero" className="opacity-90" />

      {/* Ghost display layer — depth behind content */}
      <p
        className="pointer-events-none absolute left-1/2 top-[42%] z-[1] w-[120%] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[clamp(5rem,22vw,14rem)] leading-none tracking-[-0.04em] text-[var(--accent)] opacity-[0.12]"
        aria-hidden
      >
        GIZAKURA
      </p>

      {/* Overlapping accent block */}
      <div
        className="pointer-events-none absolute right-[8%] top-[22%] z-[1] hidden h-40 w-28 rotate-[-6deg] border border-[var(--border-strong)] bg-[var(--accent-soft)] md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[18%] left-[6%] z-[1] hidden h-24 w-24 rotate-[8deg] border border-[var(--border)] bg-[var(--bg-card)] opacity-80 md:block"
        aria-hidden
      />

      <FrameOverlay />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-28 pt-36 md:px-10 md:pb-32 md:pt-40">
        <motion.div
          className="flex items-center gap-3"
          {...enter({ opacity: 0, y: 12 })}
          transition={{ duration: 0.5 }}
        >
          <StarMark size={12} variant="light" />
          <p className="type-label text-muted">{site.tagline}</p>
          <StarMark size={12} variant="light" />
        </motion.div>

        <motion.h1
          className="type-display-hero mt-8 tracking-tight text-[var(--fg)]"
          {...enter({ opacity: 0, y: 28 })}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.name}
        </motion.h1>

        {/* Overlapping caption strip */}
        <motion.div
          className="relative mt-8 max-w-lg border border-[var(--border-strong)] bg-[var(--bg-card)] px-5 py-4 md:mt-10 md:-rotate-1"
          {...enter({ opacity: 0, y: 18 })}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <p className="type-body-lg text-muted">{site.heroLine}</p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4 md:mt-12 md:gap-5"
          {...enter({ opacity: 0, y: 14 })}
          transition={{ delay: 0.18, duration: 0.5 }}
        >
          <FlowButton
            href="#about"
            text="Open the dossier"
            variant="primary-glow"
            aria-label="Learn about Gizakura"
          />
          <EditorialTextLink href="#team" muted>
            Meet the founders →
          </EditorialTextLink>
        </motion.div>
      </div>
    </section>
  );
}
