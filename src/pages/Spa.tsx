import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Waves, Leaf, Heart, Sparkles } from "lucide-react";

const treatments = [
  {
    name: "Balinese Massage",
    duration: "90 minutes",
    price: "$120",
    description: "Traditional full-body massage using gentle stretches and acupressure techniques.",
    icon: Heart,
  },
  {
    name: "Reiki Healing",
    duration: "60 minutes",
    price: "$95",
    description: "Energy healing therapy to promote relaxation and spiritual balance.",
    icon: Sparkles,
  },
  {
    name: "Sound Healing",
    duration: "75 minutes",
    price: "$105",
    description: "Therapeutic sound bath using singing bowls and ancient instruments.",
    icon: Waves,
  },
  {
    name: "Herbal Spa Ritual",
    duration: "120 minutes",
    price: "$180",
    description: "Traditional Balinese spa treatment with locally sourced herbs and flowers.",
    icon: Leaf,
  },
];

const Spa = () => {
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
            src="https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress"
            alt="Riverside Spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className={`relative z-10 text-center text-white px-6 max-w-4xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Riverside Spa</h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Journey to wellness beside flowing waters
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Healing in Harmony with Nature
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our Riverside Spa offers a sanctuary for rejuvenation, where ancient Balinese
            healing traditions meet modern wellness practices. Immerse yourself in treatments
            designed to restore balance to your mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16">
            Our Treatments
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={index}
                  className={`bg-card p-8 rounded-lg hover-lift transition-all duration-700 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-foreground mb-2">
                        {treatment.name}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <span>{treatment.duration}</span>
                        <span className="text-primary text-xl font-serif">
                          {treatment.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {treatment.description}
                      </p>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Book Treatment
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress",
              "https://images.prismic.io/ulaman/ZlA3oiol0Zci9aXx_ulaman-bali.jpg?auto=format,compress",
              "https://images.prismic.io/ulaman/ZiR1p_Pdc1huKqBs_sound-healing-bali.jpg?auto=format,compress",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg hover-lift"
              >
                <img
                  src={image}
                  alt={`Spa ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Spa;
