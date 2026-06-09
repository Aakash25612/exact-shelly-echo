import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";

const leftNav = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Your brand App", href: "/app" },
  { name: "Your brand X", href: "/brand-x" },
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
    <header className="sticky top-0 left-0 right-0 z-50 px-2 sm:px-4 lg:px-8 py-2 bg-transparent">
      <nav className="w-full lg:container lg:mx-auto">
        {/* Main Header Bar */}
        <div className="bg-white rounded-full shadow-lg">
          <div className="flex h-14 items-center justify-between px-4 lg:px-6">
            {/* Left Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-5 flex-1">
              {leftNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-primary transition-colors"
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
              className="lg:hidden p-2 text-brand-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo - Centered */}
            <Link to="/" className="flex-shrink-0">
              <span className="brand-logo text-2xl text-brand-dark italic font-semibold tracking-tight">
                Your brand
              </span>
            </Link>

            {/* Right Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-5 flex-1 justify-end">
              {rightNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
              ))}
              
              {/* Icons */}
              <div className="flex items-center gap-1 ml-2">
                <button className="p-2 text-brand-dark hover:text-primary transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 text-brand-dark hover:text-primary transition-colors">
                  <User className="h-5 w-5" />
                </button>
                <button className="relative p-2 text-brand-dark hover:text-primary transition-colors">
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
              <button className="p-2 text-brand-dark hover:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="relative p-2 text-brand-dark hover:text-primary transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu - Full width, outside nav container */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-2 sm:mx-4 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          <div className="py-4 px-6">
            <div className="flex flex-col gap-1">
              {[...leftNav, ...rightNav].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center justify-between py-3 px-3 text-sm font-medium text-brand-dark hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Mobile User Actions */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/account"
                className="flex items-center gap-3 py-3 px-3 text-sm font-medium text-brand-dark hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                My Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
