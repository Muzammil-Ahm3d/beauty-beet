import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, ArrowLeft, Heart, Check, Share2, Plus, Minus } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Helmet } from "react-helmet-async";
import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
    const { slug, category, subcategory } = useParams();
    const product = getProductBySlug(slug || "");
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                    <p className="text-muted-foreground mb-6">The product you are looking for does not exist or has been moved.</p>
                    <Link to="/">
                        <Button>Back to Shop</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const relatedProducts = getRelatedProducts(product);

    const handleAddToCart = () => {
        addToCart(product.id.toString(), product.sku, quantity);
    };

    const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
    const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{product.name} | BeautyBeet</title>
                <meta name="description" content={product.short_description} />
                <link rel="canonical" href={`https://beautybeet.com/shop/${product.category}/${product.subcategory}/${product.slug}`} />
            </Helmet>

            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-muted-foreground mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to={`/shop/${product.category}`} className="hover:text-primary transition-colors capitalize">
                            {product.category.replace(/-/g, ' ')}
                        </Link>
                        <span className="mx-2">/</span>
                        <Link to={`/shop/${product.category}/${product.subcategory}`} className="hover:text-primary transition-colors capitalize">
                            {product.subcategory.replace(/-/g, ' ')}
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground font-medium">{product.name}</span>
                    </nav>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Product Image/Icon */}
                        <div className="space-y-4">
                            <ScrollReveal animation="fade-in">
                                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft border border-border/50 flex items-center justify-center">
                                    <span className="text-[150px]">{product.icon}</span>

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {product.is_bestseller && (
                                            <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-amber-400 text-amber-950">
                                                Bestseller
                                            </span>
                                        )}
                                        {product.is_new && (
                                            <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-accent text-accent-foreground">
                                                New
                                            </span>
                                        )}
                                    </div>

                                    {/* Wishlist */}
                                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card hover:bg-card/80 flex items-center justify-center shadow-soft transition-all">
                                        <Heart className="w-5 h-5 text-muted-foreground hover:text-rose-500" />
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Product Info */}
                        <div>
                            <ScrollReveal animation="fade-up">
                                {/* SKU */}
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                                    SKU: {product.sku}
                                </p>

                                {/* Title */}
                                <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                                    {product.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-muted-foreground'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {product.rating} ({product.reviews_count} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-4xl font-bold text-foreground">₹{product.price}</span>
                                    <span className="text-sm text-muted-foreground">Inclusive of all taxes</span>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {product.short_description}
                                    </p>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm font-medium">Quantity:</span>
                                    <div className="flex items-center border border-border rounded-lg">
                                        <button
                                            onClick={decrementQuantity}
                                            className="p-3 hover:bg-muted transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-12 text-center font-medium">{quantity}</span>
                                        <button
                                            onClick={incrementQuantity}
                                            className="p-3 hover:bg-muted transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Add to Cart + Buy Now */}
                                <div className="flex gap-4 mb-8">
                                    <Button
                                        size="lg"
                                        className="flex-1 gap-2"
                                        onClick={handleAddToCart}
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                        Add to Cart
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        <Heart className="w-5 h-5" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 p-6 bg-muted/30 rounded-2xl">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>100% Ayurvedic & Natural Ingredients</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>Lab Tested & Dermatologically Safe</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>Free Shipping on Orders Above ₹499</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>30-Day Money Back Guarantee</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <section className="mt-20">
                            <ScrollReveal animation="fade-up">
                                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                                    You May Also Like
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedProducts.map((relProduct) => (
                                        <Link
                                            key={relProduct.id}
                                            to={`/shop/${relProduct.category}/${relProduct.subcategory}/${relProduct.slug}`}
                                            className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                                        >
                                            <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                                                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{relProduct.icon}</span>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
                                                    {relProduct.subcategory.replace(/-/g, ' ')}
                                                </p>
                                                <h3 className="font-medium text-sm text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                    {relProduct.name}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                    <span className="text-xs">{relProduct.rating}</span>
                                                    <span className="text-sm font-bold ml-auto">₹{relProduct.price}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
