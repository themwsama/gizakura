"use client";

import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";

type FlowButtonVariant = "default" | "on-dark" | "primary-glow";

type FlowButtonBaseProps = {
  text?: string;
  variant?: FlowButtonVariant;
  className?: string;
};

type FlowButtonAsButton = FlowButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof FlowButtonBaseProps | "children"> & {
    href?: undefined;
  };

type FlowButtonAsLink = FlowButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof FlowButtonBaseProps | "children"> & {
    href: string;
    external?: boolean;
  };

export type FlowButtonProps = FlowButtonAsButton | FlowButtonAsLink;

const variantStyle: Record<FlowButtonVariant, CSSProperties> = {
  default: {
    ["--flow-fg" as string]: "var(--fg)",
    ["--flow-fill" as string]: "var(--fg)",
    ["--flow-hover-text" as string]: "var(--bg-card)",
    ["--flow-border" as string]: "color-mix(in srgb, var(--fg) 40%, transparent)",
    ["--flow-glow" as string]: "transparent",
  },
  "on-dark": {
    ["--flow-fg" as string]: "var(--fg-on-dark)",
    ["--flow-fill" as string]: "var(--accent)",
    ["--flow-hover-text" as string]: "var(--accent-ink)",
    ["--flow-border" as string]: "color-mix(in srgb, var(--fg-on-dark) 45%, transparent)",
    ["--flow-glow" as string]: "transparent",
  },
  "primary-glow": {
    ["--flow-fg" as string]: "var(--accent-ink)",
    ["--flow-fill" as string]: "var(--accent)",
    ["--flow-hover-text" as string]: "var(--accent-ink)",
    ["--flow-border" as string]: "color-mix(in srgb, var(--accent) 65%, transparent)",
    ["--flow-glow" as string]: "rgba(196, 92, 106, 0.45)",
  },
};

function joinClasses(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const arrowClass =
  "h-4 w-4 shrink-0 stroke-[var(--flow-fg)] transition-colors duration-200 group-hover:stroke-[var(--flow-hover-text)]";

export function FlowButton({
  text = "Modern Button",
  variant = "default",
  className,
  ...rest
}: FlowButtonProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const isGlow = variant === "primary-glow";

  const sharedClass = joinClasses(
    "group relative inline-flex min-h-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1.5px] px-8 py-4 text-sm font-medium",
    isGlow
      ? "border-[var(--flow-border)] bg-[var(--flow-fill)] text-[var(--flow-fg)] shadow-[0_4px_14px_rgba(196,92,106,0.25)] transition-[box-shadow,opacity,transform] duration-200 ease-out hover:shadow-[0_4px_24px_var(--flow-glow),0_0_48px_rgba(196,92,106,0.18)]"
      : "border-[var(--flow-border)] bg-transparent text-[var(--flow-fg)]",
    !isGlow &&
      (reduceMotion
        ? "rounded-xl transition-colors duration-200 hover:border-transparent hover:bg-[var(--flow-fill)] hover:text-[var(--flow-hover-text)]"
        : "transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-[var(--flow-hover-text)] hover:rounded-xl active:scale-[0.98]"),
    className,
  );

  const content =
    isGlow || reduceMotion ? (
      <span className="relative z-[1] inline-flex items-center gap-2">
        <span className="whitespace-nowrap">{text}</span>
        <ArrowRight className={arrowClass} aria-hidden />
      </span>
    ) : (
      <>
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--flow-fill)] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100"
        />

        <span className="relative z-[1] inline-flex items-center gap-2 transition-[gap] duration-700 ease-out group-hover:gap-2.5">
          <span
            aria-hidden
            className="inline-flex w-0 overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-4 group-hover:opacity-100"
          >
            <ArrowRight className={arrowClass} />
          </span>

          <span className="whitespace-nowrap">{text}</span>

          <span
            aria-hidden
            className="inline-flex w-4 overflow-hidden opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-0 group-hover:opacity-0"
          >
            <ArrowRight className={arrowClass} />
          </span>
        </span>
      </>
    );

  const style = variantStyle[variant];

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorProps } = rest;
    return (
      <a
        href={href}
        className={sharedClass}
        style={style}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as FlowButtonAsButton;
  return (
    <button type={type} className={sharedClass} style={style} {...buttonProps}>
      {content}
    </button>
  );
}
