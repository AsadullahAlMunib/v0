import { Calendar, MapPin } from "lucide-react"

export default function Events() {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "Dec 15, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Lab 201",
      badge: "Workshop",
    },
    {
      title: "Hackathon 2024",
      date: "Jan 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      badge: "Competition",
    },
    {
      title: "AI & Machine Learning Talk",
      date: "Jan 25, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Room 305",
      badge: "Seminar",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Events & <span className="text-accent">Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us for exciting learning opportunities and networking events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="group glass-strong p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-4">
                  {event.badge}
                </div>
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="text-xs">{event.time}</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {event.location}
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
