import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const villas = [
  {
    name: "Floating Lake Villa",
    description: "Experience serenity on our floating villa surrounded by pristine lake waters.",
    price: "From $450/night",
    images: [
      "https://images.prismic.io/ulaman/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zlbe8aWtHYXtT4Qk_lakevillabali.jpg?auto=format,compress",
    ],
    features: ["Private Pool", "Lake View", "King Bed", "Outdoor Shower"],
  },
  {
    name: "Cocoon Jungle Villa",
    description: "Immerse yourself in nature's embrace within our unique cocoon-shaped villa.",
    price: "From $380/night",
    images: [
      "https://images.prismic.io/ulaman/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZjeopEMTzAJOCiqz_resorts-bali.jpg?auto=format,compress",
    ],
    features: ["Jungle View", "Queen Bed", "Private Balcony", "Bathtub"],
  },
  {
    name: "Avatar Tree House",
    description: "Elevated luxury among the treetops with breathtaking panoramic views.",
    price: "From $520/night",
    images: [
      "https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZjejSkMTzAJOCioK_bali-hotels.jpg?auto=format,compress",
    ],
    features: ["Tree Top View", "Private Pool", "King Bed", "Outdoor Bath"],
  },
  {
    name: "Grand Lagoon Private Pool",
    description: "Spacious luxury villa with your own private pool overlooking the lagoon.",
    price: "From $680/night",
    images: [
      "https://images.prismic.io/ulaman/ZpH1_h5LeNNTxIQh_grand-lagoon.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zj16UkMTzAJOCrGd_hotels-in-bali.jpg?auto=format,compress",
    ],
    features: ["Private Pool", "Lagoon View", "Living Area", "King Bed"],
  },
  {
    name: "Jungle Garden Pool Villa",
    description: "A private oasis surrounded by lush tropical gardens with your own pool.",
    price: "From $580/night",
    images: [
      "https://images.prismic.io/ulaman/Zj2YskMTzAJOCrKK_eco-luxury-resort-indonesia.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Zj2WyUMTzAJOCrJ8_eco-resort-bali.jpg?auto=format,compress",
    ],
    features: ["Private Pool", "Garden View", "King Bed", "Outdoor Dining"],
  },
  {
    name: "Ulin Poolside Deluxe",
    description: "Elegant poolside accommodation with direct access to the main pool.",
    price: "From $320/night",
    images: [
      "https://images.prismic.io/ulaman/Zlfnx6WtHYXtT6xP_ecoresort-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZpH8iR5LeNNTxIQk_ulaman.jpg?auto=format,compress",
    ],
    features: ["Pool Access", "Garden View", "Queen Bed", "Private Terrace"],
  },
];

const Villas = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress"
            alt="Ulaman Villas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Our Villas</h1>
          <p className="text-xl md:text-2xl font-light">Nature's Luxury Awaits</p>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {villas.map((villa, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Images */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {villa.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="aspect-square overflow-hidden rounded-lg hover-lift"
                      >
                        <img
                          src={image}
                          alt={`${villa.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    {villa.name}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {villa.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {villa.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-primary text-2xl font-serif mb-6">{villa.price}</p>
                  <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Villas;
