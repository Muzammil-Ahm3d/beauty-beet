import { ProductV2 } from "../../types/product";

export const skinCareProducts: ProductV2[] = [
    // --- FACE OILS & SERUMS ---
    {
        id: "SC-FO-001", sku: "SC-FO-M-001", slug: "kumkumadi-face-oil", name: "Kumkumadi Face Oil", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Traditional Ayurvedic beauty oil.", long_description: "Traditional Ayurvedic beauty oil for glowing skin.", base_price: 899, rating: 4.9, reviews_count: 300, tags: ["bestseller"], is_bestseller: true,
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Kumkumadi Oil" }], seo: { meta_title: "Kumkumadi Oil", meta_description: "Ayurvedic oil for glow", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-1", variant_sku: "sc-fo-1", variant_name: "30ml", variant_price: 899, variant_mrp: 1299, discount_percentage: 30, discounted_price: 899, weight_grams: 50, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [{ name: "Saffron", benefits: "Glow" }, { name: "Sandalwood", benefits: "Soothing" }], full_ingredient_list: "Saffron, Sandalwood, oils", benefits: ["Glow", "Anti-aging"], usage_instructions: { steps: ["Apply at night"] }
    },
    {
        id: "SC-FO-002", sku: "SC-FO-M-002", slug: "24k-gold-face-oil", name: "24K Gold Face Oil", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Luxury oil with 24K gold.", long_description: "Luxury oil with 24K gold particles for radiance.", base_price: 1299, rating: 4.8, reviews_count: 150, tags: ["luxury"],
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Gold Oil" }], seo: { meta_title: "Gold Face Oil", meta_description: "Luxury gold oil", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-2", variant_sku: "sc-fo-2", variant_name: "30ml", variant_price: 1299, variant_mrp: 1999, discount_percentage: 35, discounted_price: 1299, weight_grams: 50, stock_quantity: 50, reorder_point: 10, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-003", sku: "SC-FO-M-003", slug: "ayurvedic-anti-acne-face-serum", name: "Ayurvedic Anti-Acne Face Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Clears acne.", long_description: "Clears acne and prevents future breakouts.", base_price: 599, rating: 4.7, reviews_count: 180, tags: ["acne-control"],
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Acne Serum" }], seo: { meta_title: "Acne Serum", meta_description: "Ayurvedic acne serum", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-3", variant_sku: "sc-fo-3", variant_name: "30ml", variant_price: 599, variant_mrp: 899, discount_percentage: 33, discounted_price: 599, weight_grams: 50, stock_quantity: 80, reorder_point: 15, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [{ name: "Neem", benefits: "Antibacterial" }, { name: "Tea Tree", benefits: "Acne control" }], full_ingredient_list: "Neem, Tea Tree, Turmeric", benefits: ["Reduces acne", "Clear skin"], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-004", sku: "SC-FO-M-004", slug: "ayurvedic-serum-for-dry-skin", name: "Ayurvedic Serum for Dry Skin", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Deep hydration.", long_description: "Deep hydration for parched skin.", base_price: 599, rating: 4.6, reviews_count: 90, tags: ["dry-skin"],
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Dry Skin Serum" }], seo: { meta_title: "Dry Skin Serum", meta_description: "Hydrating serum", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-4", variant_sku: "sc-fo-4", variant_name: "30ml", variant_price: 599, variant_mrp: 899, discount_percentage: 33, discounted_price: 599, weight_grams: 50, stock_quantity: 80, reorder_point: 15, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-005", sku: "SC-FO-M-005", slug: "ayurvedic-skin-brightening-serum", name: "Ayurvedic Skin Brightening Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Evens skin tone.", long_description: "Evens skin tone and reduces pigmentation.", base_price: 649, rating: 4.8, reviews_count: 210, tags: ["brightening"],
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Brightening Serum" }], seo: { meta_title: "Brightening Serum", meta_description: "Skin brightening", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-5", variant_sku: "sc-fo-5", variant_name: "30ml", variant_price: 649, variant_mrp: 949, discount_percentage: 31, discounted_price: 649, weight_grams: 50, stock_quantity: 90, reorder_point: 20, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-006", sku: "SC-FO-M-006", slug: "ayurvedic-glowing-skin-serum", name: "Ayurvedic Glowing Skin Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Natural glow.", long_description: "For that natural, healthy inner glow.", base_price: 649, rating: 4.7, reviews_count: 160, tags: ["glow"],
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Glow Serum" }], seo: { meta_title: "Glow Serum", meta_description: "Glowing skin", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-6", variant_sku: "sc-fo-6", variant_name: "30ml", variant_price: 649, variant_mrp: 949, discount_percentage: 31, discounted_price: 649, weight_grams: 50, stock_quantity: 90, reorder_point: 20, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-007", sku: "SC-FO-M-007", slug: "ayurvedic-miraculous-beauty-serum", name: "Ayurvedic Miraculous Beauty Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Premium all-in-one.", long_description: "Premium all-in-one serum for total skin transformation.", base_price: 1499, rating: 5.0, reviews_count: 99, tags: ["premium"],
        images: [{ type: "hero", url: "/images/products/face_serum.png", alt_text: "Miraculous Serum" }], seo: { meta_title: "Miraculous Serum", meta_description: "Premium serum", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-7", variant_sku: "sc-fo-7", variant_name: "30ml", variant_price: 1499, variant_mrp: 2499, discount_percentage: 40, discounted_price: 1499, weight_grams: 50, stock_quantity: 40, reorder_point: 10, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- FACE GELS ---
    {
        id: "SC-FG-001", sku: "SC-FG-M-001", slug: "kumkumadi-gel", name: "Kumkumadi Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Lightweight gel.", long_description: "Lightweight gel version of the classic oil.", base_price: 499, rating: 4.7, reviews_count: 120, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Kumkumadi Gel" }], seo: { meta_title: "Kumkumadi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-1", variant_sku: "sc-fg-1", variant_name: "100g", variant_price: 499, variant_mrp: 699, discount_percentage: 28, discounted_price: 499, weight_grams: 100, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-002", sku: "SC-FG-M-002", slug: "24k-gold-gel", name: "24K Gold Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Radiance boosting.", long_description: "Radiance boosting gel with gold flakes.", base_price: 599, rating: 4.6, reviews_count: 80, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Gold Gel" }], seo: { meta_title: "Gold Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-2", variant_sku: "sc-fg-2", variant_name: "100g", variant_price: 599, variant_mrp: 899, discount_percentage: 33, discounted_price: 599, weight_grams: 100, stock_quantity: 80, reorder_point: 10, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-003", sku: "SC-FG-M-003", slug: "kesar-haldi-chandan-gel", name: "Kesar Haldi Chandan Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "For uneven tone.", long_description: "Best for treating uneven skin tone with Saffron and Turmeric.", base_price: 399, rating: 4.8, reviews_count: 200, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Kesar Gel" }], seo: { meta_title: "Kesar Haldi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-3", variant_sku: "sc-fg-3", variant_name: "100g", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 100, stock_quantity: 120, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-004", sku: "SC-FG-M-004", slug: "neem-tulsi-gel", name: "Neem Tulsi Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Acne control.", long_description: "Perfect for acne-prone and oily skin.", base_price: 349, rating: 4.7, reviews_count: 150, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Neem Gel" }], seo: { meta_title: "Neem Tulsi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-4", variant_sku: "sc-fg-4", variant_name: "100g", variant_price: 349, variant_mrp: 499, discount_percentage: 30, discounted_price: 349, weight_grams: 100, stock_quantity: 130, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-005", sku: "SC-FG-M-005", slug: "rose-petals-gel", name: "Rose Petals Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Deep cleansing.", long_description: "Deep cleansing and toning gel.", base_price: 399, rating: 4.8, reviews_count: 130, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Rose Gel" }], seo: { meta_title: "Rose Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-5", variant_sku: "sc-fg-5", variant_name: "100g", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 100, stock_quantity: 120, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-006", sku: "SC-FG-M-006", slug: "orange-peel-gel", name: "Orange Peel Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Improves complexion.", long_description: "Improves skin complexion and texture.", base_price: 399, rating: 4.6, reviews_count: 110, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Orange Gel" }], seo: { meta_title: "Orange Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-6", variant_sku: "sc-fg-6", variant_name: "100g", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 100, stock_quantity: 110, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-007", sku: "SC-FG-M-007", slug: "mulethi-gel", name: "Mulethi Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Anti-ageing.", long_description: "Powerful anti-ageing properties.", base_price: 449, rating: 4.7, reviews_count: 90, tags: ["anti-ageing"],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Mulethi Gel" }], seo: { meta_title: "Mulethi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-7", variant_sku: "sc-fg-7", variant_name: "100g", variant_price: 449, variant_mrp: 649, discount_percentage: 30, discounted_price: 449, weight_grams: 100, stock_quantity: 90, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-008", sku: "SC-FG-M-008", slug: "d-tan-facial-gel", name: "D-Tan Facial Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Tan removal.", long_description: "Removes tan and sun damage.", base_price: 499, rating: 4.6, reviews_count: 140, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "D-Tan Gel" }], seo: { meta_title: "D-Tan Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-8", variant_sku: "sc-fg-8", variant_name: "100g", variant_price: 499, variant_mrp: 699, discount_percentage: 28, discounted_price: 499, weight_grams: 100, stock_quantity: 130, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- FACE PACKS ---
    {
        id: "SC-FP-001", sku: "SC-FP-M-001", slug: "kumkumadi-face-pack", name: "Kumkumadi Face Pack", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Packs & Masks", subcategory_code: "FP",
        short_description: "Instant glow.", long_description: "Instant glow face pack.", base_price: 599, rating: 4.8, reviews_count: 100, tags: [],
        images: [{ type: "hero", url: "/images/products/prod_deep_repair_mask.png", alt_text: "Face Pack" }], seo: { meta_title: "Face Pack", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fp-1", variant_sku: "sc-fp-1", variant_name: "100g", variant_price: 599, variant_mrp: 799, discount_percentage: 25, discounted_price: 599, weight_grams: 100, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FP-002", sku: "SC-FP-M-002", slug: "herbal-multani-face-pack", name: "Herbal Multani Face Pack", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Packs & Masks", subcategory_code: "FP",
        short_description: "Deep cleaning.", long_description: "Deep cleaning clay pack for oily skin.", base_price: 299, rating: 4.7, reviews_count: 180, tags: [],
        images: [{ type: "hero", url: "/images/products/prod_deep_repair_mask.png", alt_text: "Face Pack" }], seo: { meta_title: "Face Pack", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fp-2", variant_sku: "sc-fp-2", variant_name: "100g", variant_price: 299, variant_mrp: 499, discount_percentage: 40, discounted_price: 299, weight_grams: 100, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FP-003", sku: "SC-FP-M-003", slug: "skin-brightening-face-pack", name: "Skin Brightening Face Pack", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Packs & Masks", subcategory_code: "FP",
        short_description: "Luminous skin.", long_description: "For luminous, bright skin.", base_price: 449, rating: 4.6, reviews_count: 120, tags: [],
        images: [{ type: "hero", url: "/images/products/prod_deep_repair_mask.png", alt_text: "Face Pack" }], seo: { meta_title: "Face Pack", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fp-3", variant_sku: "sc-fp-3", variant_name: "100g", variant_price: 449, variant_mrp: 649, discount_percentage: 30, discounted_price: 449, weight_grams: 100, stock_quantity: 120, reorder_point: 20, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- CLEANSERS ---
    {
        id: "SC-CL-001", sku: "SC-CL-M-001", slug: "gentle-foaming-face-wash", name: "Gentle Foaming Face Wash", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Cleansers", subcategory_code: "CL",
        short_description: "Gentle daily wash.", long_description: "Suitable for all skin types, gentle daily cleaner.", base_price: 349, rating: 4.7, reviews_count: 250, tags: [],
        images: [{ type: "hero", url: "/images/products/face_cleanser.png", alt_text: "Face Wash" }], seo: { meta_title: "Face Wash", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-cl-1", variant_sku: "sc-cl-1", variant_name: "100ml", variant_price: 349, variant_mrp: 499, discount_percentage: 30, discounted_price: 349, weight_grams: 110, stock_quantity: 200, reorder_point: 50, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    }
];
