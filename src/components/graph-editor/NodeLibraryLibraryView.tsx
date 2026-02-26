/**
 * NodeLibraryLibraryView — Level 3 view showing sections and modules within a library.
 * Styled to match the workspace browser visual language.
 */

import { useState, useMemo, useCallback } from 'react';
import {
  Search, ChevronDown, ChevronRight, X, Plus, ArrowLeft, FolderOpen, Folder,
  Settings, List, Eye, Trash2, Play, FileText, Globe, Upload, FileDown,
  Send, Info, ListOrdered, Pencil, Eraser, SquarePlus, Rows3, TableProperties,
  Database, Webhook, ArrowDownToLine, Sparkles, Ban, type LucideIcon,
} from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible';
import { libraryMap, sectionMap } from './nodeLibraryData';
import { nodeRegistryMap, type NodeTypeDefinition } from './nodeRegistry';

/**
 * Maps a node to a semantically relevant icon based on its label/operation.
 */
function getNodeIcon(node: NodeTypeDefinition): LucideIcon {
  const label = node.label.toLowerCase();

  if (label.includes('speech') || label.includes('text to speech')) return Play;
  if (label.includes('transcri')) return FileText;
  if (label.includes('translat')) return Globe;
  if (label.includes('embed')) return Sparkles;
  if (label.includes('stream')) return ArrowDownToLine;
  if (label.includes('upload')) return Upload;
  if (label.includes('content') && label.includes('file')) return FileDown;
  if (label.includes('variation')) return Sparkles;
  if (label.includes('webhook') && label.includes('listen')) return Webhook;
  if (label.includes('webhook') && label.includes('send')) return Send;
  if (label.includes('send')) return Send;
  if (label.includes('append')) return Rows3;
  if (label.includes('clear')) return Eraser;
  if (label.includes('read')) return Eye;
  if (label.includes('write')) return Pencil;
  if (label.includes('info')) return Info;
  if (label.includes('cancel')) return Ban;
  if (label.includes('execute') || label.includes('transaction')) return Database;
  if (label.includes('insert')) return SquarePlus;
  if (label.includes('describe')) return TableProperties;
  if (label.includes('http get')) return Globe;
  if (label.includes('http post')) return Send;

  if (label.startsWith('create') || label.startsWith('generate') || label.startsWith('edit image')) return Settings;
  if (label.startsWith('list')) return ListOrdered;
  if (label.startsWith('retrieve') || label.startsWith('get')) return Eye;
  if (label.startsWith('update') || label.startsWith('modify')) return Settings;
  if (label.startsWith('delete') || label.startsWith('remove')) return Trash2;

  if (node.id === 'Number' || node.id === 'Text') return FileText;
  if (node.id === 'Add' || node.id === 'Multiply') return Settings;
  if (node.id === 'JoinText' || node.id === 'Template') return FileText;
  if (node.id === 'JsonParse') return FileText;
  if (node.id === 'Compare') return List;
  if (node.id === 'Output') return ArrowDownToLine;
  if (node.id === 'HttpFetch') return Globe;

  return Settings;
}

interface NodeLibraryLibraryViewProps {
  libraryId: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onBack: () => void;
  onSelectNode: (typeDef: NodeTypeDefinition) => void;
}

export function NodeLibraryLibraryView({
  libraryId,
  searchQuery,
  onSearchChange,
  onBack,
  onSelectNode,
}: NodeLibraryLibraryViewProps) {
  const library = libraryMap.get(libraryId);
  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    if (!library) return new Set();
    return new Set(library.sectionIds);
  });
  const [allExpanded, setAllExpanded] = useState(true);

  const toggleSection = useCallback((sectionId: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    if (!library) return;
    if (allExpanded) {
      setOpenSections(new Set());
      setAllExpanded(false);
    } else {
      setOpenSections(new Set(library.sectionIds));
      setAllExpanded(true);
    }
  }, [allExpanded, library]);

  const filteredSections = useMemo(() => {
    if (!library) return [];
    const query = searchQuery.trim().toLowerCase();

    return library.sectionIds
      .map((sectionId) => {
        const section = sectionMap.get(sectionId);
        if (!section) return null;

        const modules = section.moduleIds
          .map((id) => nodeRegistryMap.get(id))
          .filter(Boolean) as NodeTypeDefinition[];

        if (!query) return { section, modules };

        const filteredModules = modules.filter(
          (m) =>
            m.label.toLowerCase().includes(query) ||
            m.description.toLowerCase().includes(query)
        );

        if (section.name.toLowerCase().includes(query)) {
          return { section, modules };
        }

        if (filteredModules.length === 0) return null;
        return { section, modules: filteredModules };
      })
      .filter(Boolean) as { section: NonNullable<ReturnType<typeof sectionMap.get>>; modules: NodeTypeDefinition[] }[];
  }, [library, searchQuery]);

  if (!library) return null;

  return (
    <>
      {/* Header */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={onBack}
            className="size-7 flex items-center justify-center rounded hover:bg-muted transition-colors shrink-0"
          >
            <ArrowLeft className="size-4 text-muted-foreground" />
          </button>
          <library.icon className="size-4 text-muted-foreground shrink-0" />
          <span className="text-sm font-medium flex-1">{library.name}</span>
          <span className="text-xs text-muted-foreground">{library.moduleCount} modules</span>
        </div>

        {/* Scoped search + expand/collapse toggle */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={`Search in ${library.name}`}
              className="h-9 pl-9 pr-24"
            />
            <button
              onClick={onBack}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 bg-muted rounded hover:bg-border transition-colors"
            >
              <span className="text-xs text-muted-foreground">{library.name}</span>
              <X className="size-3 text-muted-foreground" />
            </button>
          </div>
          <button
            onClick={toggleAll}
            className="size-9 flex items-center justify-center rounded border border-border hover:bg-muted transition-colors shrink-0"
            title={allExpanded ? 'Collapse all' : 'Expand all'}
          >
            {allExpanded ? (
              <FolderOpen className="size-4 text-muted-foreground" />
            ) : (
              <Folder className="size-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Sections + modules */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="py-1">
          {filteredSections.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-8">
              No modules match "{searchQuery}"
            </div>
          ) : (
            filteredSections.map(({ section, modules }) => (
              <Collapsible
                key={section.id}
                open={openSections.has(section.id)}
                onOpenChange={() => toggleSection(section.id)}
              >
                {/* Section header */}
                <CollapsibleTrigger className="w-full flex items-center gap-2 px-4 py-2 hover:bg-muted/50 transition-colors">
                  {openSections.has(section.id) ? (
                    <ChevronDown className="size-3.5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight className="size-3.5 text-muted-foreground shrink-0" />
                  )}
                  <span className="text-xs text-muted-foreground uppercase tracking-wider flex-1 text-left">{section.name}</span>
                  <span className="text-xs text-muted-foreground">{modules.length}</span>
                </CollapsibleTrigger>

                {/* Module rows */}
                <CollapsibleContent>
                  {modules.map((node) => {
                    const NodeIcon = getNodeIcon(node);
                    return (
                      <div
                        key={node.id}
                        className="flex items-center gap-3 pl-9 pr-4 py-2 hover:bg-muted/50 transition-colors group cursor-pointer"
                        onClick={() => onSelectNode(node)}
                      >
                        <NodeIcon className="size-4 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm">{node.label}</span>
                        </div>
                        <button
                          className="rounded p-0.5 hover:bg-muted transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectNode(node);
                          }}
                        >
                          <Plus className="size-3.5 text-muted-foreground" />
                        </button>
                      </div>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            ))
          )}
        </div>
      </ScrollArea>
    </>
  );
}
