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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
            Shelly solutions
          </h2>
        </div>

        {/* Solutions Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to={solution.link}
              className="group relative rounded-lg overflow-hidden h-[200px] md:h-[220px]"
            >
              {/* Background Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/30" />
              
              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1.5">
                  {solution.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-2.5 max-w-sm">
                  {solution.description}
                </p>
                <span className="text-primary font-medium text-xs group-hover:underline inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
