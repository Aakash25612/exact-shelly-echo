import { Link } from "react-router-dom";
import { ShoppingBag, Plug, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Get your Shelly device",
    description: "Shelly offers a wide range of smart devices to suit your specific automation needs - whether you want to control lighting, heating, or appliances. Browse to find the perfect device for your home or business",
    cta: "Shop now",
    ctaLink: "/products",
  },
  {
    number: "02",
    icon: Plug,
    title: "Install your Shelly device",
    description: "Easily install your Shelly device yourself using our knowledge base, wiring videos, and step-by-step guides. If you prefer professional help, Shelly installers are available to ensure a smooth setup.",
    cta: "See Knowledge Base",
    ctaLink: "/help",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Enjoy your new smart home",
    description: "With the help of Shelly Smart Control app or any other compatible platform",
    cta: "See Shelly App",
    ctaLink: "/app",
  },
];

export function EasyStepsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop"
          alt="Smart Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-shelly-dark/95 via-shelly-dark/90 to-shelly-dark/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full mb-6">
            GET STARTED
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Smart home automation is that easy!
          </h2>
          <p className="text-white/70 text-lg">
            In 3 easy steps, you can enjoy advanced automation at your home or business
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              {/* Icon & Step Number */}
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-white/50 text-sm">Step</span>
                  <span className="text-primary text-3xl font-bold ml-2">{step.number}</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              <Link
                to={step.ctaLink}
                className="text-primary font-semibold hover:underline"
              >
                {step.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}