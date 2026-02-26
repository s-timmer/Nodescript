/**
 * EditorToolbar — vertical toolbar overlay on the left side of the canvas.
 */

import { SquarePlus, Download, Upload } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { cn } from '../ui/utils';

interface EditorToolbarProps {
  onAddNodeClick: () => void;
  onInputSettingsClick?: () => void;
  onOutputSettingsClick?: () => void;
  isNodeLibraryActive?: boolean;
  isInputSettingsActive?: boolean;
  isOutputSettingsActive?: boolean;
}

export function EditorToolbar({
  onAddNodeClick,
  onInputSettingsClick,
  onOutputSettingsClick,
  isNodeLibraryActive,
  isInputSettingsActive,
  isOutputSettingsActive,
}: EditorToolbarProps) {
  return (
    <TooltipProvider>
      <div className="bg-sidebar border border-border rounded-lg shadow-sm flex flex-col items-center p-2 gap-1">
        <ToolbarButton
          icon={<SquarePlus className="size-5" strokeWidth={2} />}
          label="Add Node"
          isActive={isNodeLibraryActive}
          onClick={onAddNodeClick}
        />
        <ToolbarButton
          icon={<Download className="size-5 -rotate-90" strokeWidth={2} />}
          label="Input Settings"
          isActive={isInputSettingsActive}
          onClick={onInputSettingsClick}
        />
        <ToolbarButton
          icon={<Upload className="size-5 rotate-90" strokeWidth={2} />}
          label="Output Settings"
          isActive={isOutputSettingsActive}
          onClick={onOutputSettingsClick}
        />
      </div>
    </TooltipProvider>
  );
}

function ToolbarButton({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className={cn(
            'flex items-center justify-center p-2 rounded transition-colors',
            isActive && 'bg-accent text-accent-foreground',
            !isActive && 'text-foreground hover:bg-muted'
          )}
          aria-label={label}
        >
          {icon}
        </button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
