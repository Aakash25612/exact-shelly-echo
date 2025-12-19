import { Link } from "react-router-dom";

export function EasyStepsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1628]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-semibold rounded-full mb-4 uppercase tracking-wider">
            GET STARTED
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Smart <span className="text-primary">home automation</span> is
          </h2>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            that easy!
          </h2>
          <p className="text-white/50 text-xs">
            In 3 easy steps, you can enjoy advanced automation at your home or business
          </p>
        </div>

        {/* Steps - 3 Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="bg-[#0d1e36] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="h-[160px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop"
                alt="Get your Shelly device"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e36] via-transparent to-transparent" />
            </div>
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/40 text-xs">Step</span>
                <span className="text-primary text-xl font-bold">01</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">
                Get your Shelly device
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Shelly offers a wide range of smart devices to suit your specific automation needs - whether you want to control lighting, heating, or appliances.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-primary/90 transition-colors"
              >
                Shop now
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#0d1e36] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="h-[160px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=300&fit=crop"
                alt="Install your Shelly device"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e36] via-transparent to-transparent" />
            </div>
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/40 text-xs">Step</span>
                <span className="text-primary text-xl font-bold">02</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">
                Install your Shelly device
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Easily install your Shelly device yourself using our knowledge base, wiring videos, and step-by-step guides.
              </p>
              <Link
                to="/help"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-white/20 transition-colors"
              >
                See Knowledge Base
              </Link>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0d1e36] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="h-[160px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=300&fit=crop"
                alt="Enjoy your new smart home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e36] via-transparent to-transparent" />
            </div>
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/40 text-xs">Step</span>
                <span className="text-primary text-xl font-bold">03</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">
                Enjoy your new smart home
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                With the help of Shelly Smart Control app or any other compatible platform
              </p>
              <Link
                to="/app"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-white/20 transition-colors"
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
