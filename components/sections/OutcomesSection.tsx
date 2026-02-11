export default function OutcomesSection() {
  const outcomes = [
    {
      icon: '🎤',
      title: 'Your Child Finds Their Voice',
      description: 'They\'ll present discoveries to the group, building real confidence in front of peers'
    },
    {
      icon: '🧠',
      title: 'Real Scientific Thinking',
      description: 'They learn: observe → test → discover → explain (not just memorizing facts)'
    },
    {
      icon: '🤝',
      title: 'Works Well With Others',
      description: 'Collaborates on team missions—the kind of teamwork employers look for'
    },
    {
      icon: '🌊',
      title: 'Understands Why It Matters',
      description: 'Learns conservation actions they can actually do at home and in the community'
    }
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center text-balance">
          What Actually Happens in 5 Days
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          Beyond the fun—real skills parents see happening
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{outcome.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {outcome.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
