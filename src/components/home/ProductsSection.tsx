import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Wifi, Bluetooth, Check } from "lucide-react";
import productPill from "@/assets/product-pill-device.jpg";
import productPowerStrip from "@/assets/product-power-strip.jpg";
import productWallDisplay from "@/assets/product-wall-display.jpg";
import productWallDisplayXl from "@/assets/product-wall-display-xl.jpg";
import productButtonRemote from "@/assets/product-button-remote.jpg";
import productButtonTough from "@/assets/product-button-tough.jpg";
import productFloodSensor from "@/assets/product-flood-sensor.jpg";
import productTrvThermostat from "@/assets/product-trv-thermostat.jpg";

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
    name: "Your brand BLU H&T Display ZB",
    price: "16,72 €",
    image: productWallDisplay,
    category: "new",
    isNew: true,
    connections: ["zigbee", "wifi", "bluetooth"],
    features: ["Temperature", "Humidity", "Lights"],
  },
  {
    id: 2,
    name: "The Pill by Your brand",
    price: "8,25 €",
    image: productPill,
    category: "new",
    isNew: true,
    connections: ["wifi", "bluetooth"],
    features: ["Sensor data", "Temperature", "Humidity", "Appliances", "Scene activation"],
  },
  {
    id: 3,
    name: "Your brand Power Strip 4 Gen4",
    price: "50,34 €",
    image: productPowerStrip,
    category: "new",
    isNew: true,
    connections: ["matter", "bluetooth", "zigbee", "thread"],
    features: ["Power monitoring", "Energy saving"],
    colors: ["white", "black"],
  },
  {
    id: 4,
    name: "Your brand Wall Display X2i",
    price: "164,90 €",
    image: productWallDisplayXl,
    category: "bestsellers",
    isNew: true,
    connections: [],
    features: [],
    colors: ["black", "white"],
  },
  {
    id: 5,
    name: "Your brand Wall Display XL",
    price: "242,86 €",
    image: productWallDisplayXl,
    category: "new",
    isNew: true,
    connections: ["bluetooth", "zigbee"],
    features: ["Room management", "Scene activation", "Covers & Blinds", "Heating & Cooling", "Appliances"],
    colors: ["black", "gray"],
  },
  {
    id: 6,
    name: "Your brand BLU Button Tough 1 ZB",
    price: "21,30 €",
    image: productButtonTough,
    category: "security",
    isNew: false,
    connections: ["bluetooth", "zigbee"],
    features: ["Scene activation", "Remote control"],
  },
  {
    id: 7,
    name: "Your brand Flood Gen4",
    price: "29,63 €",
    image: productFloodSensor,
    category: "security",
    isNew: true,
    connections: ["wifi", "bluetooth"],
    features: ["Water detection", "Temperature"],
  },
  {
    id: 8,
    name: "Your brand BLU TRV Starter Kit",
    price: "71,28 €",
    image: productTrvThermostat,
    category: "heating",
    isNew: false,
    connections: ["bluetooth"],
    features: ["Temperature", "Heating control", "Scheduling"],
  },
];

// Connection icon component
const ConnectionIcon = ({ type }: { type: string }) => {
  const iconClass = "w-4 h-4 text-[#2596be]";
  
  switch (type) {
    case "wifi":
      return <Wifi className={iconClass} />;
    case "bluetooth":
      return <Bluetooth className={iconClass} />;
    case "zigbee":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 3L12 12L4.5 21H7L12 15L17 21H19.5L12 12L19.5 3H17L12 9L7 3H4.5Z" />
        </svg>
      );
    case "thread":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "matter":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
    default:
      return null;
  }
};

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("new");

  const filteredProducts = activeCategory === "new" || activeCategory === "bestsellers"
    ? products.slice(0, 8)
    : products.filter(p => p.category === activeCategory || p.category === "new").slice(0, 8);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
            Products
          </h2>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button 
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="h-4 w-4 text-gray-400" />
              </button>
              <button 
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <Link 
              to="/products"
              className="px-6 py-2.5 rounded-full border-2 border-[#2596be] text-[#2596be] text-sm font-medium hover:bg-[#2596be] hover:text-white transition-colors"
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? "bg-[#2596be] text-white"
                  : "bg-white text-gray-600 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group flex-shrink-0 w-[220px] md:w-[260px]"
            >
              {/* Image Container */}
              <div className="relative bg-[#f5f5f5] rounded-xl overflow-hidden mb-4 p-4">
                {/* New Badge */}
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#2596be] text-white text-xs font-medium rounded-full z-10">
                    New
                  </span>
                )}
                
                {/* Product Image */}
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Connection Icons */}
                {product.connections.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {product.connections.map((conn, idx) => (
                      <ConnectionIcon key={idx} type={conn} />
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#2596be] transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-900 font-medium text-sm mb-3">{product.price}</p>
              
              {/* Feature Tags */}
              {product.features.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] text-[#2596be] border border-[#2596be]/30 rounded-full"
                    >
                      <Check className="w-2.5 h-2.5" />
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex gap-2">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className={`w-6 h-6 rounded-full border-2 border-gray-200 ${
                        color === "white" ? "bg-white" : 
                        color === "black" ? "bg-gray-900" : 
                        color === "gray" ? "bg-gray-400" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
