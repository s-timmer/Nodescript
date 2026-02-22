# Ideal Customer Profile

> Synthesized from user interviews, feedback sessions, strategy discussions, onboarding research, and survey results.
> Sources: christelle-interview, boris-interview, marcus-interview, feedback-activation, strategy-alignment, recruit-external-devs, onboarding-research-feedback, interview-insights-workshop, Survey Results 2025 deck, Research Plan Presentation deck, Design Strategy 2025 deck

## Current Position (as of mid-2025)

**Decided:**
- The ICP is **developers in the 2–4 range** on the skill spectrum: people with a programming mindset who understand APIs, JSON, variables and types, but don't want to build full infrastructure for every idea. This is confirmed across all sources.
- The strongest predictor of success is **willingness to experiment and tweak**, not raw technical skill. Users who want off-the-shelf solutions aren't the right fit, even if technically capable.
- The User Research Plan defined the target precisely: developers/technical users who work with APIs/integrations, have tried workflow automation tools but found them limiting, and are comfortable with some coding.
- **Survey data (2025)**: Of 436 total signups, activation improved to ~30% among surveyed users. Top stated reasons for not activating: "didn't have time" (41%), "didn't find what I needed" (29%), "too complicated" (18%).
- The **User Progression Framework** (from Design Strategy deck) maps the journey: Newcomer → Explorer → Builder → Expert, with distinct needs and intervention points at each stage.

**Still open:**
- Whether "creative developers and technical hobbyists" (non-CS-background makers) represent a real growth segment or a distraction from core developer focus.
- Whether AI tools expanding the developer population genuinely creates a larger addressable market for NodeScript, or whether those users actually need something simpler.
- The AI-interest validation question: do external developers independently mention AI features, or is this only an internal enthusiasm? (This was flagged as a key test during external interviews.)

## The Developer Spectrum

The team mapped developer skill levels on a 0–5 scale:

- **0–2**: Non-programmers, citizen developers → Zapier, Make, Gumloop territory
- **2–4**: Technical people with development understanding but not building conventional software daily → **NodeScript's sweet spot**
- **4–5**: Expert developers with infrastructure-as-code mindset → hardest to convert, already have their tools

## Who NodeScript Is For

**Core profile:** Someone with a programming mindset who wants faster execution.

They understand:
- Variables, types (numbers, strings, arrays, objects)
- APIs and HTTP methods (GET, POST, PUT)
- Headers, data formats, JSON
- Basic development concepts (endpoints, authentication)

But they don't want to (or can't justify the time to):
- Set up infrastructure from scratch
- Configure Docker/Kubernetes
- Write boilerplate deployment code
- Build a full project for a small automation

### Specific Personas Observed

**The full-stack developer with side projects**
- Has ideas but the setup cost prevents execution
- Uses NodeScript for personal automations, IoT projects, quick tools
- Examples: sunrise/sunset notifier, temperature monitor, Google Sheets CMS
- Christelle is the archetype here

**The prototyper / API explorer**
- Uses NodeScript to test API connections quickly
- Validates approaches before committing to a full codebase
- Values the instant feedback loop — sees response structures without reading docs
- Boris uses NodeScript this way (JWT inspection, key generation, API testing)

**The automation builder**
- Needs to connect services and build workflows
- Wants more power and flexibility than Make/Zapier
- Can handle JSON and custom data manipulation
- Example: CRM-to-Google Ads audience sync (hotel management demo)

**The AI tinkerer**
- Building agents, processing support tickets, experimenting with LLMs
- NodeScript serves as orchestration layer
- Example: Slack AI chatbot with decision trees and extensible actions
- Marcus identified this as a growing segment

## Who NodeScript Is Not For

- Non-technical users who need pre-built, click-to-configure workflows
- Enterprise teams needing deep vendor-specific integrations with SLAs
- Developers who are philosophically opposed to visual programming
- People looking for a drag-and-drop website builder

## The Middle Market Opportunity

Marcus identified a potentially underserved segment: people who have development experience but don't do conventional software development as their primary job. AI tools are expanding this group — more people can write code with AI assistance, but they still need infrastructure and deployment. NodeScript fills that gap.

## Activation Reality (January 2025)

- ~8% activation rate (52 out of ~650 signups)
- Users who get 1:1 guidance convert well
- The "blank canvas" problem: external users see an empty editor and don't know where to start
- Internal team members hack through complexity successfully; external users need more scaffolding
- Cost per acquisition: ~£7.50/user

---

## Refined ICP Signals (from later research)

### The "Experimenter" Filter

The onboarding research and recruitment planning sessions refined the ICP further. The strongest predictor of success isn't technical skill level — it's **willingness to experiment and tweak**. Users who want pre-built solutions that "just work" aren't the right fit, even if they're technically capable.

Boris's framing: the ideal customer is someone who "dives deeper" — they don't just use templates, they modify them, create their own modules, and push the boundaries of what's possible. This maps to a personality trait (curiosity, maker mindset) as much as a skill set.

### The "Creative Developer" Persona

The recruitment sessions identified a broader persona beyond traditional developers: **creative developers and technical hobbyists** who share the developer mindset (experimentation, building, tweaking) but may lack formal CS backgrounds. They have programming intuition from adjacent fields.

### Usage Spectrum Observed

Real users span a wide spectrum:
- **10-minute-a-week utility users**: use NodeScript for quick tasks (HTTP inspection, encoding, data transforms) on the free tier
- **Side project builders**: create personal automations, IoT projects, tools for friends
- **Active paid users**: build sophisticated systems (e.g., Liam's AI content platform)
- **Internal power users**: build production-grade automation workflows

The challenge: supporting this full spectrum without compromising UX for any segment.

### Market Validation Signal

From the January 27 recruitment discussion: if external developers interviewed independently don't mention AI features, that's a signal the AI market for NodeScript may not exist outside the team's enthusiasm. Important reality check on the AI positioning.
