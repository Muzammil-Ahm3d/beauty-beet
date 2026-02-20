import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Scissors, MapPin, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import StatsBanner from "./StatsBanner";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-play effect
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // 4 seconds per slide

    return () => clearInterval(intervalId);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      id: 1,
      title: "Valentine's Week Special",
      subtitle: "Gift the Glow of Love",
      discount: "Flat 30% OFF",
      buttonText: "Shop Valentine's Gift",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop", // Soft pink aesthetic
      color: "bg-rose-50",
      textColor: "text-rose-900",
      accentColor: "bg-rose-500",
    },
    {
      id: 2,
      title: "New Skincare Range",
      subtitle: "Dermatologist Approved",
      discount: "Launch Offer",
      buttonText: "Explore Skincare",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop", // Clean skincare aesthetic
      color: "bg-blue-50",
      textColor: "text-blue-900",
      accentColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Hair Care Revolution",
      subtitle: "Fix Your Hair Today",
      discount: "Buy 2 Get 1 Free",
      buttonText: "Shop Hair Care",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop", // Woman with beautiful long hair
      color: "bg-amber-50",
      textColor: "text-amber-900",
      accentColor: "bg-amber-500",
    },
  ];

  const services = [
    {
      title: "Fix Your Hair",
      icon: Scissors,
      color: "bg-purple-100 text-purple-600",
      link: "/solutions/hair-loss",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Fix Your Skin",
      icon: Sparkles,
      color: "bg-rose-100 text-rose-600",
      link: "/solutions/acne-scars",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Book Salon",
      icon: MapPin,
      color: "bg-amber-100 text-amber-600",
      link: "/book-salon",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Dermatologist",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600",
      link: "/solutions/dermatologist-near-dermatologists", // Correcting link based on context if needed
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section className="pt-[156px] pb-4 bg-background overflow-hidden animate-fade-in">
      <div className="container mx-auto px-4">


        {/* Main Hero Carousel */}
        <div className="mb-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group"
          >
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="relative overflow-hidden rounded-3xl h-[220px] md:h-[380px] w-full group/slide">
                    {/* Full Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-105"
                      />
                      {/* Gradient Overlay for Text Readability - switched to lighter for dark text */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 z-10 text-slate-900 max-w-2xl">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide mb-3 bg-slate-900 text-white shadow-sm`}>
                        {slide.discount}
                      </span>
                      <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-2 leading-tight tracking-tight">
                        {slide.title}
                      </h2>
                      <p className="text-base md:text-xl font-medium text-slate-700 mb-6 max-w-lg leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <Button
                        size="lg"
                        className={`${slide.accentColor} hover:opacity-90 border-none text-white rounded-full px-8 h-10 text-sm md:h-12 md:text-base shadow-lg hover:shadow-xl transition-all font-semibold tracking-wide`}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${current === i ? "w-4 bg-primary" : "bg-primary/30"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Services Navigation Strip */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display text-lg text-foreground">Our Services</h3>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0 sm:mx-0 scrollbar-none snap-x">
            {services.map((service, i) => (
              <Link to={service.link} key={i} className="flex-shrink-0 snap-start">
                <div className="w-[160px] md:w-auto h-[200px] md:h-[180px] rounded-2xl relative overflow-hidden group shadow-soft hover:shadow-medium transition-all cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <div className={`w-8 h-8 rounded-full ${service.color} flex items-center justify-center mb-2 backdrop-blur-sm bg-white/90`}>
                      <service.icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-white text-lg leading-tight drop-shadow-md">
                      {service.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Stats Banner - Full Width */}
      <StatsBanner />
    </section>
  );
};

export default HeroSection;
