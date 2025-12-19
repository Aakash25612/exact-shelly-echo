import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Smart Energy Management",
    subtitle: "Save up to 30% on your energy bills",
    description: "Monitor and control your home's energy consumption with our intelligent devices.",
    cta: "Shop Energy Meters",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Intelligent Lighting Control",
    subtitle: "Create the perfect ambiance",
    description: "Automate your lighting with smart switches and dimmers for any mood.",
    cta: "Explore Lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1920&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Home Automation Made Simple",
    subtitle: "One app, endless possibilities",
    description: "Connect all your devices and create powerful automations with ease.",
    cta: "Get Started",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1920&h=800&fit=crop",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-navy">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto flex h-full items-center px-4 lg:px-8">
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent animate-fade-in">
                {slide.subtitle}
              </p>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {slide.title}
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {slide.description}
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}