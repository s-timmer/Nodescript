# NodeScript Context Library

Product context synthesized from team transcripts, interviews, strategy sessions, Google Drive documents, and slide deck presentations.
Built from 25 source documents spanning 2023–2025.

Each catalog entry starts with a **"Current Position"** section summarizing what's been decided and what remains open — so you can quickly see the resolved state without reading the full discussion history.

## Structure

```
docs/
  01-sources/       Raw transcripts (see INDEX.md for guide)
  02-catalog/       Synthesized reference documents
```

## Catalog

### Context (what happened)

| Document | What it covers |
|----------|---------------|
| [product-vision.md](02-catalog/product-vision.md) | Origin story, design brief, core philosophy, Ubio context, what NodeScript is and isn't |
| [ideal-customer-profile.md](02-catalog/ideal-customer-profile.md) | Target users, developer spectrum, personas, experimenter filter, usage spectrum |
| [positioning.md](02-catalog/positioning.md) | Competitive analysis (n8n, Pipedream, Node-RED), messaging, freemium strategy |
| [activation-strategy.md](02-catalog/activation-strategy.md) | Onboarding research, user feedback, content strategy, activation tasks, metrics |
| [use-cases.md](02-catalog/use-cases.md) | Real examples from team members and enterprise demos |
| [technical-roadmap.md](02-catalog/technical-roadmap.md) | Architecture, Q1 priorities, active workstreams, integration status |

### Strategy (what to do)

Read these in order — each builds on the previous.

| Document | What it covers |
|----------|---------------|
| [5c-analysis.md](02-catalog/5c-analysis.md) | Situational scan: Company, Customers, Competitors, Collaborators, Climate (includes fresh 2026 market research) |
| [rumelt-kernel.md](02-catalog/rumelt-kernel.md) | Core diagnosis, guiding policy ("the visual developer workbench"), and 5 coherent actions |
| [personas-jtbd.md](02-catalog/personas-jtbd.md) | 2 primary personas + 1 aspirational, with Jobs to Be Done statements and design implications |

### Design (how it should feel)

| Document | What it covers |
|----------|---------------|
| [design-browsing-system.md](02-catalog/design-browsing-system.md) | Design principles for the dashboard shell — navigation, graph browsing, onboarding, empty states |
| [visual-style-guide.md](02-catalog/visual-style-guide.md) | Visual language — color, typography, icons, layout, components, motion, implementation patterns, and anti-patterns to avoid |

## How to Use

These documents are the "why" behind the product. Reference them when:
- Making design decisions (does this align with the vision and the personas?)
- Writing copy or content (what language resonates? what jobs are we solving?)
- Prioritizing features (does this serve the guiding policy or dilute it?)
- Onboarding new team members (what's the context and where are we headed?)

## Living Document

This library grows as new source material is added. Process:
1. Drop raw transcripts/docs into `01-sources/`
2. Update the source INDEX.md
3. Synthesize new insights into existing catalog entries or create new ones
