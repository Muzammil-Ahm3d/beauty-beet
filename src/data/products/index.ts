import { ALL_PRODUCTS, SimpleProduct } from "./all-products";
import { CATEGORIES } from "../categories";

// Export all products
export const products = ALL_PRODUCTS;

// Re-export the SimpleProduct type
export type { SimpleProduct };

// Helper to find product by slug
export const getProductBySlug = (slug: string): SimpleProduct | undefined => {
    return products.find(p => p.slug === slug);
};

// Helper to get products by category slug
export const getProductsByCategory = (categorySlug: string): SimpleProduct[] => {
    const category = CATEGORIES[categorySlug];
    if (!category) return [];
    return products.filter(p => p.category_code === category.id);
};

// Helper to get products by subcategory slug
export const getProductsBySubcategory = (categorySlug: string, subcategorySlug: string): SimpleProduct[] => {
    const category = CATEGORIES[categorySlug];
    if (!category) return [];
    const subcategory = category.subcategories[subcategorySlug];
    if (!subcategory) return [];
    return products.filter(p => p.subcategory_code === subcategory.id);
};

// Helper to find related products (same subcategory)
export const getRelatedProducts = (product: SimpleProduct): SimpleProduct[] => {
    return products
        .filter(p => p.subcategory_code === product.subcategory_code && p.id !== product.id)
        .slice(0, 4);
};

// Helper to get bestseller products
export const getBestsellerProducts = (limit: number = 8): SimpleProduct[] => {
    return products.filter(p => p.is_bestseller).slice(0, limit);
};

// Helper to get new products
export const getNewProducts = (limit: number = 8): SimpleProduct[] => {
    return products.filter(p => p.is_new).slice(0, limit);
};
