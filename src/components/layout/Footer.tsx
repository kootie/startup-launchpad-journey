
import React from 'react';
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-white p-2 rounded font-bold text-xl">SL</div>
              <span className="text-primary font-bold text-xl">Startup Launchpad</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your automated guide from startup idea to funded business
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/journey" className="text-gray-600 hover:text-primary transition-colors">Journey</a></li>
              <li><a href="/consultants" className="text-gray-600 hover:text-primary transition-colors">Consultants</a></li>
              <li><a href="/resources" className="text-gray-600 hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Startup Launchpad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
