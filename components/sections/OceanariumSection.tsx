export default function OceanariumSection() {
  return (
    <section className="bg-gradient-to-b from-secondary/10 to-primary/10 py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center text-balance">
          The Finale: Singapore Oceanarium Expedition Day
        </h2>

        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          {/* Oceanarium Placeholder */}
          <div className="bg-foreground/10 rounded-lg aspect-video flex items-center justify-center mb-8 border-2 border-dashed border-secondary">
            <div className="text-center">
              <div className="text-6xl mb-4">🏛️</div>
              <p className="text-foreground/60 font-medium">
                Singapore Oceanarium Field Trip Photo
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-bold text-primary">
                  Guided exploration designed for ages 6–12
                </h3>
                <p className="text-foreground/70">
                  Expert-led walkthrough tailored for the age group
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">📋</span>
              <div>
                <h3 className="font-bold text-primary">
                  Mission worksheet & scavenger prompts
                </h3>
                <p className="text-foreground/70">
                  Facilitator-led activities to keep engagement high
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">🗣️</span>
              <div>
                <h3 className="font-bold text-primary">
                  "My favourite sea creature" mini presentation
                </h3>
                <p className="text-foreground/70">
                  Kids share what they learned with the group
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-foreground/80 italic">
          This is where kids get excited and parents see it's structured and safe.
        </p>
      </div>
    </section>
  )
}
