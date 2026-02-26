/**
 * Hierarchical browsing structure for the Node Library panel.
 * Visual properties (icons, colors) match the Figma Make prototype exactly.
 * This is purely for UI navigation — the flat nodeRegistry + nodeRegistryMap
 * remain the source of truth for graph execution.
 */

import {
  Sparkles,
  Mail,
  Database,
  Zap,
  Globe,
  Workflow,
  Brain,
  MessageSquare,
  FileSpreadsheet,
  FileText,
  HardDrive,
  Calendar,
  Play,
  Lock,
  Settings,
  Boxes,
  User,
  type LucideIcon,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NodeCategory {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  libraryIds: string[];
}

export interface NodeLibrary {
  id: string;
  name: string;
  icon: LucideIcon;
  moduleCount: number;
  author?: string;
  categoryId: string;
  sectionIds: string[];
  isCustom?: boolean;
}

export interface NodeSection {
  id: string;
  name: string;
  moduleIds: string[];
}

export interface CustomLibrary {
  id: string;
  name: string;
  icon: LucideIcon;
  moduleCount: number;
  author: string;
}

export type NavLevel =
  | { type: 'home' }
  | { type: 'category'; categoryId: string }
  | { type: 'library'; libraryId: string };

// ---------------------------------------------------------------------------
// Category icon styles — maps category ID to bg + icon color
// ---------------------------------------------------------------------------

export const getCategoryIconStyles = (categoryId: string) => {
  const styleMap: Record<string, { bg: string; icon: string }> = {
    ai:           { bg: 'bg-pink-50',    icon: 'text-foreground' },
    google:       { bg: 'bg-blue-50',    icon: 'text-foreground' },
    data:         { bg: 'bg-cyan-50',    icon: 'text-foreground' },
    integrations: { bg: 'bg-purple-50',  icon: 'text-foreground' },
    web:          { bg: 'bg-green-50',   icon: 'text-foreground' },
    core:         { bg: 'bg-slate-100',  icon: 'text-foreground' },
  };
  return styleMap[categoryId] ?? { bg: 'bg-slate-100', icon: 'text-foreground' };
};

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export const categories: NodeCategory[] = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    subtitle: 'OpenAI, Stability AI, more',
    icon: Sparkles,
    iconBg: 'bg-pink-50',
    libraryIds: ['openai', 'anthropic', 'stability'],
  },
  {
    id: 'google',
    name: 'Google Workspace',
    subtitle: 'Gmail, Sheets, Docs, Drive',
    icon: Mail,
    iconBg: 'bg-blue-50',
    libraryIds: ['gmail', 'google-sheets', 'google-calendar', 'google-docs', 'google-drive'],
  },
  {
    id: 'data',
    name: 'Data & Databases',
    subtitle: 'BigQuery, MongoDB, SQL, CSV',
    icon: Database,
    iconBg: 'bg-cyan-50',
    libraryIds: ['postgresql', 'bigquery', 'mongodb'],
  },
  {
    id: 'integrations',
    name: 'Integrations',
    subtitle: 'GitHub, Slack, Notion, YouTube',
    icon: Zap,
    iconBg: 'bg-purple-50',
    libraryIds: ['github', 'slack', 'notion', 'youtube'],
  },
  {
    id: 'web',
    name: 'Web & Automation',
    subtitle: 'Web scraping, HTTP',
    icon: Globe,
    iconBg: 'bg-green-50',
    libraryIds: ['http', 'web-crypto'],
  },
  {
    id: 'core',
    name: 'Core Nodes',
    subtitle: 'Essential workflow components',
    icon: Workflow,
    iconBg: 'bg-slate-100',
    libraryIds: ['core-math', 'core-text', 'core-logic', 'core-data'],
  },
];

// ---------------------------------------------------------------------------
// Libraries
// ---------------------------------------------------------------------------

export const libraries: NodeLibrary[] = [
  // AI
  {
    id: 'openai', name: 'OpenAI', icon: Brain,
    author: 'NodeScript Libraries', moduleCount: 25, categoryId: 'ai',
    sectionIds: ['openai-assistants', 'openai-chat', 'openai-embeddings', 'openai-images', 'openai-audio', 'openai-files', 'openai-models'],
  },
  {
    id: 'anthropic', name: 'Anthropic', icon: MessageSquare,
    author: 'NodeScript Libraries', moduleCount: 8, categoryId: 'ai',
    sectionIds: ['anthropic-messages', 'anthropic-models', 'anthropic-batches'],
  },
  {
    id: 'stability', name: 'Stability AI', icon: Sparkles,
    author: 'NodeScript Libraries', moduleCount: 8, categoryId: 'ai',
    sectionIds: ['stability-images'],
  },
  // Google
  {
    id: 'gmail', name: 'Gmail', icon: Mail,
    author: 'NodeScript Libraries', moduleCount: 12, categoryId: 'google',
    sectionIds: ['gmail-messages', 'gmail-drafts'],
  },
  {
    id: 'google-sheets', name: 'Google Sheets', icon: FileSpreadsheet,
    author: 'NodeScript Libraries', moduleCount: 18, categoryId: 'google',
    sectionIds: ['gsheets-spreadsheets', 'gsheets-cells'],
  },
  {
    id: 'google-calendar', name: 'Google Calendar', icon: Calendar,
    author: 'NodeScript Libraries', moduleCount: 14, categoryId: 'google',
    sectionIds: ['gcal-events'],
  },
  {
    id: 'google-docs', name: 'Google Docs', icon: FileText,
    author: 'NodeScript Libraries', moduleCount: 10, categoryId: 'google',
    sectionIds: ['gdocs-documents'],
  },
  {
    id: 'google-drive', name: 'Google Drive', icon: HardDrive,
    author: 'NodeScript Libraries', moduleCount: 16, categoryId: 'google',
    sectionIds: ['gdrive-files'],
  },
  // Data
  {
    id: 'postgresql', name: 'PostgreSQL', icon: Database,
    author: 'NodeScript Libraries', moduleCount: 5, categoryId: 'data',
    sectionIds: ['pg-query', 'pg-tables'],
  },
  {
    id: 'bigquery', name: 'BigQuery', icon: Database,
    author: 'NodeScript Libraries', moduleCount: 9, categoryId: 'data',
    sectionIds: ['bq-query'],
  },
  {
    id: 'mongodb', name: 'MongoDB', icon: Database,
    author: 'NodeScript Libraries', moduleCount: 7, categoryId: 'data',
    sectionIds: ['mongo-collections'],
  },
  // Integrations
  {
    id: 'github', name: 'GitHub', icon: Zap,
    author: 'NodeScript Libraries', moduleCount: 22, categoryId: 'integrations',
    sectionIds: ['github-repos', 'github-issues'],
  },
  {
    id: 'slack', name: 'Slack', icon: MessageSquare,
    author: 'NodeScript Libraries', moduleCount: 16, categoryId: 'integrations',
    sectionIds: ['slack-messages', 'slack-channels'],
  },
  {
    id: 'notion', name: 'Notion', icon: FileText,
    author: 'NodeScript Libraries', moduleCount: 18, categoryId: 'integrations',
    sectionIds: ['notion-pages'],
  },
  {
    id: 'youtube', name: 'YouTube', icon: Play,
    author: 'NodeScript Libraries', moduleCount: 12, categoryId: 'integrations',
    sectionIds: ['youtube-videos'],
  },
  // Web
  {
    id: 'http', name: 'HTTP', icon: Globe,
    author: 'NodeScript Libraries', moduleCount: 5, categoryId: 'web',
    sectionIds: ['http-request', 'http-webhook'],
  },
  {
    id: 'web-crypto', name: 'Web Crypto', icon: Lock,
    author: 'NodeScript Libraries', moduleCount: 6, categoryId: 'web',
    sectionIds: ['crypto-hash'],
  },
  // Core
  {
    id: 'core-math', name: 'Math', icon: Settings,
    moduleCount: 2, categoryId: 'core',
    sectionIds: ['core-math-arithmetic'],
  },
  {
    id: 'core-text', name: 'Text', icon: Settings,
    moduleCount: 2, categoryId: 'core',
    sectionIds: ['core-text-transform'],
  },
  {
    id: 'core-logic', name: 'Logic', icon: Settings,
    moduleCount: 1, categoryId: 'core',
    sectionIds: ['core-logic-comparison'],
  },
  {
    id: 'core-data', name: 'Data', icon: Settings,
    moduleCount: 4, categoryId: 'core',
    sectionIds: ['core-data-constants', 'core-data-transform', 'core-data-io'],
  },
];

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

export const sections: NodeSection[] = [
  // OpenAI
  { id: 'openai-assistants', name: 'Assistants', moduleIds: ['openai-assistant-create', 'openai-assistant-list', 'openai-assistant-retrieve', 'openai-assistant-update', 'openai-assistant-delete'] },
  { id: 'openai-chat', name: 'Chat', moduleIds: ['openai-chat-create', 'openai-chat-stream'] },
  { id: 'openai-embeddings', name: 'Embeddings', moduleIds: ['openai-embedding-create'] },
  { id: 'openai-images', name: 'Images', moduleIds: ['openai-image-generate', 'openai-image-edit', 'openai-image-variation'] },
  { id: 'openai-audio', name: 'Audio', moduleIds: ['openai-audio-transcribe', 'openai-audio-translate', 'openai-audio-speech'] },
  { id: 'openai-files', name: 'Files', moduleIds: ['openai-file-upload', 'openai-file-list', 'openai-file-retrieve', 'openai-file-delete', 'openai-file-content'] },
  { id: 'openai-models', name: 'Models', moduleIds: ['openai-model-list', 'openai-model-retrieve'] },
  // Anthropic
  { id: 'anthropic-messages', name: 'Messages', moduleIds: ['anthropic-message-create', 'anthropic-message-stream'] },
  { id: 'anthropic-models', name: 'Models', moduleIds: ['anthropic-model-list', 'anthropic-model-retrieve'] },
  { id: 'anthropic-batches', name: 'Batches', moduleIds: ['anthropic-batch-create', 'anthropic-batch-list', 'anthropic-batch-retrieve', 'anthropic-batch-cancel'] },
  // Stability AI
  { id: 'stability-images', name: 'Images', moduleIds: ['openai-image-generate'] }, // reuses OpenAI image node as placeholder
  // Gmail
  { id: 'gmail-messages', name: 'Messages', moduleIds: ['slack-message-send'] }, // placeholder
  { id: 'gmail-drafts', name: 'Drafts', moduleIds: ['slack-message-update'] }, // placeholder
  // Google Sheets
  { id: 'gsheets-spreadsheets', name: 'Spreadsheets', moduleIds: ['google-sheets-spreadsheet-create', 'google-sheets-spreadsheet-retrieve'] },
  { id: 'gsheets-cells', name: 'Cells', moduleIds: ['google-sheets-cell-read', 'google-sheets-cell-write', 'google-sheets-cell-append', 'google-sheets-cell-clear'] },
  // Google Calendar
  { id: 'gcal-events', name: 'Events', moduleIds: ['google-docs-document-create'] }, // placeholder
  // Google Docs
  { id: 'gdocs-documents', name: 'Documents', moduleIds: ['google-docs-document-create', 'google-docs-document-retrieve', 'google-docs-document-update'] },
  // Google Drive
  { id: 'gdrive-files', name: 'Files', moduleIds: ['google-docs-document-retrieve'] }, // placeholder
  // BigQuery
  { id: 'bq-query', name: 'Queries', moduleIds: ['postgresql-query-execute'] }, // placeholder
  // MongoDB
  { id: 'mongo-collections', name: 'Collections', moduleIds: ['postgresql-query-execute'] }, // placeholder
  // Slack
  { id: 'slack-messages', name: 'Messages', moduleIds: ['slack-message-send', 'slack-message-update', 'slack-message-delete'] },
  { id: 'slack-channels', name: 'Channels', moduleIds: ['slack-channel-list', 'slack-channel-info'] },
  // GitHub
  { id: 'github-repos', name: 'Repositories', moduleIds: ['github-repository-list', 'github-repository-retrieve', 'github-repository-create'] },
  { id: 'github-issues', name: 'Issues', moduleIds: ['github-issue-create', 'github-issue-list', 'github-issue-retrieve', 'github-issue-update'] },
  // Notion
  { id: 'notion-pages', name: 'Pages', moduleIds: ['google-docs-document-create'] }, // placeholder
  // YouTube
  { id: 'youtube-videos', name: 'Videos', moduleIds: ['http-request-get'] }, // placeholder
  // PostgreSQL
  { id: 'pg-query', name: 'Queries', moduleIds: ['postgresql-query-execute', 'postgresql-query-transaction'] },
  { id: 'pg-tables', name: 'Tables', moduleIds: ['postgresql-table-list', 'postgresql-table-describe', 'postgresql-table-insert'] },
  // HTTP
  { id: 'http-request', name: 'Requests', moduleIds: ['http-request-get', 'http-request-post', 'HttpFetch'] },
  { id: 'http-webhook', name: 'Webhooks', moduleIds: ['http-webhook-listen', 'http-webhook-send'] },
  // Web Crypto
  { id: 'crypto-hash', name: 'Hashing', moduleIds: ['Compare'] }, // placeholder
  // Core
  { id: 'core-math-arithmetic', name: 'Arithmetic', moduleIds: ['Add', 'Multiply'] },
  { id: 'core-text-transform', name: 'Transform', moduleIds: ['JoinText', 'Template'] },
  { id: 'core-logic-comparison', name: 'Comparison', moduleIds: ['Compare'] },
  { id: 'core-data-constants', name: 'Constants', moduleIds: ['Number', 'Text'] },
  { id: 'core-data-transform', name: 'Transform', moduleIds: ['JsonParse'] },
  { id: 'core-data-io', name: 'I/O', moduleIds: ['Output'] },
];

// ---------------------------------------------------------------------------
// Frequently used nodes (curated for home screen)
// ---------------------------------------------------------------------------

export interface FrequentlyUsedNode {
  nodeId: string;
  displayName: string;
  description: string;
  icon: LucideIcon;
  categoryId: string;
}

export const frequentlyUsedNodes: FrequentlyUsedNode[] = [
  { nodeId: 'openai-chat-create', displayName: 'ChatGPT', description: 'Ask AI anything with deep research', icon: Brain, categoryId: 'ai' },
  { nodeId: 'google-sheets-cell-read', displayName: 'Google Sheets / Read', description: 'Read data from spreadsheets', icon: FileSpreadsheet, categoryId: 'google' },
  { nodeId: 'slack-message-send', displayName: 'Gmail / Send Email', description: 'Send emails automatically', icon: Mail, categoryId: 'google' },
  { nodeId: 'HttpFetch', displayName: 'Web / Scrape Page', description: 'Extract data from websites', icon: Globe, categoryId: 'web' },
  { nodeId: 'slack-message-send', displayName: 'Slack / Send Message', description: 'Post to Slack channels', icon: MessageSquare, categoryId: 'integrations' },
  { nodeId: 'openai-image-generate', displayName: 'Generate Image', description: 'Create AI-generated images', icon: Sparkles, categoryId: 'ai' },
];

// ---------------------------------------------------------------------------
// Custom Libraries (display-only on home screen)
// ---------------------------------------------------------------------------

export const customLibraries: CustomLibrary[] = [
  { id: 'acme-corp', name: 'Acme Corp Library', icon: Boxes, moduleCount: 24, author: 'Acme Corporation' },
  { id: 'my-library', name: 'My Personal Nodes', icon: User, moduleCount: 12, author: 'You' },
];

// ---------------------------------------------------------------------------
// Lookup maps
// ---------------------------------------------------------------------------

export const categoryMap = new Map(categories.map((c) => [c.id, c]));
export const libraryMap = new Map(libraries.map((l) => [l.id, l]));
export const sectionMap = new Map(sections.map((s) => [s.id, s]));
