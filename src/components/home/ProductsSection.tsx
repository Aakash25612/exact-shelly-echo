import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "new", name: "New" },
  { id: "bestsellers", name: "Bestsellers" },
  { id: "lighting", name: "Smart Lighting" },
  { id: "energy", name: "Energy Metering" },
  { id: "security", name: "Safety & Security" },
  { id: "heating", name: "Heating & Temperature" },
  { id: "locks", name: "Smart Locks" },
];

const products = [
  {
    id: 1,
    name: "The Pill by Shelly",
    price: "9,82 €",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    tags: ["Sensor data", "Temperature", "Humidity", "Appliances", "Scene activation"],
    description: "Compact USB-C powered Wi-Fi and Bluetooth device that connects to various sensors and low-voltage peripherals.",
    category: "new",
  },
  {
    id: 2,
    name: "Shelly Power Strip 4 Gen4",
    price: "59,90 €",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop",
    tags: ["Power monitoring", "Energy saving", "Appliances"],
    description: "Matter-certified, compact smart power strip with 4 individually controlled sockets.",
    colors: ["White", "Black"],
    category: "new",
  },
  {
    id: 3,
    name: "Shelly Wall Display X2i",
    price: "196,23 €",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
    tags: ["Room management", "Scene activation", "Covers & Blinds"],
    description: "Smart home control panel with a 6.95\" color touchscreen and ultra-fast quad-core processor.",
    colors: ["Silver", "Black"],
    category: "new",
  },
  {
    id: 4,
    name: "Shelly Wall Display XL",
    price: "289,00 €",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    tags: ["Room management", "Scene activation", "Heating & Cooling"],
    description: "Smart home control panel with a 10.1\" touch display and built-in relay switching.",
    colors: ["Gray", "Black"],
    category: "bestsellers",
  },
  {
    id: 5,
    name: "Shelly BLU RC Button 4 ZB",
    price: "18,92 €",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    tags: ["Scene activation"],
    description: "Smart four-button remote with Zigbee and Bluetooth, plus built-in magnets.",
    category: "new",
  },
  {
    id: 6,
    name: "Shelly BLU Button Tough 1 ZB",
    price: "21,30 €",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop",
    tags: ["Scene activation"],
    description: "Instantly control your smart devices with just a click.",
    colors: ["Black", "Ivory", "Mocha"],
    category: "security",
  },
  {
    id: 7,
    name: "Shelly Flood Gen4",
    price: "29,63 €",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
    tags: ["Leak detection"],
    description: "Smart flood sensor with a leak sensor cable, ready to catch unexpected issues.",
    category: "security",
  },
  {
    id: 8,
    name: "Shelly BLU TRV Starter Kit",
    price: "71,28 €",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    tags: ["Temperature", "Heating", "Open doors/windows detection"],
    description: "The kit features smart Thermostatic Radiator Valve head and BLU Door/Window sensor.",
    category: "heating",
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("new");
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredProducts = activeCategory === "new" || activeCategory === "bestsellers"
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeCategory || p.category === "new").slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Products
          </h2>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button 
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
              </button>
              <button 
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <Link 
              to="/products"
              className="px-6 py-2.5 rounded-full border border-shelly-dark text-shelly-dark font-medium hover:bg-shelly-dark hover:text-white transition-colors"
            >
              Shop all products
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? "bg-shelly-dark text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-semibold text-foreground">{product.price}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Colors */}
                {product.colors && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-muted-foreground">Color:</span>
                    <div className="flex gap-1">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className="text-xs px-2 py-0.5 rounded border border-border hover:border-primary transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <Button 
                  className="w-full bg-shelly-dark hover:bg-shelly-dark/90 text-white rounded-full"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}