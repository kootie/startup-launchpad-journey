
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bulb, Rocket, Image, Rss, FileText, Wallet, Users, Megaphone, Handshake, Briefcase, Download, Book, Video } from 'lucide-react';

const resourcesData = [
  {
    id: 1,
    title: 'Business Model Canvas Template',
    description: 'A structured template to help you outline your business model and value proposition.',
    type: 'template',
    phase: 'idea',
    icon: Bulb,
    popular: true
  },
  {
    id: 2,
    title: 'Market Research Guide',
    description: 'Step-by-step instructions for conducting effective market research.',
    type: 'guide',
    phase: 'idea',
    icon: Bulb
  },
  {
    id: 3,
    title: 'MVP Planning Worksheet',
    description: 'Define the core features for your minimum viable product.',
    type: 'template',
    phase: 'mvp',
    icon: Rocket
  },
  {
    id: 4,
    title: 'Product Development Roadmap',
    description: 'Template for planning your product development milestones.',
    type: 'template',
    phase: 'mvp',
    icon: Rocket,
    popular: true
  },
  {
    id: 5,
    title: 'Brand Guidelines Template',
    description: 'Create a comprehensive brand guide for your startup.',
    type: 'template',
    phase: 'branding',
    icon: Image
  },
  {
    id: 6,
    title: 'Marketing Channel Assessment',
    description: 'Evaluate and select the best marketing channels for your startup.',
    type: 'worksheet',
    phase: 'channels',
    icon: Rss
  },
  {
    id: 7,
    title: 'User Acquisition Strategy Guide',
    description: 'Learn effective strategies for acquiring your first users.',
    type: 'ebook',
    phase: 'traction',
    icon: Rocket,
    popular: true
  },
  {
    id: 8,
    title: 'Legal Checklist for Startups',
    description: 'Essential legal considerations for new businesses.',
    type: 'checklist',
    phase: 'legal',
    icon: FileText
  },
  {
    id: 9,
    title: 'Financial Projections Template',
    description: 'Excel template for creating startup financial projections.',
    type: 'template',
    phase: 'accounting',
    icon: Wallet
  },
  {
    id: 10,
    title: 'Hiring Guide for Startups',
    description: 'Best practices for recruiting your initial team members.',
    type: 'guide',
    phase: 'team',
    icon: Users,
    popular: true
  },
  {
    id: 11,
    title: 'Marketing Plan Template',
    description: 'Comprehensive template for creating your marketing strategy.',
    type: 'template',
    phase: 'marketing',
    icon: Megaphone
  },
  {
    id: 12,
    title: 'Partnership Agreement Template',
    description: 'Legal template for establishing business partnerships.',
    type: 'template',
    phase: 'partnerships',
    icon: Handshake
  },
  {
    id: 13,
    title: 'Pitch Deck Template',
    description: 'Professional template for creating investor presentations.',
    type: 'template',
    phase: 'funding',
    icon: Briefcase,
    popular: true
  }
];

const getIconForResourceType = (type: string) => {
  switch (type) {
    case 'template':
    case 'worksheet':
    case 'checklist':
      return FileText;
    case 'guide':
    case 'ebook':
      return Book;
    default:
      return Video;
  }
};

const Resources = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Startup Resources</h1>
        <p className="text-gray-600 mb-8">Access templates, guides, and tools for each phase of your startup journey</p>
        
        <div className="mb-8">
          <Input
            placeholder="Search for resources..."
            className="max-w-md"
          />
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="guides">Guides & Books</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesData.map((resource) => {
                const Icon = resource.icon;
                const TypeIcon = getIconForResourceType(resource.type);
                
                return (
                  <Card key={resource.id} className="hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <span className="flex items-center text-xs text-gray-500 mt-1">
                              <TypeIcon size={12} className="mr-1" />
                              <span className="capitalize">{resource.type}</span>
                            </span>
                          </div>
                        </div>
                        {resource.popular && (
                          <Badge variant="secondary" className="ml-2">Popular</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline">
                        <Download size={16} className="mr-2" /> Download
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesData
                .filter(resource => ['template', 'worksheet', 'checklist'].includes(resource.type))
                .map((resource) => {
                  const Icon = resource.icon;
                  const TypeIcon = getIconForResourceType(resource.type);
                  
                  return (
                    <Card key={resource.id} className="hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <Icon className="text-primary" size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{resource.title}</CardTitle>
                              <span className="flex items-center text-xs text-gray-500 mt-1">
                                <TypeIcon size={12} className="mr-1" />
                                <span className="capitalize">{resource.type}</span>
                              </span>
                            </div>
                          </div>
                          {resource.popular && (
                            <Badge variant="secondary" className="ml-2">Popular</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline">
                          <Download size={16} className="mr-2" /> Download
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesData
                .filter(resource => ['guide', 'ebook'].includes(resource.type))
                .map((resource) => {
                  const Icon = resource.icon;
                  const TypeIcon = getIconForResourceType(resource.type);
                  
                  return (
                    <Card key={resource.id} className="hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <Icon className="text-primary" size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{resource.title}</CardTitle>
                              <span className="flex items-center text-xs text-gray-500 mt-1">
                                <TypeIcon size={12} className="mr-1" />
                                <span className="capitalize">{resource.type}</span>
                              </span>
                            </div>
                          </div>
                          {resource.popular && (
                            <Badge variant="secondary" className="ml-2">Popular</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline">
                          <Download size={16} className="mr-2" /> Download
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
          
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesData
                .filter(resource => resource.popular)
                .map((resource) => {
                  const Icon = resource.icon;
                  const TypeIcon = getIconForResourceType(resource.type);
                  
                  return (
                    <Card key={resource.id} className="hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <Icon className="text-primary" size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{resource.title}</CardTitle>
                              <span className="flex items-center text-xs text-gray-500 mt-1">
                                <TypeIcon size={12} className="mr-1" />
                                <span className="capitalize">{resource.type}</span>
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="ml-2">Popular</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline">
                          <Download size={16} className="mr-2" /> Download
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resources;
