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
    <section id="fix-hair" className="py-8 md:py-12 bg-muted/30">
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
            <p className="text-lg text-slate-900 mb-6 max-w-md font-medium">
              Tell us your hair concern and we'll show you the right products.
              Expert-curated solutions for every hair type.
            </p>
            <Button variant="outline">
              Browse All Hair Care
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Concerns Grid */}
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x">
            {hairConcerns.map((concern) => (
              <a
                key={concern.id}
                href={`#hair-${concern.id}`}
                className={`w-[280px] min-w-[280px] max-w-[280px] flex-shrink-0 snap-start group p-4 rounded-2xl ${concern.color} border border-transparent hover:border-primary/20 transition-all duration-300 h-[400px] flex flex-col`}
              >
                <div className="h-[220px] w-full rounded-xl overflow-hidden mb-4 shadow-sm relative bg-white/50">
                  <img src={concern.image} alt={concern.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-lg text-slate-900 font-bold mb-1 group-hover:text-primary transition-colors">
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
