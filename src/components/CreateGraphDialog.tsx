import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";

interface CreateGraphDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: (name: string) => void;
}

export function CreateGraphDialog({ open, onOpenChange, onConfirm }: CreateGraphDialogProps) {
  const [graphName, setGraphName] = useState("New Graph");

  const handleCreate = () => {
    onConfirm?.(graphName);
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[720px] p-0 gap-0" aria-describedby={undefined}>
        {/* Header */}
        <div className="px-6 pt-6 pb-5">
          <DialogTitle className="text-[20px] font-medium m-0">Create graph</DialogTitle>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {/* Graph name input */}
            <div className="space-y-2">
              <Label htmlFor="graph-name" className="text-primary">
                Graph name
              </Label>
              <Input
                id="graph-name"
                value={graphName}
                onChange={(e) => setGraphName(e.target.value)}
                className="h-12 text-[16px]"
                autoFocus
              />
            </div>

            {/* Helper text */}
            <div className="text-muted-foreground text-[14px]">
              <span>Tip: Use / to create folder structure.</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6">
            <Button
              onClick={handleCreate}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Create graph
            </Button>
            <Button
              variant="link"
              onClick={handleCancel}
              className="text-primary hover:text-primary/80 h-auto p-0"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
