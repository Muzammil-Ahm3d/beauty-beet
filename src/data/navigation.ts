// Navigation configuration for Header dropdowns
import { CATEGORIES } from "./categories";

export interface NavLink {
    label: string;
    href: string;
}

export interface NavDropdownColumn {
    title: string;
    href: string;
    items: NavLink[];
}

export interface NavItem {
    label: string;
    href: string;
    type: "link" | "dropdown" | "mega-menu";
    items?: NavLink[];
    columns?: NavDropdownColumn[];
}

// Build Shop mega-menu columns from categories
const buildShopColumns = (): NavDropdownColumn[] => {
    return Object.values(CATEGORIES).map(category => ({
        title: category.name,
        href: `/shop/${category.slug}`,
        items: Object.values(category.subcategories).map(sub => ({
            label: sub.name,
            href: `/shop/${category.slug}/${sub.slug}`
        }))
    }));
};

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/", type: "link" },
    { label: "About Us", href: "/about", type: "link" },
    { label: "Blog", href: "/blog", type: "link" },
    {
        label: "Shop",
        href: "/shop",
        type: "mega-menu",
        columns: buildShopColumns()
    },
    {
        label: "Solutions",
        href: "/solutions/fix-your-hair",
        type: "dropdown",
        items: [
            { label: "Fix Your Hair", href: "/solutions/fix-your-hair" },
            { label: "Fix Your Skin", href: "/solutions/fix-your-skin" },
            { label: "Salon Near You", href: "/solutions/salon-near-you" },
            { label: "Dermatologist Near You", href: "/solutions/dermatologist-near-you" }
        ]
    },
    { label: "Book Salon", href: "/book-salon", type: "link" }
];
