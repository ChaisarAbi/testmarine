'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface FormSectionProps {
  onClose: () => void
}

export default function FormSection({ onClose }: FormSectionProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    childAge: '',
    preferredWeek: '',
    childInterest: '',
    decisionStage: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.whatsapp && formData.childAge) {
      setStep(2)
    }
  }

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to your backend
    const whatsappMessage = `Hi! I'm interested in the Junior Marine Biologist Holiday Programme. Parent Name: ${formData.name}, Child Age: ${formData.childAge}`
    window.open(
      `https://wa.me/65${formData.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold text-primary">
            {step === 1 ? 'Reserve Your Spot' : 'Perfect—Almost Done'}
          </h2>
          <button
            onClick={onClose}
            className="text-foreground/50 hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={step === 1 ? handleStep1Submit : handleStep2Submit}
          className="p-6 space-y-6"
        >
          {step === 1 ? (
            <>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="First name is fine"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="We'll send updates here"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  How Old is Your Child? *
                </label>
                <select
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select age group</option>
                  <option value="6-7">6-7 years old</option>
                  <option value="8-9">8-9 years old</option>
                  <option value="10-11">10-11 years old</option>
                  <option value="12">12 years old</option>
                </select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12"
              >
                Next Step
              </Button>
              <p className="text-xs text-foreground/50 text-center mt-2">
                We'll never spam you—just dates &amp; updates via WhatsApp
              </p>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Which Week Works Best?
                </label>
                <select
                  name="preferredWeek"
                  value={formData.preferredWeek}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Choose your preference</option>
                  <option value="week1">Week 1 (Jan 15-19)</option>
                  <option value="week2">Week 2 (Jan 22-26)</option>
                  <option value="week3">Week 3 (Jan 29-Feb 2)</option>
                  <option value="flexible">I'm flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  What Excites Your Child Most?
                </label>
                <select
                  name="childInterest"
                  value={formData.childInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Pick one</option>
                  <option value="animals">Sea animals &amp; creatures</option>
                  <option value="experiments">Doing experiments</option>
                  <option value="fieldtrips">The oceanarium trip</option>
                  <option value="unsure">Not sure yet—all sounds good!</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Any Questions I Should Answer?
                </label>
                <select
                  name="decisionStage"
                  value={formData.decisionStage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Choose one</option>
                  <option value="exploring">Just exploring options</option>
                  <option value="details">I want all the details</option>
                  <option value="ready">I'm ready to book!</option>
                </select>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent"
                  onClick={() => setStep(1)}
                >
                  Go Back
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Send to WhatsApp
                </Button>
              </div>
            </>
          )}
          <p className="text-xs text-foreground/50 text-center mt-4">
            One quick message on WhatsApp with your dates &amp; next steps
          </p>
        </form>
      </div>
    </div>
  )
}
