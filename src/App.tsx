import { useState, useEffect } from 'react';
import { WorkspaceBrowser } from './components/WorkspaceBrowser';
import { GraphEditor } from './components/graph-editor/GraphEditor';

export function App() {
  const [openGraph, setOpenGraph] = useState<string | null>(null);

  // ⌘K from the graph editor closes it and returns to workspace search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k' && openGraph) {
        e.preventDefault();
        setOpenGraph(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openGraph]);

  if (openGraph) {
    return (
      <div className="h-screen w-full">
        <GraphEditor
          graphName={openGraph}
          onBack={() => setOpenGraph(null)}
        />
      </div>
    );
  }

  return <WorkspaceBrowser onOpenGraph={setOpenGraph} />;
}
