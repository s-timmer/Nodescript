import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Copy, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface AddEndpointDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const modules = [
  { value: "basics", label: "Starter Graphs / 1. Working with Data / 1. The Basics" },
  { value: "lists", label: "Starter Graphs / 1. Working with Data / 2. Lists" },
  { value: "integrate", label: "Starter Graphs / 5. Integrate Services" },
  { value: "slack", label: "Integrations / Slack AI Chatbot" },
  { value: "sunrise", label: "Personal / Sunrise Notifier" },
  { value: "support", label: "Integrations / Support Ticket Processor" },
];

const versions = [
  { value: "latest", label: "Latest (1.0.0)" },
  { value: "1.0.0", label: "1.0.0" },
];

const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export function AddEndpointDialog({ open, onOpenChange }: AddEndpointDialogProps) {
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");
  const [method, setMethod] = useState("GET");
  const [pathname, setPathname] = useState("/");
  const [hooks, setHooks] = useState<{ before: boolean; after: boolean; error: boolean }>({
    before: false,
    after: false,
    error: false,
  });

  const baseUrl = "https://l4e9ew0n.run.nodescript.dev";
  const endpointUrl = `${baseUrl}${pathname}`;

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] p-0 gap-0" aria-describedby={undefined}>
        {/* Header */}
        <div className="px-6 pt-6 pb-5">
          <DialogTitle className="text-xl font-medium m-0">Add endpoint</DialogTitle>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* What to run */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-4">What to run</h3>
            <div className="flex gap-3">
              <div className="flex-1 space-y-2">
                <Label className="text-muted-foreground text-xs">Module</Label>
                <Select value={selectedModule} onValueChange={setSelectedModule}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a module" />
                  </SelectTrigger>
                  <SelectContent>
                    {modules.map((m) => (
                      <SelectItem key={m.value} value={m.value}>
                        {m.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[140px] space-y-2">
                <Label className="text-muted-foreground text-xs">Version</Label>
                <Select value={selectedVersion} onValueChange={setSelectedVersion}>
                  <SelectTrigger>
                    <SelectValue placeholder="n/a" />
                  </SelectTrigger>
                  <SelectContent>
                    {versions.map((v) => (
                      <SelectItem key={v.value} value={v.value}>
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Http route */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-4">Http route</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-[120px] space-y-2">
                  <Label className="text-muted-foreground text-xs">Method</Label>
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {methods.map((m) => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 space-y-2">
                  <Label className="text-muted-foreground text-xs">Pathname</Label>
                  <Input
                    value={pathname}
                    onChange={(e) => setPathname(e.target.value)}
                  />
                </div>
              </div>

              {/* Endpoint URL — read-only */}
              <div className="space-y-2">
                <Label className="text-muted-foreground text-xs">Endpoint URL</Label>
                <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2 bg-muted/30">
                  <span className="text-xs text-muted-foreground truncate flex-1">
                    {endpointUrl}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6 shrink-0"
                    onClick={() => navigator.clipboard.writeText(endpointUrl)}
                  >
                    <Copy className="size-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hooks */}
          <div className="mb-6 space-y-4">
            {/* Before Hooks */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Before Hooks</h3>
              <Button
                variant="default"
                size="sm"
                className="gap-1.5"
                onClick={() => setHooks({ ...hooks, before: true })}
              >
                <Plus className="size-3.5" />
                Add before hook
              </Button>
            </div>
            {hooks.before && (
              <div className="flex items-end gap-3">
                <div className="flex-1 space-y-2">
                  <Label className="text-muted-foreground text-xs">Module</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a module" />
                    </SelectTrigger>
                    <SelectContent>
                      {modules.map((m) => (
                        <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[120px] space-y-2">
                  <Label className="text-muted-foreground text-xs">Version</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {versions.map((v) => (
                        <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 shrink-0 text-muted-foreground"
                  onClick={() => setHooks({ ...hooks, before: false })}
                >
                  <X className="size-4" />
                </Button>
              </div>
            )}

            {/* After Hooks */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">After Hooks</h3>
              <Button
                variant="default"
                size="sm"
                className="gap-1.5"
                onClick={() => setHooks({ ...hooks, after: true })}
              >
                <Plus className="size-3.5" />
                Add after hook
              </Button>
            </div>
            {hooks.after && (
              <div className="flex items-end gap-3">
                <div className="flex-1 space-y-2">
                  <Label className="text-muted-foreground text-xs">Module</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a module" />
                    </SelectTrigger>
                    <SelectContent>
                      {modules.map((m) => (
                        <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[120px] space-y-2">
                  <Label className="text-muted-foreground text-xs">Version</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {versions.map((v) => (
                        <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 shrink-0 text-muted-foreground"
                  onClick={() => setHooks({ ...hooks, after: false })}
                >
                  <X className="size-4" />
                </Button>
              </div>
            )}

            {/* Error Hook */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Error Hook</h3>
              <Button
                variant="default"
                size="sm"
                className="gap-1.5"
                onClick={() => setHooks({ ...hooks, error: true })}
              >
                <Plus className="size-3.5" />
                Add error hook
              </Button>
            </div>
            {hooks.error && (
              <div className="flex items-end gap-3">
                <div className="flex-1 space-y-2">
                  <Label className="text-muted-foreground text-xs">Module</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a module" />
                    </SelectTrigger>
                    <SelectContent>
                      {modules.map((m) => (
                        <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[120px] space-y-2">
                  <Label className="text-muted-foreground text-xs">Version</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      {versions.map((v) => (
                        <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 shrink-0 text-muted-foreground"
                  onClick={() => setHooks({ ...hooks, error: false })}
                >
                  <X className="size-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button>Add endpoint</Button>
            <Button
              variant="link"
              onClick={handleCancel}
              className="text-primary hover:text-primary/80 h-auto p-0"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
