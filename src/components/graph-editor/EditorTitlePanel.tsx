/**
 * EditorTitlePanel — top-left overlay with logo icon and editable breadcrumb path.
 * Clicking the logo navigates back to the workspace browser.
 */

import { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import svgPaths from '../../imports/svg-tr8bvpyaut';

interface EditorTitlePanelProps {
  title: string;
  onTitleChange?: (title: string) => void;
  onBack: () => void;
}

export function EditorTitlePanel({ title, onTitleChange, onBack }: EditorTitlePanelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localTitle, setLocalTitle] = useState(title);

  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  const handleTitleBlur = () => {
    setIsEditing(false);
    onTitleChange?.(localTitle);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onTitleChange?.(localTitle);
    } else if (e.key === 'Escape') {
      setLocalTitle(title);
      setIsEditing(false);
    }
  };

  // Split path into segments for breadcrumb display
  const segments = title.split(' / ');

  return (
    <div className="bg-sidebar border border-border rounded-lg shadow-sm flex items-center pl-3 pr-4 h-12">
      {/* Logo icon — click to go home */}
      <button
        onClick={onBack}
        className="flex items-center justify-center hover:bg-muted rounded p-1 transition-colors mr-3 shrink-0"
        aria-label="Back to workspace"
      >
        <NodeScriptIcon />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-border mr-3 shrink-0" />

      {/* Breadcrumb path — inline editable */}
      {isEditing ? (
        <Input
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          className="h-8 w-auto min-w-48 border-none bg-transparent focus-visible:ring-1 -ml-2"
          style={{ width: `${localTitle.length + 2}ch` }}
          autoFocus
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="hover:bg-muted rounded py-1 transition-colors -ml-2 px-2 flex items-center gap-0 min-w-0"
        >
          {segments.map((segment, i) => (
            <span key={i} className="flex items-center gap-0 shrink-0">
              {i > 0 && (
                <span className="text-muted-foreground mx-1.5 text-sm">/</span>
              )}
              <span
                className={
                  i === segments.length - 1
                    ? 'text-foreground font-medium text-sm whitespace-nowrap'
                    : 'text-muted-foreground text-sm whitespace-nowrap'
                }
              >
                {segment}
              </span>
            </span>
          ))}
        </button>
      )}
    </div>
  );
}

function NodeScriptIcon() {
  return (
    <svg
      className="block"
      width="24"
      height="18"
      fill="none"
      viewBox="0 0 33 23"
    >
      <path d={svgPaths.pf843500} fill="#005B9C" />
      <path d={svgPaths.p99d8bc0} fill="#005B9C" />
      <path d={svgPaths.p38f8dd80} fill="#005B9C" />
    </svg>
  );
}
