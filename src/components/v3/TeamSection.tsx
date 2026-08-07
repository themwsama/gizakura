"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GlassPanel } from "@/components/ui/liquid-glass";
import { SakuraField } from "@/components/v3/SakuraField";
import { useMotionSafe } from "@/lib/motion-safe";
import { site, team } from "@/data/site";

export function TeamSection() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="team"
      className="relative scroll-mt-[var(--nav-height)] overflow-hidden bg-[var(--bg-team)]"
    >
      <div className="pattern-diagonal absolute inset-0 opacity-55" aria-hidden />
      <SakuraField density="light" className="opacity-12" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <p className="type-label section-label-light">002 — Team</p>
        <h2 className="type-headline mt-4">The Founders</h2>
        <p className="measure-prose mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {site.teamIntro}
        </p>

        <div className="mt-14 flex flex-col gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.article
              key={member.id}
              id={member.id}
              {...inView({ opacity: 0, y: 28 }, Math.min(i * 0.04, 0.12))}
            >
              <GlassPanel
                tone="light"
                radius="xl"
                interactive
                className="overflow-hidden border border-[var(--border)]"
              >
                <div className="grid min-w-0 lg:grid-cols-[minmax(200px,280px)_1fr]">
                  <div className="relative border-b border-[var(--border)] bg-[var(--bg-soft)] p-6 lg:border-b-0 lg:border-r lg:p-8">
                    <p className="font-display text-4xl tabular-nums text-[var(--accent)] opacity-90 md:text-5xl">
                      {member.index}
                    </p>
                    <div className="relative mt-5 aspect-square w-full max-w-[180px] overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-team)]">
                      {member.photoUrl ? (
                        <Image
                          src={member.photoUrl}
                          alt={`Portrait of ${member.name}`}
                          width={360}
                          height={360}
                          loading="lazy"
                          sizes="(max-width: 1024px) 180px, 280px"
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <>
                          <div className="pattern-waves absolute inset-0 opacity-60" aria-hidden />
                          <span className="type-label-sm text-faint absolute inset-0 flex items-center justify-center tracking-[0.16em]">
                            Photo
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="type-title mt-5">{member.name}</h3>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                    <p className="mt-3 text-sm tracking-wide text-muted md:text-base">
                      {member.location}
                    </p>
                    <a
                      href={member.resumuraiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${member.name} on Resumurai (opens in new tab)`}
                      className="link-muted -ml-3 mt-6 inline-flex underline-offset-4 hover:underline"
                    >
                      View on Resumurai ↗
                    </a>
                  </div>

                  <div className="flex flex-col gap-8 p-6 md:p-10 lg:p-12">
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
                      <ul className="mt-4 flex flex-col gap-3">
                        {member.passions.map((passion) => (
                          <li
                            key={passion}
                            className="flex gap-3 text-base leading-relaxed"
                          >
                            <span
                              className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                              aria-hidden
                            />
                            <span className="text-muted">{passion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
