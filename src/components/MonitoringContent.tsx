import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function MonitoringContent() {
  const [isLocal, setIsLocal] = useState(true);
  const currentDate = "2025-10-22";
  const currentTime = "15:00";

  // Generate time markers for the timeline (15 minute intervals)
  const startHour = 15;
  const endHour = 16;
  const timeMarkers = [];
  
  for (let hour = startHour; hour <= endHour; hour++) {
    const hourStr = hour.toString().padStart(2, '0');
    timeMarkers.push(`${hourStr}:00`);
    if (hour < endHour) {
      timeMarkers.push(`${hourStr}:15`);
      timeMarkers.push(`${hourStr}:30`);
      timeMarkers.push(`${hourStr}:45`);
    }
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="border-b border-border px-6 py-[11px]">
        <div className="flex items-center justify-between gap-4 min-h-[40px]">
          <h2 className="text-[20px] font-medium m-0">Monitoring</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Controls Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
          <Button size="sm">
            Jump to now
          </Button>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-[14px] text-foreground px-2">
              {currentDate}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-[14px] text-foreground px-2">
              {currentTime}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsLocal(!isLocal)}
          >
            <div className="h-4 w-4 rounded-full border-2 border-current flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
            </div>
            {isLocal ? "LOCAL" : "UTC"}
          </Button>
        </div>

        {/* Timeline View */}
        <TooltipProvider>
          <div className="px-6 pt-8 pb-6">
            {/* Timeline navigation arrows and track */}
            <div className="flex items-start gap-4">
              {/* Left arrow */}
              <div className="flex-shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Go to previous hour</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Timeline content area */}
              <div className="flex-1">
                {/* Empty horizontal layer for spacing */}
                <div className="h-8"></div>
                
                {/* Timeline track layer */}
                <div className="relative">
                  {/* Time markers */}
                  <div className="flex justify-between items-start relative">
                    {timeMarkers.map((time, index) => {
                      const isMajor = time.endsWith(':00');
                      return (
                        <div 
                          key={time} 
                          className="flex flex-col items-center"
                          style={{ 
                            position: 'absolute',
                            left: `${(index / (timeMarkers.length - 1)) * 100}%`,
                            transform: 'translateX(-50%)'
                          }}
                        >
                          {/* Tick mark */}
                          <div 
                            className="bg-border"
                            style={{ 
                              width: '1px',
                              height: isMajor ? '12px' : '8px',
                              marginBottom: '4px'
                            }}
                          ></div>
                          {/* Time label */}
                          <span className="text-[14px] text-muted-foreground">
                            {time}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Horizontal line */}
                  <div 
                    className="bg-border absolute top-0"
                    style={{
                      height: '1px',
                      width: '100%',
                      left: 0
                    }}
                  ></div>
                </div>
              </div>

              {/* Right arrow */}
              <div className="flex-shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Go to next hour</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>

      <div className="border-t border-border px-6 py-4 flex items-center justify-start gap-6">
        <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
          <a href="#docs">Docs</a>
        </Button>
        <Button variant="link" className="h-auto p-0 text-foreground text-[14px]" asChild>
          <a href="#support">Support</a>
        </Button>
      </div>
    </div>
  );
}
