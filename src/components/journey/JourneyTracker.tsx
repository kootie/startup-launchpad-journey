
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Rocket, ImageIcon, Rss, FileText, Wallet, Users, Megaphone, Handshake, Briefcase } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const phases = [
  { id: 'idea', name: 'Idea Building', icon: Lightbulb },
  { id: 'mvp', name: 'MVP', icon: Rocket },
  { id: 'branding', name: 'Branding', icon: ImageIcon },
  { id: 'channels', name: 'Channels', icon: Rss },
  { id: 'traction', name: 'Traction', icon: Rocket },
  { id: 'legal', name: 'Legal', icon: FileText },
  { id: 'accounting', name: 'Accounting', icon: Wallet },
  { id: 'team', name: 'Team', icon: Users },
  { id: 'marketing', name: 'Marketing', icon: Megaphone },
  { id: 'partnerships', name: 'Partnerships', icon: Handshake },
  { id: 'funding', name: 'Funding', icon: Briefcase }
];

interface JourneyTrackerProps {
  currentPhase: string;
}

export const JourneyTracker: React.FC<JourneyTrackerProps> = ({ currentPhase }) => {
  const navigate = useNavigate();
  const currentIndex = phases.findIndex(phase => phase.id === currentPhase);
  
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex min-w-max items-center px-2">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const isActive = phase.id === currentPhase;
          const isCompleted = index < currentIndex;
          const isLocked = index > currentIndex;
          
          return (
            <React.Fragment key={phase.id}>
              <div 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => !isLocked && navigate(`/journey/${phase.id}`)}
              >
                <div 
                  className={`
                    relative w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? 'bg-accent text-white scale-110' : ''}
                    ${isCompleted ? 'bg-secondary text-white' : ''}
                    ${isLocked ? 'bg-muted text-gray-400' : ''}
                    ${!isLocked && !isActive ? 'group-hover:scale-105' : ''}
                  `}
                >
                  <Icon size={24} />
                  {isCompleted && (
                    <div className="absolute -right-1 -top-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                    </div>
                  )}
                </div>
                <span 
                  className={`
                    text-xs mt-2 font-medium transition-colors
                    ${isActive ? 'text-accent' : ''}
                    ${isCompleted ? 'text-secondary' : ''}
                    ${isLocked ? 'text-gray-400' : ''}
                  `}
                >
                  {phase.name}
                </span>
              </div>
              
              {index < phases.length - 1 && (
                <Separator 
                  className={`
                    w-12 mx-1
                    ${index < currentIndex ? 'bg-secondary' : 'bg-muted'}
                  `} 
                  orientation="horizontal" 
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
