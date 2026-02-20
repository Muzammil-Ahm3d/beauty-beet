import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const concerns = [
    {
        title: "Fix Hair Fall",
        href: "/shop/hair-care/hair-fall",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    },
    {
        title: "Fix Dull Skin",
        href: "/shop/skin-care/dullness",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    },
    {
        title: "Fix Pigmentation",
        href: "/shop/skin-care/pigmentation",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    },
    {
        title: "Fix Acne",
        href: "/shop/skin-care/acne",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
    },
];

const ProblemNavigation = () => {
    return (
        <section className="py-4 md:py-6 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-5">
                    <div className="text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1 block">
                            Targeted Solutions
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                            Shop by Concern
                        </h2>
                    </div>
                    <Link to="/shop" className="text-sm font-semibold text-primary hover:underline shrink-0 mb-1 md:mb-2 ml-4">
                        View All
                    </Link>
                </div>

                <div className="flex overflow-x-auto pb-6 gap-4 scrollbar-none snap-x">
                    {concerns.map((concern, index) => (
                        <Link
                            key={index}
                            to={concern.href}
                            className="w-[260px] min-w-[260px] md:w-[280px] md:min-w-[280px] flex-shrink-0 snap-start group relative bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={concern.image}
                                    alt={concern.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-3 md:p-4 text-center">
                                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                                    {concern.title}
                                </h3>
                                <Button
                                    size="sm"
                                    className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-white rounded-lg font-semibold shadow-md shadow-amber-100 transition-all text-xs md:text-sm"
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemNavigation;
