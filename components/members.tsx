import { Github, Linkedin, Mail } from "lucide-react"

export default function Members() {
  const members = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "👨‍💻",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      image: "👩‍💻",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Priya Patel",
      role: "Tech Lead",
      image: "👩‍💼",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Marcus Davis",
      role: "Events Coordinator",
      image: "👨‍💼",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Emma Wilson",
      role: "Content Manager",
      image: "👩‍🎨",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "James O'Brien",
      role: "Treasurer",
      image: "👨‍💼",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground">Dedicated team driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="group glass-strong p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-6xl mb-4 inline-block group-hover:scale-125 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.github}
                    className="inline-flex items-center justify-center w-8 h-8 rounded bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="inline-flex items-center justify-center w-8 h-8 rounded bg-accent/20 hover:bg-accent/40 text-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.mail}
                    className="inline-flex items-center justify-center w-8 h-8 rounded bg-secondary/20 hover:bg-secondary/40 text-secondary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
