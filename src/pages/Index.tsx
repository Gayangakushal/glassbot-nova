
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Features } from "@/components/features/Features";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".feature-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
