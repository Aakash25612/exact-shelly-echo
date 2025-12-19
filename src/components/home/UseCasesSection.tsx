import { Link } from "react-router-dom";
import { Home, Building2, Lightbulb, Thermometer, Shield, Zap } from "lucide-react";

const useCases = [
  {
    id: 1,
    icon: Home,
    title: "Smart Home",
    description: "Transform your living space with intelligent automation for comfort, security, and energy savings.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    link: "/solutions/smart-home",
  },
  {
    id: 2,
    icon: Building2,
    title: "Smart Office",
    description: "Create productive workspaces with automated lighting, climate control, and energy management.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    link: "/solutions/smart-office",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Smart Lighting",
    description: "Set the perfect ambiance with dimmable lights, schedules, and motion-activated scenes.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
    link: "/solutions/lighting",
  },
  {
    id: 4,
    icon: Thermometer,
    title: "Climate Control",
    description: "Maintain optimal comfort while reducing energy costs with smart thermostats and sensors.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=400&fit=crop",
    link: "/solutions/climate",
  },
  {
    id: 5,
    icon: Shield,
    title: "Home Security",
    description: "Protect your property with smart sensors, alerts, and automated responses to threats.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    link: "/solutions/security",
  },
  {
    id: 6,
    icon: Zap,
    title: "Energy Management",
    description: "Monitor consumption, optimize usage, and reduce your energy bills with smart metering.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    link: "/solutions/energy",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            USE CASES
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Endless possibilities for your space
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From homes to offices, Shelly devices adapt to your unique needs and lifestyle.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Link
              key={useCase.id}
              to={useCase.link}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-shelly-dark"
            >
              {/* Background Image */}
              <img
                src={useCase.image}
                alt={useCase.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-shelly-dark via-shelly-dark/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}