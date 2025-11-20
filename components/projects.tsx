import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Smart Robotics Controller",
      category: "Robotics",
      description: "IoT-enabled robot control system with real-time monitoring",
      tags: ["Python", "IoT", "Arduino"],
      image: "🤖",
    },
    {
      title: "E-Learning Platform",
      category: "Web Development",
      description: "Interactive platform for online courses and student management",
      tags: ["React", "Node.js", "MongoDB"],
      image: "📚",
    },
    {
      title: "AI Chat Assistant",
      category: "Machine Learning",
      description: "Intelligent chatbot using NLP and deep learning models",
      tags: ["Python", "TensorFlow", "GPT"],
      image: "🤖",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Club <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">Innovative solutions created by our talented members</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass-strong overflow-hidden hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-2 py-1 rounded bg-primary/20 text-primary text-xs font-semibold w-fit mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary/30 text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 rounded bg-primary/20 hover:bg-primary/40 text-primary text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </button>
                    <button className="px-3 py-2 rounded bg-secondary/20 hover:bg-secondary/40 text-secondary transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
