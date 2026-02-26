import { useState } from "react";
import { MoreVertical, Folder, FolderOpen, FileBarChart, ChevronDown, Search, Check, File, Box, Radio, Clock, X, FolderPlus, Plus, Globe, ArrowRightLeft, Webhook, Timer, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "./ui/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { CreateGraphDialog } from "./CreateGraphDialog";
import { PageFooter, PageFooterLink } from "./PageFooter";

function getVisibilityDotColor(visibility: string): string {
  switch (visibility) {
    case 'Workspace': return 'bg-blue-500';
    case 'Organization': return 'bg-purple-500';
    case 'Draft': return 'bg-amber-500';
    case 'None': return 'bg-neutral-400';
    default: return 'bg-neutral-400';
  }
}

const getVisibilityTooltip = (visibility: string): string => {
  switch (visibility) {
    case 'Workspace':
      return 'Available for integration in workspace workflows';
    case 'Organization':
      return 'Available for integration in organization workflows';
    case 'None':
      return 'Private - not available for integration';
    case 'Draft':
      return 'Draft - not published';
    default:
      return '';
  }
};

interface GraphItem {
  id: string;
  name: string;
  visibility: string;
  lastModified: string;
  hasChildren?: boolean;
  childCount?: number;
  children?: GraphItem[];
  isEndpoint?: boolean;
}

const graphsData: GraphItem[] = [
  {
    id: "starter",
    name: "Starter Graphs",
    visibility: "",
    lastModified: "",
    hasChildren: true,
    childCount: 13,
    children: [
      {
        id: "working-data",
        name: "1. Working with Data",
        visibility: "",
        lastModified: "",
        hasChildren: true,
        childCount: 3,
        children: [
          {
            id: "basics",
            name: "1. The Basics",
            visibility: "Workspace",
            lastModified: "3 months ago",
            isEndpoint: true,
          },
          {
            id: "lists",
            name: "2. Lists",
            visibility: "Workspace",
            lastModified: "3 months ago",
          },
          {
            id: "objects",
            name: "3. Objects",
            visibility: "Draft",
            lastModified: "3 months ago",
          },
        ],
      },
      {
        id: "http",
        name: "2. HTTP Requests",
        visibility: "",
        lastModified: "",
        hasChildren: true,
        childCount: 4,
        children: [
          {
            id: "send-data",
            name: "1. Send data",
            visibility: "Workspace",
            lastModified: "3 months ago",
            isEndpoint: true,
          },
          {
            id: "simple-requests",
            name: "2. Make Simple Requests",
            visibility: "Draft",
            lastModified: "3 months ago",
          },
          {
            id: "auth-headers",
            name: "3. Add Auth Headers",
            visibility: "Organization",
            lastModified: "3 months ago",
          },
          {
            id: "custom-responses",
            name: "4. Send Custom Responses",
            visibility: "None",
            lastModified: "3 months ago",
          },
        ],
      },
      {
        id: "caching",
        name: "3. Caching",
        visibility: "Draft",
        lastModified: "3 months ago",
      },
      {
        id: "api",
        name: "4. Create an API",
        visibility: "",
        lastModified: "",
        hasChildren: true,
        childCount: 4,
        children: [
          {
            id: "insert-data",
            name: "1. Insert Data",
            visibility: "Organization",
            lastModified: "3 months ago",
          },
          {
            id: "get-data",
            name: "2. Get Data",
            visibility: "Draft",
            lastModified: "3 months ago",
          },
          {
            id: "update-data",
            name: "3. Update Data",
            visibility: "None",
            lastModified: "3 months ago",
          },
          {
            id: "delete-data",
            name: "5. Delete Data",
            visibility: "Draft",
            lastModified: "3 months ago",
          },
        ],
      },
      {
        id: "integrate",
        name: "5. Integrate Services",
        visibility: "Workspace",
        lastModified: "3 months ago",
      },
    ],
  },
];

const levelPadding = ['pl-4', 'pl-9', 'pl-14', 'pl-[76px]'] as const;

function VisibilityIndicator({ visibility, isEndpoint }: { visibility: string; isEndpoint?: boolean }) {
  if (!visibility) return null;
  return (
    <div className="flex items-center gap-1.5">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <span className={cn('size-2 rounded-full shrink-0', getVisibilityDotColor(visibility))} />
            {visibility}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getVisibilityTooltip(visibility)}</p>
        </TooltipContent>
      </Tooltip>
      {isEndpoint && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center">
              <Radio className="size-3.5 text-muted-foreground" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Exposed as endpoint</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}

function collectAllFolderIds(items: GraphItem[]): string[] {
  const ids: string[] = [];
  for (const item of items) {
    if (item.children && item.children.length > 0) {
      ids.push(item.id);
      ids.push(...collectAllFolderIds(item.children));
    }
  }
  return ids;
}

function collectDefaultExpandedIds(items: GraphItem[], level = 0): string[] {
  const ids: string[] = [];
  for (const item of items) {
    if (item.children && item.children.length > 0) {
      if (level <= 1) ids.push(item.id);
      ids.push(...collectDefaultExpandedIds(item.children, level + 1));
    }
  }
  return ids;
}

interface GraphRowProps {
  item: GraphItem;
  level?: number;
  parentPath?: string;
  onSelect: (id: string, name: string) => void;
  selectedId: string | null;
  onOpen?: (name: string) => void;
  expandedFolders: Set<string>;
  onToggleFolder: (id: string) => void;
}

function GraphRow({ item, level = 0, parentPath = '', onSelect, selectedId, onOpen, expandedFolders, onToggleFolder }: GraphRowProps) {
  const currentPath = parentPath ? `${parentPath} / ${item.name}` : item.name;
  const isOpen = expandedFolders.has(item.id);
  const hasChildren = item.children && item.children.length > 0;
  const isSelectable = !hasChildren && item.lastModified;
  const isSelected = selectedId === item.name;

  if (hasChildren) {
    return (
      <Collapsible open={isOpen} onOpenChange={() => onToggleFolder(item.id)}>
        <div
          className={cn(
            'flex items-center gap-3 py-2 pr-4 hover:bg-muted/50 border-b border-border/50',
            levelPadding[level] ?? 'pl-4'
          )}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <CollapsibleTrigger asChild>
              <button className="p-0 flex items-center justify-center hover:bg-muted rounded shrink-0">
                {isOpen ? (
                  <FolderOpen className="size-4 text-muted-foreground" />
                ) : (
                  <Folder className="size-4 text-muted-foreground" />
                )}
              </button>
            </CollapsibleTrigger>
            <span className="flex-1 truncate text-sm">
              {item.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="min-w-[120px]">
              <VisibilityIndicator visibility={item.visibility} isEndpoint={item.isEndpoint} />
            </div>
            {item.lastModified && (
              <>
                <div className="size-5 rounded-full bg-blue-100 text-blue-700 text-[9px] font-medium flex items-center justify-center shrink-0">ST</div>
                <span className="text-muted-foreground min-w-[100px] text-xs">{item.lastModified}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreVertical className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
        <CollapsibleContent>
          {item.children?.map((child) => (
            <GraphRow key={child.id} item={child} level={level + 1} parentPath={currentPath} onSelect={onSelect} selectedId={selectedId} onOpen={onOpen} expandedFolders={expandedFolders} onToggleFolder={onToggleFolder} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center gap-3 py-2 pr-4 border-b border-border/50',
        levelPadding[level] ?? 'pl-4',
        isSelectable && 'cursor-pointer hover:bg-muted/50',
        isSelected && 'bg-muted/50'
      )}
      onClick={isSelectable ? () => onSelect(item.id, item.name) : undefined}
      onDoubleClick={isSelectable && onOpen ? () => onOpen(currentPath) : undefined}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <FileBarChart className="size-4 text-muted-foreground shrink-0" />
        <span className="flex-1 truncate text-sm">{item.name}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="min-w-[120px]">
          <VisibilityIndicator visibility={item.visibility} isEndpoint={item.isEndpoint} />
        </div>
        {item.lastModified && (
          <>
            <div className="size-5 rounded-full bg-blue-100 text-blue-700 text-[9px] font-medium flex items-center justify-center shrink-0">ST</div>
            <span className="text-muted-foreground min-w-[100px] text-xs">{item.lastModified}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8" onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}>
                  <MoreVertical className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </div>
  );
}

const quickWinTemplates = [
  {
    id: "explore-api",
    icon: Globe,
    title: "Explore an API",
    description: "Fetch live data from a REST API and inspect the response",
    graphName: "Starter Graphs / 2. HTTP Requests / 1. Send data",
  },
  {
    id: "transform-data",
    icon: ArrowRightLeft,
    title: "Transform data",
    description: "Take JSON input, reshape it, and output the result",
    graphName: "Starter Graphs / 1. Working with Data / 1. The Basics",
  },
  {
    id: "build-webhook",
    icon: Webhook,
    title: "Build a webhook",
    description: "Create an HTTP endpoint that receives and processes data",
    graphName: "Starter Graphs / 2. HTTP Requests / 4. Send Custom Responses",
  },
  {
    id: "schedule-task",
    icon: Timer,
    title: "Schedule a task",
    description: "Run a workflow on a timer — check prices, send alerts, sync data",
    graphName: "Starter Graphs / 3. Advanced Patterns / 3. Caching",
  },
];

interface GraphsContentProps {
  onSelectGraph: (id: string | null) => void;
  selectedGraph: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateToStyleGuide?: () => void;
  onOpenGraph?: (name: string) => void;
  showWelcome?: boolean;
  onDismissWelcome?: () => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
  activeWorkspace?: string;
}

export function GraphsContent({ onSelectGraph, selectedGraph, searchQuery, onSearchChange, onNavigateToStyleGuide, onOpenGraph, showWelcome, onDismissWelcome, searchInputRef, activeWorkspace: _activeWorkspace }: GraphsContentProps) {
  const [filterType, setFilterType] = useState("all");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    () => new Set(collectDefaultExpandedIds(graphsData))
  );

  const allFolderIds = collectAllFolderIds(graphsData);
  const allExpanded = allFolderIds.every(id => expandedFolders.has(id));

  const toggleAllFolders = () => {
    if (allExpanded) {
      setExpandedFolders(new Set());
    } else {
      setExpandedFolders(new Set(allFolderIds));
    }
  };

  const toggleFolder = (id: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSelect = (_id: string, name: string) => {
    if (selectedGraph === name) {
      onSelectGraph(null);
    } else {
      onSelectGraph(name);
    }
  };

  const handleCreateGraph = (name: string) => {
    console.log("Creating graph:", name);
  };

  const filterCounts = {
    all: 13,
    drafts: 13,
    modules: 0,
    endpoints: 0,
    schedules: 0,
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="border-b border-border px-6 py-3 sticky top-0 z-10 bg-sidebar">
        <div className="flex items-center gap-4 min-h-[40px]">
          <h2 className="text-xl font-medium m-0 whitespace-nowrap">Graphs</h2>

          <div className="flex-1 max-w-[600px] mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search graphs..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 pr-12 bg-transparent"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[11px] text-muted-foreground/60 font-sans">⌘K</kbd>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 px-3 bg-transparent">
                  <span className="text-sm">
                    {filterType === 'all' ? 'All' :
                     filterType === 'drafts' ? 'Drafts' :
                     filterType === 'modules' ? 'Modules' :
                     filterType === 'endpoints' ? 'Endpoints' : 'Schedules'}
                  </span>
                  {filterType !== 'all' ? (
                    <X
                      className="size-3.5 text-muted-foreground hover:text-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFilterType('all');
                      }}
                    />
                  ) : (
                    <ChevronDown className="size-4 text-muted-foreground" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                  Filter by type
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setFilterType('all')}
                  className="gap-2 py-2.5"
                >
                  <Check className={cn('size-4', filterType === 'all' ? 'text-primary' : 'text-transparent')} />
                  <span className="flex-1">All</span>
                  <span className="text-muted-foreground text-sm">({filterCounts.all})</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setFilterType('drafts')}
                  className="gap-2 py-2.5"
                >
                  <File className={cn('size-4', filterType === 'drafts' ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="flex-1">Drafts</span>
                  <span className="text-muted-foreground text-sm">({filterCounts.drafts})</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setFilterType('modules')}
                  className="gap-2 py-2.5"
                >
                  <Box className={cn('size-4', filterType === 'modules' ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="flex-1">Modules</span>
                  <span className="text-muted-foreground text-sm">({filterCounts.modules})</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setFilterType('endpoints')}
                  className="gap-2 py-2.5"
                >
                  <Radio className={cn('size-4', filterType === 'endpoints' ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="flex-1">Endpoints</span>
                  <span className="text-muted-foreground text-sm">({filterCounts.endpoints})</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setFilterType('schedules')}
                  className="gap-2 py-2.5"
                >
                  <Clock className={cn('size-4', filterType === 'schedules' ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="flex-1">Schedules</span>
                  <span className="text-muted-foreground text-sm">({filterCounts.schedules})</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <Button variant="outline" className="gap-2 bg-transparent">
              <FolderPlus className="size-4" />
              Create folder
            </Button>
            <Button className="gap-2" onClick={() => setShowCreateDialog(true)}>
              <Plus className="size-4" />
              Create graph
            </Button>
          </div>
        </div>
      </div>

      <TooltipProvider>
        <div className="flex-1 p-6" onClick={() => onSelectGraph(null)}>
          {showWelcome && (
            <div className="mb-8">
              {/* Title row */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Build your first graph</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground h-7 text-xs"
                  onClick={onDismissWelcome}
                >
                  Dismiss
                </Button>
              </div>

              {/* Template cards row */}
              <div className="flex gap-3">
                {quickWinTemplates.map((template) => (
                  <button
                    key={template.id}
                    className="flex-1 rounded-lg p-4 text-left border border-border bg-background hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                    onClick={() => onOpenGraph?.(template.graphName)}
                  >
                    <template.icon className="size-4 mb-4 text-muted-foreground" />
                    <div className="text-sm font-medium mb-0.5">{template.title}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{template.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border border-border rounded-lg overflow-hidden bg-background" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2 flex-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={toggleAllFolders}
                      className="p-0.5 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <ChevronsUpDown className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{allExpanded ? 'Collapse all folders' : 'Expand all folders'}</p>
                  </TooltipContent>
                </Tooltip>
                <span className="text-muted-foreground text-xs">Name</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-xs min-w-[120px]">Visibility</span>
                <div className="w-5" />
                <span className="text-muted-foreground min-w-[100px] text-xs">Last modified</span>
                <div className="w-8" />
              </div>
            </div>
            {graphsData.map((item) => (
              <GraphRow key={item.id} item={item} onSelect={handleSelect} selectedId={selectedGraph} onOpen={onOpenGraph} expandedFolders={expandedFolders} onToggleFolder={toggleFolder} />
            ))}
          </div>
        </div>
      </TooltipProvider>

      <PageFooter>
        <PageFooterLink href="#tutorials">Tutorials</PageFooterLink>
        <PageFooterLink onClick={() => onNavigateToStyleGuide?.()}>Style guide</PageFooterLink>
      </PageFooter>

      <CreateGraphDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onConfirm={handleCreateGraph}
      />
    </div>
  );
}
