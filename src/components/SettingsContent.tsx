import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Info, HelpCircle, KeyRound, Link2 } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { PageContent } from "./PageContent";
import { PageFooter } from "./PageFooter";
import { EmptyState } from "./EmptyState";
import { SectionHeading } from "./SectionHeading";

interface SettingsContentProps {
  activeSection: string;
}

export function SettingsContent({ activeSection }: SettingsContentProps) {
  const [deletionProtectionEnabled, setDeletionProtectionEnabled] = useState(true);

  if (activeSection === "profile") {
    return (
      <div className="flex flex-col min-h-full">
        <PageHeader title="Profile" />

        <PageContent className="space-y-8">
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
              <CheckCircle2 className="size-4 text-emerald-500" />
              <span>Email is verified</span>
            </div>

            <Button>Save</Button>
          </div>

          <div className="border border-border bg-card p-6 max-w-[1000px] rounded-lg">
            <SectionHeading className="mb-6">Danger zone</SectionHeading>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Delete account
                <Info className="size-4 text-muted-foreground" />
              </Label>
              <div>
                <Button variant="danger">Delete account</Button>
              </div>
            </div>
          </div>
        </PageContent>

        <PageFooter />
      </div>
    );
  }

  if (activeSection === "access-tokens") {
    return (
      <div className="flex flex-col min-h-full">
        <PageHeader title="Access Tokens">
          <Button>Create new token</Button>
        </PageHeader>

        <PageContent centered>
          <EmptyState
            icon={KeyRound}
            description="Access tokens allow you to authenticate with the NodeScript API."
            action={<Button>Create new token</Button>}
          />
        </PageContent>

        <PageFooter />
      </div>
    );
  }

  // Workspace Settings
  if (["general", "integrations", "oauth-apps", "service-accounts"].includes(activeSection)) {
    return (
      <div className="flex flex-col min-h-full">
        {activeSection === "general" && (
          <>
            <PageHeader title="Workspace general settings" />

            <PageContent className="space-y-6">
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
                    <HelpCircle className="size-4 text-muted-foreground" />
                  </Label>
                </div>

                <Button>Save</Button>
              </div>

              <div className="border border-border bg-card p-6 max-w-[1000px] rounded-lg">
                <div className="flex items-center gap-2 mb-6">
                  <SectionHeading>Danger zone</SectionHeading>
                  <HelpCircle className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <Button
                    variant="danger"
                    disabled={deletionProtectionEnabled}
                  >
                    Delete Workspace
                  </Button>
                </div>
              </div>
            </PageContent>

            <PageFooter />
          </>
        )}

        {activeSection === "integrations" && (
          <>
            <PageHeader title="Integrations" />

            <PageContent centered>
              <EmptyState
                icon={Link2}
                description="Integrations are set up automatically when you add an OAuth2-enabled node and click &quot;Authorize&quot;."
                learnMoreText="Learn more about integrations"
              />
            </PageContent>

            <PageFooter />
          </>
        )}

        {activeSection === "oauth-apps" && (
          <>
            <PageHeader title="OAuth Apps">
              <Button>Create OAuth App</Button>
            </PageHeader>

            <PageContent centered>
              <EmptyState
                icon={KeyRound}
                description="Configure custom OAuth connections for third-party services like Google, GitHub, and Slack."
                action={<Button>Create OAuth App</Button>}
                learnMoreText="Learn more about OAuth integrations"
              />
            </PageContent>

            <PageFooter />
          </>
        )}

        {activeSection === "service-accounts" && (
          <>
            <PageHeader title="Service Accounts">
              <Button>Create Service Account</Button>
            </PageHeader>

            <PageContent centered>
              <EmptyState
                icon={KeyRound}
                description="Control access to your workspace with granular scopes and shared keys."
                action={<Button>Create Service Account</Button>}
                learnMoreText="Learn more about service accounts"
              />
            </PageContent>

            <PageFooter />
          </>
        )}
      </div>
    );
  }

  return null;
}
