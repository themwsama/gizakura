# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Potential collaborators, investors, and press evaluating whether Gizakura is a credible, real studio worth engaging with.

**Situation:** They arrive from a referral, pitch deck link, or Resumurai curiosity — not to use a product on this site itself.

**Job:** Understand who the founders are, what Resumurai is, and whether the team ships real work. A successful visit builds trust and may lead to Resumurai or an email.

**Secondary audiences (not primary):** Resumurai users curious about the studio; future hires scanning founder backgrounds.

## Product Purpose

Gizakura.com is the **studio company site** for the team behind [Resumurai](https://www.resumurai.com). It introduces the founders, shows what they've shipped, and provides a direct way to reach the team.

Success means a partner or evaluator leaves **trusting the team is real and capable**, and optionally **clicks through to Resumurai** to see the live product.

This is not the Resumurai product app, not a dashboard, and not a content platform — it is a single-page marketing surface with legal pages.

## Positioning

A student-founder studio that learned modern tooling by shipping — not a class project or agency landing page. The honest claim competitors cannot copy: four founders who met as students, took on real summer product work, kept building through a steep stack (Next.js, Supabase, Clerk, Vercel, etc.), and put Resumurai in front of real users with feedback loops intact.

## Operating Context

- **Surface:** Single-page home (`/`) with anchor sections — About, Team, Portfolio, Contact — plus `/privacy` and `/terms`.
- **Repo layout:** Next.js app at `apps/gizakura` inside the resumelink monorepo; runs on port **3001** via `pnpm dev:gizakura`.
- **Content source:** `src/data/site.ts` for copy, team bios, links, and contact info.
- **Deployment target:** `gizakura.com` (domain noted in site data; confirm production routing separately).

## Capabilities and Constraints

**Shipped today:**
- Hero, about narrative, four founder profiles with photos and Resumurai links
- Portfolio section featuring Resumurai as live product + coming-soon placeholder
- Contact via `founders@gizakura.com` and company LinkedIn
- Privacy Policy and Terms of Use pages
- Brand logo assets in `public/brand/`

**Technical constraints:**
- Next.js 16, React 19, Tailwind CSS 4, Motion for animations
- Static/marketing site — no auth, no CMS, no backend on this app
- Team and copy updates require editing `site.ts` (and assets in `public/`)

**Explicitly undecided / incomplete:**
- Personal LinkedIn URLs for founders are still placeholders in `site.ts` — do not link fabricated profiles
- Second portfolio product is TBD (`comingSoonLabel`)
- Production deploy URL and analytics not documented here

## Brand Commitments

- **Name:** Gizakura — keep unless founders rename
- **Domain:** `gizakura.com`
- **Voice:** Honest, student-founder tone — craft without corporate polish; cut what feels wasteful or fake
- **Visual identity (binding):** Sakura / pink-cream editorial world — Instrument Serif + Figtree, diagonal hatch patterns, sakura petal motion, section numbering (001–004). Future visual work preserves or intentionally evolves this system; do not genericize into default SaaS chrome.
- **Contact:** `founders@gizakura.com`, company LinkedIn at `linkedin.com/company/gizakura`

## Evidence on Hand

| Asset | Location | Notes |
|-------|----------|-------|
| Founder bios & roles | `src/data/site.ts` | Matthew, Caleb, Raymond, Evan — real copy |
| Team photos | `public/team/*.png` | Four portraits |
| Brand logos & banners | `public/brand/` | SVG + PNG variants including kanji marks |
| Live product | resumurai.com | Linked from portfolio; do not invent product features beyond `site.ts` |
| Legal pages | `src/app/privacy`, `src/app/terms` | Present |

**Do not fabricate:** testimonials, press quotes, user/customer counts, investor logos, benchmark claims, or fake social proof.

## Product Principles

1. **Real over polished** — Show what exists; label what's TBD; no invented metrics or logos.
2. **Trust before conversion** — Partners evaluate people first; Resumurai click-through is a welcome outcome, not a hard sell.
3. **Founders are the product** — Team section carries as much weight as the portfolio; bios should read human, not LinkedIn-generic.
4. **One flagship, honest pipeline** — Resumurai is the live proof point; future products appear only when real enough to name.
5. **Reachable** — Contact is always one click away; no gated forms or friction for a simple hello.

## Accessibility & Inclusion

Marketing site should meet WCAG AA for text contrast, keyboard focus, touch targets, and `prefers-reduced-motion`. Recent audit-driven fixes applied (focus rings, motion reduction, contrast tokens); re-audit before production launch.
