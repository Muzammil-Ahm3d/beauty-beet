import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const NewArrivalsSection = () => {
  // Logic to identify new products (e.g. assume last 4 or check is_new flag if I added it, schema has is_new)
  const newProducts = products.filter(p => p.is_new).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-1">
                Just Dropped
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                New Arrivals
              </h2>
            </div>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Shop New
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => {
            const displayImage = product.images[0]?.url || "/placeholder.png";
            const price = product.base_price;
            const variant = product.variants[0];
            const originalPrice = variant?.variant_mrp || price;
            const discount = variant?.discount_percentage || 0;

            return (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-accent/5 to-primary/5">
                  <Link to={`/shop/${product.category_code}/${product.subcategory_code}/${product.slug}`} className="block w-full h-full">
                    <img
                      src={displayImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* New Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground flex items-center gap-1 z-10">
                    <Sparkles className="w-3 h-3" />
                    NEW
                  </span>

                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 hover:bg-card flex items-center justify-center shadow-soft transition-all group/heart z-10">
                    <Heart className="w-4 h-4 text-muted-foreground group-hover/heart:text-accent transition-colors" />
                  </button>

                  {/* Quick Add */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <Button variant="default" className="w-full" size="sm">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <Link to={`/shop/${product.category_code}/${product.subcategory_code}/${product.slug}`}>
                    <h3 className="font-display text-base text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">₹{price}</span>
                    {originalPrice > price && (
                      <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
                    )}
                    {discount > 0 && (
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                        {discount}% OFF
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">
            Shop All New Arrivals
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
