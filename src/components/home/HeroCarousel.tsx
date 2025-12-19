import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Get Your Smart",
    titleLine2: "Home Holiday-",
    titleLine3: "Ready with Shelly",
    cta: "Learn more",
    ctaLink: "/holiday",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Choose Your Shelly",
    titleLine2: "Wall Display",
    description: "Comes in three sizes: 4\", 7\", and 10\" - all sleek, smart, and ready to manage lighting, climate, custom scenes and more.",
    cta: "Shop Now",
    ctaLink: "/products/displays",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1920&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Smarter Power",
    titleLine2: "Management in",
    titleLine3: "a Compact Strip",
    cta: "Shop Now",
    ctaLink: "/products/power-strip",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1920&h=800&fit=crop",
  },
  {
    id: 4,
    preTitle: "Compact",
    title: "Smart Controller",
    features: ["Monitors Sensors Controls", "Outputs and Automates Actions"],
    cta: "Shop Now",
    ctaLink: "/products/pill",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&h=800&fit=crop",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[600px] lg:h-[720px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto flex h-full items-center px-4 lg:px-8 pt-24">
            <div className="max-w-xl text-white">
              {slide.preTitle && (
                <p className="text-lg mb-2 text-white/80">{slide.preTitle}</p>
              )}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.title}
                {slide.titleLine2 && <br />}
                {slide.titleLine2}
                {slide.titleLine3 && <br />}
                {slide.titleLine3}
              </h1>
              {slide.description && (
                <p className="mt-4 text-lg text-white/80 max-w-md">
                  {slide.description}
                </p>
              )}
              {slide.features && (
                <ul className="mt-4 space-y-2 text-white/80">
                  {slide.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
              <Link
                to={slide.ctaLink}
                className="mt-8 inline-block bg-shelly-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-shelly-dark/90 transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
            className={`h-1 rounded-full transition-all ${
              index === currentSlide
                ? "w-10 bg-white"
                : "w-6 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}