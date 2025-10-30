import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-serif text-primary mb-2">ULAMAN</h3>
              <p className="text-xs tracking-[0.3em] text-background/80">
                ECO LUXURY RESORT
              </p>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Experience sustainable luxury amidst Bali's lush jungle at Ulaman
              Eco Luxury Retreat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-4 text-primary">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Villas", href: "/villas" },
                { name: "Spa", href: "/spa" },
                { name: "Dine", href: "/dine" },
                { name: "Retreats", href: "/retreats" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-4 text-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Tabanan, Bali, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+62361234567"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  +62 361 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@ulamanbali.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  info@ulamanbali.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-serif mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "Youtube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center text-background/70 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Ulaman Eco Luxury Resort. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
