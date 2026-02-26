import { useState } from "react";
import { Button } from "./ui/button";
import { Clock, Check, X } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { PageContent } from "./PageContent";
import { PageFooter } from "./PageFooter";
import { EmptyState } from "./EmptyState";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const schedules = [
  {
    graph: "Sunrise Notifier",
    schedule: "Daily at 5:00 AM",
    lastRun: "Today, 5:00 AM",
    status: "success" as const,
    nextRun: "Tomorrow, 5:00 AM",
  },
  {
    graph: "Support Ticket Processor",
    schedule: "Every 15 minutes",
    lastRun: "12 min ago",
    status: "success" as const,
    nextRun: "In 3 min",
  },
  {
    graph: "Data Sync — Google Sheets",
    schedule: "Every hour",
    lastRun: "42 min ago",
    status: "failed" as const,
    nextRun: "In 18 min",
  },
  {
    graph: "Weekly Analytics Report",
    schedule: "Mondays at 9:00 AM",
    lastRun: "5 days ago",
    status: "success" as const,
    nextRun: "In 2 days",
  },
];

interface SchedulesContentProps {
  activeWorkspace?: string;
}

export function SchedulesContent({ activeWorkspace = "starter-graphs" }: SchedulesContentProps) {
  const [isUTC, setIsUTC] = useState(true);
  const hasData = activeWorkspace === "starter-graphs";

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader title="Schedules">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setIsUTC(!isUTC)}
          >
            <Clock className="size-4" />
            {isUTC ? "UTC" : "Local"}
          </Button>
          <Button>Add schedule</Button>
        </div>
      </PageHeader>

      {hasData ? (
        <PageContent>
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="text-xs text-muted-foreground font-medium pl-6">Graph</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Schedule</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Last run</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Status</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium pr-6">Next run</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule) => (
                  <TableRow key={schedule.graph}>
                    <TableCell className="text-xs pl-6">{schedule.graph}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{schedule.schedule}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{schedule.lastRun}</TableCell>
                    <TableCell className="text-xs">
                      {schedule.status === "success" ? (
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
                    <TableCell className="text-xs text-muted-foreground pr-6">{schedule.nextRun}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PageContent>
      ) : (
        <PageContent centered>
          <EmptyState
            icon={Clock}
            description="Run modules on a schedule. Your scheduled tasks will appear here."
            tips={[
              "Run modules at intervals, or manually execute with \"Force run\"",
              "Toggle between local time and UTC when viewing schedules",
              "Monitor execution history in \"Monitoring\" tab",
            ]}
          />
        </PageContent>
      )}

      <PageFooter />
    </div>
  );
}
