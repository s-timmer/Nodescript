/**
 * FigmaNode — Custom React Flow node styled to match the real NodeScript product.
 * Compact card with type-colored port dots, colored input labels, and inline editing.
 */

import { memo, useCallback } from 'react';
import { Handle, Position, useReactFlow, useViewport, type NodeProps } from '@xyflow/react';
import { Play, Trash2 } from 'lucide-react';
import { nodeRegistryMap, type NodeTypeInput } from './nodeRegistry';
import { useNodeActions } from './NodeActionsContext';
import { Input } from '../ui/input';
import { cn } from '../ui/utils';

// -- Data shape stored in React Flow node.data --
interface FigmaNodeData {
  nodeType: string;
  [key: string]: unknown;
  _result?: Record<string, unknown>;
  _error?: string;
  _duration?: number;
}

// -- Type color system --
const anyColor = { dot: '!bg-slate-400 !border-slate-400', hex: '#94a3b8' } as const;

export const typeColorMap: Record<string, { dot: string; hex: string }> = {
  string: { dot: '!bg-emerald-500 !border-emerald-500', hex: '#10b981' },
  number: { dot: '!bg-amber-400 !border-amber-400', hex: '#f59e0b' },
  boolean: { dot: '!bg-sky-400 !border-sky-400', hex: '#38bdf8' },
  any: anyColor,
};

export function getTypeColor(type: string) {
  return typeColorMap[type] ?? anyColor;
}

// -- Sub-components --

function NodeInputField({
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
  const colors = getTypeColor(input.type);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateNodeData(nodeId, { [input.name]: e.target.value });
    },
    [nodeId, input.name, updateNodeData]
  );

  return (
    <div className="relative flex items-center gap-1.5">
      <Handle
        type="target"
        position={Position.Left}
        id={input.name}
        className={cn(
          '!size-2 !rounded-full !border-2 !transition-transform hover:!scale-150',
          colors.dot
        )}
        style={{ left: -4 }}
      />
      <span
        className="text-[11px] shrink-0 select-none"
        style={{ color: colors.hex }}
      >
        {input.name}
      </span>
      {isConnected ? (
        <span className="text-[11px] text-muted-foreground italic">linked</span>
      ) : (
        <Input
          value={String(value ?? '')}
          onChange={handleChange}
          placeholder=""
          className="h-6 text-xs border-border bg-white px-1.5 nodrag flex-1 min-w-0"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}

function ExecutionBadge({
  result,
  error,
  duration,
}: {
  result?: Record<string, unknown>;
  error?: string;
  duration?: number;
}) {
  if (error) {
    return (
      <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-red-500 text-white rounded-full pl-1 pr-1.5 py-0.5 shadow-sm">
        <svg className="size-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M3 3l6 6M9 3l-6 6" />
        </svg>
        {duration != null && (
          <span className="text-[9px] font-medium">{duration.toFixed(0)}ms</span>
        )}
      </div>
    );
  }

  if (result) {
    return (
      <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-emerald-500 text-white rounded-full pl-1 pr-1.5 py-0.5 shadow-sm">
        <svg className="size-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M2.5 6l2.5 3L9.5 3" />
        </svg>
        {duration != null && (
          <span className="text-[9px] font-medium">{duration.toFixed(0)}ms</span>
        )}
      </div>
    );
  }

  return null;
}

function ResultDisplay({
  result,
  error,
}: {
  result?: Record<string, unknown>;
  error?: string;
}) {
  if (error) {
    return (
      <div className="mx-2.5 mb-1.5 pt-1 border-t border-red-200">
        <div className="text-[10px] text-red-600 font-mono break-all">{error}</div>
      </div>
    );
  }
  if (!result || Object.keys(result).length === 0) return null;

  return (
    <div className="mx-2.5 mb-1.5 pt-1 border-t border-border">
      {Object.entries(result).map(([key, val]) => (
        <div key={key} className="flex items-start gap-1">
          <span className="text-[10px] text-muted-foreground">{key}:</span>
          <span className="text-[10px] font-mono text-foreground break-all">
            {typeof val === 'object' ? JSON.stringify(val, null, 0)?.slice(0, 120) : String(val)}
          </span>
        </div>
      ))}
    </div>
  );
}

// -- Contextual toolbar (appears above node when selected) --

function NodeContextToolbar({ nodeId }: { nodeId: string }) {
  const { onRun, onDeleteNode } = useNodeActions();
  const { zoom } = useViewport();
  const scale = 1 / zoom;

  return (
    <div
      className="absolute bottom-full mb-2 left-1/2 bg-sidebar border border-border rounded-full shadow-sm flex items-center px-1 py-0.5 nodrag"
      style={{ transform: `translateX(-50%) scale(${scale})`, transformOrigin: 'bottom center' }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => onRun()}
        className="flex items-center justify-center p-1.5 rounded-full text-foreground hover:bg-muted transition-colors"
        aria-label="Run graph"
      >
        <Play className="size-4" />
      </button>
      <button
        onClick={() => onDeleteNode(nodeId)}
        className="flex items-center justify-center p-1.5 rounded-full text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
        aria-label="Delete node"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  );
}

// -- Main component --

function FigmaNodeComponent({ id, data, selected }: NodeProps) {
  const nodeData = data as FigmaNodeData;
  const typeDef = nodeRegistryMap.get(nodeData.nodeType);

  if (!typeDef) {
    return (
      <div className="p-2 bg-red-100 border border-red-300 rounded text-xs text-red-700">
        Unknown node type: {nodeData.nodeType}
      </div>
    );
  }

  const hasOutputs = typeDef.outputs.length > 0;

  return (
    <div
      className={cn(
        'w-52 bg-card border rounded-lg shadow-sm relative transition-all',
        selected ? 'ring-2 ring-ring border-ring' : 'border-border'
      )}
    >
      {/* Contextual toolbar — shown when selected */}
      {selected && <NodeContextToolbar nodeId={id} />}

      {/* Output handle(s) — right side, aligned to header */}
      {hasOutputs &&
        typeDef.outputs.map((output, idx) => {
          const colors = getTypeColor(output.type);
          return (
            <Handle
              key={output.name}
              type="source"
              position={Position.Right}
              id={output.name}
              className={cn(
                '!size-2 !rounded-full !border-2 !transition-transform hover:!scale-150',
                colors.dot
              )}
              style={{
                right: -4,
                top: typeDef.outputs.length === 1 ? 14 : 14 + idx * 18,
              }}
            />
          );
        })}

      {/* Execution status badge — top-right corner */}
      <ExecutionBadge
        result={nodeData._result as Record<string, unknown> | undefined}
        error={nodeData._error}
        duration={nodeData._duration as number | undefined}
      />

      {/* Node header */}
      <div className="px-2.5 pt-2 pb-0.5">
        <span className="text-sm font-medium text-foreground select-none">
          {typeDef.label}
        </span>
      </div>

      {/* Input fields */}
      {typeDef.inputs.length > 0 && (
        <div className="px-2.5 pb-2 space-y-0.5">
          {typeDef.inputs.map((input) => (
            <NodeInputField
              key={input.name}
              input={input}
              value={nodeData[input.name]}
              nodeId={id}
              isConnected={false}
            />
          ))}
        </div>
      )}

      {/* Result display after execution */}
      <ResultDisplay
        result={nodeData._result as Record<string, unknown> | undefined}
        error={nodeData._error}
      />
    </div>
  );
}

export const FigmaNode = memo(FigmaNodeComponent);
