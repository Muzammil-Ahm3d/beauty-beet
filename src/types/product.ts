export type CategoryCode = 'HC' | 'SC' | 'BC' | 'LM' | 'EC';
export type SubcategoryCode = string; // e.g., 'HO', 'HS', 'FG'

export interface ProductVariant {
    variant_id: string; // SKU or UUID
    variant_sku: string;
    variant_name: string; // e.g., "50ml", "100g"
    variant_price: number;
    variant_mrp: number;
    discount_percentage: number;
    discounted_price: number;
    weight_grams: number;
    stock_quantity: number;
    reorder_point: number;
    image_url: string;
    dimensions?: string;
}

export interface Ingredient {
    name: string;
    percentage?: string;
    benefits: string;
    role?: string;
    ayurvedic_benefit?: string;
    source?: string;
    allergen?: boolean;
}

export interface ProductImage {
    type: 'hero' | 'gallery' | 'lifestyle' | 'variant';
    url: string;
    alt_text: string;
}

export interface Specification {
    key: string;
    value: string;
}

export interface Testimonial {
    id: string;
    type: 'image' | 'video';
    url: string;
    thumbnail?: string; // For videos
    caption?: string;   // e.g., "Day 1", "Week 2"
    subtext?: string;   // Longer description
    author?: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number; // 1-5
    title: string;
    content: string;
    date: string;
    verified: boolean;
    helpful_count: number;
}

export interface SeoMetadata {
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    canonical_url?: string;
    og_image?: string;
}

export interface ProductV2 {
    // Core Identifiers
    id: string; // e.g., HC-HO-001
    sku: string; // Master SKU
    slug: string; // URL-safe slug

    // Basic Info
    name: string;
    brand: "BeautyBeet";
    status: 'draft' | 'published' | 'archived';

    // Categorization
    category: string;
    category_code: CategoryCode;
    subcategory: string;
    subcategory_code: SubcategoryCode;

    // Descriptions
    short_description: string; // For cards/meta
    long_description: string; // Rich text HTML allowed

    // Price & Variants
    base_price: number; // Lowest price among variants
    price_range?: string; // e.g., "₹299 - ₹799"
    variants: ProductVariant[];

    // Rich Content
    key_ingredients: Ingredient[];
    full_ingredient_list: string;
    benefits: string[];
    usage_instructions: {
        steps: string[];
        frequency?: string;
        best_time?: string;
    };
    additional_tips?: string[];
    specifications?: Specification[];

    // Detailed Content (PDF Extraction)
    detailed_description?: string; // HTML/Rich text
    testimonials?: Testimonial[];
    faqs?: FAQ[];

    // AI Reviews & Insights
    ai_summary?: string; // "AI-generated from customer reviews..."
    ai_popular_topics?: AITopic[]; // Clickable cloud
    ai_verified_reviews?: AIVerifiedReview[]; // The filtered/highlighted reviews

    // Media
    images: ProductImage[];

    // SEO
    seo: SeoMetadata;

    // Social Proof
    rating: number;
    reviews_count: number;
    reviews?: Review[];

    // Metadata
    is_new?: boolean;
    is_bestseller?: boolean;
    is_trending?: boolean;
    tags: string[];
}

export interface AITopic {
    topic: string;
    count: number;
    sentiment: 'positive' | 'neutral' | 'negative';
}

export interface AIVerifiedReview {
    id: string;
    author: string;
    rating: number; // 1-5
    title?: string;
    content: string; // The review text
    date?: string;
    verified: boolean;
    sentiment?: 'positive' | 'neutral' | 'negative';
    highlighted_topics?: string[]; // Topics mentioned in this review
}


