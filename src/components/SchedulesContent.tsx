import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function SchedulesContent() {
  const [isUTC, setIsUTC] = useState(true);

  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--header)' }}>
      <div className="border-b border-border px-6 py-[11px] bg-background">
        <div className="flex items-center justify-between gap-4 min-h-[40px]">
          <h2 className="text-[20px] font-normal m-0">Schedules</h2>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => setIsUTC(!isUTC)}
            >
              <Clock className="h-4 w-4" />
              {isUTC ? "UTC" : "Local"}
            </Button>
            <Button>Add schedule</Button>
          </div>
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
                <span className="leading-normal">Run modules at intervals, or manually execute with "Force run"</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span className="leading-normal">Toggle between local time and UTC when viewing schedules</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span className="leading-normal">Monitor execution history in "Monitoring" tab</span>
              </li>
            </ul>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto">
            Learn more about scheduling modules <ArrowRight className="h-4 w-4 ml-1 inline" />
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
