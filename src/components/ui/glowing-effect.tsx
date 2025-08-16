import { cn } from "@/lib/utils"

interface GlowingEffectProps {
  children: React.ReactNode
  className?: string
}

export function GlowingEffect({ children, className }: GlowingEffectProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  )
} 