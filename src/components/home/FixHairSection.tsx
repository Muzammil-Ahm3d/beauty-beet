import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const hairConcerns = [
  {
    id: "hairfall",
    title: "Hairfall",
    description: "Strengthen roots & reduce shedding",
    products: 18,
    image: "https://picsum.photos/seed/hairfall/400/400", // Switched to Picsum
    color: "bg-primary/5 hover:bg-primary/10",
  },
  {
    id: "hair-thinning",
    title: "Hair Thinning",
    description: "Add volume & thickness",
    products: 12,
    image: "https://picsum.photos/seed/thinning/400/400", // Switched to Picsum
    color: "bg-accent/5 hover:bg-accent/10",
  },
  {
    id: "frizzy-hair",
    title: "Frizzy Hair",
    description: "Smooth & control frizz",
    products: 15,
    image: "https://picsum.photos/seed/frizzy/400/400", // Switched to Picsum
    color: "bg-primary/5 hover:bg-primary/10",
  },
  {
    id: "colored-hair",
    title: "Colored Hair",
    description: "Protect color & repair damage",
    products: 10,
    image: "https://picsum.photos/seed/colored/400/400", // Switched to Picsum
    color: "bg-accent/5 hover:bg-accent/10",
  },
  {
    id: "curly-hair",
    title: "Curly / Coily Hair",
    description: "Define curls & hydrate",
    products: 14,
    image: "https://picsum.photos/seed/curly/400/400", // Switched to Picsum
    color: "bg-primary/5 hover:bg-primary/10",
  },
];

const FixHairSection = () => {
  return (
    <section id="fix-hair" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Problem-Based Shopping
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Fix Your Hair First
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              Tell us your hair concern and we'll show you the right products.
              Expert-curated solutions for every hair type.
            </p>
            <Button variant="outline">
              Browse All Hair Care
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Concerns Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {hairConcerns.map((concern) => (
              <a
                key={concern.id}
                href={`#hair-${concern.id}`}
                className={`group p-4 rounded-2xl ${concern.color} border border-transparent hover:border-primary/20 transition-all duration-300`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow-sm">
                  <img src={concern.image} alt={concern.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {concern.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {concern.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {concern.products} Products
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixHairSection;
