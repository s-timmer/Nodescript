import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { Variable } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { PageContent } from "./PageContent";
import { PageFooter } from "./PageFooter";
import { EmptyState } from "./EmptyState";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type VariableType = "Secret" | "String" | "Number" | "Boolean";

const variables: {
  name: string;
  type: VariableType;
  value: string;
  usedBy: string;
  lastModified: string;
}[] = [
  {
    name: "GMAIL_API_KEY",
    type: "Secret",
    value: "••••••••••••k3Rq",
    usedBy: "2 graphs",
    lastModified: "3 months ago",
  },
  {
    name: "SENDGRID_API_KEY",
    type: "Secret",
    value: "••••••••••••v8Mn",
    usedBy: "1 graph",
    lastModified: "3 months ago",
  },
  {
    name: "SLACK_BOT_TOKEN",
    type: "Secret",
    value: "••••••••••••pL2x",
    usedBy: "1 graph",
    lastModified: "2 months ago",
  },
  {
    name: "DEFAULT_TIMEZONE",
    type: "String",
    value: "Europe/Amsterdam",
    usedBy: "3 graphs",
    lastModified: "3 months ago",
  },
  {
    name: "RETRY_MAX_ATTEMPTS",
    type: "Number",
    value: "3",
    usedBy: "4 graphs",
    lastModified: "1 month ago",
  },
  {
    name: "DEBUG_MODE",
    type: "Boolean",
    value: "false",
    usedBy: "2 graphs",
    lastModified: "2 weeks ago",
  },
];

const typeColors: Record<VariableType, string> = {
  Secret: "bg-red-100 text-red-700",
  String: "bg-green-100 text-green-700",
  Number: "bg-blue-100 text-blue-700",
  Boolean: "bg-amber-100 text-amber-700",
};

interface VariablesContentProps {
  activeWorkspace?: string;
}

export function VariablesContent({ activeWorkspace = "starter-graphs" }: VariablesContentProps) {
  const hasData = activeWorkspace === "starter-graphs";

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader title="Variables">
        <Button>Add variable</Button>
      </PageHeader>

      {hasData ? (
        <PageContent>
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="text-xs text-muted-foreground font-medium pl-6">Name</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Type</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Value</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium">Used by</TableHead>
                  <TableHead className="text-xs text-muted-foreground font-medium pr-6">Last modified</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {variables.map((variable) => (
                  <TableRow key={variable.name}>
                    <TableCell className="text-xs pl-6">
                      <span className="font-mono">{variable.name}</span>
                    </TableCell>
                    <TableCell className="text-xs">
                      <span className={cn('inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium', typeColors[variable.type])}>
                        {variable.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs">
                      <span className={cn('font-mono text-muted-foreground', variable.type === 'Secret' && 'tracking-wider')}>
                        {variable.value}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{variable.usedBy}</TableCell>
                    <TableCell className="text-xs text-muted-foreground pr-6">{variable.lastModified}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PageContent>
      ) : (
        <PageContent centered>
          <EmptyState
            icon={Variable}
            description="Store credentials and values to use across graphs in your workspace."
            tips={[
              "Securely store and manage sensitive credentials",
              "Save a value as a variable to use it across graphs in the workspace or organisation",
              "See where your variables are used in the side panel preview",
            ]}
            learnMoreText="Learn more about variables"
          />
        </PageContent>
      )}

      <PageFooter />
    </div>
  );
}
