'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface StickyHeaderProps {
  onFormClick: () => void
}

export default function StickyHeader({ onFormClick }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary shadow-lg z-40 px-4 py-4 md:py-3 border-t border-primary/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-primary-foreground font-semibold text-sm md:text-base">
            Ready to Reserve? Only 5 Spots per Week
          </p>
          <p className="text-primary-foreground/80 text-xs">Get $75 off today</p>
        </div>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold whitespace-nowrap"
          onClick={onFormClick}
        >
          Reserve Now
        </Button>
      </div>
    </div>
  )
}
