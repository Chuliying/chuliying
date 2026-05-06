# Portfolio Redesign — Design Spec
**Date:** 2026-05-06
**Scope:** Full refactor — content English-ification, architecture cleanup, Tailwind migration, SEO

---

## Goals

- Reposition the portfolio at Tech Lead / Senior Architect level for international job market
- Migrate all content to English
- Replace SCSS with Tailwind CSS (standard tokens only, no arbitrary values)
- Fix invalid HTML, add semantic structure, add SEO meta
- Separate data from presentation layer

---

## Section 1: Architecture

### Data Layer
- Extract `works` array from `Works.tsx` → `src/data/works.ts`
- Extract About text content → `src/data/about.ts`
- Components only render; no hardcoded data inside

### HTML Fixes
- `<a>` wrapping `<li>` is invalid HTML — restructure to `<li>` containing `<a>`, or use `<article>` elements
- One `<h1>` per page (name only); section titles become `<h2>`
- Experience timeline uses `<dl>/<dt>/<dd>` or `<section>` structure
- Works items use `<article>`
- Add `lang="en"` to `<html>`

### Image Imports
- Replace all `require('../../public/images/...')` with ES static imports
- Add explicit `width` to all `next/image` instances to prevent layout shift

### SEO Meta
Add `<Head>` in `index.tsx` with:
- `title`, `description`
- `og:title`, `og:description`, `og:image`
- `twitter:card`

### CSS Migration
- Remove `index.scss` and `_fragment.scss`
- Full Tailwind CSS — standard tokens only, no `[]` arbitrary values
- Custom tokens defined in `tailwind.config.ts` under `theme.extend.colors`:

```ts
colors: {
  theme: '#3a4f67',
  sub:   '#d87e57',
  'text-base': '#333333',
  'text-muted': '#707070',
  bg:    '#c2c5bc',
  surface: '#f4f4f4',
}
```

### Spacing Token Mapping
| Original class    | Original value | Tailwind token       | Mobile token |
|-------------------|----------------|----------------------|--------------|
| `main-margin-lg`  | 60px           | `mb-16` (64px)       | `mb-8`       |
| `main-margin-md`  | 45px           | `mb-11` (44px)       | `mb-7`       |
| `main-margin-sm`  | 15px           | `mb-4` (16px)        | `mb-2`       |

---

## Section 2: About Content

### Intro (no-subject style)
```
10+ years building production-grade web applications across startups,
media, public sector, and energy — from pixel-perfect interfaces to
scalable frontend architectures.

Currently leading frontend development at an energy company, driving
technical decisions, resolving legacy debt, and establishing cross-team
development standards. Background in commercial design informs a
consistent focus on both engineering rigor and user experience quality.

Recently focused on integrating AI-assisted workflows — defining tooling
standards and verification practices for team-wide adoption.
```

### Experience (4 entries, Skills section removed — woven into Works)
```
HDRenewables        Frontend Lead               2024–Present
- Led frontend architecture planning and technical decision-making
- Reduced legacy technical debt through systematic code refactoring
- Established cross-team development standards and review processes
- Spearheaded R&D AI workflow standardization: designed tooling
  guidelines, built team-wide skill systems, defined operational
  guardrails, and oversaw cost planning and production rollout

EcosTek             Frontend Lead               2023–2024
- Managed frontend team with agile development processes
- Handled task allocation, sprint planning, and code reviews
- Designed and implemented scalable frontend architecture

Brewing Arts        Frontend Engineer           2021–2023
- Owned design and frontend development end-to-end
- Digitized arts and cultural content for web presentation

The News Lens       Frontend Engineer           2015–2020
- Led product planning, UX design, and frontend development
- Delivered branded editorial sites and native advertising experiences
- Contributed to new brand website strategy, design, and engineering
```

### Skills Section
Removed entirely. Technical capabilities expressed through Works descriptions.

---

## Section 3: Works Content

Each entry: company name + one English sentence (role + technical decision). No tech tags. LCH Portfolio removed.

```
The News Lens
Developed and maintained frontend for a high-traffic bilingual news platform;
designed and implemented native advertising products and editorial ad placement
guidelines end-to-end.

everylittled
Designed and launched a distinctive brand identity for a lifestyle media
property; defined a lightweight frontend architecture suited to a lean
resource environment and delivered under tight timeline.

TNL Media Group
Led design, PM, and frontend for the group's IPO-facing corporate site;
aggregated and standardized content across all subsidiary brands into a
unified data format for centralized presentation.

Toyo Water
Supported digital transformation for a traditional manufacturer; rebuilt
and modernized the corporate site with full data and product migration.

Brewing Arts
Designed and built a full-stack Next.js site for an arts and craft beverage
brand; shaped the visual identity and brand tone through art-directed web design.

Against Again Troupe
Built a performant theatre company site with GraphQL data layer and
TypeScript throughout; handled both UX design and engineering.

Tava
Designed and built a volunteer platform; handled UX design and RESTful
API integration end-to-end.

SGT
Designed and engineered a site for a screenwriters' association with
emphasis on typography hierarchy and multilingual content structure.
```

---

## Section 4: Visual Design

### Typography Hierarchy
- Name: Inter, existing size, `<h1>` (one per page)
- Section titles (ABOUT, WORKS): Inter, `text-sub`, `<h2>`
- Body: Noto Sans TC, `text-base leading-[1.65]`
- Experience bullet points: `text-sm text-text-muted`

### Works Hover
Maintain grayscale → color logo transition:
```
grayscale hover:grayscale-0 transition-all duration-500
```

### Fonts
Keep existing Google Fonts import (Inter + Noto Sans TC) — move to `_document.tsx` for correct SSR loading.

---

## Out of Scope
- Page routing / multi-page structure
- Animation beyond existing transitions
- Dark mode
- CMS integration
