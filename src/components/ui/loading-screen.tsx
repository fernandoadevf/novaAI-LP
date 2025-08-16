"use client";

import { GradientTracing } from "@/components/ui/gradient-tracing";

export function LoadingScreen() {
  return (
    <GradientTracing
      width={200}
      height={200}
      path="M100,0 L75,75 L125,75 L50,200 L100,100 L50,100 L100,0"
      gradientColors={["#00E0B7", "#00D9A7", "#1a1a2e"]}
    />
  );
} 