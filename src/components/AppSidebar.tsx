import { useState } from "react";
import { FileBarChart, LayoutDashboard, Clock, Variable, BarChart3, Settings, ChevronRight, Building2, FolderOpen, Plus, Settings2, Check, Bell, User, Key, Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import imgAvatar from "figma:asset/802a7173fba4480b8b5e95594e6644dfc35553ff.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Button } from "./ui/button";
import svgPaths from "../imports/svg-tr8bvpyaut";

function NodeScriptLogo() {
  return (
    <div className="h-7 w-[154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 28">
        <g clipPath="url(#clip0_1_13042)">
          <path clipRule="evenodd" d={svgPaths.p99d8bc0} fill="#0090F9" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pf843500} fill="#005B9C" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p38f8dd80} fill="#005B9C" fillRule="evenodd" />
          <path d={svgPaths.p22953cb0} fill="#0090F9" />
          <path d={svgPaths.p2ab0f700} fill="#0090F9" />
          <path d={svgPaths.p2a4d3c00} fill="#0090F9" />
          <path d={svgPaths.p477e100} fill="#0090F9" />
          <path d={svgPaths.p2411cd00} fill="#0090F9" />
          <path d={svgPaths.p13172480} fill="#0090F9" />
          <path d={svgPaths.pec8c980} fill="#005B9C" />
          <path d={svgPaths.p3e353a00} fill="#005B9C" />
          <path d={svgPaths.p3cf57880} fill="#005B9C" />
          <path d={svgPaths.p3f857100} fill="#005B9C" />
        </g>
        <defs>
          <clipPath id="clip0_1_13042">
            <rect fill="white" height="28" width="154" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

const menuItems = [
  {
    title: "Graphs",
    icon: FileBarChart,
    isActive: false,
  },
  {
    title: "Endpoints",
    icon: LayoutDashboard,
  },
  {
    title: "Schedules",
    icon: Clock,
  },
  {
    title: "Variables",
    icon: Variable,
  },
  {
    title: "Monitoring",
    icon: BarChart3,
  },
  {
    title: "Settings",
    icon: Settings2,
  },
];

const settingsSubItems = [
  {
    id: "general",
    title: "General settings",
  },
  {
    id: "integrations",
    title: "Integrations",
  },
  {
    id: "oauth-apps",
    title: "OAuth apps",
  },
  {
    id: "service-accounts",
    title: "Service accounts",
  },
];

const organizations = [
  { id: "sjors", name: "Sjors Timmer" },
  { id: "acme", name: "Acme Corp" },
  { id: "tech", name: "Tech Team" },
];

const workspaces = [
  { id: "default", name: "Default Workspace" },
  { id: "production", name: "Production" },
  { id: "development", name: "Development" },
];

interface AppSidebarProps {
  onOpenSettings: () => void;
  showSettings?: boolean;
  onBackToWorkspace?: () => void;
  activeSettingsSection?: string;
  onSettingsSectionChange?: (section: string) => void;
  activeMenuItem?: string;
  onMenuItemChange?: (item: string) => void;
  onOpenOrgSettings?: (orgId: string) => void;
  showOrgSettings?: boolean;
  onNavigateToBilling?: () => void;
}

export function AppSidebar({ 
  onOpenSettings, 
  showSettings = false,
  onBackToWorkspace,
  activeSettingsSection = "general",
  onSettingsSectionChange,
  activeMenuItem = "Graphs",
  onMenuItemChange,
  onOpenOrgSettings,
  showOrgSettings = false,
  onNavigateToBilling
}: AppSidebarProps) {
  const [selectedOrg, setSelectedOrg] = useState("sjors");
  const [selectedWorkspace, setSelectedWorkspace] = useState("default");
  const [settingsExpanded, setSettingsExpanded] = useState(false);

  const currentOrg = organizations.find(org => org.id === selectedOrg);
  const currentWorkspace = workspaces.find(ws => ws.id === selectedWorkspace);

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4 pb-3">
        <div className="mb-[13px] cursor-pointer" onClick={onBackToWorkspace}>
          <NodeScriptLogo />
        </div>
        <div className="space-y-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-start gap-2 h-10">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 text-left truncate">{currentOrg?.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                {organizations.map((org) => (
                  <div key={org.id} className="flex items-center gap-1 pr-2">
                    <DropdownMenuItem
                      onClick={() => setSelectedOrg(org.id)}
                      className="flex items-center gap-2 flex-1 min-w-0"
                    >
                      {selectedOrg === org.id && <Check className="h-4 w-4 shrink-0" />}
                      <span className={selectedOrg !== org.id ? "ml-6" : ""}>{org.name}</span>
                    </DropdownMenuItem>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenOrgSettings?.(org.id);
                      }}
                    >
                      <Settings2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create organization
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-start gap-2 h-10">
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 text-left truncate">{currentWorkspace?.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                {workspaces.map((workspace) => (
                  <DropdownMenuItem
                    key={workspace.id}
                    onClick={() => setSelectedWorkspace(workspace.id)}
                    className="flex items-center gap-2"
                  >
                    {selectedWorkspace === workspace.id && <Check className="h-4 w-4 shrink-0" />}
                    <span className={selectedWorkspace !== workspace.id ? "ml-6" : ""}>{workspace.name}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create workspace
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-4 py-2">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      asChild 
                      isActive={item.title === "Settings" ? false : (!showSettings && !showOrgSettings && activeMenuItem === item.title)}
                      className="data-[active=true]:bg-[#e2e8f0] data-[active=true]:text-sidebar-foreground px-3"
                    >
                      {item.title === "Settings" ? (
                        <button 
                          className="flex items-center gap-3"
                          onClick={() => {
                            setSettingsExpanded(!settingsExpanded);
                            if (!settingsExpanded) {
                              onSettingsSectionChange?.("general");
                              onOpenSettings();
                            } else {
                              onBackToWorkspace?.();
                            }
                          }}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          <ChevronRight className={`h-4 w-4 ml-auto text-muted-foreground transition-transform ${settingsExpanded ? 'rotate-90' : '-rotate-90'}`} />
                        </button>
                      ) : (
                        <button 
                          className="flex items-center gap-3"
                          onClick={() => {
                            onMenuItemChange?.(item.title);
                            setSettingsExpanded(false);
                          }}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </button>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {item.title === "Settings" && settingsExpanded && (
                    <div className="ml-7 mt-1 space-y-1">
                      {settingsSubItems.map((subItem) => (
                        <SidebarMenuItem key={subItem.id}>
                          <SidebarMenuButton
                            asChild
                            isActive={showSettings && activeSettingsSection === subItem.id}
                            className="data-[active=true]:bg-[#e2e8f0] data-[active=true]:text-sidebar-foreground px-3"
                          >
                            <button
                              className="flex items-center gap-3 w-full"
                              onClick={() => {
                                onSettingsSectionChange?.(subItem.id);
                                onOpenSettings();
                              }}
                            >
                              <span>{subItem.title}</span>
                            </button>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 pb-4">
        {/* Account section */}
        <div className="flex items-center gap-3 py-2 px-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 flex-1 min-w-0 hover:opacity-80 transition-opacity">
                <User className="h-4 w-4 text-sidebar-foreground" />
                <span className="flex-1 text-sidebar-foreground text-[14px] text-left">Sjors Timmer</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top" className="w-56">
              <DropdownMenuItem onClick={() => {
                onSettingsSectionChange?.("profile");
                onOpenSettings();
              }}>
                Profile settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                onSettingsSectionChange?.("access-tokens");
                onOpenSettings();
              }}>
                Access tokens
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log("Sign out")}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <Bell className="h-3.5 w-3.5" />
          </Button>
        </div>
        
        {/* Full-width divider */}
        <div className="-mx-4 my-2 border-b border-sidebar-border"></div>

        {/* Plan section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-sidebar-foreground text-[14px]" style={{ fontWeight: 'var(--font-weight-normal)' }}>Free plan</span>
            <Popover>
              <PopoverTrigger asChild>
                <button className="cursor-pointer transition-transform hover:scale-110">
                  {/* Circular progress indicator - 10% filled */}
                  <svg width="16" height="16" viewBox="0 0 16 16" className="transform -rotate-90 transition-opacity hover:opacity-80">
                    {/* Background circle */}
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted-foreground/30"
                    />
                    {/* Progress circle - 10% */}
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${40.84 * 0.1} ${40.84}`}
                      strokeLinecap="round"
                      className="text-foreground/90"
                    />
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-80 p-4" 
                align="start" 
                side="top"
                sideOffset={8}
              >
                <div className="space-y-3 text-[13px]">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Total credits</span>
                    <span className="text-foreground">10,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Credits used</span>
                    <span className="text-foreground">1,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Current usage</span>
                    <span className="text-foreground">10.00%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Usage resets on</span>
                    <span className="text-foreground">17 Nov 2025</span>
                  </div>
                  <Button 
                    variant="link" 
                    className="h-auto p-0 text-primary text-[13px] -ml-0"
                    onClick={() => {
                      if (onNavigateToBilling) {
                        onNavigateToBilling();
                      }
                    }}
                  >
                    Go to billing and plans
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-6 px-2.5 text-[13px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              if (onNavigateToBilling) {
                onNavigateToBilling();
              }
            }}
          >
            Upgrade
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
