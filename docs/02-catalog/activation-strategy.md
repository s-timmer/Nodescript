# Activation & Onboarding Strategy

> Synthesized from feedback sessions, strategy discussions, user research, survey results, and activation research presentations.
> Sources: feedback-activation, weekly-meeting, strategy-alignment, content-strategy, onboarding-research-feedback (Mar 2025), recruit-external-devs, content-strategy-doc, activation-tasks, Survey Results 2025 deck, Activation Research deck, Research Plan Presentation deck, Design Strategy 2025 deck

## Current Position (as of mid-2025)

**Decided:**
- The core problem is confirmed as **onboarding gap, not ICP mismatch** — the right users are signing up but can't find their way to value. Evidence: users who get 1:1 guidance convert well; survey showed "didn't have time" and "didn't find what I needed" as top drop-off reasons, not "wrong product."
- **"Quick Win" tutorials are the #1 priority** — the survey results deck explicitly recommended this. Users need guided paths to a first success within the critical 7-day activation window.
- The bottleneck is precisely located: between **landing on the dashboard** and reaching the **aha moment**. It's not just the blank canvas — it's the gap between seeing the interface and understanding what's possible.
- **Multiple learning paths are needed** — video learners, reverse engineers, trial-and-error experimenters, and documentation readers all need different entry points. One-size-fits-all fails.
- **24 prioritized activation tasks** exist from the March 2025 research. ~7 are completed (onboarding panel, examples gallery, node auto-resizing, node search, visual vs code explanation, quick-win tutorials). High-priority remaining: loop documentation, error handling visualization, example gallery by use case.
- **Content strategy**: educational content that naturally uses NodeScript (not "try NodeScript" marketing), targeting SEO for "how to automate X" queries. Technical writer hired for this.
- **User Progression Framework** adopted: Newcomer → Explorer → Builder → Expert, with specific design interventions at each transition.

**Still open:**
- Video tutorials have been identified as important but not yet systematically produced.
- The paradigm shift problem (imperative JS thinking → graph-based composition) has no clear solution beyond better onboarding — it may be an inherent adoption friction.
- Production readiness gaps (error handling, monitoring, debugging) block the Builder → Expert transition but are engineering problems, not design ones.
- The external developer interview results haven't been fully synthesized into activation strategy yet.
- AI-assisted graph building (MCP approach) is listed as a task but timeline is unclear.

## The Problem

As of January 2025, NodeScript had an ~8% activation rate: roughly 52 activated users out of ~650 signups. "Activated" means actually creating/editing graphs — not just logging in.

Two competing hypotheses:
1. The wrong users are signing up (ICP mismatch)
2. The right users are signing up but can't see immediate value (onboarding gap)

Evidence suggests it's mostly #2. Users who receive 1:1 guidance convert well. The platform's power is real — internal team members build sophisticated workflows — but external users face a blank canvas and don't know where to start.

## The Blank Canvas Problem

The team described NodeScript's current onboarding as a **"box of Lego with no instructions."** Users land in an empty graph editor with access to powerful tools but no clear starting point.

Current first-run examples (base64 encoding, simple HTTP requests) are too basic to demonstrate real value. They show *how* things work but not *why you'd want to use this*.

## Three-Pronged Approach

The team aligned on three parallel workstreams:

### 1. Fix the Platform
- Resolve bugs and reliability issues that erode trust during first experience
- Improve library discoverability (organized by category: AI, scraping, databases)
- Better documentation (hooks documentation was entirely missing)
- Cascade dependency updates (requested for over a year, affects reliability)

### 2. Create Better Content & Onboarding
- Templates and pre-built examples that show real utility
- Not just "here's how the tool works" but "here's what you can build"
- Technical how-to articles targeting SEO ("how to automate X")
- Video walkthroughs of real use cases
- Content writer hired specifically for long-form how-tos

### 3. Understand Users Better
- Internal interview phase (completed January 2025): validated that NodeScript requires development understanding
- External interview phase (planned): talk to developers outside the team
- Enterprise demo learnings: clients need to understand the tool well enough to imagine their own use cases
- Track daily active users over time to measure impact of improvements

## Content Strategy for Activation

### Hired Writer Approach
- Upwork posting for technical writer, 2.5 days/week, £40-50/hour
- Requirements: development concept understanding, fluent English, technical writing background
- Three content types:
  1. **Long-form how-tos**: "How to set up an automated backend using NodeScript"
  2. **Tutorial case studies**: "Here's how I built X"
  3. **Concept articles**: "Fundamentals of automation"
- Distribution: Reddit, LinkedIn, owned channels
- Dan converts written content into video

### Positioning in Content
- NOT "try NodeScript" marketing
- Instead: educational content that naturally uses NodeScript as the tool
- SEO angle: appear when people search "how to automate X"
- Target audience: freelance developers, DevOps engineers, full-stack engineers wanting faster solutions

## Templates vs. Tutorials

Discussion around two approaches:
- **Templates**: Pre-packaged use cases users can fork and modify (lower friction, but risk feeling canned)
- **Tutorials**: Step-by-step guides that teach while building (higher investment, but builds understanding)

Emerging consensus: both are needed. Templates for quick wins, tutorials for deeper engagement. The key insight from Boris: template apps that users can copy and extend, combined with modules that become reusable for the community.

## Metrics (January 2025)

- 605 total signups
- 58 daily active users (30-day window)
- ~80 signups in January (~2-3/day)
- CPA: ~£7.50/user
- LTV:CAC ratio: 0.81:1 (negative ROI at 2% conversion rate; target is 2:1)
- Ad spend scaled back from ~£100/day to ~£15/day (diminishing returns on Reddit/Instagram)

---

## Update: Real User Onboarding Feedback (March 2025)

Five early users were studied in depth (Jack, Liam, Phil, Matt, and others). Their feedback significantly sharpened the picture:

### The Specific Bottleneck

The friction sits between **"landing on the dashboard"** and reaching the **"aha moment"** where the product's value clicks. This is more precise than the earlier "blank canvas" framing — it's not just about emptiness, it's about the gap between seeing the interface and understanding what's possible.

### Learning Style Diversity

Users approach NodeScript learning in fundamentally different ways:
- **Video learners** — want walkthroughs they can follow
- **Reverse engineers** — want to open existing workspaces and trace dependencies backward
- **Trial-and-error experimenters** — want examples they can break and rebuild
- **Documentation readers** — want structured reference material

One-size-fits-all onboarding fails a portion of users. Multiple entry points are needed.

### The Paradigm Shift Problem

JavaScript developers experience real cognitive load translating imperative thinking to graph-based composition. Some resort to code nodes for complex transformations rather than mastering visual composition. This is a deeper problem than just "learning the UI" — it's a mental model shift.

### Hidden Features Problem

Users consistently didn't discover powerful features:
- Frames, loops, and conditional logic
- Ability to create variables directly in graphs
- Creating reusable nodes and modules
- Workspace-level search to find how nodes are used

These features exist but are poorly signposted. Discovery is as much a problem as functionality.

### Production Readiness Gaps

Users moving from hobby to production hit hard walls:
- Error handling is weak — no traditional logging or stack traces
- Monitoring and debugging are painful for deployed systems
- Gap between free-tier casual usage and production usage is steep

### The Template Trap (Refined)

Pre-built templates attract non-technical users but risk rapid abandonment — users who want "off-the-shelf apps" aren't the right audience. The ideal users are those willing to **tweak and experiment** with templates, not just run them as-is. This confirmed Boris's earlier instinct about filtering for experimenters.

### Bright Spot: Liam

One user (Liam) became highly active and paid, building a sophisticated AI content platform in NodeScript. Pattern: highly motivated user who pushed through onboarding friction → found genuine deep value. The question is how to lower that friction without filtering out this type of power user.

## External Interview Strategy

The team planned external developer interviews with specific methodology:
- **Two-part interview design**: first understand their workflows and pain points, then introduce NodeScript's value prop
- **Value proposition one-pager**: rather than showing the product, show a list of capabilities and have developers prioritize which matter most
- **Recruitment channels**: LinkedIn, Reddit, existing survey respondents, paid interviews at €100/voucher
- **Key learning goal**: not "would you use this?" (unreliable signal) but "where are your current pain points and how are you hacking around them?"
- **Screening for experimenters**: filter for people willing to tweak/build, not those wanting pre-built solutions
