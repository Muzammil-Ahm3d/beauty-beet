import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Testimonial, FAQ, Ingredient } from '@/types/product';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ProductInfoSectionProps {
    productName: string;
    description: string;
    longDescription?: string;
    ingredients?: Ingredient[];
    testimonials?: Testimonial[];
}

const ProductInfoSection = ({ productName, description, longDescription, ingredients, testimonials }: ProductInfoSectionProps) => {
    return (
        <section className="py-12 md:py-16 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Narrative & Ingredients Intelligence */}
                    <div className="space-y-16">
                        {/* 1. THE WHY */}
                        <ScrollReveal animation="fade-up">
                            <div className="space-y-6">
                                <h3 className="font-display text-3xl md:text-4xl flex items-center gap-3 text-foreground">
                                    <Sparkles className="w-8 h-8 text-primary" />
                                    The Why: Stop hiding behind filters
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-xl">
                                    {longDescription || description}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* 2. THE INGREDIENT INTELLIGENCE */}
                        {ingredients && ingredients.length > 0 && (
                            <ScrollReveal animation="fade-up" delay={0.1}>
                                <div className="space-y-8">
                                    <h3 className="font-display text-3xl md:text-4xl text-foreground">
                                        The Ingredient Intelligence (The "How")
                                    </h3>
                                    <div className="overflow-x-auto rounded-[32px] border border-border bg-card shadow-sm">
                                        <table className="w-full text-left">
                                            <thead className="bg-muted/50 uppercase text-xs font-bold tracking-widest text-muted-foreground">
                                                <tr>
                                                    <th className="px-8 py-5">Ingredient</th>
                                                    <th className="px-8 py-5">Role</th>
                                                    <th className="px-8 py-5">Ayurvedic Benefit</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {ingredients.map((ing, idx) => (
                                                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                                                        <td className="px-8 py-6 font-bold text-primary text-lg">
                                                            {ing.name}
                                                        </td>
                                                        <td className="px-8 py-6 font-medium text-foreground">
                                                            {ing.role || ing.benefits}
                                                        </td>
                                                        <td className="px-8 py-6 text-muted-foreground leading-relaxed italic text-base">
                                                            {ing.ayurvedic_benefit || "Provides essential nourishment for skin health."}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;
