/**
 * NodeLibraryHome — Level 1 home view of the node library browser.
 * Shows categories, frequently used nodes, and custom libraries.
 * Styled to match the workspace browser visual language.
 */

import { Search, ChevronRight, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import {
  categories,
  frequentlyUsedNodes,
  customLibraries,
  libraryMap,
  type NavLevel,
} from './nodeLibraryData';
import { nodeRegistryMap, nodeRegistry, type NodeTypeDefinition } from './nodeRegistry';

interface NodeLibraryHomeProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (level: NavLevel) => void;
  onSelectNode: (typeDef: NodeTypeDefinition) => void;
}

function getLibraryForNode(nodeId: string): string | undefined {
  const node = nodeRegistryMap.get(nodeId);
  if (!node?.libraryId) return undefined;
  return libraryMap.get(node.libraryId)?.name;
}

export function NodeLibraryHome({
  searchQuery,
  onSearchChange,
  onNavigate,
  onSelectNode,
}: NodeLibraryHomeProps) {
  const searchResults = searchQuery.trim()
    ? nodeRegistry.filter(
        (n) =>
          n.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <>
      {/* Search */}
      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            autoFocus
            type="text"
            placeholder="Search all libraries and nodes"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-9 pl-9"
          />
        </div>
      </div>

      <ScrollArea className="flex-1 min-h-0">
        {searchResults ? (
          /* Search results mode */
          <div className="py-1">
            {searchResults.length === 0 ? (
              <div className="text-center text-sm text-muted-foreground py-8">
                No nodes match "{searchQuery}"
              </div>
            ) : (
              searchResults.slice(0, 30).map((node) => {
                const libName = getLibraryForNode(node.id);
                return (
                  <div
                    key={node.id}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors group cursor-pointer"
                  >
                    <div className="size-4 rounded-full bg-muted-foreground/20 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm">{node.label}</span>
                      {libName && (
                        <span className="text-xs text-muted-foreground ml-1.5">
                          {libName}
                        </span>
                      )}
                    </div>
                    <button
                      className="rounded p-0.5 hover:bg-muted transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                      onClick={() => onSelectNode(node)}
                    >
                      <Plus className="size-3.5 text-muted-foreground" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          /* Normal browse mode */
          <div>
            {/* Category rows */}
            <div className="py-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onNavigate({ type: 'category', categoryId: cat.id })}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 transition-colors text-left"
                >
                  <cat.icon className="size-4 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm">{cat.name}</span>
                    <span className="text-xs text-muted-foreground ml-1.5">{cat.subtitle}</span>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>

            {/* Frequently Used Nodes */}
            <div className="border-t border-border">
              <div className="px-4 pt-3 pb-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Frequently Used</span>
              </div>
              <div className="py-1">
                {frequentlyUsedNodes.map((freqNode, idx) => {
                  const node = nodeRegistryMap.get(freqNode.nodeId);
                  return (
                    <div
                      key={`${freqNode.nodeId}-${idx}`}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors group cursor-pointer"
                    >
                      <freqNode.icon className="size-4 text-muted-foreground shrink-0" />
                      <span className="text-sm flex-1 min-w-0 truncate">{freqNode.displayName}</span>
                      <button
                        className="rounded p-0.5 hover:bg-muted transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                        onClick={() => node && onSelectNode(node)}
                      >
                        <Plus className="size-3.5 text-muted-foreground" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom Libraries */}
            <div className="border-t border-border">
              <div className="px-4 pt-3 pb-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Custom Libraries</span>
              </div>
              <div className="py-1">
                {customLibraries.map((lib) => (
                  <div
                    key={lib.id}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <lib.icon className="size-4 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm">{lib.name}</span>
                      <span className="text-xs text-muted-foreground ml-1.5">by {lib.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{lib.moduleCount}</span>
                    <ChevronRight className="size-4 text-muted-foreground shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </ScrollArea>
    </>
  );
}
