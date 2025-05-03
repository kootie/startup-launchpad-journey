
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { useParams, Navigate } from 'react-router-dom';
import { JourneyTracker } from '@/components/journey/JourneyTracker';
import { ConsultantCard } from '@/components/journey/ConsultantCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Clock, AlertCircle, ArrowRight, Download } from "lucide-react";

const phaseData = {
  idea: {
    title: 'Idea Building',
    description: 'Validate your business concept and refine your value proposition',
    progress: 30,
    tasks: [
      { id: 1, title: 'Market Research', status: 'completed' },
      { id: 2, title: 'Problem Statement', status: 'completed' },
      { id: 3, title: 'Value Proposition', status: 'in-progress' },
      { id: 4, title: 'Competitor Analysis', status: 'not-started' },
      { id: 5, title: 'Customer Interviews', status: 'not-started' }
    ],
    resources: [
      { id: 1, title: 'Business Model Canvas Template', type: 'template' },
      { id: 2, title: 'Guide to Market Research', type: 'guide' },
      { id: 3, title: 'Value Proposition Workshop', type: 'video' },
      { id: 4, title: 'Competitor Analysis Framework', type: 'template' }
    ],
    consultants: [
      {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Business Strategy Consultant',
        specialty: 'Market Validation',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4.9,
        hourlyRate: 150
      },
      {
        id: 2,
        name: 'Michael Chen',
        title: 'Product Strategy Expert',
        specialty: 'Value Proposition',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 4.7,
        hourlyRate: 135
      },
      {
        id: 3,
        name: 'Aisha Patel',
        title: 'Innovation Consultant',
        specialty: 'Product Ideation',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
        rating: 4.8,
        hourlyRate: 165
      }
    ]
  },
  // Additional phase data would be defined here, following the same structure
};

const PhaseDetail = () => {
  const { phaseId } = useParams();
  
  // If phase doesn't exist in our data, redirect to journey page
  if (!phaseId || !phaseData[phaseId as keyof typeof phaseData]) {
    return <Navigate to="/journey" />;
  }
  
  const phase = phaseData[phaseId as keyof typeof phaseData];
  const completedTasks = phase.tasks.filter(task => task.status === 'completed').length;
  const progressPercentage = (completedTasks / phase.tasks.length) * 100;
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{phase.title}</h1>
          <p className="text-gray-600 mb-6">{phase.description}</p>
          
          <div className="bg-white rounded-lg shadow-sm p-4 mb-10">
            <JourneyTracker currentPhase={phaseId} />
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">Phase Progress</h2>
            <span className="text-sm font-medium">{progressPercentage.toFixed(0)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <Tabs defaultValue="tasks">
          <TabsList className="mb-6">
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="consultants">Consultants</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tasks" className="space-y-4">
            {phase.tasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    {task.status === 'completed' && (
                      <CheckCircle2 className="text-secondary" size={20} />
                    )}
                    {task.status === 'in-progress' && (
                      <Clock className="text-accent" size={20} />
                    )}
                    {task.status === 'not-started' && (
                      <AlertCircle className="text-gray-300" size={20} />
                    )}
                    <span 
                      className={`
                        font-medium
                        ${task.status === 'completed' ? 'text-gray-600' : ''}
                        ${task.status === 'in-progress' ? 'text-accent' : ''}
                      `}
                    >
                      {task.title}
                    </span>
                  </div>
                  <Button size="sm" variant={task.status === 'not-started' ? 'outline' : 'default'}>
                    {task.status === 'completed' ? 'Review' : task.status === 'in-progress' ? 'Continue' : 'Start'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phase.resources.map((resource) => (
                <Card key={resource.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-gray-500 capitalize">{resource.type}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} className="mr-1" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="consultants">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phase.consultants.map((consultant) => (
                <ConsultantCard key={consultant.id} {...consultant} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="documentation">
            <Card>
              <CardHeader>
                <CardTitle>Phase Documentation</CardTitle>
                <CardDescription>
                  Record your progress and achievements in this phase to share with potential investors or partners.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-8 border-2 border-dashed border-gray-200 rounded-md text-center">
                  <p className="text-gray-500 mb-4">No documentation has been added yet</p>
                  <Button>Add Documentation</Button>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="font-semibold mb-2">Documentation Tips</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <ArrowRight size={18} className="min-w-[18px] mt-1 text-secondary" />
                      <span>Upload market research findings and data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight size={18} className="min-w-[18px] mt-1 text-secondary" />
                      <span>Include your business model canvas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight size={18} className="min-w-[18px] mt-1 text-secondary" />
                      <span>Document customer interview results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight size={18} className="min-w-[18px] mt-1 text-secondary" />
                      <span>Add competitor analysis findings</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PhaseDetail;
