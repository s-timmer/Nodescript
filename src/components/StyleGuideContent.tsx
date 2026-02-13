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
          <h1 className="mb-3">Style guide</h1>
          <p className="text-muted-foreground">
            Design system tokens and typography rules for NodeScript. All values are defined as CSS variables in <code className="px-2 py-1 bg-muted rounded text-[14px]">/styles/globals.css</code>
          </p>
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="mb-6">Typography</h2>
          
          {/* Typography Scale */}
          <div className="space-y-6">
            {/* H1 */}
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1>Heading 1</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard('var(--text-h1)', 'h1')}
                >
                  {copiedToken === 'h1' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--text-h1)</code> = 48px
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--font-weight-extra-bold)</code> = 800
                </div>
                <div>
                  <span className="text-muted-foreground">Line height:</span>{" "}
                  <span>1.2</span>
                </div>
              </div>
            </div>

            {/* H2 */}
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2>Heading 2</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard('var(--text-h2)', 'h2')}
                >
                  {copiedToken === 'h2' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--text-h2)</code> = 20px
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--font-weight-semi-bold)</code> = 600
                </div>
                <div>
                  <span className="text-muted-foreground">Line height:</span>{" "}
                  <span>1.2</span>
                </div>
              </div>
            </div>

            {/* H3 */}
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3>Heading 3</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard('var(--text-h3)', 'h3')}
                >
                  {copiedToken === 'h3' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--text-h3)</code> = 24px
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--font-weight-semi-bold)</code> = 600
                </div>
                <div>
                  <span className="text-muted-foreground">Line height:</span>{" "}
                  <span>1.33</span>
                </div>
              </div>
            </div>

            {/* H4 */}
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4>Heading 4</h4>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard('var(--text-h4)', 'h4')}
                >
                  {copiedToken === 'h4' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--text-h4)</code> = 16px
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--font-weight-semi-bold)</code> = 600
                </div>
                <div>
                  <span className="text-muted-foreground">Line height:</span>{" "}
                  <span>1.4</span>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p>Paragraph text</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard('var(--text-base)', 'p')}
                >
                  {copiedToken === 'p' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--text-base)</code> = 16px
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--font-weight-normal)</code> = 400
                </div>
                <div>
                  <span className="text-muted-foreground">Line height:</span>{" "}
                  <span>1.75</span>
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <label>Label text</label>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard('var(--text-label)', 'label')}
                >
                  {copiedToken === 'label' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--text-label)</code> = 14px
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>{" "}
                  <code className="px-2 py-1 bg-muted rounded">var(--font-weight-medium)</code> = 500
                </div>
                <div>
                  <span className="text-muted-foreground">Line height:</span>{" "}
                  <span>1.43</span>
                </div>
              </div>
            </div>
          </div>

          {/* Font Family */}
          <div className="mt-8 border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
            <h4 className="mb-3">Font family</h4>
            <p className="text-muted-foreground">
              All typography uses <code className="px-2 py-1 bg-muted rounded">Inter</code> font family
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="mb-6">Colors</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Background colors */}
            <ColorToken 
              name="Background" 
              variable="--background" 
              value="rgba(255, 255, 255, 1.00)"
              description="The default background color for the application"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Foreground" 
              variable="--foreground" 
              value="rgba(15, 23, 42, 1.00)"
              description="The default color for elements or text that appears on top of the background"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Card" 
              variable="--card" 
              value="rgba(255, 255, 255, 1.00)"
              description="The background color for cards, modals, and other containers"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Card Foreground" 
              variable="--card-foreground" 
              value="rgba(15, 23, 42, 1.00)"
              description="The default color for text or elements on top of cards"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Primary" 
              variable="--primary" 
              value="rgba(15, 23, 42, 1.00)"
              description="The primary color used for buttons, links, and other interactive elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Primary Foreground" 
              variable="--primary-foreground" 
              value="rgba(255, 255, 255, 1.00)"
              description="The default color for text or elements on top of primary colored elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Secondary" 
              variable="--secondary" 
              value="rgba(241, 245, 249, 1.00)"
              description="The secondary color used for secondary buttons and interactive elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Secondary Foreground" 
              variable="--secondary-foreground" 
              value="rgba(51, 65, 85, 1.00)"
              description="The default color for text or elements on top of secondary colored elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Muted" 
              variable="--muted" 
              value="rgba(241, 245, 249, 1.00)"
              description="The muted color used for less prominent elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Muted Foreground" 
              variable="--muted-foreground" 
              value="rgba(148, 163, 184, 1.00)"
              description="The default color for text or elements on top of muted colored elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Accent" 
              variable="--accent" 
              value="rgba(15, 23, 42, 1.00)"
              description="The accent color used for highlights, links, and other interactive elements"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Border" 
              variable="--border" 
              value="rgba(203, 213, 225, 1.00)"
              description="The default border color for elements such as inputs and buttons"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Border Light" 
              variable="--border-light" 
              value="rgba(203, 213, 225, 0.40)"
              description="A lighter border color for subtle dividers between content items"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Input Background" 
              variable="--input-background" 
              value="rgba(255, 255, 255, 1.00)"
              description="The default background color for input fields and text areas"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Sidebar" 
              variable="--sidebar" 
              value="rgba(248, 250, 252, 1.00)"
              description="The background color for sidebars and navigation menus"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <ColorToken 
              name="Header" 
              variable="--header" 
              value="rgba(250, 252, 254, 1.00)"
              description="The background color for the header/top bar"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <h2 className="mb-6">Border radius</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <RadiusToken 
              name="Button" 
              variable="--radius-button" 
              value="6px"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <RadiusToken 
              name="Card" 
              variable="--radius-card" 
              value="6px"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <RadiusToken 
              name="Input" 
              variable="--radius-input" 
              value="6px"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
            <RadiusToken 
              name="Checkbox" 
              variable="--radius-checkbox" 
              value="2px"
              copiedToken={copiedToken}
              onCopy={copyToClipboard}
            />
          </div>
        </section>

        {/* Elevation Section */}
        <section className="mb-16">
          <h2 className="mb-6">Elevation</h2>
          
          <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="mb-2">Small elevation</h4>
                <p className="text-muted-foreground text-[14px]">
                  Shadow for small elevations, such as cards or modals
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => copyToClipboard('var(--elevation-sm)', 'elevation-sm')}
              >
                {copiedToken === 'elevation-sm' ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <code className="px-2 py-1 bg-muted rounded text-[14px]">var(--elevation-sm)</code>
              <span className="text-muted-foreground text-[14px]">=</span>
              <code className="px-2 py-1 bg-muted rounded text-[14px]">0px 4px 6px 0px rgba(0,0,0,0.09)</code>
            </div>
            <div 
              className="mt-6 p-8 bg-background border border-border" 
              style={{ 
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--elevation-sm)'
              }}
            >
              <p className="text-center text-muted-foreground">Example with elevation-sm applied</p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-16">
          <h2 className="mb-6">Usage guidelines</h2>
          
          <div className="space-y-4">
            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <h4 className="mb-3">CSS Variables</h4>
              <p className="text-muted-foreground mb-4">
                Always use CSS variables instead of hardcoded values to ensure consistency and easy theming:
              </p>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-[14px]">
                  {`/* ✓ Good */`}<br />
                  {`style={{ borderRadius: 'var(--radius-card)' }}`}<br /><br />
                  {`/* ✗ Avoid */`}<br />
                  {`style={{ borderRadius: '6px' }}`}
                </code>
              </div>
            </div>

            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <h4 className="mb-3">Typography</h4>
              <p className="text-muted-foreground mb-4">
                Do not use Tailwind classes for font size, weight, or line-height unless specifically overriding:
              </p>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-[14px]">
                  {`/* ✓ Good - Uses default typography */`}<br />
                  {`<h2>Page title</h2>`}<br /><br />
                  {`/* ✗ Avoid - Overrides design system */`}<br />
                  {`<h2 className="text-2xl font-bold">Page title</h2>`}
                </code>
              </div>
            </div>

            <div className="border border-border p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <h4 className="mb-3">Sentence case</h4>
              <p className="text-muted-foreground">
                All titles and headings should follow sentence case (only capitalizing the first word and proper nouns) for a modern, conversational tone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface ColorTokenProps {
  name: string;
  variable: string;
  value: string;
  description: string;
  copiedToken: string | null;
  onCopy: (text: string, token: string) => void;
}

function ColorToken({ name, variable, value, description, copiedToken, onCopy }: ColorTokenProps) {
  return (
    <div className="border border-border p-4 flex items-center gap-4" style={{ borderRadius: 'var(--radius-card)' }}>
      <div 
        className="w-16 h-16 border border-border flex-shrink-0" 
        style={{ 
          backgroundColor: value,
          borderRadius: 'var(--radius-input)'
        }}
      />
      <div className="flex-1 min-w-0">
        <h4 className="mb-1">{name}</h4>
        <p className="text-muted-foreground text-[14px] mb-2">{description}</p>
        <div className="flex gap-2 items-center flex-wrap">
          <code className="px-2 py-1 bg-muted rounded text-[12px]">var({variable})</code>
          <span className="text-muted-foreground text-[12px]">=</span>
          <code className="px-2 py-1 bg-muted rounded text-[12px]">{value}</code>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 flex-shrink-0"
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
  copiedToken: string | null;
  onCopy: (text: string, token: string) => void;
}

function RadiusToken({ name, variable, value, copiedToken, onCopy }: RadiusTokenProps) {
  return (
    <div className="border border-border p-4" style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="flex items-start justify-between mb-4">
        <h4>{name}</h4>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => onCopy(`var(${variable})`, variable)}
        >
          {copiedToken === variable ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="flex gap-2 items-center mb-4">
        <code className="px-2 py-1 bg-muted rounded text-[14px]">var({variable})</code>
        <span className="text-muted-foreground">=</span>
        <code className="px-2 py-1 bg-muted rounded text-[14px]">{value}</code>
      </div>
      <div 
        className="w-full h-20 bg-muted border-2 border-foreground" 
        style={{ borderRadius: `var(${variable})` }}
      />
    </div>
  );
}
