
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ConsultantCard } from '@/components/journey/ConsultantCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';

const consultants = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Business Strategy Consultant',
    specialty: 'Idea Validation',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.9,
    hourlyRate: 150,
    phase: 'idea'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Product Manager',
    specialty: 'MVP Development',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.7,
    hourlyRate: 135,
    phase: 'mvp'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    title: 'Brand Strategist',
    specialty: 'Branding',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 4.8,
    hourlyRate: 165,
    phase: 'branding'
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Growth Marketer',
    specialty: 'Channel Development',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 4.6,
    hourlyRate: 120,
    phase: 'channels'
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    title: 'Sales & Marketing Expert',
    specialty: 'Traction',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 4.9,
    hourlyRate: 145,
    phase: 'traction'
  },
  {
    id: 6,
    name: 'David Kim',
    title: 'Startup Attorney',
    specialty: 'Legal',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    rating: 5.0,
    hourlyRate: 200,
    phase: 'legal'
  },
  {
    id: 7,
    name: 'Olivia Wang',
    title: 'Financial Advisor',
    specialty: 'Accounting',
    avatar: 'https://randomuser.me/api/portraits/women/93.jpg',
    rating: 4.8,
    hourlyRate: 175,
    phase: 'accounting'
  },
  {
    id: 8,
    name: 'Thomas Jackson',
    title: 'HR Consultant',
    specialty: 'Team Building',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4.7,
    hourlyRate: 130,
    phase: 'team'
  },
  {
    id: 9,
    name: 'Sophia Martinez',
    title: 'Marketing Director',
    specialty: 'Marketing',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 4.6,
    hourlyRate: 160,
    phase: 'marketing'
  },
  {
    id: 10,
    name: 'William Lee',
    title: 'Business Development',
    specialty: 'Partnerships',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    rating: 4.8,
    hourlyRate: 150,
    phase: 'partnerships'
  },
  {
    id: 11,
    name: 'Rebecca Taylor',
    title: 'Venture Capitalist',
    specialty: 'Funding',
    avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
    rating: 5.0,
    hourlyRate: 225,
    phase: 'funding'
  },
];

const Consultants = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Expert Consultants</h1>
        <p className="text-gray-600 mb-8">Connect with specialists at each stage of your startup journey</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="md:col-span-3">
            <Input
              placeholder="Search consultants by name, specialty or expertise..."
              className="w-full"
            />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="idea">Idea Validation</SelectItem>
                <SelectItem value="mvp">MVP Development</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="channels">Channels</SelectItem>
                <SelectItem value="traction">Traction</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="accounting">Accounting</SelectItem>
                <SelectItem value="team">Team Building</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="partnerships">Partnerships</SelectItem>
                <SelectItem value="funding">Funding</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Experts</TabsTrigger>
            <TabsTrigger value="idea">Ideation</TabsTrigger>
            <TabsTrigger value="execution">Execution</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultants.map((consultant) => (
                <ConsultantCard key={consultant.id} {...consultant} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="idea">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultants
                .filter(c => ['idea', 'mvp', 'branding'].includes(c.phase))
                .map((consultant) => (
                  <ConsultantCard key={consultant.id} {...consultant} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="execution">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultants
                .filter(c => ['channels', 'traction', 'legal', 'accounting'].includes(c.phase))
                .map((consultant) => (
                  <ConsultantCard key={consultant.id} {...consultant} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="growth">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultants
                .filter(c => ['team', 'marketing', 'partnerships', 'funding'].includes(c.phase))
                .map((consultant) => (
                  <ConsultantCard key={consultant.id} {...consultant} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Consultants;
