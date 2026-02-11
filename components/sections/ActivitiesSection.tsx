export default function ActivitiesSection() {
  const days = [
    {
      day: 'Day 1',
      title: 'Ocean Explorer Bootcamp',
      description: 'Explore ocean layers with hands-on experiments—pressure, waves, and how deep-sea creatures survive'
    },
    {
      day: 'Day 2',
      title: 'Turtle Rescue Mission',
      description: 'Become a turtle expert! Learn about vertebrates vs invertebrates and what turtles really need'
    },
    {
      day: 'Day 3',
      title: 'Baby Ocean Lab',
      description: 'Discover how ocean animal babies are born and grow. Meet the amazing marine mammals'
    },
    {
      day: 'Day 4',
      title: 'Food Chain Detectives',
      description: 'Who eats what? Understand food chains and what real threats ocean animals face'
    },
    {
      day: 'Day 5',
      title: 'Mission Complete + Oceanarium Adventure',
      description: 'Earn your certificate! Plus an exciting field trip to Singapore Oceanarium to see real ocean life'
    }
  ]

  return (
    <section className="bg-card py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center text-balance">
          Daily Missions
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          Each day is an adventure in marine science
        </p>

        <div className="space-y-4">
          {days.map((item, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap">
                  {item.day}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-foreground font-semibold">
            ✨ Your child takes home:{' '}
            <span className="text-primary">
              STEM.org Certificate + mission memories + photos to share
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
