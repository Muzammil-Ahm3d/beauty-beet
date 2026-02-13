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
    <section id="fix-skin" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Concerns Grid */}
          <div className="order-2 lg:order-1 flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x">
            {skinConcerns.map((concern) => (
              <a
                key={concern.id}
                href={`#skin-${concern.id}`}
                className={`w-[280px] min-w-[280px] max-w-[280px] flex-shrink-0 snap-start group p-4 rounded-2xl ${concern.color} border border-transparent hover:border-accent/20 transition-all duration-300 h-[400px] flex flex-col`}
              >
                <div className="h-[220px] w-full rounded-xl overflow-hidden mb-4 shadow-sm relative bg-white/50">
                  <img src={concern.image} alt={concern.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-lg text-slate-900 font-bold mb-1 group-hover:text-accent transition-colors">
                    {concern.title}
                  </h3>
                  <p className="text-sm text-slate-900 font-semibold mb-3">
                    {concern.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-600 font-semibold">
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
            <p className="text-lg text-slate-900 mb-6 max-w-md font-medium">
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
