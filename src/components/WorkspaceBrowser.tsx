import { useState, useEffect, useRef } from 'react';
import { SidebarProvider, SidebarInset } from './ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { SettingsContent } from './SettingsContent';
import { OrganizationSettingsContent } from './OrganizationSettingsContent';
import { GraphsContent } from './GraphsContent';
import { EndpointsContent } from './EndpointsContent';
import { SchedulesContent } from './SchedulesContent';
import { VariablesContent } from './VariablesContent';
import { MonitoringContent } from './MonitoringContent';
import { StyleGuideContent } from './StyleGuideContent';
import { GraphDetailsPanel } from './GraphDetailsPanel';
import { EndpointDetailsPanel } from './EndpointDetailsPanel';
import { AddEndpointDialog } from './AddEndpointDialog';
import { cn } from './ui/utils';

const organizations = [
  { id: 'sjors', name: 'Sjors Timmer' },
  { id: 'acme', name: 'Acme Corp' },
  { id: 'tech', name: 'Tech Team' },
];

interface WorkspaceBrowserProps {
  onOpenGraph: (name: string) => void;
}

export function WorkspaceBrowser({ onOpenGraph }: WorkspaceBrowserProps) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showOrgSettings, setShowOrgSettings] = useState(false);
  const [activeOrgSettingsSection, setActiveOrgSettingsSection] = useState('general');
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [activeSettingsSection, setActiveSettingsSection] = useState('general');
  const [activeMenuItem, setActiveMenuItem] = useState('Graphs');
  const [activeWorkspace, setActiveWorkspace] = useState('starter-graphs');
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null);
  const [showAddEndpointDialog, setShowAddEndpointDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSettings(false);
        setShowOrgSettings(false);
        setActiveMenuItem('Graphs');
        setTimeout(() => searchInputRef.current?.focus(), 0);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
    <SidebarProvider>
      <div className="flex h-screen w-full relative">
        <AppSidebar
          onOpenSettings={() => {
            setShowSettings(true);
            setShowOrgSettings(false);
          }}
          showSettings={showSettings}
          onBackToWorkspace={() => {
            setShowSettings(false);
            setShowOrgSettings(false);
            setActiveMenuItem('Graphs');
          }}
          activeSettingsSection={activeSettingsSection}
          onSettingsSectionChange={setActiveSettingsSection}
          activeMenuItem={activeMenuItem}
          onMenuItemChange={(item) => {
            setActiveMenuItem(item);
            setShowSettings(false);
            setShowOrgSettings(false);
          }}
          onOpenOrgSettings={(orgId) => {
            setSelectedOrgId(orgId);
            setShowOrgSettings(true);
            setShowSettings(false);
            setActiveOrgSettingsSection('general');
            setActiveMenuItem('Graphs');
          }}
          activeWorkspace={activeWorkspace}
          onWorkspaceChange={setActiveWorkspace}
          onNavigateToBilling={() => {
            setSelectedOrgId('sjors');
            setShowOrgSettings(true);
            setShowSettings(false);
            setActiveOrgSettingsSection('billing');
            setActiveMenuItem('Graphs');
          }}
        />
        <SidebarInset className="flex flex-col flex-1 h-full bg-sidebar">
          <div className="flex flex-row flex-1 overflow-hidden relative">
            {showOrgSettings ? (
              <div className="flex-1 overflow-auto">
                <OrganizationSettingsContent
                  activeSection={activeOrgSettingsSection}
                  organizationName={organizations.find(org => org.id === selectedOrgId)?.name || ''}
                  onSectionChange={setActiveOrgSettingsSection}
                />
              </div>
            ) : showSettings ? (
              <div className="flex-1 overflow-auto">
                <SettingsContent activeSection={activeSettingsSection} />
              </div>
            ) : activeMenuItem === 'Endpoints' ? (
              <>
                <div className="flex-1 overflow-auto">
                  <EndpointsContent
                    activeWorkspace={activeWorkspace}
                    selectedEndpoint={selectedEndpoint}
                    onSelectEndpoint={setSelectedEndpoint}
                    onOpenDialog={() => setShowAddEndpointDialog(true)}
                  />
                </div>
                <div className={cn(
                  'relative h-full transition-[width] duration-300 ease-out',
                  selectedEndpoint ? 'w-[400px]' : 'w-0'
                )}>
                  <EndpointDetailsPanel
                    isOpen={!!selectedEndpoint}
                    onClose={() => setSelectedEndpoint(null)}
                    endpointId={selectedEndpoint}
                  />
                </div>
              </>
            ) : activeMenuItem === 'Schedules' ? (
              <div className="flex-1 overflow-auto">
                <SchedulesContent activeWorkspace={activeWorkspace} />
              </div>
            ) : activeMenuItem === 'Variables' ? (
              <div className="flex-1 overflow-auto">
                <VariablesContent activeWorkspace={activeWorkspace} />
              </div>
            ) : activeMenuItem === 'Monitoring' ? (
              <div className="flex-1 overflow-auto">
                <MonitoringContent activeWorkspace={activeWorkspace} />
              </div>
            ) : activeMenuItem === 'Style guide' ? (
              <div className="flex-1 overflow-auto">
                <StyleGuideContent />
              </div>
            ) : (
              <div className="flex-1 overflow-auto">
                <GraphsContent
                  onSelectGraph={setSelectedGraph}
                  selectedGraph={selectedGraph}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onNavigateToStyleGuide={() => setActiveMenuItem('Style guide')}
                  onOpenGraph={onOpenGraph}
                  showWelcome={showWelcome}
                  onDismissWelcome={() => setShowWelcome(false)}
                  searchInputRef={searchInputRef}
                  activeWorkspace={activeWorkspace}
                />
              </div>
            )}
            {!showSettings && !showOrgSettings && activeMenuItem === 'Graphs' && (
              <div className={cn(
                'relative h-full transition-[width] duration-300 ease-out',
                selectedGraph ? 'w-[400px]' : 'w-0'
              )}>
                <GraphDetailsPanel
                  isOpen={!!selectedGraph}
                  onClose={() => setSelectedGraph(null)}
                  graphName={selectedGraph || ''}
                />
              </div>
            )}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
    <AddEndpointDialog
      open={showAddEndpointDialog}
      onOpenChange={setShowAddEndpointDialog}
    />
    </>
  );
}
