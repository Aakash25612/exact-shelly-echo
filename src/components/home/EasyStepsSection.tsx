import { Download, Plug, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Install",
    description: "Simply install the Shelly device behind your existing switch or plug it in. No rewiring needed.",
  },
  {
    number: "02",
    icon: Download,
    title: "Connect",
    description: "Download the Shelly app and connect your device to your Wi-Fi network in seconds.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Control",
    description: "Start controlling your devices from anywhere. Create scenes, schedules, and automations.",
  },
];

export function EasyStepsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart home automation is that easy!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            In 3 easy steps, you can enjoy advanced automation at your home or business
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              
              {/* Step Number */}
              <div className="relative inline-flex mb-8">
                <div className="w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-white font-display font-bold text-lg flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}