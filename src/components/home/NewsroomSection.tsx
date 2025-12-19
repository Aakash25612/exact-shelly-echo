import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Shelly Smart Home Challenge 2025 Celebrates Top Projects",
    excerpt: "Shelly Group announced the winners of the Shelly Smart Home Challenge 2025 - its global...",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    link: "/news/challenge-2025",
  },
  {
    id: 2,
    title: "Shelly expands in Building & Energy sectors",
    excerpt: "Shelly debuts world's first smart MCBs at IFA 2025 and expands professional circuit breaker lineup...",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop",
    link: "/news/building-energy",
  },
  {
    id: 3,
    title: "Shelly Group Expands into Smart Energy Market with First Co-Branded Devices",
    excerpt: "Shelly Group has announced its first co-branded devices in partnership with global energy and solar...",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    link: "/news/ecoflow-partnership",
  },
  {
    id: 4,
    title: "Shelly Group Revenue Up 29.3% in H1 2025",
    excerpt: "The company doubles its professional installers, expands its global network and reaffirms its record-year forecast...",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
    link: "/news/revenue-h1-2025",
  },
];

export function NewsroomSection() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
              Shelly Newsroom
            </h2>
            <p className="text-muted-foreground text-xs">
              Catch up on the latest launches, integrations, and company milestones.
            </p>
          </div>
          <Link
            to="/news"
            className="px-4 py-1.5 rounded-full border border-primary text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Learn more
          </Link>
        </div>

        {/* News Cards - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-3">
                <h3 className="font-medium text-foreground text-xs mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[10px] line-clamp-2 mb-2">
                  {item.excerpt}
                </p>
                <span className="text-primary text-[10px] font-semibold">
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
