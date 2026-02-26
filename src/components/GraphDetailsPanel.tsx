import { ChevronDown, MoreVertical, RotateCcw, Layers, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface GraphDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  graphName: string;
}

// Mock data - in real app this would come from props or API
const graphDetails: { [key: string]: {
  isEndpoint?: boolean;
  endpointMethod?: string;
  endpointPath?: string;
  modulePath?: string;
  dependencies?: string[];
  dependents?: string[];
  lastModified?: string;
  lastPublished?: string;
} } = {
  "5. Integrate Services": {
    isEndpoint: true,
    endpointMethod: "GET",
    endpointPath: "/starter-graphs/5-integrate-services",
    modulePath: "Starter Graphs / 5. Integrate Services",
    dependencies: [
      "Flow / If",
      "Gmail / Users / Labels / Create",
      "Logic / Contains",
      "Array / Find By Key",
      "Gmail / Users / Messages / Modify",
      "Gmail / Users / Messages / List",
      "Gmail / Users / Labels / List",
    ],
    dependents: [],
    lastModified: "3 months ago",
    lastPublished: "29 minutes ago",
  },
  "1. The Basics": {
    isEndpoint: true,
    endpointMethod: "GET",
    endpointPath: "/starter-graphs/1-the-basics",
    modulePath: "Starter Graphs / 1. Working with Data / 1. The Basics",
    dependencies: [
      "String / Concat",
      "Math / Add",
    ],
    dependents: [],
    lastModified: "3 months ago",
    lastPublished: "2 hours ago",
  },
  "2. Lists": {
    modulePath: "Starter Graphs / 1. Working with Data / 2. Lists",
    dependencies: [
      "Array / Map",
      "Array / Filter",
      "Array / Reduce",
    ],
    dependents: [],
    lastModified: "3 months ago",
    lastPublished: "1 week ago",
  },
};

const historyEntries = [
  {
    id: "1.0.7",
    date: "26 March, 12:36PM",
    version: "1.0.7",
    isMostRecent: true,
    description: "Added retry logic with exponential backoff for HTTP request failures. Improved error handling for timeout scenarios.",
    author: "Sjors Timmer",
  },
  {
    id: "1.0.6",
    date: "24 March, 12:36PM",
    version: "1.0.6",
    isMostRecent: false,
    description: "Fixed conditional logic bug where empty strings were treated as truthy values. Updated validation for JSON parsing node.",
    author: "Sjors Timmer",
  },
  {
    id: "1.0.5",
    date: "22 March, 12:36PM",
    version: "1.0.5",
    isMostRecent: false,
    description: "Optimized data transformation performance for large datasets. Reduced memory usage by 40% through better streaming approach.",
    author: "Sjors Timmer",
  },
  {
    id: "1.0.4",
    date: "19 March, 12:36PM",
    version: "1.0.4",
    isMostRecent: false,
    description: "Initial implementation of webhook trigger with custom header support. Added basic authentication validation.",
    author: "Sjors Timmer",
  },
];

export function GraphDetailsPanel({ isOpen, onClose: _onClose, graphName }: GraphDetailsPanelProps) {
  const [isDependenciesOpen, setIsDependenciesOpen] = useState(false);
  const [isDependentsOpen, setIsDependentsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "history">("details");

  // Get graph details based on name
  const details = graphDetails[graphName] || {
    dependencies: [],
    dependents: [],
    lastModified: "3 months ago",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full border-l border-border bg-background flex flex-col shadow-sm"
          >
            <div className="flex flex-col h-full">
              {/* Panel header — graph name + edit */}
              <div className="border-b border-border px-6 py-3">
                <div className="flex items-center justify-between gap-4 min-h-[40px]">
                  <h2 className="text-base font-medium m-0 truncate">{graphName}</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 text-xs text-muted-foreground shrink-0"
                  >
                    Open
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-6 border-b border-border flex items-end">
                <div className="flex gap-8">
                  <button
                    onClick={() => setActiveTab("details")}
                    className={cn(
                      'pb-3 pt-3 px-1 text-sm border-b-2 -mb-px transition-colors',
                      activeTab === 'details'
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    )}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={cn(
                      'pb-3 pt-3 px-1 text-sm border-b-2 -mb-px transition-colors',
                      activeTab === 'history'
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    )}
                  >
                    History
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                {activeTab === "details" && (
                  <div>

                    {/* Endpoint — only if exposed */}
                    {details.isEndpoint && (
                      <div className="py-4 px-6 border-b border-border">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground shrink-0">Endpoint</span>
                          <span className="px-1.5 py-0.5 text-[11px] uppercase text-green-500 font-semibold">
                            {details.endpointMethod}
                          </span>
                          <span className="flex-1 truncate text-xs text-muted-foreground">{details.endpointPath}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7 shrink-0"
                            onClick={() => {
                              navigator.clipboard.writeText(details.endpointPath || '');
                            }}
                          >
                            <Copy className="size-3.5" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Module Preview */}
                    {details.modulePath && (
                      <div className="py-4 px-6 border-b border-border">
                        <label className="block mb-2 text-xs text-muted-foreground">Module Preview</label>
                        <div className="border border-border bg-background relative rounded-lg">
                          <div
                            className="absolute -right-[6px] top-6 size-3 rounded-full border-2 border-background bg-muted-foreground"
                            title="Any"
                          />
                          <div className="py-1.5">
                            {["Registry", "nodescript", "Image", "Tag", "Name", "Repo", "Author"].map((name) => (
                              <div key={name} className="flex items-center py-1 px-3 relative">
                                <div
                                  className="size-3 rounded-full border-2 border-background absolute -left-[6px] bg-muted-foreground"
                                  title="Any"
                                />
                                <span className="pl-3 text-xs">{name}</span>
                              </div>
                            ))}
                            <div className="flex items-center py-1 px-3 relative">
                              <div
                                className="size-3 rounded-full border-2 border-background absolute -left-[6px] bg-green-500"
                                title="String"
                              />
                              <span className="pl-3 text-xs">ARGOCD SLACK TOKEN</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <div className="py-4 px-6 border-b border-border">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-xs text-muted-foreground shrink-0">Description</span>
                        <span className="text-xs text-muted-foreground italic text-right">No description</span>
                      </div>
                    </div>

                    {/* Relations — Dependencies + Dependents */}
                    <div className="border-b border-border">
                      <div className="px-6">
                        <Collapsible open={isDependenciesOpen} onOpenChange={setIsDependenciesOpen}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full py-3">
                            <span className="text-xs text-muted-foreground">Dependencies ({details.dependencies?.length || 0})</span>
                            <ChevronDown
                              className={cn('size-3.5 text-muted-foreground transition-transform', isDependenciesOpen ? 'rotate-0' : '-rotate-90')}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="pb-3 space-y-0.5">
                              {details.dependencies?.map((dep, index) => (
                                <div key={index} className="py-0.5">
                                  <span className="text-xs">{dep}</span>
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>

                      <div className="border-t border-border" />

                      <div className="px-6">
                        <Collapsible open={isDependentsOpen} onOpenChange={setIsDependentsOpen}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full py-3">
                            <span className="text-xs text-muted-foreground">Dependents ({details.dependents?.length || 0})</span>
                            <ChevronDown
                              className={cn('size-3.5 text-muted-foreground transition-transform', isDependentsOpen ? 'rotate-0' : '-rotate-90')}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="pb-3 space-y-0.5">
                              {details.dependents?.map((dep, index) => (
                                <div key={index} className="py-0.5">
                                  <span className="text-xs">{dep}</span>
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>

                    {/* Activity — timestamps */}
                    <div className="py-4 px-6 flex justify-between">
                      <div className="space-y-2.5">
                        <span className="text-xs text-muted-foreground block">Modified</span>
                        {details.lastPublished && (
                          <span className="text-xs text-muted-foreground block">Published</span>
                        )}
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="size-4 rounded-full bg-blue-100 text-blue-700 text-[8px] font-medium flex items-center justify-center shrink-0">ST</div>
                          <span className="text-xs">{details.lastModified}</span>
                        </div>
                        {details.lastPublished && (
                          <div className="flex items-center gap-1.5">
                            <div className="size-4 rounded-full bg-blue-100 text-blue-700 text-[8px] font-medium flex items-center justify-center shrink-0">ST</div>
                            <span className="text-xs">{details.lastPublished}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "history" && (
                  <div>
                    {historyEntries.map((entry, index) => (
                      <div key={entry.id} className={cn('py-4 px-6', index < historyEntries.length - 1 && 'border-b border-border')}>
                        <div className="flex items-start justify-between gap-4 mb-1.5">
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-medium">Revision {entry.version}</span>
                            {entry.isMostRecent && (
                              <span className="text-xs text-muted-foreground">(most recent)</span>
                            )}
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="size-7 -mt-1 hover:bg-muted"
                              >
                                <MoreVertical className="size-4 text-muted-foreground" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                              <DropdownMenuItem className="gap-3 py-2">
                                <RotateCcw className="size-4 text-muted-foreground" />
                                <span>Revert to this version</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-3 py-2">
                                <Layers className="size-4 text-muted-foreground" />
                                <span>Compare to current version</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                          {entry.description}
                        </p>

                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <div className="size-4 rounded-full bg-blue-100 text-blue-700 text-[8px] font-medium flex items-center justify-center shrink-0">ST</div>
                          <span>{entry.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
