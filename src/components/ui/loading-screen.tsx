"use client";

import { GradientTracing } from "@/components/ui/gradient-tracing";

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1a2e]">
      <div className="relative w-32 h-32">
        <GradientTracing className="rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#00E0B7] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
} 