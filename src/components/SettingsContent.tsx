import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Info, HelpCircle, KeyRound, Link2 } from "lucide-react";

interface SettingsContentProps {
  activeSection: string;
}

export function SettingsContent({ activeSection }: SettingsContentProps) {
  const [deletionProtectionEnabled, setDeletionProtectionEnabled] = useState(true);
  
  // For workspace settings, activeSection will be one of: general, integrations, oauth-apps, service-accounts
  // For profile settings from user dropdown, it will be "profile" or "access-tokens"
  
  if (activeSection === "profile") {
    return (
      <div className="flex flex-col min-h-full">
        <div className="border-b border-border px-6 py-[11px]">
          <div className="flex items-center justify-between gap-4 min-h-[40px]">
            <h2 className="text-[20px] font-medium m-0">Profile</h2>
          </div>
        </div>

        <div className="flex-1 p-6 space-y-8">
          <div className="border border-border bg-card p-6 space-y-6 max-w-[1000px] rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="display-name">Display name</Label>
              <Input
                id="display-name"
                type="text"
                defaultValue="Sjors Timmer"
                className="max-w-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="svirsk@gmail.com"
                disabled
                className="max-w-md bg-muted"
              />
            </div>

            <div className="flex items-center gap-3">
              <Switch id="tips" defaultChecked />
              <Label htmlFor="tips" className="cursor-pointer">
                Receive tips and tricks. Unsubscribe at any time.
              </Label>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Email is verified</span>
            </div>

            <Button>Save</Button>
          </div>

          <div className="border border-border bg-card p-6 max-w-[1000px] rounded-lg">
            <h3 className="mb-6">Danger zone</h3>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Delete account
                <Info className="h-4 w-4 text-muted-foreground" />
              </Label>
              <div>
                <Button variant="destructive" className="text-red-600 border border-red-600 hover:bg-red-50">Delete account</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
          <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
            <a href="#docs">Docs</a>
          </Button>
          <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
            <a href="#support">Support</a>
          </Button>
        </div>
      </div>
    );
  }

  if (activeSection === "access-tokens") {
    return (
      <div className="flex flex-col min-h-full">
        <div className="border-b border-border px-6 py-[11px]">
          <div className="flex items-center justify-between gap-4 min-h-[40px]">
            <h2 className="text-[20px] font-medium m-0">Access Tokens</h2>
            <Button>Create new token</Button>
          </div>
        </div>

        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center max-w-sm">
            <KeyRound className="h-6 w-6 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-[14px] mb-4">
              Access tokens allow you to authenticate with the NodeScript API.
            </p>
            <Button>Create new token</Button>
          </div>
        </div>

        <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
          <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
            <a href="#docs">Docs</a>
          </Button>
          <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
            <a href="#support">Support</a>
          </Button>
        </div>
      </div>
    );
  }

  // Workspace Settings - navigation is in the sidebar now
  if (["general", "integrations", "oauth-apps", "service-accounts"].includes(activeSection)) {
    return (
      <div className="flex flex-col min-h-full">
        {activeSection === "general" && (
          <>
            <div className="border-b border-border px-6 py-[11px]">
              <div className="flex items-center justify-between gap-4 min-h-[40px]">
                <h2 className="text-[20px] font-medium m-0">Workspace general settings</h2>
              </div>
            </div>

            <div className="flex-1 p-6 space-y-6">
              <div className="border border-border bg-card p-6 space-y-6 max-w-[1000px] rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="workspace-name">Workspace name</Label>
                  <Input
                    id="workspace-name"
                    type="text"
                    defaultValue="Default Workspace"
                    className="max-w-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Add a description for your workspace..."
                    className="max-w-md resize-none"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon-url">Icon URL</Label>
                  <Input
                    id="icon-url"
                    type="text"
                    placeholder="https://..."
                    className="max-w-md"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    id="deletion-protection"
                    checked={deletionProtectionEnabled}
                    onCheckedChange={setDeletionProtectionEnabled}
                  />
                  <Label htmlFor="deletion-protection" className="cursor-pointer flex items-center gap-2">
                    Deletion Protection
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </Label>
                </div>

                <Button>Save</Button>
              </div>

              <div className="border border-border bg-card p-6 max-w-[1000px] rounded-lg">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="m-0">Danger zone</h3>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <Button
                    variant="destructive"
                    className="text-red-600 border border-red-600 hover:bg-red-50"
                    disabled={deletionProtectionEnabled}
                  >
                    Delete Workspace
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#docs">Docs</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#support">Support</a>
              </Button>
            </div>
          </>
        )}

        {activeSection === "integrations" && (
          <>
            <div className="border-b border-border px-6 py-[11px]">
              <div className="flex items-center gap-2 min-h-[40px]">
                <h2 className="text-[20px] font-medium m-0">Integrations</h2>
              </div>
            </div>

            <div className="flex-1 p-6 flex items-center justify-center">
              <div className="text-center max-w-sm">
                <Link2 className="h-6 w-6 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-[14px] mb-4">
                  Integrations are set up automatically when you add an OAuth2-enabled node and click "Authorize".
                </p>
                <Button variant="link" className="text-muted-foreground text-[13px] h-auto p-0">
                  Learn more about integrations
                </Button>
              </div>
            </div>

            <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#docs">Docs</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#support">Support</a>
              </Button>
            </div>
          </>
        )}

        {activeSection === "oauth-apps" && (
          <>
            <div className="border-b border-border px-6 py-[11px]">
              <div className="flex items-center justify-between gap-4 min-h-[40px]">
                <h2 className="text-[20px] font-medium m-0">OAuth Apps</h2>
                <Button>Create OAuth App</Button>
              </div>
            </div>

            <div className="flex-1 p-6 flex items-center justify-center">
              <div className="text-center max-w-sm">
                <KeyRound className="h-6 w-6 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-[14px] mb-4">
                  Configure custom OAuth connections for third-party services like Google, GitHub, and Slack.
                </p>
                <Button>Create OAuth App</Button>
                <div className="mt-3">
                  <Button variant="link" className="text-muted-foreground text-[13px] h-auto p-0">
                    Learn more about OAuth integrations
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#docs">Docs</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#support">Support</a>
              </Button>
            </div>
          </>
        )}

        {activeSection === "service-accounts" && (
          <>
            <div className="border-b border-border px-6 py-[11px]">
              <div className="flex items-center justify-between gap-4 min-h-[40px]">
                <h2 className="text-[20px] font-medium m-0">Service Accounts</h2>
                <Button>Create Service Account</Button>
              </div>
            </div>

            <div className="flex-1 p-6 flex items-center justify-center">
              <div className="text-center max-w-sm">
                <KeyRound className="h-6 w-6 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-[14px] mb-4">
                  Control access to your workspace with granular scopes and shared keys.
                </p>
                <Button>Create Service Account</Button>
                <div className="mt-3">
                  <Button variant="link" className="text-muted-foreground text-[13px] h-auto p-0">
                    Learn more about service accounts
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#docs">Docs</a>
              </Button>
              <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
                <a href="#support">Support</a>
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
}
