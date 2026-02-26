import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function StyleGuideContent() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, token: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="h-full overflow-auto">
      <div className="px-8 py-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[20px] font-medium mb-3">Style guide</h1>
          <p className="text-muted-foreground text-[14px]">
            Design system tokens and conventions for NodeScript. Theme values are defined in{" "}
            <code className="px-2 py-1 bg-muted rounded text-[13px]">src/index.css</code>.
            Components use Tailwind utility classes with shadcn/ui primitives.
          </p>
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-[16px] font-medium mb-6">Typography</h2>

          <div className="space-y-4">
            <TypographyToken
              label="Page title"
              example="Graphs"
              className="text-[20px] font-medium"
              tailwind='text-[20px] font-medium'
              usage="Top-level page headers"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <TypographyToken
              label="Section heading"
              example="Organization settings"
              className="text-[16px] font-medium"
              tailwind='text-[16px] font-medium'
              usage="Settings sections, panel headings"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <TypographyToken
              label="Body"
              example="1. The Basics"
              className="text-[14px]"
              tailwind='text-[14px]'
              usage="Graph names, menu items, labels, form inputs"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <TypographyToken
              label="Secondary"
              example="3 months ago"
              className="text-[13px] text-muted-foreground"
              tailwind='text-[13px] text-muted-foreground'
              usage="Descriptions, timestamps, footer links"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <TypographyToken
              label="Micro label"
              example="WORKSPACE"
              className="text-[11px] uppercase tracking-wider text-muted-foreground"
              tailwind='text-[11px] uppercase tracking-wider text-muted-foreground'
              usage="Sidebar section labels, category headers"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <TypographyToken
              label="Tiny"
              example="Free plan"
              className="text-[12px]"
              tailwind='text-[12px]'
              usage="Badges, org name in workspace switcher"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
          </div>

          {/* Font Family */}
          <div className="mt-6 border border-border p-6 rounded-md">
            <h4 className="text-[14px] font-medium mb-3">Font family</h4>
            <p className="text-muted-foreground text-[14px]">
              All typography uses <code className="px-2 py-1 bg-muted rounded text-[13px]">Inter</code> (400, 500, 600, 800)
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-[16px] font-medium mb-6">Colors</h2>

          <div className="grid grid-cols-1 gap-4">
            <ColorToken
              name="Background"
              variable="--background"
              hex="#ffffff"
              description="Default page background"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Foreground"
              variable="--foreground"
              hex="#171717"
              description="Default text color"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Primary"
              variable="--primary"
              hex="#171717"
              description="Buttons, links, interactive elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Primary Foreground"
              variable="--primary-foreground"
              hex="#ffffff"
              description="Text on primary-colored elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Secondary"
              variable="--secondary"
              hex="#f5f5f5"
              description="Secondary buttons, subtle backgrounds"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Secondary Foreground"
              variable="--secondary-foreground"
              hex="#525252"
              description="Text on secondary elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Muted"
              variable="--muted"
              hex="#f5f5f5"
              description="Subtle backgrounds, code blocks, badges"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Muted Foreground"
              variable="--muted-foreground"
              hex="#737373"
              description="Secondary text, placeholders, icons"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Border"
              variable="--border"
              hex="#e5e5e5"
              description="Borders on inputs, cards, dividers"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Border Light"
              variable="--border-light"
              hex="#e5e5e566"
              description="Subtle dividers between list items"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Destructive"
              variable="--destructive"
              hex="#ef4444"
              description="Error states, delete actions"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Sidebar"
              variable="--sidebar"
              hex="#fafafa"
              description="Sidebar background"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken
              name="Sidebar Border"
              variable="--sidebar-border"
              hex="#e5e5e5"
              description="Sidebar border and dividers"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <h2 className="text-[16px] font-medium mb-6">Border radius</h2>

          <div className="grid grid-cols-2 gap-4">
            <RadiusToken
              name="Default (rounded-md)"
              variable="--radius"
              value="6px"
              tailwind="rounded-md"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <RadiusToken
              name="Checkbox"
              variable="--radius-checkbox"
              value="2px"
              tailwind="rounded-sm"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
          </div>

          <div className="mt-4 border border-border p-4 rounded-md">
            <p className="text-muted-foreground text-[14px]">
              All cards, buttons, and inputs use <code className="px-2 py-1 bg-muted rounded text-[13px]">rounded-md</code> (6px).
              Use Tailwind classes instead of <code className="px-2 py-1 bg-muted rounded text-[13px]">var(--radius-*)</code> inline styles.
            </p>
          </div>
        </section>

        {/* Elevation Section */}
        <section className="mb-16">
          <h2 className="text-[16px] font-medium mb-6">Elevation</h2>

          <div className="border border-border p-6 rounded-md">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-[14px] font-medium mb-2">Small elevation</h4>
                <p className="text-muted-foreground text-[14px]">
                  Hover state on cards, popovers, dropdown menus
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => copyToClipboard('shadow-sm', 'elevation-sm')}
              >
                {copiedToken === 'elevation-sm' ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <code className="px-2 py-1 bg-muted rounded text-[13px]">shadow-sm</code>
              <span className="text-muted-foreground text-[13px]">or</span>
              <code className="px-2 py-1 bg-muted rounded text-[13px]">shadow-md</code>
              <span className="text-muted-foreground text-[13px]">for card hover</span>
            </div>
            <div className="mt-6 p-8 bg-background border border-border rounded-md shadow-sm">
              <p className="text-center text-muted-foreground text-[14px]">shadow-sm</p>
            </div>
            <div className="mt-4 p-8 bg-background border border-border rounded-md shadow-md">
              <p className="text-center text-muted-foreground text-[14px]">shadow-md (card hover)</p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-16">
          <h2 className="text-[16px] font-medium mb-6">Usage guidelines</h2>

          <div className="space-y-4">
            <div className="border border-border p-6 rounded-md">
              <h4 className="text-[14px] font-medium mb-3">Use Tailwind classes</h4>
              <p className="text-muted-foreground text-[14px] mb-4">
                Prefer Tailwind utility classes over CSS variables and inline styles:
              </p>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-[13px] leading-relaxed">
                  {`/* Good */`}<br />
                  {`className="rounded-md bg-muted text-muted-foreground"`}<br /><br />
                  {`/* Avoid */`}<br />
                  {`style={{ borderRadius: 'var(--radius-card)', color: 'var(--muted-foreground)' }}`}
                </code>
              </div>
            </div>

            <div className="border border-border p-6 rounded-md">
              <h4 className="text-[14px] font-medium mb-3">Layout components</h4>
              <p className="text-muted-foreground text-[14px] mb-4">
                Use the shared layout components instead of repeating page structure:
              </p>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-[13px] leading-relaxed">
                  {`<PageHeader title="Graphs">`}<br />
                  {`  <Button>Create Graph</Button>`}<br />
                  {`</PageHeader>`}<br /><br />
                  {`<PageContent centered>`}<br />
                  {`  <EmptyState icon={Radio} description="..." />`}<br />
                  {`</PageContent>`}<br /><br />
                  {`<PageFooter />`}<br /><br />
                  {`<SectionHeading>Danger zone</SectionHeading>`}
                </code>
              </div>
            </div>

            <div className="border border-border p-6 rounded-md">
              <h4 className="text-[14px] font-medium mb-3">Sentence case</h4>
              <p className="text-muted-foreground text-[14px]">
                All titles and headings use sentence case — only capitalize the first word and proper nouns.
              </p>
            </div>

            <div className="border border-border p-6 rounded-md">
              <h4 className="text-[14px] font-medium mb-3">Color palette</h4>
              <p className="text-muted-foreground text-[14px]">
                The theme uses the neutral gray palette (no blue tint). Semantic colors like{" "}
                <code className="px-1 py-0.5 bg-muted rounded text-[13px]">bg-muted</code>,{" "}
                <code className="px-1 py-0.5 bg-muted rounded text-[13px]">text-muted-foreground</code>,{" "}
                <code className="px-1 py-0.5 bg-muted rounded text-[13px]">border-border</code>{" "}
                resolve through CSS variables defined in <code className="px-1 py-0.5 bg-muted rounded text-[13px]">:root</code>.
                Standard Tailwind colors (e.g. <code className="px-1 py-0.5 bg-muted rounded text-[13px]">bg-blue-100</code>,{" "}
                <code className="px-1 py-0.5 bg-muted rounded text-[13px]">text-green-500</code>) are available for accent use.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface TypographyTokenProps {
  label: string;
  example: string;
  className: string;
  tailwind: string;
  usage: string;
  copiedToken: string | null;
  onCopy: (text: string, token: string) => void;
}

function TypographyToken({ label, example, className, tailwind, usage, copiedToken, onCopy }: TypographyTokenProps) {
  const key = `type-${label}`;
  return (
    <div className="border border-border p-5 rounded-md flex items-center gap-6">
      <div className="w-48 shrink-0">
        <span className={className}>{example}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[14px] font-medium">{label}</span>
          <span className="text-[13px] text-muted-foreground">{usage}</span>
        </div>
        <code className="px-2 py-1 bg-muted rounded text-[12px]">{tailwind}</code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0"
        onClick={() => onCopy(tailwind, key)}
      >
        {copiedToken === key ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

interface ColorTokenProps {
  name: string;
  variable: string;
  hex: string;
  description: string;
  copiedToken: string | null;
  onCopy: (text: string, token: string) => void;
}

function ColorToken({ name, variable, hex, description, copiedToken, onCopy }: ColorTokenProps) {
  return (
    <div className="border border-border p-4 flex items-center gap-4 rounded-md">
      <div
        className="w-12 h-12 border border-border shrink-0 rounded-md"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[14px] font-medium">{name}</span>
          <span className="text-[13px] text-muted-foreground">{description}</span>
        </div>
        <div className="flex gap-2 items-center">
          <code className="px-2 py-1 bg-muted rounded text-[12px]">var({variable})</code>
          <span className="text-muted-foreground text-[12px]">=</span>
          <code className="px-2 py-1 bg-muted rounded text-[12px]">{hex}</code>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0"
        onClick={() => onCopy(`var(${variable})`, variable)}
      >
        {copiedToken === variable ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

interface RadiusTokenProps {
  name: string;
  variable: string;
  value: string;
  tailwind: string;
  copiedToken: string | null;
  onCopy: (text: string, token: string) => void;
}

function RadiusToken({ name, variable, value, tailwind, copiedToken, onCopy }: RadiusTokenProps) {
  return (
    <div className="border border-border p-4 rounded-md">
      <div className="flex items-start justify-between mb-4">
        <span className="text-[14px] font-medium">{name}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => onCopy(tailwind, variable)}
        >
          {copiedToken === variable ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="flex gap-2 items-center mb-4">
        <code className="px-2 py-1 bg-muted rounded text-[13px]">{tailwind}</code>
        <span className="text-muted-foreground text-[13px]">=</span>
        <code className="px-2 py-1 bg-muted rounded text-[13px]">{value}</code>
      </div>
      <div
        className="w-full h-16 bg-muted border-2 border-foreground"
        style={{ borderRadius: `var(${variable})` }}
      />
    </div>
  );
}
