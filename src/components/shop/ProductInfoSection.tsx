import { useRef } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Testimonial, FAQ } from '@/types/product';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductInfoSectionProps {
    description: string;
    testimonials?: Testimonial[];
    faqs?: FAQ[];
}

const ProductInfoSection = ({ description, testimonials, faqs }: ProductInfoSectionProps) => {
    // Only render if we have data
    if (!description && !testimonials && !faqs) return null;

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Detailed Description + FAQs */}
                    <div className="lg:col-span-7 space-y-16">
                        {/* Description */}
                        {description && (
                            <ScrollReveal animation="fade-up">
                                <div
                                    className="prose prose-slate max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-li:marker:text-primary"
                                    dangerouslySetInnerHTML={{ __html: description }}
                                />
                            </ScrollReveal>
                        )}

                        {/* FAQs */}
                        {faqs && faqs.length > 0 && (
                            <ScrollReveal animation="fade-up" delay={0.1}>
                                <div>
                                    <h3 className="font-display text-2xl text-foreground mb-6">Frequently Asked Questions</h3>
                                    <Accordion type="single" collapsible className="w-full">
                                        {faqs.map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </ScrollReveal>
                        )}
                    </div>

                    {/* Right Column: Testimonials / Visual Proof */}
                    <div className="lg:col-span-5 relative">
                        {testimonials && testimonials.length > 0 ? (
                            <div className="sticky top-24 space-y-8">
                                <ScrollReveal animation="slide-left">
                                    <div className="bg-muted/30 rounded-3xl p-8 border border-border/50">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-2 h-8 bg-primary rounded-full"></div>
                                            <h3 className="font-display text-2xl text-foreground">
                                                Real Results
                                            </h3>
                                        </div>

                                        {/* Slider Container */}
                                        <div className="flex overflow-x-auto gap-4 pb-6 snap-x scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted">
                                            {testimonials.map((item, idx) => (
                                                <div
                                                    key={item.id}
                                                    className="w-[280px] min-w-[280px] snap-start bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 flex flex-col justify-between h-full"
                                                >
                                                    {/* Media */}
                                                    <div className="relative h-[372px] bg-muted shrink-0">
                                                        <img
                                                            src={item.type === 'video' ? (item.thumbnail || item.url) : item.url}
                                                            alt={item.caption || "Product result"}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1549480415-p-500.jpeg"; }}
                                                        />
                                                        {item.type === 'video' && (
                                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                                                                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* Caption Overlay */}
                                                        {item.caption && (
                                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                                                <p className="font-bold text-sm tracking-wide">{item.caption}</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-4 flex-1 flex flex-col">
                                                        {item.subtext && (
                                                            <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-4">
                                                                "{item.subtext}"
                                                            </p>
                                                        )}
                                                        {item.author && (
                                                            <div className="mt-auto pt-3 border-t border-border/50 flex items-center gap-2">
                                                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                                <span className="text-xs font-semibold text-foreground">{item.author}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-1">
                                            <span>Swipe to see progress</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Global Trust Signals (From PDF) */}
                                <ScrollReveal animation="fade-up" delay={0.2}>
                                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Why Trust This?
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                                                <span className="text-muted-foreground"><strong className="text-foreground">Free From:</strong> Paraben, Sulfate, Mineral Oil, Synthetic Fragrance.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                                                <span className="text-muted-foreground"><strong className="text-foreground">Ethical:</strong> 100% Vegan, Cruelty-Free.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                                                <span className="text-muted-foreground"><strong className="text-foreground">Shelf Life:</strong> 24 Months (12M PAO).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                                                <span className="text-muted-foreground"><strong className="text-foreground">Origin:</strong> Made in India by BeautyBeet.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;
