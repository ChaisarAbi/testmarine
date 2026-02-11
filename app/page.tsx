'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import KidYesSection from '@/components/sections/KidYesSection'
import SocialProof from '@/components/sections/SocialProof'
import OutcomesSection from '@/components/sections/OutcomesSection'
import ActivitiesSection from '@/components/sections/ActivitiesSection'
import OceanariumSection from '@/components/sections/OceanariumSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import STEMSection from '@/components/sections/STEMSection'
import FAQSection from '@/components/sections/FAQSection'
import FormSection from '@/components/sections/FormSection'
import StepSection from '@/components/sections/StepSection'
import StickyHeader from '@/components/StickyHeader'

export default function Page() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="bg-background">
      <StickyHeader onFormClick={() => setShowForm(true)} />
      <Hero onFormClick={() => setShowForm(true)} />
      <KidYesSection />
      <SocialProof />
      <OutcomesSection />
      <ActivitiesSection />
      <OceanariumSection />
      <TestimonialsSection />
      <STEMSection />
      <FAQSection />
      {showForm && <FormSection onClose={() => setShowForm(false)} />}
      <StepSection onFormClick={() => setShowForm(true)} />
    </main>
  )
}
