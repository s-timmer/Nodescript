import { useState } from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

export function SchedulesContent() {
  const [isUTC, setIsUTC] = useState(true);

  return (
    <div className="flex flex-col min-h-full">
      <div className="border-b border-border px-6 py-[11px]">
        <div className="flex items-center justify-between gap-4 min-h-[40px]">
          <h2 className="text-[20px] font-medium m-0">Schedules</h2>
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

      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center max-w-sm">
          <Clock className="h-6 w-6 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-[14px] mb-4">
            Run modules on a schedule. Your scheduled tasks will appear here.
          </p>
          <Button>Add schedule</Button>
          <div className="mt-3">
            <Button variant="link" className="text-muted-foreground text-[13px] h-auto p-0">
              Learn more about scheduling
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
