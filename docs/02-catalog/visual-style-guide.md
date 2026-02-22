# Visual Style Guide

> Design direction for making NodeScript look and feel like a 2026 professional product.
> Informed by: current NodeScript UI, real editor screenshots, Rico's design work ([@_heyrico](https://x.com/_heyrico)), and contemporary SaaS design patterns.
> This is a compass, not a spec — it sets direction and guardrails while leaving room for the product to find its own voice. Update as the design evolves.
> See also: [design-browsing-system.md](design-browsing-system.md) for structural/UX direction.

---

## The bar we're aiming for

NodeScript should feel like a tool made by developers for developers — confident, quiet, precise. The general neighborhood: Linear, Raycast, Vercel Dashboard, Supabase. Not flashy, not playful, not enterprise-grey. The aesthetic leans toward: **dark where you work, light where you browse, information-dense but never busy.**

But NodeScript isn't a Vercel clone. It has its own DNA — the colored type system (green strings, amber numbers, pink errors), the node-card visual language, the "workbench" metaphor. These should be the things that make it feel like *itself*. The browsing system should extend the editor's personality outward, not paste a generic dashboard skin on top of it.

The real NodeScript editor (Boris's version) already has a strong visual language: white node cards with colored category headers, typed connection lines (blue/green/red/pink), clean input handles. This guide should help that language grow into the rest of the product.

---

## Foundation: shadcn/ui + Tailwind

NodeScript is built on **shadcn/ui** and **Tailwind CSS**. This isn't just a technology choice — it shapes how the design system works:

**shadcn/ui gives us the component primitives.** Button, Dialog, Popover, DropdownMenu, Command (command palette), Tabs, Table, Card, Input, etc. These are already well-designed, accessible, and themeable. The goal isn't to rebuild them — it's to configure them with the right colors, spacing, and density for NodeScript. Copy components into the project and customize rather than wrapping or overriding.

**Tailwind gives us the utility system.** All spacing, color, and typography values below are expressed in Tailwind classes where possible. Custom values go in `tailwind.config` as theme extensions (not arbitrary values scattered through components).

**The CSS variables bridge.** shadcn/ui uses CSS custom properties (`--background`, `--foreground`, `--primary`, etc.) for theming. The semantic token table in Section 1 should map directly to these variables. This means dark mode is a single class toggle on `<html>`, not a rewrite.

**What this means in practice:**
- Start from shadcn/ui's default components, then adjust density and color
- Use Tailwind's `@apply` sparingly — prefer utility classes in JSX
- Define NodeScript's color tokens as CSS variables that shadcn/ui consumes
- The component library grows by adding shadcn/ui components as needed, not by building from scratch

---

## 1. Color

### The problem AI creates

AI tools default to saturated, clashing colors — bright blues, purples, greens that look like a template. They also love gradients where flat colors would be better.

### The NodeScript palette

**Work with one dominant hue, not many.** The existing editor uses a muted blue-grey canvas with white node cards. The browsing system should share this temperature.

**Think in four layers, not one palette.** Product color isn't the 60-30-10 rule from landing pages. It's four distinct layers that each solve a different problem:
1. **Neutral foundation** — backgrounds, borders, text (90%+ of what you see)
2. **Functional accent** — one brand color used as a scale (100–900), not a single hex
3. **Semantic colors** — red/green/amber/blue for status, always the same meaning
4. **Chart/data spectrum** — perceptually even colors across hues (use OKLCH, not HSL)

**Use semantic color tokens, not raw values.** Rico's work demonstrates that professional UIs name their colors by function, not by shade. This is what makes a design system scalable. The values below are a starting point based on Rico's blueprints — adjust the temperature and contrast to feel right for NodeScript:

| Token | Light mode | Dark mode | Use |
|-------|-----------|-----------|-----|
| `bg-surface-base` | `#FFFFFF` | `#1C1C1C` | Page/panel backgrounds |
| `bg-surface-subtle` | `#FAFAFA` (neutral-50) | `#262626` (neutral-800) | Alternate rows, sidebar bg |
| `bg-surface-raised` | `#FFFFFF` | `#2A2A2A` | Cards, modals, popovers |
| `text-strong` | `#262626` (neutral-800) | `#E5E5E5` | Headings, primary labels |
| `text-default` | `#404040` (neutral-700) | `#D4D4D4` | Body text, descriptions |
| `text-subtle` | `#737373` (neutral-500) | `#A1A1A1` | Metadata, secondary info |
| `text-disabled` | `#A1A1A1` (neutral-400) | `#525252` | Placeholders, disabled |
| `icon-default` | `#404040` (neutral-700) | `#D4D4D4` | Nav icons, action icons |
| `icon-subtle` | `#737373` (neutral-500) | `#A1A1A1` | Decorative, non-interactive |
| `border-default` | `#E5E5E5` (neutral-200) | `#404040` (neutral-700) | Card outlines, dividers |
| `border-subtle` | `#F5F5F5` (neutral-100) | `#303030` | Internal separators |

**Accent colors follow the same token pattern.** Each accent uses `-100` for background fills and `-500` for text/icons. Rico uses orange as his go-to, but NodeScript should find its own accent — possibly derived from the type color system that already exists in the editor.

**Type colors are NodeScript's secret brand palette.** The editor already has a type-coloring system for node handles: green for strings, yellow/amber for numbers, grey for any, pink for errors. Most developer tools use a generic blue accent. NodeScript could lean into these type colors as its identity — they're already meaningful to users, they're distinctive, and they connect the browsing experience back to the editor. Imagine seeing a subtle green tint on string-related items in the dashboard, or amber on number-focused graphs. This is where NodeScript stops being "another Vercel" and starts being itself.

**What to avoid:**
- Gradient backgrounds (they scream "template")
- Multiple saturated colors competing for attention
- Color as decoration — every color should encode information (type, status, severity)

### Dark mode

The editor should default to dark. The browsing system can start light but must support dark. When dark mode exists, use it as the default — developer tools in 2026 are dark-first.

**Rico's dark mode starting point:** Not pure black — something around `#1C1C1C` as the base. Primary text around `#E5E5E5` (not pure white — too harsh). Subtle text around `#A1A1A1`. The exact values will depend on how NodeScript's type colors read against the background, but the principle is: warm dark, soft light text, enough contrast without harshness.

**The 2x distance rule for dark mode:** In light mode, background layers are ~2% apart (white → 98% → 96%). Dark colors look more similar to each other, so dark mode needs 4-6% between layers to achieve the same visual separation. If you just invert your light palette, everything blends together.

**Surfaces always get lighter as they elevate in dark mode.** This is non-negotiable — a card floating above the page must be lighter than the page, a modal above the card lighter still. The opposite of light mode where elevation means "whiter." So: page `#1C1C1C` → card `#262626` → modal `#2A2A2A` → popover `#333333`.

**Accent color shifts in dark mode.** Your main accent drops from the 500-600 range to 300-400 (lighter, less saturated). Hover moves to 400-500. This prevents the accent from feeling like a laser beam on a dark surface.

**Chart colors via OKLCH.** When you need a spectrum for charts or data visualization (monitoring, analytics), don't pick colors by eye — they'll have inconsistent perceived brightness. Use [oklch.com](https://oklch.com): fix lightness and chroma, then increment hue by 25-30 degrees for each color. This gives perceptually even colors that look intentional together.

---

## 2. Typography

**One font family, three weights.** Don't mix fonts. A modern monospace-influenced sans-serif works for developer tools.

- **Headings:** Medium weight (500), larger size but not dramatically. Think 18-20px for page titles, 14-16px for section headers. No bold headings — medium weight feels more refined.
- **Body:** Regular weight (400), 13-14px. This is the workhorse. Readable at small sizes without feeling like documentation. Apply `-0.15px` letter-spacing (Rico's blueprint value) — this tightens Inter/Geist just enough to feel intentional without hurting readability.
- **Data / code:** Monospace, regular weight, 12-13px. For node values, JSON output, API paths, variable values. This should feel native, not styled differently from the surroundings.

**Hierarchy through darkness, not weight and color.** Text color communicates importance. The specific percentages: headings at ~11% white (`#1C1C1C`), body text at 15-20% white (`#262626`–`#333333`), subtext at 30-40% (`#4D4D4D`–`#666666`). This maps to the semantic token system from Section 1 — `text-strong` for headings, `text-default` for body, `text-subtle` for metadata, `text-disabled` for placeholders. Rico's 4-level neutral hierarchy (800/700/500/400) lands in exactly these ranges.

**Section labels in sidebars:** Rico's dashboards (Spark Pixel, Acme Tech, Lendro) all use ALL-CAPS muted section headers in the sidebar to group navigation items ("MAIN MENU", "MANAGEMENT", "SETTINGS"). This is a deliberate exception to the "no all-caps" rule — it works specifically for sidebar section dividers at 10-11px, `text-subtle`, with generous top margin. Don't use all-caps anywhere else.

**What to avoid:**
- ALL CAPS for content labels outside the sidebar (it's loud and dated)
- Bold everywhere (if everything is bold, nothing is)
- Colored text for non-interactive elements

---

## 3. Icons

**Use Lucide consistently.** The project already imports lucide-react — stay with it across the entire product. No mixing icon libraries, no emoji, no custom SVGs unless absolutely necessary.

**Icon rules:**
- Icons should be 16px (h-4 w-4) in navigation and controls, 20px (h-5 w-5) for empty state illustrations
- Always paired with a text label in navigation — icon-only buttons are for toolbar actions, not nav
- Color: `slate-400` default, `slate-600` on hover, accent color when active/selected
- Never use icons as decoration. Every icon should either identify a thing (file type, status) or afford an action (edit, delete, run)

**What to avoid:**
- Emoji as interface elements (they're inconsistent across platforms and scream "vibe-coded")
- Colorful filled icons — outline icons at low opacity are more professional
- AI-generated gradient profile circles — use a simple avatar with initials fallback

---

## 4. Layout

### The grid

Developer tools are information-dense. Embrace it — but through structure, not clutter.

**Sidebar:** Fixed width (240-260px), collapsible to icon-only (48px). Rico's dashboards show a **grouped section** pattern that works well for NodeScript's navigation complexity:

1. **Context header** (org/workspace) — compact, rarely changed, top of sidebar
2. **Primary nav group** — grouped under a small muted label. Contains the daily-use items: Dashboard, Graphs, Endpoints
3. **Secondary nav group** — settings, variables, modules, etc.
4. **Favorites / pinned** — optional, for power users who want quick access to specific graphs
5. **Account/system** — bottom-anchored, minimal

Groups separated by spacing and their labels, not by divider lines. The exact label style (all-caps, regular case, icon-only) can be explored — the important thing is that the sidebar reads as distinct zones, not one long list.

**Main content:** Fluid width, with a max-width container for text-heavy views (settings, billing) but full-width for data views (graphs, monitoring, analytics).

**Detail panel:** Right-side slide-in, 360-400px. Already works well in the current design. Should animate with a clean slide, not a modal overlay.

### Card design

Cards are the atomic unit for graphs, endpoints, schedules — anything the user has created.

**The professional card pattern:**
- Visible but quiet border (around `slate-200` to `slate-300` range) — not black, not invisible. A drop shadow alone looks washed out; a dark border looks heavy. Find the middle ground where the card edge is defined without shouting.
- Compact header: name + status indicator (colored dot, not badge)
- Metadata in a single line: modified date, author, one key metric
- Actions hidden in a `...` menu (triple-dot), not inline buttons
- No inner shadows, no gradients, no colored backgrounds (the white card IS the design)

**What to avoid:**
- Busy cards with multiple buttons visible (collapse into `...` menu)
- Badge spam — visibility labels, type badges, status badges all competing for attention. Pick the one thing that matters most and show that.
- Duplicate information — if clicks/runs are in the card, they shouldn't also be in the detail panel header and the analytics page

### Information density

**Show data, not chrome.** Where the current UI has a KPI badge that says "10,000 credits", a better pattern is a slim progress bar with the number inline. Where there's a "Workspace" visibility badge on every row, a small icon is enough.

**Microcharts over KPI cards.** Rico's Spark Pixel dashboard nails this: each KPI card has a label, a big number, a delta percentage in semantic color (green up / red down), AND a small sparkline bar chart — all in one compact card (~120px tall). The sparkline tells the story the number can't. When showing metrics (monitoring, analytics, usage), this combined pattern communicates both current state and trend. Never show a big number alone without context for whether it's good or bad.

**Collapse advanced options by default.** The Create Graph dialog, settings panels, and node configuration should show the essential fields first. Advanced options behind a "Show more" or collapsible section.

---

## 5. Components

> Most of these are shadcn/ui components with adjusted theming. The guidance below is about *when and how* to use them, not about rebuilding them.

### Buttons

**The darker the button, the more important it is.** This maps to shadcn/ui's variant system:
1. **`default`** — dark fill, light text. One per view maximum. The main action ("Run", "Create Graph", "Save").
2. **`secondary`** — subtle fill, dark text. Supporting actions ("Add Node", "Clear", "Back").
3. **`ghost`** — transparent, text only. Tertiary actions, cancel, inline actions.
4. **`destructive`** — red tones. Delete/remove, always behind a confirmation dialog.

**Button sizes:** `sm` (height 32px) for toolbars, `default` (36px) for forms and dialogs, `lg` (40px) for hero CTAs only. The current UI already uses shadcn/ui button variants — stay with these.

**What to avoid:**
- Multiple primary buttons in one view
- Icon-only buttons without tooltips
- Colorful buttons that aren't the primary action

### Tables vs. cards

**Use cards for browsable collections** (graphs, templates, examples) — things the user scans visually and picks one.

**Use tables for data lists** (endpoints, variables, execution logs) — things the user reads sequentially and acts on.

Don't put table metadata (columns, sorting, filtering) on a card view. Don't put card affordances (thumbnails, hover effects) on a table view. Each pattern has its own rules.

### Empty states

Every empty view should have:
1. An illustration or icon (Lucide, not custom art — keep it simple)
2. A one-sentence description of what will be here
3. A primary action button to create the first item
4. Optionally: a link to a working example or documentation

**Not:** bullet-point "Quick Tips" or feature descriptions. Show, don't tell.

### Modals vs. flyouts

**`Dialog`** (shadcn/ui) for focused creation tasks with multiple fields (Create Graph, Create Endpoint). They demand attention and have clear confirm/cancel.

**`Sheet`** (shadcn/ui) for contextual detail panels (Graph Details, node properties). They slide in from the right, keep the main content visible.

**`Popover`** (shadcn/ui) for quick settings, account menus, and option selectors. Lightweight and contextual.

**`Command`** (shadcn/ui) for the command palette / search. This is a big one for NodeScript — a `cmd+k` palette that searches graphs, endpoints, actions, and settings feels very natural for this product.

The general principle: use Dialog when the user needs focus, Sheet when they need context, Popover when they need a quick choice.

---

## 6. Motion

**Minimal, functional, fast.** Motion communicates state changes, not personality.

**Use motion for:**
- Panel slide-in/out (detail panel, flyouts): 200ms ease-out
- Content transitions (switching views): 150ms fade or slide
- Hover states on cards: subtle lift (translateY -1px + shadow increase)
- Loading indicators: skeleton shimmer, not spinners

**Don't use motion for:**
- Page entry animations (no fade-in on load — just show the content)
- Decorative transitions (no bouncing, no spring physics on UI elements)
- Attention-grabbing pulses or glows (except for running/live indicators)

The QuickStart panel currently uses Framer Motion for an elaborate open/close animation. This is fine for a floating element — but keep the main content views snappy and immediate.

---

## 7. The editor vs. the browser

The graph editor and the browsing system are two different environments. They should share a design language but feel like different modes.

| Quality | Browsing System | Graph Editor |
|---------|----------------|--------------|
| Background | Light (`slate-50` / `white`) | Dark (`slate-900` / `slate-950`) |
| Density | Comfortable (14px type, 16px spacing) | Dense (12px type, 8px spacing) |
| Color use | Minimal — accent for actions only | Rich — type colors, status colors, connection lines |
| Motion | Subtle — panel transitions, hover lifts | Functional — node dragging, edge animation, zoom |
| Primary action | "Create" / "Open" | "Run" |

The transition between them should be a clean cut (not a slow morph). You're entering a workspace — the mode change should feel deliberate.

---

## 8. What "2026 professional" actually means

A few patterns that separate professional SaaS from vibe-coded apps in 2026:

**Restraint in color:** One accent, everything else is grey scale. Color = information.

**Content over chrome:** The interface recedes, the user's data is prominent. Fewer borders, fewer boxes, more whitespace and alignment.

**Microinteractions that communicate:** A skeleton loader instead of a spinner. A checkmark that animates in on save. A dot that pulses green when something is running. Small things that feel polished without being flashy.

**Consistent density:** Every row is the same height, every card has the same padding, every section has the same gap. Inconsistency reads as amateur, even when you can't point to why.

**Real graphics over stock elements:** Show screenshots of the actual product in marketing. Show actual graph thumbnails in the card view. Show real execution data in the monitoring timeline. Nothing reveals "template" faster than placeholder content.

**Confidence in empty space:** Crowded layouts feel anxious. Professional layouts let content breathe. If a page only has one thing on it, that's fine — don't fill it with tips and badges.

---

## 9. Implementation patterns

> The gap between "good principles" and "professional UI" is in the details. These are patterns and ranges, not rigid specs — they should be adapted as NodeScript's identity takes shape. Informed by Rico ([@_heyrico](https://x.com/_heyrico)), Refactoring UI, and Anthropic's frontend aesthetics research.

### Shadows and depth

**Use layered shadows, not single-layer.** A single `shadow-md` looks flat and AI-generated. Professional shadows stack a tight, dark shadow (for crispness) with a wide, soft one (for lift):

```css
/* Instead of: shadow-md */
/* Use a compound shadow: */
box-shadow:
  0 1px 2px rgba(0, 0, 0, 0.06),    /* tight: defines the edge */
  0 4px 12px rgba(0, 0, 0, 0.04);    /* wide: creates the lift */
```

**Shadows on hover only for cards.** Resting state cards should have a border, not a shadow. The shadow appears on hover to create a "lifting" effect. This keeps the page clean at rest and interactive on engagement.

**Dark mode shadows are different.** On dark backgrounds, shadows barely work. Use border brightness changes and subtle background shifts instead: a card goes from `slate-800` to `slate-750` on hover, with its border brightening from `slate-700` to `slate-600`.

### Borders and strokes

**0.5px borders exist and matter.** A `border` at `0.5px` (or using `ring-1` with low opacity) creates a subtler separation than the default `1px`. Use `0.5px` for internal dividers within a card. Use `1px` for the card's outer boundary.

**Border color hierarchy:**
- Card borders: `slate-200` (light mode) / `slate-700` (dark mode)
- Internal dividers: `slate-100` (light mode) / `slate-800` (dark mode)
- Active/focused borders: accent blue at 50% opacity, not full strength
- Never pure black borders. The darkest border in light mode is `slate-300`.

**Replace borders with spacing where possible.** If two elements are in the same card, a 12px gap often separates them better than a border + 8px gap. Borders should separate ownership, not just create visual rhythm.

### Spacing system

**Use an 4px base grid, but don't be rigid.** The core values: 4, 8, 12, 16, 24, 32, 48, 64. In Tailwind: `1, 2, 3, 4, 6, 8, 12, 16`.

**The tight-inside, loose-outside rule:**
- Padding inside a card: 12-16px (`p-3` to `p-4`)
- Gap between cards: 16-24px (`gap-4` to `gap-6`)
- Section spacing: 32-48px (`space-y-8` to `space-y-12`)
- Page padding: 24-32px (`p-6` to `p-8`)

**Asymmetric padding is more refined.** `px-4 py-3` looks better than `p-4` on most components. Horizontal needs more room than vertical because text is wider than it is tall.

### Typography refinements

**Font choice: be deliberate.** Rico's blueprint uses Inter with `-0.15px` letter-spacing — proof that even a "default" font can feel refined when the details are right. See Section 10 for the full font exploration. The key implementation detail: whatever font is chosen, apply custom letter-spacing (`-0.15px` for body, tighter for headings) to make it feel intentional.

**Size jumps should be decisive, not timid.** Instead of 14px → 16px → 18px (boring), use 13px → 16px → 22px. The contrast creates hierarchy. Small increments just look like inconsistency.

**Letter-spacing adjusts with size.** Large headings (20px+) benefit from tighter tracking (`tracking-tight`, -0.02em). Small labels (11-12px) benefit from slightly wider tracking (`tracking-wide`, 0.01em). Body text at 13-14px needs no adjustment.

**Line-height matters more than you think.** Headings: `leading-tight` (1.2). Body: `leading-relaxed` (1.6). UI labels: `leading-none` (1.0). Getting these right makes text feel intentional.

### Color precision

**Don't use Tailwind's default palette raw.** The default `blue-500` is too saturated for a professional tool. Use the `-600` variants for buttons and desaturate further for backgrounds. Or define custom values:

```
--accent: 220 70% 50%;     /* a slightly muted blue */
--accent-hover: 220 70% 45%;
--accent-muted: 220 30% 92%;  /* for subtle backgrounds */
```

**Opacity-based color hierarchy is more maintainable than picking different greys.** Instead of `text-slate-700`, `text-slate-500`, `text-slate-400` for three hierarchy levels, use one color with opacity:
- Primary text: `text-slate-700` (or `opacity-90` on a base color)
- Secondary: `opacity-60`
- Tertiary: `opacity-40`
- Disabled: `opacity-25`

This ensures automatic consistency across light and dark mode.

**Status colors need to be specific:**
- Running/success: `emerald-500` (not `green-500` — too bright)
- Warning: `amber-500` (not `yellow-500` — too neon)
- Error: `rose-500` (not `red-500` — too aggressive)
- Info: the accent blue
- These colors should only appear as small dots, icons, or text — never as backgrounds.

### Component-level polish

**Input fields:** The default browser input looks terrible. A polished input has:
- `h-9` (36px) height, not the default
- `rounded-md` (6px radius), not `rounded` (4px — too tight) or `rounded-lg` (8px — too bubbly)
- Background: `bg-white` in light mode, `bg-slate-900` in dark mode (not transparent)
- A focus ring that's the accent color at low opacity: `focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500`
- Placeholder text at `text-slate-400`, never darker

**Buttons need visual weight hierarchy.** The primary button should feel heavier than everything around it. This means: solid fill + slightly bolder font weight (medium, not bold) + a subtle shadow (`shadow-sm`). Secondary buttons should feel like they recede: ghost style, no shadow, lighter text color.

**Table rows:** Add hover states (`hover:bg-slate-50`) and make the entire row clickable if it leads somewhere. Zebra striping is dated — use borders or spacing instead. Row height should be consistent: 44-48px for data tables, 56-64px for tables with actions.

**Tooltips:** `bg-slate-900 text-white text-xs py-1 px-2 rounded`. Appear after 300ms delay, not instantly. Positioned with a 4px offset from the trigger element. Always one line unless absolutely necessary.

**Tab navigation:** Rico's GitHub Marketplace redesign shows the cleanest tab pattern: text tabs with an underline active indicator (2px bottom border in accent color), no background fill on active tab. Text goes from `text-subtle` to `text-strong` on active. This is the right pattern for switching between views (Graphs / Endpoints / Schedules) within the main content area. Never use pill-shaped tabs or colored background tabs — they take up too much visual weight for a secondary navigation element.

**Search inputs:** Rico consistently uses large, prominent search inputs at the top of content areas. For NodeScript: `h-10` (40px), full-width or near-full-width, with a Lucide `Search` icon (16px, `text-subtle`) inside the left padding. Placeholder: "Search graphs..." in `text-disabled`. This should feel like the first thing you can interact with on any list/browse view.

### What makes a UI look "vibe coded"

These are the tells that break the illusion of a designed product. Not all are equally bad — some are instant giveaways, others are just patterns that skew generic:

1. **Purple/blue gradients as backgrounds** — the most common AI default. Solid colors are almost always better in a product UI.
2. **Perfectly even spacing everywhere** — real design groups things intentionally. A card title should be closer to its content than to the card edge.
3. **Everything bold or semi-bold** — restraint in weight creates hierarchy. Most text should be regular weight.
4. **Oversized rounded corners** — `rounded-2xl` on cards feels toylike. Rico uses three tiers: roughly `6px` for inputs, `8px` for cards, `12px` for modals. That range works.
5. **Emoji as interface elements** — Lucide icons, consistently.
6. **Badge overload** — one status indicator per item is enough.
7. **Centered hero layout in a product view** — that's a marketing pattern, not a workspace pattern.
8. **Shadows on everything at rest** — shadows should signal interaction (hover) or layering (modal over content), not just "this is a card."

---

## 10. Font and icon decisions

### Font direction

The font choice is still open. Some candidates worth exploring:

- **Geist Sans** — Vercel's font. Clean, developer-friendly, designed for this exact type of product. Risk: NodeScript looks too much like a Vercel project.
- **Inter with custom tracking** — Rico's approach. `-0.15px` letter-spacing turns the world's most common UI font into something that feels considered. Risk: it's still Inter.
- **Satoshi / General Sans** — newer, slightly warmer character. Less "tech company", more "creative tool." Could give NodeScript its own feel.
- **The current Figma Make font** — worth evaluating what's already in the codebase before switching.

The mono font matters too — it shows up in node values, JSON output, API paths. JetBrains Mono and Geist Mono are both strong choices. Fira Code if you want ligatures.

Whatever the choice, commit to one family fully. And always specify fallbacks so nothing renders in a default serif.

### Lucide icon sizing reference

| Context | Size | Tailwind | Example |
|---------|------|----------|---------|
| Inline with body text | 14px | `h-3.5 w-3.5` | Status dots next to graph names |
| Navigation items | 16px | `h-4 w-4` | Sidebar menu icons |
| Toolbar buttons | 16px | `h-4 w-4` | Add Node, Run, Clear buttons |
| Empty state illustrations | 20-24px | `h-5 w-5` to `h-6 w-6` | "No endpoints yet" icon |
| Page header actions | 16px | `h-4 w-4` | Settings gear, search icon |

Icons should always have the same `stroke-width` (1.5 for 16px icons, 2 for 20px+ icons). Mixing stroke widths is a subtle but noticeable inconsistency.

---

## Reference products

For visual reference when designing, look at:
- **Linear** — sidebar structure, card density, dark mode, keyboard-first navigation
- **Vercel Dashboard** — deployment status patterns, monitoring views, clean light/dark modes
- **Supabase Studio** — developer tool that feels both powerful and approachable, good use of tables
- **Raycast** — command palette, minimal chrome, speed-focused
- **Figma** — canvas editor UX, file browser, team management (the non-editor parts)
- **Rico ([@_heyrico](https://x.com/_heyrico))** — the single best reference for pixel-level implementation decisions. His "blueprint" posts define exact hex values, letter-spacing, border-radius tiers, and semantic token systems. His dashboard redesigns (Spark Pixel, Acme Tech, Lendro) demonstrate the grouped sidebar, KPI+sparkline cards, and clean data tables that NodeScript should aim for. His GitHub redesign shows how to strip chrome and let content breathe

NodeScript sits in this same tier — developer-facing products where quality signals trust.

---

## Reference reading

- [shadcn/ui](https://ui.shadcn.com/) — the component library NodeScript builds on. Check here first before building any new component.
- [shadcn/ui themes](https://ui.shadcn.com/themes) — starting points for color theming, including dark mode
- [Tailwind CSS docs](https://tailwindcss.com/docs) — utility class reference
- [Anthropic: Prompting for frontend aesthetics](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics) — how to avoid "distributional convergence" (AI defaulting to safe, boring choices)
- [Refactoring UI](https://refactoringui.com/) — the definitive guide to the kind of detail-level design thinking in section 9
