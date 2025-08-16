import React from 'react';
import { cn } from '@/lib/utils';

interface RainbowBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const RainbowBorderButton = ({ children, className, onClick }: RainbowBorderButtonProps) => {
  return (
    <div className="relative inline-block">
      {/* Glow effect */}
      <div 
        className="absolute -inset-1 rounded-lg opacity-60 blur-sm"
        style={{
          background: 'linear-gradient(45deg, #00E0B7, #00D9A7, #00C896, #00B785, #00A674, #00E0B7)',
          backgroundSize: '400% 400%',
          animation: 'rainbow-border 3s ease infinite',
        }}
      ></div>
      
      {/* Main border */}
      <div 
        className="relative inline-block"
        style={{
          background: 'linear-gradient(45deg, #00E0B7, #00D9A7, #00C896, #00B785, #00A674, #00E0B7)',
          backgroundSize: '400% 400%',
          animation: 'rainbow-border 3s ease infinite',
          borderRadius: '8px',
          padding: '2px',
        }}
      >
        <button 
          onClick={onClick}
          className={cn(
            "relative px-4 py-2 flex items-center justify-center gap-2 bg-[#1a1a2e] rounded-md text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#00E0B7]/25",
            className
          )}
        >
          {children}
        </button>
      </div>
      
      <style>{`
        @keyframes rainbow-border {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}; 