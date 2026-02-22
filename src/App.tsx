import { useState, useEffect, useRef } from "react";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { SettingsContent } from "./components/SettingsContent";
import { OrganizationSettingsContent } from "./components/OrganizationSettingsContent";
import { GraphsContent } from "./components/GraphsContent";
import { EndpointsContent } from "./components/EndpointsContent";
import { SchedulesContent } from "./components/SchedulesContent";
import { VariablesContent } from "./components/VariablesContent";
import { MonitoringContent } from "./components/MonitoringContent";
import { StyleGuideContent } from "./components/StyleGuideContent";
import { GraphDetailsPanel } from "./components/GraphDetailsPanel";
import { GraphEditor } from "./components/graph-editor/GraphEditor";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);
  const [openGraph, setOpenGraph] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showOrgSettings, setShowOrgSettings] = useState(false);
  const [activeOrgSettingsSection, setActiveOrgSettingsSection] = useState("general");
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [activeSettingsSection, setActiveSettingsSection] = useState("general");
  const [activeMenuItem, setActiveMenuItem] = useState("Graphs");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowSettings(false);
        setShowOrgSettings(false);
        setActiveMenuItem("Graphs");
        setOpenGraph(null);
        setTimeout(() => searchInputRef.current?.focus(), 0);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const organizations = [
    { id: "sjors", name: "Sjors Timmer" },
    { id: "acme", name: "Acme Corp" },
    { id: "tech", name: "Tech Team" },
  ];

  return (
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
            setActiveMenuItem("Graphs");
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
            setActiveOrgSettingsSection("general");
            setActiveMenuItem("Graphs");
          }}
          onNavigateToBilling={() => {
            setSelectedOrgId("sjors");
            setShowOrgSettings(true);
            setShowSettings(false);
            setActiveOrgSettingsSection("billing");
            setActiveMenuItem("Graphs");
          }}
        />
        <SidebarInset className="flex flex-col flex-1 h-full bg-sidebar">
          {openGraph ? (
            <GraphEditor
              graphName={openGraph}
              onBack={() => setOpenGraph(null)}
            />
          ) : (
          <div className="flex flex-row flex-1 overflow-hidden relative">
            {showOrgSettings ? (
              <div className="flex-1 overflow-auto">
                <OrganizationSettingsContent
                  activeSection={activeOrgSettingsSection}
                  organizationName={organizations.find(org => org.id === selectedOrgId)?.name || ""}
                  onSectionChange={setActiveOrgSettingsSection}
                />
              </div>
            ) : showSettings ? (
              <div className="flex-1 overflow-auto">
                <SettingsContent activeSection={activeSettingsSection} />
              </div>
            ) : activeMenuItem === "Endpoints" ? (
              <div className="flex-1 overflow-auto">
                <EndpointsContent />
              </div>
            ) : activeMenuItem === "Schedules" ? (
              <div className="flex-1 overflow-auto">
                <SchedulesContent />
              </div>
            ) : activeMenuItem === "Variables" ? (
              <div className="flex-1 overflow-auto">
                <VariablesContent />
              </div>
            ) : activeMenuItem === "Monitoring" ? (
              <div className="flex-1 overflow-auto">
                <MonitoringContent />
              </div>
            ) : activeMenuItem === "Style guide" ? (
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
                  onNavigateToStyleGuide={() => setActiveMenuItem("Style guide")}
                  onOpenGraph={(name) => setOpenGraph(name)}
                  showWelcome={showWelcome}
                  onDismissWelcome={() => setShowWelcome(false)}
                  searchInputRef={searchInputRef}
                />
              </div>
            )}
            {!showSettings && !showOrgSettings && activeMenuItem === "Graphs" && (
              <div className="relative h-full" style={{ width: selectedGraph ? '400px' : '0px', transition: 'width 0.3s ease' }}>
                <GraphDetailsPanel
                  isOpen={!!selectedGraph}
                  onClose={() => setSelectedGraph(null)}
                  graphName={selectedGraph || ""}
                />
              </div>
            )}
          </div>
          )}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
