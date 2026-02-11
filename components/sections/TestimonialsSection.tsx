export default function TestimonialsSection() {
  const testimonials = [
    {
      type: 'Parent',
      quote:
        'My son wouldn\'t stop talking about the turtle rescue mission. He\'s already asking when the next camp is!',
      author: 'Sarah L.'
    },
    {
      type: 'Child',
      quote: 'I got to be the rescue leader! And the Oceanarium was so cool. I want to be a marine biologist now.',
      author: 'Alex, Age 9'
    },
    {
      type: 'Parent',
      quote:
        'So impressed with how structured everything is. The facilitators really kept the kids engaged and safe.',
      author: 'Michael T.'
    }
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center text-balance">
          Parents & Kids Love It
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="mb-4">
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.type}
                </span>
              </div>
              <p className="text-foreground/80 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-primary font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
