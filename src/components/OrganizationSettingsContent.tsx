import { useState } from "react";
import { Settings, CreditCard, LayoutGrid, Users, Info, Pencil, Search, Check, GitBranch, Calendar, Variable, Link2, DollarSign, MoreVertical, ChevronDown, X, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { PageHeader } from "./PageHeader";
import { PageContent } from "./PageContent";
import { PageFooter } from "./PageFooter";
import { SectionHeading } from "./SectionHeading";

interface OrganizationSettingsContentProps {
  activeSection: string;
  organizationName: string;
  onSectionChange: (section: string) => void;
}

const organizationMenuItems = [
  {
    id: "general",
    title: "General settings",
    icon: Settings,
  },
  {
    id: "billing",
    title: "Billing and plans",
    icon: CreditCard,
  },
  {
    id: "workspaces",
    title: "Workspaces",
    icon: LayoutGrid,
  },
  {
    id: "members",
    title: "Members",
    icon: Users,
  },
];

export function OrganizationSettingsContent({
  activeSection,
  organizationName,
  onSectionChange
}: OrganizationSettingsContentProps) {
  const [orgName, setOrgName] = useState(organizationName);
  const [deletionProtection, setDeletionProtection] = useState(true);
  const [workspaceSearchQuery, setWorkspaceSearchQuery] = useState("");
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [workspaceFilter, setWorkspaceFilter] = useState("all");
  const [memberFilter, setMemberFilter] = useState("all");

  return (
    <div className="flex h-full">
      {/* Left sidebar with menu */}
      <div className="w-[16rem] border-r border-border bg-background flex flex-col">
        <div className="flex-1 overflow-auto">
          <div className="p-2 pt-4">
            {organizationMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    isActive ? 'bg-secondary text-foreground' : 'text-foreground hover:bg-secondary/50'
                  )}
                >
                  <Icon className={cn('size-4', isActive ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="flex-1 text-left">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right content area */}
      <div className="flex-1 overflow-auto">
        {activeSection === "general" && (
          <div className="flex flex-col h-full">
            <PageHeader title="Organisation general settings" />

            <PageContent>
              <div className="max-w-[1000px]">
                {/* General settings card */}
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="space-y-6">
                {/* Organization name */}
                <div className="space-y-2">
                  <Label htmlFor="org-name" className="text-xs text-foreground">
                    Organization name
                  </Label>
                  <Input
                    id="org-name"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="max-w-[580px] h-10 text-sm"
                  />
                </div>

                {/* Deletion Protection */}
                <TooltipProvider>
                  <div className="flex items-center gap-3">
                    <Switch
                      checked={deletionProtection}
                      onCheckedChange={setDeletionProtection}
                      className="data-[state=checked]:bg-primary"
                    />
                    <Label className="text-sm text-foreground cursor-pointer">
                      Deletion protection
                    </Label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Info className="size-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Prevents accidental deletion of this organization</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>

                {/* Save button */}
                <div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Danger zone */}
            <div className="bg-card border border-border rounded-lg p-6">
              <SectionHeading className="mb-6">Danger zone</SectionHeading>

              <div className="space-y-6">
                {/* Transfer Ownership */}
                <TooltipProvider>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-foreground">Transfer ownership</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-muted-foreground hover:text-foreground">
                            <Info className="size-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Transfer ownership to another member</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Button
                      variant="danger"
                    >
                      Transfer
                    </Button>
                  </div>
                </TooltipProvider>

                {/* Leave Organization */}
                <TooltipProvider>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-foreground">Leave organization</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-muted-foreground hover:text-foreground">
                            <Info className="size-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Remove yourself from this organization</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Button
                      variant="danger"
                      disabled
                    >
                      Leave
                    </Button>
                  </div>
                </TooltipProvider>

                {/* Delete Organization */}
                <TooltipProvider>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-foreground">Delete organization</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-muted-foreground hover:text-foreground">
                            <Info className="size-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Permanently delete this organization</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Button
                      variant="danger"
                      disabled
                    >
                      Delete
                    </Button>
                  </div>
                </TooltipProvider>
              </div>
            </div>
              </div>
            </PageContent>

            <PageFooter />
          </div>
        )}

        {activeSection === "billing" && (
          <div className="flex flex-col h-full">
            <PageHeader title="Billing" />

            <PageContent>
              <div className="max-w-[1000px]">
                {/* Billing info card */}
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="space-y-6">
                {/* Billing email */}
                <div>
                  <Label className="mb-3 block">Billing email</Label>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-foreground">svirsk@gmail.com</span>
                    <button className="text-primary hover:text-primary/80">
                      <Pencil className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Current billing period */}
                <div>
                  <Label className="mb-3 block">Current billing period</Label>
                  <div className="text-sm text-foreground">
                    17 Oct 2025 — 17 Nov 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Plans card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <SectionHeading className="mb-6">Plans</SectionHeading>

              {/* Plan cards grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Free plan */}
                <div className="border border-border rounded-lg p-6 flex flex-col">
                  <h4 className="text-base font-medium mb-4 text-center">Free</h4>
                  <div className="text-center mb-2">
                    <div className="text-2xl">10,000</div>
                    <div className="text-sm text-muted-foreground">credits / month</div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mb-6">No charge</div>
                  <Button
                    variant="outline"
                    className="mt-auto border-primary text-primary hover:bg-primary/10"
                  >
                    <Check className="size-4 mr-2" />
                    Current plan
                  </Button>
                </div>

                {/* Starter plan */}
                <div className="border border-border rounded-lg p-6 flex flex-col">
                  <h4 className="text-base font-medium mb-4 text-center">Starter</h4>
                  <div className="text-center mb-2">
                    <div className="text-2xl">100,000</div>
                    <div className="text-sm text-muted-foreground">credits / month</div>
                  </div>
                  <div className="text-center text-sm mb-6">
                    <span className="text-foreground">$29.00</span>
                    <span className="text-muted-foreground"> / month</span>
                  </div>
                  <Button className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                    Upgrade
                  </Button>
                </div>

                {/* Pro plan */}
                <div className="border border-border rounded-lg p-6 flex flex-col">
                  <h4 className="text-base font-medium mb-4 text-center">Pro</h4>
                  <div className="text-center mb-2">
                    <div className="text-2xl">1,000,000</div>
                    <div className="text-sm text-muted-foreground">credits / month</div>
                  </div>
                  <div className="text-center text-sm mb-6">
                    <span className="text-foreground">$95.00</span>
                    <span className="text-muted-foreground"> / month</span>
                  </div>
                  <Button className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                    Upgrade
                  </Button>
                </div>
              </div>

              {/* Contact section */}
              <div className="border border-border rounded-lg p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-base mb-2">Have something else in mind?</h4>
                  <p className="text-sm text-muted-foreground m-0">
                    Drop us a note and we will make you an offer tailored to your requirements.
                  </p>
                </div>
                <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact us
                </Button>
              </div>
            </div>
              </div>
            </PageContent>

            <PageFooter />
          </div>
        )}

        {activeSection === "workspaces" && (
          <div className="flex flex-col h-full">
            {/* Complex header with centered search — custom layout */}
            <div className="border-b border-border px-6 py-3">
              <div className="flex items-center min-h-[40px] relative">
                <h2 className="text-xl font-medium m-0 flex-1">Workspaces</h2>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 w-[600px]">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search workspaces..."
                      value={workspaceSearchQuery}
                      onChange={(e) => setWorkspaceSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-2 px-3">
                        <span className="text-sm">
                          {workspaceFilter === 'all' ? 'All' : workspaceFilter}
                        </span>
                        {workspaceFilter !== 'all' ? (
                          <X
                            className="size-3.5 text-muted-foreground hover:text-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              setWorkspaceFilter('all');
                            }}
                          />
                        ) : (
                          <ChevronDown className="size-4 text-muted-foreground" />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem onClick={() => setWorkspaceFilter('all')} className="gap-2 py-2.5">
                        <Check className={cn('size-4', workspaceFilter === 'all' ? 'text-primary' : 'text-transparent')} />
                        <span className="flex-1">All</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex-1 flex justify-end">
                  <Button className="gap-2">
                    <Plus className="size-4" />
                    Create workspace
                  </Button>
                </div>
              </div>
            </div>

            <PageContent>
              <div className="max-w-[1000px]">
              {/* Workspace list */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 transition-all hover:-translate-y-px hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base mb-2">Default workspace</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GitBranch className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Variable className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Link2 className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="size-4" />
                          <span>0</span>
                        </div>
                        <span>Credits used: 1,000 (10%)</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 transition-all hover:-translate-y-px hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base mb-2">Production</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GitBranch className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Variable className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Link2 className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="size-4" />
                          <span>0</span>
                        </div>
                        <span>Credits used: 0 (0%)</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 transition-all hover:-translate-y-px hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base mb-2">Development</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GitBranch className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Variable className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Link2 className="size-4" />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="size-4" />
                          <span>0</span>
                        </div>
                        <span>Credits used: 0 (0%)</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </PageContent>

            <PageFooter />
          </div>
        )}

        {activeSection === "members" && (
          <div className="flex flex-col h-full">
            {/* Complex header with centered search — custom layout */}
            <div className="border-b border-border px-6 py-3">
              <div className="flex items-center min-h-[40px] relative">
                <h2 className="text-xl font-medium m-0 flex-1">Members</h2>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 w-[600px]">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search members..."
                      value={memberSearchQuery}
                      onChange={(e) => setMemberSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-2 px-3">
                        <span className="text-sm">
                          {memberFilter === 'all' ? 'All' :
                           memberFilter === 'owner' ? 'Owner' :
                           memberFilter === 'admin' ? 'Admin' : 'Member'}
                        </span>
                        {memberFilter !== 'all' ? (
                          <X
                            className="size-3.5 text-muted-foreground hover:text-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMemberFilter('all');
                            }}
                          />
                        ) : (
                          <ChevronDown className="size-4 text-muted-foreground" />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem onClick={() => setMemberFilter('all')} className="gap-2 py-2.5">
                        <Check className={cn('size-4', memberFilter === 'all' ? 'text-primary' : 'text-transparent')} />
                        <span className="flex-1">All</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setMemberFilter('owner')} className="gap-2 py-2.5">
                        <Check className={cn('size-4', memberFilter === 'owner' ? 'text-primary' : 'text-transparent')} />
                        <span className="flex-1">Owner</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setMemberFilter('admin')} className="gap-2 py-2.5">
                        <Check className={cn('size-4', memberFilter === 'admin' ? 'text-primary' : 'text-transparent')} />
                        <span className="flex-1">Admin</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setMemberFilter('member')} className="gap-2 py-2.5">
                        <Check className={cn('size-4', memberFilter === 'member' ? 'text-primary' : 'text-transparent')} />
                        <span className="flex-1">Member</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex-1 flex justify-end">
                  <Button className="gap-2">
                    <Plus className="size-4" />
                    Add member
                  </Button>
                </div>
              </div>
            </div>

            <PageContent>
              <div className="max-w-[1000px]">
              {/* Members list */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 transition-all hover:-translate-y-px hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-10">
                        <AvatarFallback className="bg-muted text-foreground">
                          ST
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Sjors Timmer</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Owner</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="text-muted-foreground hover:text-foreground">
                            <MoreVertical className="size-5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Change role</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Remove member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </PageContent>

            <PageFooter />
          </div>
        )}
      </div>
    </div>
  );
}
