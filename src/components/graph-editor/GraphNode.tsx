/**
 * Custom React Flow node component.
 * Renders a NodeScript-style node with typed input/output handles,
 * inline value editing, and result display.
 */

import { memo, useCallback } from 'react';
import { Handle, Position, useReactFlow, type NodeProps } from '@xyflow/react';
import { nodeRegistryMap, type NodeTypeInput } from './nodeRegistry';

interface GraphNodeData {
  nodeType: string;
  [key: string]: unknown;
  _result?: Record<string, unknown>;
  _error?: string;
  _duration?: number;
}

const categoryColors: Record<string, { bg: string; border: string; accent: string }> = {
  math: { bg: 'bg-blue-50', border: 'border-blue-200', accent: 'bg-blue-500' },
  text: { bg: 'bg-amber-50', border: 'border-amber-200', accent: 'bg-amber-500' },
  data: { bg: 'bg-slate-50', border: 'border-slate-200', accent: 'bg-slate-500' },
  io: { bg: 'bg-emerald-50', border: 'border-emerald-200', accent: 'bg-emerald-500' },
  logic: { bg: 'bg-purple-50', border: 'border-purple-200', accent: 'bg-purple-500' },
};

function InputField({
  input,
  value,
  nodeId,
  isConnected,
}: {
  input: NodeTypeInput;
  value: unknown;
  nodeId: string;
  isConnected: boolean;
}) {
  const { updateNodeData } = useReactFlow();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateNodeData(nodeId, { [input.name]: e.target.value });
    },
    [nodeId, input.name, updateNodeData]
  );

  return (
    <div className="flex items-center gap-1.5 relative py-0.5">
      <Handle
        type="target"
        position={Position.Left}
        id={input.name}
        className="!w-2.5 !h-2.5 !bg-white !border-2 !border-slate-300 hover:!border-slate-500 !-left-[13px]"
      />
      <span className="text-[11px] text-slate-500 min-w-[52px] select-none">{input.name}</span>
      {isConnected ? (
        <span className="text-[11px] text-slate-400 italic">linked</span>
      ) : (
        <input
          type="text"
          value={String(value ?? '')}
          onChange={handleChange}
          className="flex-1 text-[11px] bg-white border border-slate-200 rounded px-1.5 py-0.5 min-w-0 w-full
                     focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 font-mono"
          placeholder={input.default ?? ''}
        />
      )}
    </div>
  );
}

function ResultDisplay({ result, error }: { result?: Record<string, unknown>; error?: string }) {
  if (error) {
    return (
      <div className="mt-1.5 pt-1.5 border-t border-red-200">
        <div className="text-[10px] text-red-600 font-mono break-all">{error}</div>
      </div>
    );
  }
  if (!result || Object.keys(result).length === 0) return null;

  return (
    <div className="mt-1.5 pt-1.5 border-t border-slate-200">
      {Object.entries(result).map(([key, val]) => (
        <div key={key} className="flex items-start gap-1.5">
          <span className="text-[10px] text-slate-400">{key}:</span>
          <span className="text-[10px] font-mono text-slate-700 break-all">
            {typeof val === 'object' ? JSON.stringify(val, null, 0)?.slice(0, 120) : String(val)}
          </span>
        </div>
      ))}
    </div>
  );
}

function GraphNodeComponent({ id, data, selected }: NodeProps) {
  const nodeData = data as GraphNodeData;
  const typeDef = nodeRegistryMap.get(nodeData.nodeType);

  if (!typeDef) {
    return <div className="p-2 bg-red-100 border border-red-300 rounded text-xs">Unknown node type</div>;
  }

  const colors = categoryColors[typeDef.category] ?? categoryColors['data']!;
  const hasOutputs = typeDef.outputs.length > 0;
  if (!colors) return null;

  return (
    <div
      className={`rounded-lg border shadow-sm min-w-[180px] max-w-[260px] ${colors.bg} ${colors.border}
                  ${selected ? 'ring-2 ring-offset-1 ring-slate-400' : ''}`}
    >
      {/* Header */}
      <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-t-lg ${colors.accent}`}>
        <span className="text-[11px] font-medium text-white tracking-wide">{typeDef.label}</span>
        {nodeData._duration != null && (
          <span className="text-[10px] text-white/60 ml-auto">{nodeData._duration.toFixed(0)}ms</span>
        )}
      </div>

      {/* Body */}
      <div className="px-2.5 py-2 space-y-0.5">
        {typeDef.inputs.map((input) => (
          <InputField
            key={input.name}
            input={input}
            value={nodeData[input.name]}
            nodeId={id}
            isConnected={false} // Will be enhanced to check actual connections
          />
        ))}

        {/* Result display (shown after execution) */}
        <ResultDisplay result={nodeData._result as Record<string, unknown>} error={nodeData._error} />
      </div>

      {/* Output handles */}
      {hasOutputs && (
        <div className="px-2.5 pb-2">
          {typeDef.outputs.map((output) => (
            <div key={output.name} className="flex items-center justify-end relative py-0.5">
              <span className="text-[11px] text-slate-500 select-none">{output.name}</span>
              <Handle
                type="source"
                position={Position.Right}
                id={output.name}
                className="!w-2.5 !h-2.5 !bg-white !border-2 !border-slate-300 hover:!border-slate-500 !-right-[13px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const GraphNode = memo(GraphNodeComponent);
