import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const villas = [
  {
    name: "Floating Lake Villa",
    images: [
      "https://images.prismic.io/ulaman/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zlbe8aWtHYXtT4Qk_lakevillabali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zlbe8KWtHYXtT4Qj_lakevilla2.jpg?auto=format,compress",
    ],
    link: "/villas/floating-lake",
  },
  {
    name: "Cocoon Jungle Villa",
    images: [
      "https://images.prismic.io/ulaman/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZjeopEMTzAJOCiqz_resorts-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZjeookMTzAJOCiqx_hotel-indonesia.jpg?auto=format,compress",
    ],
    link: "/villas/cocoon-jungle",
  },
  {
    name: "Avatar Tree House",
    images: [
      "https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZjejSkMTzAJOCioK_bali-hotels.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZlbjEqWtHYXtT4TY_skyvillabathroom.jpg?auto=format,compress",
    ],
    link: "/villas/avatar-tree-house",
  },
  {
    name: "Grand Lagoon Private Pool",
    images: [
      "https://images.prismic.io/ulaman/ZpH1_h5LeNNTxIQh_grand-lagoon.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zj16UkMTzAJOCrGd_hotels-in-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zj16TkMTzAJOCrGY_eco-luxury-resort-indonesia.jpg?auto=format,compress",
    ],
    link: "/villas/grand-lagoon",
  },
  {
    name: "Jungle Garden Pool Villa",
    images: [
      "https://images.prismic.io/ulaman/Zj2YskMTzAJOCrKK_eco-luxury-resort-indonesia.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zj2WyUMTzAJOCrJ8_eco-resort-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZpHttR5LeNNTxIQb_flower-bath.jpg?auto=format,compress",
    ],
    link: "/villas/jungle-garden",
  },
  {
    name: "Ulin Poolside Deluxe",
    images: [
      "https://images.prismic.io/ulaman/Zlfnx6WtHYXtT6xP_ecoresort-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZlfnxaWtHYXtT6xN_eco-retreat.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZpH8iR5LeNNTxIQk_ulaman.jpg?auto=format,compress",
    ],
    link: "/villas/ulin-poolside",
  },
];

const VillasSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Grid of Villas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.map((villa, index) => (
            <Link
              key={index}
              to={villa.link}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg hover-lift">
                <div className="aspect-[4/5]">
                  <img
                    src={villa.images[0]}
                    alt={villa.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-serif">{villa.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
            Experience a blend of nature, comfort and luxury like never before.
          </h3>
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VillasSection;
