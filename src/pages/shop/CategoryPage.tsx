import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { getCategoryBySlug, getSubcategoriesForCategory } from "@/data/categories";
import { getProductsByCategory, SimpleProduct } from "@/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CategoryPage = () => {
    const { category } = useParams<{ category: string }>();
    const categoryData = getCategoryBySlug(category || "");
    const subcategories = getSubcategoriesForCategory(category || "");
    const products = getProductsByCategory(category || "");
    const bestsellers = products.filter(p => p.is_bestseller).slice(0, 8);
    const { addToCart } = useCart();

    if (!categoryData) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <h2 className="text-2xl font-bold mb-4">Category not found</h2>
                    <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
                    <Link to="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{categoryData.name} Products | BeautyBeet</title>
                <meta name="description" content={categoryData.description} />
                <link rel="canonical" href={`https://beautybeet.com/shop/${categoryData.slug}`} />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Shop", href: "/#shop" },
                        { label: categoryData.name, href: `/shop/${categoryData.slug}` }
                    ]} />

                    {/* Hero Section */}
                    <ScrollReveal animation="fade-in">
                        <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
                            <div className="relative z-10 max-w-2xl">
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                    {categoryData.name}
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {categoryData.description}
                                </p>
                                <p className="mt-4 text-sm font-medium text-primary">
                                    {products.length} products • {subcategories.length} categories
                                </p>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent rounded-r-3xl hidden lg:block" />
                        </div>
                    </ScrollReveal>

                    {/* Subcategories Grid */}
                    <ScrollReveal animation="fade-up">
                        <section className="mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="font-display text-2xl md:text-3xl text-foreground">
                                        Shop by Category
                                    </h2>
                                    <p className="text-muted-foreground mt-1">Browse our {categoryData.name.toLowerCase()} range</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                {subcategories.map((sub) => (
                                    <Link
                                        key={sub.id}
                                        to={`/shop/${categoryData.slug}/${sub.slug}`}
                                        className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* Image placeholder */}
                                        <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                                <span className="text-3xl">✨</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 md:p-5">
                                            <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {sub.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                {sub.productCount} Products
                                            </p>
                                            <span className="inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                Shop Now <ArrowRight className="w-3 h-3 ml-1" />
                                            </span>
                                        </div>

                                        {/* Hover border */}
                                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Bestsellers from this category */}
                    {bestsellers.length > 0 && (
                        <ScrollReveal animation="fade-up">
                            <section>
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="font-display text-2xl md:text-3xl text-foreground">
                                            Popular in {categoryData.name}
                                        </h2>
                                        <p className="text-muted-foreground mt-1">Our bestselling products</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                    {bestsellers.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            categorySlug={category!}
                                            onAddToCart={() => addToCart(product.id.toString(), product.sku, 1)}
                                        />
                                    ))}
                                </div>
                            </section>
                        </ScrollReveal>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

// Product Card component for bestsellers
interface ProductCardProps {
    product: SimpleProduct;
    categorySlug: string;
    onAddToCart: () => void;
}

const ProductCard = ({ product, categorySlug, onAddToCart }: ProductCardProps) => {
    const productUrl = `/shop/${categorySlug}/${product.subcategory}/${product.slug}`;

    return (
        <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
            {/* Icon/Image Area */}
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <Link to={productUrl} className="block w-full h-full flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.icon}</span>
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
                        onClick={(e) => { e.preventDefault(); onAddToCart(); }}
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
                <Link to={productUrl}>
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
                    <span className="text-lg font-bold text-foreground">₹{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
