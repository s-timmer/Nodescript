/**
 * TypedEdge — Custom React Flow edge that colors the wire
 * based on the source port's data type.
 */

import { type EdgeProps, getBezierPath, useReactFlow } from '@xyflow/react';
import { nodeRegistryMap } from './nodeRegistry';
import { getTypeColor } from './FigmaNode';

export function TypedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  source,
  sourceHandleId,
  selected,
}: EdgeProps) {
  const { getNode } = useReactFlow();

  // Look up the source node's output type to determine wire color
  let color = getTypeColor('any').hex;
  const sourceNode = getNode(source);
  if (sourceNode) {
    const typeDef = nodeRegistryMap.get(sourceNode.data.nodeType as string);
    if (typeDef && sourceHandleId) {
      const output = typeDef.outputs.find((o) => o.name === sourceHandleId);
      if (output) {
        color = getTypeColor(output.type).hex;
      }
    }
  }

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      {/* Shadow for depth */}
      <path
        d={edgePath}
        fill="none"
        stroke={color}
        strokeWidth={selected ? 3 : 2}
        strokeOpacity={0.15}
        filter="blur(2px)"
      />
      {/* Main wire */}
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke={color}
        strokeWidth={selected ? 2.5 : 1.5}
        strokeOpacity={selected ? 1 : 0.6}
        className="transition-all"
      />
    </>
  );
}
