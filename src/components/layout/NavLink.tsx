
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const location = useLocation();
  const isActive = location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <Link
      to={href}
      className={cn(
        "font-medium hover:text-primary transition-colors",
        isActive ? "text-primary" : "text-gray-600",
        className
      )}
    >
      {children}
    </Link>
  );
};
