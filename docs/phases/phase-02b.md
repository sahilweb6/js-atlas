# Phase 02B: Application Shell

## Status

Completed

## Goals Achieved

* Built the complete application shell for JS Atlas.
* Created responsive layout components (header, footer, sidebar, app shell).
* Created navigation components (desktop nav, mobile nav drawer, breadcrumb).
* Created the logo component with brand identity.
* Integrated all shell components into the homepage via AppShell wrapper.
* Ensured full accessibility compliance (WCAG AA, keyboard navigation, semantic HTML, ARIA).
* Validated all components render correctly across desktop, tablet, and mobile breakpoints.

## Files Added

### Layout Components

| File | Description |
|------|-------------|
| `src/components/layout/app-shell.tsx` | Responsive layout wrapper composing Header, Sidebar, Main content, and Footer. Supports optional sidebar and breadcrumb visibility. |
| `src/components/layout/header.tsx` | Sticky header with backdrop blur. Integrates Logo, DesktopNav, ThemeSwitcher, and MobileNav button. |
| `src/components/layout/footer.tsx` | Footer with JS Atlas branding, open source note, GitHub link, and MIT License copyright. |
| `src/components/layout/sidebar.tsx` | Curriculum sidebar with 5 placeholder sections (Introduction, Fundamentals, DOM, Async, Advanced). Sub-items expand when parent is active. Hidden below `lg` breakpoint. |

### Navigation Components

| File | Description |
|------|-------------|
| `src/components/navigation/desktop-nav.tsx` | Desktop navigation bar with Home, Learn, About links. Active page indicator with animated underline. |
| `src/components/navigation/mobile-nav.tsx` | Mobile slide-out drawer with overlay backdrop, focus trap, Escape key close, body scroll lock, and ARIA attributes. |
| `src/components/navigation/breadcrumb.tsx` | Reusable breadcrumb component. Auto-generates from `usePathname()` or accepts custom `items` prop. |

### UI Components

| File | Description |
|------|-------------|
| `src/components/ui/logo.tsx` | JS Atlas SVG logo with rounded rectangle, "JS" text in JetBrains Mono, and "Atlas" wordmark. Supports multiple sizes. |

### Integration

| File | Description |
|------|-------------|
| `src/app/layout.tsx` | Updated root layout with Inter and JetBrains Mono fonts, metadata, and ThemeProvider wrapper. |
| `src/app/page.tsx` | Wrapped existing Coming Soon content in AppShell with sidebar and breadcrumb disabled for landing page. |

## Application Shell Architecture

```
┌─────────────────────────────────────────┐
│              Header (sticky)              │
│  Logo  │  DesktopNav  │  Theme │ Mobile │
├─────────────────────────────────────────┤
│  ┌────────┐  ┌──────────────────────┐  │
│  │Sidebar │  │    Main Content      │  │
│  │ (lg+)  │  │  ┌────────────────┐  │  │
│  │        │  │  │  Breadcrumb    │  │  │
│  │        │  │  └────────────────┘  │  │
│  │        │  │  ┌────────────────┐  │  │
│  │        │  │  │  Page Content  │  │  │
│  │        │  │  └────────────────┘  │  │
│  └────────┘  └──────────────────────┘  │
├─────────────────────────────────────────┤
│                 Footer                  │
│  Brand │ Open Source Note │ GitHub Link│
└─────────────────────────────────────────┘
```

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (< `md`) | Single column. Header with hamburger button. Mobile drawer for navigation. No sidebar. |
| Tablet (`md`–`lg`) | Single column. Header with desktop nav visible. No sidebar. |
| Desktop (`lg`+) | Two-column layout. Sidebar (256px) + main content area. |

### Component Hierarchy

```
RootLayout (server)
  └── ThemeProvider (client)
        └── page.tsx (server or client)
              └── AppShell (client)
                    ├── Header (client)
                    │     ├── Logo
                    │     ├── DesktopNav
                    │     ├── ThemeSwitcher
                    │     └── MobileNav (button + drawer)
                    ├── Sidebar (client) — lg+ only
                    │     └── Curriculum links
                    ├── Main (semantic)
                    │     ├── Breadcrumb (optional)
                    │     └── children (page content)
                    └── Footer (client)
                          ├── Logo + Brand
                          ├── Description
                          └── GitHub link
```

## ThemeProvider Integration Issue

### Problem

The generated `src/app/layout.tsx` incorrectly passed props to the custom `ThemeProvider` wrapper:

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
```

This caused a TypeScript error:

```
Property 'attribute' does not exist on type 'ThemeProviderProps'
```

### Root Cause

The custom `ThemeProvider` component (created in Phase 02A) already configures `next-themes` internally. It is a thin wrapper that passes children to the library's provider with hardcoded settings. Exposing props on the wrapper is not supported by the existing implementation.

### Resolution

Removed all props from the custom `ThemeProvider` usage:

```tsx
<ThemeProvider>
  {children}
</ThemeProvider>
```

### Prevention

Do not reintroduce `ThemeProvider` props in future phases. The wrapper component manages its own `next-themes` configuration.

## Design System Usage

All components use the Phase 02A design tokens:

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#5B5BD6` | Active links, focus rings, accents |
| Accent | `#22D3EE` | Dark mode active states, hover effects |
| Secondary | `#0F172A` | Headings, dark backgrounds |
| Light bg | `#F8FAFC` | Page background, sidebar background |
| Dark bg | `#020617` | Dark mode page background |
| Border | `#E2E8F0` / `#1E293B` | Dividers, borders |
| Text muted | `#475569` / `#94A3B8` | Body text, secondary text |
| Font sans | Inter | Body text, UI elements |
| Font mono | JetBrains Mono | Code, logo text |

## Accessibility Compliance

| Requirement | Implementation |
|-------------|----------------|
| WCAG AA | Color contrast ratios verified. Focus indicators visible. |
| Keyboard accessible | All interactive elements focusable. Tab order logical. |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` used correctly. |
| ARIA labels | `aria-label`, `aria-current`, `aria-expanded`, `aria-modal`, `aria-controls` applied where appropriate. |
| Focus trap | Mobile drawer traps focus within the drawer when open. |
| Escape key | Mobile drawer closes on Escape. |
| Skip link | `main` has `tabIndex={-1}` for programmatic focus. |
| Screen reader | Breadcrumb hidden when only one item. Mobile drawer labeled as dialog. |

## Validation

Successfully tested:

* `pnpm install` — PASS
* `pnpm dev` — PASS
* `pnpm build` — PASS

Manual verification:

* Header renders on all breakpoints.
* Desktop navigation visible on `md` and above.
* Mobile hamburger button visible below `md`.
* Mobile drawer opens, closes, and traps focus.
* Theme switcher toggles light/dark mode.
* Footer renders at bottom of page.
* Sidebar renders on `lg` and above.
* Sidebar sub-items expand when section is active.
* Active navigation states update on route change.
* Breadcrumb auto-generates from pathname.

## Deployment

Successfully merged into main.

Successfully deployed to Cloudflare Pages.

Production URL:

https://js-atlas.pages.dev

## Next Phase

Phase 03: Content Engine

Planned:

* MDX rendering pipeline
* Lesson content structure
* Code syntax highlighting (Shiki)
* Content navigation (previous/next)
* Table of contents generation
