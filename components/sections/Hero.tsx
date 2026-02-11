'use client';

import { Button } from '@/components/ui/button'

interface HeroProps {
  onFormClick: () => void
}

export default function Hero({ onFormClick }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 px-4 py-20 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Logo Placeholder */}
        <div className="mb-8 flex items-center justify-center">
          <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">
            LOGO
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-center text-balance">
          Your Child Gets a 5-Day Ocean Adventure They'll Never Forget
        </h1>

        {/* Programme Name */}
        <p className="text-xl md:text-2xl text-secondary font-semibold text-center mb-6">
          Junior Marine Biologist Holiday Programme (Ages 6–12)
        </p>

        {/* Sub-heading */}
        <p className="text-lg text-foreground/80 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
          Hands-on marine science experiments, real conservation missions, a special trip to Singapore Oceanarium, and a STEM.org certificate to take home.
        </p>

        {/* Hero Bullets */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card p-4 rounded-lg border-2 border-secondary">
            <p className="text-foreground font-medium text-sm">
              👥 Small groups where every child gets hands-on time (no sitting out)
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border-2 border-secondary">
            <p className="text-foreground font-medium text-sm">
              🐢 Real ocean animals & missions (not just worksheets)
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border-2 border-secondary">
            <p className="text-foreground font-medium text-sm">
              🏅 Certificate + photos + memories that last
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8"
            onClick={onFormClick}
          >
            Reserve a Spot + Get $75 Off
          </Button>
          <p className="text-sm text-foreground/60 font-semibold">Only 5 spots per week</p>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
          >
            Watch the 30-Sec Trailer First
          </Button>
        </div>
      </div>
    </section>
  )
}
