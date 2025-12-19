import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Smart Lighting",
    description: "Automate your lights for convenience, ambiance, and energy savings. Control brightness, color temperature, and create scenes for any mood.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=500&fit=crop",
    link: "/solutions/lighting",
  },
  {
    id: 2,
    title: "Smart Covers & Blinds",
    description: "Automate your curtains, blinds, roller shutters, and awnings for comfort and energy savings. Schedule based on sunrise/sunset.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    link: "/solutions/covers",
  },
  {
    id: 3,
    title: "Smart Heating & Climate Control",
    description: "Automate your heating and cooling systems. Control the temperature remotely, set schedules, and optimize energy use.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=500&fit=crop",
    link: "/solutions/climate",
  },
  {
    id: 4,
    title: "Smart Safety & Security",
    description: "Keep your home safe with smart sensors and monitor it from anywhere. Get instant alerts for motion, doors, windows, and more.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
    link: "/solutions/security",
  },
  {
    id: 5,
    title: "Energy Management",
    description: "Monitor your energy consumption in real-time. Identify energy hogs and optimize usage to reduce your electricity bills.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
    link: "/solutions/energy",
  },
  {
    id: 6,
    title: "Smart Business & Facilities",
    description: "Professional automation solutions for offices, warehouses, and commercial buildings. Scale your smart building infrastructure.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    link: "/solutions/business",
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => (
                <Link
                  key={solution.id}
                  to={solution.link}
                  className="group relative rounded-2xl overflow-hidden h-[300px]"
                >
                  {/* Background Image */}
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                      {solution.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
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