import { Link } from "react-router-dom";
import { Lightbulb, Zap, Thermometer, Shield, Wifi, PlugZap } from "lucide-react";

const categories = [
  {
    name: "Smart Lighting",
    description: "Switches, dimmers & LED controllers",
    icon: Lightbulb,
    href: "/products/lighting",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "Energy Metering",
    description: "Monitor & optimize consumption",
    icon: Zap,
    href: "/products/energy",
    color: "bg-green-500/10 text-green-600",
  },
  {
    name: "Climate Control",
    description: "Smart thermostats & sensors",
    icon: Thermometer,
    href: "/products/climate",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Security",
    description: "Sensors, alarms & monitoring",
    icon: Shield,
    href: "/products/security",
    color: "bg-red-500/10 text-red-600",
  },
  {
    name: "Connectivity",
    description: "Hubs, gateways & modules",
    icon: Wifi,
    href: "/products/connectivity",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    name: "Smart Plugs",
    description: "Outlets & power monitoring",
    icon: PlugZap,
    href: "/products/plugs",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Explore Our Products
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our complete range of smart home devices designed to make your life easier, 
            safer, and more energy-efficient.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${category.color}`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            View All Products
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}