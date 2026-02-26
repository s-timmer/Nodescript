/**
 * NodeLibraryPanel — 3-level hierarchical node browser.
 * Shell component that manages navigation and delegates to level-specific views.
 */

import { useNodeLibraryNav } from './useNodeLibraryNav';
import { NodeLibraryHome } from './NodeLibraryHome';
import { NodeLibraryCategoryView } from './NodeLibraryCategoryView';
import { NodeLibraryLibraryView } from './NodeLibraryLibraryView';
import { type NodeTypeDefinition } from './nodeRegistry';

interface NodeLibraryPanelProps {
  onSelectNode: (typeDef: NodeTypeDefinition) => void;
  onClose: () => void;
}

export function NodeLibraryPanel({ onSelectNode }: NodeLibraryPanelProps) {
  const { currentLevel, searchQuery, setSearchQuery, navigateTo, goBack } = useNodeLibraryNav();

  return (
    <div
      className="bg-sidebar border border-border rounded-lg shadow-lg w-[380px] overflow-hidden flex flex-col h-[calc(100vh-96px)]"
    >

      {/* Level-specific view */}
      {currentLevel.type === 'home' && (
        <NodeLibraryHome
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onNavigate={navigateTo}
          onSelectNode={onSelectNode}
        />
      )}

      {currentLevel.type === 'category' && (
        <NodeLibraryCategoryView
          categoryId={currentLevel.categoryId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onNavigate={navigateTo}
          onBack={goBack}
        />
      )}

      {currentLevel.type === 'library' && (
        <NodeLibraryLibraryView
          libraryId={currentLevel.libraryId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onBack={goBack}
          onSelectNode={onSelectNode}
        />
      )}
    </div>
  );
}
