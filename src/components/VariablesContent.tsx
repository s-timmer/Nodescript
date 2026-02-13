import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function VariablesContent() {
  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--header)' }}>
      <div className="border-b border-border px-6 py-[11px] bg-background">
        <div className="flex items-center justify-between gap-4 min-h-[40px]">
          <h2 className="text-[20px] font-normal m-0">Variables</h2>
          <Button>Add variable</Button>
        </div>
      </div>

      <div className="flex-1 bg-background p-6 space-y-6">
        {/* Quick Tips */}
        <div className="bg-muted/30 p-6 space-y-4 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
          <div>
            <h4 className="m-0">Quick Tips:</h4>
            <ul className="space-y-2 text-[14px] text-foreground mt-4">
              <li className="flex items-center gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span className="leading-normal">Securely store and manage sensitive credentials</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span className="leading-normal">Save a value as a variable to use it across graphs in the workspace or organisation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span className="leading-normal">See where your variables are used in the side panel preview</span>
              </li>
            </ul>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto">
            Learn more about variables <ArrowRight className="h-4 w-4 ml-1 inline" />
          </Button>
        </div>
      </div>

      <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
        <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
          <a href="#docs">Docs</a>
        </Button>
        <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
          <a href="#support">Support</a>
        </Button>
      </div>
    </div>
  );
}
