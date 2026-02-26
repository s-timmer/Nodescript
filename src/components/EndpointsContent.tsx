import { useState } from "react";
import { Button } from "./ui/button";
import { Radio, MoreVertical, Pencil, Copy, ExternalLink, Trash2, ChevronRight, Workflow } from "lucide-react";
import { cn } from "./ui/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PageHeader } from "./PageHeader";
import { PageContent } from "./PageContent";
import { PageFooter } from "./PageFooter";
import { EmptyState } from "./EmptyState";

export interface Endpoint {
  id: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  url: string;
  graph: string;
  modulePath: string;
  version: string;
  status: "active" | "paused";
  requests: number;
  lastUpdated: string;
  hooks?: {
    before?: string;
    after?: string;
    error?: string;
  };
}

export const endpoints: Endpoint[] = [
  {
    id: "ep-1",
    method: "GET",
    path: "/starter-graphs/1-the-basics",
    url: "https://l4e9ew0n.run.nodescript.dev/starter-graphs/1-the-basics",
    graph: "1. The Basics",
    modulePath: "Starter Graphs / 1. Working with Data / 1. The Basics",
    version: "Latest (1.0.7)",
    status: "active",
    requests: 142,
    lastUpdated: "2 min ago",
  },
  {
    id: "ep-2",
    method: "GET",
    path: "/starter-graphs/5-integrate-services",
    url: "https://l4e9ew0n.run.nodescript.dev/starter-graphs/5-integrate-services",
    graph: "5. Integrate Services",
    modulePath: "Starter Graphs / 5. Integrate Services",
    version: "Latest (1.0.3)",
    status: "active",
    requests: 89,
    lastUpdated: "14 min ago",
    hooks: {
      before: "Auth / Validate Token",
    },
  },
  {
    id: "ep-3",
    method: "POST",
    path: "/webhooks/slack-ai-chatbot",
    url: "https://l4e9ew0n.run.nodescript.dev/webhooks/slack-ai-chatbot",
    graph: "Slack AI Chatbot",
    modulePath: "Integrations / Slack AI Chatbot",
    version: "Latest (2.1.0)",
    status: "active",
    requests: 37,
    lastUpdated: "3 hours ago",
    hooks: {
      before: "Auth / Verify Slack Signature",
      error: "Notifications / Send Error Alert",
    },
  },
  {
    id: "ep-4",
    method: "GET",
    path: "/api/sunrise-times",
    url: "https://l4e9ew0n.run.nodescript.dev/api/sunrise-times",
    graph: "Sunrise Notifier",
    modulePath: "Personal / Sunrise Notifier",
    version: "Latest (1.0.0)",
    status: "active",
    requests: 2,
    lastUpdated: "6 hours ago",
  },
  {
    id: "ep-5",
    method: "POST",
    path: "/webhooks/support-tickets",
    url: "https://l4e9ew0n.run.nodescript.dev/webhooks/support-tickets",
    graph: "Support Ticket Processor",
    modulePath: "Integrations / Support Ticket Processor",
    version: "Latest (1.2.1)",
    status: "paused",
    requests: 0,
    lastUpdated: "3 days ago",
    hooks: {
      after: "Analytics / Log Request",
    },
  },
];

const methodColors: Record<string, string> = {
  GET: "text-green-600",
  POST: "text-blue-600",
  PUT: "text-amber-600",
  PATCH: "text-purple-600",
  DELETE: "text-red-600",
};

interface EndpointsContentProps {
  activeWorkspace?: string;
  selectedEndpoint?: string | null;
  onSelectEndpoint?: (id: string | null) => void;
  onOpenDialog?: () => void;
}

export function EndpointsContent({
  activeWorkspace = "starter-graphs",
  selectedEndpoint,
  onSelectEndpoint,
  onOpenDialog,
}: EndpointsContentProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const hasData = activeWorkspace === "starter-graphs";

  const toggleExpanded = (id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader title="Endpoints">
        <Button onClick={onOpenDialog}>Add endpoint</Button>
      </PageHeader>

      {hasData ? (
        <PageContent onClick={() => onSelectEndpoint?.(null)}>
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            {endpoints.map((endpoint) => {
              const isExpanded = expandedRows.has(endpoint.id);
              return (
                <div key={endpoint.id} className="border-b border-border last:border-b-0">
                  <div
                    className={cn(
                      'flex items-center gap-3 px-6 py-2.5 cursor-pointer transition-colors hover:bg-muted/50',
                      selectedEndpoint === endpoint.id && 'bg-muted/50'
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEndpoint?.(
                        selectedEndpoint === endpoint.id ? null : endpoint.id
                      );
                    }}
                  >
                    {/* Expand chevron */}
                    <button
                      className="shrink-0 p-0.5 -m-0.5 rounded hover:bg-muted transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpanded(endpoint.id);
                      }}
                    >
                      <ChevronRight className={cn('size-3.5 text-muted-foreground transition-transform', isExpanded && 'rotate-90')} />
                    </button>

                    {/* Method badge */}
                    <span className={cn('font-mono text-xs font-semibold shrink-0 w-12', methodColors[endpoint.method] ?? 'text-foreground')}>
                      {endpoint.method}
                    </span>

                    {/* Path */}
                    <span className="text-xs flex-1 truncate">{endpoint.path}</span>

                    {/* Three-dot menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="size-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="gap-3 py-2">
                          <Pencil className="size-4 text-primary" />
                          <span className="text-primary">Edit endpoint</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="gap-3 py-2"
                          onClick={() => navigator.clipboard.writeText(endpoint.url)}
                        >
                          <Copy className="size-4 text-muted-foreground" />
                          <span>Copy URL</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-3 py-2">
                          <ExternalLink className="size-4 text-muted-foreground" />
                          <span>Go to graph</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-3 py-2 text-destructive focus:text-destructive">
                          <Trash2 className="size-4" />
                          <span>Delete endpoint</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Expanded sub-row: module path + version */}
                  {isExpanded && (
                    <div
                      className="flex items-center gap-2 px-6 py-2 bg-muted/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="shrink-0 w-[22px]" />
                      <Workflow className="size-3.5 text-muted-foreground shrink-0" />
                      <span className="text-xs text-muted-foreground truncate">{endpoint.modulePath}</span>
                      <span className="text-xs text-muted-foreground/60 shrink-0">{endpoint.version.toLowerCase()}</span>
                      <button className="ml-auto shrink-0 p-1 rounded hover:bg-muted transition-colors">
                        <ExternalLink className="size-3.5 text-muted-foreground" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </PageContent>
      ) : (
        <PageContent centered>
          <EmptyState
            icon={Radio}
            description="Expose your graphs as REST APIs. Endpoints will appear here once created."
            tips={[
              "A single module can be configured to handle any or all HTTP Request methods",
              "Add hooks to your endpoints to trigger graphs before or after your endpoint runs, or when an error occurs",
              "Test your endpoints directly within a graph",
            ]}
            learnMoreText="Learn more about endpoints"
          />
        </PageContent>
      )}

      <PageFooter />
    </div>
  );
}
