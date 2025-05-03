
import React from 'react';
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full py-4 px-6 md:px-10 bg-white shadow-sm z-10 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded font-bold text-xl">SL</div>
            <span className="text-primary font-bold text-lg md:text-xl group-hover:text-primary-light transition-colors">
              Startup Launchpad
            </span>
          </a>
        </div>
        
        {!isMobile ? (
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/journey">Journey</NavLink>
            <NavLink href="/consultants">Consultants</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <Button variant="default" className="ml-4">
              Sign In
            </Button>
          </nav>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-6 mt-8">
                <NavLink href="/journey">Journey</NavLink>
                <NavLink href="/consultants">Consultants</NavLink>
                <NavLink href="/resources">Resources</NavLink>
                <Button variant="default" className="mt-4 w-full">
                  Sign In
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};
