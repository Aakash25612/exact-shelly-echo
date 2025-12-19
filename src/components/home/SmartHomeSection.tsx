import { Link } from "react-router-dom";
const useCaseIcons = [{
  id: 1,
  name: "Smart Lighting",
  icon: "💡"
}, {
  id: 2,
  name: "Covers & Blinds",
  icon: "🪟"
}, {
  id: 3,
  name: "Heating & Climate control",
  icon: "🌡️"
}, {
  id: 4,
  name: "Safety & Security",
  icon: "🔒"
}];
export function SmartHomeSection() {
  return <section className="py-16 bg-background">
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
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Shelly App Dashboard" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
          
          {/* Phone Center */}
          <div className="w-[140px] md:w-[160px] lg:w-[180px] -mb-4">
            <div className="bg-shelly-dark rounded-[2rem] p-2 shadow-2xl">
              <div className="bg-[#1a1a2e] rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&h=600&fit=crop" alt="Shelly Mobile App" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
          
          {/* Tablet Right */}
          <div className="hidden md:block w-[180px] lg:w-[220px]">
            <div className="bg-shelly-dark rounded-xl p-2 shadow-2xl">
              <div className="bg-[#1a1a2e] rounded-lg overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop" alt="Shelly App Controls" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Use Case Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {useCaseIcons.map(item => <Link key={item.id} to={`/solutions/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </Link>)}
        </div>

        {/* App Promo Section */}
        
      </div>
    </section>;
}