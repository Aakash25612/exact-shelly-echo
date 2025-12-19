import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    category: "new",
  },
  {
    id: 2,
    name: "Shelly Power Strip 4 Gen4",
    price: "59,90 €",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop",
    category: "new",
  },
  {
    id: 3,
    name: "Shelly Wall Display X2i",
    price: "196,23 €",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&h=300&fit=crop",
    category: "new",
  },
  {
    id: 4,
    name: "Shelly Wall Display XL",
    price: "289,00 €",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop",
    category: "bestsellers",
  },
  {
    id: 5,
    name: "Shelly BLU RC Button 4 ZB",
    price: "18,92 €",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    category: "new",
  },
  {
    id: 6,
    name: "Shelly BLU Button Tough 1 ZB",
    price: "21,30 €",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop",
    category: "security",
  },
  {
    id: 7,
    name: "Shelly Flood Gen4",
    price: "29,63 €",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&h=300&fit=crop",
    category: "security",
  },
  {
    id: 8,
    name: "Shelly BLU TRV Starter Kit",
    price: "71,28 €",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop",
    category: "heating",
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("new");

  const filteredProducts = activeCategory === "new" || activeCategory === "bestsellers"
    ? products.slice(0, 8)
    : products.filter(p => p.category === activeCategory || p.category === "new").slice(0, 8);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Products
          </h2>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button 
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              </button>
              <button 
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <Link 
              to="/products"
              className="px-5 py-2 rounded-full border border-shelly-dark text-shelly-dark text-sm font-medium hover:bg-shelly-dark hover:text-white transition-colors"
            >
              Shop all products
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? "bg-shelly-dark text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group flex-shrink-0 w-[160px] md:w-[180px]"
            >
              {/* Image */}
              <div className="relative aspect-square bg-secondary/30 rounded-xl overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="font-medium text-foreground text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <span className="text-sm font-semibold text-foreground">{product.price}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
