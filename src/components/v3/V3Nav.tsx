"use client";

import Image from "next/image";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/liquid-glass";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
] as const;

export function V3Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <GlassPanel
        tone="light"
        radius="none"
        className="pattern-diagonal border-b border-[var(--border)]"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 md:px-10 md:py-3">
          <Link
            href="/"
            className="tap-target -ml-2 flex cursor-pointer items-center gap-2.5 md:-ml-3"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/brand/gizakura-logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 shrink-0 md:h-8 md:w-8"
              priority
            />
            <span className="type-brand-nav font-display font-normal">
              {site.name}
            </span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-1 md:gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link type-label-nav"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </GlassPanel>
    </header>
  );
}
