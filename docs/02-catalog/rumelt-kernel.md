# Rumelt's Kernel — NodeScript Strategy

> Applying Richard Rumelt's "kernel of good strategy" framework.
> A good strategy has three parts: a diagnosis, a guiding policy, and coherent actions.
> Bad strategy is "a bit of everything" — spreading resources across conflicting goals.
> Built from the 5C analysis and 25 source documents. See [5c-analysis.md](5c-analysis.md) for the situational assessment.

---

## Diagnosis

*The diagnosis names the core challenge. Not a list of problems — the one thing that, if you got it right, would unlock everything else.*

### The core challenge

**NodeScript is a powerful product with no path to its own users.**

The product works. Users who push through onboarding friction find genuine, sticky value. The architecture is sound, the deployment advantage is real, the visual debugging is unique. Internal usage at Ubio proves it daily. Even the ICP is identified — developers in the 2-4 range who want to build things without infrastructure overhead.

But none of that matters without a self-sustaining user acquisition loop. Right now:

- There is no developer community (no open source, no GitHub stars, no forum, no contributor ecosystem)
- There is no integration ecosystem (a handful of third-party connectors vs. n8n's 400+)
- There is no brand presence (no dev advocates, no content following, no conference presence)
- There is no module marketplace (the composability vision depends on a community that doesn't exist)
- Activation remains a funnel problem — even users who sign up can't reliably find their way to value

The team identified three strategic paths in January 2025 (user-centric, AI, enterprise) and chose "all three." Rumelt would call this the classic bad strategy pattern: refusing to choose because every option seems important. The result is a product that does many things well but isn't known for any of them.

Meanwhile, the market has moved fast. n8n went from competitor to category leader ($2.5B valuation, 723 employees). GumLoop proved the visual-AI market is real. Pipedream got acquired by Workday. Vibe coding tools are redefining what "fast" means for developers. The window for NodeScript to establish a position is narrowing.

**The diagnosis in one sentence:** NodeScript has product-market fit evidence trapped inside a product that the market can't find, in a market that's consolidating around funded competitors.

---

## Guiding Policy

*The guiding policy is the approach chosen to address the diagnosis. It says what you will and won't do. It creates advantage by focusing resources rather than spreading them.*

### Become the developer's visible workbench — not another automation platform

The guiding policy has three parts:

**1. Choose visibility over features.**

Stop building new capabilities for now. The product has more power than users can discover. Every hour spent on a new feature that nobody sees is wasted relative to an hour spent making the existing product findable and understandable. This means:

- Open source the core (or a meaningful subset) to create a public artifact developers can find, star, fork, and contribute to
- Build in public: ship a changelog, write about architecture decisions, have Boris talk about the Blender-inspired design philosophy
- Invest in the first 15 minutes of the user experience as if it's a separate product

**2. Own the "visual workbench" position, not the "automation platform" position.**

NodeScript can't outspend n8n on workflow automation. It can't outpolish GumLoop on AI integrations. But no one owns the *developer workbench* position — the tool that's always open for API prototyping, quick utilities, visual debugging, and experimental builds that might grow into production. This is what real users already use it for (Boris's JWT inspection, Christelle's IoT monitor, the utility toolkit pattern). It's authentic to how the product is actually used.

This positioning is:
- Defensible: it aligns with Boris's architectural philosophy (general-purpose primitives, not polished per-integration UI)
- Differentiated: competitors position as automation platforms (n8n), AI workflow tools (GumLoop), or serverless dev platforms (Pipedream). "Visual developer workbench" is unclaimed.
- Expandable: workbench users naturally evolve into automation builders and production deployers — the same freemium funnel, but with a more honest entry point

**3. Build the ecosystem before building the enterprise.**

The January 2025 strategy said "enterprise will come organically." That's true — but only if there's an ecosystem generating demand. Right now there's no flywheel:

- No community → no modules → no templates → no examples → no activation → no community

Break this loop by making community the #1 investment. MCP compatibility, open source, a module marketplace with even 20 community-contributed modules, and a small but active Discord/forum would change the growth trajectory more than any feature.

### What this means you stop doing

- Stop trying to position as a workflow automation platform (n8n owns this)
- Stop treating AI as a "must-have pillar" that needs equal investment (it's a use case on the workbench, not a separate identity)
- Stop building for enterprise sales before you have a developer community that generates enterprise demand organically
- Stop spreading across three strategic paths simultaneously

---

## Coherent Actions

*Coherent actions are specific steps that support each other and all point in the same direction. They create advantage through coordination, not through a list of independent initiatives.*

### Action 1: Ship the "first 15 minutes" as a product

The activation bottleneck is precisely located (dashboard → aha moment). Treat this as a dedicated product effort, not a series of incremental improvements.

- Implement the Quick Win tutorial system (already prioritized, partially started)
- Build 5 hero examples that demonstrate the workbench pattern: API prototyping, a personal automation, an AI agent, a data transform utility, and one creative/surprising example
- Add contextual guidance that surfaces features at the moment they're useful (frames, loops, variables, modules)
- Measure time-to-first-successful-graph as the core metric, not signups

*Why this is coherent:* Better activation feeds every other action. More activated users = more community members = more modules = more examples = better activation. This is the flywheel starter.

### Action 2: Open source and build in public

- Open source the core engine (or a meaningful, functional subset) — this is the single highest-leverage move for visibility, trust, and community building
- Launch a public GitHub repository with contributing guidelines
- Start a lightweight community space (Discord or GitHub Discussions)
- Publish Boris's architecture thinking as blog posts / talks — the Blender-inspired philosophy is genuinely interesting to developers and differentiating content

*Why this is coherent:* Open source creates the artifact that developers find, trust, and contribute to. It's the foundation for the module ecosystem that the product vision depends on. It's also the trust signal that competitors with open/fair-code models (n8n, Node-RED) have and NodeScript doesn't.

### Action 3: Ship MCP compatibility

- Implement MCP server support so NodeScript graphs can be invoked as tools by AI agents
- Implement MCP client support so NodeScript can consume the existing 10,000+ MCP servers as data sources/actions
- This instantly expands the integration ecosystem without building custom connectors one by one

*Why this is coherent:* MCP is the new integration standard. It solves the integration gap (vs. n8n's 400+ connectors) with a protocol-level approach rather than one-by-one connector building. It makes the AI use case real without requiring NodeScript to build AI features — users bring their own AI tools via MCP.

### Action 4: Position and message as the developer workbench

- Redesign the landing page around the workbench framing: "The visual workbench for developers who build things"
- Lead with the specific use cases that demonstrate workbench behavior (API prototyping, quick utilities, personal automations that grow into production)
- Show the "things that would never get built" narrative — the activation energy reduction story
- Use Boris's actual development style as the proof point (JWT inspection, API testing, key generation — then show how the same tool scales to production)

*Why this is coherent:* The positioning must match what the product actually is and how successful users actually use it. "Visual developer workbench" describes reality; "workflow automation platform" describes aspiration. Authentic positioning converts better and attracts the right users.

### Action 5: Create the module flywheel

- Launch a module gallery (even with just 20 modules) that demonstrates the composability vision
- Make it trivially easy to publish a graph as a reusable module
- Feature community modules prominently — make contributors feel celebrated
- Use the hero examples from Action 1 as the seed content

*Why this is coherent:* The module ecosystem is the core promise of Boris's architectural vision. It's what makes NodeScript a platform rather than a tool. But it requires a community (Action 2), discoverability (Action 4), and activated users who understand the tool well enough to create modules (Action 1).

---

## How these actions reinforce each other

```
First 15 minutes (Action 1) → more activated users
    → who discover open source repo (Action 2) → community grows
        → community builds modules (Action 5) → more examples and use cases
            → better activation (Action 1) → cycle accelerates

MCP compatibility (Action 3) → instant integration breadth
    → more use cases possible → better examples (Action 1)
    → AI developers find NodeScript through MCP ecosystem (Action 2, 4)

Workbench positioning (Action 4) → attracts the right users
    → who are predisposed to experiment and build (ICP match)
    → who create interesting projects → content for marketing (Action 4)
    → who publish modules (Action 5)
```

The actions form a flywheel, not a checklist. Each one makes the others work better. This is what Rumelt means by "coherent" — the strategy creates advantage through the coordination of actions, not through any single action alone.

---

## What success looks like (12 months)

- Public GitHub repo with 1,000+ stars and first external contributors
- MCP compatibility shipped (both server and client)
- Time-to-first-successful-graph under 10 minutes for new signups
- 50+ community-contributed modules in the gallery
- Active community space with 500+ members
- Landing page clearly communicates the workbench position
- Activation rate above 40% for new signups
- NodeScript appears in "developer tools" conversations, not just "automation tools" conversations
