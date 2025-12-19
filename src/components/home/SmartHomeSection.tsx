import { Link } from "react-router-dom";

const useCaseIcons = [
  { id: 1, name: "Smart Lighting", icon: "💡" },
  { id: 2, name: "Covers & Blinds", icon: "🪟" },
  { id: 3, name: "Heating & Climate control", icon: "🌡️" },
  { id: 4, name: "Safety & Security", icon: "🔒" },
];

export function SmartHomeSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Smart home automation with
          </h2>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            advanced solutions for
          </h2>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            comfortable living
          </h2>
        </div>

        {/* Device Mockups */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-12">
          {/* Tablet Left */}
          <div className="hidden md:block w-[180px] lg:w-[220px]">
            <div className="bg-shelly-dark rounded-xl p-2 shadow-2xl">
              <div className="bg-[#1a1a2e] rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
                  alt="Shelly App Dashboard"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
          
          {/* Phone Center */}
          <div className="w-[140px] md:w-[160px] lg:w-[180px] -mb-4">
            <div className="bg-shelly-dark rounded-[2rem] p-2 shadow-2xl">
              <div className="bg-[#1a1a2e] rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                <img 
                  src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&h=600&fit=crop" 
                  alt="Shelly Mobile App"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
          
          {/* Tablet Right */}
          <div className="hidden md:block w-[180px] lg:w-[220px]">
            <div className="bg-shelly-dark rounded-xl p-2 shadow-2xl">
              <div className="bg-[#1a1a2e] rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop" 
                  alt="Shelly App Controls"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Use Case Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {useCaseIcons.map((item) => (
            <Link
              key={item.id}
              to={`/solutions/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* App Promo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-secondary/30 rounded-2xl p-8 lg:p-12">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[200px] md:w-[240px]">
                <div className="bg-shelly-dark rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-[#1a1a2e] rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <img 
                      src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&h=600&fit=crop" 
                      alt="Shelly Smart Control App"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
              SHELLY APP
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Shelly Smart Control is free!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Shelly Smart Control app puts your smart home at your fingertips. Available for iOS and 
              Android, it offers seamless device setup, real-time control, and easy automation. Create scenes, 
              monitor power usage, and manage your home from anywhere — all in one secure, intuitive app.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-shelly-dark text-white px-4 py-2.5 rounded-lg hover:bg-shelly-dark/90 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-shelly-dark text-white px-4 py-2.5 rounded-lg hover:bg-shelly-dark/90 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.71.64 1.19s-.3.92-.64 1.19l-2.41 1.41-2.52-2.52 2.52-2.52 2.41 1.25zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
