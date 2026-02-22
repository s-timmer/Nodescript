import { useState } from "react";
import { FileBarChart, LayoutDashboard, Clock, Variable, BarChart3, ChevronRight, ChevronLeft, Plus, Settings2, Check, Bell, User, ChevronsUpDown } from "lucide-react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Button } from "./ui/button";
import svgPaths from "../imports/svg-tr8bvpyaut";

function NodeScriptLogo() {
  return (
    <div className="h-7 w-[116px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="38 0 116 28">
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
      </svg>
    </div>
  );
}

const primaryMenuItems = [
  { title: "Graphs", icon: FileBarChart },
  { title: "Endpoints", icon: LayoutDashboard },
  { title: "Schedules", icon: Clock },
  { title: "Variables", icon: Variable },
  { title: "Monitoring", icon: BarChart3 },
];

const systemMenuItems = [
  { title: "Settings", icon: Settings2 },
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
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [switcherView, setSwitcherView] = useState<"main" | "orgs">("main");

  const currentOrg = organizations.find(org => org.id === selectedOrg);
  const currentWorkspace = workspaces.find(ws => ws.id === selectedWorkspace);

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4 pb-1">
        <div className="mb-[13px] cursor-pointer px-3" onClick={onBackToWorkspace}>
          <NodeScriptLogo />
        </div>
        <Popover
          open={switcherOpen}
          onOpenChange={(open) => {
            setSwitcherOpen(open);
            if (!open) setSwitcherView("main");
          }}
        >
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 w-full rounded-md px-3 py-2 hover:bg-muted transition-colors text-left">
              <div className="flex-1 min-w-0">
                <div className="text-[14px] text-sidebar-foreground truncate leading-tight">
                  {currentWorkspace?.name}
                </div>
                <div className="text-[12px] text-muted-foreground truncate leading-tight">
                  {currentOrg?.name}
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-muted-foreground shrink-0" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-56 p-0"
            align="start"
            sideOffset={4}
          >
            {switcherView === "main" ? (
              <div>
                {/* Current org row — click to switch to org view */}
                <button
                  className="flex items-center gap-2 w-full px-3 py-2.5 hover:bg-muted transition-colors text-left rounded-sm"
                  onClick={() => setSwitcherView("orgs")}
                >
                  <span className="flex-1 text-[14px] truncate">{currentOrg?.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>

                <div className="border-t border-border" />

                {/* Workspace list */}
                <div className="py-1">
                  <div className="px-3 py-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Workspaces</span>
                  </div>
                  {workspaces.map((workspace) => (
                    <button
                      key={workspace.id}
                      className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] rounded-sm"
                      onClick={() => {
                        setSelectedWorkspace(workspace.id);
                        setSwitcherOpen(false);
                      }}
                    >
                      {selectedWorkspace === workspace.id ? (
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <span className="w-4" />
                      )}
                      <span className="truncate">{workspace.name}</span>
                    </button>
                  ))}
                </div>

                <div className="border-t border-border" />

                {/* Actions */}
                <div className="py-1">
                  <button
                    className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] text-muted-foreground rounded-sm"
                    onClick={() => setSwitcherOpen(false)}
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create workspace</span>
                  </button>
                  <button
                    className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] text-muted-foreground rounded-sm"
                    onClick={() => {
                      setSwitcherOpen(false);
                      onOpenOrgSettings?.(selectedOrg);
                    }}
                  >
                    <Settings2 className="h-4 w-4" />
                    <span>Organization settings</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Back button */}
                <button
                  className="flex items-center gap-2 w-full px-3 py-2.5 hover:bg-muted transition-colors text-left text-[14px] rounded-sm"
                  onClick={() => setSwitcherView("main")}
                >
                  <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Back</span>
                </button>

                <div className="border-t border-border" />

                {/* Organization list */}
                <div className="py-1">
                  <div className="px-3 py-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Organizations</span>
                  </div>
                  {organizations.map((org) => (
                    <div key={org.id} className="flex items-center gap-1 pr-2">
                      <button
                        className="flex items-center gap-2 flex-1 min-w-0 px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] rounded-sm"
                        onClick={() => {
                          setSelectedOrg(org.id);
                          setSwitcherView("main");
                        }}
                      >
                        {selectedOrg === org.id ? (
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                        ) : (
                          <span className="w-4" />
                        )}
                        <span className="truncate">{org.name}</span>
                      </button>
                      <button
                        className="h-7 w-7 shrink-0 flex items-center justify-center rounded hover:bg-muted transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSwitcherOpen(false);
                          onOpenOrgSettings?.(org.id);
                        }}
                      >
                        <Settings2 className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border" />

                {/* Create org */}
                <div className="py-1">
                  <button
                    className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] text-muted-foreground rounded-sm"
                    onClick={() => setSwitcherOpen(false)}
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create organization</span>
                  </button>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </SidebarHeader>
      <SidebarContent>
        {/* Primary navigation group */}
        <SidebarGroup className="px-4 pt-2 pb-1">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground px-3 mb-1">Workspace</span>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={!showSettings && !showOrgSettings && activeMenuItem === item.title}
                    className="data-[active=true]:bg-muted data-[active=true]:text-sidebar-foreground px-3"
                  >
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
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System navigation group */}
        <SidebarGroup className="px-4 pt-3 pb-1">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground px-3 mb-1">System</span>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={false}
                    className="data-[active=true]:bg-muted data-[active=true]:text-sidebar-foreground px-3"
                  >
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
                      <ChevronRight className={`h-4 w-4 ml-auto text-muted-foreground transition-transform ${settingsExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {settingsExpanded && (
                <div className="ml-7 mt-1 space-y-1">
                  {settingsSubItems.map((subItem) => (
                    <SidebarMenuItem key={subItem.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={showSettings && activeSettingsSection === subItem.id}
                        className="data-[active=true]:bg-muted data-[active=true]:text-sidebar-foreground px-3"
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 pb-4">
        {/* Account section */}
        <div className="flex items-center gap-3 py-2">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-3 flex-1 min-w-0 px-3 hover:opacity-80 transition-opacity">
                <User className="h-4 w-4 text-sidebar-foreground" />
                <span className="flex-1 text-sidebar-foreground text-[14px] text-left">Sjors Timmer</span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-56 p-0"
              align="start"
              side="top"
              sideOffset={4}
            >
              <div className="py-1">
                <button
                  className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] rounded-sm"
                  onClick={() => {
                    onSettingsSectionChange?.("profile");
                    onOpenSettings();
                  }}
                >
                  Profile settings
                </button>
                <button
                  className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] rounded-sm"
                  onClick={() => {
                    onSettingsSectionChange?.("access-tokens");
                    onOpenSettings();
                  }}
                >
                  Access tokens
                </button>
              </div>
              <div className="border-t border-border" />
              <div className="py-1">
                <button
                  className="flex items-center gap-2 w-full px-3 py-1.5 hover:bg-muted transition-colors text-left text-[14px] text-muted-foreground rounded-sm"
                  onClick={() => console.log("Sign out")}
                >
                  Sign out
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <Bell className="h-3.5 w-3.5" />
          </Button>
        </div>
        
        {/* Full-width divider */}
        <div className="-mx-4 my-2 border-b border-sidebar-border"></div>

        {/* Plan section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-sidebar-foreground text-[14px] font-normal">Free plan</span>
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
                className="w-56 p-4"
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
