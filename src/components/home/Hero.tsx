import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/imgae1.jpg",
    alt: "Fresh Nigerian Vegetables",
    title: "Fresh Vegetables",
    subtitle: "Farm-fresh produce daily",
  },
  {
    id: 2,
    image: "/imgae2.jpg",
    alt: "Authentic Nigerian Spices and Peppers",
    title: "Authentic Spices",
    subtitle: "Traditional flavors preserved",
  },
  {
    id: 3,
    image: "/imgae3.jpg",
    alt: "Premium Grains and Legumes",
    title: "Premium Grains",
    subtitle: "Quality you can taste",
  },
  {
    id: 4,
    image: "/imgae4.jpg",
    alt: "Pure Nigerian Palm Oil",
    title: "Pure Palm Oil",
    subtitle: "Cold-pressed excellence",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");

  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Image Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Animated Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Premium Nigerian Foodstuffs
              </span>
            </div>

            {/* Main heading */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 animate-fade-up tracking-tight"
              style={{ 
                animationDelay: "0.1s",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Favour
              <span className="block text-amber-400">Foodie</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mb-4 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Your Trusted Plug for Nigerian Foodstuffs
            </p>

            {/* Description */}
            <p 
              className="text-lg text-white/70 mb-10 max-w-xl animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              From fresh vegetables to authentic spices, we deliver quality Nigerian 
              ingredients straight to your doorstep. Taste the difference of genuine, 
              carefully-sourced produce.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg rounded-full group">
                <Link to="/categories">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Categories
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg rounded-full">
                <a
                  href="https://wa.me/2347030943463"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div 
              className="flex flex-wrap items-center gap-6 mt-12 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-xl">🚚</span>
                </div>
                <span className="text-sm font-medium">Nationwide<br/>Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-xl">✓</span>
                </div>
                <span className="text-sm font-medium">Quality<br/>Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-xl">🌿</span>
                </div>
                <span className="text-sm font-medium">Fresh &<br/>Authentic</span>
              </div>
            </div>
          </div>

          {/* Right Column - Slide Info Card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              {/* Floating Card showing current slide info */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2">
                  Now Featuring
                </div>
                <h3 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/70 text-lg mb-6">
                  {slides[currentSlide].subtitle}
                </p>
                
                {/* Progress indicators */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                      className="group flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 transition-all duration-300 hover:bg-white/30"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-amber-400 w-full"
                            : index < currentSlide
                            ? "bg-white/50 w-full"
                            : "bg-transparent w-0"
                        }`}
                        style={{
                          animation: index === currentSlide && isAutoPlaying ? "progress 5s linear" : "none",
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Slide counter */}
                <div className="flex items-center justify-between mt-6 text-white/60 text-sm">
                  <span>Slide {currentSlide + 1} of {slides.length}</span>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="hover:text-white transition-colors"
                  >
                    {isAutoPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slide Indicators (Mobile) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 lg:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-400 w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-6">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;