# Personas & Jobs to Be Done

> Design-actionable user profiles with JTBD statements.
> Derived from the 5C analysis, Rumelt's Kernel (workbench positioning), and 25 source documents.
> These personas reflect the guiding policy: NodeScript as a visual developer workbench.
> See [5c-analysis.md](5c-analysis.md) for situation, [rumelt-kernel.md](rumelt-kernel.md) for strategy.

---

## Framework

Each persona includes:
- **Who they are** — enough detail to make design decisions, not a demographic fiction
- **Primary JTBD** — the core "job" they hire NodeScript to do, in the format: *When [situation], I want to [motivation], so I can [outcome]*
- **Supporting jobs** — secondary jobs that keep them on the platform
- **Current alternatives** — what they use today (what NodeScript replaces or complements)
- **Switch triggers** — what would cause them to try NodeScript
- **Activation path** — how they go from signup to value (maps to the User Progression Framework)
- **Design implications** — specific UX/product decisions this persona drives

We define **two primary personas** (the users the workbench strategy serves first) and **one aspirational persona** (the user who emerges when the platform matures). This is intentionally narrow — the Kernel says focus, not coverage.

---

## Persona 1: The Tinkering Builder

*Archetype: Christelle, Boris (utility usage), Liam*

### Who they are

A developer (often full-stack or backend-leaning) with a day job and a head full of side ideas. They have 2-8 years of experience, understand APIs and data structures fluently, and have shipped things before. They're not junior — they know how to build software — but they're frustrated by how much overhead it takes to turn a small idea into a running thing.

They have a text file (or a notes app, or a whiteboard) full of ideas they haven't built because each one would require: setting up a repo, choosing a framework, configuring deployment, setting up a database, writing boilerplate. The value of any single idea doesn't justify that investment.

They are curious by nature. They modify things, read source code, and enjoy the process of building as much as the output. They are the "experimenter" the research identified — they don't want off-the-shelf solutions; they want tools that let them make things.

### Primary JTBD

> **When** I have an idea for a small tool, automation, or integration (a personal notifier, an API mashup, a data pipeline for a friend),
> **I want to** go from thought to working, deployed thing in under an hour without setting up any infrastructure,
> **so I can** actually build the dozens of small ideas I have instead of letting them die in a notes app.

### Supporting jobs

- **When** I need to quickly test whether an API works the way I think it does, **I want to** hit the endpoint and see the response structure visually, **so I can** validate my approach before committing to a full implementation.
- **When** I've built something that works, **I want to** share it as a link someone can just use, **so I can** give it to friends/colleagues without them needing to install or deploy anything.
- **When** I discover a useful pattern, **I want to** save it as a reusable module, **so I can** reuse it in future projects and potentially share it with others.

### Current alternatives

- **For quick API testing:** Postman, Insomnia, curl in terminal
- **For small automations:** Zapier/Make (but hits flexibility ceiling fast), or just not building it
- **For side projects:** GitHub repo + Vercel/Railway/Fly.io (works but high overhead for small ideas)
- **For utility tools:** Random npm scripts, browser dev tools, custom CLI tools

### Switch triggers

- Sees a compelling example of something built in NodeScript that they've been meaning to build themselves
- Finds NodeScript through a "how to automate X" article or tutorial
- Discovers NodeScript's API prototyping capability is faster than Postman for chained operations
- Gets recommended by a developer they trust (community/word of mouth)

### Activation path

1. **Newcomer (0-5 min):** Lands on NodeScript, needs to understand "what is this?" within 30 seconds. The workbench framing should immediately resonate: "oh, it's like a visual coding environment that deploys automatically"
2. **First win (5-15 min):** Completes a Quick Win tutorial — ideally the one closest to something they've been wanting to build. Sees a graph run, sees data flow visually, sees the result deployed.
3. **Explorer (15 min - 2 hours):** Starts modifying the tutorial. Connects their own API. Breaks things, fixes them. Discovers visual debugging ("wait, I can see every intermediate value?"). This is where the aha moment happens.
4. **Builder (week 1-4):** Builds their first original thing. Discovers modules, frames, loops. Returns regularly for utility tasks (API testing, data transforms). Becomes a free-tier regular.
5. **Expert (month 2+):** Builds something sophisticated enough to need production features. Converts to paid. Potentially publishes a module.

### Design implications

- **Onboarding must be example-led, not feature-led.** This persona doesn't care about what NodeScript can do abstractly — they care about seeing something like their own idea built quickly.
- **The Quick Win tutorials should map to real scenarios:** "Build a daily email notification in 5 minutes," "Connect two APIs and transform the data," "Prototype an AI chatbot."
- **The editor should feel like a workbench, not an enterprise tool.** Minimal chrome, fast, snappy. Think VS Code energy, not Salesforce energy.
- **Sharing must be frictionless.** The "show a friend" moment is critical for word-of-mouth growth.
- **Progressive disclosure matters:** Don't show modules, frames, and advanced features on day 1. Surface them when the user's behavior suggests they're ready (e.g., after building their third graph, suggest "did you know you can make this reusable?").

---

## Persona 2: The AI Experimenter

*Archetype: Marcus, the AI tinkerer segment, Liam's AI content platform*

### Who they are

A developer or technical product person (PM, data scientist, ML engineer) who is actively exploring what AI can do for their work or their company. They're not building foundation models — they're building *on top of* LLMs. They want to wire together API calls to OpenAI/Anthropic/local models with data sources, decision logic, and output channels.

They've tried building agents in Python (LangChain, CrewAI) and found it works but is painful to debug and iterate on. They can't see what their agent is doing at each step. They've tried GumLoop or similar tools and found them too rigid for custom logic. They want something in between: visual enough to see the flow, powerful enough to handle real complexity.

They follow AI Twitter/X, read Simon Willison, and have opinions about prompt engineering. They might be the person at their company who's been tasked with "figuring out how we can use AI" — or they're doing it on their own time because they're genuinely excited about it.

### Primary JTBD

> **When** I'm building an AI workflow that chains LLM calls with data retrieval, logic, and external tools,
> **I want to** see and debug each step visually as data flows through the system,
> **so I can** iterate on complex agent behavior without staring at logs and print statements.

### Supporting jobs

- **When** I need to experiment with different LLM providers or prompt strategies, **I want to** swap components easily and compare results, **so I can** find the best approach without rewriting my pipeline.
- **When** my AI workflow is working, **I want to** deploy it as an API endpoint or scheduled job with one click, **so I can** put it in production without involving DevOps.
- **When** I've built a useful AI pattern (RAG pipeline, classification chain, multi-agent loop), **I want to** share it as a template, **so I can** help my team or community replicate it.

### Current alternatives

- **For AI workflows:** Python scripts (LangChain, LlamaIndex, CrewAI), Jupyter notebooks
- **For visual AI building:** GumLoop (too simple for custom logic), n8n (AI features growing but workflow-automation DNA shows)
- **For agent orchestration:** LangGraph, OpenAI AgentKit (code-only, hard to debug visually)
- **For quick experiments:** OpenAI Playground, Anthropic Console, direct API calls

### Switch triggers

- Frustrated with debugging a LangChain agent by reading log output — wants to *see* the flow
- Finds a NodeScript template for a common AI pattern (RAG, classification, agent loop)
- Discovers MCP compatibility — can connect their AI tools to NodeScript's visual environment
- Sees a demo of visual agent debugging and immediately understands the value

### Activation path

1. **Newcomer:** Arrives looking for "visual AI agent builder" or "debug LLM workflows visually." Needs to see an AI example within 30 seconds of landing.
2. **First win:** Runs a pre-built AI workflow (e.g., "Summarize a webpage and send the summary to Slack"). Sees each step — the HTTP fetch, the LLM call, the Slack post — with intermediate data visible.
3. **Explorer:** Modifies the workflow — changes the prompt, adds a condition, swaps the LLM. Discovers they can see exactly what the LLM received and returned at each step.
4. **Builder:** Builds their own agent pattern. Discovers modules, loops, and the ability to create reusable AI components. This is where the platform becomes sticky.
5. **Expert:** Builds production AI pipelines. Needs error handling, monitoring, and potentially team features.

### Design implications

- **AI examples must be first-class in the example gallery.** This persona will evaluate NodeScript based on whether it looks like an AI tool or not. If the first thing they see is a base64 encoder, they'll leave.
- **MCP compatibility is critical for this persona.** They have existing AI tools and data sources connected via MCP. If NodeScript can consume MCP servers, it instantly becomes useful within their existing stack.
- **Visual debugging of LLM calls is the killer feature.** Being able to see the exact prompt sent, the exact response received, the token count, and the latency — visually, in context — is something no competitor does well.
- **Template patterns matter more than individual templates.** This persona wants reusable agent *patterns* (RAG, classification, multi-agent) that they can customize, not one-off examples.
- **The graph paradigm is actually an advantage here.** AI workflows are naturally graph-shaped (not linear like traditional automation). NodeScript's node-based approach maps to how these users already think about AI pipelines.

---

## Aspirational Persona: The Platform Builder

*Archetype: where Liam is heading, future internal Ubio power users*

### Who they are

A developer or small team that has graduated from tinkering to building real, production systems on NodeScript. They've internalized the graph-based paradigm. They create modules that others use. They push the platform's limits and report bugs. They're the 1% who generate disproportionate community value.

This persona doesn't exist yet at scale outside Ubio. They emerge when Personas 1 and 2 succeed and a module ecosystem takes shape. Designing for them now means making sure the platform can grow into their needs.

### Primary JTBD

> **When** I'm building a production system that needs to be reliable, maintainable, and extensible,
> **I want to** compose it from reusable, tested modules with proper error handling and monitoring,
> **so I can** run real business processes on NodeScript with confidence.

### Supporting jobs

- **When** I've built a useful capability, **I want to** publish it as a module with clear inputs/outputs and documentation, **so I can** contribute to the ecosystem and establish my expertise.
- **When** something breaks in production, **I want to** see exactly where it failed with proper error context and stack traces, **so I can** fix it without guessing.
- **When** my team grows, **I want to** share workspaces with access controls and see who changed what, **so I can** collaborate without chaos.

### Current alternatives

- Custom-built systems (Node.js/Python services on cloud infrastructure)
- n8n (self-hosted, enterprise features)
- Pipedream/Workday (enterprise-backed serverless automation)

### Why they're aspirational (not primary)

This persona requires production readiness features (error handling, monitoring, team management) that the research flagged as gaps. Building for them now means engineering investment that doesn't serve the flywheel. They naturally emerge from Personas 1 and 2 as the platform matures. Design *architecture* for them, but don't design *onboarding* for them yet.

### Design implications

- **Module publishing must work well when the community arrives.** This means the module creation → publishing → discovery flow should be designed now even if the community is small.
- **Error handling and monitoring are the eventual investment.** These are the features that convert Builder → Expert and retain the platform builders.
- **The sub-graph and composability architecture matters.** Boris's architectural decisions (general-purpose sockets, module interoperability) serve this persona. Don't compromise them for short-term polish.

---

## Who NodeScript is NOT for

Defining the "anti-personas" is as important as defining the personas. These users will find NodeScript and be disappointed — better to signal early that it's not for them.

**The no-code seeker:** Wants pre-built integrations they can click together without understanding data structures. They'll try a template, hit a JSON object they don't understand, and leave. → Direct them to Zapier or Make.

**The enterprise buyer (today):** Needs SOC 2, RBAC, SLAs, vendor stability guarantees, and a sales team to talk to. NodeScript can't serve this user yet and shouldn't pretend to. → They'll find n8n or Workato.

**The traditional automation engineer:** Already has a mature CI/CD pipeline, Terraform configs, and strong opinions about infrastructure-as-code. They see visual programming as a downgrade. → They won't convert, and that's fine.

**The tutorial tourist:** Signs up for every new tool, runs the demo, screenshots it for social media, and never returns. They inflate signup numbers without contributing to the community. → Not harmful, but don't optimize for them.

---

## JTBD Hierarchy (for prioritization)

When features, designs, or content compete for priority, use this hierarchy:

1. **Core job (both personas):** "Let me go from idea to running thing without infrastructure overhead." This is the fundamental value proposition. Everything that serves this job gets priority.

2. **Workbench job (Persona 1 primary):** "Let me use this as my everyday tool for API work, data transforms, and quick builds." This drives daily active usage and free-tier engagement.

3. **Visual debugging job (Persona 2 primary):** "Let me see what my AI workflow is doing at every step." This is the differentiated value for the AI segment.

4. **Composability job (both, aspirational):** "Let me build on what others have built and share what I've made." This is the platform flywheel — critical for long-term growth but depends on community that doesn't exist yet.

5. **Production job (aspirational persona):** "Let me run real business processes with confidence." Invest here when the community generates demand, not before.
