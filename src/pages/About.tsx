import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const About = () => {
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
            src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
            alt="About Ulaman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">About Ulaman</h1>
          <p className="text-xl md:text-2xl font-light">Where Nature Meets Luxury</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Ulaman Eco Luxury Resort was born from a vision to create a sanctuary
              where sustainable luxury and authentic Balinese culture converge. Nestled
              in the heart of Tabanan, surrounded by lush rice fields and coconut groves,
              our resort represents a new paradigm in eco-conscious hospitality.
            </p>
            <p>
              We believe that true luxury lies not in excess, but in harmony—harmony
              with nature, with local communities, and with oneself. Every aspect of
              Ulaman has been thoughtfully designed to minimize environmental impact
              while maximizing guest experience and well-being.
            </p>
            <p>
              Our bamboo architecture, designed by award-winning architects, seamlessly
              blends with the natural landscape. The structures not only showcase the
              versatility and beauty of sustainable materials but also provide naturally
              cool, spacious environments that invite the outside in.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-16 text-center">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description: "We operate with the utmost respect for our environment, implementing eco-friendly practices in every aspect of our operations.",
              },
              {
                title: "Authenticity",
                description: "Experience genuine Balinese culture through our design, cuisine, and wellness practices rooted in ancient traditions.",
              },
              {
                title: "Community",
                description: "We support local artisans, farmers, and families, ensuring our success contributes to the prosperity of our community.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-primary">✦</div>
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            Recognition & Awards
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Our commitment to excellence and sustainability has been recognized
            internationally
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-secondary rounded-lg">
              <h3 className="text-2xl font-serif text-primary mb-2">
                Best Eco Resort 2024
              </h3>
              <p className="text-muted-foreground">Luxury Travel Magazine</p>
            </div>
            <div className="p-8 bg-secondary rounded-lg">
              <h3 className="text-2xl font-serif text-primary mb-2">
                Sustainable Tourism Award
              </h3>
              <p className="text-muted-foreground">Green Globe Certification</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
