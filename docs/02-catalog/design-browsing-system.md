# Design Outline: The Browsing System

> Design direction for the NodeScript dashboard — everything outside the graph editor.
> This is an outline, not a spec. It sets direction and principles, not pixel values.
> Grounded in: [personas-jtbd.md](personas-jtbd.md), [rumelt-kernel.md](rumelt-kernel.md), [activation-strategy.md](activation-strategy.md)

---

## What the browsing system is

The browsing system is the shell around the graph editor. It's where users navigate, organize, discover, and manage their work. It includes the sidebar navigation, the graph list, workspace management, endpoints, schedules, variables, monitoring — and critically, the onboarding experience that greets new users.

The browsing system is **not** where NodeScript's core value lives. The value is in the editor — building and running graphs. The browsing system's job is to get people into the editor as fast as possible, and to stay out of their way once they know their way around.

---

## The key tension

The browsing system has to serve two very different moments:

**Moment 1: "What is this?"** — A new user has just signed up. They land on the dashboard. They need to understand what they can do here and feel a pull to try something. Every second of confusion is a potential drop-off. The browsing system needs to be warm, guiding, and opinionated about what to do next.

**Moment 2: "Where's my thing?"** — A returning user opens NodeScript to check on a running endpoint, tweak a graph, or build something new. They know what they want. The browsing system needs to be fast, quiet, and spatially predictable. They should be able to navigate by muscle memory.

Most developer tools optimize for Moment 2 and bolt onboarding on top. The result is an empty dashboard that terrifies new users. NodeScript's current state leans this way — the graph list, sidebar, and empty content areas are built for power users who don't exist yet.

The principle: **design for Moment 1, don't break Moment 2.**

---

## Design principles

### 1. The dashboard is a launchpad, not a filing cabinet

The current graph list is organized like a file system: folders, subfolders, items with metadata columns. This is a Moment 2 pattern — useful when you have 50 graphs and need to find one. Useless (and intimidating) when you have zero.

**Direction:** The default view should be activity-oriented, not file-oriented. What did I work on last? What's running? What could I try next? The file/folder view is a secondary mode you switch into when your collection grows.

Think of it as: VS Code's Welcome tab vs. its Explorer panel. New users see the Welcome tab. Power users live in the Explorer. Both exist, neither blocks the other.

**What this means for the current UI:**
- The graph list's tree structure is fine for later, but shouldn't be the first thing a new user encounters
- The "Starter Graphs" folder with tutorials is the right content but wrong container — it looks like someone else's files, not an invitation to build
- A "recent / running / suggested" view would serve both moments: returning users see their recent work, new users see curated starting points

### 2. Show the product working before asking users to work

The strongest onboarding signal in the research was: users who *see* NodeScript working understand the value immediately. The blank canvas is the enemy.

**Direction:** The browsing system should contain living examples — graphs that are actually running, showing real data flowing through them. Not screenshots, not descriptions. Actual running graphs with visible outputs.

**What this means:**
- The QuickStart panel currently has 3 static text steps. It should show a live mini-graph or animated preview of one running
- Example graphs should be explorable from the dashboard — click to see the graph structure and its live outputs, one more click to fork and edit
- The "Explore our examples" step is the most important one, not the third

### 3. Three layers of navigation, each with a clear job

The current sidebar mixes concerns: workspace context (org/workspace selectors), content navigation (Graphs, Endpoints, Schedules...), and system settings. This works but doesn't communicate hierarchy.

**Direction:** Three distinct navigation layers, each answering a different question:

**Layer 1 — "Where am I?"** (Context)
The org and workspace selectors. These set the scope for everything below. They should feel like a persistent header, not competing with the navigation items. Most users will rarely touch these.

**Layer 2 — "What do I want to do?"** (Navigation)
The main menu. But rethink the categories through the lens of the user's mental model, not the system's data model:

Current menu (system-oriented):
- Graphs, Endpoints, Schedules, Variables, Monitoring

Consider instead (task-oriented):
- **My Graphs** — what I've built (the current Graphs view, but activity-first)
- **Running** — what's live right now (merges Endpoints + Schedules + Monitoring into one view of "things that are deployed and active")
- **Examples** — what I could build (the starter graphs, templates, community modules — this is the Moment 1 anchor)
- **Settings** — workspace/account config (keeps the current settings but pulls it out of the nav flow)

This is a suggestion, not a prescription. The point is: the current menu maps to backend concepts. Users think in terms of "my stuff", "what's running", and "what can I try."

**Layer 3 — "What's in this thing?"** (Detail)
The right-side details panel (GraphDetailsPanel). This works well — it's contextual, non-blocking, and progressive. The principle is: keep it as a secondary detail layer, never as a required step to do something.

### 4. The graph card is the atomic unit, not the table row

The current graph list renders items as table rows (name, visibility, modified date, actions). This is information-dense but emotionally flat. Every graph looks the same.

**Direction:** Graphs should be visual cards that hint at what's inside. Developer tools like Figma, Notion, and Observable have proven that card-based browsing creates a stronger sense of ownership and invitation than table rows.

A graph card could show:
- A tiny thumbnail of the graph structure (even schematic — just the node layout silhouette)
- The graph name and a one-line description
- Status indicator (running / stopped / draft / error)
- Last modified and author
- A "Run" or "Open" affordance

Table view should exist as an alternative for power users with many graphs. But cards should be the default, especially for new and returning users.

### 5. Empty states are onboarding opportunities

The current Endpoints, Schedules, Variables, and Monitoring pages show "Quick Tips" bullet points when empty. This is better than nothing but reads like documentation, not invitation.

**Direction:** Every empty state should answer: "What would happen if I used this?" with a concrete example, and offer a one-click path to make it happen.

Examples:
- **Endpoints (empty):** "Any graph can become an API. Here's a graph that returns the weather for any city — [try it live] — then [create your own endpoint]"
- **Schedules (empty):** "Run graphs on a timer. This graph checks Bitcoin prices every hour — [see it running] — then [schedule your first graph]"
- **Variables (empty):** "Store API keys securely. Your graphs can use them without exposing credentials — [add your first variable]"
- **Monitoring (empty):** "See every graph execution in real time. Once you deploy a graph, its activity appears here — [deploy your first graph]"

The pattern: concrete example → live proof → action path.

### 6. Progressive disclosure, not progressive hiding

The current sidebar shows all 6 navigation items immediately. For a new user, this is 5 items they don't understand yet (everything except Graphs). For a power user, it's fine.

**Direction:** Don't hide features. But create a visual hierarchy that emphasizes what matters now.

- **Graphs** and **Examples** should feel primary (these are where you start)
- **Running**, **Variables**, **Monitoring** should feel secondary (these matter after you've built something)
- **Settings** should feel tertiary (system maintenance)

This isn't about hiding — it's about visual weight. Opacity, spacing, grouping. A new user's eye should naturally land on the entry points, not the maintenance tools.

### 7. Speed is a feature

NodeScript's value prop is "faster than building from scratch." The browsing system should embody this. Every interaction should feel instant.

**Direction:**
- Graph list filtering and search should be immediate (client-side, no loading states for local data)
- Switching between views should feel like tab changes, not page loads
- The "create new graph" path should take you from dashboard to editor canvas in under 2 seconds
- Opening an existing graph should be one action (currently: select → details panel → edit button, or double-click)

The monitoring timeline is a good example of this principle in action — it already has a scrubber-style interaction that feels immediate.

---

## What exists vs. what's needed

| Area | Current state | Direction |
|------|--------------|-----------|
| **Sidebar** | Org/workspace selectors + flat nav menu + settings + user account. Functional. | Visually separate the three layers (context, nav, system). Consider task-oriented nav labels. |
| **Graph list** | Tree structure with folders, table rows, metadata columns. File manager pattern. | Activity-first default view (recent/running/suggested). Card-based browsing. Tree view as secondary mode. |
| **Graph details panel** | Animated right panel with tabs (Details, History). Shows module preview, dependencies, revisions. | This is solid. Add a prominent "Open in editor" action. Could show a live preview/thumbnail. |
| **QuickStart** | Floating card with 3 static text steps. Bottom-right position. | Should show a live example running, not just describe what to do. Make "Explore examples" the hero, not step 3. |
| **Endpoints/Schedules/Variables** | Empty states with bullet-point tips. Skeleton placeholders. | Concrete examples in empty states. "See this working → make your own" pattern. |
| **Monitoring** | Timeline scrubber with time navigation. Ready for event overlay. | Good foundation. Needs to show real (or simulated) execution events to demonstrate value. |
| **Create graph** | Dialog for naming new graph. | Should offer a choice: blank canvas, from template, or from example. Quick path to the editor. |

---

## Design questions to resolve

These are open questions, not decisions. They're noted here to be explored through prototyping and testing.

1. **Single-page or multi-page?** The current app swaps content in a single layout. Should the graph editor feel like a different "place" (full-screen, sidebar hidden) or a panel within the same layout? The current implementation goes full-screen, which feels right for focus — but the transition back should be seamless.

2. **How much graph preview is enough?** A tiny node-layout silhouette? A live output preview? Just an icon? The right answer depends on how much visual differentiation users need to find their graphs.

3. **Where do examples live?** Currently they're in the graph list as "Starter Graphs." Should they be a separate section entirely (an Examples/Gallery view), or integrated into the graph list with a different visual treatment?

4. **What's the right density?** Developer tools vary wildly — Figma is spacious, VS Code is dense, Linear is in between. NodeScript's current Figma Make output leans toward Linear's density. Is this right for the target persona?

5. **Dark mode?** The graph editor almost certainly needs it (long editing sessions). Should the browsing system match, or can they be independent? Most developer tools default to dark.

---

## How this connects to the strategy

From the **Rumelt Kernel**: the guiding policy is "become the developer's visible workbench." The browsing system's job is to make that workbench feel like *yours* — your tools, your projects, your running systems. Not an empty office you haven't moved into yet.

From the **Personas**: The Tinkering Builder needs to get from "I have an idea" to "I'm building it" in under 30 seconds. The AI Experimenter needs to see AI-relevant examples immediately. Both need the browsing system to feel like a workshop, not an admin panel.

From the **Activation Strategy**: the critical 7-day window means the browsing system's Moment 1 experience directly impacts whether users come back. The "Quick Win" tutorial path should be the most prominent thing a new user sees — not buried as step 1 of 3 in a floating card.
