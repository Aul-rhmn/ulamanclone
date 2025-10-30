import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-sm tracking-[0.3em] text-primary uppercase mb-6">
              About Ulaman
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              An award-winning eco-luxury resort offering a unique hideaway
              experience.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
              offers <em>a secluded, lush haven with luxurious amenities and
              impeccable service</em>. Immerse yourself in traditional Balinese
              culture and leave feeling renewed, all while minimizing your
              ecological footprint. Recharge your mind, body, and soul in this
              unique holistic retreat.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Embrace authenticity, balance, and harmony with nature in a healing,
              luxurious environment.
            </p>
            <Link to="/about">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary-glow text-primary-foreground group"
              >
                About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg hover-lift">
              <img
                src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
                alt="Ulaman Eco Luxury Resort"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
