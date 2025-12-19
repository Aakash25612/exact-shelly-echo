import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Introducing The Pill by Shelly - A New Era of Smart Sensors",
    excerpt: "Discover our latest compact USB-C powered device that connects to various sensors and peripherals.",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Product Launch",
    link: "/news/the-pill-launch",
  },
  {
    id: 2,
    title: "Shelly Gen4 Series: The Future of Home Automation",
    excerpt: "Our new Gen4 products feature the latest Shelly chip with multiprotocol support including Matter.",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=400&fit=crop",
    category: "Technology",
    link: "/news/gen4-series",
  },
  {
    id: 3,
    title: "Smart Holiday Automations: Make Your Home Festive",
    excerpt: "Learn how to create magical holiday lighting scenes and automations with Shelly devices.",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
    category: "Tips & Tricks",
    link: "/news/holiday-automations",
  },
];

export function NewsroomSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              SHELLY NEWSROOM
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Latest news and updates
            </h2>
          </div>
          <Link
            to="/news"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all news
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}