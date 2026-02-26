/**
 * NodeLibraryCategoryView — Level 2 view showing libraries within a category.
 * Styled to match the workspace browser visual language.
 */

import { Search, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import {
  categoryMap,
  libraryMap,
  sectionMap,
  type NavLevel,
} from './nodeLibraryData';
import { nodeRegistryMap } from './nodeRegistry';

interface NodeLibraryCategoryViewProps {
  categoryId: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (level: NavLevel) => void;
  onBack: () => void;
}

export function NodeLibraryCategoryView({
  categoryId,
  searchQuery,
  onSearchChange,
  onNavigate,
  onBack,
}: NodeLibraryCategoryViewProps) {
  const category = categoryMap.get(categoryId);
  if (!category) return null;

  const librariesInCategory = category.libraryIds
    .map((id) => libraryMap.get(id))
    .filter(Boolean) as NonNullable<ReturnType<typeof libraryMap.get>>[];

  const filtered = searchQuery.trim()
    ? librariesInCategory.filter((lib) => {
        if (lib.name.toLowerCase().includes(searchQuery.toLowerCase())) return true;
        return lib.sectionIds.some((sectionId) => {
          const section = sectionMap.get(sectionId);
          if (!section) return false;
          return section.moduleIds.some((moduleId) => {
            const node = nodeRegistryMap.get(moduleId);
            return (
              node &&
              (node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                node.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );
          });
        });
      })
    : librariesInCategory;

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
          <category.icon className="size-4 text-muted-foreground shrink-0" />
          <span className="text-sm font-medium">{category.name}</span>
        </div>

        {/* Scoped search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            autoFocus
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search in ${category.name}`}
            className="h-9 pl-9 pr-20"
          />
          <button
            onClick={onBack}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 bg-muted rounded hover:bg-border transition-colors"
          >
            <span className="text-xs text-muted-foreground">{category.name.split(' ')[0]}</span>
            <X className="size-3 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Library list */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="py-1">
          {filtered.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-8">
              No libraries match "{searchQuery}"
            </div>
          ) : (
            filtered.map((lib) => (
              <button
                key={lib.id}
                onClick={() => onNavigate({ type: 'library', libraryId: lib.id })}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 transition-colors text-left"
              >
                <lib.icon className="size-4 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-sm">{lib.name}</span>
                  {lib.author && (
                    <span className="text-xs text-muted-foreground ml-1.5">by {lib.author}</span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{lib.moduleCount} modules</span>
                <ChevronRight className="size-4 text-muted-foreground shrink-0" />
              </button>
            ))
          )}
        </div>
      </ScrollArea>
    </>
  );
}
