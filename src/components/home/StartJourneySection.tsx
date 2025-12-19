import { Link } from "react-router-dom";

export function StartJourneySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Start your automation journey with Shelly
          </h2>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/solutions/home"
            className="group relative rounded-2xl overflow-hidden h-[280px] md:h-[320px]"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&h=600&fit=crop"
              alt="Smart Home Automation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                Smart Home Automation
              </h3>
            </div>
          </Link>

          <Link
            to="/solutions/business"
            className="group relative rounded-2xl overflow-hidden h-[280px] md:h-[320px]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080&h=600&fit=crop"
              alt="Smart Business & Facilities"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                Smart Business & Facilities
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}