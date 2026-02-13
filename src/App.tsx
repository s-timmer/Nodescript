import { useState } from "react";
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
import { QuickStart } from "./components/QuickStart";
import { GraphDetailsPanel } from "./components/GraphDetailsPanel";
import { LandingPage } from "./components/LandingPage";
import { SignUpPage } from "./components/SignUpPage";
import { Button } from "./components/ui/button";
import { Sparkles, X } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showQuickStart, setShowQuickStart] = useState(true);
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showOrgSettings, setShowOrgSettings] = useState(false);
  const [activeOrgSettingsSection, setActiveOrgSettingsSection] = useState("general");
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [activeSettingsSection, setActiveSettingsSection] = useState("general");
  const [activeMenuItem, setActiveMenuItem] = useState("Graphs");
  const [searchQuery, setSearchQuery] = useState("");

  const organizations = [
    { id: "sjors", name: "Sjors Timmer" },
    { id: "acme", name: "Acme Corp" },
    { id: "tech", name: "Tech Team" },
  ];

  // Show landing page if not signed in and not on sign up
  if (!isSignedIn && !showSignUp) {
    return <LandingPage onGetStarted={() => setShowSignUp(true)} />;
  }

  // Show sign up page
  if (!isSignedIn && showSignUp) {
    return (
      <SignUpPage 
        onSignUpComplete={() => setIsSignedIn(true)}
        onBackToLanding={() => setShowSignUp(false)}
      />
    );
  }

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
            setActiveMenuItem("Graphs"); // Reset active menu item
          }}
          onNavigateToBilling={() => {
            setSelectedOrgId("sjors"); // Default to the current organization
            setShowOrgSettings(true);
            setShowSettings(false);
            setActiveOrgSettingsSection("billing");
            setActiveMenuItem("Graphs"); // Reset active menu item
          }}
        />
        <SidebarInset className="flex flex-col flex-1 h-full">
          {/* Level 3: Content area with graph list, details panel, and quick start */}
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
                />
              </div>
            )}
            {!showSettings && !showOrgSettings && activeMenuItem === "Graphs" && (
              <>
                {/* Right panel */}
                <div className="relative h-full" style={{ width: selectedGraph ? '400px' : '0px', transition: 'width 0.3s ease' }}>
                  <GraphDetailsPanel 
                    isOpen={!!selectedGraph} 
                    onClose={() => setSelectedGraph(null)}
                    graphName={selectedGraph || ""}
                  />
                </div>
                
                {/* Quick Start Panel */}
                <QuickStart isOpen={showQuickStart} onClose={() => setShowQuickStart(false)} />
                
                {/* Floating Quick Start button / Close button */}
                <div className="absolute bottom-6 right-6 z-[60]">
              {!showQuickStart ? (
                <motion.div
                  key="open-button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    className="gap-2 shadow-lg"
                    size="lg"
                    onClick={() => setShowQuickStart(true)}
                  >
                    <Sparkles className="h-4 w-4" />
                    Quick Start
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="close-button"
                  initial={{ width: "auto", borderRadius: "var(--radius-button)" }}
                  animate={{ 
                    width: "48px",
                    borderRadius: "50%"
                  }}
                  transition={{ 
                    width: { duration: 0.2, ease: "easeInOut" },
                    borderRadius: { duration: 0.2, delay: 0.15, ease: "easeInOut" }
                  }}
                >
                  <Button 
                    className="h-12 w-12 rounded-full shadow-lg bg-black hover:bg-black/90 text-white p-0"
                    onClick={() => setShowQuickStart(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>
              )}
                </div>
              </>
            )}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}