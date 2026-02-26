import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { motion, AnimatePresence } from "motion/react";
import { endpoints } from "./EndpointsContent";
import type { Endpoint } from "./EndpointsContent";

const methodColors: Record<string, string> = {
  GET: "text-green-600",
  POST: "text-blue-600",
  PUT: "text-amber-600",
  PATCH: "text-purple-600",
  DELETE: "text-red-600",
};

interface EndpointDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  endpointId: string | null;
}

export function EndpointDetailsPanel({ isOpen, onClose: _onClose, endpointId }: EndpointDetailsPanelProps) {
  const endpoint: Endpoint | undefined = endpoints.find((e) => e.id === endpointId);

  return (
    <AnimatePresence>
      {isOpen && endpoint && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="h-full border-l border-border bg-background flex flex-col shadow-sm"
        >
          <div className="flex flex-col h-full">
            {/* Panel header */}
            <div className="border-b border-border px-6 py-3">
              <div className="flex items-center justify-between gap-4 min-h-[40px]">
                <h2 className="text-base font-medium m-0 truncate">Endpoint details</h2>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {/* Method / Path */}
              <div className="py-4 px-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className={cn('font-mono text-sm font-semibold', methodColors[endpoint.method] ?? 'text-foreground')}>
                    {endpoint.method}
                  </span>
                  <span className="text-sm">{endpoint.path}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7 ml-auto shrink-0"
                    onClick={() => navigator.clipboard.writeText(`${endpoint.method} ${endpoint.path}`)}
                  >
                    <Copy className="size-3.5" />
                  </Button>
                </div>
              </div>

              {/* URL */}
              <div className="py-4 px-6 border-b border-border">
                <label className="block mb-2 text-xs text-muted-foreground">URL</label>
                <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2 bg-muted/30">
                  <span className="text-xs text-muted-foreground truncate flex-1 font-mono">
                    {endpoint.url}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6 shrink-0"
                    onClick={() => navigator.clipboard.writeText(endpoint.url)}
                  >
                    <Copy className="size-3" />
                  </Button>
                </div>
              </div>

              {/* Module */}
              <div className="py-4 px-6 border-b border-border">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-xs text-muted-foreground">Module</span>
                  <span className="text-xs text-right">{endpoint.graph}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xs text-muted-foreground">Version</span>
                  <span className="text-xs text-right">{endpoint.version}</span>
                </div>
              </div>

              {/* Hooks — only if any exist */}
              {endpoint.hooks && (endpoint.hooks.before || endpoint.hooks.after || endpoint.hooks.error) && (
                <div className="py-4 px-6 border-b border-border">
                  <label className="block mb-2 text-xs text-muted-foreground">Hooks</label>
                  <div className="space-y-1.5">
                    {endpoint.hooks.before && (
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Before</span>
                        <span className="text-xs">{endpoint.hooks.before}</span>
                      </div>
                    )}
                    {endpoint.hooks.after && (
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">After</span>
                        <span className="text-xs">{endpoint.hooks.after}</span>
                      </div>
                    )}
                    {endpoint.hooks.error && (
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Error</span>
                        <span className="text-xs">{endpoint.hooks.error}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Last updated */}
              <div className="py-4 px-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xs text-muted-foreground">Last updated</span>
                  <div className="flex items-center gap-1.5">
                    <div className="size-4 rounded-full bg-blue-100 text-blue-700 text-[8px] font-medium flex items-center justify-center shrink-0">
                      ST
                    </div>
                    <span className="text-xs">{endpoint.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
