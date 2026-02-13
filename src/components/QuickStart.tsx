import { Check, Circle } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface QuickStartProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuickStartStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  action?: {
    label: string;
    variant: "default" | "outline";
  };
}

const steps: QuickStartStep[] = [
  {
    id: "tutorial",
    title: "Start the tutorial",
    description: "Learn the basics of a graph",
    completed: false,
    action: {
      label: "Read our quick start guide",
      variant: "default",
    },
  },
  {
    id: "videos",
    title: "NodeScript video tutorials",
    description: "Get up and running with our tutorial videos",
    completed: false,
  },
  {
    id: "examples",
    title: "Explore our examples",
    description: "Discover NodeScript's versatility",
    completed: false,
  },
];

export function QuickStart({ isOpen, onClose }: QuickStartProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-[88px] right-6 w-[420px] max-h-[calc(100vh-176px)] border border-border bg-background flex flex-col shadow-lg z-50"
          style={{ borderRadius: 'var(--radius-card)' }}
        >
          {/* Header */}
          <div className="px-5 pt-5 pb-4 border-b border-border">
            <div>
              <h3 className="text-[20px]">Onboarding quick start</h3>
              <p className="text-muted-foreground mt-0.5 text-[13px]">
                Become a NodeScript master in three steps
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1 overflow-auto px-5 py-5">
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={step.id} className="flex gap-3">
                  {/* Status Icon */}
                  <div className="shrink-0 mt-0.5">
                    {step.completed ? (
                      <div 
                        className="h-5 w-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--primary)' }}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    ) : (
                      <div 
                        className="h-5 w-5 rounded-full border-2 flex items-center justify-center text-[11px]"
                        style={{ 
                          borderColor: index === 1 ? 'var(--primary)' : 'var(--border)',
                          color: index === 1 ? 'var(--primary)' : 'var(--muted-foreground)'
                        }}
                      >
                        {index + 1}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-0.5 text-[15px]">{step.title}</h4>
                    <p className="text-muted-foreground text-[13px]">{step.description}</p>
                    
                    {step.action && (
                      <Button
                        size="sm"
                        className="h-8 text-[13px] mt-2.5"
                      >
                        {step.action.label}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}