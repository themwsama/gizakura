"use client";

import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";
import { FolderTab, PaperSheet } from "./DossierChrome";
import { StarMark } from "./FieldMarks";

export function V2About() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg-dark)] text-[var(--fg-on-dark)]"
    >
      <div className="pattern-diagonal-dark absolute inset-0" aria-hidden />
      <SakuraField density="light" className="opacity-35" />

      {/* Stacked folder backs behind the open sheet */}
      <div
        className="pointer-events-none absolute left-[6%] top-16 hidden h-[70%] w-[88%] border border-[var(--border-on-dark)] bg-[color-mix(in_srgb,var(--bg-dark)_60%,#2a2422)] md:block"
        aria-hidden
        style={{ transform: "rotate(-1.2deg) translate(10px, 14px)" }}
      />
      <div
        className="pointer-events-none absolute left-[8%] top-20 hidden h-[66%] w-[84%] border border-[var(--border-on-dark)] bg-[color-mix(in_srgb,var(--bg-dark)_40%,#3a302e)] md:block"
        aria-hidden
        style={{ transform: "rotate(0.8deg) translate(4px, 6px)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end gap-1" aria-label="Dossier sections">
          <FolderTab index="001" label="About" tone="accent" active />
          <FolderTab index="002" label="Team" href="#team" tone="dark" />
          <FolderTab index="003" label="Work" href="#portfolio" tone="dark" />
        </div>

        <PaperSheet className="border-[var(--border-on-dark)] bg-[var(--bg)] p-8 text-[var(--fg)] md:p-12">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="type-label section-label-light">File_01 // Studio</p>
              <motion.h2
                className="type-headline mt-4 max-w-2xl md:mt-6"
                {...inView({ opacity: 0, y: 20 })}
              >
                {site.aboutHeading}
              </motion.h2>
            </div>
            <StarMark size={18} variant="light" className="mt-2 shrink-0 opacity-70" />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
            {site.aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className={`type-body-lg text-muted ${
                  i === 0 ? "measure-prose md:col-span-2 max-w-3xl" : "measure-prose"
                }`}
                {...inView({ opacity: 0, y: 16 }, 0.06 * i)}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Overlapping meta strip */}
          <motion.div
            className="relative z-[1] mt-10 -mb-2 ml-auto w-fit max-w-sm -rotate-1 border border-[var(--border-strong)] bg-[var(--bg-dark)] px-4 py-3 text-[var(--fg-on-dark)] md:mt-12"
            {...inView({ opacity: 0, y: 12 }, 0.12)}
          >
            <p className="type-label-xs text-[var(--contact-label)]">Focus</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--contact-body)]">
              {site.productName} — live product, real users
            </p>
          </motion.div>
        </PaperSheet>
      </div>
    </section>
  );
}
