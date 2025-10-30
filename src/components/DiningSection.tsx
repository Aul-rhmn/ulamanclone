import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Play } from "lucide-react";

const DiningSection = () => {
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

  const highlights = [
    {
      image:
        "https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress",
      title: "Ulaman Salad",
      description: "Farm to table at Ulaman Bali",
    },
    {
      image:
        "https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress",
      title: "Our Chef: Arik",
      description: "Chef Arik by Ulaman Bali",
    },
    {
      image:
        "https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress",
      title: "E.A.R.T.H Restaurant",
      description: "Earth Restaurant By Ulaman",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-6 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video/Image */}
          <div
            className={`relative overflow-hidden rounded-lg group transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-video">
              <img
                src="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                alt="E.A.R.T.H Restaurant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Play className="text-primary-foreground w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              A world-class gastronomic journey where nature's finest ingredients
              meet culinary craftsmanship.
            </h2>
            <a
              href="https://earthbyulaman.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className="bg-primary hover:bg-primary-glow text-primary-foreground group"
              >
                Visit The Website
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg hover-lift">
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-serif mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
