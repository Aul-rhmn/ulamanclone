import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Villas", href: "/villas" },
    { name: "Spa", href: "/spa" },
    { name: "Dine", href: "/dine" },
    { name: "Retreats", href: "/retreats" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 text-primary hover:text-primary-glow transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation Links - Left */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors duration-300 relative group ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="text-primary text-4xl lg:text-5xl font-serif mb-1">
                  <svg
                    width="50"
                    height="60"
                    viewBox="0 0 50 60"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M25 5 C 10 5, 5 15, 5 30 L 5 55 L 12 55 L 12 30 C 12 20, 15 12, 25 12 C 35 12, 38 20, 38 30 L 38 55 L 45 55 L 45 30 C 45 15, 40 5, 25 5 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-xs tracking-[0.3em] text-foreground">
                  ECO LUXURY RESORT
                </div>
              </div>
            </Link>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Stay With Us
              </Button>
            </div>

            {/* Mobile placeholder for layout */}
            <div className="lg:hidden w-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/98 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl tracking-wider uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-8"
              >
                Stay With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
