import { ArrowRight, Code2 } from "lucide-react"
import Button from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Code2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary">Welcome to ICT Club</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  ICT Club
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Innovating Through Technology, Coding, and Creativity. Join our community of passionate developers,
                designers, and tech enthusiasts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Join Club
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="glass-strong p-4">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div className="glass-strong p-4">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass-strong p-4">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-sm text-muted-foreground">Events/Year</div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <div className="absolute inset-0 glass-strong rounded-2xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

              {/* Tech icons animation */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">
                    &lt;/&gt;
                  </div>
                  <p className="text-muted-foreground">Technology Made Simple</p>
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-20 h-20 glass-strong rounded-2xl flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="absolute bottom-10 right-10 w-20 h-20 glass-strong rounded-2xl flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
