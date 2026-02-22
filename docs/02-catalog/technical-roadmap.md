# Technical Roadmap & Architecture Decisions

> Synthesized from engineering updates, strategy sessions, and design strategy presentations.
> Sources: engineering-update, weekly-meeting, christelle-interview, boris-interview, strategy-alignment, Design Strategy 2025 deck, Insights & Next Steps deck

## Current Position (as of mid-2025)

**Decided:**
- **Q1 2025 was "fix before build"** — stabilize and improve existing features before adding new ones. This was driven by a recurring bug loop where fixes introduced new issues.
- **Cascade dependency updates** were the top engineering priority — unblocking the module ecosystem so published updates flow to dependent graphs.
- **Sub-graphs shipped** with backwards compatibility and migration deadline (July 2025). This is a key composability feature.
- **Notebooks deliberately kept internal** — the team decided not to expose them to external users to avoid supporting something that may be replaced by custom UI features.
- **General-purpose architecture is non-negotiable** — built without heavy external dependencies, intentionally not prescriptive about use cases, following Blender's "platform provides primitives, community builds on top" model.
- **Visual complexity ceiling acknowledged** — visual programming gets messy with too many nodes. This is a natural constraint. Complex systems should eventually move to conventional code. NodeScript's sweet spot is rapid prototyping and medium-complexity production workflows.

**Still open:**
- Open source timeline — identified as important for developer trust but no concrete plan.
- Third-party integration verification status (Slack enterprise concerns, HubSpot process) — these were in progress as of January 2025.
- AI node integration depth — being built but scope of "AI-assisted graph building" (MCP approach) isn't defined.
- Production readiness improvements (error handling, monitoring, debugging) — flagged by users but not yet on a specific timeline.

## Current Architecture

### Stack
- **Backend:** Multiple TypeScript packages with different functionalities
- **Database:** MongoDB (NoSQL, JSON format)
- **Frontend:** Vue.js with TypeScript, state management library
- **Infrastructure:** Docker + Kubernetes on Google Cloud (GCP)
- **Deployment:** Argo for deployment health visualization
- **Version control:** GitHub (also handles deployments)

### Design Principles
- API service, background tasks, and frontend run in separate containers
- If one service fails (e.g., payment provider), it doesn't break the entire platform
- Related logic stays contained while maintaining interconnections
- Reduces surface area of failures

### Performance
- Can handle 600+ requests/second — far beyond typical integration platforms
- This throughput advantage breaks competitor pricing models (per-transaction pricing becomes prohibitive at scale)

---

## Q1 2025 Focus: Stability & Maintainability

The team aligned on a "fix before build" approach for Q1:

> "Making it simpler and more maintainable" — before adding new features, stabilize and improve existing ones.

This was driven by a recurring problem: fixing one bug introduces another ("back and forth loop"). The codebase needed structural improvements before it could support the next wave of features.

---

## Active Workstreams (January 2025)

### Cascade Dependency Updates
- Requested for over a year
- Multiple related tickets
- Enables publishing module updates that flow to dependent graphs
- Two-part approach: unpinned (always latest) and pinned (specific version) dependencies
- Neither was working correctly as of late January

### Sub-Graphs
- Graph inputs now work everywhere
- Backwards compatibility maintained
- Deprecation warnings for old input usage (migration deadline: July 2025)
- Key composability feature: lets users build reusable sub-workflows

### Service Accounts
- Replacing personal access tokens
- Required infrastructure for third-party integrations
- Enables automated/programmatic access to NodeScript

### Third-Party Integrations
- **Notion:** One-click OAuth working, custom authentication scheme
- **Slack:** More complex — app verification required, enterprise workspace licensing concerns
- **HubSpot:** In verification process
- Moving to standard OAuth/custom authorization patterns

### Custom UI in Graphs
- Christelle finished work on customizable UIs within graph nodes
- Allows richer interaction beyond standard node inputs/outputs

### AI Nodes
- Being integrated into the platform
- "Generate with AI" feature for code generation within nodes
- Positioned as the platform for building AI agents visually

### URL Sharing
- Matt working on sharing graphs with selected node states
- Enables sharing specific workflow snapshots

---

## Features Kept Internal

### Notebooks
- Made more stable but deliberately kept internal-only
- Concern: maintenance burden and potential obsolescence when custom UI features mature
- Decision: don't expose to users yet to avoid supporting something that may be replaced

---

## Documentation Gaps Identified

- Hooks documentation was entirely missing
- Metrics capture had sampling issues — not comprehensive
- Library organization needed improvement (should be categorized: AI, scraping, databases)
- Change communication to the team needed formalization (plan to update official channel)

---

## Strategic Technical Decisions

### Open Source Intent
- Important for developer trust and platform longevity
- Addresses vendor lock-in concerns (a real objection from developer prospects)
- Boris identified this as philosophically important

### General-Purpose Architecture
- Built without heavy external dependencies (mostly in-house for control)
- Intentionally not prescriptive about use cases
- Node paradigm + community modules = extensibility without core complexity
- Follows Blender's model: platform provides primitives, community builds on top

### Visual Complexity Ceiling
- Acknowledged that visual programming gets messy with too many nodes
- This is a natural constraint, not a bug
- Complex systems eventually outgrow visual representation — that's when you move to conventional code
- NodeScript's role: rapid prototyping and medium-complexity production workflows

---

## What's Next (as of end of January 2025)

Priorities emerging from strategy sessions:
1. Resolve dependency cascade publishing (unblocks module ecosystem)
2. Complete third-party integration verification (Slack, HubSpot)
3. Improve library discoverability and organization
4. Build compelling templates/example apps
5. Invest in AI orchestration features (agent patterns, LLM integration)
6. External developer interviews to validate roadmap priorities
