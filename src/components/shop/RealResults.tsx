import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Testimonial } from '@/types/product';
import { CheckCircle2 } from 'lucide-react';

interface RealResultsProps {
    testimonials?: Testimonial[];
}

const RealResults = ({ testimonials }: RealResultsProps) => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal animation="fade-up">
                <div className="bg-muted/30 rounded-[32px] p-8 md:p-12 border border-border/50">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                        <h3 className="font-display text-3xl md:text-4xl text-foreground">
                            Real Results
                        </h3>
                    </div>

                    {/* Testimonials Horizontal Scroll List */}
                    <div className="flex overflow-x-auto gap-8 pb-10 snap-x scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20 -mx-4 px-4 md:mx-0 md:px-0">
                        {testimonials && testimonials.length > 0 ? (
                            testimonials.map((item, idx) => (
                                <ScrollReveal key={item.id} animation="fade-up" delay={idx * 0.1}>
                                    <div className="w-[320px] md:w-[450px] space-y-6 flex-shrink-0 snap-center">
                                        <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
                                            <img
                                                src={item.type === 'video' ? (item.thumbnail || item.url) : item.url}
                                                alt={item.caption || "Product result"}
                                                className="w-full h-full object-cover"
                                            />
                                            {item.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                                    <p className="font-bold text-white text-lg">
                                                        {item.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        {item.subtext && (
                                            <div className="bg-card/50 p-6 rounded-2xl border border-border/50 italic text-muted-foreground leading-relaxed text-base line-clamp-4">
                                                "{item.subtext}"
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="w-full text-center py-20">
                                <p className="text-xl text-muted-foreground">Results are brewing! Stay tuned.</p>
                            </div>
                        )}
                    </div>
                </div>
            </ScrollReveal>

            {/* Trust Signals */}
            <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2">
                        <h4 className="font-display text-2xl text-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            The BeautyBeet Promise
                        </h4>
                        <p className="text-muted-foreground">Pure Ayurvedic excellence in every drop.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                        {["100% Ayurvedic", "Dermatologically Safe", "Cruelty-Free", "Sustainable"].map((text, i) => (
                            <div key={i} className="px-4 py-2 bg-background rounded-full border border-border text-sm font-medium text-foreground whitespace-nowrap">
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default RealResults;
