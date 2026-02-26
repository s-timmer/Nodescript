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
  category: 'math' | 'text' | 'data' | 'io' | 'logic' | 'ai' | 'integration' | 'web' | 'google';
  description: string;
  inputs: NodeTypeInput[];
  outputs: NodeTypeOutput[];
  compute: (inputs: Record<string, unknown>) => Promise<Record<string, unknown>>;
  /** Library this node belongs to (for hierarchical browsing) */
  libraryId?: string;
  /** Section within a library (for hierarchical browsing) */
  sectionId?: string;
}

// ---------------------------------------------------------------------------
// Core nodes (original 10 — fully functional compute)
// ---------------------------------------------------------------------------

const numberNode: NodeTypeDefinition = {
  id: 'Number',
  label: 'Number',
  category: 'data',
  description: 'A constant number value',
  inputs: [{ name: 'value', type: 'number', default: '0' }],
  outputs: [{ name: 'result', type: 'number' }],
  compute: async (inputs) => ({ result: Number(inputs.value) || 0 }),
  libraryId: 'core-data',
  sectionId: 'core-data-constants',
};

const textNode: NodeTypeDefinition = {
  id: 'Text',
  label: 'Text',
  category: 'data',
  description: 'A constant text value',
  inputs: [{ name: 'value', type: 'string', default: '' }],
  outputs: [{ name: 'result', type: 'string' }],
  compute: async (inputs) => ({ result: String(inputs.value ?? '') }),
  libraryId: 'core-data',
  sectionId: 'core-data-constants',
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
  libraryId: 'core-math',
  sectionId: 'core-math-arithmetic',
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
  libraryId: 'core-math',
  sectionId: 'core-math-arithmetic',
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
  libraryId: 'core-text',
  sectionId: 'core-text-transform',
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
  libraryId: 'core-text',
  sectionId: 'core-text-transform',
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
  libraryId: 'core-data',
  sectionId: 'core-data-transform',
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
  libraryId: 'http',
  sectionId: 'http-request',
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
  libraryId: 'core-logic',
  sectionId: 'core-logic-comparison',
};

const outputNode: NodeTypeDefinition = {
  id: 'Output',
  label: 'Output',
  category: 'io',
  description: 'Displays the final result of a graph',
  inputs: [{ name: 'value', type: 'any', default: '' }],
  outputs: [],
  compute: async (inputs) => ({ value: inputs.value }),
  libraryId: 'core-data',
  sectionId: 'core-data-io',
};

// ---------------------------------------------------------------------------
// Mock node factory — generates placeholder nodes for API libraries
// ---------------------------------------------------------------------------

const mockCompute = async (inputs: Record<string, unknown>) => ({
  result: `[Mock] ${JSON.stringify(inputs)}`.slice(0, 200),
});

interface CrudConfig {
  libraryId: string;
  sectionId: string;
  resource: string;
  category: NodeTypeDefinition['category'];
  operations: Array<{
    op: string;
    label: string;
    description: string;
    inputs?: NodeTypeInput[];
    outputs?: NodeTypeOutput[];
  }>;
}

function createCrudNodes(config: CrudConfig): NodeTypeDefinition[] {
  return config.operations.map((opDef) => ({
    id: `${config.libraryId}-${config.resource.toLowerCase().replace(/\s+/g, '-')}-${opDef.op.toLowerCase()}`,
    label: opDef.label,
    category: config.category,
    description: opDef.description,
    inputs: opDef.inputs ?? [
      { name: 'apiKey', type: 'string' as const, default: '' },
      ...(opDef.op === 'Create' || opDef.op === 'Update'
        ? [{ name: 'body', type: 'any' as const, default: '{}' }]
        : []),
      ...(opDef.op === 'Retrieve' || opDef.op === 'Update' || opDef.op === 'Delete'
        ? [{ name: 'id', type: 'string' as const, default: '' }]
        : []),
      ...(opDef.op === 'List'
        ? [{ name: 'limit', type: 'number' as const, default: '20' }]
        : []),
    ],
    outputs: opDef.outputs ?? [{ name: 'result', type: 'any' as const }],
    compute: mockCompute,
    libraryId: config.libraryId,
    sectionId: config.sectionId,
  }));
}

const crud = (resource: string) => [
  { op: 'Create', label: `Create ${resource}`, description: `Create a new ${resource.toLowerCase()}` },
  { op: 'List', label: `List ${resource}s`, description: `List all ${resource.toLowerCase()}s` },
  { op: 'Retrieve', label: `Retrieve ${resource}`, description: `Get details about a ${resource.toLowerCase()}` },
  { op: 'Update', label: `Update ${resource}`, description: `Modify a ${resource.toLowerCase()}` },
  { op: 'Delete', label: `Delete ${resource}`, description: `Delete a ${resource.toLowerCase()}` },
];

const crudReadOnly = (resource: string) => [
  { op: 'List', label: `List ${resource}s`, description: `List all ${resource.toLowerCase()}s` },
  { op: 'Retrieve', label: `Retrieve ${resource}`, description: `Get details about a ${resource.toLowerCase()}` },
];

// ---------------------------------------------------------------------------
// OpenAI library nodes
// ---------------------------------------------------------------------------

const openaiAssistants = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-assistants', resource: 'Assistant', category: 'ai',
  operations: crud('Assistant'),
});

const openaiChat = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-chat', resource: 'Chat', category: 'ai',
  operations: [
    {
      op: 'Create', label: 'Chat Completion', description: 'Create a chat completion with GPT models',
      inputs: [
        { name: 'model', type: 'string', default: 'gpt-4' },
        { name: 'messages', type: 'any', default: '[]' },
        { name: 'temperature', type: 'number', default: '0.7' },
        { name: 'maxTokens', type: 'number', default: '1000' },
        { name: 'apiKey', type: 'string', default: '' },
      ],
    },
    {
      op: 'Stream', label: 'Chat Completion (Stream)', description: 'Create a streaming chat completion',
      inputs: [
        { name: 'model', type: 'string', default: 'gpt-4' },
        { name: 'messages', type: 'any', default: '[]' },
        { name: 'apiKey', type: 'string', default: '' },
      ],
    },
  ],
});

const openaiEmbeddings = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-embeddings', resource: 'Embedding', category: 'ai',
  operations: [
    {
      op: 'Create', label: 'Create Embedding', description: 'Generate vector embeddings for text',
      inputs: [
        { name: 'model', type: 'string', default: 'text-embedding-3-small' },
        { name: 'input', type: 'string', default: '' },
        { name: 'apiKey', type: 'string', default: '' },
      ],
    },
  ],
});

const openaiImages = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-images', resource: 'Image', category: 'ai',
  operations: [
    { op: 'Generate', label: 'Generate Image', description: 'Generate an image from a text prompt' },
    { op: 'Edit', label: 'Edit Image', description: 'Edit an existing image with a text prompt' },
    { op: 'Variation', label: 'Create Image Variation', description: 'Create a variation of an existing image' },
  ],
});

const openaiAudio = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-audio', resource: 'Audio', category: 'ai',
  operations: [
    { op: 'Transcribe', label: 'Transcribe Audio', description: 'Transcribe audio into text using Whisper' },
    { op: 'Translate', label: 'Translate Audio', description: 'Translate audio into English text' },
    { op: 'Speech', label: 'Text to Speech', description: 'Generate audio from text input' },
  ],
});

const openaiFiles = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-files', resource: 'File', category: 'ai',
  operations: [
    { op: 'Upload', label: 'Upload File', description: 'Upload a file for use with OpenAI' },
    ...crudReadOnly('File'),
    { op: 'Delete', label: 'Delete File', description: 'Delete an uploaded file' },
    { op: 'Content', label: 'Retrieve File Content', description: 'Get the contents of a file' },
  ],
});

const openaiModels = createCrudNodes({
  libraryId: 'openai', sectionId: 'openai-models', resource: 'Model', category: 'ai',
  operations: crudReadOnly('Model'),
});

// ---------------------------------------------------------------------------
// Anthropic library nodes
// ---------------------------------------------------------------------------

const anthropicMessages = createCrudNodes({
  libraryId: 'anthropic', sectionId: 'anthropic-messages', resource: 'Message', category: 'ai',
  operations: [
    {
      op: 'Create', label: 'Create Message', description: 'Send a message to Claude',
      inputs: [
        { name: 'model', type: 'string', default: 'claude-sonnet-4-20250514' },
        { name: 'messages', type: 'any', default: '[]' },
        { name: 'maxTokens', type: 'number', default: '1024' },
        { name: 'apiKey', type: 'string', default: '' },
      ],
    },
    {
      op: 'Stream', label: 'Create Message (Stream)', description: 'Send a streaming message to Claude',
      inputs: [
        { name: 'model', type: 'string', default: 'claude-sonnet-4-20250514' },
        { name: 'messages', type: 'any', default: '[]' },
        { name: 'apiKey', type: 'string', default: '' },
      ],
    },
  ],
});

const anthropicModels = createCrudNodes({
  libraryId: 'anthropic', sectionId: 'anthropic-models', resource: 'Model', category: 'ai',
  operations: crudReadOnly('Model'),
});

const anthropicBatches = createCrudNodes({
  libraryId: 'anthropic', sectionId: 'anthropic-batches', resource: 'Batch', category: 'ai',
  operations: [
    { op: 'Create', label: 'Create Batch', description: 'Create a batch of message requests' },
    ...crudReadOnly('Batch'),
    { op: 'Cancel', label: 'Cancel Batch', description: 'Cancel a running batch' },
  ],
});

// ---------------------------------------------------------------------------
// Google Sheets library nodes
// ---------------------------------------------------------------------------

const googleSheetsSpreadsheets = createCrudNodes({
  libraryId: 'google-sheets', sectionId: 'gsheets-spreadsheets', resource: 'Spreadsheet', category: 'google',
  operations: [
    { op: 'Create', label: 'Create Spreadsheet', description: 'Create a new Google Sheets spreadsheet' },
    { op: 'Retrieve', label: 'Get Spreadsheet', description: 'Get spreadsheet metadata and properties' },
  ],
});

const googleSheetsCells = createCrudNodes({
  libraryId: 'google-sheets', sectionId: 'gsheets-cells', resource: 'Cell', category: 'google',
  operations: [
    { op: 'Read', label: 'Read Cells', description: 'Read values from a range of cells' },
    { op: 'Write', label: 'Write Cells', description: 'Write values to a range of cells' },
    { op: 'Append', label: 'Append Rows', description: 'Append rows to the end of a sheet' },
    { op: 'Clear', label: 'Clear Cells', description: 'Clear values from a range of cells' },
  ],
});

// ---------------------------------------------------------------------------
// Google Docs library nodes
// ---------------------------------------------------------------------------

const googleDocsDocs = createCrudNodes({
  libraryId: 'google-docs', sectionId: 'gdocs-documents', resource: 'Document', category: 'google',
  operations: [
    { op: 'Create', label: 'Create Document', description: 'Create a new Google Doc' },
    { op: 'Retrieve', label: 'Get Document', description: 'Get document content and metadata' },
    { op: 'Update', label: 'Update Document', description: 'Apply changes to a document' },
  ],
});

// ---------------------------------------------------------------------------
// Slack library nodes
// ---------------------------------------------------------------------------

const slackMessages = createCrudNodes({
  libraryId: 'slack', sectionId: 'slack-messages', resource: 'Message', category: 'integration',
  operations: [
    {
      op: 'Send', label: 'Send Message', description: 'Post a message to a Slack channel',
      inputs: [
        { name: 'channel', type: 'string', default: '' },
        { name: 'text', type: 'string', default: '' },
        { name: 'token', type: 'string', default: '' },
      ],
    },
    { op: 'Update', label: 'Update Message', description: 'Update an existing message' },
    { op: 'Delete', label: 'Delete Message', description: 'Delete a message from a channel' },
  ],
});

const slackChannels = createCrudNodes({
  libraryId: 'slack', sectionId: 'slack-channels', resource: 'Channel', category: 'integration',
  operations: [
    { op: 'List', label: 'List Channels', description: 'List all channels in the workspace' },
    { op: 'Info', label: 'Channel Info', description: 'Get information about a channel' },
  ],
});

// ---------------------------------------------------------------------------
// GitHub library nodes
// ---------------------------------------------------------------------------

const githubRepos = createCrudNodes({
  libraryId: 'github', sectionId: 'github-repos', resource: 'Repository', category: 'integration',
  operations: [
    { op: 'List', label: 'List Repositories', description: 'List repositories for the authenticated user' },
    { op: 'Retrieve', label: 'Get Repository', description: 'Get details about a repository' },
    { op: 'Create', label: 'Create Repository', description: 'Create a new repository' },
  ],
});

const githubIssues = createCrudNodes({
  libraryId: 'github', sectionId: 'github-issues', resource: 'Issue', category: 'integration',
  operations: [
    { op: 'Create', label: 'Create Issue', description: 'Create a new issue in a repository' },
    ...crudReadOnly('Issue'),
    { op: 'Update', label: 'Update Issue', description: 'Update an existing issue' },
  ],
});

// ---------------------------------------------------------------------------
// PostgreSQL library nodes
// ---------------------------------------------------------------------------

const pgQuery = createCrudNodes({
  libraryId: 'postgresql', sectionId: 'pg-query', resource: 'Query', category: 'data',
  operations: [
    {
      op: 'Execute', label: 'Execute Query', description: 'Run a SQL query against the database',
      inputs: [
        { name: 'connectionString', type: 'string', default: '' },
        { name: 'query', type: 'string', default: '' },
        { name: 'params', type: 'any', default: '[]' },
      ],
    },
    {
      op: 'Transaction', label: 'Execute Transaction', description: 'Run multiple queries in a transaction',
      inputs: [
        { name: 'connectionString', type: 'string', default: '' },
        { name: 'queries', type: 'any', default: '[]' },
      ],
    },
  ],
});

const pgTables = createCrudNodes({
  libraryId: 'postgresql', sectionId: 'pg-tables', resource: 'Table', category: 'data',
  operations: [
    { op: 'List', label: 'List Tables', description: 'List all tables in the database' },
    { op: 'Describe', label: 'Describe Table', description: 'Get column definitions for a table' },
    { op: 'Insert', label: 'Insert Row', description: 'Insert a row into a table' },
  ],
});

// ---------------------------------------------------------------------------
// HTTP library nodes (wraps existing HttpFetch + extras)
// ---------------------------------------------------------------------------

const httpNodes = createCrudNodes({
  libraryId: 'http', sectionId: 'http-request', resource: 'Request', category: 'web',
  operations: [
    {
      op: 'Get', label: 'HTTP GET', description: 'Make an HTTP GET request',
      inputs: [
        { name: 'url', type: 'string', default: '' },
        { name: 'headers', type: 'any', default: '{}' },
      ],
    },
    {
      op: 'Post', label: 'HTTP POST', description: 'Make an HTTP POST request',
      inputs: [
        { name: 'url', type: 'string', default: '' },
        { name: 'body', type: 'any', default: '{}' },
        { name: 'headers', type: 'any', default: '{}' },
      ],
    },
  ],
});

const httpWebhook = createCrudNodes({
  libraryId: 'http', sectionId: 'http-webhook', resource: 'Webhook', category: 'web',
  operations: [
    { op: 'Listen', label: 'Webhook Listener', description: 'Listen for incoming webhook events' },
    { op: 'Send', label: 'Send Webhook', description: 'Send a webhook to an external URL' },
  ],
});

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const nodeRegistry: NodeTypeDefinition[] = [
  // Core nodes (functional)
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
  // OpenAI
  ...openaiAssistants,
  ...openaiChat,
  ...openaiEmbeddings,
  ...openaiImages,
  ...openaiAudio,
  ...openaiFiles,
  ...openaiModels,
  // Anthropic
  ...anthropicMessages,
  ...anthropicModels,
  ...anthropicBatches,
  // Google
  ...googleSheetsSpreadsheets,
  ...googleSheetsCells,
  ...googleDocsDocs,
  // Slack
  ...slackMessages,
  ...slackChannels,
  // GitHub
  ...githubRepos,
  ...githubIssues,
  // PostgreSQL
  ...pgQuery,
  ...pgTables,
  // HTTP / Web
  ...httpNodes,
  ...httpWebhook,
];

export const nodeRegistryMap = new Map<string, NodeTypeDefinition>(
  nodeRegistry.map((n) => [n.id, n])
);

export const nodeCategories = [...new Set(nodeRegistry.map((n) => n.category))];
