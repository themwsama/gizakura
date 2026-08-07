import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function V2Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-dark)] text-[var(--fg-on-dark)]">
      <div className="pattern-diagonal-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/gizakura-logo.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 opacity-90 brightness-0 invert"
              aria-hidden
            />
            <p className="type-title">{site.name}</p>
            <span className="type-label-xs tracking-[0.2em] text-[var(--contact-label)]">
              v2
            </span>
          </div>
          <p className="measure-prose mt-3 max-w-sm text-sm leading-relaxed text-muted-on-dark">
            {site.tagline}.
          </p>
          <Link
            href="/"
            className="tap-target footer-link -ml-3 mt-4 inline-flex text-sm text-[var(--contact-body)]"
          >
            ← Current site (v1)
          </Link>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
          <div>
            <p className="type-label-sm text-muted-on-dark">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="tap-target footer-link -ml-3 mt-1 inline-flex text-sm"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="type-label-sm text-muted-on-dark">LinkedIn</p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gizakura on LinkedIn (opens in new tab)"
              className="tap-target footer-link -ml-3 mt-1 inline-flex text-sm"
            >
              Company page
            </a>
          </div>
          <div>
            <p className="type-label-sm text-muted-on-dark">Legal</p>
            <div className="mt-1 flex flex-col gap-1 text-sm">
              <Link
                href="/privacy"
                className="tap-target footer-link -ml-3 inline-flex"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="tap-target footer-link -ml-3 inline-flex"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-[var(--border-on-dark)] px-6 py-4 text-center text-xs text-muted-on-dark md:px-10">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
        {" · "}
        <Link
          href="/privacy"
          className="tap-target footer-link inline-flex underline underline-offset-2"
        >
          Privacy
        </Link>
        {" · "}
        <Link
          href="/terms"
          className="tap-target footer-link inline-flex underline underline-offset-2"
        >
          Terms
        </Link>
      </div>
    </footer>
  );
}
