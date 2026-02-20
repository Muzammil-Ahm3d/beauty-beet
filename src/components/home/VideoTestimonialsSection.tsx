
import { useState } from 'react';
import { Play, CheckCircle2, X, Star, Maximize2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        type: "video",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        review: "This cream transformed my skin! It feels so hydrated and looks radiant. Highly recommend for anyone with dry skin.",
        rating: 5,
        status: "Verified Buyer"
    },
    {
        id: 2,
        name: "Jessica K.",
        type: "video",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        review: "Finally found a product that works for my curls. My hair has never felt softer or more defined. This is a game changer.",
        rating: 5,
        status: "Verified Buyer"
    },
    {
        id: 3,
        name: "Elena R.",
        type: "image",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        review: "Absolutely love the natural ingredients. This moisturizer is lightweight yet deeply nourishing. Perfectly fits my daily routine.",
        rating: 5,
        status: "Verified Buyer"
    },
    {
        id: 4,
        name: "Priya S.",
        type: "video",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        review: "The gift set was a hit! Everything inside is high quality and smells amazing. Looking forward to trying more products.",
        rating: 5,
        status: "Verified Buyer"
    }
];

// ─── Video Popup Modal ───────────────────────────────────────────────
const VideoModal = ({
    isOpen,
    onClose,
    videoUrl,
    name,
}: {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    name: string;
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-elevated animate-scale-in z-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                    aria-label="Close video"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Video iframe */}
                <iframe
                    src={`${videoUrl}?autoplay=1&rel=0`}
                    title={`Video review by ${name}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

// ─── Card Component ───────────────────────────────────────────────────
const TestimonialCard = ({
    item,
    index,
    onPopup,
}: {
    item: typeof testimonials[0];
    index: number;
    onPopup: (url: string, name: string) => void;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <ScrollReveal key={item.id} animation="fade-in" delay={index * 0.1}>
            <div
                className={`flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium border border-slate-100 transition-all duration-300 h-full w-[280px] md:w-full min-w-[280px] flex-shrink-0 snap-start`}
            >
                {/* Media Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden group">
                    {item.type === 'video' && isPlaying ? (
                        <iframe
                            src={`${item.videoUrl}?autoplay=1&rel=0`}
                            title={`Video review by ${item.name}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    ) : (
                        <>
                            <img
                                src={item.image}
                                alt={`Testimonial by ${item.name}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                                    >
                                        <Play className="w-5 h-5 text-primary fill-primary ml-1" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {/* Popup Toggle if Video */}
                    {item.videoUrl && (
                        <button
                            onClick={() => onPopup(item.videoUrl!, item.name)}
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Content Container */}
                <div className="p-4 flex flex-col flex-grow">
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-2">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        ))}
                    </div>

                    {/* Review Text */}
                    <p
                        className={`text-slate-700 text-sm italic leading-relaxed mb-4 transition-all duration-300 ${!isExpanded ? 'line-clamp-2' : ''}`}
                    >
                        "{item.review}"
                    </p>

                    {/* Read More button */}
                    {item.review.length > 60 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-xs font-bold text-primary hover:text-primary-dark transition-colors mb-4 text-left w-fit"
                        >
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                    )}

                    {/* Customer Info (Pushed to bottom) */}
                    <div className="mt-auto flex flex-col">
                        <div className="flex items-center gap-1.5 leading-tight mb-0.5">
                            <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider uppercase">
                            {item.status}
                        </span>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

// ─── Main Section ────────────────────────────────────────────────────
const VideoTestimonialsSection = () => {
    const [activeVideo, setActiveVideo] = useState<{ url: string; name: string } | null>(null);

    return (
        <>
            <section className="py-4 md:py-6 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <ScrollReveal animation="fade-up">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                                    Real Stories
                                </p>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                                    Video Reviews
                                </h2>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Grid/Carousel Layout */}
                    <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-4 md:gap-6 scrollbar-none snap-x items-stretch">
                        {testimonials.map((item, index) => (
                            <TestimonialCard
                                key={item.id}
                                item={item}
                                index={index}
                                onPopup={(url, name) => setActiveVideo({ url, name })}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Popup */}
            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoUrl={activeVideo?.url || ""}
                name={activeVideo?.name || ""}
            />
        </>
    );
};

export default VideoTestimonialsSection;
