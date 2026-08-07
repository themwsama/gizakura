"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/v2#about", label: "About" },
  { href: "/v2#team", label: "Team" },
  { href: "/v2#portfolio", label: "Portfolio" },
  { href: "/v2#contact", label: "Contact" },
] as const;

export function V2Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[var(--border-on-dark)] bg-[color-mix(in_srgb,var(--bg-dark)_92%,transparent)] backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 md:px-10 md:py-3">
          <Link
            href="/v2"
            className="tap-target -ml-2 flex cursor-pointer items-center gap-2.5 md:-ml-3"
            aria-label={`${site.name} v2 home`}
          >
            <Image
              src="/brand/gizakura-logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 shrink-0 brightness-0 invert md:h-8 md:w-8"
              priority
            />
            <span className="type-brand-nav font-display font-normal text-[var(--fg-on-dark)]">
              {site.name}
            </span>
            <span className="hidden type-label-xs tracking-[0.2em] text-[var(--contact-label)] sm:inline">
              v2
            </span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-0.5 md:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link type-label-nav text-[var(--muted-on-dark)] hover:text-[var(--fg-on-dark)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
