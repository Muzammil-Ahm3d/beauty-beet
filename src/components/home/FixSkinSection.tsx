import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const skinConcerns = [
  {
    id: "acne-prone",
    title: "Acne-Prone Skin",
    description: "Control breakouts & clear skin",
    products: 16,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop",
    color: "bg-accent/5 hover:bg-accent/10",
  },
  {
    id: "dry-skin",
    title: "Dry Skin",
    description: "Deep hydration & moisture lock",
    products: 14,
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop", // Changed
    color: "bg-primary/5 hover:bg-primary/10",
  },
  {
    id: "uneven-tone",
    title: "Uneven Skin Tone",
    description: "Brighten & even out pigmentation",
    products: 12,
    image: "https://images.unsplash.com/photo-1556228720-1957be6a9876?q=80&w=800&auto=format&fit=crop",
    color: "bg-accent/5 hover:bg-accent/10",
  },
  {
    id: "dull-skin",
    title: "Dull Skin",
    description: "Revive radiance & glow",
    products: 15,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop",
    color: "bg-primary/5 hover:bg-primary/10",
  },
];

const FixSkinSection = () => {
  return (
    <section id="fix-skin" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Concerns Grid */}
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
            {skinConcerns.map((concern) => (
              <a
                key={concern.id}
                href={`#skin-${concern.id}`}
                className={`group p-4 rounded-2xl ${concern.color} border border-transparent hover:border-accent/20 transition-all duration-300`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow-sm">
                  <img src={concern.image} alt={concern.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
                  {concern.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {concern.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {concern.products} Products
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Concern-Based Discovery
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Fix Your Skin First
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              Select your skin concern and discover targeted solutions.
              Dermatologist-aligned formulations for visible results.
            </p>
            <Button variant="outline">
              Browse All Skin Care
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixSkinSection;
