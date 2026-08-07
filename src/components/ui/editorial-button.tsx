"use client";

import type { ComponentPropsWithoutRef } from "react";

function joinClasses(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type EditorialOutlineLinkProps = Omit<ComponentPropsWithoutRef<"a">, "children"> & {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

/** Square outline CTA — inverts on hover. No pill shape, no scale, no Lucide. */
export function EditorialOutlineLink({
  href,
  children,
  external,
  className,
  ...rest
}: EditorialOutlineLinkProps) {
  return (
    <a
      href={href}
      className={joinClasses("btn-outline", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {external ? (
        <span className="external-mark" aria-hidden>
          ↗
        </span>
      ) : null}
    </a>
  );
}

type EditorialTextLinkProps = Omit<ComponentPropsWithoutRef<"a">, "children"> & {
  href: string;
  children: React.ReactNode;
  muted?: boolean;
};

/** Primary underlined text link with 44px tap target. */
export function EditorialTextLink({
  href,
  children,
  muted = false,
  className,
  ...rest
}: EditorialTextLinkProps) {
  return (
    <a
      href={href}
      className={joinClasses(muted ? "link-muted" : "link-primary", className)}
      {...rest}
    >
      {children}
    </a>
  );
}
