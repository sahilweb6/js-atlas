# JS Atlas

A free, open-source platform for learning modern JavaScript from beginner to advanced level.

**Production URL:** [https://js-atlas.pages.dev](https://js-atlas.pages.dev)

---

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages
- **Build Tool:** `@cloudflare/next-on-pages`

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9.15.0

### Installation

```bash
# Clone the repository
git clone https://github.com/sahilweb6/js-atlas.git
cd js-atlas

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build for Cloudflare Pages
pnpm pages:build
```

The static output will be in `.vercel/output/static`.

### Local Preview with Wrangler

```bash
# Build and preview locally with Cloudflare runtime
pnpm pages:dev
```

---

## Deployment

This project deploys automatically to Cloudflare Pages via GitHub Actions when changes are pushed to the `main` branch.

### Required Secrets

Add these to your GitHub repository settings (`Settings > Secrets and variables > Actions`):

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with **Cloudflare Pages:Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

Create a Cloudflare API token at: [https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

---

## Project Structure

```
js-atlas/
├── .github/workflows/    # CI/CD automation
├── .husky/               # Git hooks
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   └── components/       # Reusable React components
├── .env.example          # Environment variable template
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS design system
├── tsconfig.json         # TypeScript configuration
├── wrangler.jsonc        # Cloudflare Pages configuration
└── package.json          # Project manifest
```

---

## Development Phases

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 1 | 🚧 In Progress | Foundation and deployment |
| Phase 2 | ⏳ Planned | Design system and application shell |
| Phase 3 | ⏳ Planned | Content engine |
| Phase 4 | ⏳ Planned | Search and documentation features |
| Phase 5 | ⏳ Planned | Authentication and progress tracking |
| Phase 6 | ⏳ Planned | Interactive learning |
| Phase 7 | ⏳ Planned | Community features |
| Phase 8 | ⏳ Planned | SEO and performance |
| Phase 9 | ⏳ Planned | Curriculum generation |

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for static export |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |
| `pnpm format` | Format code with Prettier |
| `pnpm pages:build` | Build for Cloudflare Pages |
| `pnpm pages:deploy` | Build and deploy to Cloudflare Pages |
| `pnpm pages:dev` | Build and preview locally with Wrangler |

---

## License

[MIT](LICENSE)
