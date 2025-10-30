import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ExternalLink, Leaf, UtensilsCrossed } from "lucide-react";

const Dine = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress"
            alt="E.A.R.T.H Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className={`relative z-10 text-center text-white px-6 max-w-4xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">E.A.R.T.H</h1>
          <p className="text-xl md:text-2xl font-light mb-2">
            Farm to Table Dining
          </p>
          <p className="text-lg font-light">
            Extraordinary • Authentic • Refined • Tropical • Harmony
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
            A world-class gastronomic journey where nature's finest ingredients
            meet culinary craftsmanship.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            At E.A.R.T.H, we celebrate the bounty of Bali with a menu that changes
            with the seasons. Our chef creates innovative dishes using organic
            produce from local farms and our own gardens, ensuring every meal is
            fresh, sustainable, and unforgettable.
          </p>
          <a href="https://earthbyulaman.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground group">
              Visit Restaurant Website
              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-serif text-foreground">
                  Farm to Table Philosophy
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We source 80% of our ingredients from within a 50km radius,
                supporting local farmers and reducing our carbon footprint. Many
                herbs and vegetables come directly from our organic garden,
                harvested just hours before they reach your plate.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress"
                alt="Farm to Table"
                className="w-full rounded-lg hover-lift"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress"
                alt="Chef Arik"
                className="w-full rounded-lg hover-lift"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <UtensilsCrossed className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-serif text-foreground">
                  Meet Chef Arik
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 15 years of culinary expertise, Chef Arik brings together
                traditional Balinese flavors with contemporary techniques. His
                passion for sustainable cooking and local ingredients shines through
                in every dish, creating an unforgettable dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16">
            Culinary Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress",
              "https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress",
              "https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress",
            ].map((image, index) => (
              <div
                key={index}
                className={`aspect-square overflow-hidden rounded-lg hover-lift transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={image}
                  alt={`Dining ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Reserve Your Table
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/80">
            Experience culinary artistry in a breathtaking natural setting
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            Make a Reservation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dine;
