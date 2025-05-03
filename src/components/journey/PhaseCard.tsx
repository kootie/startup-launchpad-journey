
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface PhaseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'locked' | 'active' | 'completed';
  progress?: number;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  title,
  description,
  icon: Icon,
  status,
  progress = 0,
}) => {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-md",
      status === 'locked' ? "opacity-60 grayscale" : "",
      status === 'active' ? "border-l-4 border-accent" : "",
      status === 'completed' ? "border-l-4 border-secondary" : ""
    )}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-full",
              status === 'locked' ? "bg-muted" : "",
              status === 'active' ? "bg-accent text-white" : "",
              status === 'completed' ? "bg-secondary text-white" : ""
            )}>
              <Icon size={24} />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {status !== 'locked' && (
            <Badge variant={status === 'completed' ? "secondary" : "outline"}>
              {status === 'completed' ? 'Completed' : 'In Progress'}
            </Badge>
          )}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {status !== 'locked' && (
          <div className="w-full bg-muted rounded-full h-2 mt-4">
            <div 
              className={cn(
                "h-2 rounded-full",
                status === 'active' ? "bg-accent" : "bg-secondary"
              )} 
              style={{width: `${progress}%`}}
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant={status === 'locked' ? "outline" : "default"} 
          disabled={status === 'locked'}
          className={status === 'locked' ? "opacity-50" : ""}
        >
          {status === 'completed' ? 'Review' : status === 'locked' ? 'Locked' : 'Continue'}
        </Button>
      </CardFooter>
    </Card>
  );
};

import { cn } from '@/lib/utils';
