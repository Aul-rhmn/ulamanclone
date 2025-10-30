import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import VillasSection from "@/components/VillasSection";
import RetreatsSection from "@/components/RetreatsSection";
import DiningSection from "@/components/DiningSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <AboutSection />
        <VillasSection />
        <RetreatsSection />
        <DiningSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
