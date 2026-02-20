import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getBestsellerProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

const BestsellersSection = () => {
  const bestsellers = getBestsellerProducts(10);
  const { addToCart } = useCart();

  return (
    <section className="py-4 md:py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-3">
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
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x items-stretch">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="w-[280px] min-w-[280px] max-w-[280px] flex-shrink-0 snap-start group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-[450px] flex flex-col"
            >
              {/* Image Container - Fixed Height */}
              <div className="h-[280px] w-full relative bg-muted overflow-hidden">
                <Link to={`/shop/${product.category}/${product.subcategory}/${product.slug}`} className="block w-full h-full">
                  <img
                    src={product.images[0]?.url}
                    alt={product.images[0]?.alt_text || product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-400 text-amber-950 shadow-sm">
                    Bestseller
                  </span>
                </div>

                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-all group/heart z-10">
                  <Heart className="w-4 h-4 text-slate-900 group-hover/heart:text-rose-500 transition-colors" />
                </button>


              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-1">
                  {product.subcategory.replace(/-/g, ' ')}
                </p>
                <Link to={`/shop/${product.category}/${product.subcategory}/${product.slug}`}>
                  <h3 className="font-bold text-sm text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating - Pushed to bottom via mt-auto to align prices */}
                <div className="flex items-center gap-1.5 mb-2 mt-auto">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-slate-900">{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-700 font-semibold">({product.reviews_count})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-slate-900">₹{product.base_price}</span>
                </div>

                <Button
                  variant="default"
                  className="w-full mt-auto shadow-sm"
                  size="sm"
                  onClick={() => addToCart(product.id.toString(), product.sku, 1)}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 md:hidden text-center">
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
