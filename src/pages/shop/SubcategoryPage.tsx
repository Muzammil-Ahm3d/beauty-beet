import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { getCategoryBySlug, getSubcategoryBySlug } from "@/data/categories";
import { getProductsBySubcategory, SimpleProduct } from "@/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { SlidersHorizontal, Grid3X3, LayoutGrid, Star, Heart, ShoppingBag } from "lucide-react";

const SORT_OPTIONS = [
    { value: "bestselling", label: "Best Selling" },
    { value: "newest", label: "Newest First" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" }
];

const SubcategoryPage = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const [sortBy, setSortBy] = useState("bestselling");
    const [gridColumns, setGridColumns] = useState<3 | 4>(4);
    const { addToCart } = useCart();

    const categoryData = getCategoryBySlug(category || "");
    const subcategoryData = getSubcategoryBySlug(category || "", subcategory || "");
    const rawProducts = getProductsBySubcategory(category || "", subcategory || "");

    // Sort products
    const products = useMemo(() => {
        const sorted = [...rawProducts];
        switch (sortBy) {
            case "price-asc":
                return sorted.sort((a, b) => a.price - b.price);
            case "price-desc":
                return sorted.sort((a, b) => b.price - a.price);
            case "rating":
                return sorted.sort((a, b) => b.rating - a.rating);
            case "newest":
                return sorted.sort((a, b) => (b.is_new ? 1 : 0) - (a.is_new ? 1 : 0));
            default:
                return sorted.sort((a, b) => (b.is_bestseller ? 1 : 0) - (a.is_bestseller ? 1 : 0));
        }
    }, [rawProducts, sortBy]);

    if (!categoryData || !subcategoryData) {
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

    const gridCols = {
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    };

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{subcategoryData.name} - {categoryData.name} | BeautyBeet</title>
                <meta name="description" content={subcategoryData.description || `Shop ${subcategoryData.name} from BeautyBeet. ${products.length} products available.`} />
                <link rel="canonical" href={`https://beautybeet.com/shop/${categoryData.slug}/${subcategoryData.slug}`} />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Shop", href: "/#shop" },
                        { label: categoryData.name, href: `/shop/${categoryData.slug}` },
                        { label: subcategoryData.name, href: `/shop/${categoryData.slug}/${subcategoryData.slug}` }
                    ]} />

                    {/* Page Header */}
                    <ScrollReveal animation="fade-in">
                        <div className="mb-8">
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                                {subcategoryData.name}
                            </h1>
                            {subcategoryData.description && (
                                <p className="text-muted-foreground text-lg max-w-2xl">
                                    {subcategoryData.description}
                                </p>
                            )}
                            <p className="text-sm text-primary font-medium mt-2">
                                {products.length} products
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Filters & Sort Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                                <SlidersHorizontal className="w-4 h-4" />
                                Filters
                            </Button>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Sort Dropdown */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="text-sm border border-input rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    {SORT_OPTIONS.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Grid Toggle */}
                            <div className="hidden lg:flex items-center gap-1 border border-input rounded-lg p-1">
                                <button
                                    onClick={() => setGridColumns(3)}
                                    className={`p-1.5 rounded ${gridColumns === 3 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setGridColumns(4)}
                                    className={`p-1.5 rounded ${gridColumns === 4 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <ScrollReveal animation="fade-up">
                        {products.length === 0 ? (
                            <div className="text-center py-16 bg-muted/30 rounded-2xl">
                                <p className="text-muted-foreground text-lg">No products found in this category.</p>
                            </div>
                        ) : (
                            <div className={`grid ${gridCols[gridColumns]} gap-4 md:gap-6`}>
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} categorySlug={category!} subcategorySlug={subcategory!} onAddToCart={() => addToCart(product.id.toString(), product.sku, 1)} />
                                ))}
                            </div>
                        )}
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
        </div>
    );
};

// Inline ProductCard component using emoji icons
interface ProductCardProps {
    product: SimpleProduct;
    categorySlug: string;
    subcategorySlug: string;
    onAddToCart: () => void;
}

const ProductCard = ({ product, categorySlug, subcategorySlug, onAddToCart }: ProductCardProps) => {
    const productUrl = `/shop/${categorySlug}/${subcategorySlug}/${product.slug}`;

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

                {/* Short Description */}
                <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                    {product.short_description}
                </p>

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

export default SubcategoryPage;
