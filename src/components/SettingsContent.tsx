import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Info, HelpCircle, Key, Lock, ArrowRight } from "lucide-react";

interface SettingsContentProps {
  activeSection: string;
}

export function SettingsContent({ activeSection }: SettingsContentProps) {
  const [deletionProtectionEnabled, setDeletionProtectionEnabled] = useState(true);
  
  // For workspace settings, activeSection will be one of: general, integrations, oauth-apps, service-accounts
  // For profile settings from user dropdown, it will be "profile" or "access-tokens"
  
  if (activeSection === "profile") {
    return (
      <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--header)' }}>
        <div className="border-b border-border px-6 py-[11px] bg-background">
          <div className="flex items-center justify-between gap-4 min-h-[40px]">
            <h2 className="text-[20px] font-normal m-0">Profile</h2>
          </div>
        </div>

        <div className="flex-1 bg-background p-6 space-y-8">
          {/* Profile Settings Card */}
          <div className="border border-border bg-card p-6 space-y-6 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
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
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Email is verified</span>
            </div>

            <Button>Save</Button>
          </div>

          {/* Danger Zone Card */}
          <div className="border border-border bg-card p-6 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
            <h3 className="mb-6">Danger zone</h3>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Delete account
                <Info className="h-4 w-4 text-muted-foreground" />
              </Label>
              <div>
                <Button variant="destructive">Delete account</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
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
      <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--header)' }}>
        <div className="border-b border-border px-6 py-[11px] bg-background">
          <div className="flex items-center justify-between gap-4 min-h-[40px]">
            <h2 className="text-[20px] font-normal m-0">Access Tokens</h2>
          </div>
        </div>

        <div className="flex-1 bg-background p-6">
          <div className="border border-border bg-card p-6 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
            <p className="text-muted-foreground">
              Access tokens allow you to authenticate with the NodeScript API.
            </p>
            <Button className="mt-4">Create new token</Button>
          </div>
        </div>

        <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
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
      <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--header)' }}>
        {activeSection === "general" && (
          <>
            <div className="border-b border-border px-6 py-[11px] bg-background">
                <div className="flex items-center justify-between gap-4 min-h-[40px]">
                  <h2 className="text-[20px] font-normal m-0">Workspace general settings</h2>
                </div>
              </div>

              <div className="flex-1 bg-background p-6 space-y-6">
                {/* General Settings Card */}
                <div className="border border-border bg-card p-6 space-y-6 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
                  <div className="space-y-2">
                    <Label htmlFor="workspace-name" className="text-primary">Workspace name</Label>
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

                {/* Danger Zone Card */}
                <div className="border border-border bg-card p-6 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="m-0">Danger zone</h3>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <Button 
                      variant="outline" 
                      className="text-red-600 border-red-600 hover:bg-red-50"
                      disabled={deletionProtectionEnabled}
                    >
                      Delete Workspace
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
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
              <div className="border-b border-border px-6 py-[11px] bg-background">
                <div className="flex items-center gap-2 min-h-[40px]">
                  <h2 className="text-[20px] font-normal m-0">Integrations</h2>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="flex-1 bg-background p-6 space-y-6">
                {/* Help text */}
                <div className="bg-muted/30 p-6 space-y-4 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
                  <div>
                    <h4 className="m-0 font-normal text-[16px]">How it works:</h4>
                    <p className="text-foreground m-0 mt-4 text-[14px]">
                      Integrations are set up automatically when you add an OAuth2-enabled node and click "Authorize".
                    </p>
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn more about integrations
                  </Button>
                </div>
              </div>

              <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
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
              <div className="border-b border-border px-6 py-[11px] bg-background">
                <div className="flex items-center justify-between gap-4 min-h-[40px]">
                  <h2 className="text-[20px] font-normal m-0">OAuth Apps</h2>
                  <Button>Create OAuth App</Button>
                </div>
              </div>

              <div className="flex-1 bg-background p-6 space-y-6">
                {/* Quick Tips */}
                <div className="bg-muted/30 p-6 space-y-4 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
                  <div>
                    <h4 className="m-0">Quick Tips:</h4>
                    <ul className="space-y-2 text-[14px] text-foreground mt-4">
                      <li className="flex items-center gap-2">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span className="leading-normal">Configure custom connections for third-party services such as Google, GitHub and Slack</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span className="leading-normal">Preview your authorization URL before use</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span className="leading-normal">Reuse OAuth apps across graphs in your workspace</span>
                      </li>
                    </ul>
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn more about using OAuth for integrations
                  </Button>
                </div>
              </div>

              <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
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
            <div className="border-b border-border px-6 py-[11px] bg-background">
              <div className="flex items-center justify-between gap-4 min-h-[40px]">
                <h2 className="text-[20px] font-normal m-0">Service Accounts</h2>
                <Button>Create Service Account</Button>
              </div>
            </div>

            <div className="flex-1 bg-background p-6 space-y-6">
              {/* Quick Tips */}
              <div className="bg-muted/30 p-6 space-y-4 max-w-[1000px]" style={{ borderRadius: 'var(--radius-card)' }}>
                <div>
                  <h4 className="m-0">Quick Tips:</h4>
                  <ul className="space-y-2 text-[14px] text-foreground mt-4">
                    <li className="flex items-center gap-2">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span className="leading-normal">Control access to your workspace using granular scopes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span className="leading-normal">Create multiple keys per service account for shared access</span>
                    </li>
                  </ul>
                </div>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Learn more about service accounts
                </Button>
              </div>
            </div>

            <div className="border-t border-border px-6 flex items-center justify-start gap-6 bg-background" style={{ paddingTop: 'calc(1rem + 1.5px)', paddingBottom: 'calc(1rem + 1.5px)' }}>
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
