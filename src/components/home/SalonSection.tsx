import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar, ArrowRight, Search } from "lucide-react";

const featuredSalons = [
  {
    name: "Blush & Bloom",
    location: "Bandra West, Mumbai",
    rating: 4.9,
    reviews: 234,
    services: ["Haircut", "Facial", "Manicure"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "The Hair Studio",
    location: "Koramangala, Bangalore",
    rating: 4.8,
    reviews: 189,
    services: ["Hair Color", "Keratin", "Bridal"],
    image: "https://images.unsplash.com/photo-1521590832169-7dad1a9b19de?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Glow Lounge",
    location: "Connaught Place, Delhi",
    rating: 4.9,
    reviews: 312,
    services: ["Facial", "Cleanup", "Body Massage"],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
  },
];

const SalonSection = () => {
  return (
    <section id="salons" className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Partner Salons
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Salon Near You
          </h2>
          <p className="text-muted-foreground">
            Book appointments at top-rated beauty salons.
            Our partner network ensures quality service in your area.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center gap-3 p-2 bg-card rounded-full border border-border shadow-soft">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter your location or pincode"
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button variant="default" className="rounded-full px-6">
              Find Salons
            </Button>
          </div>
        </div>

        {/* Featured Salons */}
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x mb-10 items-stretch">
          {featuredSalons.map((salon, index) => (
            <div
              key={index}
              className="w-[280px] min-w-[280px] max-w-[280px] flex-shrink-0 snap-start group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-[420px] flex flex-col"
            >
              {/* Image Area - Fixed Height */}
              <div className="h-[224px] w-full bg-muted overflow-hidden relative">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground mb-2">{salon.name}</h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {salon.location}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-600 text-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {salon.rating}
                  </div>
                  <span className="text-xs text-muted-foreground">({salon.reviews} reviews)</span>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {salon.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default">
            View All Salons
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SalonSection;
