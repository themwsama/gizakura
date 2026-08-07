"use client";

import { motion } from "motion/react";
import { EditorialTextLink } from "@/components/ui/editorial-button";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";
import { FolderTab } from "./DossierChrome";
import { BarcodeMark, SphereWire, StarMark } from "./FieldMarks";

export function V2Contact() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg-dark)]"
    >
      <div className="pattern-diagonal-dark absolute inset-0 opacity-90" aria-hidden />
      <SakuraField density="light" className="opacity-45" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end gap-1">
          <FolderTab index="004" label="Contact" tone="accent" active />
        </div>

        <div className="relative border border-[var(--border-on-dark)] border-t-0 bg-[color-mix(in_srgb,var(--bg-dark)_70%,#1f1b1a)] px-6 py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute right-6 top-6 flex items-center gap-3 opacity-70 md:right-10 md:top-10">
            <SphereWire size={24} variant="dark" />
            <StarMark size={12} variant="dark" />
          </div>

          <p className="type-label section-label-dark">File_04 // Reach</p>
          <motion.h2
            className="type-headline mt-4 max-w-xl text-[var(--contact-heading)]"
            {...inView({ opacity: 0, y: 18 })}
          >
            {site.contactHeading}
          </motion.h2>
          <motion.p
            className="measure-prose mt-5 max-w-md text-base leading-relaxed text-[var(--contact-body)] md:text-lg"
            {...inView({ opacity: 0, y: 14 }, 0.06)}
          >
            {site.contactLine}
          </motion.p>

          {/* Overlapping contact card */}
          <motion.div
            className="relative mt-12 max-w-md -rotate-1 border border-[var(--border-on-dark)] bg-[var(--bg)] p-6 text-[var(--fg)] md:mt-14 md:p-8"
            {...inView({ opacity: 0, y: 12 }, 0.1)}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="type-label-sm text-faint" style={{ letterSpacing: "0.16em" }}>
                Email
              </p>
              <BarcodeMark variant="light" />
            </div>
            <a
              href={`mailto:${site.email}`}
              className="text-safe mt-2 inline-flex min-h-11 items-center text-xl text-[var(--fg)] underline decoration-[var(--border-strong)] underline-offset-4 hover:decoration-[var(--fg)] md:text-2xl"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gizakura on LinkedIn (opens in new tab)"
              className="link-muted -ml-3 mt-4 inline-flex"
            >
              Company LinkedIn ↗
            </a>
          </motion.div>

          <EditorialTextLink
            href="#top"
            muted
            className="-ml-3 mt-12 text-[var(--contact-body)]"
          >
            Back to top ↑
          </EditorialTextLink>
        </div>
      </div>
    </section>
  );
}
