
import React from "react";
import { Container } from "@/components/ui/Container";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

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
            Reach out to us and discover how our AI solutions can elevate your business.
          </p>
        </div>

        <div className="max-w-lg mx-auto glass p-12 rounded-2xl animation-delay-400 animate-fade-in text-center">
          <Clock size={64} className="mx-auto text-primary mb-6 animate-pulse-soft" />
          <h3 className="text-2xl font-bold mb-4 text-gradient">Coming Soon</h3>
          <p className="text-muted-foreground mb-8">
            Our contact form is currently under development. Please check back later or reach out to us through our social media channels.
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 text-sm font-medium transition-colors group mx-auto"
          >
            Try Gayanga Tech.AI
          </Link>
        </div>
      </Container>
    </section>
  );
}
