import { Code, Cpu, Lightbulb } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Coding",
      description: "Master programming languages and build amazing applications",
    },
    {
      icon: Cpu,
      title: "Robotics",
      description: "Explore hardware, automation, and IoT solutions",
    },
    {
      icon: Lightbulb,
      title: "Tech Literacy",
      description: "Stay updated with latest technologies and best practices",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Header */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              About <span className="text-primary">ICT Club</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our club is dedicated to fostering innovation, learning, and collaboration in the field of Information and
              Communication Technology. We bring together passionate individuals to explore, create, and innovate
              through technology.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon
              return (
                <div
                  key={idx}
                  className="group glass-strong p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 mb-4 group-hover:from-primary/50 group-hover:to-accent/50 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
