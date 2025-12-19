import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";

const leftNav = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Shelly App", href: "/app" },
  { name: "Shelly X", href: "/shelly-x" },
];

const rightNav = [
  { name: "Partners", href: "/partners" },
  { name: "Corporate", href: "/corporate" },
  { name: "Help & Resources", href: "/help", hasDropdown: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="absolute top-10 left-0 right-0 z-50 px-4 lg:px-8 py-2">
      <nav className="container mx-auto bg-white rounded-full shadow-lg">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          {/* Left Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-5 flex-1">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center gap-1 text-sm font-medium text-shelly-dark hover:text-primary transition-colors"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-shelly-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo - Centered */}
          <Link to="/" className="flex-shrink-0">
            <span className="shelly-logo text-2xl text-shelly-dark italic font-semibold tracking-tight">
              Shelly
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-5 flex-1 justify-end">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center gap-1 text-sm font-medium text-shelly-dark hover:text-primary transition-colors"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>
            ))}
            
            {/* Icons */}
            <div className="flex items-center gap-1 ml-2">
              <button className="p-2 text-shelly-dark hover:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-shelly-dark hover:text-primary transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="relative p-2 text-shelly-dark hover:text-primary transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-1 lg:hidden">
            <button className="p-2 text-shelly-dark hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="relative p-2 text-shelly-dark hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 px-4">
            <div className="flex flex-col gap-4">
              {[...leftNav, ...rightNav].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-shelly-dark hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}