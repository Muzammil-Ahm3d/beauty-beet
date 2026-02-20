import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar, ArrowRight, Search, Award, Clock } from "lucide-react";

const dermatologists = [
  {
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist & Cosmetologist",
    location: "Bandra, Mumbai",
    rating: 4.9,
    reviews: 156,
    experience: "12 years",
    nextSlot: "Today, 4:00 PM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. Arjun Mehta",
    specialization: "Hair & Scalp Specialist",
    location: "Indiranagar, Bangalore",
    rating: 4.8,
    reviews: 203,
    experience: "15 years",
    nextSlot: "Tomorrow, 10:00 AM",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. Neha Kapoor",
    specialization: "Skin & Laser Expert",
    location: "South Delhi",
    rating: 4.9,
    reviews: 289,
    experience: "10 years",
    nextSlot: "Today, 6:30 PM",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop",
  },
];

const DermatologistSection = () => {
  return (
    <section id="dermatologists" className="py-4 md:py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Expert Consultations
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Dermatologist Near You
          </h2>
          <p className="text-muted-foreground">
            Get expert advice from certified dermatologists.
            Personalized consultations for your skin and hair concerns.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 p-2 bg-card rounded-full border border-border shadow-soft">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by location or specialization"
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button variant="default" className="rounded-full px-6">
              Find Experts
            </Button>
          </div>
          <Button variant="outline" className="rounded-full whitespace-nowrap">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Dermatologists Grid */}
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x">
          {dermatologists.map((doctor, index) => (
            <div
              key={index}
              className="w-[280px] min-w-[280px] max-w-[280px] flex-shrink-0 snap-start group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-[450px] flex flex-col"
            >
              {/* Image Area - Fixed Height */}
              <div className="h-[240px] w-full bg-muted overflow-hidden relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Header */}
              <div className="p-5 pb-0">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg text-foreground truncate">{doctor.name}</h3>
                  <p className="text-sm text-primary font-medium">{doctor.specialization}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {doctor.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Stats Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-600 text-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {doctor.rating}
                  </div>
                  <span className="text-xs text-muted-foreground">({doctor.reviews} reviews)</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Award className="w-3.5 h-3.5" />
                    {doctor.experience}
                  </div>
                </div>

                {/* Next Available */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-primary/5">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Next Available: <span className="font-medium text-primary">{doctor.nextSlot}</span>
                  </span>
                </div>

                <Button variant="default" className="w-full" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DermatologistSection;
