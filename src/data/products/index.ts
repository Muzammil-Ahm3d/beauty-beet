import { ALL_PRODUCTS } from "./all-products";
import { ProductV2 } from "../../types/product";
import { CATEGORIES } from "../categories";

// Export all products
export const products = ALL_PRODUCTS;

// Export ProductV2 type
export type { ProductV2 };

// Helper to find product by slug
export const getProductBySlug = (slug: string): ProductV2 | undefined => {
    return products.find(p => p.slug === slug);
};

// Helper to get products by category slug
export const getProductsByCategory = (categorySlug: string): ProductV2[] => {
    const category = CATEGORIES[categorySlug];
    if (!category) return [];
    return products.filter(p => p.category_code === category.id);
};

// Helper to get products by subcategory slug
export const getProductsBySubcategory = (categorySlug: string, subcategorySlug: string): ProductV2[] => {
    const category = CATEGORIES[categorySlug];
    if (!category) return [];
    const subcategory = category.subcategories[subcategorySlug];
    if (!subcategory) return [];
    return products.filter(p => `${p.category_code}-${p.subcategory_code}` === subcategory.id);
};

// Helper to find related products (same subcategory)
export const getRelatedProducts = (product: ProductV2): ProductV2[] => {
    return products
        .filter(p => p.subcategory_code === product.subcategory_code && p.id !== product.id)
        .slice(0, 4);
};

// Helper to get bestseller products
export const getBestsellerProducts = (limit: number = 8): ProductV2[] => {
    return products.filter(p => p.is_bestseller).slice(0, limit);
};

// Helper to get new products
export const getNewProducts = (limit: number = 8): ProductV2[] => {
    return products.filter(p => p.is_new).slice(0, limit);
};
