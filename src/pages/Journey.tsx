
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { JourneyTracker } from '@/components/journey/JourneyTracker';
import { PhaseCard } from '@/components/journey/PhaseCard';
import { Bulb, Rocket, Image, Rss, FileText, Wallet, Users, Megaphone, Handshake, Briefcase } from "lucide-react";

const phases = [
  {
    id: 'idea',
    title: 'Idea Building',
    description: 'Validate your business concept and refine your value proposition',
    icon: Bulb,
    status: 'active' as const,
    progress: 30
  },
  {
    id: 'mvp',
    title: 'MVP Development',
    description: 'Create the first version of your product with essential features',
    icon: Rocket,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Design your logo and establish your brand guidelines',
    icon: Image,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'channels',
    title: 'Channel Development',
    description: 'Establish your distribution and customer acquisition channels',
    icon: Rss,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'traction',
    title: 'Gaining Traction',
    description: 'Attract initial users and validate product-market fit',
    icon: Rocket,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'legal',
    title: 'Legal & Contracts',
    description: 'Set up your legal structure and essential agreements',
    icon: FileText,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'accounting',
    title: 'Financial Systems',
    description: 'Establish accounting practices and financial tracking',
    icon: Wallet,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'team',
    title: 'Team Building',
    description: 'Recruit key team members and establish company culture',
    icon: Users,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'marketing',
    title: 'Marketing Strategy',
    description: 'Create and implement your marketing plan',
    icon: Megaphone,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'partnerships',
    title: 'Strategic Partnerships',
    description: 'Identify and form key business alliances',
    icon: Handshake,
    status: 'locked' as const,
    progress: 0
  },
  {
    id: 'funding',
    title: 'Funding',
    description: 'Prepare for and secure investment for growth',
    icon: Briefcase,
    status: 'locked' as const,
    progress: 0
  }
];

const Journey = () => {
  const [currentPhase, setCurrentPhase] = useState('idea');

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Your Startup Journey</h1>
        <p className="text-gray-600 mb-8">Track your progress and move through each phase of building your startup</p>
        
        <div className="bg-white rounded-lg shadow-sm p-4 mb-10">
          <JourneyTracker currentPhase={currentPhase} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              title={phase.title}
              description={phase.description}
              icon={phase.icon}
              status={phase.status}
              progress={phase.progress}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Journey;
