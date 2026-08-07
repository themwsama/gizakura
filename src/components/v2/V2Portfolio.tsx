"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FlowButton } from "@/components/ui/flow-button";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";
import { FolderTab, PaperSheet } from "./DossierChrome";
import { BarcodeMark, SphereWire, StarMark } from "./FieldMarks";

export function V2Portfolio() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[var(--bg-portfolio)]"
    >
      <div className="pattern-diagonal absolute inset-0 opacity-65" aria-hidden />
      <SakuraField density="light" className="opacity-15" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end gap-1" aria-label="Dossier sections">
          <FolderTab index="001" label="About" href="#about" tone="dark" />
          <FolderTab index="002" label="Team" href="#team" tone="dark" />
          <FolderTab index="003" label="Work" tone="accent" active />
        </div>

        <div className="relative border border-[var(--border)] border-t-0 bg-[var(--bg-card)] px-6 py-10 md:px-12 md:py-14">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="type-headline">Our Products</h2>
              <p className="measure-prose mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {site.portfolioIntro}
              </p>
            </div>
            <SphereWire size={32} variant="light" className="mt-1 shrink-0 opacity-60" />
          </div>

          <div className="relative mt-12">
            {/* Back sheet */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 border border-[var(--border)] bg-[var(--bg-soft)]"
              aria-hidden
            />

            <motion.article
              className="relative overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-card)]"
              {...inView({ opacity: 0, y: 24 })}
            >
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <div className="flex items-center gap-2">
                      <StarMark size={12} variant="light" />
                      <p className="type-label-xs text-faint">Live product</p>
                    </div>
                    <h3 className="type-headline mt-4 text-3xl md:text-4xl">
                      {site.productName}
                    </h3>
                    <p className="measure-prose mt-5 max-w-md text-base leading-relaxed text-muted">
                      {site.productBlurb}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {site.productTags.map((tag) => (
                        <li key={tag} className="tag-chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10">
                    <FlowButton
                      href={site.productUrl}
                      external
                      text={`Visit ${site.productName}`}
                      aria-label={`Visit ${site.productName} (opens in new tab)`}
                    />
                  </div>
                </div>

                <div className="relative min-h-[240px] bg-[var(--bg-dark)] lg:min-h-[360px]">
                  <div className="pattern-diagonal-dark absolute inset-0" aria-hidden />
                  {/* Overlapping corner marks */}
                  <div className="absolute left-4 top-4">
                    <BarcodeMark variant="dark" />
                  </div>
                  <div className="absolute right-4 top-4">
                    <StarMark size={14} variant="dark" />
                  </div>
                  <div className="relative flex h-full min-h-[240px] flex-col items-center justify-center gap-5 p-10 lg:min-h-[360px]">
                    <Image
                      src={site.productLogo}
                      alt={`${site.productName} logo`}
                      width={312}
                      height={380}
                      className="h-auto w-52 object-contain md:w-64 lg:w-72"
                    />
                    <p className="type-label-xs text-muted-on-dark">
                      {site.productUrl.replace(/^https?:\/\/(www\.)?/, "")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          <motion.div
            className="relative mt-10"
            {...inView({ opacity: 0, y: 16 }, 0.08)}
          >
            <PaperSheet
              offset="back"
              className="absolute inset-0 border-dashed bg-transparent"
            >
              <span className="sr-only">Coming soon backdrop</span>
            </PaperSheet>
            <div className="relative border border-dashed border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--bg-card)_85%,transparent)] px-6 py-10 md:px-10">
              <div className="flex items-start justify-between gap-4">
                <p className="type-label-sm text-faint">Coming soon</p>
                <p className="type-label-sm text-faint">In development</p>
              </div>
              <p className="type-title mt-6 text-muted">{site.comingSoonLabel}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
