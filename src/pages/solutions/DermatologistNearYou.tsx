import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Search, GraduationCap, BadgeCheck } from "lucide-react";

// Mock dermatologist data
const MOCK_DERMATOLOGISTS = [
    {
        id: 1,
        name: "Dr. Priya Sharma",
        specialization: "Cosmetic Dermatology",
        qualification: "MD (Dermatology), MBBS",
        clinic: "Skin & Glow Clinic",
        address: "A-12, Hauz Khas Village, New Delhi",
        phone: "+91 98765 43220",
        hours: "10:00 AM - 6:00 PM",
        rating: 4.9,
        reviews: 423,
        experience: "15+ years",
        consultationFee: "₹800"
    },
    {
        id: 2,
        name: "Dr. Rahul Mehta",
        specialization: "Clinical Dermatology",
        qualification: "MD, DNB (Dermatology)",
        clinic: "DermaCare Solutions",
        address: "B-45, Juhu Scheme, Mumbai",
        phone: "+91 98765 43221",
        hours: "11:00 AM - 7:00 PM",
        rating: 4.7,
        reviews: 312,
        experience: "12+ years",
        consultationFee: "₹1000"
    },
    {
        id: 3,
        name: "Dr. Ananya Reddy",
        specialization: "Pediatric Dermatology",
        qualification: "MD (Dermatology), Fellowship",
        clinic: "Advanced Skin Institute",
        address: "14th Cross, Indiranagar, Bangalore",
        phone: "+91 98765 43222",
        hours: "9:00 AM - 5:00 PM",
        rating: 4.8,
        reviews: 278,
        experience: "10+ years",
        consultationFee: "₹900"
    }
];

const DermatologistNearYou = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Find Dermatologists Near You | BeautyBeet</title>
                <meta name="description" content="Connect with certified dermatologists for professional skincare advice. Find skin specialists near you." />
                <link rel="canonical" href="https://beautybeet.com/solutions/dermatologist-near-you" />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Solutions", href: "/solutions" },
                        { label: "Dermatologist Near You", href: "/solutions/dermatologist-near-you" }
                    ]} />

                    {/* Hero */}
                    <ScrollReveal animation="fade-in">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                                <BadgeCheck className="w-4 h-4" />
                                Certified Specialists
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                Find Dermatologists
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Connect with certified dermatologists for expert skin care guidance. Get professional advice tailored to your skin needs.
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
                                    placeholder="Search by city, pincode, or specialization..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-32 py-4 rounded-2xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg"
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Dermatologist Listings */}
                    <ScrollReveal animation="fade-up">
                        <div className="space-y-4">
                            {MOCK_DERMATOLOGISTS.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                        <div className="flex gap-4">
                                            {/* Avatar placeholder */}
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">👨‍⚕️</span>
                                            </div>

                                            <div>
                                                <h3 className="font-display text-xl text-foreground mb-1">{doc.name}</h3>
                                                <p className="text-sm text-primary font-medium mb-1">{doc.specialization}</p>
                                                <p className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                                                    <GraduationCap className="w-3 h-3" />
                                                    {doc.qualification}
                                                </p>

                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                        {doc.rating} ({doc.reviews})
                                                    </span>
                                                    <span>{doc.experience} experience</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:text-right">
                                            <p className="text-sm text-muted-foreground mb-1">{doc.clinic}</p>
                                            <p className="flex items-center gap-1 text-sm text-muted-foreground lg:justify-end mb-1">
                                                <MapPin className="w-4 h-4" />
                                                {doc.address}
                                            </p>
                                            <p className="flex items-center gap-1 text-sm text-muted-foreground lg:justify-end">
                                                <Clock className="w-4 h-4" />
                                                {doc.hours}
                                            </p>
                                            <p className="text-lg font-bold text-foreground mt-2">
                                                {doc.consultationFee} <span className="text-xs font-normal text-muted-foreground">per consultation</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-4 border-t border-border">
                                        <Button className="flex-1 sm:flex-none">
                                            Book Appointment
                                        </Button>
                                        <Button variant="outline" className="flex-1 sm:flex-none">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Disclaimer */}
                    <ScrollReveal animation="fade-up">
                        <div className="mt-12 text-center bg-muted/30 rounded-2xl p-6">
                            <p className="text-sm text-muted-foreground">
                                ⚠️ Always consult a certified dermatologist for medical skin conditions. The above listings are for reference only.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DermatologistNearYou;
