import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Home, Building2, Lightbulb, Thermometer, Shield, Zap, ArrowRight } from "lucide-react";

const solutions = [
  {
    id: 1,
    icon: Home,
    title: "Smart Home",
    description: "Transform your living space with intelligent automation for comfort, security, and energy savings. Control lighting, climate, and appliances from anywhere.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    link: "/solutions/smart-home",
    features: ["Voice control", "Remote access", "Energy monitoring", "Automated scenes"],
  },
  {
    id: 2,
    icon: Building2,
    title: "Smart Office",
    description: "Create productive workspaces with automated lighting, climate control, and energy management. Reduce operational costs while improving comfort.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    link: "/solutions/smart-office",
    features: ["Occupancy sensing", "Climate optimization", "Lighting schedules", "Energy reports"],
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Smart Lighting",
    description: "Set the perfect ambiance with dimmable lights, schedules, and motion-activated scenes. Save energy while creating the mood you want.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop",
    link: "/solutions/lighting",
    features: ["Dimming control", "Color temperature", "Motion activation", "Scheduling"],
  },
  {
    id: 4,
    icon: Thermometer,
    title: "Climate Control",
    description: "Maintain optimal comfort while reducing energy costs with smart thermostats and sensors. Automate heating and cooling based on your schedule.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=600&fit=crop",
    link: "/solutions/climate",
    features: ["Smart thermostats", "Zone control", "Weather integration", "Learning schedules"],
  },
  {
    id: 5,
    icon: Shield,
    title: "Home Security",
    description: "Protect your property with smart sensors, alerts, and automated responses. Get notified instantly about any security concerns.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    link: "/solutions/security",
    features: ["Motion detection", "Door/window sensors", "Instant alerts", "Automated locks"],
  },
  {
    id: 6,
    icon: Zap,
    title: "Energy Management",
    description: "Monitor consumption, optimize usage, and reduce your energy bills with smart metering. Make informed decisions about your energy use.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    link: "/solutions/energy",
    features: ["Real-time monitoring", "Cost tracking", "Peak shaving", "Solar integration"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-shelly-dark to-[#0f2847]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Smart Solutions for<br />Every Space
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Discover how Shelly can transform your home or business with intelligent automation tailored to your needs.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-3/5 p-6 lg:p-8 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {solution.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {solution.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {solution.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={solution.link}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Explore our products and find the perfect solution for your automation needs.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-shelly-dark px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Shop all products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;