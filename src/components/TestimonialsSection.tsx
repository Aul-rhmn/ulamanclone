import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Best experience I had in Bali out of all the resorts I've been to, customer service was impeccable and the staff were so kind. Mr. Komang made sure we had accommodations and did the best of his ability to make sure we had a warming welcoming, it's unbelievable that everything is made of bamboo.",
    author: "Sarah M.",
  },
  {
    text: "Fabulous architecture, beautiful natural setting and wonderful staff combine to provide a truly memorable experience. Our stay at Ulaman Eco Resort was one we will remember forever. We came to just relax in this amazing setting with its beautiful architecture set around a waterfall and surrounded by rice paddies.",
    author: "James & Linda T.",
  },
  {
    text: "From the moment you step into this incredible resort, you feel like you are in another world. A world where imagination has no limits and where your body and mind can recharge to the fullest. We were blown away by the incredible architecture and design.",
    author: "Michael R.",
  },
  {
    text: "Loved this place so much, I extended and stayed over a week. This place is perfect to relax & heal! The resort is so beautiful, peaceful, quiet and embedded into the nature. The food is delicious and the staff does an excellent service.",
    author: "Emma K.",
  },
  {
    text: "This unique resort feels like stepping into an Avatar movie set with added 5★ service and food. Supercool and comfortable rooms as well. All in all, truly amazing and highly recommended. Being very well-traveled, I have not experienced something like it ever.",
    author: "David C.",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <Quote className="w-16 h-16 text-primary mx-auto mb-6" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="text-center">
                  <p className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-primary text-lg font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
