import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Subcategory } from "@/data/categories";

interface SubcategoryCardProps {
    subcategory: Subcategory;
    categorySlug: string;
    image?: string;
}

const SubcategoryCard = ({ subcategory, categorySlug, image }: SubcategoryCardProps) => {
    const href = `/shop/${categorySlug}/${subcategory.slug}`;

    return (
        <Link
            to={href}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
        >
            {/* Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                {image ? (
                    <img
                        src={image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-3xl">✨</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
                <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {subcategory.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {subcategory.productCount} Products
                </p>
                <span className="inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop Now <ArrowRight className="w-3 h-3 ml-1" />
                </span>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
        </Link>
    );
};

export default SubcategoryCard;
