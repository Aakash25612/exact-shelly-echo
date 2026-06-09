import { useState } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Thermometer, LayoutGrid, Shield, Power } from "lucide-react";
import solutionLighting from "@/assets/solution-smart-lighting.jpg";
import solutionBlinds from "@/assets/solution-smart-blinds.jpg";
import solutionClimate from "@/assets/solution-smart-climate.jpg";
import solutionSecurity from "@/assets/solution-smart-security.jpg";

const solutions = [
  {
    id: 1,
    title: "Smart Lighting",
    description: "Automate your lights for convenience, ambiance, and energy savings",
    image: solutionLighting,
    icon: Lightbulb,
    link: "/solutions/lighting",
  },
  {
    id: 2,
    title: "Smart Energy",
    description: "Monitor and control your energy consumption in real-time",
    image: solutionBlinds,
    icon: Power,
    link: "/solutions/energy",
  },
  {
    id: 3,
    title: "Smart Heating & Climate",
    description: "Control the temperature remotely, set schedules, and optimize energy use",
    image: solutionClimate,
    icon: Thermometer,
    link: "/solutions/climate",
  },
  {
    id: 4,
    title: "Smart Covers & Blinds",
    description: "Automate your curtains, blinds, roller shutters, and awnings",
    image: solutionBlinds,
    icon: LayoutGrid,
    link: "/solutions/covers",
  },
  {
    id: 5,
    title: "Smart Safety & Security",
    description: "Keep your home safe with smart sensors and monitor it from anywhere",
    image: solutionSecurity,
    icon: Shield,
    link: "/solutions/security",
  },
];

export function BrandSolutionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(5); // Start with security expanded

  return (
    <section className="py-12 bg-[#0a1628]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2 block">
            USE CASES
          </span>
          <h2 className="font-display text-xl md:text-2xl font-bold text-white">
            Your brand solutions
          </h2>
        </div>

        {/* Solutions Accordion - Horizontal expanding cards */}
        <div className="flex gap-2 h-[450px] md:h-[550px]">
          {solutions.map((solution) => {
            const isExpanded = expandedId === solution.id;
            const IconComponent = solution.icon;
            
            return (
              <div
                key={solution.id}
                onClick={() => setExpandedId(solution.id)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isExpanded 
                    ? "flex-[4] md:flex-[3]" 
                    : "flex-[0.6] md:flex-[0.5] hover:flex-[0.8] md:hover:flex-[0.6]"
                }`}
              >
                {/* Background Image */}
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isExpanded 
                    ? "bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-[#0a1628]/20" 
                    : "bg-[#0a1628]/60"
                }`} />
                
                {/* Collapsed State - Just icon at bottom */}
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                  isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}>
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Expanded State - Full content */}
                <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 transition-all duration-500 ${
                  isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}>
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-[280px]">
                    {solution.description}
                  </p>
                  <Link
                    to={solution.link}
                    onClick={(e) => e.stopPropagation()}
                    className="px-6 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
