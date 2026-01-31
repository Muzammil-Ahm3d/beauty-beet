import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Search, Navigation } from "lucide-react";

// Mock salon data - in production this would come from an API
const MOCK_SALONS = [
    {
        id: 1,
        name: "BeautyBeet Premium Salon",
        address: "123 MG Road, Connaught Place, New Delhi",
        phone: "+91 98765 43210",
        hours: "10:00 AM - 8:00 PM",
        rating: 4.8,
        reviews: 256,
        distance: "1.2 km",
        services: ["Hair Care", "Skin Care", "Makeup"]
    },
    {
        id: 2,
        name: "BeautyBeet Express",
        address: "456 Linking Road, Bandra West, Mumbai",
        phone: "+91 98765 43211",
        hours: "9:00 AM - 9:00 PM",
        rating: 4.6,
        reviews: 189,
        distance: "2.5 km",
        services: ["Hair Care", "Body Care"]
    },
    {
        id: 3,
        name: "BeautyBeet Luxury Spa",
        address: "789 Brigade Road, Bangalore",
        phone: "+91 98765 43212",
        hours: "11:00 AM - 10:00 PM",
        rating: 4.9,
        reviews: 312,
        distance: "3.8 km",
        services: ["Hair Care", "Skin Care", "Body Care", "Spa"]
    }
];

const SalonNearYou = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Find Salons Near You | BeautyBeet</title>
                <meta name="description" content="Locate BeautyBeet partner salons in your area for professional hair care, skin care, and beauty treatments." />
                <link rel="canonical" href="https://beautybeet.com/solutions/salon-near-you" />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Solutions", href: "/solutions" },
                        { label: "Salon Near You", href: "/solutions/salon-near-you" }
                    ]} />

                    {/* Hero */}
                    <ScrollReveal animation="fade-in">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <MapPin className="w-4 h-4" />
                                Partner Salons
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                Find Salons Near You
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Visit our partner salons for professional treatments using BeautyBeet products. Experience the best in Ayurvedic beauty care.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Search Bar */}
                    <ScrollReveal animation="fade-up">
                        <div className="max-w-2xl mx-auto mb-12">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Enter your city or pincode..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-32 py-4 rounded-2xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                                    <Navigation className="w-4 h-4 mr-2" />
                                    Search
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Salon Listings */}
                    <ScrollReveal animation="fade-up">
                        <div className="space-y-4">
                            {MOCK_SALONS.map((salon) => (
                                <div
                                    key={salon.id}
                                    className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-display text-xl text-foreground">{salon.name}</h3>
                                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                                    {salon.distance}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                    {salon.rating} ({salon.reviews})
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {salon.hours}
                                                </span>
                                            </div>

                                            <p className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                {salon.address}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {salon.services.map((service) => (
                                                    <span key={service} className="text-xs px-2 py-1 bg-muted rounded-full">
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 md:items-end">
                                            <Button className="w-full md:w-auto">
                                                Book Now
                                            </Button>
                                            <Button variant="outline" size="sm" className="w-full md:w-auto">
                                                <Phone className="w-4 h-4 mr-2" />
                                                Call
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Coming Soon Notice */}
                    <ScrollReveal animation="fade-up">
                        <div className="mt-12 text-center bg-muted/30 rounded-2xl p-8">
                            <p className="text-muted-foreground">
                                🚀 More salons coming soon in your area. We're expanding rapidly!
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SalonNearYou;
