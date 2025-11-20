import { Trophy, Target, Zap } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      stat: "15+",
      title: "Competition Wins",
      description: "Regional and national hackathon victories",
    },
    {
      icon: Target,
      stat: "200+",
      title: "Projects Completed",
      description: "From concept to production deployment",
    },
    {
      icon: Zap,
      stat: "1000+",
      title: "Hours of Learning",
      description: "Workshops, seminars, and mentoring sessions",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground">Recognition of our hard work and dedication to excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <div
                  key={idx}
                  className="group glass-strong p-8 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-2">
                    {achievement.stat}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
