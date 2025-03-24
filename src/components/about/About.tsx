
import React from "react";
import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";

const BENEFITS = [
  "Premium design aesthetics",
  "Smooth animations and transitions", 
  "Responsive across all devices",
  "Optimized for performance",
  "Accessible and SEO-friendly",
  "Easy to customize and extend"
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-[30%] -right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative animate-fade-in">
              <div className="relative max-w-md mx-auto">
                <div className="glass rounded-2xl overflow-hidden aspect-square">
                  <div className="relative w-full h-full p-6 flex items-center justify-center">
                    {/* Abstract graphical elements */}
                    <div className="absolute top-[20%] left-[15%] w-24 h-24 bg-primary/20 rounded-full blur-md"></div>
                    <div className="absolute bottom-[20%] right-[15%] w-20 h-20 bg-accent/20 rounded-full blur-md"></div>
                    
                    {/* Center content */}
                    <div className="relative z-10 glass-darker p-6 rounded-xl w-3/4 aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gradient mb-2">GN</div>
                        <div className="text-sm font-medium text-muted-foreground">est. 2023</div>
                      </div>
                    </div>
                    
                    {/* Decorative lines */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="glass inline-block px-4 py-2 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up text-shadow">
              Crafting <span className="text-gradient">Premium</span> Experiences
            </h2>
            
            <p className="text-muted-foreground mb-8 animation-delay-200 animate-slide-up">
              We believe in creating digital products that not only look beautiful 
              but also function flawlessly. Our design system combines aesthetic
              excellence with technical precision.
            </p>
            
            <div className="space-y-3 mb-8 animation-delay-400 animate-slide-up">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 glass rounded-full p-1 mr-3">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="animation-delay-600 animate-slide-up">
              <a
                href="#contact"
                className="inline-flex items-center justify-center glass hover:bg-white/5 rounded-full px-6 py-3 text-sm font-medium transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
