# JS Atlas - Project Context

## Project Information

* Project name: JS Atlas
* Repository: sahilweb6/js-atlas
* Production URL: https://js-atlas.pages.dev
* GitHub username: sahilweb6

## Mission

Create a free, open-source platform for learning modern JavaScript from beginner to advanced level.

The learning experience should be inspired by javascript.info but must contain entirely original branding, content, examples, exercises, illustrations, and UI.

## Hosting and Infrastructure

* Hosting: Cloudflare Pages
* Database: Cloudflare D1
* Analytics: Cloudflare Web Analytics
* Authentication: Auth.js with Google OAuth
* Comments: Giscus
* Source Control: GitHub

## Technology Stack

* Next.js 15 (App Router)
* TypeScript
* pnpm
* Tailwind CSS
* MDX
* Shiki
* Pagefind
* Drizzle ORM
* Auth.js
* Zod
* next-themes
* ESLint
* Prettier
* Husky
* lint-staged
* Vitest
* React Testing Library

## Deployment Configuration

Build command:

npx @cloudflare/next-on-pages@1

Build output directory:

.vercel/output/static

## Design System

Brand colors:

* Primary: #5B5BD6
* Secondary: #0F172A
* Accent: #22D3EE
* Light background: #F8FAFC
* Dark background: #020617

Design principles:

* Modern documentation aesthetic
* Mobile-first
* Accessibility-first
* Rounded components
* Minimalist interface
* Geometric illustrations

## Authentication

* Google Sign-In only
* Guest mode supported
* Guest progress stored in localStorage
* Logged-in progress stored in Cloudflare D1
* Automatically merge guest data after sign-in

## Repository Rules

* Never regenerate existing files unless explicitly requested.
* Preserve all previous functionality.
* Build incrementally.
* Every phase must compile successfully.
* Every phase must deploy successfully on Cloudflare Pages.
* Do not introduce paid services.
* Do not require a custom domain.

## Development Workflow

1. Generate one phase at a time.
2. Commit code after every phase.
3. Push to GitHub.
4. Verify Cloudflare deployment.
5. Continue to the next phase.

## Output Requirements

For every generated file:

* Show exact file path.
* Provide complete file contents.
* Explain why the file exists.
* Include migration steps if existing files must change.
* Ensure production readiness.
