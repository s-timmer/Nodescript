/**
 * EditorPublishBar — top-right overlay with preview toggle, avatar, and publish popover.
 */

import { useState } from 'react';
import { Eye, EyeOff, HelpCircle, Folder, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { cn } from '../ui/utils';

interface EditorPublishBarProps {
  hasOutput?: boolean;
}

export function EditorPublishBar({ hasOutput = false }: EditorPublishBarProps) {
  const [preview, setPreview] = useState(false);
  const [visibility, setVisibility] = useState('workspace');
  const [createRevision, setCreateRevision] = useState(false);
  const [exposeEndpoint, setExposeEndpoint] = useState(false);

  return (
    <TooltipProvider>
      <div className="bg-sidebar border border-border rounded-lg shadow-sm flex items-center gap-1 px-1.5 h-12">
        {/* Preview toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center justify-center p-2 rounded transition-colors text-foreground hover:bg-muted"
              aria-label={preview ? 'Hide preview' : 'Show preview'}
            >
              {preview ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{preview ? 'Hide preview' : 'Show preview'}</p>
          </TooltipContent>
        </Tooltip>

        {/* Avatar */}
        <Avatar className="size-8">
          <AvatarFallback className="text-xs bg-emerald-100 text-emerald-700">
            ST
          </AvatarFallback>
        </Avatar>

        {/* Publish button + popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="ml-1 rounded-lg">Publish</Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-[340px] p-0">
            <div className="p-5 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">Publish module</h3>
                <HelpButton label="Learn more about publishing" />
              </div>

              {/* Warning if no output */}
              {!hasOutput && (
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-amber-500 shrink-0" />
                  <span className="text-sm font-medium">Graph has no output</span>
                  <HelpButton label="An output node is required to publish" className="ml-auto" />
                </div>
              )}

              {/* Visibility */}
              <div className="space-y-2">
                <Select value={visibility} onValueChange={setVisibility}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                      <Folder className="size-4 text-muted-foreground" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workspace">Workspace</SelectItem>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Toggles */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="create-revision" className="text-sm cursor-pointer">
                    Create revision
                  </Label>
                  <div className="flex items-center gap-2">
                    <HelpButton label="Creates a versioned snapshot of the current graph" />
                    <Switch
                      id="create-revision"
                      checked={createRevision}
                      onCheckedChange={setCreateRevision}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="expose-endpoint" className="text-sm cursor-pointer">
                    Expose as HTTP endpoint
                  </Label>
                  <Switch
                    id="expose-endpoint"
                    checked={exposeEndpoint}
                    onCheckedChange={setExposeEndpoint}
                  />
                </div>
              </div>

              {/* Publish action */}
              <Button className="w-full">Publish module</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  );
}

function HelpButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      className={cn('text-muted-foreground hover:text-foreground transition-colors', className)}
      aria-label={label}
      title={label}
    >
      <HelpCircle className="size-4" />
    </button>
  );
}
