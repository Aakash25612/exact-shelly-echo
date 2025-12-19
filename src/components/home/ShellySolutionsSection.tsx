import { Link } from "react-router-dom";
import { Lightbulb, Thermometer, LayoutGrid, Shield } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Smart Lighting",
    description: "Automate your lights for convenience, ambiance, and energy savings",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=600&fit=crop",
    icon: Lightbulb,
    link: "/solutions/lighting",
  },
  {
    id: 2,
    title: "Smart Covers & Blinds",
    description: "Automate your curtains, blinds, roller shutters, and awnings for comfort and energy savings",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
    icon: LayoutGrid,
    link: "/solutions/covers",
  },
  {
    id: 3,
    title: "Smart Heating & Climate",
    description: "Control the temperature remotely, set schedules, and optimize energy use",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=600&fit=crop",
    icon: Thermometer,
    link: "/solutions/climate",
  },
  {
    id: 4,
    title: "Smart Safety & Security",
    description: "Keep your home safe with smart sensors and monitor it from anywhere",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=600&fit=crop",
    icon: Shield,
    link: "/solutions/security",
  },
];

export function ShellySolutionsSection() {
  return (
    <section className="py-12 bg-[#0a1628]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 block">
            USE CASES
          </span>
          <h2 className="font-display text-xl md:text-2xl font-bold text-white">
            Shelly solutions
          </h2>
        </div>

        {/* Solutions Grid - 4 vertical cards in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to={solution.link}
              className="group relative rounded-lg overflow-hidden h-[320px] md:h-[400px]"
            >
              {/* Background Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Default State - Just icon at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
              
              {/* Icon at bottom */}
              <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <solution.icon className="w-5 h-5 text-white" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0a1628]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4 max-w-[200px]">
                  {solution.description}
                </p>
                <span className="px-4 py-2 rounded-full border border-white/30 text-white text-xs font-medium hover:bg-white/10 transition-colors">
                  Learn more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
