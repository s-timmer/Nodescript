import { Button } from "./ui/button";
import { Variable } from "lucide-react";

export function VariablesContent() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="border-b border-border px-6 py-[11px]">
        <div className="flex items-center justify-between gap-4 min-h-[40px]">
          <h2 className="text-[20px] font-medium m-0">Variables</h2>
          <Button>Add variable</Button>
        </div>
      </div>

      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center max-w-sm">
          <Variable className="h-6 w-6 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-[14px] mb-4">
            Store credentials and values to use across graphs in your workspace.
          </p>
          <Button>Add variable</Button>
          <div className="mt-3">
            <Button variant="link" className="text-muted-foreground text-[13px] h-auto p-0">
              Learn more about variables
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
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
