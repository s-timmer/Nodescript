/**
 * Graph Evaluation Engine
 *
 * Walks the React Flow graph from outputs backward to inputs,
 * evaluates each node, caches results, and returns the computed values.
 * This is a simplified version of what @nodescript/core's GraphEvalContext does.
 */

import type { Node, Edge } from '@xyflow/react';
import { nodeRegistryMap } from './nodeRegistry';

export interface NodeResult {
  nodeId: string;
  outputs: Record<string, unknown>;
  error?: string;
  duration?: number;
}

export interface GraphResult {
  nodeResults: Map<string, NodeResult>;
  errors: string[];
  duration: number;
}

/**
 * Evaluate the entire graph. Starts from all nodes with no outgoing edges
 * (the "sinks") and works backward through connections.
 */
export async function evaluateGraph(
  nodes: Node[],
  edges: Edge[]
): Promise<GraphResult> {
  const startTime = performance.now();
  const nodeResults = new Map<string, NodeResult>();
  const errors: string[] = [];

  // Build lookup maps
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // For each node+input, find which node+output feeds into it
  // Edge: source (nodeId) -> target (nodeId), sourceHandle = output name, targetHandle = input name
  const inputConnections = new Map<string, { sourceNodeId: string; sourceOutput: string }>();
  for (const edge of edges) {
    const key = `${edge.target}::${edge.targetHandle}`;
    inputConnections.set(key, {
      sourceNodeId: edge.source,
      sourceOutput: edge.sourceHandle ?? 'result',
    });
  }

  // Recursive evaluation with caching
  async function evaluateNode(nodeId: string, visited: Set<string>): Promise<NodeResult> {
    // Return cached result
    if (nodeResults.has(nodeId)) {
      return nodeResults.get(nodeId)!;
    }

    // Cycle detection
    if (visited.has(nodeId)) {
      const result: NodeResult = { nodeId, outputs: {}, error: 'Circular dependency detected' };
      nodeResults.set(nodeId, result);
      return result;
    }
    visited.add(nodeId);

    const node = nodeMap.get(nodeId);
    if (!node) {
      const result: NodeResult = { nodeId, outputs: {}, error: 'Node not found' };
      nodeResults.set(nodeId, result);
      return result;
    }

    const typeDef = nodeRegistryMap.get(node.type ?? '');
    if (!typeDef) {
      const result: NodeResult = { nodeId, outputs: {}, error: `Unknown node type: ${node.type}` };
      nodeResults.set(nodeId, result);
      return result;
    }

    // Gather inputs: either from connected nodes or from the node's own data (user-entered values)
    const resolvedInputs: Record<string, unknown> = {};

    for (const input of typeDef.inputs) {
      const connectionKey = `${nodeId}::${input.name}`;
      const connection = inputConnections.get(connectionKey);

      if (connection) {
        // This input is connected to another node's output — evaluate that node first
        const sourceResult = await evaluateNode(connection.sourceNodeId, new Set(visited));
        resolvedInputs[input.name] = sourceResult.outputs[connection.sourceOutput];
      } else {
        // Use the node's stored value (from the UI input fields)
        const nodeData = node.data as Record<string, unknown>;
        resolvedInputs[input.name] = nodeData[input.name] ?? input.default ?? '';
      }
    }

    // Execute the node's compute function
    const nodeStart = performance.now();
    try {
      const outputs = await typeDef.compute(resolvedInputs);
      const result: NodeResult = {
        nodeId,
        outputs,
        duration: performance.now() - nodeStart,
      };
      nodeResults.set(nodeId, result);
      return result;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      errors.push(`${typeDef.label} (${nodeId}): ${errorMsg}`);
      const result: NodeResult = {
        nodeId,
        outputs: {},
        error: errorMsg,
        duration: performance.now() - nodeStart,
      };
      nodeResults.set(nodeId, result);
      return result;
    }
  }

  // Find all nodes and evaluate them (the engine will recursively pull dependencies)
  for (const node of nodes) {
    await evaluateNode(node.id, new Set());
  }

  return {
    nodeResults,
    errors,
    duration: performance.now() - startTime,
  };
}
