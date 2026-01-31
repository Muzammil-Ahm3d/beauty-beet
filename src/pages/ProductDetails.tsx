import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, ArrowLeft, Heart, Check, Share2, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
    const { slug } = useParams();
    const product = getProductBySlug(slug || "");
    const [selectedVariantId, setSelectedVariantId] = useState<string>("");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'howTo'>('description');
    const { addToCart } = useCart();

    useEffect(() => {
        if (product && product.variants.length > 0) {
            setSelectedVariantId(product.variants[0].variant_id);
        }
    }, [product]);

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

    const selectedVariant = product.variants.find(v => v.variant_id === selectedVariantId) || product.variants[0];
    const currentPrice = selectedVariant.discounted_price || selectedVariant.variant_price;
    const originalPrice = selectedVariant.variant_mrp || selectedVariant.variant_price;
    const discount = selectedVariant.discount_percentage;

    const handleAddToCart = () => {
        if (selectedVariantId) {
            addToCart(product.id, selectedVariantId, quantity);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{product.seo.meta_title || `${product.name} | BeautyBeet`}</title>
                <meta name="description" content={product.seo.meta_description || product.short_description} />
                <meta name="keywords" content={product.seo.meta_keywords.join(", ")} />
                <link rel="canonical" href={`https://beautybloom.com/shop/${product.category_code}/${product.subcategory_code}/${product.slug}`} />
            </Helmet>

            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-muted-foreground mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/#shop" className="hover:text-primary transition-colors">{product.category}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground font-medium">{product.name}</span>
                    </nav>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Product Images Gallery */}
                        <div className="space-y-4">
                            <ScrollReveal animation="fade-in">
                                <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted shadow-soft border border-border/50">
                                    <img
                                        src={selectedVariant.image_url || product.images[0].url}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    {product.is_bestseller && (
                                        <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-amber-950 shadow-sm">
                                            Bestseller
                                        </span>
                                    )}
                                    {discount && discount > 0 && (
                                        <span className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-bold bg-rose-500 text-white shadow-sm">
                                            {discount}% OFF
                                        </span>
                                    )}
                                </div>
                            </ScrollReveal>
                            {/* Thumbnails if multiple images (Future enhancement) */}
                        </div>

                        {/* Product Info */}
                        <ScrollReveal animation="fade-up" delay={0.1}>
                            <div className="flex flex-col h-full">
                                <h1 className="font-display text-3xl md:text-5xl text-foreground mb-2 leading-tight">
                                    {product.name}
                                </h1>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= Math.round(product.rating)
                                                    ? "text-amber-500 fill-amber-500"
                                                    : "text-muted-foreground/30"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground font-medium">
                                        {product.rating} ({product.reviews_count} Reviews)
                                    </span>
                                </div>

                                <Separator className="mb-6" />

                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-4xl font-bold text-primary">
                                        ₹{currentPrice}
                                    </span>
                                    {originalPrice > currentPrice && (
                                        <span className="text-xl text-muted-foreground line-through mb-1.5 font-medium">
                                            ₹{originalPrice}
                                        </span>
                                    )}
                                    <span className="text-xs text-muted-foreground mb-2 ml-1">
                                        (Inclusive of all taxes)
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                                    {product.short_description}
                                </p>

                                {/* Variant Selector */}
                                {product.variants.length > 0 && (
                                    <div className="mb-8">
                                        <span className="block text-sm font-semibold mb-3">Select Size</span>
                                        <div className="flex flex-wrap gap-3">
                                            {product.variants.map((variant) => (
                                                <button
                                                    key={variant.variant_id}
                                                    onClick={() => setSelectedVariantId(variant.variant_id)}
                                                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${selectedVariantId === variant.variant_id
                                                            ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                                                            : "border-input hover:border-foreground/50 text-muted-foreground"
                                                        }`}
                                                >
                                                    {variant.variant_name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <div className="flex items-center border border-input rounded-xl h-12 w-fit">
                                        <button
                                            className="w-12 h-full flex items-center justify-center hover:bg-muted rounded-l-xl transition-colors text-lg"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            -
                                        </button>
                                        <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                                        <button
                                            className="w-12 h-full flex items-center justify-center hover:bg-muted rounded-r-xl transition-colors text-lg"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <Button size="lg" className="flex-1 h-12 text-base shadow-lg hover:shadow-xl transition-all" onClick={handleAddToCart}>
                                        <ShoppingBag className="w-5 h-5 mr-2" />
                                        Add to Cart  •  ₹{currentPrice * quantity}
                                    </Button>
                                    <Button variant="outline" size="lg" className="h-12 w-12 px-0 rounded-xl">
                                        <Heart className="w-5 h-5" />
                                    </Button>
                                </div>

                                {/* Features Tabs */}
                                <div className="mt-8">
                                    <div className="flex border-b border-border">
                                        <button
                                            onClick={() => setActiveTab('description')}
                                            className={`pb-3 px-4 text-sm font-medium transition-all relative ${activeTab === 'description' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                        >
                                            Description
                                            {activeTab === 'description' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />}
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('ingredients')}
                                            className={`pb-3 px-4 text-sm font-medium transition-all relative ${activeTab === 'ingredients' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                        >
                                            Key Ingredients
                                            {activeTab === 'ingredients' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />}
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('howTo')}
                                            className={`pb-3 px-4 text-sm font-medium transition-all relative ${activeTab === 'howTo' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                        >
                                            How to Use
                                            {activeTab === 'howTo' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />}
                                        </button>
                                    </div>

                                    <div className="py-6 min-h-[200px]">
                                        {activeTab === 'description' && (
                                            <div className="prose prose-sm max-w-none text-muted-foreground animate-fade-in" dangerouslySetInnerHTML={{ __html: product.long_description }} />
                                        )}

                                        {activeTab === 'ingredients' && (
                                            <div className="space-y-4 animate-fade-in">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {product.key_ingredients.length > 0 ? product.key_ingredients.map((ing, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <Check className="w-4 h-4 text-primary" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-sm">{ing.name} {ing.percentage && <span className="text-xs text-muted-foreground">({ing.percentage})</span>}</h4>
                                                                <p className="text-xs text-muted-foreground">{ing.benefits}</p>
                                                            </div>
                                                        </div>
                                                    )) : (
                                                        <p className="text-sm text-muted-foreground italic">Full ingredient list coming soon.</p>
                                                    )}
                                                </div>
                                                {product.full_ingredient_list && (
                                                    <div className="mt-4 pt-4 border-t border-border">
                                                        <span className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Full Ingredients</span>
                                                        <p className="text-xs text-muted-foreground leading-relaxed">{product.full_ingredient_list}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {activeTab === 'howTo' && (
                                            <div className="space-y-4 animate-fade-in">
                                                {product.usage_instructions.steps.length > 0 ? (
                                                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                                                        {product.usage_instructions.steps.map((step, idx) => (
                                                            <li key={idx} className="pl-2">{step}</li>
                                                        ))}
                                                    </ol>
                                                ) : (
                                                    <p className="text-sm text-muted-foreground">Usage instructions will be updated shortly.</p>
                                                )}
                                                {product.usage_instructions.frequency && (
                                                    <p className="text-sm font-medium mt-4">Frequency: <span className="font-normal text-muted-foreground">{product.usage_instructions.frequency}</span></p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-border flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                        <Share2 className="w-4 h-4" />
                                        Share this product
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                        <Info className="w-4 h-4" />
                                        Have a question?
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetails;
