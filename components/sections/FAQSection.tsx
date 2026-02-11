'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Is it suitable for first-timers or shy kids?',
      answer:
        'Absolutely! Our small-group, facilitator-led approach ensures every child participates at their own pace. We have extensive experience with shy and first-time participants, and our staff is trained to build confidence gradually.'
    },
    {
      question: 'What is the group size and supervision ratio?',
      answer:
        'We maintain a 1:6 facilitator-to-child ratio for ages 6-9, and 1:8 for ages 10-12. Groups are kept small (max 15 kids per session) to ensure high participation and individual attention.'
    },
    {
      question: 'What should my child bring?',
      answer:
        'Please bring: water bottle, sunscreen, change of clothes, closed-toe shoes, and any medications. We provide all science materials and the Oceanarium entry is included.'
    },
    {
      question: 'What about allergies and safety?',
      answer:
        'Please inform us of any allergies or medical conditions during registration. We have a trained first aid staff member on-site at all times, and parental contact info is kept accessible.'
    },
    {
      question: 'What is your refund and reschedule policy?',
      answer:
        'Full refund if cancelled 2 weeks before the programme. Reschedule to another session is available up to 1 week before with no penalty.'
    },
    {
      question: 'Where is the venue and how does pick-up work?',
      answer:
        'Location: [VENUE PLACEHOLDER]. Drop-off: 9:00 AM. Pick-up: 4:30 PM. We send daily photo updates and maintain an open-door policy for parent check-ins.'
    },
    {
      question: 'What time is drop-off and pick-up?',
      answer:
        'Drop-off: 9:00 AM sharp. Pick-up: 4:30 PM sharp. A 5-minute grace period is available for drop-off, but punctual pick-up is essential.'
    },
    {
      question: 'How is the Oceanarium day managed?',
      answer:
        'The Oceanarium is visited on Day 5. Our facilitators lead the entire experience with a structured mission worksheet. Transport is included. We maintain the same small group format for safety and engagement.'
    }
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center text-balance">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 bg-card hover:bg-card/80 flex items-center justify-between font-semibold text-primary text-left transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border text-foreground/80 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
