import { Link } from "react-router-dom";

const compatibilityLogos = [
  { name: "Google Home", color: "#4285F4" },
  { name: "Amazon Alexa", color: "#00CAFF" },
  { name: "Home Assistant", color: "#41BDF5" },
  { name: "SmartThings", color: "#15BFFF" },
  { name: "Apple HomeKit", color: "#000000" },
];

export function StartJourneySection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
            Start your automation journey with Shelly
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 - Smart Home Automation */}
          <Link
            to="/solutions/home"
            className="group relative rounded-lg overflow-hidden h-[220px]"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Smart Home Automation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h3 className="font-display text-lg font-bold text-white">
                Smart Home Automation
              </h3>
            </div>
          </Link>

          {/* Card 2 - Smart Business & Facilities */}
          <Link
            to="/solutions/business"
            className="group relative rounded-lg overflow-hidden h-[220px]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
              alt="Smart Business & Facilities"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h3 className="font-display text-lg font-bold text-white">
                Smart Business & Facilities
              </h3>
            </div>
          </Link>

          {/* Card 3 - Full Compatibility */}
          <div className="bg-[#0a1628] rounded-lg p-5 flex flex-col justify-between h-[220px]">
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Full compatibility
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">
                Easily connect your Shelly Gen3 and Gen4 devices to a wide range of platforms and protocols.
              </p>
            </div>
            
            {/* Platform Icons */}
            <div className="flex flex-wrap gap-2 my-3">
              {compatibilityLogos.map((logo, index) => (
                <div 
                  key={logo.name} 
                  className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center"
                  title={logo.name}
                >
                  <div 
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: logo.color }}
                  />
                </div>
              ))}
            </div>
            
            <Link
              to="/compatibility"
              className="text-primary font-medium text-xs hover:underline inline-flex items-center gap-1"
            >
              Learn more
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
