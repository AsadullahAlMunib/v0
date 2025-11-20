"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Achievements from "@/components/achievements"
import Events from "@/components/events"
import Projects from "@/components/projects"
import Members from "@/components/members"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Achievements />
      <Events />
      <Projects />
      <Members />
      <Contact />
    </main>
  )
}
