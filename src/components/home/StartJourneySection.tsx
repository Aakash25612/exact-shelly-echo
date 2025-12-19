import { Link } from "react-router-dom";

export function StartJourneySection() {
  return (
    <section className="py-12 bg-[#0a1628]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-white">
            Start your automation journey with Shelly
          </h2>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 - Smart Home Automation */}
          <Link
            to="/solutions/home"
            className="group relative rounded-lg overflow-hidden h-[280px]"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
              alt="Smart Home Automation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="font-display text-xl font-bold text-white">
                Smart Home Automation
              </h3>
            </div>
          </Link>

          {/* Card 2 - Smart Business & Facilities */}
          <Link
            to="/solutions/business"
            className="group relative rounded-lg overflow-hidden h-[280px]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"
              alt="Smart Business & Facilities"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="font-display text-xl font-bold text-white">
                Smart Business & Facilities
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
