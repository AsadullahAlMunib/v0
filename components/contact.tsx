"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">Have questions or want to join? Reach out to us today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-strong p-6 space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold">contact@ictclub.org</p>
                </div>
              </div>

              <div className="glass-strong p-6 space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="glass-strong p-6 space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold">Tech Hub, Building A</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="glass-strong p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-16 pt-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 ICT Club. All rights reserved. Built with innovation and creativity.</p>
        </div>
      </div>
    </section>
  )
}
