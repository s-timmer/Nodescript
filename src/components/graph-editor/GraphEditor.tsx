/**
 * GraphEditor — the main graph editing canvas.
 * Uses React Flow for the visual editor with Figma Make-styled overlay UI.
 */

import { useCallback, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
  type Edge,
  type Node,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { FigmaNode } from './FigmaNode';
import { TypedEdge } from './TypedEdge';
import { EditorTitlePanel } from './EditorTitlePanel';
import { EditorToolbar } from './EditorToolbar';
import { EditorPublishBar } from './EditorPublishBar';
import { NodeLibraryPanel } from './NodeLibraryPanel';
import { NodeActionsContext } from './NodeActionsContext';
import { type NodeTypeDefinition } from './nodeRegistry';
import { evaluateGraph, type GraphResult } from './graphEngine';

// Register custom node + edge types
const nodeTypes = { GraphNode: FigmaNode };
const edgeTypes = { typed: TypedEdge };

// Create a new Flow node from a registry definition
function createFlowNode(
  typeDef: NodeTypeDefinition,
  position: { x: number; y: number }
): Node {
  const data: Record<string, unknown> = { nodeType: typeDef.id };
  for (const input of typeDef.inputs) {
    data[input.name] = input.default ?? '';
  }
  return {
    id: `node_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    type: 'GraphNode',
    position,
    data,
  };
}

// Default starting graph: Number(42) + Number(8) → Add → Output
const defaultNodes: Node[] = [
  {
    id: 'n1',
    type: 'GraphNode',
    position: { x: 100, y: 120 },
    data: { nodeType: 'Number', value: '42' },
  },
  {
    id: 'n2',
    type: 'GraphNode',
    position: { x: 100, y: 300 },
    data: { nodeType: 'Number', value: '8' },
  },
  {
    id: 'n3',
    type: 'GraphNode',
    position: { x: 420, y: 200 },
    data: { nodeType: 'Add', a: '', b: '' },
  },
  {
    id: 'n4',
    type: 'GraphNode',
    position: { x: 720, y: 200 },
    data: { nodeType: 'Output', value: '' },
  },
];

const defaultEdges: Edge[] = [
  { id: 'e1', source: 'n1', target: 'n3', sourceHandle: 'result', targetHandle: 'a' },
  { id: 'e2', source: 'n2', target: 'n3', sourceHandle: 'result', targetHandle: 'b' },
  { id: 'e3', source: 'n3', target: 'n4', sourceHandle: 'result', targetHandle: 'value' },
];

interface GraphEditorInnerProps {
  graphName: string;
  onBack: () => void;
}

function GraphEditorInner({ graphName, onBack }: GraphEditorInnerProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [showNodeLibrary, setShowNodeLibrary] = useState(false);
  const [graphResult, setGraphResult] = useState<GraphResult | null>(null);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({ ...connection, type: 'typed' }, eds));
    },
    [setEdges]
  );

  const handleAddNode = useCallback(
    (typeDef: NodeTypeDefinition) => {
      const newNode = createFlowNode(typeDef, {
        x: 200 + Math.random() * 300,
        y: 100 + Math.random() * 300,
      });
      setNodes((nds) => [...nds, newNode]);
      setShowNodeLibrary(false);
    },
    [setNodes]
  );

  const handleRun = useCallback(async () => {
    const result = await evaluateGraph(nodes, edges);
    setGraphResult(result);

    setNodes((nds) =>
      nds.map((node) => {
        const nodeResult = result.nodeResults.get(node.id);
        if (nodeResult) {
          return {
            ...node,
            data: {
              ...node.data,
              _result: nodeResult.outputs,
              _error: nodeResult.error,
              _duration: nodeResult.duration,
            },
          };
        }
        return node;
      })
    );
  }, [nodes, edges, setNodes]);

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((n) => n.id !== nodeId));
      setEdges((eds) =>
        eds.filter((e) => e.source !== nodeId && e.target !== nodeId)
      );
    },
    [setNodes, setEdges]
  );

  // Stable context value using refs to avoid re-rendering all nodes
  const runRef = useRef(handleRun);
  runRef.current = handleRun;
  const deleteRef = useRef(handleDeleteNode);
  deleteRef.current = handleDeleteNode;

  const nodeActions = useMemo(
    () => ({
      onRun: () => runRef.current(),
      onDeleteNode: (id: string) => deleteRef.current(id),
    }),
    []
  );

  return (
    <div className="relative w-full h-full">
      {/* React Flow canvas — full size */}
      <NodeActionsContext.Provider value={nodeActions}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          deleteKeyCode={['Backspace', 'Delete']}
          defaultEdgeOptions={{
            type: 'typed',
            animated: false,
          }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#cbd5e1" />
          <Controls className="!bottom-4 !left-4" />
        </ReactFlow>
      </NodeActionsContext.Provider>

      {/* Overlay: Title panel — top left */}
      <div className="absolute top-4 left-4 z-10">
        <EditorTitlePanel title={graphName} onBack={onBack} />
      </div>

      {/* Overlay: Toolbar — left, below title */}
      <div className="absolute top-[72px] left-4 z-10">
        <EditorToolbar
          onAddNodeClick={() => setShowNodeLibrary(!showNodeLibrary)}
          isNodeLibraryActive={showNodeLibrary}
        />
      </div>

      {/* Overlay: Node Library panel — left, next to toolbar */}
      {showNodeLibrary && (
        <>
          <div
            className="absolute inset-0 z-[9]"
            onClick={() => setShowNodeLibrary(false)}
          />
          <div className="absolute top-[72px] left-[76px] z-10">
            <NodeLibraryPanel
              onSelectNode={handleAddNode}
              onClose={() => setShowNodeLibrary(false)}
            />
          </div>
        </>
      )}

      {/* Overlay: Publish bar + result indicator — top right */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <EditorPublishBar
          hasOutput={nodes.some((n) => n.data.nodeType === 'Output')}
        />
        {graphResult && (
          <div className="bg-sidebar border border-border rounded-lg shadow-sm px-4 py-2">
            <span className="text-xs text-muted-foreground">
              {graphResult.duration.toFixed(0)}ms
              {graphResult.errors.length > 0 && (
                <span className="text-red-500 ml-2">
                  {graphResult.errors.length} error{graphResult.errors.length > 1 ? 's' : ''}
                </span>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

interface GraphEditorProps {
  graphName: string;
  onBack: () => void;
}

export function GraphEditor({ graphName, onBack }: GraphEditorProps) {
  return (
    <ReactFlowProvider>
      <GraphEditorInner graphName={graphName} onBack={onBack} />
    </ReactFlowProvider>
  );
}
