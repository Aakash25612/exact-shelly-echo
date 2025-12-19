import { Zap, Shield, Smartphone, Wifi, Leaf, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Monitor and reduce your energy consumption with smart power metering and automated control.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data stays with you. Local control without mandatory cloud dependency.",
  },
  {
    icon: Smartphone,
    title: "Easy Control",
    description: "Control everything from the Shelly app, voice assistants, or third-party platforms.",
  },
  {
    icon: Wifi,
    title: "Multi-Protocol",
    description: "Wi-Fi, Bluetooth, Zigbee, Z-Wave, and Matter support for maximum compatibility.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Reduce your carbon footprint with intelligent automation and energy management.",
  },
  {
    icon: Settings,
    title: "Easy Installation",
    description: "Retrofit-friendly design. Install behind any switch without replacing your existing setup.",
  },
];

export function WhyShellySection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            WHY SHELLY?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Smart home automation with<br />
            advanced solutions for comfortable living
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover why millions of households trust Shelly for their smart home needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}