import { Truck } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-shelly-dark text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        {/* Free Delivery Message */}
        <div className="flex-1 flex justify-center items-center gap-2">
          <Truck className="h-4 w-4" />
          <span>
            FREE DELIVERY for orders over <span className="font-semibold">79€</span>
          </span>
        </div>

        {/* Language & Country */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span>English</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-white/70">Delivery country:</span>
            <button className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <img 
                src="https://flagcdn.com/w20/de.png" 
                alt="Germany" 
                className="w-5 h-auto rounded-sm"
              />
              <span>Germany</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}