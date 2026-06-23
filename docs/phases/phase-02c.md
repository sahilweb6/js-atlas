# Phase 02C: Homepage

## Status

Completed

## Goals Achieved

* Built a production-quality homepage for JS Atlas.
* Created 5 homepage section components.
* Integrated all sections into the existing Application Shell.
* Maintained full responsive design across mobile, tablet, and desktop.
* Preserved all accessibility standards from Phase 02B.
* Validated build and dev servers pass successfully.

## Files Added

### Homepage Section Components

| File | Description |
|------|-------------|
| `src/components/home/hero-section.tsx` | Hero section with headline, tagline, CTA buttons, and geometric SVG background decorations. |
| `src/components/home/learning-paths.tsx` | Three-column grid showcasing Beginner, Intermediate, and Advanced learning paths with inline SVG icons. |
| `src/components/home/curriculum-roadmap.tsx` | Alternating left/right timeline layout displaying the 5-stage curriculum with topic lists and connecting line. |
| `src/components/home/features-section.tsx` | Six feature cards in a responsive 3-column grid highlighting platform capabilities. |
| `src/components/home/cta-section.tsx` | Final call-to-action with primary button, GitHub link, and MIT License reference. |

### Homepage Integration

| File | Description |
|------|-------------|
| `src/app/page.tsx` | Replaced "Coming Soon" placeholder. Composes all 5 homepage sections inside `AppShell` with sidebar and breadcrumb disabled. |

## Homepage Architecture

```
HomePage (server)
  └── AppShell (client)
        ├── Header (sticky)
        │     ├── Logo
        │     ├── DesktopNav
        │     ├── ThemeSwitcher
        │     └── MobileNav
        ├── Main (semantic)
        │     ├── HeroSection
        │     ├── LearningPaths
        │     ├── CurriculumRoadmap
        │     ├── FeaturesSection
        │     └── CTASection
        └── Footer
```

### Section Order

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Grab attention, communicate value proposition, primary CTA. |
| 2 | Learning Paths | Show the 3 skill-level paths available to learners. |
| 3 | Curriculum Roadmap | Visual overview of what topics are covered. |
| 4 | Features | Explain why JS Atlas is a good learning platform. |
| 5 | CTA | Final conversion push + open source attribution. |

## Section Details

### Hero Section

* **Headline**: "Master Modern JavaScript"
* **Tagline**: Free, open-source learning platform — from first variable to advanced patterns.
* **CTAs**: "Start Learning" (primary) and "About JS Atlas" (secondary/outline).
* **Visuals**: Geometric SVG decorations (rounded rectangle, circle) in primary/accent colors at low opacity.
* **Responsive**: Full-width, centered text, stacked buttons on mobile, side-by-side on sm+.

### Learning Paths

* **Layout**: 3-column grid on md+, single column on mobile.
* **Cards**:
  * Beginner — emerald accent (variables, types, control flow, functions)
  * Intermediate — amber accent (objects, arrays, closures, DOM, async)
  * Advanced — rose accent (design patterns, performance, ES features, architecture)
* **Icons**: Inline SVGs (code brackets, layers, lightning bolt).

### Curriculum Roadmap

* **Layout**: Alternating left/right timeline with vertical connecting line on desktop. Single column on mobile.
* **Stages**: Introduction → Fundamentals → DOM → Async → Advanced.
* **Nodes**: Circular checkmark icons on the connecting line.
* **Topics**: Bulleted list under each stage with dot indicators.

### Features Section

* **Layout**: 3-column grid on lg, 2-column on sm, single column on mobile.
* **Features** (6 cards):
  1. Modern JavaScript
  2. Responsive Design
  3. Dark Mode
  4. Open Source
  5. Hands-on Examples
  6. Structured Learning Paths
* **Icons**: Inline SVGs in primary color on tinted background.

### CTA Section

* **Headline**: "Start Learning JavaScript Today"
* **Description**: Free, open-source curriculum. No account required.
* **Primary CTA**: "Start Learning" button with arrow icon.
* **Open Source Note**: GitHub repository link + MIT License link.

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (< `sm`) | Single column, stacked sections, full-width cards, reduced padding. |
| Tablet (`sm`–`lg`) | 2-column grids where applicable, increased padding. |
| Desktop (`lg`+) | Full layout with max-width container (`max-w-7xl`), 3-column grids, sidebar visible on other pages (homepage remains full-width). |

## Design System Usage

All sections use Phase 02A design tokens:

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#5B5BD6` | Active links, buttons, focus rings, icon tints, accents |
| Accent | `#22D3EE` | Background decorations |
| Secondary | `#0F172A` | Headings, dark backgrounds |
| Light bg | `#F8FAFC` | Page background, alternating sections |
| Dark bg | `#020617` | Dark mode page background |
| Border | `#E2E8F0` / `#1E293B` | Card borders, section dividers |
| Text muted | `#475569` / `#94A3B8` | Body text, descriptions |
| Font sans | Inter | Body text, UI elements |
| Font mono | JetBrains Mono | Code contexts (reserved) |

## Accessibility Compliance

| Requirement | Implementation |
|-------------|----------------|
| WCAG AA | Color contrast ratios verified. Focus indicators visible on all interactive elements. |
| Semantic HTML | `<section>` tags with `aria-label` or `aria-labelledby`. `<article>` for cards. `<ol>` for roadmap. |
| Heading hierarchy | Single `h1` in Hero. `h2` for each section. `h3` for cards and stage titles. |
| Focus management | `focus-visible:ring-2` on all links and buttons. |
| Screen readers | Decorative SVGs marked `aria-hidden="true"`. Icons accompanied by text labels. |
| Keyboard navigation | All CTAs are `<Link>` elements (natively focusable). Tab order follows visual order. |

## Issues Encountered and Resolved

### Issue 1: Missing UI Component Dependency

**Problem:**

Generated code imported:

```tsx
import { Button } from "@/components/ui/button";
```

The repository did not contain `src/components/ui/button.tsx`. Build failed with:

```
Cannot find module '@/components/ui/button'
```

**Root Cause:**

Assumed the existence of a shadcn/ui Button component that was never generated in previous phases.

**Resolution:**

Replaced all `Button` usage with Tailwind CSS-styled `<Link>` and `<button>` elements using the same design tokens (background `#5B5BD6`, rounded corners, hover states, focus rings).

**Prevention:**

Do not assume UI component libraries exist unless they already exist in the repository. Verify file presence before importing.

---

### Issue 2: Unapproved External Dependency

**Problem:**

Generated code imported:

```tsx
import { ArrowRight, Github } from "lucide-react";
```

* `lucide-react` was not installed.
* `package.json` modifications were not approved for this phase.

Build failed.

**Root Cause:**

Assumed `lucide-react` was available as a dependency. It was not listed in `package.json`.

**Resolution:**

Replaced all `lucide-react` icons with inline SVGs. Each icon was recreated using the same 24×24 viewBox, 2px stroke width, and matching paths from the Lucide icon set.

Icons replaced:

| Lucide Icon | Inline SVG Path |
|-------------|-----------------|
| `BookOpen` | `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />` |
| `ArrowRight` | `<path d="M5 12h14" /><path d="m12 5 7 7-7 7" />` |
| `Code2` | `<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />` |
| `Layers` | `<polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />` |
| `Zap` | `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />` |
| `CheckCircle2` | `<circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />` |
| `Smartphone` | `<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />` |
| `Moon` | `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />` |
| `GitBranch` | `<line x1="6" x2="6" y1="3" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />` |
| `Hand` | `<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />` |
| `Route` | `<circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" />` |
| `Github` | `<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />` |

**Prevention:**

Do not introduce npm dependencies without explicit approval. Prefer inline SVGs for icons.

## Repository Rules Learned

1. **Never pass props to the custom ThemeProvider.** The wrapper manages its own `next-themes` configuration internally.
2. **Never assume UI component libraries exist.** Verify file presence before importing from `@/components/ui/*`.
3. **Never introduce npm dependencies without explicit approval.** Prefer Tailwind CSS and inline SVGs.
4. **Every phase must pass `pnpm dev` and `pnpm build` before acceptance.**

## Validation

Successfully tested:

* `pnpm install` — PASS
* `pnpm dev` — PASS
* `pnpm build` — PASS

Manual verification:

* Hero section renders with headline, tagline, and CTA buttons.
* Learning Paths display 3 cards with correct icons and descriptions.
* Curriculum Roadmap shows 5 stages in alternating layout.
* Features Section displays 6 cards in responsive grid.
* CTA Section renders with primary button and open source links.
* All sections are responsive across mobile, tablet, and desktop.
* Dark mode toggles correctly across all sections.
* Focus rings visible on all interactive elements.
* No console errors or warnings.

## Deployment

Successfully merged into main.

Successfully deployed to Cloudflare Pages.

Production URL:

https://js-atlas.pages.dev

Phase 02D: Learning Pages

Planned:

* Learn index page
* Introduction page
* Fundamentals page
* DOM page
* Async JavaScript page
* Advanced JavaScript page
* Curriculum navigation
* Reusable lesson layout
* Sidebar integration
* Next/previous lesson links
