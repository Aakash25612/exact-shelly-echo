import { Link } from "react-router-dom";

const compatibilityLogos = [
  { name: "Google Home", icon: "🏠" },
  { name: "Amazon Alexa", icon: "📢" },
  { name: "Home Assistant", icon: "🏡" },
  { name: "SmartThings", icon: "⚡" },
  { name: "Apple HomeKit", icon: "🍎" },
];

export function StartJourneySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Start your automation journey with Shelly
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 - Smart Home Automation */}
          <Link
            to="/solutions/home"
            className="group relative rounded-xl overflow-hidden h-[280px]"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Smart Home Automation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="font-display text-xl font-bold text-white">
                Smart Home Automation
              </h3>
            </div>
          </Link>

          {/* Card 2 - Smart Business & Facilities */}
          <Link
            to="/solutions/business"
            className="group relative rounded-xl overflow-hidden h-[280px]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
              alt="Smart Business & Facilities"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="font-display text-xl font-bold text-white">
                Smart Business & Facilities
              </h3>
            </div>
          </Link>

          {/* Card 3 - Full Compatibility */}
          <div className="bg-shelly-dark rounded-xl p-6 flex flex-col justify-between h-[280px]">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Full compatibility
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Easily connect your Shelly Gen3 and Gen4 devices to a wide range of platforms and protocols.
              </p>
            </div>
            
            {/* Platform Icons */}
            <div className="flex flex-wrap gap-3 my-4">
              {compatibilityLogos.map((logo) => (
                <div 
                  key={logo.name} 
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"
                  title={logo.name}
                >
                  <span className="text-lg">{logo.icon}</span>
                </div>
              ))}
            </div>
            
            <Link
              to="/compatibility"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Learn more
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
