import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

// Event dots on the timeline — position is % across the 15:00–16:00 range
const timelineEvents = [
  { position: 37, status: "success" as const, graph: "Slack AI Chatbot" },
  { position: 47, status: "success" as const, graph: "Data Sync — Google Sheets" },
  { position: 52, status: "success" as const, graph: "5. Integrate Services" },
  { position: 58, status: "success" as const, graph: "Sunrise Notifier" },
  { position: 63, status: "failed" as const, graph: "Support Ticket Processor" },
  { position: 70, status: "success" as const, graph: "1. The Basics" },
];

const executionLog = [
  { time: "15:42", graph: "1. The Basics", duration: "120ms", status: "success" as const },
  { time: "15:38", graph: "Support Ticket Processor", duration: "2.3s", status: "failed" as const },
  { time: "15:35", graph: "Sunrise Notifier", duration: "450ms", status: "success" as const },
  { time: "15:31", graph: "5. Integrate Services", duration: "890ms", status: "success" as const },
  { time: "15:28", graph: "Data Sync — Google Sheets", duration: "1.2s", status: "success" as const },
  { time: "15:22", graph: "Slack AI Chatbot", duration: "3.1s", status: "success" as const },
];

interface MonitoringContentProps {
  activeWorkspace?: string;
}

export function MonitoringContent({ activeWorkspace = "starter-graphs" }: MonitoringContentProps) {
  const [isLocal, setIsLocal] = useState(true);
  const hasData = activeWorkspace === "starter-graphs";
  const currentDate = "2025-10-22";
  const currentTime = "15:00";

  // Generate time markers for the timeline (15 minute intervals)
  const startHour = 15;
  const endHour = 16;
  const timeMarkers: string[] = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    const hourStr = hour.toString().padStart(2, '0');
    timeMarkers.push(`${hourStr}:00`);
    if (hour < endHour) {
      timeMarkers.push(`${hourStr}:15`);
      timeMarkers.push(`${hourStr}:30`);
      timeMarkers.push(`${hourStr}:45`);
    }
  }

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader title="Monitoring" />

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Controls Bar */}
        <div className="flex items-center gap-3 mb-4">
          <Button size="sm">
            Jump to now
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-8"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="text-sm text-foreground px-2">
              {currentDate}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="size-8"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-8"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="text-sm text-foreground px-2">
              {currentTime}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="size-8"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsLocal(!isLocal)}
          >
            <div className="size-4 rounded-full border-2 border-current flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-current" />
            </div>
            {isLocal ? "LOCAL" : "UTC"}
          </Button>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-background">
        {/* Stats Row */}
        {hasData && (
          <div className="flex items-center gap-4 px-6 py-3 border-b border-border">
            <span className="text-xs text-muted-foreground">247 executions</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-red-500">3 failed</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">98.8% success</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">avg 340ms</span>
          </div>
        )}

        {/* Timeline View */}
        <TooltipProvider>
          <div className="px-6 pt-8 pb-6 border-b border-border">
            {/* Timeline navigation arrows and track */}
            <div className="flex items-start gap-4">
              {/* Left arrow */}
              <div className="shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                    >
                      <ChevronLeft className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Go to previous hour</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Timeline content area */}
              <div className="flex-1">
                {/* Event dots layer */}
                <div className="h-8 relative">
                  {hasData && timelineEvents.map((event, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            'absolute top-1/2 -translate-y-1/2 size-3 rounded-full cursor-pointer',
                            event.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                          )}
                          style={{
                            left: `${event.position}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{event.graph}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                {/* Timeline track layer */}
                <div className="relative">
                  {/* Time markers */}
                  <div className="flex justify-between items-start relative">
                    {timeMarkers.map((time, index) => {
                      const isMajor = time.endsWith(':00');
                      return (
                        <div
                          key={time}
                          className="flex flex-col items-center"
                          style={{
                            position: 'absolute',
                            left: `${(index / (timeMarkers.length - 1)) * 100}%`,
                            transform: 'translateX(-50%)'
                          }}
                        >
                          {/* Tick mark */}
                          <div
                            className="bg-border"
                            style={{
                              width: '1px',
                              height: isMajor ? '12px' : '8px',
                              marginBottom: '4px'
                            }}
                          ></div>
                          {/* Time label */}
                          <span className="text-sm text-muted-foreground">
                            {time}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Horizontal line */}
                  <div
                    className="bg-border absolute top-0"
                    style={{
                      height: '1px',
                      width: '100%',
                      left: 0
                    }}
                  ></div>
                </div>
              </div>

              {/* Right arrow */}
              <div className="shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                    >
                      <ChevronRight className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Go to next hour</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </TooltipProvider>

        {/* Execution Log */}
        {hasData && (
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="text-xs text-muted-foreground font-medium pl-6">Time</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium">Graph</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium">Duration</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium pr-6">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {executionLog.map((entry, i) => (
                <TableRow key={i}>
                  <TableCell className="text-xs font-mono text-muted-foreground pl-6">{entry.time}</TableCell>
                  <TableCell className="text-xs">{entry.graph}</TableCell>
                  <TableCell className="text-xs font-mono text-muted-foreground">{entry.duration}</TableCell>
                  <TableCell className="text-xs pr-6">
                    {entry.status === "success" ? (
                      <div className="flex items-center gap-1.5">
                        <Check className="size-3.5 text-green-500" />
                        <span className="text-muted-foreground">Success</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <X className="size-3.5 text-red-500" />
                        <span className="text-red-500">Failed</span>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
