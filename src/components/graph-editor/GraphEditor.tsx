/**
 * GraphEditor — the main graph editing canvas.
 * Uses React Flow for the visual editor and our graphEngine for evaluation.
 */

import { useCallback, useState, useRef } from 'react';
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

import { GraphNode } from './GraphNode';
import { nodeRegistry, nodeCategories, type NodeTypeDefinition } from './nodeRegistry';
import { evaluateGraph, type GraphResult } from './graphEngine';
import { Button } from '../ui/button';
import { ArrowLeft, Play, Trash2, Plus } from 'lucide-react';

// Register custom node types
const nodeTypes = { GraphNode: GraphNode };

// Wrap all nodes to use our custom component
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

// Default starting graph: a simple Add example
const defaultNodes: Node[] = [
  {
    id: 'n1',
    type: 'GraphNode',
    position: { x: 50, y: 80 },
    data: { nodeType: 'Number', value: '42' },
  },
  {
    id: 'n2',
    type: 'GraphNode',
    position: { x: 50, y: 230 },
    data: { nodeType: 'Number', value: '8' },
  },
  {
    id: 'n3',
    type: 'GraphNode',
    position: { x: 340, y: 140 },
    data: { nodeType: 'Add', a: '', b: '' },
  },
  {
    id: 'n4',
    type: 'GraphNode',
    position: { x: 620, y: 140 },
    data: { nodeType: 'Output', value: '' },
  },
];

const defaultEdges: Edge[] = [
  { id: 'e1', source: 'n1', target: 'n3', sourceHandle: 'result', targetHandle: 'a' },
  { id: 'e2', source: 'n2', target: 'n3', sourceHandle: 'result', targetHandle: 'b' },
  { id: 'e3', source: 'n3', target: 'n4', sourceHandle: 'result', targetHandle: 'value' },
];

interface NodePaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNode: (typeDef: NodeTypeDefinition) => void;
}

function NodePalette({ isOpen, onClose, onAddNode }: NodePaletteProps) {
  const [filter, setFilter] = useState('');

  if (!isOpen) return null;

  const filtered = nodeRegistry.filter(
    (n) =>
      n.label.toLowerCase().includes(filter.toLowerCase()) ||
      n.category.includes(filter.toLowerCase())
  );

  return (
    <div className="absolute left-4 top-4 z-20 w-56 bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden">
      <div className="p-2 border-b border-slate-100">
        <input
          autoFocus
          type="text"
          placeholder="Search nodes..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full text-xs px-2 py-1.5 border border-slate-200 rounded focus:outline-none focus:border-slate-400"
        />
      </div>
      <div className="max-h-64 overflow-y-auto p-1">
        {nodeCategories.map((cat) => {
          const catNodes = filtered.filter((n) => n.category === cat);
          if (catNodes.length === 0) return null;
          return (
            <div key={cat}>
              <div className="px-2 py-1 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                {cat}
              </div>
              {catNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    onAddNode(n);
                    onClose();
                  }}
                  className="w-full text-left px-2 py-1.5 text-xs rounded hover:bg-slate-100 transition-colors"
                >
                  <div className="font-medium text-slate-700">{n.label}</div>
                  <div className="text-[10px] text-slate-400">{n.description}</div>
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface GraphEditorInnerProps {
  graphName: string;
  onBack: () => void;
}

function GraphEditorInner({ graphName, onBack }: GraphEditorInnerProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [showPalette, setShowPalette] = useState(false);
  const [graphResult, setGraphResult] = useState<GraphResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const flowRef = useRef<HTMLDivElement>(null);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds));
    },
    [setEdges]
  );

  const handleAddNode = useCallback(
    (typeDef: NodeTypeDefinition) => {
      const newNode = createFlowNode(typeDef, {
        x: 200 + Math.random() * 200,
        y: 100 + Math.random() * 200,
      });
      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes]
  );

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    try {
      const result = await evaluateGraph(nodes, edges);
      setGraphResult(result);

      // Update nodes with their results for visual display
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
    } finally {
      setIsRunning(false);
    }
  }, [nodes, edges, setNodes]);

  const handleClear = useCallback(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          _result: undefined,
          _error: undefined,
          _duration: undefined,
        },
      }))
    );
    setGraphResult(null);
  }, [setNodes]);

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-200 bg-white">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Button>
        <div className="h-4 w-px bg-slate-200" />
        <span className="text-sm font-medium text-slate-700">{graphName}</span>
        <div className="flex-1" />
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowPalette(!showPalette)}
          className="gap-1.5"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Node
        </Button>
        <Button variant="outline" size="sm" onClick={handleClear} className="gap-1.5">
          <Trash2 className="h-3.5 w-3.5" />
          Clear
        </Button>
        <Button
          size="sm"
          onClick={handleRun}
          disabled={isRunning}
          className="gap-1.5 bg-emerald-600 hover:bg-emerald-700"
        >
          <Play className="h-3.5 w-3.5" />
          {isRunning ? 'Running...' : 'Run'}
        </Button>

        {graphResult && (
          <span className="text-[11px] text-slate-400">
            {graphResult.duration.toFixed(0)}ms
            {graphResult.errors.length > 0 && (
              <span className="text-red-500 ml-1">({graphResult.errors.length} errors)</span>
            )}
          </span>
        )}
      </div>

      {/* Canvas */}
      <div className="flex-1 relative" ref={flowRef}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          deleteKeyCode={['Backspace', 'Delete']}
          className="bg-slate-50"
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: false,
            style: { stroke: '#94a3b8', strokeWidth: 1.5 },
          }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#cbd5e1" />
          <Controls className="!bottom-4 !left-4" />
        </ReactFlow>

        <NodePalette
          isOpen={showPalette}
          onClose={() => setShowPalette(false)}
          onAddNode={handleAddNode}
        />
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
