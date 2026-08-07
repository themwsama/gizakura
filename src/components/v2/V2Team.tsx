"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site, team } from "@/data/site";
import { FolderTab } from "./DossierChrome";
import { BarcodeMark, StarMark } from "./FieldMarks";

export function V2Team() {
  const { inView } = useMotionSafe();

  return (
    <section id="team" className="relative overflow-hidden bg-[var(--bg-team)]">
      <div className="pattern-diagonal absolute inset-0 opacity-50" aria-hidden />
      <SakuraField density="light" className="opacity-12" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end gap-1" aria-label="Dossier sections">
          <FolderTab index="001" label="About" href="#about" tone="dark" />
          <FolderTab index="002" label="Team" tone="accent" active />
          <FolderTab index="003" label="Work" href="#portfolio" tone="dark" />
        </div>

        <div className="relative border border-[var(--border)] border-t-0 bg-[var(--bg-card)] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute right-6 top-6 hidden md:block">
            <BarcodeMark variant="light" />
          </div>

          <h2 className="type-headline">The Founders</h2>
          <p className="measure-prose mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.teamIntro}
          </p>

          <div className="mt-12 flex flex-col gap-10 md:gap-14">
            {team.map((member, i) => {
              const flip = i % 2 === 1;
              return (
                <motion.article
                  key={member.id}
                  id={member.id}
                  {...inView({ opacity: 0, y: 28 }, Math.min(i * 0.04, 0.12))}
                  className="relative"
                >
                  {/* Shadow sheet behind */}
                  <div
                    className="absolute inset-0 translate-x-2 translate-y-2 border border-[var(--border)] bg-[var(--bg-soft)]"
                    aria-hidden
                  />

                  <div className="relative grid overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-card)] lg:grid-cols-[minmax(200px,260px)_1fr]">
                    <div
                      className={`relative border-[var(--border)] bg-[var(--bg-soft)] p-6 lg:p-8 ${
                        flip ? "lg:order-2 lg:border-l" : "lg:border-r"
                      } border-b lg:border-b-0`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-display text-4xl tabular-nums text-[var(--accent)] md:text-5xl">
                          {member.index}
                        </p>
                        <StarMark size={14} variant="light" />
                      </div>

                      <div className="relative mt-5 aspect-square w-full max-w-[168px] overflow-hidden border border-[var(--border)] bg-[var(--bg-team)]">
                        {/* Square portrait — overlaps circular v1 habit for denser collage feel */}
                        {member.photoUrl ? (
                          <Image
                            src={member.photoUrl}
                            alt={`Portrait of ${member.name}`}
                            width={360}
                            height={360}
                            loading="lazy"
                            sizes="(max-width: 1024px) 168px, 260px"
                            className="h-full w-full object-cover object-center"
                          />
                        ) : null}
                        {/* Overlapping index chip on photo */}
                        <span className="absolute -bottom-2 -right-2 border border-[var(--border-strong)] bg-[var(--bg-dark)] px-2 py-1 type-label-xs text-[var(--fg-on-dark)]">
                          FILE_{member.index}
                        </span>
                      </div>

                      <h3 className="type-title mt-7">{member.name}</h3>
                      <p className="mt-1 text-sm text-muted">{member.role}</p>
                      <p className="mt-3 text-sm tracking-wide text-muted">{member.location}</p>
                      <a
                        href={member.resumuraiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${member.name} on Resumurai (opens in new tab)`}
                        className="link-muted -ml-3 mt-5 inline-flex underline-offset-4 hover:underline"
                      >
                        View on Resumurai ↗
                      </a>
                    </div>

                    <div className="flex flex-col gap-7 p-6 md:p-10 lg:p-11">
                      <div>
                        <p className="type-label text-faint">Where things are</p>
                        <p className="type-body-lg mt-3">{member.chapter}</p>
                      </div>
                      <div>
                        <p className="type-label text-faint">About</p>
                        <p className="text-safe measure-prose type-body-lg mt-3 max-w-2xl whitespace-pre-line text-muted">
                          {member.about}
                        </p>
                      </div>
                      <div>
                        <p className="type-label text-faint">Passions</p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {member.passions.map((passion) => (
                            <li
                              key={passion}
                              className="border border-[var(--border-strong)] bg-[var(--bg-soft)] px-3 py-1.5 text-sm text-muted"
                            >
                              {passion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
