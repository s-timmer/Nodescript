/**
 * NodeActionsContext — lets nodes trigger editor-level actions
 * (run graph, delete node) without prop-drilling through React Flow.
 */

import { createContext, useContext } from 'react';

interface NodeActions {
  onRun: () => void;
  onDeleteNode: (nodeId: string) => void;
}

export const NodeActionsContext = createContext<NodeActions>({
  onRun: () => {},
  onDeleteNode: () => {},
});

export function useNodeActions() {
  return useContext(NodeActionsContext);
}
