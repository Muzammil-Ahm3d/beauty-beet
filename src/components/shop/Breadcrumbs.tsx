import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav className="flex items-center text-sm text-muted-foreground mb-6 flex-wrap gap-1">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
            </Link>
            {items.map((item, index) => (
                <span key={item.href} className="flex items-center gap-1">
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                    {index === items.length - 1 ? (
                        <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-none">{item.label}</span>
                    ) : (
                        <Link to={item.href} className="hover:text-primary transition-colors truncate max-w-[100px] sm:max-w-none">
                            {item.label}
                        </Link>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
