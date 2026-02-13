
import { useState } from 'react';
import { Play, CheckCircle2, X } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        product: "Radiance Serum",
        position: "object-center"
    },
    {
        id: 2,
        name: "Jessica K.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        product: "Curl Define",
        position: "object-center"
    },
    {
        id: 3,
        name: "Elena R.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        product: "Moisturizer",
        position: "object-top"
    },
    {
        id: 4,
        name: "Priya S.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        product: "Gift Set",
        position: "object-center"
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

// ─── Main Section ────────────────────────────────────────────────────
const VideoTestimonialsSection = () => {
    const [activeVideo, setActiveVideo] = useState<{ url: string; name: string } | null>(null);

    return (
        <>
            <section className="pt-4 pb-4 md:pt-6 md:pb-6 bg-background">
                <div className="container mx-auto px-4">
                    <ScrollReveal animation="fade-up">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-1">
                                    Real Stories
                                </p>
                                <h2 className="font-display text-xl md:text-2xl text-foreground">
                                    Video Reviews
                                </h2>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Grid Layout */}
                    <div className="flex overflow-x-auto pb-4 gap-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0 sm:mx-0 scrollbar-none snap-x">
                        {testimonials.map((item, index) => (
                            <ScrollReveal key={item.id} animation="fade-in" delay={index * 0.1}>
                                <div
                                    className="w-[160px] md:w-auto h-[200px] md:h-[180px] rounded-2xl relative overflow-hidden group shadow-soft hover:shadow-medium transition-all cursor-pointer snap-start flex-shrink-0"
                                    onClick={() => setActiveVideo({ url: item.videoUrl, name: item.name })}
                                >
                                    <img
                                        src={item.image}
                                        alt={`Video review by ${item.name}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.position}`}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                                        {/* Play Button */}
                                        <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                                            <Play className="w-3.5 h-3.5 text-primary fill-primary ml-0.5" />
                                        </div>

                                        <div className="font-bold text-white text-base leading-tight drop-shadow-md flex flex-col">
                                            <span className="flex items-center gap-1.5">
                                                {item.name}
                                                <CheckCircle2 className="w-3 h-3 text-primary" />
                                            </span>
                                            <span className="text-[10px] font-normal text-white/80 uppercase tracking-wide mt-0.5">
                                                Verified Buyer
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
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
