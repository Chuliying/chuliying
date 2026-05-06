# Next.js 16 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Next.js 13.5.11 → 16.2.4 to resolve all high/moderate CVEs, keeping the Pages Router + React 18.2.0 stack intact.

**Architecture:** Straightforward dependency bump — Next.js 16 supports React 18.2.0 as a peer dependency and preserves Pages Router without breaking API changes for our component set. A minimal `next.config.ts` must be created (currently absent) to suppress deprecation defaults and pin image/output settings. The Google Fonts `@import` in `globals.css` must move above Tailwind directives to satisfy the updated PostCSS pipeline.

**Tech Stack:** Next.js 16.2.4, React 18.2.0, TypeScript, Tailwind CSS 3, PostCSS

---

## Breaking Changes Checklist (Pages Router)

| Area | Change | Our impact |
|------|--------|-----------|
| `next dev` | Turbopack is now default | May change error output format, fallback to `--no-turbopack` if needed |
| `next/image` | `fetchPriority` handled correctly | Fixes the warning we had |
| PostCSS | Bundled postcss updated to ≥8.5.10 | Fixes moderate CVE |
| `next.config` | `experimental` options renamed | No config exists — create fresh |
| `@next/eslint-plugin-next` | Must match major version | Update to `@next/eslint-plugin-next@16` |

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| CREATE | `next.config.ts` | Minimal Next.js 16 config with image settings |
| MODIFY | `package.json` | Bump next and @next/eslint-plugin-next |
| MODIFY | `src/styles/globals.css` | Move `@import` after `@tailwind` directives (PostCSS requirement) |
| VERIFY | `src/pages/_app.tsx` | No changes needed |
| VERIFY | `src/pages/_document.tsx` | No changes needed |
| VERIFY | `src/components/*.tsx` | No changes needed |

---

## Task 1: Upgrade Next.js and related packages

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install Next.js 16 and matching ESLint plugin**

```bash
npm install next@16.2.4 @next/eslint-plugin-next@16
```

- [ ] **Step 2: Verify installed versions**

```bash
node -e "console.log(require('./node_modules/next/package.json').version)"
```

Expected output: `16.2.4`

- [ ] **Step 3: Run build to surface any immediate errors**

```bash
npm run build 2>&1 | head -40
```

Expected: may show warnings or errors — record them before fixing.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: upgrade next to 16.2.4 and matching eslint plugin"
```

---

## Task 2: Create `next.config.ts`

**Files:**
- Create: `next.config.ts`

- [ ] **Step 1: Create `next.config.ts`**

```ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    unoptimized: false,
  },
}

export default config
```

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev -- --no-turbopack &
sleep 8
kill %1
```

Expected: `Ready in Xms` with no fatal errors.

- [ ] **Step 3: Run build**

```bash
npm run build 2>&1 | tail -15
```

Expected: `✓ Compiled successfully` and three static routes.

- [ ] **Step 4: Commit**

```bash
git add next.config.ts
git commit -m "chore: add next.config.ts for Next.js 16 defaults"
```

---

## Task 3: Fix globals.css PostCSS @import order

Next.js 16's bundled PostCSS ≥8.5.10 enforces that `@import` must come before `@tailwind` directives, or be handled via `postcss-import`. Currently `globals.css` has `@tailwind` first then `@import url(...)`.

**Files:**
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Read current top of file**

```bash
head -10 src/styles/globals.css
```

- [ ] **Step 2: Move Google Fonts @import to before @tailwind directives**

The file must start with:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+TC:wght@400;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Edit `src/styles/globals.css`: move line 5 (`@import url(...)`) to line 1, before the `@tailwind` directives.

- [ ] **Step 3: Verify order**

```bash
head -6 src/styles/globals.css
```

Expected: `@import url(...)` on line 1, then the three `@tailwind` directives.

- [ ] **Step 4: Run build to confirm no CSS errors**

```bash
npm run build 2>&1 | grep -E "error|Error|✓"
```

Expected: `✓ Compiled successfully`

- [ ] **Step 5: Commit**

```bash
git add src/styles/globals.css
git commit -m "fix: move @import before @tailwind directives for PostCSS 8.5.10+"
```

---

## Task 4: Verify audit is clean and test dev server

**Files:** none — verification only

- [ ] **Step 1: Run npm audit**

```bash
npm audit 2>&1
```

Expected: `found 0 vulnerabilities` or only vulnerabilities with no available fix.

- [ ] **Step 2: Start dev server and check for warnings**

```bash
npm run dev -- --no-turbopack &
sleep 10
kill %1
```

Expected: No `fetchPriority` warning. No `Warning: React does not recognize` errors.

- [ ] **Step 3: Run production build and check bundle sizes**

```bash
npm run build 2>&1
```

Expected:
- `✓ Compiled successfully`
- Route `/` exists as static (`○`)
- No critical errors in output

- [ ] **Step 4: Push**

```bash
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519" git push origin main
```

Expected: remote accepts push without security alerts about Next.js CVEs.
