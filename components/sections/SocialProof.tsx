export default function SocialProof() {
  return (
    <section className="bg-primary/5 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground mb-8">
            Trusted by schools and parents across Singapore
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['ECDA', 'MOE', 'STEM.org'].map((logo) => (
              <div
                key={logo}
                className="bg-card px-6 py-4 rounded-lg border border-border text-foreground/70 font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
