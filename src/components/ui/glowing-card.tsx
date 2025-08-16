"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowingCard({ 
  children, 
  className
}: GlowingCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="relative h-full rounded-[1.25rem] border border-gray-700/50 p-4 md:rounded-[1.5rem] md:p-6 bg-[#1a1a2e] backdrop-blur-sm hover:border-[#00E0B7]/30 transition-all duration-300">
        {/* Efeito glow personalizado */}
        <div className="absolute inset-0 rounded-[1.25rem] md:rounded-[1.5rem] bg-gradient-to-r from-[#00E0B7]/10 via-transparent to-[#00E0B7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
} 