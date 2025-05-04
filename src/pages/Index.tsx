
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Rocket, ImageIcon, Rss, FileText, Wallet, Users, Megaphone, Handshake, Briefcase, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const phases = [
  { id: 'idea', name: 'Idea Building', icon: Lightbulb, description: 'Validate and refine your business concept' },
  { id: 'mvp', name: 'MVP Development', icon: Rocket, description: 'Build a minimum viable product' },
  { id: 'branding', name: 'Branding', icon: ImageIcon, description: 'Create your visual identity and messaging' },
  { id: 'channels', name: 'Channels', icon: Rss, description: 'Establish your distribution channels' },
  { id: 'traction', name: 'Traction', icon: Rocket, description: 'Gain initial users and prove product-market fit' },
  { id: 'legal', name: 'Legal', icon: FileText, description: 'Handle contracts and compliance' },
  { id: 'accounting', name: 'Accounting', icon: Wallet, description: 'Set up financial systems' },
  { id: 'team', name: 'Team Building', icon: Users, description: 'Build your founding team' },
  { id: 'marketing', name: 'Marketing', icon: Megaphone, description: 'Create your go-to-market strategy' },
  { id: 'partnerships', name: 'Partnerships', icon: Handshake, description: 'Form strategic alliances' },
  { id: 'funding', name: 'Funding', icon: Briefcase, description: 'Secure investment for growth' }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Guided Journey From Idea to Funded Startup
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            An automated platform that takes entrepreneurs through every phase of building a successful startup
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-lg">
              <Link to="/journey/idea">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
              <Link to="/consultants">Find Consultants</Link>
            </Button>
          </div>
          
          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Startup Team" 
              className="rounded-lg shadow-xl max-w-full mx-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Journey Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Complete Startup Roadmap</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Navigate through each critical phase of building your startup with expert guidance and tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.slice(0, 6).map((phase) => {
              const Icon = phase.icon;
              return (
                <Card key={phase.id} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-semibold text-xl">{phase.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    
                    <Link 
                      to={`/journey/${phase.id}`}
                      className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
                    >
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/journey">View Full Journey</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Consultant Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Connect With Expert Consultants</h2>
              <p className="text-gray-600 mb-6">
                Access specialized expertise at each stage of your startup journey. Our network of experienced 
                consultants can help you navigate challenges and accelerate growth.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Idea validation', 'Product development', 'Marketing strategy', 'Legal guidance', 'Fundraising support'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="p-1 bg-secondary rounded-full">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild>
                <Link to="/consultants">Browse Consultants</Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Startup Consulting" 
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Startup?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your guided journey today and turn your business idea into reality
          </p>
          
          <Button asChild size="lg" variant="default" className="bg-white text-accent hover:bg-gray-100">
            <Link to="/journey/idea">Begin Your Startup Journey</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
