/**
 * Node Registry — defines the available node types for the graph editor.
 * Each node type has inputs, outputs, a compute function, and display metadata.
 *
 * Architecture note: this is a simplified evaluation engine that stays compatible
 * with NodeScript's GraphSpec/ModuleSpec types. The compute functions run directly
 * in the browser. In a full implementation, these would be replaced by Boris's
 * @nodescript/core compiler + runtime pipeline.
 */

export interface NodeTypeInput {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'any';
  default?: string;
}

export interface NodeTypeOutput {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'any';
}

export interface NodeTypeDefinition {
  id: string;
  label: string;
  category: 'math' | 'text' | 'data' | 'io' | 'logic';
  description: string;
  inputs: NodeTypeInput[];
  outputs: NodeTypeOutput[];
  compute: (inputs: Record<string, unknown>) => Promise<Record<string, unknown>>;
}

// --- Node type definitions ---

const numberNode: NodeTypeDefinition = {
  id: 'Number',
  label: 'Number',
  category: 'data',
  description: 'A constant number value',
  inputs: [{ name: 'value', type: 'number', default: '0' }],
  outputs: [{ name: 'result', type: 'number' }],
  compute: async (inputs) => ({ result: Number(inputs.value) || 0 }),
};

const textNode: NodeTypeDefinition = {
  id: 'Text',
  label: 'Text',
  category: 'data',
  description: 'A constant text value',
  inputs: [{ name: 'value', type: 'string', default: '' }],
  outputs: [{ name: 'result', type: 'string' }],
  compute: async (inputs) => ({ result: String(inputs.value ?? '') }),
};

const addNode: NodeTypeDefinition = {
  id: 'Add',
  label: 'Add',
  category: 'math',
  description: 'Adds two numbers',
  inputs: [
    { name: 'a', type: 'number', default: '0' },
    { name: 'b', type: 'number', default: '0' },
  ],
  outputs: [{ name: 'result', type: 'number' }],
  compute: async (inputs) => ({ result: Number(inputs.a) + Number(inputs.b) }),
};

const multiplyNode: NodeTypeDefinition = {
  id: 'Multiply',
  label: 'Multiply',
  category: 'math',
  description: 'Multiplies two numbers',
  inputs: [
    { name: 'a', type: 'number', default: '0' },
    { name: 'b', type: 'number', default: '0' },
  ],
  outputs: [{ name: 'result', type: 'number' }],
  compute: async (inputs) => ({ result: Number(inputs.a) * Number(inputs.b) }),
};

const joinTextNode: NodeTypeDefinition = {
  id: 'JoinText',
  label: 'Join Text',
  category: 'text',
  description: 'Joins two text values together',
  inputs: [
    { name: 'a', type: 'string', default: '' },
    { name: 'b', type: 'string', default: '' },
    { name: 'separator', type: 'string', default: ' ' },
  ],
  outputs: [{ name: 'result', type: 'string' }],
  compute: async (inputs) => ({
    result: `${inputs.a ?? ''}${inputs.separator ?? ' '}${inputs.b ?? ''}`,
  }),
};

const templateNode: NodeTypeDefinition = {
  id: 'Template',
  label: 'Template',
  category: 'text',
  description: 'Fills a text template with values. Use {{a}} and {{b}} as placeholders.',
  inputs: [
    { name: 'template', type: 'string', default: 'Hello {{a}}, your score is {{b}}!' },
    { name: 'a', type: 'any', default: '' },
    { name: 'b', type: 'any', default: '' },
  ],
  outputs: [{ name: 'result', type: 'string' }],
  compute: async (inputs) => {
    let result = String(inputs.template ?? '');
    result = result.replace(/\{\{a\}\}/g, String(inputs.a ?? ''));
    result = result.replace(/\{\{b\}\}/g, String(inputs.b ?? ''));
    return { result };
  },
};

const jsonParseNode: NodeTypeDefinition = {
  id: 'JsonParse',
  label: 'JSON Parse',
  category: 'data',
  description: 'Parses a JSON string into an object',
  inputs: [{ name: 'json', type: 'string', default: '{}' }],
  outputs: [{ name: 'result', type: 'any' }],
  compute: async (inputs) => {
    try {
      return { result: JSON.parse(String(inputs.json ?? '{}')) };
    } catch {
      return { result: { error: 'Invalid JSON' } };
    }
  },
};

const httpFetchNode: NodeTypeDefinition = {
  id: 'HttpFetch',
  label: 'HTTP Fetch',
  category: 'io',
  description: 'Fetches data from a URL',
  inputs: [
    { name: 'url', type: 'string', default: 'https://api.github.com' },
    { name: 'method', type: 'string', default: 'GET' },
  ],
  outputs: [
    { name: 'status', type: 'number' },
    { name: 'body', type: 'any' },
  ],
  compute: async (inputs) => {
    try {
      const resp = await fetch(String(inputs.url), {
        method: String(inputs.method ?? 'GET'),
      });
      let body: unknown;
      const ct = resp.headers.get('content-type') ?? '';
      if (ct.includes('json')) {
        body = await resp.json();
      } else {
        body = await resp.text();
      }
      return { status: resp.status, body };
    } catch (err) {
      return { status: 0, body: { error: String(err) } };
    }
  },
};

const compareNode: NodeTypeDefinition = {
  id: 'Compare',
  label: 'Compare',
  category: 'logic',
  description: 'Compares two values',
  inputs: [
    { name: 'a', type: 'any', default: '' },
    { name: 'b', type: 'any', default: '' },
    { name: 'operator', type: 'string', default: '==' },
  ],
  outputs: [{ name: 'result', type: 'boolean' }],
  compute: async (inputs) => {
    const a = inputs.a;
    const b = inputs.b;
    const op = String(inputs.operator ?? '==');
    let result = false;
    switch (op) {
      case '==': result = a == b; break;
      case '!=': result = a != b; break;
      case '>': result = Number(a) > Number(b); break;
      case '<': result = Number(a) < Number(b); break;
      case '>=': result = Number(a) >= Number(b); break;
      case '<=': result = Number(a) <= Number(b); break;
    }
    return { result };
  },
};

const outputNode: NodeTypeDefinition = {
  id: 'Output',
  label: 'Output',
  category: 'io',
  description: 'Displays the final result of a graph',
  inputs: [{ name: 'value', type: 'any', default: '' }],
  outputs: [],
  compute: async (inputs) => ({ value: inputs.value }),
};

// --- Registry ---

export const nodeRegistry: NodeTypeDefinition[] = [
  numberNode,
  textNode,
  addNode,
  multiplyNode,
  joinTextNode,
  templateNode,
  jsonParseNode,
  httpFetchNode,
  compareNode,
  outputNode,
];

export const nodeRegistryMap = new Map<string, NodeTypeDefinition>(
  nodeRegistry.map((n) => [n.id, n])
);

export const nodeCategories = [...new Set(nodeRegistry.map((n) => n.category))];
