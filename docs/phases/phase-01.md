# Phase 01: Foundation and Deployment

## Status

Completed

## Goals Achieved

* Created the JS Atlas GitHub repository.
* Configured Cloudflare Pages with GitHub integration.
* Set up Next.js 15 with App Router and TypeScript.
* Configured pnpm as the package manager.
* Added Tailwind CSS.
* Added ESLint and Prettier.
* Added Husky for Git hooks.
* Configured next-themes for dark mode support.
* Created the initial project structure.
* Deployed the application to Cloudflare Pages.

## Final Technology Stack

* Next.js 15
* TypeScript
* pnpm
* Tailwind CSS
* Cloudflare Pages
* next-themes
* Husky
* ESLint
* Prettier

## Cloudflare Configuration

Cloudflare Pages is connected directly to the GitHub repository.

Deployment settings:

* Framework preset: Next.js
* Build command: npx @cloudflare/next-on-pages@1
* Build output directory: .vercel/output/static
* Root directory: empty

Required compatibility flag:

* nodejs_compat

## Important Deployment Rules

Do not add the following properties to wrangler.jsonc:

* build
* pages_build_output_dir

The final wrangler.jsonc file contains only:

* name
* compatibility_date
* compatibility_flags

Do not create GitHub Actions deployment workflows.

Deployments are handled directly by Cloudflare Pages.

## Issues Encountered and Resolved

### Tailwind CSS issue

Problem:

The generated globals.css used:

* border-border
* bg-background
* text-foreground

These classes were not defined in tailwind.config.ts.

Resolution:

Replaced custom classes with standard Tailwind classes.

### Husky issue

Problem:

The pre-commit hook executed lint-staged, but no lint-staged configuration existed.

Resolution:

Temporarily disabled the pre-commit hook.

### Cloudflare Pages issue

Problem:

wrangler.jsonc contained unsupported Pages properties.

Resolution:

Removed:

* build
* pages_build_output_dir

### Runtime issue

Problem:

The deployed application failed because Node.js compatibility was disabled.

Resolution:

Enabled the nodejs_compat compatibility flag in Cloudflare Pages.

## Deployment URL

https://js-atlas.pages.dev

## Next Phase

Phase 02: Design System and Application Shell
