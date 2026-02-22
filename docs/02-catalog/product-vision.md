# Product Vision

> Synthesized from design briefs, team interviews, strategy sessions, and design strategy presentation.
> Sources: design-brief, boris-interview, marcus-interview, marcus-positioning, strategy-alignment, ubio-2025-brief, design-focus-2025, Design Strategy 2025 deck, Insights & Next Steps deck

## Current Position (as of mid-2025)

**Decided:**
- NodeScript is a **visual programming platform for developers** — not no-code, not low-code, not a workflow automation tool. This framing is settled.
- The product serves a **dual role**: internal infrastructure for Ubio's web automation stack, and an externally-validated standalone product. Both continue.
- The four founding design principles (it just works, in it together, extendible forever, exploration encouraged) remain the bedrock. January 2025 strategy validated rather than replaced them.
- **Strategic direction**: a hybrid approach — amplify core strengths (visual programming + instant deployment) while positioning AI as a natural extension and enterprise scale as a supporting pillar. This was the consensus from the team workshop and confirmed in the Design Strategy 2025 deck.
- The product's **brand evolution** is moving from "powerful but confusing" toward "powerful and approachable" — maintaining technical depth while improving first impressions.

**Still open:**
- How to communicate "visual programming for developers" in a way that immediately conveys value to prospects (the messaging hasn't fully landed yet).
- The balance between Ubio-internal priorities and external user needs (the "Amoeba Effect" risk remains).
- Whether NodeScript pursues open source and when — identified as philosophically important but no timeline set.

## Origin Story

NodeScript grew out of Boris's background in Blender, game development, and generative algorithms. The core insight: node-based visual programming (as proven by Blender's shader/geometry nodes) is a powerful paradigm that hadn't been properly applied to backend development and automation.

Previous-generation tools like Autopilot required browser dependency — Boris wanted something built from scratch, without architectural constraints, that could run as real infrastructure.

## Core Philosophy

**"Visual programming for developers"** — not no-code, not low-code. NodeScript requires a programming mindset (understanding of variables, types, APIs, HTTP methods) but lets you work visually with instant feedback.

Key design principles drawn from Boris's Blender influence:

- **Non-destructive workflow** — like Blender's node trees, you can always see and modify the pipeline
- **General-purpose by design** — start with a powerful node paradigm, let the community extend with modules
- **Don't optimize for beginners at the expense of power users** — the Blender philosophy. A small set of well-designed tools beats a large set of purpose-specific ones
- **Composability** — everything you build becomes reusable modules for others. Platform growth compounds with contribution

## What NodeScript Is

- A development platform that happens to be visual
- A way to reduce the "activation energy" for building automated systems
- Infrastructure that deploys out of the box — no Docker, Kubernetes, or database linking knowledge needed
- A live debugger by default — you can see intermediate results as you build
- A rapid prototyping environment that can also run in production

## What NodeScript Is Not

- Not a no-code tool (requires development understanding)
- Not primarily a workflow automation platform (though it can do that)
- Not trying to replace conventional software engineering for complex, mission-critical systems
- Not prescriptive about use cases — it's a general-purpose canvas

## The Deployment Advantage

A recurring theme across interviews: the single biggest thing NodeScript removes is the infrastructure barrier. Christelle articulated this clearly — full-stack engineers often struggle with deployment. NodeScript gives you:

- Instant deployment with no setup
- Built-in monitoring and analytics
- API endpoints from any graph
- Scheduling out of the box

This means ideas that would never get built (because the setup cost exceeds the value of the experiment) actually get built.

## Long-Term Direction

As of January 2025, three strategic pathways were identified:

1. **Integration & workflow automation** — the proven market, closest to current usage
2. **AI orchestration & agents** — emerging opportunity, NodeScript is well-suited as an orchestration layer
3. **Enterprise-scale throughput** — NodeScript can handle 600+ req/sec, far beyond typical integration platforms

The team consensus leaned toward not picking just one — the platform's general-purpose nature means it can serve all three, but messaging and examples need to lead with specific, compelling use cases rather than abstract flexibility.

---

## The Original Design Brief

Before the January 2025 strategy work, NodeScript had a founding design brief that set out four experience goals:

1. **It just works** — completely web-based, share via link, runs immediately
2. **In it together** — easy collaboration with non-technical stakeholders
3. **Extendible forever** — modular architecture where every graph can become a reusable module
4. **Exploration encouraged** — immediate results let you learn while coding

These four principles remain the bedrock. The January 2025 strategy sessions essentially validated them while adding sharper market positioning.

Original success criteria: get 5 developers outside Ubio to build something useful, achieve 8/10 ease of use rating, get positive recommendation rate. The product hadn't fully hit these targets by early 2025, which drove the activation and research work.

## NodeScript Within Ubio

NodeScript exists at the intersection of two roles:

**Internal tool:** Central to how Ubio builds web automation at scale. Part of the "vertically integrated stack" — custom hardware, scripts, proxy networks, NodeScript, Autopilot, and QA tools. This internal use drives real product requirements.

**External product:** Attempting to validate standalone market fit. The 2025 business plan listed "NodeScript — Validate Market Fit" as a priority, with H1 metrics determining whether to continue or pivot. Strategy: low burn, constant investment, positioned as strategic R&D.

This dual nature creates both strength (real-world production demands make the product better) and tension (internal priorities may not align with external user needs). The "Amoeba Effect" — products morphing to each customer's needs, preventing standardization — is a recognized risk.

## Company Context

Ubio's broader 2025 direction: "Agents of Scale" — positioning as the infrastructure layer between AI startups (which lack scale/reliability) and big tech (which doesn't prioritize this). NodeScript is the engine that makes this possible. Target: £4.8M ARR, 29 new customers, moving from 78% revenue concentration in 2 clients toward diversified mid-market.
