import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { name: "Smart Lighting", href: "/products/lighting" },
      { name: "Energy Metering", href: "/products/energy" },
      { name: "Safety & Security", href: "/products/security" },
      { name: "Heating & Temperature", href: "/products/heating" },
      { name: "Smart Locks", href: "/products/locks" },
      { name: "Connectivity", href: "/products/connectivity" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "Home Automation", href: "/solutions/home" },
      { name: "Energy Management", href: "/solutions/energy" },
      { name: "Building Automation", href: "/solutions/building" },
      { name: "Smart Office", href: "/solutions/office" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
      { name: "Corporate", href: "/corporate" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Knowledge Base", href: "/kb" },
      { name: "Community", href: "/community" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl text-white italic font-semibold">
                Shelly
              </span>
            </Link>
            <p className="text-white/50 text-xs max-w-xs mb-5 leading-relaxed">
              Making homes smarter with innovative IoT devices. 
              Control, automate, and monitor your home from anywhere.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-primary hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-3">{section.title}</h4>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-xs text-white/50 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4 lg:px-8 py-4 text-xs text-white/40">
          <p>© 2024 Shelly Europe. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
