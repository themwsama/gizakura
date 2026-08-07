import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { V3Nav } from "@/components/v3/V3Nav";
import { V3Footer } from "@/components/v3/V3Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <V3Nav />
      <main
        id="main"
        tabIndex={-1}
        className="relative min-h-[70vh] bg-[var(--bg-team)] px-6 pb-20 pt-28 md:px-10 md:pt-32"
      >
        <div className="pattern-diagonal absolute inset-0 opacity-40" aria-hidden />
        <article className="relative mx-auto max-w-2xl">
          <Link href="/" className="link-muted -ml-3 inline-flex">
            ← Back to {site.name}
          </Link>
          <h1 className="type-headline mt-8">{title}</h1>
          <p className="type-label-nav mt-3 text-faint">Last updated {updated}</p>
          <div className="text-safe mt-10 space-y-5 text-base leading-relaxed text-muted">
            {children}
          </div>
        </article>
      </main>
      <V3Footer />
    </>
  );
}
