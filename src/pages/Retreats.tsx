import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Heart, Sparkles, Sun, Moon } from "lucide-react";

const programs = [
  {
    name: "Balance & Relaxation",
    duration: "3 Days / 2 Nights",
    description: "Find your center with gentle yoga, meditation, and spa treatments designed to restore peace and harmony.",
    icon: Heart,
    includes: [
      "Daily Yoga Sessions",
      "Guided Meditation",
      "2 Spa Treatments",
      "Healthy Meals",
      "Accommodation",
    ],
  },
  {
    name: "Renewal & Healing",
    duration: "5 Days / 4 Nights",
    description: "Deep healing journey combining energy work, sound therapy, and holistic treatments for mind-body renewal.",
    icon: Sparkles,
    includes: [
      "Reiki Healing Sessions",
      "Sound Healing",
      "Balinese Massage",
      "Detox Meals",
      "Private Consultations",
    ],
  },
  {
    name: "Transformation",
    duration: "7 Days / 6 Nights",
    description: "Intensive program for profound personal growth, featuring daily practices and one-on-one guidance.",
    icon: Sun,
    includes: [
      "Personal Coaching",
      "Advanced Yoga",
      "Breathwork Sessions",
      "Plant Medicine Ceremony",
      "Integration Support",
    ],
  },
  {
    name: "Wellness Weekend",
    duration: "2 Days / 1 Night",
    description: "Perfect introduction to holistic wellness with yoga, spa, and mindfulness practices.",
    icon: Moon,
    includes: [
      "Yoga Classes",
      "Spa Treatment",
      "Meditation Session",
      "Healthy Meals",
      "Nature Walk",
    ],
  },
];

const Retreats = () => {
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
            src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
            alt="Ulaman Retreats"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className={`relative z-10 text-center text-white px-6 max-w-4xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Wellness Retreats</h1>
          <p className="text-xl md:text-2xl font-light">
            Your transformative journey begins here
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
            Discover your path to wellness and growth
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At Ulaman we redefine luxury as an experience that not only pampers the
            senses but also nurtures the soul. Nestled in pristine nature, our
            eco-luxury retreat offers a sanctuary for healing and transformation.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With personalized programs year-round, enjoy dedicated attention and care,
            immersing yourself in relaxation, rejuvenation, or profound inner change
            through meticulously curated activities and treatments.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16">
            Retreat Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className={`bg-card p-8 rounded-lg hover-lift transition-all duration-700 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-foreground mb-2">
                        {program.name}
                      </h3>
                      <p className="text-primary">{program.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground">
                    Book Retreat
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16">
            Daily Activities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Yoga (All Levels)",
                time: "7:00 AM",
                description: "Start your day with energizing yoga practice",
                image: "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
              },
              {
                title: "Sound Healing",
                time: "12:00 PM",
                description: "Immerse in healing vibrations and harmony",
                image: "https://images.prismic.io/ulaman/ZiR1p_Pdc1huKqBs_sound-healing-bali.jpg?auto=format,compress",
              },
              {
                title: "Meditation",
                time: "6:00 PM",
                description: "Evening meditation for deep relaxation",
                image: "https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="group hover-lift transition-all duration-700"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full inline-block mb-3">
                  <span className="text-primary font-medium">{activity.time}</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Begin Your Transformation
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/80">
            Personalized wellness programs designed for your unique journey
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            Inquire About Retreats
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retreats;
