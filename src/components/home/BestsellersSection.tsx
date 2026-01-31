import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const BestsellersSection = () => {
  // Products updated check - Use V2 properties
  const bestsellers = products.filter(p => p.is_bestseller).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Customer Favorites
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Bestsellers
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => {
            const displayImage = product.images[0]?.url || "/placeholder.png";
            const price = product.base_price;
            // Logic to show MRP if available in first variant
            const variant = product.variants[0];
            const originalPrice = variant?.variant_mrp || price;
            const discount = variant?.discount_percentage || 0;

            return (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square bg-muted">
                  <Link to={`/shop/${product.category_code}/${product.subcategory_code}/${product.slug}`} className="block w-full h-full">
                    <img
                      src={displayImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Tag via Badge field or inferred */}
                  {product.tags.includes("premium") && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-amber-500 text-white shadow-sm">
                      Premium
                    </span>
                  )}

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
                    <h3 className="font-display text-base text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews_count})</span>
                  </div>

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
            View All Bestsellers
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
