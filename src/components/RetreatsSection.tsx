import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RetreatsSection = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-accent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <img
                src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
                alt="Reiki Healing"
                className="w-full h-64 object-cover rounded-lg hover-lift"
              />
              <img
                src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
                alt="Ulaman Retreats"
                className="w-full h-80 object-cover rounded-lg hover-lift"
              />
            </div>
            <div className="pt-12">
              <img
                src="https://images.prismic.io/ulaman/ZlA3oiol0Zci9aXx_ulaman-bali.jpg?auto=format,compress"
                alt="Waterfall Deck"
                className="w-full h-96 object-cover rounded-lg hover-lift"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`text-accent-foreground transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
              Discover your path to wellness and growth.
            </h2>
            <p className="text-accent-foreground/80 text-lg leading-relaxed mb-6">
              At Ulaman we redefine luxury as an experience that not only pampers
              the senses but also nurtures the soul. Nestled in pristine nature,
              our eco-luxury retreat offers a sanctuary for healing and
              transformation.
            </p>
            <p className="text-accent-foreground/80 text-lg leading-relaxed mb-8">
              With personalized programs year-round, enjoy dedicated attention and
              care, immersing yourself in relaxation, rejuvenation, or profound
              inner change through meticulously curated activities and treatments.
              <em className="text-accent-foreground"> Your transformative journey begins here.</em>
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-6 py-3 bg-accent-foreground/10 rounded-full">
                <span className="text-accent-foreground font-medium">
                  Balance - Relaxation
                </span>
              </div>
              <div className="px-6 py-3 bg-accent-foreground/10 rounded-full">
                <span className="text-accent-foreground font-medium">
                  Renewal - Healing
                </span>
              </div>
            </div>

            <Link to="/retreats">
              <Button
                variant="secondary"
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatsSection;
