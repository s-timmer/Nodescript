import { useState } from "react";
import { MoreVertical, Folder, FolderOpen, FileBarChart, ChevronDown, Search, Filter, Check, File, Box, Radio, Clock, X, FolderPlus, Plus, Building2, Ban, FileEdit } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
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
import imgAvatar from "figma:asset/802a7173fba4480b8b5e95594e6644dfc35553ff.png";

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

interface GraphRowProps {
  item: GraphItem;
  level?: number;
  onSelect: (id: string, name: string) => void;
  selectedId: string | null;
}

function GraphRow({ item, level = 0, onSelect, selectedId }: GraphRowProps) {
  const [isOpen, setIsOpen] = useState(level === 0 || level === 1);
  const hasChildren = item.children && item.children.length > 0;
  const isSelectable = !hasChildren && item.lastModified;
  const isSelected = selectedId === item.name;

  if (hasChildren) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div
          className="flex items-center gap-3 py-2 hover:bg-muted/50 border-b"
          style={{ paddingLeft: `${24 + level * 20}px`, paddingRight: '24px', borderColor: 'var(--border-light)' }}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <CollapsibleTrigger asChild>
              <button className="p-0 flex items-center justify-center hover:bg-muted rounded flex-shrink-0">
                {isOpen ? (
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Folder className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </CollapsibleTrigger>
            <span className="flex-1 truncate">
              {item.name}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 min-w-[140px]">
              {item.visibility && (
                <>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Badge 
                            variant="secondary" 
                            className="gap-1.5 border-0 bg-muted text-muted-foreground"
                          >
                            {item.visibility === 'Workspace' && (
                              <FolderOpen className="h-3.5 w-3.5" />
                            )}
                            {item.visibility === 'Organization' && (
                              <Building2 className="h-3.5 w-3.5" />
                            )}
                            {item.visibility === 'None' && (
                              <Ban className="h-3.5 w-3.5" />
                            )}
                            {item.visibility === 'Draft' && (
                              <FileEdit className="h-3.5 w-3.5" />
                            )}
                            {item.visibility}
                          </Badge>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{getVisibilityTooltip(item.visibility)}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {item.isEndpoint && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center">
                            <Radio className="h-3.5 w-3.5 text-muted-foreground" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Exposed as endpoint</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </>
              )}
            </div>
            {item.lastModified && (
              <>
                <Avatar className="h-6 w-6">
                  <AvatarImage src={imgAvatar} alt="User" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground min-w-[100px]">{item.lastModified}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
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
            <GraphRow key={child.id} item={child} level={level + 1} onSelect={onSelect} selectedId={selectedId} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 py-2 border-b ${isSelectable ? 'cursor-pointer hover:bg-muted/50' : ''} ${isSelected ? 'bg-muted/50' : ''}`}
      style={{ paddingLeft: `${24 + level * 20}px`, paddingRight: '24px', borderColor: 'var(--border-light)' }}
      onClick={isSelectable ? () => onSelect(item.id, item.name) : undefined}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <FileBarChart className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <span className="flex-1 truncate">{item.name}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 min-w-[140px]">
          {item.visibility && (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Badge 
                        variant="secondary" 
                        className="gap-1.5 border-0 bg-muted text-muted-foreground"
                      >
                        {item.visibility === 'Workspace' && (
                          <FolderOpen className="h-3.5 w-3.5" />
                        )}
                        {item.visibility === 'Organization' && (
                          <Building2 className="h-3.5 w-3.5" />
                        )}
                        {item.visibility === 'None' && (
                          <Ban className="h-3.5 w-3.5" />
                        )}
                        {item.visibility === 'Draft' && (
                          <FileEdit className="h-3.5 w-3.5" />
                        )}
                        {item.visibility}
                      </Badge>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{getVisibilityTooltip(item.visibility)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {item.isEndpoint && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center">
                        <Radio className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Exposed as endpoint</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </>
          )}
        </div>
        {item.lastModified && (
          <>
            <Avatar className="h-6 w-6">
              <AvatarImage src={imgAvatar} alt="User" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground min-w-[100px]">{item.lastModified}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                  <MoreVertical className="h-4 w-4" />
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

interface GraphsContentProps {
  onSelectGraph: (id: string | null) => void;
  selectedGraph: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateToStyleGuide?: () => void;
}

export function GraphsContent({ onSelectGraph, selectedGraph, searchQuery, onSearchChange, onNavigateToStyleGuide }: GraphsContentProps) {
  const [filterType, setFilterType] = useState("all");
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const handleSelect = (id: string, name: string) => {
    // Toggle selection - if clicking the same graph, deselect it
    if (selectedGraph === name) {
      onSelectGraph(null);
    } else {
      onSelectGraph(name);
    }
  };

  const handleCreateGraph = (name: string) => {
    console.log("Creating graph:", name);
    // TODO: Add logic to create the graph
  };

  // Calculate counts for each filter type
  const filterCounts = {
    all: 13,
    drafts: 13,
    modules: 0,
    endpoints: 0,
    schedules: 0,
  };

  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--header)' }}>
      <div className="border-b border-border px-6 py-[11px] bg-background">
        <div className="flex items-center gap-4 min-h-[40px]">
          <h2 className="text-[20px] font-normal m-0 whitespace-nowrap">Graphs</h2>
          
          {/* Centered Search with Filter */}
          <div className="flex-1 max-w-[600px] mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search graphs..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 px-3">
                  <span className="text-[14px]">
                    {filterType === 'all' ? 'All' : 
                     filterType === 'drafts' ? 'Drafts' :
                     filterType === 'modules' ? 'Modules' :
                     filterType === 'endpoints' ? 'Endpoints' : 'Schedules'}
                  </span>
                  {filterType !== 'all' ? (
                    <X 
                      className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setFilterType('all');
                      }}
                    />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="text-[12px] text-muted-foreground uppercase tracking-wider">
                  Filter by type
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => setFilterType('all')}
                  className="gap-2 py-2.5"
                >
                  <Check className={`h-4 w-4 ${filterType === 'all' ? 'text-primary' : 'text-transparent'}`} />
                  <span className="flex-1">All</span>
                  <span className="text-muted-foreground text-[14px]">({filterCounts.all})</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setFilterType('drafts')}
                  className="gap-2 py-2.5"
                >
                  <File className={`h-4 w-4 ${filterType === 'drafts' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="flex-1">Drafts</span>
                  <span className="text-muted-foreground text-[14px]">({filterCounts.drafts})</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setFilterType('modules')}
                  className="gap-2 py-2.5"
                >
                  <Box className={`h-4 w-4 ${filterType === 'modules' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="flex-1">Modules</span>
                  <span className="text-muted-foreground text-[14px]">({filterCounts.modules})</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setFilterType('endpoints')}
                  className="gap-2 py-2.5"
                >
                  <Radio className={`h-4 w-4 ${filterType === 'endpoints' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="flex-1">Endpoints</span>
                  <span className="text-muted-foreground text-[14px]">({filterCounts.endpoints})</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setFilterType('schedules')}
                  className="gap-2 py-2.5"
                >
                  <Clock className={`h-4 w-4 ${filterType === 'schedules' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="flex-1">Schedules</span>
                  <span className="text-muted-foreground text-[14px]">({filterCounts.schedules})</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Button variant="outline" className="gap-2">
              <FolderPlus className="h-4 w-4" />
              Create folder
            </Button>
            <Button className="gap-2" onClick={() => setShowCreateDialog(true)}>
              <Plus className="h-4 w-4" />
              Create graph
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-background">
        <div className="flex items-center gap-3 px-6 py-3 border-b border-border bg-muted/30">
          <span className="text-muted-foreground flex-1 text-[14px]">Name</span>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-[14px] min-w-[154px]">Visibility</span>
            <span className="text-muted-foreground min-w-[100px] text-[14px] pr-10">Last modified</span>
            <div className="w-8" />
          </div>
        </div>
        {graphsData.map((item) => (
          <GraphRow key={item.id} item={item} onSelect={handleSelect} selectedId={selectedGraph} />
        ))}
      </div>

      <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
        <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
          <a href="#docs">Docs</a>
        </Button>
        <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
          <a href="#support">Support</a>
        </Button>
        <Button 
          variant="link" 
          className="h-auto p-0 text-foreground text-[14px]"
          onClick={() => onNavigateToStyleGuide?.()}
        >
          Style guide
        </Button>
      </div>

      <CreateGraphDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onConfirm={handleCreateGraph}
      />
    </div>
  );
}
