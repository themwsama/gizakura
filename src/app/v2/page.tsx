import type { Metadata } from "next";
import { V2Nav } from "@/components/v2/V2Nav";
import { V2Footer } from "@/components/v2/V2Footer";
import { V2Hero } from "@/components/v2/V2Hero";
import { V2About } from "@/components/v2/V2About";
import { V2Team } from "@/components/v2/V2Team";
import { V2Portfolio } from "@/components/v2/V2Portfolio";
import { V2Contact } from "@/components/v2/V2Contact";

export const metadata: Metadata = {
  title: "Gizakura v2",
  description:
    "Layered studio dossier — same Gizakura story, denser editorial craft.",
  robots: { index: false, follow: false },
};

export default function V2HomePage() {
  return (
    <>
      {/*
        THESIS: Studio dossier cascade — the site reads as labeled folders of overlapping paper, not a flat SaaS scroll.
        OWN-WORLD: Sakura pink-cream + Instrument Serif/Figtree, hatch, petals; depth from stacked sheets, tab chrome, mat overlays, geometric field marks.
        STORY: Partners meet the founders and Resumurai as real shipped work, then can email.
        FIRST VIEWPORT: Brand at hero scale, ghost display type, layered frame mat, overlapping caption strip, primary CTA into the dossier.
        FORM: Studio dossier cascade (grounded #3 of 7), seed 96b4c2da.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
      */}
      <V2Nav />
      <main id="main" tabIndex={-1}>
        <V2Hero />
        <V2About />
        <V2Team />
        <V2Portfolio />
        <V2Contact />
      </main>
      <V2Footer />
    </>
  );
}
