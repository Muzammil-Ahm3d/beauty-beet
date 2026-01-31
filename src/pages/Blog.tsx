import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Science of Ayurvedic Hair Care",
            excerpt: "Discover how ancient ingredients like Bhringraj and Amla can revolutionize your hair health in the modern world.",
            image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop",
            date: "Jan 28, 2024",
            author: "Dr. Aisha Rao",
            category: "Hair Care"
        },
        {
            id: 2,
            title: "5 Skincare Myths Debunked by Experts",
            excerpt: "Stop believing everything you hear on social media. We break down common skincare myths with scientific facts.",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
            date: "Jan 25, 2024",
            author: "Team BeautyBeet",
            category: "Skin Education"
        },
        {
            id: 3,
            title: "Why 'Clean Beauty' Matters",
            excerpt: "Understanding what goes into your products is crucial. Learn why we prioritize chemical-free formulations.",
            image: "https://images.unsplash.com/photo-1556228720-1957be6a9876?q=80&w=800&auto=format&fit=crop",
            date: "Jan 20, 2024",
            author: "Sarah Jen",
            category: "Sustainability"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="py-16 md:py-24 bg-gradient-hero">
                    <div className="container mx-auto px-4 text-center">
                        <ScrollReveal animation="fade-in">
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
                                The Beauty Journal
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Expert advice, ingredient deep-dives, and the latest in clean beauty science.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <ScrollReveal key={post.id} animation="fade-up" delay={index * 0.1}>
                                    <article className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                                        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur text-xs font-semibold rounded-full text-foreground">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-3 h-3" />
                                                    {post.author}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <Button variant="link" className="p-0 h-auto text-primary">
                                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </div>
                                    </article>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
