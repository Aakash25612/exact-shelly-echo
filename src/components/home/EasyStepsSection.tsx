import { Link } from "react-router-dom";

export function EasyStepsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-shelly-dark" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full mb-4">
            GET STARTED
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Smart <span className="text-primary">home automation</span> is
          </h2>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            that easy!
          </h2>
          <p className="text-white/60 text-sm">
            In 3 easy steps, you can enjoy advanced automation at your home or business
          </p>
        </div>

        {/* Steps - 3 Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#0a1628] rounded-xl overflow-hidden">
            {/* Image */}
            <div className="h-[200px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop"
                alt="Get your Shelly device"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/50 text-sm">Step</span>
                <span className="text-primary text-2xl font-bold">01</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                Get your Shelly device
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Shelly offers a wide range of smart devices to suit your specific automation needs - whether you want to control lighting, heating, or appliances.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Shop now
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#0a1628] rounded-xl overflow-hidden">
            {/* Image */}
            <div className="h-[200px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=300&fit=crop"
                alt="Install your Shelly device"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/50 text-sm">Step</span>
                <span className="text-primary text-2xl font-bold">02</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                Install your Shelly device
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Easily install your Shelly device yourself using our knowledge base, wiring videos, and step-by-step guides.
              </p>
              <Link
                to="/help"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
              >
                See Knowledge Base
              </Link>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0a1628] rounded-xl overflow-hidden">
            {/* Image */}
            <div className="h-[200px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=300&fit=crop"
                alt="Enjoy your new smart home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/50 text-sm">Step</span>
                <span className="text-primary text-2xl font-bold">03</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                Enjoy your new smart home
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                With the help of Shelly Smart Control app or any other compatible platform
              </p>
              <Link
                to="/app"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
              >
                See Shelly App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
