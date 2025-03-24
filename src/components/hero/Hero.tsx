
import React from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100vh] pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient -z-10"></div>
      <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
              Introducing Gayanga Tech.AI
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up text-shadow">
              Redefining <span className="text-gradient">Digital</span> Experience
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animation-delay-200 animate-slide-up">
              Elevate your digital presence with our cutting-edge AI solutions. 
              Built for modern businesses with precision and elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animation-delay-400 animate-slide-up">
              <a
                href="#features"
                className="inline-flex items-center justify-center glass-darker hover:bg-primary/20 rounded-full px-6 py-3 text-sm font-medium transition-all"
              >
                Explore Features
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 text-sm font-medium transition-colors group"
              >
                Try Now
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-600">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse-soft"></div>
              
              <div className="glass rounded-2xl h-full w-full overflow-hidden p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Abstract Elements */}
                  <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-primary/30 rounded-full blur-md animate-float"></div>
                  <div className="absolute bottom-[10%] right-[10%] w-16 h-16 bg-accent/30 rounded-full blur-md animate-float animation-delay-1000"></div>
                  
                  {/* Central circular element */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent/70 animate-pulse-soft"></div>
                      <div className="absolute inset-3 rounded-full glass"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Orbital ring */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-rotate-slow"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
