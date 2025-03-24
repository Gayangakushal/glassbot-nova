
import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 backdrop-blur-md bg-background/90 shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold text-gradient tracking-tight"
          >
            Glass<span className="font-light">Nova</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="glass px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-darker animate-fade-in">
          <Container className="py-5">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="glass px-5 py-2 rounded-full text-sm font-medium text-center hover:bg-white/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
