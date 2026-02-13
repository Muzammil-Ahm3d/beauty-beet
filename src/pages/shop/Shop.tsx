import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { getAllCategories } from "@/data/categories";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const Shop = () => {
    const categories = getAllCategories();

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Shop All Categories | BeautyBeet</title>
                <meta name="description" content="Explore our complete range of natural and Ayurvedic beauty products. Shop by category for hair care, skin care, and more." />
                <link rel="canonical" href="https://beautybeet.com/shop" />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Shop", href: "/shop" }
                    ]} />

                    {/* Hero Section */}
                    <ScrollReveal animation="fade-in">
                        <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-3xl p-8 md:p-12 mb-12 overflow-hidden text-center">
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                    Shop All
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Discover our complete collection of natural, Ayurvedic-inspired beauty solutions tailored for you.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Categories Grid */}
                    <ScrollReveal animation="fade-up">
                        <section className="mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/shop/${category.slug}`}
                                        className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 block h-full flex flex-col"
                                    >
                                        {/* Image Area */}
                                        <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                                            <img
                                                src={category.heroImage}
                                                alt={category.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                onError={(e) => {
                                                    // Fallback if image fails
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-primary/10', 'to-accent/10');
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {category.name}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 flex-grow">
                                                {category.description}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-sm font-medium text-muted-foreground">
                                                    {Object.keys(category.subcategories).length} Collections
                                                </span>
                                                <span className="inline-flex items-center text-sm font-bold text-primary">
                                                    Explore <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Shop;
