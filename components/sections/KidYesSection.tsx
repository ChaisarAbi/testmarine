import { Button } from '@/components/ui/button'

export default function KidYesSection() {
  return (
    <section className="bg-card py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center text-balance">
          Want to Show Your Child? Watch This First
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          Here's what the excitement is really about
        </p>

        {/* Video Placeholder */}
        <div className="mb-12 bg-foreground/10 rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-secondary">
          <div className="text-center">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-foreground/60 font-medium">
              30-Second Camp Trailer Video Placeholder
            </p>
            <p className="text-sm text-foreground/50 mt-2">
              Fast montage: experiments, turtle rescue, games, Oceanarium, graduation
            </p>
          </div>
        </div>

        {/* 3 Reasons Kids Love It */}
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">
          3 Reasons Kids Love It
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-background p-6 rounded-lg border-2 border-primary/30 hover:border-primary transition-colors">
            <div className="text-5xl mb-3">🔬</div>
            <h4 className="text-lg font-bold text-primary mb-2">
              You're a Real Marine Scientist
            </h4>
            <p className="text-foreground/80 text-sm">
              Not pretend—you get actual scientist roles on real ocean missions
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg border-2 border-primary/30 hover:border-primary transition-colors">
            <div className="text-5xl mb-3">⚗️</div>
            <h4 className="text-lg font-bold text-primary mb-2">
              Hands-On Experiments
            </h4>
            <p className="text-foreground/80 text-sm">
              You DO the experiments, discover the answers, and get to take home your creations
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg border-2 border-primary/30 hover:border-primary transition-colors">
            <div className="text-5xl mb-3">🐢</div>
            <h4 className="text-lg font-bold text-primary mb-2">
              Oceanarium Adventure
            </h4>
            <p className="text-foreground/80 text-sm">
              The grand finale—explore real ocean animals and complete special missions there
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base h-12"
          >
            Send Trailer to WhatsApp
          </Button>
          <p className="text-sm text-foreground/60 mt-3">Share with your child in 1 tap</p>
        </div>
      </div>
    </section>
  )
}
