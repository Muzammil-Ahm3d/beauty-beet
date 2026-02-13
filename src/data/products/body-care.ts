import { ProductV2 } from "../../types/product";

export const bodyCareProducts: ProductV2[] = [
    // --- BODY SCRUBS ---
    {
        id: "BC-BS-001", sku: "BC-BS-M-001", slug: "kumkumadi-body-scrub-rose", name: "Kumkumadi Body Scrub with Rose Petals", brand: "BeautyBeet", status: "published", category: "Body Care", category_code: "BC", subcategory: "Body Scrubs", subcategory_code: "BS",
        short_description: "Exfoliating scrub.", long_description: "Exfoliating scrub for soft, glowing skin.", base_price: 599, rating: 4.8, reviews_count: 90, tags: [], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620917670397-a4a5402a3c6c?q=80&w=2574&auto=format&fit=crop", alt_text: "Body Scrub" }], seo: { meta_title: "Body Scrub", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "bc-bs-1", variant_sku: "bc-bs-1", variant_name: "200g", variant_price: 599, variant_mrp: 799, discount_percentage: 25, discounted_price: 599, weight_grams: 200, stock_quantity: 50, reorder_point: 10, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "BC-BS-002", sku: "BC-BS-M-002", slug: "kumkumadi-body-scrub-tesu", name: "Kumkumadi Body Scrub with Tesu Flower", brand: "BeautyBeet", status: "published", category: "Body Care", category_code: "BC", subcategory: "Body Scrubs", subcategory_code: "BS",
        short_description: "Tesu Flower essence.", long_description: "Unique formulation with Tesu flower for skin health.", base_price: 599, rating: 4.7, reviews_count: 80, tags: [], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2670&auto=format&fit=crop", alt_text: "Body Scrub" }], seo: { meta_title: "Body Scrub", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "bc-bs-2", variant_sku: "bc-bs-2", variant_name: "200g", variant_price: 599, variant_mrp: 799, discount_percentage: 25, discounted_price: 599, weight_grams: 200, stock_quantity: 50, reorder_point: 10, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- SOAPS ---
    {
        id: "BC-SO-001", sku: "BC-SO-M-001", slug: "kumkumadi-soap", name: "Kumkumadi Soap", brand: "BeautyBeet", status: "published", category: "Body Care", category_code: "BC", subcategory: "Soaps", subcategory_code: "SO",
        short_description: "Handmade soap.", long_description: "Handmade soap with Kumkumadi oil.", base_price: 199, rating: 4.6, reviews_count: 200, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=2598&auto=format&fit=crop", alt_text: "Soap" }], seo: { meta_title: "Soap", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "bc-so-1", variant_sku: "bc-so-1", variant_name: "100g", variant_price: 199, variant_mrp: 299, discount_percentage: 33, discounted_price: 199, weight_grams: 100, stock_quantity: 200, reorder_point: 30, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "BC-SO-002", sku: "BC-SO-M-002", slug: "kumkumadi-goat-milk-soap", name: "Kumkumadi Goat Milk Soap", brand: "BeautyBeet", status: "published", category: "Body Care", category_code: "BC", subcategory: "Soaps", subcategory_code: "SO",
        short_description: "Moisturizing.", long_description: "Moisturizing with goat milk and Ayurvedic herbs.", base_price: 249, rating: 4.8, reviews_count: 150, tags: [], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1547793549-70fa8eb8264e?q=80&w=2669&auto=format&fit=crop", alt_text: "Soap" }], seo: { meta_title: "Soap", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "bc-so-2", variant_sku: "bc-so-2", variant_name: "100g", variant_price: 249, variant_mrp: 349, discount_percentage: 30, discounted_price: 249, weight_grams: 100, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "BC-SO-003", sku: "BC-SO-M-003", slug: "orange-peel-soap", name: "Orange Peel Soap", brand: "BeautyBeet", status: "published", category: "Body Care", category_code: "BC", subcategory: "Soaps", subcategory_code: "SO",
        short_description: "Citrus fresh.", long_description: "Refreshing citrus soap for daily use.", base_price: 199, rating: 4.7, reviews_count: 180, tags: [], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1629215037473-205128038596?q=80&w=2670&auto=format&fit=crop", alt_text: "Soap" }], seo: { meta_title: "Soap", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "bc-so-3", variant_sku: "bc-so-3", variant_name: "100g", variant_price: 199, variant_mrp: 299, discount_percentage: 33, discounted_price: 199, weight_grams: 100, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    }
];
