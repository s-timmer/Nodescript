import { Pencil, ChevronDown, Circle, MoreVertical, RotateCcw, Layers, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import imgAvatar from "figma:asset/802a7173fba4480b8b5e95594e6644dfc35553ff.png";

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

export function GraphDetailsPanel({ isOpen, onClose, graphName }: GraphDetailsPanelProps) {
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
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="h-full border-l border-border bg-background flex flex-col"
          >
            <div className="flex flex-col h-full">
              <div className="px-6 pt-6 pb-0 border-b border-border">
                <div className="flex gap-8">
                  <button 
                    onClick={() => setActiveTab("details")}
                    className={`pb-3 px-1 border-b-2 transition-colors ${
                      activeTab === "details" 
                        ? "border-foreground text-foreground" 
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => setActiveTab("history")}
                    className={`pb-3 px-1 border-b-2 transition-colors ${
                      activeTab === "history" 
                        ? "border-foreground text-foreground" 
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    History
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                {activeTab === "details" && (
                  <div className="p-6 space-y-6 flex-1 overflow-auto">
                    {/* Primary Action */}
                    <Button 
                      variant="outline"
                      className="w-full justify-center gap-2"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit graph
                    </Button>

                    {/* Endpoint Section - only show if graph is exposed as endpoint */}
                    {details.isEndpoint && (
                      <div>
                        <label className="block mb-3">Endpoint</label>
                        <div className="flex items-center gap-2">
                          <span 
                            className="px-2 py-1 text-[12px] uppercase"
                            style={{ 
                              color: '#22c55e',
                              fontWeight: 'var(--font-weight-semi-bold)',
                            }}
                          >
                            {details.endpointMethod}
                          </span>
                          <span className="flex-1 truncate text-muted-foreground">{details.endpointPath}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 flex-shrink-0"
                            onClick={() => {
                              navigator.clipboard.writeText(details.endpointPath || '');
                            }}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Module Preview */}
                    {details.modulePath && (
                      <div>
                        <label className="block mb-3">Module Preview</label>
                        
                        {/* Module Path */}
                        <div 
                          className="border border-border bg-background relative"
                          style={{ borderRadius: 'var(--radius-input)' }}
                        >
                          {/* Output connector at the top right */}
                          <div 
                            className="absolute -right-[6px] top-6 w-3 h-3 rounded-full border-2 border-background"
                            style={{ backgroundColor: '#64748b' }}
                            title="Any"
                          />

                          {/* Input list */}
                          <div className="py-2">
                            {/* Input: Registry */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">Registry</span>
                            </div>

                            {/* Input: nodescript */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">nodescript</span>
                            </div>

                            {/* Input: Image */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">Image</span>
                            </div>

                            {/* Input: Tag */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">Tag</span>
                            </div>

                            {/* Input: Name */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">Name</span>
                            </div>

                            {/* Input: Repo */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">Repo</span>
                            </div>

                            {/* Input: Author */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#94a3b8' }}
                                title="Any"
                              />
                              <span className="pl-3">Author</span>
                            </div>

                            {/* Input: ARGOCD SLACK TOKEN (String type) */}
                            <div className="flex items-center gap-2 py-1.5 px-3 relative">
                              <div 
                                className="w-3 h-3 rounded-full border-2 border-background absolute -left-[6px]"
                                style={{ backgroundColor: '#22c55e' }}
                                title="String"
                              />
                              <span className="pl-3">ARGOCD SLACK TOKEN</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <div>
                      <label className="block mb-3">Description</label>
                      <p className="text-muted-foreground">
                        No description provided.
                      </p>
                    </div>

                    {/* Dependencies */}
                    <div>
                      <Collapsible open={isDependenciesOpen} onOpenChange={setIsDependenciesOpen}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full group mb-3">
                          <label>Dependencies ({details.dependencies?.length || 0})</label>
                          <div 
                            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <ChevronDown 
                              className="h-4 w-4 text-muted-foreground transition-transform"
                              style={{ transform: isDependenciesOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                            />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="space-y-2">
                            {details.dependencies?.map((dep, index) => (
                              <div key={index} className="py-1">
                                <span className="text-muted-foreground">{dep}</span>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>

                    {/* Dependents */}
                    <div>
                      <Collapsible open={isDependentsOpen} onOpenChange={setIsDependentsOpen}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full group mb-3">
                          <label>Dependents ({details.dependents?.length || 0})</label>
                          <div 
                            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <ChevronDown 
                              className="h-4 w-4 text-muted-foreground transition-transform"
                              style={{ transform: isDependentsOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                            />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="space-y-2">
                            {details.dependents?.map((dep, index) => (
                              <div key={index} className="py-1">
                                <span className="text-muted-foreground">{dep}</span>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>

                    {/* Graph last modified */}
                    <div>
                      <label className="block mb-3">Graph last modified</label>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={imgAvatar} alt="User" />
                          <AvatarFallback className="text-[11px]">ST</AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground">{details.lastModified}</span>
                      </div>
                    </div>

                    {/* Module last published - only show if published */}
                    {details.lastPublished && (
                      <div>
                        <label className="block mb-3">Module last published</label>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={imgAvatar} alt="User" />
                            <AvatarFallback className="text-[11px]">ST</AvatarFallback>
                          </Avatar>
                          <span className="text-muted-foreground">{details.lastPublished}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "history" && (
                  <div className="p-6 space-y-5">
                    {historyEntries.map((entry, index) => (
                      <div key={entry.id}>
                        {/* Version and Menu */}
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2">
                              <label>Revision {entry.version}</label>
                              {entry.isMostRecent && (
                                <span className="text-muted-foreground text-[14px]">(most recent)</span>
                              )}
                            </div>
                          </div>

                          {/* Actions Menu */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 -mt-1 hover:bg-muted"
                              >
                                <MoreVertical className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                              <DropdownMenuItem className="gap-3 py-2">
                                <RotateCcw className="h-4 w-4 text-muted-foreground" />
                                <span>Revert to this version</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-3 py-2">
                                <Layers className="h-4 w-4 text-muted-foreground" />
                                <span>Compare to current version</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-2 text-[14px] leading-relaxed">
                          {entry.description}
                        </p>

                        {/* Time and Author combined */}
                        <div className="flex items-center gap-2 text-[14px] text-muted-foreground">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={imgAvatar} alt={entry.author} />
                            <AvatarFallback className="text-[11px]">ST</AvatarFallback>
                          </Avatar>
                          <span>{entry.date} by {entry.author}</span>
                        </div>

                        {/* Divider */}
                        {index < historyEntries.length - 1 && (
                          <div className="border-b border-border mt-5" />
                        )}
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
