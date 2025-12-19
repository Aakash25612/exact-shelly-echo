import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Shelly Smart Home Challenge 2025 Celebrates Top Projects",
    excerpt: "Shelly Group announced the winners of the Shelly Smart Home Challenge 2025 - its global...",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    link: "/news/challenge-2025",
  },
  {
    id: 2,
    title: "Shelly expands in Building & Energy sectors",
    excerpt: "Shelly debuts world's first smart MCBs at IFA 2025 and expands professional circuit breaker lineup...",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=400&fit=crop",
    link: "/news/building-energy",
  },
  {
    id: 3,
    title: "Shelly Group Expands into Smart Energy Market with First Co-Branded Devices with EcoFlow",
    excerpt: "Shelly Group has announced its first co-branded devices in partnership with global energy and solar...",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    link: "/news/ecoflow-partnership",
  },
  {
    id: 4,
    title: "Shelly Group Revenue Up 29.3% in H1 2025",
    excerpt: "The company doubles its professional installers, expands its global network and reaffirms its record-year forecast...",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
    link: "/news/revenue-h1-2025",
  },
];

export function NewsroomSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Shelly Newsroom
            </h2>
            <p className="text-muted-foreground text-sm">
              Catch up on the latest launches, integrations, and company milestones.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button 
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
              </button>
              <button 
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <Link
              to="/news"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* News Cards - Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group flex-shrink-0 w-[280px] md:w-[300px] bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                  {item.excerpt}
                </p>
                <span className="text-primary text-xs font-semibold">
                  Read Article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
