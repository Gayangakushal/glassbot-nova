
import React from "react";
import { Container } from "@/components/ui/Container";
import { Eye, Layout, Sparkles, Layers, Zap, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: <Eye className="w-5 h-5 text-primary" />,
    title: "Elegant Design",
    description: "Refined aesthetics with attention to every pixel and interaction."
  },
  {
    icon: <Layout className="w-5 h-5 text-primary" />,
    title: "Responsive Layout",
    description: "Perfectly adapts to any screen size for seamless experiences."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: "Stunning Effects",
    description: "Beautiful glassmorphism and subtle animations throughout."
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: "Modular Components",
    description: "Extensible system with reusable, customizable components."
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Performance Optimized",
    description: "Lightning-fast load times and smooth interactions."
  },
  {
    icon: <Lock className="w-5 h-5 text-primary" />,
    title: "Secure Foundation",
    description: "Built on reliable technology with security in mind."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="glass inline-block px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">
            A Complete <span className="text-gradient">Design System</span>
          </h2>
          <p className="text-muted-foreground">
            Built with attention to detail and focused on performance, our system 
            delivers an exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 glass inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background/50 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
