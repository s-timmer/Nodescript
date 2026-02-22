# NodeScript

Visual node-based workflow editor — build production workflows without managing infrastructure.

## Tech Stack

- React 18 + TypeScript (strict) + Vite 6
- Styling: Tailwind CSS with shadcn/ui (Radix primitives)
- Testing: Vitest + React Testing Library
- Package manager: npm (use package-lock.json)

## Commands

- `npm run dev` — start dev server (port 3000)
- `npm run build` — typecheck + production build (outputs to /build)
- `npm run lint` — run ESLint
- `npm run lint:fix` — run ESLint with auto-fix
- `npm run typecheck` — TypeScript type checking only
- `npm run format` — format with Prettier
- `npm test` — run Vitest tests
- `npm run test:watch` — run Vitest in watch mode

## Code Conventions

- Use named exports (not default exports) for components
- Path alias: `@/` maps to `src/`
- `cn()` utility lives at `src/components/ui/utils.ts`
- Use Tailwind utility classes; avoid custom CSS
- Use existing shadcn/ui components from `src/components/ui/` before building custom ones

## Architecture

```
src/
  components/
    ui/          — shadcn/ui primitives (follow shadcn patterns when editing)
    *.tsx        — application components (pages/features)
    figma/       — Figma-specific helper components
  imports/       — auto-generated SVG/component imports from Figma (do not edit)
  assets/        — static image assets from Figma (do not edit)
  test/          — test setup files
  index.css      — global styles + Tailwind + CSS custom properties
  main.tsx       — app entry point
  App.tsx        — root component with sidebar + content routing
```

## Key Patterns

- App.tsx manages all top-level routing via state (`activeMenuItem`, `showSettings`, etc.) — no router library
- Vite config has `figma:asset/*` aliases mapping to `src/assets/` — these are auto-generated
- The LandingPage and SignUpPage components exist but are currently parked (not rendered)

## Product Context

See `docs/` for synthesized product context from team transcripts and strategy sessions:

- `docs/02-catalog/product-vision.md` — origin story, philosophy, what NodeScript is/isn't
- `docs/02-catalog/ideal-customer-profile.md` — target users, personas, developer spectrum
- `docs/02-catalog/positioning.md` — competitive landscape, messaging strategy
- `docs/02-catalog/activation-strategy.md` — onboarding challenges, content approach, metrics
- `docs/02-catalog/use-cases.md` — real examples from team and enterprise demos
- `docs/02-catalog/technical-roadmap.md` — architecture, Q1 priorities, active workstreams

Raw source transcripts live in `docs/01-sources/` (see INDEX.md for guide).
