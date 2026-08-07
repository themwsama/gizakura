---
name: Gizakura
description: Sakura pink-cream editorial studio site — Instrument Serif + Figtree, hatch patterns, numbered sections.
colors:
  bg: "#f8ece8"
  bg-hero: "#f9e9e5"
  bg-team: "#faf8f6"
  bg-portfolio: "#e8e4dc"
  bg-soft: "#f0ebe6"
  bg-card: "#ffffff"
  bg-dark: "#141312"
  fg: "#1a1917"
  fg-on-dark: "#f8ece8"
  muted: "#6d6561"
  muted-on-dark: "#a8a098"
  faint: "#78716c"
  accent: "#c45c6a"
  accent-soft: "rgba(196, 92, 106, 0.14)"
  accent-ink: "#ffffff"
  border: "rgba(26, 25, 23, 0.12)"
  border-strong: "rgba(26, 25, 23, 0.18)"
  border-on-dark: "rgba(248, 236, 232, 0.14)"
  nav-glass: "rgba(249, 233, 229, 0.9)"
  contact-label: "#c98a94"
  contact-heading: "#f2c8cf"
  contact-body: "#d9a8b0"
  contact-link: "#f0d0d5"
  pattern-ink: "rgba(26, 25, 23, 0.035)"
  pattern-ink-mid: "rgba(26, 25, 23, 0.045)"
  pattern-ink-dark: "rgba(248, 236, 232, 0.055)"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(4.25rem, 16vw, 9.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.25
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.22em"
  label-nav:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
  label-sm:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.18em"
  label-xs:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.6rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.2em"
  body-lg:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  body-lg-md:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  brand-nav:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  brand-nav-md:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  ui-sm:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0"
  full: "9999px"
spacing:
  section-y: "4rem"
  section-y-md: "6rem"
  section-x: "1.5rem"
  section-x-md: "2.5rem"
  container-max: "72rem"
components:
  link-primary:
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    padding: "0.5rem 0.75rem"
  link-muted:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: "0.5rem 0.75rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    padding: "0.625rem 1.25rem"
  button-outline-hover:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.bg-card}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0.625rem 0.5rem"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0.25rem 0.75rem"
---

# Design System: Gizakura

## Overview

**Creative North Star: "Late-Spring Editorial"**

Gizakura reads like a printed studio folio translated to the web — warm pink-cream grounds, Instrument Serif headlines with editorial restraint, and intermittent diagonal hatch texture instead of glossy UI chrome. Each scroll section shifts tonal register (hero blush, dark about band, neutral team, stone portfolio, ink contact) so depth comes from paper-like layering rather than shadows. Sakura petals drift through hero and section backgrounds as ambient motion; section order is announced with numbered labels (001–004).

The system favors honest, student-founder craft: square-bordered cards, text-first CTAs, and no invented polish. Partners and press should feel they are reading a real studio's materials, not a template.

**Key Characteristics:**
- Pink-cream tonal sections with `--bg-*` per scroll band
- Instrument Serif display + Figtree body via `next/font`
- Diagonal hatch patterns (`.pattern-diagonal`, `.pattern-diagonal-dark`) at varied opacity
- Section numbering `001 — About` through `004 — Contact`
- Sakura petal ambient motion with `prefers-reduced-motion` fallbacks
- Flat surfaces — borders and tone, not box shadows
- 44px minimum tap targets and accent focus rings

## Colors

Warm sakura editorial palette: blush grounds, ink-dark bands, rose accent used sparingly for emphasis and selection.

### Primary
- **Sakura Rose** (`#c45c6a`): Accent for founder index numbers, passion bullet dots, text selection background, and keyboard focus rings. Rare enough to signal emphasis without dominating any section.

### Secondary
- **Accent Soft Wash** (`rgba(196, 92, 106, 0.14)`): Defined for subtle accent fills; available for future chip/background use.

### Tertiary
- **Contact Rose Ramp** (`--contact-label` `#c98a94`, `--contact-heading` `#f2c8cf`, `--contact-body` `#d9a8b0`, `--contact-link` `#f0d0d5`): Dedicated lighter rose tones for the dark contact section — labels, heading, body copy, and email link maintain AA contrast on `--bg-dark`.

### Neutral
- **Blush Ground** (`#f8ece8`): Default body background (`--bg`).
- **Hero Blush** (`#f9e9e5`): Hero section fill (`--bg-hero`); also base for nav glass tint.
- **Warm Paper** (`#faf8f6`): Team section and legal pages (`--bg-team`).
- **Stone Portfolio** (`#e8e4dc`): Portfolio section ground (`--bg-portfolio`).
- **Soft Panel** (`#f0ebe6`): Team card sidebar fill (`--bg-soft`).
- **Card White** (`#ffffff`): Elevated card surfaces on light sections (`--bg-card`).
- **Ink Dark** (`#141312`): About, contact, footer, and portfolio preview panel (`--bg-dark`).
- **Ink Text** (`#1a1917`): Primary foreground on light surfaces (`--fg`).
- **Cream on Dark** (`#f8ece8`): Primary text on dark surfaces (`--fg-on-dark`).
- **Warm Muted** (`#6d6561`): Secondary body copy on light surfaces (`--muted`).
- **Ash on Dark** (`#a8a098`): Secondary copy on dark surfaces (`--muted-on-dark`).
- **Faint Label** (`#78716c`): Section labels and de-emphasized text on light surfaces (`--faint`); audit-darkened for contrast).
- **Border Light** (`rgba(26, 25, 23, 0.12)`): Card and divider strokes (`--border`).
- **Border Strong** (`rgba(26, 25, 23, 0.18)`): Hero rule lines, tag borders, dashed placeholders (`--border-strong`).
- **Border on Dark** (`rgba(248, 236, 232, 0.14)`): Footer divider on dark ground (`--border-on-dark`).
- **Nav Glass** (`rgba(249, 233, 229, 0.9)`): Fixed header background with backdrop blur.
- **Pattern Ink** (`rgba(26, 25, 23, 0.035–0.045)` / `rgba(248, 236, 232, 0.055)`): Hatch stroke colors for light and dark patterns.

### Named Rules
**The Tonal Section Rule.** Each major scroll section uses its own `--bg-*` token. Do not flatten the page to a single background — the register shift is the rhythm.

**The Accent Sparingly Rule.** Sakura rose appears on focus rings, selection, founder indices, and small bullet dots — not as primary button fills or large fields.

## Typography

**Display Font:** Instrument Serif (Georgia fallback) — loaded via `next/font/google`, weight 400, normal and italic styles available.

**Body Font:** Figtree (sans-serif fallback) — applied to `body` via `next/font`; all non-display text inherits it.

**Character:** Editorial serif headlines with generous tracking-tight display sizing against clean geometric sans body copy. Labels use small caps rhythm (uppercase + wide letter-spacing) without a separate label font.

### Hierarchy
- **Display** (400, `clamp(4.25rem, 16vw, 9.5rem)`, line-height 0.9): Hero wordmark only (`site.name`).
- **Headline** (400, `text-3xl` / `md:text-5xl`, leading tight): Section titles (`h2`) and contact heading.
- **Title** (400, `text-2xl`–`text-4xl`): Card titles, founder names, product names.
- **Body** (400, `text-base` / `md:text-lg`, leading relaxed or 1.75): Paragraphs; cap readable width around `max-w-xl`–`max-w-3xl`.
- **Label** (400, `0.65rem`–`0.7rem`, uppercase, tracking `0.16em`–`0.22em`): Section numbers (`001 — About`), field labels, footer column headers.

### Named Rules
**The Display Restraint Rule.** Instrument Serif carries headlines and names; body copy, nav, and labels stay in Figtree. Do not set long paragraphs in the display face.

**The Section Number Rule.** Main scroll sections use the `NNN — Title` label format (001–004). This is the canonical section opener — not decorative kickers elsewhere.

## Layout

Single-page anchor layout with fixed glass nav. Content containers center at `max-w-6xl` (72rem) for hero, about, portfolio, and contact; team narrows to `max-w-5xl`; legal pages use `max-w-2xl`.

Horizontal padding: `px-6` (1.5rem) mobile, `md:px-10` (2.5rem) desktop. Section vertical rhythm: `py-16` / `md:py-24` (4rem / 6rem); contact uses slightly taller `py-20` / `md:py-28`.

Hero fills `min-h-[100svh]` with centered content and bottom scroll cue. Team and portfolio cards use CSS grid: team cards `lg:grid-cols-[minmax(200px,280px)_1fr]`; portfolio split `lg:grid-cols-2`.

Tailwind breakpoints in use: `sm` (640px) for footer column layout; `md` (768px) for type scale and padding; `lg` (1024px) for card grid splits.

## Elevation & Depth

This system is flat by design. No `box-shadow` tokens appear anywhere in the shipped v3 surface. Depth is conveyed through:

1. **Tonal section backgrounds** — each band shifts hue/value.
2. **1px borders** — cards and containers use `--border` strokes on `--bg-card` white.
3. **Pattern overlays** — diagonal hatch at 40–90% opacity sits behind content.
4. **Dark/light inversion** — about and contact sections flip to `--bg-dark` with cream text.
5. **Nav glass** — `backdrop-filter: blur(12px)` on `--nav-glass` tints the fixed header.

### Named Rules
**The Flat Surface Rule.** Do not add drop shadows to cards, buttons, or nav. If something needs emphasis, use border weight, background shift, or the accent color — not elevation shadows.

## Shapes

Square-corner editorial containers dominate. Border radius appears only where geometry demands it:

- **Cards and articles:** 0 radius — sharp rectangular borders (`border border-[var(--border)]`).
- **Founder portraits:** `rounded-full` circles with 1px border.
- **Passion bullets:** `rounded-full` 6px dots (`h-1.5 w-1.5`).
- **Sakura petals:** Organic asymmetric radius `70% 10% 60% 20%` (signature motion element, not a UI radius token).
- **Coming-soon placeholder:** Dashed `border-[var(--border-strong)]`, no fill.

CTA buttons use square corners (no border-radius). Portfolio primary action is an outline rectangle that inverts on hover.

## Components

### Buttons & Links
- **Text link (primary):** Underlined with `underline-offset-4`, decoration `--border-strong`, hover darkens decoration to `--fg`. Wrapped in `.tap-target` (44px min).
- **Text link (muted):** No underline; `--muted` color, hover to `--fg`. Arrow suffix (`→`) on secondary hero link.
- **Outline button:** 1px `--fg` border, transparent fill, `px-5 py-2.5`. Hover inverts to `--fg` background with `--bg-card` text. Used for external product CTA.
- **Email link (contact):** Large (`text-xl`/`md:text-2xl`), `--contact-link` color, hover `brightness-110`.

### Chips / Tags
- **Product tags:** Border-only rectangles (`border-[var(--border-strong)]`), `px-3 py-1`, `text-xs`, `--muted` text. No background fill.

### Cards / Containers
- **Team member card:** White `--bg-card` on bordered rectangle; left sidebar `--bg-soft` with founder index in accent display numerals, circular photo, name/role/location; right column for bio blocks.
- **Portfolio product card:** Two-column grid; left content panel, right dark preview panel with display product name.
- **Coming soon:** Dashed border container, no card fill, `--faint` display title.

### Navigation
- **Fixed header:** Full-width, `--nav-glass` + `blur(12px)`, bottom `--border`, diagonal pattern overlay.
- **Logo lockup:** SVG mark (`/brand/gizakura-logo.svg`) + Instrument Serif wordmark.
- **Nav links:** `.nav-link` uppercase labels (`0.7rem`, tracking `0.16em`), `--muted` default, hover `--fg`. 44px tap height.

### Footer
- Dark `--bg-dark` with diagonal pattern at 60% opacity. Inverted logo (`brightness-0 invert`). Three link columns (Email, LinkedIn, Legal) plus copyright bar with `--border-on-dark` top rule.

### SakuraField (signature)
- Absolute, pointer-events-none overlay generating falling petal shapes.
- Densities: `hero` (18 petals, richer gradient) vs `light` (5 petals, softer gradient).
- Reduced motion: static positioned petals, fewer count (6 hero / 3 light).
- Petal gradients: hero `#f2b8c0 → #e88996 → #d46a78`; light `#e8c4ca → #d9a0aa`.

### Legal Page
- Reuses nav + footer. Main on `--bg-team` with pattern at 40% opacity. Back link, display `h1`, faint updated date, muted body prose in `max-w-2xl`.

### Accessibility
- **Focus:** `:focus-visible` — 2px solid `--accent`, 3px offset. Default `:focus` outline removed.
- **Tap targets:** `.tap-target` and `.nav-link` enforce 44px minimum interactive size.
- **Motion:** Global CSS collapses animation/transition duration under `prefers-reduced-motion`; `useMotionSafe()` hook disables Motion enter/inView animations and reduces SakuraField petal count.

## Do's and Don'ts

### Do:
- **Do** assign each scroll section its own `--bg-*` surface token and optional pattern overlay at documented opacity.
- **Do** use Instrument Serif for display headlines and Figtree for everything else.
- **Do** format main section openers as `NNN — Title` (001–004).
- **Do** wrap interactive elements in `.tap-target` or `.nav-link` for 44px touch targets.
- **Do** respect `prefers-reduced-motion` via `useMotionSafe()` and global CSS — static petals, no enter animations.
- **Do** use `--contact-*` tokens exclusively inside the contact section for readable rose-on-dark type.
- **Do** keep cards flat with 1px borders — no shadows.

### Don't:
- **Don't** add box shadows — the editorial world is flat and paper-toned.
- **Don't** use filled primary buttons; CTAs are text links or outline inverts.
- **Don't** genericize into default SaaS chrome (rounded pill buttons, gradient heroes, glyph icon sets).
- **Don't** use `--faint` for long body copy on light backgrounds — reserve it for labels; body copy uses `--muted`.
- **Don't** treat every uppercase tracking label as a system pattern — only section numbers (001–004) are canonical openers.
