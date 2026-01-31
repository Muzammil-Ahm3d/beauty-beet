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

const SKIN_CONCERNS = [
    { id: "acne", label: "Acne & Breakouts", icon: "🔴", description: "Pimples, blackheads, or oily skin issues" },
    { id: "dry-skin", label: "Dry / Dehydrated Skin", icon: "🏜️", description: "Skin feels tight, flaky, or lacks moisture" },
    { id: "dull-skin", label: "Dull / Uneven Tone", icon: "🌙", description: "Skin lacks radiance or has patchy color" },
    { id: "aging", label: "Fine Lines / Aging", icon: "⏳", description: "Wrinkles, fine lines, or loss of firmness" },
    { id: "pigmentation", label: "Dark Spots / Pigmentation", icon: "🎯", description: "Sun spots, melasma, or uneven pigmentation" }
];

const RECOMMENDATIONS: Record<string, string[]> = {
    "acne": ["SC-FO-003", "SC-FG-004"],
    "dry-skin": ["SC-FO-004", "SC-FO-001"],
    "dull-skin": ["SC-FO-005", "SC-FO-006", "SC-FG-001", "SC-FP-003"],
    "aging": ["SC-FG-007", "SC-FO-002"],
    "pigmentation": ["SC-FG-003", "SC-FO-005"]
};

const FixYourSkin = () => {
    const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

    const recommendedProducts = selectedConcern
        ? products.filter(p => RECOMMENDATIONS[selectedConcern]?.includes(p.id))
        : [];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Fix Your Skin - Skin Care Solutions | BeautyBeet</title>
                <meta name="description" content="Find the perfect skin care products for your concerns. Take our quiz and get personalized Ayurvedic skincare recommendations." />
                <link rel="canonical" href="https://beautybeet.com/solutions/fix-your-skin" />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Solutions", href: "/solutions" },
                        { label: "Fix Your Skin", href: "/solutions/fix-your-skin" }
                    ]} />

                    {/* Hero */}
                    <ScrollReveal animation="fade-in">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                Personalized Skin Solutions
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                Fix Your Skin
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Select your primary skin concern and discover the perfect Ayurvedic products to achieve radiant, healthy skin.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Concern Selection */}
                    <ScrollReveal animation="fade-up">
                        <section className="mb-16">
                            <h2 className="text-2xl font-display text-center mb-8">
                                What's your main skin concern?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {SKIN_CONCERNS.map((concern) => (
                                    <button
                                        key={concern.id}
                                        onClick={() => setSelectedConcern(concern.id)}
                                        className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${selectedConcern === concern.id
                                                ? "border-accent bg-accent/5 shadow-lg"
                                                : "border-border hover:border-accent/50 hover:shadow-md"
                                            }`}
                                    >
                                        {selectedConcern === concern.id && (
                                            <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-accent" />
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
                                            For {SKIN_CONCERNS.find(c => c.id === selectedConcern)?.label.toLowerCase()}
                                        </p>
                                    </div>
                                    <Link to="/shop/skin-care">
                                        <Button variant="outline" className="hidden md:flex">
                                            View All Skin Care <ArrowRight className="w-4 h-4 ml-2" />
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
                        <div className="mt-16 text-center bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12">
                            <h3 className="font-display text-2xl mb-4">Need a skin consultation?</h3>
                            <p className="text-muted-foreground mb-6">Connect with our dermatology experts for personalized advice</p>
                            <Link to="/solutions/dermatologist-near-you">
                                <Button size="lg" className="shadow-lg">
                                    Find a Dermatologist <ArrowRight className="w-4 h-4 ml-2" />
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

export default FixYourSkin;
