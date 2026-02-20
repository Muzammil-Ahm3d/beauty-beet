import { ArrowRight } from "lucide-react";

const categories = [
  { id: "shampoos", title: "Shampoos", count: 12, image: "/images/products/cat_shampoos.png" },
  { id: "conditioners", title: "Conditioners", count: 8, image: "/images/products/cat_conditioners.png" },
  { id: "hair-masks", title: "Hair Masks", count: 6, image: "/images/products/cat_hair_masks.png" },
  { id: "hair-serums", title: "Hair Serums", count: 10, image: "/images/products/cat_hair_serums.png" },
  { id: "hair-oils", title: "Hair Oils", count: 14, image: "/images/products/cat_hair_oils.png" },
  { id: "leave-ins", title: "Leave-in Treatments", count: 5, image: "/images/products/cat_leave_in.png" },
  { id: "face-serums", title: "Face Serums", count: 9, image: "/images/products/face_serum.png" },
  { id: "combos", title: "Combos & Kits", count: 8, image: "/images/products/cat_combos.png" },
];

const ProductCategoriesSection = () => {
  return (
    <section id="shop" className="py-4 md:py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Shop by Category
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Browse Products
            </h2>
          </div>
          <a
            href="#all-products"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 scrollbar-none snap-x">

          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="w-[280px] min-w-[280px] max-w-[280px] h-full snap-start flex-shrink-0 group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Area - Fixed Height */}
              <div className="h-[220px] w-full bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="font-display text-sm md:text-base text-foreground mb-0.5 group-hover:text-primary transition-colors truncate">
                  {category.title}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground">
                  {category.count} Products
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center md:hidden">
          <a
            href="#all-products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section >
  );
};

export default ProductCategoriesSection;
