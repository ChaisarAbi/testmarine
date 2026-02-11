'use client';

import { Button } from '@/components/ui/button'

interface StepSectionProps {
  onFormClick: () => void
}

export default function StepSection({ onFormClick }: StepSectionProps) {
  const steps = [
    {
      number: '1',
      title: 'Receive Pack + Dates',
      description: 'Get the full programme pack and available intake dates via WhatsApp'
    },
    {
      number: '2',
      title: 'Choose Intake + Reserve',
      description: 'Select your preferred week and confirm your child\'s spot'
    },
    {
      number: '3',
      title: 'Attend + Graduate',
      description: 'Attend the 5-day programme and celebrate with certificate + photos'
    }
  ]

  return (
    <section className="bg-primary/10 py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center text-balance">
          3 Easy Steps to Join
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-lg border border-border text-center h-full">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-primary/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8 mb-4"
            onClick={onFormClick}
          >
            Get the Programme Pack + $75 Off
          </Button>
          <p className="text-foreground/60 text-sm">
            Limited seats available. Act now!
          </p>
        </div>
      </div>
    </section>
  )
}
