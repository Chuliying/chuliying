# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the portfolio to Tech Lead positioning — English content, Tailwind CSS, semantic HTML, SEO meta, and data/presentation separation.

**Architecture:** Extract all hardcoded data into `src/data/` files; components become pure renderers. Replace all SCSS with Tailwind utility classes using custom color tokens. The noise animation effect from `_fragment.scss` is preserved in a minimal `src/styles/globals.css` since it cannot be expressed in Tailwind.

**Tech Stack:** Next.js 13 (Pages Router), React 18, TypeScript, Tailwind CSS 3, PostCSS

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| CREATE | `tailwind.config.ts` | Custom color tokens, content paths |
| CREATE | `postcss.config.js` | Tailwind + Autoprefixer pipeline |
| CREATE | `src/data/works.ts` | Works array — company, description, logo path, link |
| CREATE | `src/data/about.ts` | Experience entries array |
| CREATE | `src/styles/globals.css` | Noise animation, scrollbar, font import, base resets |
| MODIFY | `src/pages/_app.tsx` | Import globals.css, update SEO meta |
| MODIFY | `src/components/Contact.tsx` | Tailwind classes |
| MODIFY | `src/components/About.tsx` | Tailwind, semantic HTML, data from about.ts |
| MODIFY | `src/components/Works.tsx` | Tailwind, semantic HTML, static image imports, data from works.ts |
| MODIFY | `src/pages/index.tsx` | Tailwind, one `<h1>`, `lang` handled via `_document.tsx` |
| CREATE | `src/pages/_document.tsx` | `lang="en"` on `<html>` |
| MODIFY | `package.json` | Add tailwindcss, autoprefixer, postcss |
| DELETE | `src/pages/styles/index.scss` | Replaced by Tailwind + globals.css |
| DELETE | `src/pages/styles/_fragment.scss` | Noise effect moved to globals.css |

---

## Task 1: Install Tailwind and create config

**Files:**
- Modify: `package.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`

- [ ] **Step 1: Install Tailwind dependencies**

```bash
npm install -D tailwindcss@3 autoprefixer postcss
```

- [ ] **Step 2: Create `postcss.config.js`**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 3: Create `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: '#3a4f67',
        sub: '#d87e57',
        'text-base': '#333333',
        'text-muted': '#707070',
        bg: '#c2c5bc',
        surface: '#f4f4f4',
      },
      fontFamily: {
        inter: ['Inter', 'Noto Sans TC', 'sans-serif'],
        sans: ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 4: Verify Tailwind config parses**

```bash
npx tailwindcss --help
```

Expected: help text printed, no errors.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts postcss.config.js package.json package-lock.json
git commit -m "chore: install tailwindcss and configure tokens"
```

---

## Task 2: Create data layer

**Files:**
- Create: `src/data/works.ts`
- Create: `src/data/about.ts`

- [ ] **Step 1: Create `src/data/works.ts`**

```ts
export interface Work {
  link: string
  company: string
  description: string
  logo: string
  logoHeight?: number
}

export const works: Work[] = [
  {
    link: 'https://www.thenewslens.com/',
    company: 'The News Lens',
    description:
      'Developed and maintained frontend for a high-traffic bilingual news platform; designed and implemented native advertising products and editorial ad placement guidelines end-to-end.',
    logo: '/images/logo/tnl.svg',
  },
  {
    link: 'https://everylittled.com/',
    company: 'everylittled',
    description:
      'Designed and launched a distinctive brand identity for a lifestyle media property; defined a lightweight frontend architecture suited to a lean resource environment and delivered under tight timeline.',
    logo: '/images/logo/eld.svg',
  },
  {
    link: 'https://www.tnlmedia.com/',
    company: 'TNL Media Group',
    description:
      "Led design, PM, and frontend for the group's IPO-facing corporate site; aggregated and standardized content across all subsidiary brands into a unified data format for centralized presentation.",
    logo: '/images/logo/tnl-media-group.svg',
  },
  {
    link: 'https://www.toyo-autech.com.tw/web/index.html',
    company: 'Toyo Water',
    description:
      'Supported digital transformation for a traditional manufacturer; rebuilt and modernized the corporate site with full data and product migration.',
    logo: '/images/logo/toyo.svg',
  },
  {
    link: 'https://www.brewingarts.com.tw/',
    company: 'Brewing Arts',
    description:
      'Designed and built a full-stack Next.js site for an arts and craft beverage brand; shaped the visual identity and brand tone through art-directed web design.',
    logo: '/images/logo/ba.svg',
  },
  {
    link: 'https://againstagain.com/',
    company: 'Against Again Troupe',
    description:
      'Built a performant theatre company site with GraphQL data layer and TypeScript throughout; handled both UX design and engineering.',
    logo: '/images/logo/aat.svg',
  },
  {
    link: 'https://www.tava.org.tw/',
    company: 'Tava',
    description:
      'Designed and built a volunteer platform; handled UX design and RESTful API integration end-to-end.',
    logo: '/images/logo/logo-wide.svg',
  },
  {
    link: 'https://www.sgt.org.tw/',
    company: 'SGT',
    description:
      "Designed and engineered a site for a screenwriters' association with emphasis on typography hierarchy and multilingual content structure.",
    logo: '/images/logo/sgt.svg',
    logoHeight: 40,
  },
]
```

- [ ] **Step 2: Create `src/data/about.ts`**

```ts
export interface ExperienceEntry {
  company: string
  title: string
  period: string
  bullets: string[]
}

export const intro = `10+ years building production-grade web applications across startups, media, public sector, and energy — from pixel-perfect interfaces to scalable frontend architectures.

Currently leading frontend development at an energy company, driving technical decisions, resolving legacy debt, and establishing cross-team development standards. Background in commercial design informs a consistent focus on both engineering rigor and user experience quality.

Recently focused on integrating AI-assisted workflows — defining tooling standards and verification practices for team-wide adoption.`

export const experience: ExperienceEntry[] = [
  {
    company: 'HDRenewables',
    title: 'Frontend Lead',
    period: '2024–Present',
    bullets: [
      'Led frontend architecture planning and technical decision-making',
      'Reduced legacy technical debt through systematic code refactoring',
      'Established cross-team development standards and review processes',
      'Spearheaded R&D AI workflow standardization: designed tooling guidelines, built team-wide skill systems, defined operational guardrails, and oversaw cost planning and production rollout',
    ],
  },
  {
    company: 'EcosTek',
    title: 'Frontend Lead',
    period: '2023–2024',
    bullets: [
      'Managed frontend team with agile development processes',
      'Handled task allocation, sprint planning, and code reviews',
      'Designed and implemented scalable frontend architecture',
    ],
  },
  {
    company: 'Brewing Arts',
    title: 'Frontend Engineer',
    period: '2021–2023',
    bullets: [
      'Owned design and frontend development end-to-end',
      'Digitized arts and cultural content for web presentation',
    ],
  },
  {
    company: 'The News Lens',
    title: 'Frontend Engineer',
    period: '2015–2020',
    bullets: [
      'Led product planning, UX design, and frontend development',
      'Delivered branded editorial sites and native advertising experiences',
      'Contributed to new brand website strategy, design, and engineering',
    ],
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/data/works.ts src/data/about.ts
git commit -m "feat: add data layer for works and about content"
```

---

## Task 3: Create globals.css

**Files:**
- Create: `src/styles/globals.css`

- [ ] **Step 1: Create `src/styles/globals.css`**

Copy the noise animation block from `src/pages/styles/_fragment.scss` (the `.fragment` and `@keyframes noise` rules) and prepend Tailwind directives + font import + base resets:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+TC:wght@400;700&display=swap");

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body {
  background-color: #c2c5bc;
}

body::-webkit-scrollbar {
  width: 4px;
  height: 6px;
  background-color: #657270;
}

body::-webkit-scrollbar-thumb {
  background: #304642;
}

a {
  color: inherit;
  text-decoration: none;
}
```

Then append the full `.fragment` and `@keyframes noise` block copied verbatim from `src/pages/styles/_fragment.scss`.

- [ ] **Step 2: Verify the file exists**

```bash
head -5 src/styles/globals.css
```

Expected: `@tailwind base;` on line 1.

- [ ] **Step 3: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat: create globals.css with tailwind directives and noise animation"
```

---

## Task 4: Migrate `_app.tsx`

**Files:**
- Modify: `src/pages/_app.tsx`
- Create: `src/pages/_document.tsx`

- [ ] **Step 1: Replace `_app.tsx`**

```tsx
import { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import ReactGA from 'react-ga4'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    ReactGA.initialize('G-Q5P2241XES')
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }, [])

  return (
    <>
      <Head>
        <title>Chu Liying — Frontend Lead</title>
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="description"
          content="Frontend Lead with 10+ years building production web applications across media, energy, and the arts. Specializing in React, Next.js, and scalable frontend architecture."
        />
        <meta property="og:title" content="Chu Liying — Frontend Lead" />
        <meta
          property="og:description"
          content="Frontend Lead with 10+ years building production web applications across media, energy, and the arts."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Chu Liying — Frontend Lead" />
        <meta
          name="twitter:description"
          content="Frontend Lead with 10+ years building production web applications across media, energy, and the arts."
        />
      </Head>
      <div className="min-h-screen bg-bg pt-[15px] pr-[15px] flex overflow-hidden sm:pt-[5px] sm:pr-[5px]">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
```

- [ ] **Step 2: Create `src/pages/_document.tsx`**

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

- [ ] **Step 3: Run dev server and check no import errors**

```bash
npm run dev
```

Expected: server starts, no module-not-found errors in terminal.

- [ ] **Step 4: Commit**

```bash
git add src/pages/_app.tsx src/pages/_document.tsx
git commit -m "feat: migrate _app.tsx to tailwind, add SEO meta and _document.tsx"
```

---

## Task 5: Migrate `Contact.tsx`

**Files:**
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Replace `Contact.tsx`**

```tsx
import React from 'react'

const Contact = () => {
  return (
    <div>
      <a
        href="mailto:chuliyinn@gmail.com"
        className="font-inter text-sub text-[16px] font-bold hover:opacity-70 transition-opacity"
      >
        mailto:chuliying
      </a>
    </div>
  )
}

export default Contact
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: migrate Contact to Tailwind"
```

---

## Task 6: Migrate `About.tsx`

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Replace `About.tsx`**

```tsx
import React from 'react'
import { intro, experience } from '../data/about'

const About = () => {
  return (
    <div>
      <h2 className="font-inter text-sub font-bold text-[16px] mb-16 sm:mb-8 sm:border-t sm:border-b sm:border-sub sm:py-[7.5px]">
        ABOUT
      </h2>

      <div className="mb-11 sm:mb-7">
        {intro.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-text-base text-[16px] leading-[1.65] pb-[7.5px]">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="text-theme text-[14px] font-normal mb-4 sm:mb-2">
        EXPERIENCE
      </h3>

      <dl className="mb-11 sm:mb-7">
        {experience.map((entry) => (
          <div key={entry.company} className="mb-11 sm:mb-7">
            <dt className="text-text-base text-[16px] leading-[1.65] pb-[7.5px]">
              {entry.company}
              <span className="block font-bold text-[14px] text-text-muted">
                {entry.title}
              </span>
              <span className="block text-text-muted text-[14px] mb-[7.5px] font-normal">
                {entry.period}
              </span>
            </dt>
            <dd>
              <ul className="list-none">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-text-muted leading-[1.65] before:content-['-'] before:mr-2"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default About
```

- [ ] **Step 2: Check dev server renders About correctly**

```bash
npm run dev
```

Open browser at `http://localhost:3000` and verify About section shows English text and experience entries.

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: migrate About to Tailwind with English content"
```

---

## Task 7: Migrate `Works.tsx`

**Files:**
- Modify: `src/components/Works.tsx`

- [ ] **Step 1: Replace `Works.tsx` with static imports and semantic HTML**

```tsx
import React from 'react'
import Image from 'next/image'
import { works } from '../data/works'

import tnlLogo from '../../public/images/logo/tnl.svg'
import eldLogo from '../../public/images/logo/eld.svg'
import tnlMediaLogo from '../../public/images/logo/tnl-media-group.svg'
import toyoLogo from '../../public/images/logo/toyo.svg'
import baLogo from '../../public/images/logo/ba.svg'
import aatLogo from '../../public/images/logo/aat.svg'
import tavaLogo from '../../public/images/logo/logo-wide.svg'
import sgtLogo from '../../public/images/logo/sgt.svg'

const logoMap: Record<string, any> = {
  '/images/logo/tnl.svg': tnlLogo,
  '/images/logo/eld.svg': eldLogo,
  '/images/logo/tnl-media-group.svg': tnlMediaLogo,
  '/images/logo/toyo.svg': toyoLogo,
  '/images/logo/ba.svg': baLogo,
  '/images/logo/aat.svg': aatLogo,
  '/images/logo/logo-wide.svg': tavaLogo,
  '/images/logo/sgt.svg': sgtLogo,
}

const Works = () => {
  return (
    <section>
      <h2 className="font-inter text-sub font-bold text-[16px] mb-16 sm:mb-8 sm:border-t sm:border-b sm:border-sub sm:py-[7.5px]">
        WORKS
      </h2>

      <ul>
        {works.map((work) => (
          <li key={work.company} className="mb-11 sm:mb-[45px] sm:pb-[25px] sm:border-b sm:border-dotted sm:border-bg last:mb-0 last:border-none">
            <article className="flex lg:flex-col-reverse">
              <div className="flex-1 lg:w-full lg:flex-auto">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="font-inter text-theme text-[17px] mb-4 sm:mb-2">
                    {work.company}
                  </h3>
                  <p className="text-text-base text-[16px] leading-[1.65] pb-[7.5px]">
                    {work.description}
                  </p>
                  <span className="text-[14px] text-sub underline">
                    link to
                  </span>
                </a>
              </div>

              <div className="w-1/2 flex justify-center flex-col lg:w-full lg:pb-4 lg:justify-start sm:mb-4">
                <Image
                  src={logoMap[work.logo]}
                  alt={work.company}
                  height={work.logoHeight ?? 30}
                  className="grayscale-[0.8] hover:grayscale-0 transition-all duration-500 sm:grayscale-0 w-auto"
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Works
```

- [ ] **Step 2: Check dev server renders Works correctly**

Open `http://localhost:3000` and verify all 8 projects appear with descriptions and logos.

- [ ] **Step 3: Commit**

```bash
git add src/components/Works.tsx
git commit -m "feat: migrate Works to Tailwind with semantic HTML and static image imports"
```

---

## Task 8: Migrate `index.tsx`

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Replace `index.tsx`**

```tsx
import React from 'react'
import Image from 'next/image'
import Works from '../components/Works'
import About from '../components/About'
import Contact from '../components/Contact'
import photo from '../../public/images/chuliying.jpg'

const IndexPage = () => {
  return (
    <main className="fragment w-full bg-surface rounded-tr-[50px] mr-[15px] mt-[15px] p-[45px] pl-[120px] border border-[#eee] shadow-[2px_2px_5px_rgba(0,0,0,0.15)] flex relative overflow-hidden min-h-[calc(100vh-30px)] transition-transform duration-500 xl:p-[45px] xl:pl-[60px] xl:rounded-tr-[45px] sm:flex-col sm:p-[30px] sm:pl-[30px]">

      {/* Column 1: Photo + Contact */}
      <div className="relative z-10 pr-[135px] flex-1 max-w-[300px] sm:pr-[15px] sm:mb-11">
        <h1 className="font-inter text-theme font-bold text-[16px] mb-16 sm:mb-8">
          CHU LIYING
        </h1>
        <Image
          className="w-[200px] h-auto opacity-85 xl:w-[140px]"
          src={photo}
          alt="Chu Liying"
          priority
        />
        <div className="absolute bottom-0 xl:relative xl:mt-4">
          <Contact />
        </div>
      </div>

      {/* Column 2: About */}
      <div className="relative z-10 pr-[135px] flex-[1.25] sm:pr-[15px] sm:mb-11">
        <About />
      </div>

      {/* Column 3: Works */}
      <div className="relative z-10 flex-[2] sm:pr-[15px]">
        <Works />
      </div>

    </main>
  )
}

export default IndexPage
```

- [ ] **Step 2: Verify full page renders in browser**

Open `http://localhost:3000`. Confirm:
- Three-column layout intact on desktop
- Single-column stacked on mobile (resize to <900px)
- Noise animation visible on the background
- `<h1>` is "CHU LIYING" only (inspect DOM)

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: migrate index page to Tailwind with semantic HTML"
```

---

## Task 9: Delete SCSS files and verify build

**Files:**
- Delete: `src/pages/styles/index.scss`
- Delete: `src/pages/styles/_fragment.scss`

- [ ] **Step 1: Delete SCSS files**

```bash
rm src/pages/styles/index.scss src/pages/styles/_fragment.scss
rmdir src/pages/styles 2>/dev/null || true
```

- [ ] **Step 2: Verify no remaining SCSS imports**

```bash
grep -r "\.scss" src/
```

Expected: no output.

- [ ] **Step 3: Run build to confirm no errors**

```bash
npm run build
```

Expected: build completes successfully with no errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove SCSS files, migration to Tailwind complete"
```

---

## Task 10: Final verification

- [ ] **Step 1: Run dev server and do a full visual check**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- [ ] Page title in browser tab: "Chu Liying — Frontend Lead"
- [ ] Three-column layout at desktop width
- [ ] Single-column stacked at <900px
- [ ] All 8 works appear with English descriptions
- [ ] Experience shows 4 entries with bullet points
- [ ] Logo hover effect: grayscale → color
- [ ] Noise animation visible on background
- [ ] No console errors

- [ ] **Step 2: Check HTML semantics**

In browser DevTools, confirm:
- One `<h1>` in the DOM (CHU LIYING)
- Section titles are `<h2>`
- Experience uses `<dl>/<dt>/<dd>`
- Works items use `<article>`
- `<html lang="en">` present

- [ ] **Step 3: Run production build**

```bash
npm run build && npm run start
```

Expected: build succeeds, production server starts.

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final polish after Tailwind migration"
```
