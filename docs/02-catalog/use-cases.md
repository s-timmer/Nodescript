# Use Cases & Real Examples

> Synthesized from user interviews, demos, and research presentations.
> Sources: christelle-interview, boris-interview, marcus-interview, weekly-meeting, feedback-activation, Survey Results 2025 deck, Design Strategy 2025 deck

## Current Position (as of mid-2025)

**Decided:**
- The **example gallery** is a confirmed priority — it's in the activation tasks and partially shipped (added to navigation). Use cases need to be organized by category and prominently surfaced.
- **Five proven use case categories** have emerged: personal automation/side projects, developer tooling, AI/agent orchestration, enterprise integration, and creative/generative applications (3D, synthesizers). All are real and demonstrated.
- The **leading examples for marketing** should show "things that would never get built otherwise" — the activation energy reduction story. The sunrise notifier, Google Sheets CMS, and Slack AI chatbot are the strongest narratives.
- **Enterprise framing**: "not achieving something you can't do otherwise, but getting you there faster." Speed, not capability, is the enterprise value prop.

**Still open:**
- Which 3-5 use cases should be the **hero examples** on the landing page and in onboarding. The team agreed to lead with specifics but hasn't finalized the selection.
- Whether creative use cases (3D vases, synthesizers) help or hurt positioning — they demonstrate flexibility but may confuse the developer automation audience.
- Template library scope: how many templates to build, and whether to invest in polished "app-like" templates or simpler starter graphs.

## Why This Matters

The team identified a critical gap: internally, NodeScript is used for sophisticated, impressive workflows. Externally, prospects see a blank canvas and basic demos. This catalog entry captures the real use cases that demonstrate NodeScript's value — the examples that should be front and center.

---

## Personal Automation & Side Projects

### Sunrise/Sunset Notifier (Christelle)
- Simple API call to get sunrise/sunset times for a location
- Sends daily email via SendGrid
- Total effort: minimal — would normally require full project setup
- **Why it matters:** This is the kind of thing people *think about* building but never do because the setup cost exceeds the value. NodeScript removes that barrier.

### Temperature Monitor / IoT (Christelle)
- Connected a tiny computer measuring room temperature
- Created a NodeScript graph to log data
- Three different endpoints for different monitoring purposes
- Could expand significantly with minimal effort
- Only needed: hardware sensor file + NodeScript graph
- **Why it matters:** IoT projects traditionally require backend infrastructure. NodeScript makes the software side trivial.

### Google Sheets CMS (Christelle)
- Built a content management system for a friend's personal website
- Google Sheets as the backend — edits in the sheet update the website in real-time
- Integrations: Sheets → Website, Website → Brevo (email marketing)
- Took ~half a day (vs. days/weeks with traditional development)
- Built-in analytics: can see who visits which pages
- **Why it matters:** A complete, useful system built in hours, not days. No hosting, no database, no deployment headaches.

### 3D Printed Vases (Boris)
- Uses procedural generation / math to create vase designs
- Demonstrates NodeScript's general-purpose nature beyond typical "automation" use cases
- **Why it matters:** Shows NodeScript isn't just for APIs and integrations — it's a visual programming environment.

### Synthesizer (Matt)
- Built a working synthesizer in NodeScript
- Another example of creative, non-obvious use cases
- **Why it matters:** Demonstrates the platform's flexibility to a developer audience that values craft and experimentation.

---

## Developer Workflow & Tooling

### API Explorer / Prototyper (Boris, team)
- Use NodeScript to quickly test API connections
- See response structures without reading documentation
- Validate approaches before committing to a full codebase
- Example: exploring Brevo API — quickly saw response structure visually
- **Why it matters:** Faster than Insomnia/Postman for chained operations and seeing data flow.

### Utility Toolkit (Boris)
- Generating cryptographic keys
- Creating and inspecting JWTs
- Base64 encoding/decoding
- Quick data transformations
- **Why it matters:** NodeScript replaces many small helper tools. It's the Swiss army knife that's always open.

---

## AI & Agents

### Slack AI Chatbot (Marcus/Boris)
- Multi-capability agent architecture
- Decision trees with extensible actions
- Demonstrates NodeScript as an AI orchestration layer
- Event handlers responding to Slack messages
- Agent pattern: looping agent with multiple tools
- **Why it matters:** This is the emerging use case. NodeScript makes it easy to experiment with AI — prototype agents without infrastructure overhead.

### Support Ticket Processing
- Feed support tickets through ChatGPT for categorization/response
- Compelling use case identified in strategy sessions
- **Why it matters:** Practical, immediately valuable, easy to understand.

### AI Code Generation in Graphs
- "Ask AI to generate code" feature — e.g., "parse Motion API data into Notion database"
- Lowers the barrier further for developers who understand concepts but want speed
- **Why it matters:** AI makes visual programming even more accessible to the target user.

---

## Enterprise & Business

### CRM to Google Ads Audience (Hotel Management Demo)
- Connect CRM data to Google Ads audience targeting
- Demonstrated to a hotel management company
- Client reaction: "You're not achieving something I can't do otherwise, but you get me there faster"
- **Why it matters:** The speed advantage is the value proposition for enterprise. Not "impossible without us" but "done in hours instead of weeks."

### Multi-Hotel Authorization (Hotel Management Demo)
- More complex use case involving PMS (Property Management System) integration
- Required authorization across multiple hotel properties
- Identified as potentially too complex for current NodeScript capabilities
- **Why it matters:** Helps define the ceiling — what's feasible vs. what needs conventional development.

---

## Patterns Across Use Cases

1. **Activation energy reduction**: Every successful use case shares this — something that would never get built because setup > value, but NodeScript tips the balance
2. **Prototype-to-production**: Build it visually, see it work, deploy it — no gap between experiment and running system
3. **Infrastructure-free**: No Docker, no Kubernetes, no database setup, no deployment pipeline
4. **Visual debugging**: See intermediate results at every step — like having a "live debugger all the time" (Christelle)
5. **Composability**: Individual solutions become reusable modules for the community
