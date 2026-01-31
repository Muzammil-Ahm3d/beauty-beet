import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getBestsellerProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

const BestsellersSection = () => {
  const bestsellers = getBestsellerProducts(4);
  const { addToCart } = useCart();

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
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Image - Using emoji icon */}
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <Link to={`/shop/${product.category}/${product.subcategory}/${product.slug}`} className="block w-full h-full flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.icon}</span>
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-400 text-amber-950">
                    Bestseller
                  </span>
                </div>

                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 hover:bg-card flex items-center justify-center shadow-soft transition-all group/heart">
                  <Heart className="w-4 h-4 text-muted-foreground group-hover/heart:text-rose-500 transition-colors" />
                </button>

                {/* Quick Add */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button
                    variant="default"
                    className="w-full"
                    size="sm"
                    onClick={() => addToCart(product.id.toString(), product.sku, 1)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
                  {product.subcategory.replace(/-/g, ' ')}
                </p>
                <Link to={`/shop/${product.category}/${product.subcategory}/${product.slug}`}>
                  <h3 className="font-medium text-sm text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews_count})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">₹{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 md:hidden text-center">
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
