import type { ReactNode } from "react";
import { BarcodeMark, RulerEdge, SphereWire, StarMark } from "./FieldMarks";

/** Dark mat overlay with notched cutouts — layered frame from the exhibition-mat cue. */
export function FrameOverlay({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[2] ${className}`}
      aria-hidden
    >
      {/* Top mat */}
      <div className="absolute inset-x-0 top-0 h-[min(18vh,9rem)] bg-[color-mix(in_srgb,var(--bg-dark)_88%,transparent)]">
        <div
          className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[18px] border-t-[14px] border-x-transparent border-t-[color-mix(in_srgb,var(--bg-dark)_88%,transparent)]"
          style={{ filter: "drop-shadow(0 1px 0 rgba(248,236,232,0.08))" }}
        />
        <div className="absolute left-4 top-3 md:left-8 md:top-4">
          <SphereWire size={22} variant="dark" />
        </div>
        <div className="absolute right-4 top-3 md:right-8 md:top-4">
          <SphereWire size={22} variant="dark" />
        </div>
        <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-3">
          <StarMark size={10} variant="dark" />
          <span className="type-label-xs tracking-[0.28em] text-[var(--contact-label)]">
            Studio folio
          </span>
          <StarMark size={10} variant="dark" />
        </div>
      </div>

      {/* Side rulers */}
      <RulerEdge
        vertical
        variant="dark"
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 opacity-70 md:block"
      />
      <RulerEdge
        vertical
        variant="dark"
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 opacity-70 md:block"
      />

      {/* Bottom mat */}
      <div className="absolute inset-x-0 bottom-0 h-[min(14vh,7rem)] bg-[color-mix(in_srgb,var(--bg-dark)_88%,transparent)]">
        <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[18px] border-b-[14px] border-x-transparent border-b-[color-mix(in_srgb,var(--bg-dark)_88%,transparent)]" />
        <div className="absolute bottom-4 left-4 md:left-8">
          <BarcodeMark variant="dark" />
        </div>
        <div className="absolute bottom-4 right-4 md:right-8">
          <BarcodeMark variant="dark" />
        </div>
      </div>

      {children}
    </div>
  );
}

/** Folder tab label strip — dossier topology. */
export function FolderTab({
  index,
  label,
  href,
  active = false,
  tone = "light",
}: {
  index: string;
  label: string;
  href?: string;
  active?: boolean;
  tone?: "light" | "dark" | "accent";
}) {
  const surfaces = {
    light: "bg-[var(--bg-card)] text-[var(--fg)] border-[var(--border-strong)]",
    dark: "bg-[var(--bg-soft)] text-[var(--fg)] border-[var(--border)]",
    accent: "bg-[var(--accent)] text-[var(--accent-ink)] border-[var(--accent)]",
  } as const;

  const className = `inline-flex min-h-11 items-end border border-b-0 px-4 py-2 ${surfaces[tone]} ${
    active ? "relative z-[1]" : "opacity-80 hover:opacity-100"
  }`;

  const style = {
    clipPath: "polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 0 100%)",
    marginBottom: "-1px",
  } as const;

  const inner = (
    <>
      <span className="type-label-xs tabular-nums opacity-70">{index}</span>
      <span className="type-label-sm ml-2 tracking-[0.18em]">{label}</span>
    </>
  );

  if (href && !active) {
    return (
      <a href={href} className={className} style={style} aria-label={`Go to ${label}`}>
        {inner}
      </a>
    );
  }

  return (
    <div className={className} style={style} aria-current={active ? "true" : undefined}>
      {inner}
    </div>
  );
}

/** Overlapping paper panel used as the dossier sheet. */
export function PaperSheet({
  children,
  className = "",
  offset = "none",
}: {
  children: ReactNode;
  className?: string;
  offset?: "none" | "back" | "front";
}) {
  const offsetClass =
    offset === "back"
      ? "translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3"
      : offset === "front"
        ? "-translate-x-1 -translate-y-1 md:-translate-x-2 md:-translate-y-2"
        : "";

  return (
    <div
      className={`relative border border-[var(--border)] bg-[var(--bg-card)] ${offsetClass} ${className}`}
    >
      {children}
    </div>
  );
}
