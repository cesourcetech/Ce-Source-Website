"use client"

import * as Icons from "lucide-react"
import type { LucideProps} from "lucide-react"

interface DynamicIconProps extends LucideProps {
  name: string
  className?: string
}

export function DynamicIcon({ name, className, ...props }: DynamicIconProps) {
  const Icon = (Icons as any)[name] || Icons.HelpCircle
  return <Icon className={className} {...props} />
}
