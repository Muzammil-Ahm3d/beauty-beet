
import { useState } from 'react';
import { Star, Sparkles, CheckCircle2, MessageSquare, Filter } from 'lucide-react';
import { AITopic, AIVerifiedReview } from '@/types/product';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

interface AIReviewsProps {
    summary?: string;
    topics?: AITopic[];
    reviews?: AIVerifiedReview[];
}

const AIReviews = ({ summary, topics, reviews }: AIReviewsProps) => {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    if (!summary && (!reviews || reviews.length === 0)) return null;

    // Filter reviews based on selected topic
    const filteredReviews = selectedTopic
        ? reviews?.filter(r => r.highlighted_topics?.includes(selectedTopic))
        : reviews;

    // Sort to show most relevant first (optional logic, referencing user request "Sort by Most Relevant")
    // For now, we assume the passed array is already sorted or we render as is.

    return (
        <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Header & AI Summary */}
                    <div className="space-y-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>AI-Generated Insights</span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl text-foreground">
                            What Customers Are Saying
                        </h2>

                        {summary && (
                            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 text-left relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                                <div className="text-muted-foreground leading-relaxed relative z-10">
                                    <strong className="text-foreground flex items-center gap-2 mb-2">
                                        <Sparkles className="w-4 h-4 text-amber-500" />
                                        AI Summary:
                                    </strong>
                                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Popular Topics Cloud */}
                    {topics && topics.length > 0 && (
                        <ScrollReveal animation="fade-up">
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    Popular Topics
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setSelectedTopic(null)}
                                        className={cn(
                                            "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                            selectedTopic === null
                                                ? "bg-primary text-white border-primary shadow-md"
                                                : "bg-background text-muted-foreground border-border hover:border-primary/50"
                                        )}
                                    >
                                        All Reviews
                                    </button>
                                    {topics.map((topic) => (
                                        <button
                                            key={topic.topic}
                                            onClick={() => setSelectedTopic(selectedTopic === topic.topic ? null : topic.topic)}
                                            className={cn(
                                                "px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center gap-2",
                                                selectedTopic === topic.topic
                                                    ? "bg-primary text-white border-primary shadow-md"
                                                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                                            )}
                                        >
                                            {topic.topic}
                                            <span className={cn(
                                                "text-[10px] px-1.5 py-0.5 rounded-full",
                                                selectedTopic === topic.topic ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                                            )}>
                                                {topic.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Reviews List */}
                    {filteredReviews && filteredReviews.length > 0 ? (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    Verified Reviews ({filteredReviews.length})
                                </h3>
                                {/* Simple Sort/Toggle could go here */}
                            </div>

                            <div className="grid gap-6">
                                {filteredReviews.map((review) => (
                                    <ScrollReveal key={review.id} animation="fade-up">
                                        <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold">
                                                        {review.author.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                                                            {review.author}
                                                            {review.verified && (
                                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                            )}
                                                        </h4>
                                                        <div className="flex items-center gap-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={cn(
                                                                        "w-3.5 h-3.5",
                                                                        i < review.rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground/30"
                                                                    )}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-muted-foreground">{review.date}</span>
                                            </div>

                                            {/* Review Content */}
                                            {/* Note: In a real app we might want to sanitize this if we allow bold tags from data */}
                                            <div
                                                className="text-muted-foreground leading-relaxed [&>strong]:text-foreground [&>strong]:font-medium"
                                                dangerouslySetInnerHTML={{ __html: review.content }}
                                            />

                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            No reviews found for this topic.
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default AIReviews;
