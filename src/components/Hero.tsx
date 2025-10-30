import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-overlay z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress"
        >
          <source
            src="https://ulamanbali.com/_nuxt/ulaman.CXOOp7jG.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-wide">
            ULAMAN
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto tracking-wider font-light">
            Sustainable Luxury in Bali's Lush Jungle
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
