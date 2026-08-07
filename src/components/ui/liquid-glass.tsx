"use client";

import Link from "next/link";
import { useReducedMotion } from "motion/react";
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

export type GlassTone = "light" | "dark" | "accent";
export type GlassRadius = "none" | "md" | "lg" | "xl" | "2xl" | "3xl";

const radiusClass: Record<GlassRadius, string> = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

const toneTint: Record<GlassTone, string> = {
  light: "var(--glass-tint-light)",
  dark: "var(--glass-tint-dark)",
  accent: "var(--glass-tint-accent)",
};

const toneHighlight: Record<GlassTone, string> = {
  light: "var(--glass-highlight-light)",
  dark: "var(--glass-highlight-dark)",
  accent: "var(--glass-highlight-accent)",
};

type GlassPanelProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  tone?: GlassTone;
  radius?: GlassRadius;
  interactive?: boolean;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

/** SVG displacement filter — mount once near document root. */
export function GlassFilter() {
  return (
    <svg
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      aria-hidden
    >
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.004"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="2.5" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="4"
          specularConstant="0.85"
          specularExponent="80"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-180" y="-180" z="260" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="120"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

/** Primary liquid-glass surface — editorial tones, optional link wrapper. */
export function GlassPanel({
  children,
  className = "",
  style = {},
  tone = "light",
  radius = "xl",
  interactive = false,
  href,
  external,
  ariaLabel,
  ...rest
}: GlassPanelProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const rounded = radiusClass[radius];

  const shellStyle: CSSProperties = {
    boxShadow: "var(--glass-shadow)",
    transitionTimingFunction: "var(--glass-ease)",
    ...style,
  };

  const inner = (
    <div
      className={`relative overflow-hidden ${rounded} ${
        interactive && !reduceMotion
          ? "transition-all duration-700 hover:scale-[1.015]"
          : ""
      } ${className}`}
      style={shellStyle}
      {...rest}
    >
      <div
        className={`absolute inset-0 z-0 overflow-hidden ${rounded}`}
        style={{
          backdropFilter: "blur(var(--glass-blur))",
          WebkitBackdropFilter: "blur(var(--glass-blur))",
          filter: reduceMotion ? undefined : "url(#glass-distortion)",
          isolation: "isolate",
        }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 z-10 ${rounded}`}
        style={{ background: toneTint[tone] }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 z-20 overflow-hidden ${rounded}`}
        style={{ boxShadow: toneHighlight[tone] }}
        aria-hidden
      />
      <div className="relative z-30">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={ariaLabel}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

/** Compact pill-shaped glass control. */
export function GlassButton({
  children,
  href,
  external,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  tone?: GlassTone;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <GlassPanel
      href={href}
      external={external}
      tone={tone}
      radius="3xl"
      interactive={!reduceMotion}
      className={`inline-flex min-h-11 items-center justify-center px-8 py-3.5 font-medium ${className}`}
    >
      <span
        className={
          reduceMotion ? undefined : "transition-transform duration-700 hover:scale-[0.98]"
        }
        style={{ transitionTimingFunction: "var(--glass-ease)" }}
      >
        {children}
      </span>
    </GlassPanel>
  );
}

/** Ambient glass shape for hero depth — decorative only. */
export function GlassOrb({
  className = "",
  tone = "light",
  size = "md",
}: {
  className?: string;
  tone?: GlassTone;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-24 w-32",
    md: "h-36 w-48",
    lg: "h-52 w-64",
  };

  return (
    <GlassPanel
      tone={tone}
      radius="2xl"
      aria-hidden
      className={`pointer-events-none ${sizes[size]} ${className}`}
    />
  );
}
