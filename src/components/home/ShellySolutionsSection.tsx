import { Link } from "react-router-dom";

const solutions = [
  {
    id: 1,
    title: "Smart Lighting",
    description: "Automate your lights for convenience, ambiance, and energy savings",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=820&h=600&fit=crop",
    link: "/solutions/lighting",
  },
  {
    id: 2,
    title: "Smart Covers & Blinds",
    description: "Automate your curtains, blinds, roller shutters, and awnings for comfort and energy savings",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=820&h=600&fit=crop",
    link: "/solutions/covers",
  },
  {
    id: 3,
    title: "Smart Heating & Climate control",
    description: "Control the temperature remotely, set schedules, and optimize energy use",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=820&h=600&fit=crop",
    link: "/solutions/climate",
  },
  {
    id: 4,
    title: "Smart Safety & Security",
    description: "Keep your home safe with smart sensors and monitor it from anywhere",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=820&h=600&fit=crop",
    link: "/solutions/security",
  },
];

export function ShellySolutionsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Shelly solutions
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to={solution.link}
              className="group relative rounded-xl overflow-hidden h-[240px] md:h-[280px]"
            >
              {/* Background Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3 max-w-md">
                  {solution.description}
                </p>
                <span className="text-primary font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
