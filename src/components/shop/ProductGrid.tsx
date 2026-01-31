import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductV2 } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductGridProps {
    products: ProductV2[];
    columns?: 2 | 3 | 4;
}

const ProductGrid = ({ products, columns = 4 }: ProductGridProps) => {
    const { addToCart } = useCart();

    const gridCols = {
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    };

    if (products.length === 0) {
        return (
            <div className="text-center py-16 bg-muted/30 rounded-2xl">
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
        );
    }

    return (
        <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
            {products.map((product) => {
                const displayImage = product.images[0]?.url || "/placeholder-product.png";
                const price = product.base_price;
                const variant = product.variants[0];
                const originalPrice = variant?.variant_mrp || price;
                const discount = variant?.discount_percentage || 0;
                const productUrl = `/shop/${product.category_code.toLowerCase().replace("_", "-")}/${product.subcategory_code.toLowerCase().replace("_", "-")}/${product.slug}`;

                // Build proper URL from category codes
                const categorySlug = Object.entries({
                    "HC": "hair-care",
                    "SC": "skin-care",
                    "BC": "body-care",
                    "LM": "lip-care-makeup",
                    "EC": "eye-care"
                }).find(([code]) => code === product.category_code)?.[1] || "shop";

                const subcategorySlug = product.subcategory_code.toLowerCase().replace(/_/g, "-").replace(product.category_code.toLowerCase() + "-", "");
                const finalUrl = `/shop/${categorySlug}/${subcategorySlug}/${product.slug}`;

                return (
                    <div
                        key={product.id}
                        className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative aspect-square bg-muted">
                            <Link to={finalUrl} className="block w-full h-full">
                                <img
                                    src={displayImage}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.src = "/placeholder-product.png"; }}
                                />
                            </Link>

                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                                {product.is_bestseller && (
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-400 text-amber-950">
                                        Bestseller
                                    </span>
                                )}
                                {product.is_new && (
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-accent text-accent-foreground">
                                        New
                                    </span>
                                )}
                            </div>

                            {/* Wishlist */}
                            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 hover:bg-card flex items-center justify-center shadow-soft transition-all group/heart z-10">
                                <Heart className="w-4 h-4 text-muted-foreground group-hover/heart:text-rose-500 transition-colors" />
                            </button>

                            {/* Quick Add */}
                            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <Button
                                    variant="default"
                                    className="w-full"
                                    size="sm"
                                    onClick={() => variant && addToCart(product.id, variant.variant_id, 1)}
                                >
                                    <ShoppingBag className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4">
                            <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
                                {product.subcategory}
                            </p>
                            <Link to={finalUrl}>
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
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-base font-bold text-foreground">₹{price}</span>
                                {originalPrice > price && (
                                    <span className="text-xs text-muted-foreground line-through">₹{originalPrice}</span>
                                )}
                                {discount > 0 && (
                                    <span className="px-1.5 py-0.5 bg-rose-500/10 text-rose-600 text-[10px] font-semibold rounded">
                                        {discount}% OFF
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductGrid;
