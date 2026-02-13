import { ProductV2 } from "../../types/product";

export const lipMakeupProducts: ProductV2[] = [
    // --- LIP SCRUBS ---
    {
        id: "LM-LS-001", sku: "LM-LS-M-001", slug: "triphala-lip-scrub", name: "Triphala Lip Scrub", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Scrubs", subcategory_code: "LS",
        short_description: "Exfoliates lips.", long_description: "Exfoliates dry, chapped lips.", base_price: 249, rating: 4.6, reviews_count: 70, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop", alt_text: "Lip Scrub" }], seo: { meta_title: "Lip Scrub", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-ls-1", variant_sku: "lm-ls-1", variant_name: "15g", variant_price: 249, variant_mrp: 399, discount_percentage: 37, discounted_price: 249, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LS-002", sku: "LM-LS-M-002", slug: "special-herbal-lip-scrub", name: "Special Herbal Lip Scrub", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Scrubs", subcategory_code: "LS",
        short_description: "Intensive scrub.", long_description: "Intensive lip exfoliation with herbs.", base_price: 299, rating: 4.7, reviews_count: 60, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2670&auto=format&fit=crop", alt_text: "Lip Scrub" }], seo: { meta_title: "Lip Scrub", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-ls-2", variant_sku: "lm-ls-2", variant_name: "15g", variant_price: 299, variant_mrp: 449, discount_percentage: 33, discounted_price: 299, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- LIP BALMS ---
    {
        id: "LM-LB-001", sku: "LM-LB-M-001", slug: "classic-herbal-lip-balm", name: "Classic Herbal Lip Balm", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Balms", subcategory_code: "LB",
        short_description: "Daily moisture.", long_description: "Daily moisturizing balm.", base_price: 199, rating: 4.8, reviews_count: 200, tags: [], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620917670396-37f2277d03f5?q=80&w=2574&auto=format&fit=crop", alt_text: "Lip Balm" }], seo: { meta_title: "Lip Balm", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lb-1", variant_sku: "lm-lb-1", variant_name: "10g", variant_price: 199, variant_mrp: 299, discount_percentage: 33, discounted_price: 199, weight_grams: 10, stock_quantity: 200, reorder_point: 30, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LB-002", sku: "LM-LB-M-002", slug: "lemon-lip-balm", name: "Lemon Lip Balm", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Balms", subcategory_code: "LB",
        short_description: "Zesty lemon.", long_description: "Zesty lemon flavor, brightens lips.", base_price: 199, rating: 4.7, reviews_count: 120, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2576&auto=format&fit=crop", alt_text: "Lip Balm" }], seo: { meta_title: "Lip Balm", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lb-2", variant_sku: "lm-lb-2", variant_name: "10g", variant_price: 199, variant_mrp: 299, discount_percentage: 33, discounted_price: 199, weight_grams: 10, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LB-003", sku: "LM-LB-M-003", slug: "lavender-lip-balm", name: "Lavender Lip Balm", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Balms", subcategory_code: "LB",
        short_description: "Soothing lavender.", long_description: "Soothing lavender scent.", base_price: 249, rating: 4.8, reviews_count: 110, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1556228720-19875c744219?q=80&w=2670&auto=format&fit=crop", alt_text: "Lip Balm" }], seo: { meta_title: "Lip Balm", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lb-3", variant_sku: "lm-lb-3", variant_name: "10g", variant_price: 249, variant_mrp: 349, discount_percentage: 28, discounted_price: 249, weight_grams: 10, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LB-004", sku: "LM-LB-M-004", slug: "orange-lip-balm", name: "Orange Lip Balm", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Balms", subcategory_code: "LB",
        short_description: "Refreshing orange.", long_description: "Refreshing orange zest.", base_price: 199, rating: 4.6, reviews_count: 90, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop", alt_text: "Lip Balm" }], seo: { meta_title: "Lip Balm", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lb-4", variant_sku: "lm-lb-4", variant_name: "10g", variant_price: 199, variant_mrp: 299, discount_percentage: 33, discounted_price: 199, weight_grams: 10, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- LIP SERUMS ---
    {
        id: "LM-LSe-001", sku: "LM-LSe-M-001", slug: "dry-lip-repair-serum", name: "Dry Lip Repair Serum", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Serums", subcategory_code: "LSe",
        short_description: "Deep repair.", long_description: "Deep repair for severely dry lips.", base_price: 399, rating: 4.7, reviews_count: 60, tags: [], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2680&auto=format&fit=crop", alt_text: "Lip Serum" }], seo: { meta_title: "Lip Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lse-1", variant_sku: "lm-lse-1", variant_name: "10ml", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 15, stock_quantity: 80, reorder_point: 10, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LSe-002", sku: "LM-LSe-M-002", slug: "uneven-tone-lip-serum", name: "Uneven Tone Lip Serum", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Serums", subcategory_code: "LSe",
        short_description: "Pigmentation control.", long_description: "Helps with pigmentation on lips.", base_price: 449, rating: 4.6, reviews_count: 50, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=2666&auto=format&fit=crop", alt_text: "Lip Serum" }], seo: { meta_title: "Lip Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lse-2", variant_sku: "lm-lse-2", variant_name: "10ml", variant_price: 449, variant_mrp: 649, discount_percentage: 30, discounted_price: 449, weight_grams: 15, stock_quantity: 80, reorder_point: 10, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- LIP GLOSS ---
    {
        id: "LM-LG-001", sku: "LM-LG-M-001", slug: "herbal-lip-gloss", name: "Herbal Lip Gloss", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Gloss", subcategory_code: "LG",
        short_description: "Natural shine.", long_description: "Natural shine without stickiness.", base_price: 299, rating: 4.7, reviews_count: 80, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae88?q=80&w=2670&auto=format&fit=crop", alt_text: "Lip Gloss" }], seo: { meta_title: "Lip Gloss", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lg-1", variant_sku: "lm-lg-1", variant_name: "6ml", variant_price: 299, variant_mrp: 499, discount_percentage: 40, discounted_price: 299, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LG-002", sku: "LM-LG-M-002", slug: "gold-lip-gloss", name: "Gold Lip Gloss", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Gloss", subcategory_code: "LG",
        short_description: "Golden shimmer.", long_description: "Lip gloss with gold shimmer.", base_price: 399, rating: 4.8, reviews_count: 60, tags: [], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2574&auto=format&fit=crop", alt_text: "Lip Gloss" }], seo: { meta_title: "Lip Gloss", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lg-2", variant_sku: "lm-lg-2", variant_name: "6ml", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LG-003", sku: "LM-LG-M-003", slug: "premium-shine-lip-gloss", name: "Premium Shine Lip Gloss", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lip Gloss", subcategory_code: "LG",
        short_description: "High shine.", long_description: "Premium high gloss shine.", base_price: 499, rating: 4.9, reviews_count: 50, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=2670&auto=format&fit=crop", alt_text: "Lip Gloss" }], seo: { meta_title: "Lip Gloss", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lg-3", variant_sku: "lm-lg-3", variant_name: "6ml", variant_price: 499, variant_mrp: 699, discount_percentage: 28, discounted_price: 499, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- LIPSTICK ---
    {
        id: "LM-LP-001", sku: "LM-LP-M-001", slug: "herbal-lipstick", name: "Herbal Lipstick", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lipstick", subcategory_code: "LP",
        short_description: "Matte herbal.", long_description: "Long lasting herbal lipstick.", base_price: 599, rating: 4.7, reviews_count: 40, tags: [], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1586495777744-4413f21062dc?q=80&w=2670&auto=format&fit=crop", alt_text: "Lipstick" }], seo: { meta_title: "Lipstick", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lp-1", variant_sku: "lm-lp-1", variant_name: "4g", variant_price: 599, variant_mrp: 799, discount_percentage: 25, discounted_price: 599, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "LM-LP-002", sku: "LM-LP-M-002", slug: "maroon-herbal-lipstick", name: "Maroon Herbal Lipstick", brand: "BeautyBeet", status: "published", category: "Lip Care & Makeup", category_code: "LM", subcategory: "Lipstick", subcategory_code: "LP",
        short_description: "Deep maroon.", long_description: "Rich maroon shade.", base_price: 599, rating: 4.8, reviews_count: 45, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1625093742435-09cdd04494eb?q=80&w=2574&auto=format&fit=crop", alt_text: "Lipstick" }], seo: { meta_title: "Lipstick", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "lm-lp-2", variant_sku: "lm-lp-2", variant_name: "4g", variant_price: 599, variant_mrp: 799, discount_percentage: 25, discounted_price: 599, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- EYE CARE (One Item: 62) ---
    {
        id: "EC-MA-001", sku: "EC-MA-M-001", slug: "herbal-eye-mascara", name: "Herbal Eye Mascara", brand: "BeautyBeet", status: "published", category: "Eye Care", category_code: "EC", subcategory: "Eye Makeup", subcategory_code: "EM",
        short_description: "Natural definition.", long_description: "Growth promoting herbal mascara.", base_price: 399, rating: 4.6, reviews_count: 60, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=2525&auto=format&fit=crop", alt_text: "Mascara" }], seo: { meta_title: "Mascara", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "ec-ma-1", variant_sku: "ec-ma-1", variant_name: "10ml", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 20, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_volumizing_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    }
];
