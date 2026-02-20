import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, ArrowLeft, Heart, Check, Share2, Plus, Minus, Leaf, Beaker, Clock, Zap, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Helmet } from "react-helmet-async";
import { useCart } from "@/context/CartContext";
import ProductInfoSection from "@/components/shop/ProductInfoSection";
import AIReviews from "@/components/shop/AIReviews";
import RealResults from "@/components/shop/RealResults";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductDetails = () => {
    const { slug, category, subcategory } = useParams();
    const product = getProductBySlug(slug || "");
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { addToCart } = useCart();

    // Reset selected image when product changes
    useEffect(() => {
        if (product && product.images.length > 0) {
            setSelectedImage(product.images[0].url);
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
                        {/* Product Image/Icon */}
                        <div className="space-y-4">
                            <ScrollReveal animation="fade-in">
                                <div className="space-y-4">
                                    {/* Main Image */}
                                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft border border-border/50 flex items-center justify-center">
                                        <img
                                            src={selectedImage || product.images[0]?.url || "/placeholder-product.png"}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-all duration-300"
                                            onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                                        />

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

                                    {/* Thumbnails */}
                                    {product.images.length > 1 && (
                                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                            {product.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedImage(img.url)}
                                                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === img.url
                                                        ? "border-primary shadow-md scale-105"
                                                        : "border-transparent opacity-70 hover:opacity-100"
                                                        }`}
                                                >
                                                    <img
                                                        src={img.url}
                                                        alt={`View ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
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
                                    <span className="text-4xl font-bold text-foreground">₹{product.base_price}</span>
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
                                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                    <Button
                                        size="lg"
                                        className="flex-[2] gap-3 h-14 rounded-full text-lg font-bold shadow-lg hover:shadow-primary/20 transition-all font-display"
                                        onClick={handleAddToCart}
                                    >
                                        <ShoppingBag className="w-6 h-6" />
                                        ADD TO CART
                                    </Button>
                                    <div className="flex gap-3 flex-1">
                                        <Button size="lg" variant="outline" className="flex-1 h-14 rounded-full hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-colors">
                                            <Heart className="w-6 h-6" />
                                        </Button>
                                        <Button size="lg" variant="outline" className="flex-1 h-14 rounded-full">
                                            <Share2 className="w-6 h-6" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Feature Badges (Image 2 style) */}
                                <div className="grid grid-cols-3 gap-4 pb-8 mb-8 border-b border-border/50">
                                    <div className="flex flex-col items-center text-center gap-3 group">
                                        <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                            <Leaf className="w-8 h-8 text-primary" />
                                        </div>
                                        <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide text-foreground">100% Vegan</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3 group">
                                        <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                            <Beaker className="w-8 h-8 text-primary" />
                                        </div>
                                        <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide text-foreground">Paraben Free</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3 group">
                                        <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                            <Clock className="w-8 h-8 text-primary" />
                                        </div>
                                        <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide text-foreground">48-Hour Infused</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Detailed Info Tabs (Image 2 style) */}
                    <div className="mt-12">
                        <Tabs defaultValue="ingredients" className="w-full">
                            <TabsList className="w-full justify-start h-auto bg-transparent border-b border-border rounded-none p-0 gap-8">
                                <TabsTrigger
                                    value="ingredients"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-2 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Ingredients
                                </TabsTrigger>
                                <TabsTrigger
                                    value="usage"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-2 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    How to Use
                                </TabsTrigger>
                                <TabsTrigger
                                    value="results"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-2 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Real Results
                                </TabsTrigger>
                                <TabsTrigger
                                    value="reviews"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-2 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    Review
                                </TabsTrigger>
                                <TabsTrigger
                                    value="faqs"
                                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-2 py-4 text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-all"
                                >
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="ingredients" className="pt-12 focus-visible:outline-none">
                                <ProductInfoSection
                                    productName={product.name}
                                    description={product.short_description}
                                    longDescription={product.long_description}
                                    ingredients={product.key_ingredients}
                                />
                            </TabsContent>

                            <TabsContent value="usage" className="pt-12 focus-visible:outline-none">
                                <div className="max-w-3xl mx-auto space-y-12">
                                    <div className="bg-muted/30 p-8 md:p-12 rounded-[32px] border border-border/50">
                                        <h3 className="font-display text-3xl mb-8 flex items-center gap-3 text-foreground">
                                            <Zap className="w-8 h-8 text-primary fill-primary/20" />
                                            The Ritual
                                        </h3>
                                        <ol className="space-y-8">
                                            {product.usage_instructions.steps.map((step, idx) => (
                                                <li key={idx} className="flex gap-6 items-start group">
                                                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-soft group-hover:scale-110 transition-transform">
                                                        {idx + 1}
                                                    </span>
                                                    <div className="pt-1">
                                                        <p className="text-foreground text-lg leading-relaxed font-medium">
                                                            {step}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                        {product.additional_tips && product.additional_tips.length > 0 && (
                                            <div className="mt-12 pt-8 border-t border-border/50">
                                                <h4 className="font-bold text-primary flex items-center gap-2 mb-4">
                                                    <span className="text-2xl">💡</span>
                                                    Expert Tips
                                                </h4>
                                                <ul className="space-y-3">
                                                    {product.additional_tips.map((tip, i) => (
                                                        <li key={i} className="text-muted-foreground italic">
                                                            "{tip}"
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="results" className="pt-12 focus-visible:outline-none">
                                <RealResults testimonials={product.testimonials} />
                            </TabsContent>

                            <TabsContent value="reviews" className="pt-12 focus-visible:outline-none">
                                <AIReviews
                                    summary={product.ai_summary}
                                    topics={product.ai_popular_topics}
                                    reviews={product.ai_verified_reviews}
                                />
                            </TabsContent>

                            <TabsContent value="faqs" className="pt-12 focus-visible:outline-none">
                                <div className="max-w-4xl mx-auto space-y-12">
                                    <ScrollReveal animation="fade-up">
                                        <div className="bg-muted/30 rounded-[32px] p-8 md:p-12 border border-border/50">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                                                <h3 className="font-display text-3xl md:text-4xl text-foreground">
                                                    Frequently Asked Questions
                                                </h3>
                                            </div>

                                            <Accordion type="single" collapsible className="w-full">
                                                {product.faqs && product.faqs.length > 0 ? (
                                                    product.faqs.map((faq, index) => (
                                                        <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                                            <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:text-primary transition-colors py-6">
                                                                {faq.question}
                                                            </AccordionTrigger>
                                                            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base md:text-lg">
                                                                {faq.answer}
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))
                                                ) : (
                                                    <p className="text-center py-10 text-muted-foreground text-lg">
                                                        No questions yet. Ask us anything!
                                                    </p>
                                                )}
                                            </Accordion>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </TabsContent>
                        </Tabs>
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
                                                <img
                                                    src={relProduct.images[0]?.url || "/placeholder-product.png"}
                                                    alt={relProduct.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                                                />
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
                                                    <span className="text-sm font-bold ml-auto">₹{relProduct.base_price}</span>
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
