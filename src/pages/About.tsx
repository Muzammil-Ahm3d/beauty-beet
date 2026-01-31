import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Users, Rocket, Sparkles, Building2, Globe, HeartHandshake, BookOpen, ShoppingBag, Calendar } from "lucide-react";

const About = () => {
    const services = [
        {
            icon: Sparkles,
            title: "Beauty & Personal Care",
            description: "Herbal hair and skin care products formulated using Ayurvedic Cosmetic Science principles."
        },
        {
            icon: Building2,
            title: "Salon Onboarding",
            description: "Dedicated profile pages for salons with booking, coupons, analytics, and wallet tracking."
        },
        {
            icon: Calendar,
            title: "Zero Commission Booking",
            description: "Customers can book salon services directly through the platform with no commission charged to salons."
        },
        {
            icon: ShoppingBag,
            title: "E-Commerce Marketplace",
            description: "Online sale of BeautyBeet products and future third-party beauty brands."
        },
        {
            icon: BookOpen,
            title: "Knowledge Platform",
            description: "Blogs, ingredient education, routines, and beauty care guidance for customers."
        },
        {
            icon: HeartHandshake,
            title: "Loyalty System",
            description: "Wallets, gift vouchers, referral tracking, loyalty coins, and marketing automation."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <ScrollReveal animation="fade-in">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                    Our Story
                                </span>
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
                                    About BeautyBeet
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Building India’s most trusted, salon-friendly beauty platform that combines products, services, education, and technology.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Company Overview */}
                <section className="py-16 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <ScrollReveal animation="slide-right">
                                <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square bg-muted">
                                    {/* Placeholder for future office/team image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                                        <Rocket className="w-16 h-16 text-primary/40" />
                                    </div>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-8">
                                <ScrollReveal animation="slide-left" delay={0.1}>
                                    <div>
                                        <h2 className="font-display text-3xl mb-4">Who We Are</h2>
                                        <p className="text-muted-foreground mb-6">
                                            BeautyBeet is a newly launched brand currently in the pre-launch execution stage.
                                            We are a core team of passionate individuals dedicated to revolutionizing the beauty industry
                                            through Ayurveda, technology, and fair partnerships.
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                                                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold mb-1">Based in Hyderabad</h4>
                                                    <p className="text-sm text-muted-foreground">Operating from Telangana, India</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                                                <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold mb-1">Core Team</h4>
                                                    <p className="text-sm text-muted-foreground">Strategy, operations, marketing, and vendor coordination</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                                                <Globe className="w-6 h-6 text-primary shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-semibold mb-1">Digital Platform</h4>
                                                    <p className="text-sm text-muted-foreground">Website + Marketplace + Booking Engine</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <ScrollReveal animation="fade-up">
                                <h2 className="font-display text-3xl md:text-4xl mb-4">Our Core Services</h2>
                                <p className="text-muted-foreground">
                                    A comprehensive ecosystem designed for both customers and salon partners.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
                                    <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300 h-full">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display text-xl mb-3">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission / End Goal */}
                <section className="py-16 bg-primary text-primary-foreground text-center">
                    <div className="container mx-auto px-4">
                        <ScrollReveal animation="scale-up">
                            <h2 className="font-display text-2xl md:text-4xl max-w-4xl mx-auto leading-tight">
                                "To build India’s most trusted, salon-friendly beauty platform that combines products, services, education, and technology—without exploiting salons or customers."
                            </h2>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
