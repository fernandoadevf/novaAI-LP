import { cn } from "@/lib/utils"

interface GradientTracingProps {
  className?: string
}

export function GradientTracing({ className }: GradientTracingProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" />
    </div>
  )
} 