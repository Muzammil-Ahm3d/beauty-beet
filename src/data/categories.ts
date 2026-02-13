// Complete category and subcategory structure for BeautyBeet
// This maps URL slugs to category data

export interface Subcategory {
    id: string;
    name: string;
    slug: string;
    productCount: number;
    description?: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    heroImage: string;
    subcategories: Record<string, Subcategory>;
}

export const CATEGORIES: Record<string, Category> = {
    "hair-care": {
        id: "HC",
        name: "Hair Care",
        slug: "hair-care",
        description: "Explore our comprehensive range of Ayurvedic hair oils, serums, gels, shampoos, and conditioners designed for every hair concern.",
        heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
        subcategories: {
            "hair-oils": { id: "HC-HO", name: "Hair Oils", slug: "hair-oils", productCount: 8, description: "Natural Ayurvedic hair oils for growth, dandruff removal, and scalp health" },
            "hair-serums": { id: "HC-HS", name: "Hair Serums", slug: "hair-serums", productCount: 7, description: "Targeted serums for hair fall, damage repair, and growth" },
            "hair-gels-treatments": { id: "HC-HG", name: "Hair Gels & Treatments", slug: "hair-gels-treatments", productCount: 3, description: "Specialized hair gels and treatment products" },
            "shampoo-conditioner": { id: "HC-SH", name: "Shampoo & Conditioner", slug: "shampoo-conditioner", productCount: 6, description: "Gentle herbal shampoos and nourishing conditioners" }
        }
    },
    "skin-care": {
        id: "SC",
        name: "Skin Care",
        slug: "skin-care",
        description: "Discover premium Ayurvedic face oils, serums, gels, and packs for radiant, healthy skin.",
        heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
        subcategories: {
            "face-oils-serums": { id: "SC-FO", name: "Face Oils & Serums", slug: "face-oils-serums", productCount: 7, description: "Luxurious face oils and targeted serums" },
            "face-gels": { id: "SC-FG", name: "Face Gels", slug: "face-gels", productCount: 8, description: "Lightweight gels for daily skincare" },
            "face-packs-masks": { id: "SC-FP", name: "Face Packs & Masks", slug: "face-packs-masks", productCount: 3, description: "Deep treatment masks and face packs" },
            "cleansers": { id: "SC-CL", name: "Cleansers", slug: "cleansers", productCount: 1, description: "Gentle cleansers for all skin types" }
        }
    },
    "body-care": {
        id: "BC",
        name: "Body Care",
        slug: "body-care",
        description: "Pamper your body with our natural scrubs and handcrafted soaps.",
        heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
        subcategories: {
            "body-scrubs": { id: "BC-BS", name: "Body Scrubs", slug: "body-scrubs", productCount: 2, description: "Exfoliating body scrubs for smooth skin" },
            "soaps": { id: "BC-SO", name: "Soaps", slug: "soaps", productCount: 3, description: "Handcrafted herbal soaps" }
        }
    },
    "lip-care-makeup": {
        id: "LM",
        name: "Lip Care & Makeup",
        slug: "lip-care-makeup",
        description: "Complete lip care range from scrubs to lipsticks, all made with natural ingredients.",
        heroImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
        subcategories: {
            "lip-scrubs": { id: "LM-LS", name: "Lip Scrubs", slug: "lip-scrubs", productCount: 2, description: "Gentle lip exfoliators" },
            "lip-balms": { id: "LM-LB", name: "Lip Balms", slug: "lip-balms", productCount: 4, description: "Nourishing lip balms" },
            "lip-serums": { id: "LM-LSe", name: "Lip Serums", slug: "lip-serums", productCount: 2, description: "Targeted lip treatment serums" },
            "lip-gloss": { id: "LM-LG", name: "Lip Gloss", slug: "lip-gloss", productCount: 3, description: "Shiny, hydrating lip glosses" },
            "lipstick": { id: "LM-LP", name: "Lipstick", slug: "lipstick", productCount: 2, description: "Long-lasting herbal lipsticks" }
        }
    },
    "eye-care": {
        id: "EC",
        name: "Eye Care",
        slug: "eye-care",
        description: "Safe and effective eye makeup products.",
        heroImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
        subcategories: {
            "eye-makeup": { id: "EC-EM", name: "Eye Makeup", slug: "eye-makeup", productCount: 1, description: "Natural eye makeup products" }
        }
    }
};

// Helper functions
export const getCategoryBySlug = (slug: string): Category | undefined => CATEGORIES[slug];

export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string): Subcategory | undefined =>
    CATEGORIES[categorySlug]?.subcategories[subcategorySlug];

export const getAllCategories = (): Category[] => Object.values(CATEGORIES);

export const getSubcategoriesForCategory = (categorySlug: string): Subcategory[] =>
    Object.values(CATEGORIES[categorySlug]?.subcategories || {});
