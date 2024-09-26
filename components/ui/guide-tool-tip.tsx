"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"

interface MiniGuideTooltipProps {
  children: React.ReactNode
  description: string
}

export default function MiniGuideTooltip({ children, description }: MiniGuideTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 group">
            {children}
            <HelpCircle className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}