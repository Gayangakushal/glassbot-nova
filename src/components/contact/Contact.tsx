
import React from "react";
import { Container } from "@/components/ui/Container";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient -z-10 opacity-50"></div>
      
      <Container className="relative">
        <div className="max-w-xl mx-auto text-center mb-12">
          <div className="glass inline-block px-4 py-2 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
            Get in Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up text-shadow">
            Ready to <span className="text-gradient">Transform</span> Your Digital Experience?
          </h2>
          
          <p className="text-muted-foreground mb-8 animation-delay-200 animate-slide-up">
            Reach out to us and discover how our design system can elevate your products.
          </p>
        </div>

        <div className="max-w-lg mx-auto glass p-8 rounded-2xl animation-delay-400 animate-fade-in">
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background/40 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background/40 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-background/40 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-background/40 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-3 text-sm font-medium transition-colors group"
            >
              Send Message
              <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
