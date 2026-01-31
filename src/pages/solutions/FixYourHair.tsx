import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductGrid from "@/components/shop/ProductGrid";
import { products } from "@/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const HAIR_CONCERNS = [
    { id: "hair-loss", label: "Hair Loss / Thinning", icon: "💇", description: "Experiencing excessive hair fall or thinning" },
    { id: "dandruff", label: "Dandruff / Itchy Scalp", icon: "❄️", description: "Flaky scalp or persistent itching" },
    { id: "weak-hair", label: "Weak / Brittle Hair", icon: "💔", description: "Hair breaks easily and lacks strength" },
    { id: "dull-hair", label: "Dull / Lifeless Hair", icon: "✨", description: "Hair looks flat and lacks shine" },
    { id: "frizzy-hair", label: "Frizzy / Unmanageable", icon: "🌀", description: "Hair is hard to style and control" }
];

const RECOMMENDATIONS: Record<string, string[]> = {
    "hair-loss": ["HC-HO-001", "HC-HS-001", "HC-SH-002", "HC-HG-001"],
    "dandruff": ["HC-HO-001", "HC-SH-003", "HC-HS-003"],
    "weak-hair": ["HC-HO-003", "HC-HS-002", "HC-HO-005"],
    "dull-hair": ["HC-HO-004", "HC-HS-007", "HC-SH-005"],
    "frizzy-hair": ["HC-HS-004", "HC-SH-005", "HC-SH-006"]
};

const FixYourHair = () => {
    const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

    const recommendedProducts = selectedConcern
        ? products.filter(p => RECOMMENDATIONS[selectedConcern]?.includes(p.id))
        : [];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Fix Your Hair - Hair Care Solutions | BeautyBeet</title>
                <meta name="description" content="Discover the perfect hair care solution for your specific concern. Take our quiz and get personalized product recommendations." />
                <link rel="canonical" href="https://beautybeet.com/solutions/fix-your-hair" />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Solutions", href: "/solutions" },
                        { label: "Fix Your Hair", href: "/solutions/fix-your-hair" }
                    ]} />

                    {/* Hero */}
                    <ScrollReveal animation="fade-in">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                Personalized Hair Solutions
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                Fix Your Hair
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Select your primary hair concern and we'll recommend the perfect products from our Ayurvedic range to help you achieve healthy, beautiful hair.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Concern Selection */}
                    <ScrollReveal animation="fade-up">
                        <section className="mb-16">
                            <h2 className="text-2xl font-display text-center mb-8">
                                What's your main hair concern?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {HAIR_CONCERNS.map((concern) => (
                                    <button
                                        key={concern.id}
                                        onClick={() => setSelectedConcern(concern.id)}
                                        className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${selectedConcern === concern.id
                                                ? "border-primary bg-primary/5 shadow-lg"
                                                : "border-border hover:border-primary/50 hover:shadow-md"
                                            }`}
                                    >
                                        {selectedConcern === concern.id && (
                                            <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-primary" />
                                        )}
                                        <span className="text-3xl mb-3 block">{concern.icon}</span>
                                        <h3 className="font-semibold text-foreground mb-1">{concern.label}</h3>
                                        <p className="text-xs text-muted-foreground">{concern.description}</p>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Recommendations */}
                    {selectedConcern && (
                        <ScrollReveal animation="fade-up" key={selectedConcern}>
                            <section className="mt-12 pt-12 border-t border-border">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="font-display text-2xl md:text-3xl text-foreground">
                                            Recommended Products
                                        </h2>
                                        <p className="text-muted-foreground mt-1">
                                            For {HAIR_CONCERNS.find(c => c.id === selectedConcern)?.label.toLowerCase()}
                                        </p>
                                    </div>
                                    <Link to="/shop/hair-care">
                                        <Button variant="outline" className="hidden md:flex">
                                            View All Hair Care <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                                {recommendedProducts.length > 0 ? (
                                    <ProductGrid products={recommendedProducts} columns={4} />
                                ) : (
                                    <div className="text-center py-12 bg-muted/30 rounded-2xl">
                                        <p className="text-muted-foreground">Recommendations coming soon for this concern.</p>
                                    </div>
                                )}
                            </section>
                        </ScrollReveal>
                    )}

                    {/* CTA */}
                    <ScrollReveal animation="fade-up">
                        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
                            <h3 className="font-display text-2xl mb-4">Need personalized advice?</h3>
                            <p className="text-muted-foreground mb-6">Book a consultation with our hair care experts</p>
                            <Link to="/book-salon">
                                <Button size="lg" className="shadow-lg">
                                    Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FixYourHair;
