import { ProductV2 } from "../../types/product";

export const hairCareProducts: ProductV2[] = [
    // --- HAIR OILS (8 Products) ---
    {
        id: "HC-HO-001",
        sku: "HC-HO-MASTER-001",
        slug: "ayurvedic-hair-oil-growth-dandruff",
        name: "Ayurvedic Hair Oil – Hair Growth & Dandruff Removal",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Natural hair oil promoting growth and eliminating dandruff.",
        long_description: "<p>Our Ayurvedic Hair Oil – Hair Growth & Dandruff Removal is a scientifically formulated blend combining the most potent Ayurvedic herbs known for centuries to promote hair growth and combat dandruff.</p>",
        base_price: 299,
        review_count: 120, // fixed typo from reviews_count if any
        rating: 4.8,
        reviews_count: 120, // keeping correct property
        is_bestseller: true,
        tags: ["hair-growth", "dandruff-removal", "ayurvedic"],
        images: [
            { type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Ayurvedic Hair Oil Hero" }
        ],
        seo: {
            meta_title: "Ayurvedic Hair Oil for Hair Growth & Dandruff | BeautyBeet",
            meta_description: "Natural hair oil with Brahmi and Bhringraj for hair growth and dandruff removal.",
            meta_keywords: ["ayurvedic hair oil", "hair growth"]
        },
        variants: [
            {
                variant_id: "HC-HO-50ML-001",
                variant_sku: "HC-HO-50ML-001",
                variant_name: "50ml",
                variant_price: 299,
                variant_mrp: 349,
                discount_percentage: 15,
                discounted_price: 254,
                weight_grams: 60,
                stock_quantity: 150,
                reorder_point: 50,
                image_url: "/images/products/cat_hair_oils.png"
            },
            {
                variant_id: "HC-HO-100ML-001",
                variant_sku: "HC-HO-100ML-001",
                variant_name: "100ml",
                variant_price: 449,
                variant_mrp: 549,
                discount_percentage: 18,
                discounted_price: 368,
                weight_grams: 115,
                stock_quantity: 200,
                reorder_point: 75,
                image_url: "/images/products/cat_hair_oils.png"
            }
        ],
        key_ingredients: [
            { name: "Brahmi", percentage: "8%", benefits: "Strengthening" },
            { name: "Bhringraj", percentage: "10%", benefits: "Growth" }
        ],
        full_ingredient_list: "Coconut Oil, Sesame Oil, Brahmi, Bhringraj, Neem",
        benefits: ["Promotes growth", "Removes dandruff"],
        usage_instructions: { steps: ["Apply", "Massage", "Wash"], frequency: "3x/week" }
    },
    // Adding remaining Hair Oils (2-8)
    {
        id: "HC-HO-002",
        sku: "HC-HO-MASTER-002",
        slug: "ayurvedic-hair-oil-baldness-care",
        name: "Ayurvedic Hair Oil – Baldness Care",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Specialized hair oil for baldness treatment.",
        long_description: "Intensive care for receding hairlines and bald patches.",
        base_price: 349,
        rating: 4.7,
        reviews_count: 85,
        tags: ["baldness"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Baldness Care" }],
        seo: { meta_title: "Baldness Care Oil", meta_description: "Baldness treatment.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-002", variant_sku: "HC-HO-50ML-002", variant_name: "50ml", variant_price: 349, variant_mrp: 399, discount_percentage: 13, discounted_price: 304, weight_grams: 60, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HO-003",
        sku: "HC-HO-MASTER-003",
        slug: "ayurvedic-hair-oil-density-boost",
        name: "Ayurvedic Hair Oil – Hair Density Boost",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Increases hair density and volume.",
        long_description: "Increases hair density and volume with regular use.",
        base_price: 299,
        rating: 4.9,
        reviews_count: 210,
        tags: ["density"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Density Boost" }],
        seo: { meta_title: "Hair Density Oil", meta_description: "Boost hair density.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-003", variant_sku: "HC-HO-50ML-003", variant_name: "50ml", variant_price: 299, variant_mrp: 0, discount_percentage: 0, discounted_price: 299, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HO-004",
        sku: "HC-HO-MASTER-004",
        slug: "ayurvedic-hair-oil-shiny-hair",
        name: "Ayurvedic Hair Oil – Shiny Hair",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Restores natural shine.",
        long_description: "Restores natural shine and luster to dull, lifeless hair.",
        base_price: 279,
        rating: 4.6,
        reviews_count: 95,
        tags: ["shiny-hair"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Shiny Hair" }],
        seo: { meta_title: "Shiny Hair Oil", meta_description: "For shiny hair.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-004", variant_sku: "HC-HO-50ML-004", variant_name: "50ml", variant_price: 279, variant_mrp: 0, discount_percentage: 0, discounted_price: 279, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HO-005",
        sku: "HC-HO-MASTER-005",
        slug: "premium-ayurvedic-hair-oil-all-problems",
        name: "Premium Ayurvedic Hair Oil – All Hair Problems",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "One-stop solution for all hair concerns.",
        long_description: "One-stop solution for all hair concerns including fall, dandruff, and breakage.",
        base_price: 399,
        rating: 5.0,
        reviews_count: 350,
        tags: ["premium", "all-in-one"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Premium Oil" }],
        seo: { meta_title: "Premium Hair Oil", meta_description: "All in one solution.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-005", variant_sku: "HC-HO-50ML-005", variant_name: "50ml", variant_price: 399, variant_mrp: 0, discount_percentage: 0, discounted_price: 399, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HO-006",
        sku: "HC-HO-MASTER-006",
        slug: "herbal-hair-nourishing-oil",
        name: "Herbal Hair Nourishing Oil",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Daily nourishment.",
        long_description: "Daily nourishment for healthy, manageable hair.",
        base_price: 229,
        rating: 4.5,
        reviews_count: 60,
        tags: ["nourishing"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Nourishing Oil" }],
        seo: { meta_title: "Nourishing Hair Oil", meta_description: "Daily hair oil.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-006", variant_sku: "HC-HO-50ML-006", variant_name: "50ml", variant_price: 229, variant_mrp: 0, discount_percentage: 0, discounted_price: 229, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HO-007",
        sku: "HC-HO-MASTER-007",
        slug: "onion-hair-oil",
        name: "Onion Hair Oil",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Rich in sulfur.",
        long_description: "Rich in sulfur to prevent breakage and promote growth.",
        base_price: 199,
        rating: 4.7,
        reviews_count: 180,
        tags: ["onion"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Onion Oil" }],
        seo: { meta_title: "Onion Hair Oil", meta_description: "Onion oil for hair.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-007", variant_sku: "HC-HO-50ML-007", variant_name: "50ml", variant_price: 199, variant_mrp: 0, discount_percentage: 0, discounted_price: 199, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HO-008",
        sku: "HC-HO-MASTER-008",
        slug: "coconut-herbal-hair-oil",
        name: "Coconut Herbal Hair Oil",
        brand: "BeautyBeet",
        status: "published",
        category: "Hair Care",
        category_code: "HC",
        subcategory: "Hair Oils",
        subcategory_code: "HO",
        short_description: "Traditional coconut oil.",
        long_description: "Traditional coconut oil enriched with Ayurvedic herbs.",
        base_price: 179,
        rating: 4.8,
        reviews_count: 500,
        tags: ["coconut"],
        images: [{ type: "hero", url: "/images/products/cat_hair_oils.png", alt_text: "Coconut Oil" }],
        seo: { meta_title: "Coconut Hair Oil", meta_description: "Pure coconut oil.", meta_keywords: [] },
        variants: [{ variant_id: "HC-HO-50ML-008", variant_sku: "HC-HO-50ML-008", variant_name: "50ml", variant_price: 179, variant_mrp: 0, discount_percentage: 0, discounted_price: 179, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_oils.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- HAIR SERUMS (7) ---
    {
        id: "HC-HS-001", sku: "HC-HS-MASTER-001", slug: "anti-hair-fall-serum", name: "Anti Hair Fall Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Reduces hair fall.", long_description: "Reduces hair fall by strengthening roots.", base_price: 349, rating: 4.7, reviews_count: 130, tags: ["serum"],
        images: [{ type: "hero", url: "/images/products/cat_hair_serums.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v1", variant_sku: "s1", variant_name: "30ml", variant_price: 349, variant_mrp: 0, discount_percentage: 0, discounted_price: 349, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_serums.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HS-002", sku: "HC-HS-MASTER-002", slug: "hair-growth-thickening-serum", name: "Hair Growth & Thickening Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Stimulates follicles.", long_description: "Stimulates follicles for thicker growth.", base_price: 399, rating: 4.8, reviews_count: 110, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_hair_serums.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v2", variant_sku: "s2", variant_name: "30ml", variant_price: 399, variant_mrp: 0, discount_percentage: 0, discounted_price: 399, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_serums.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HS-003", sku: "HC-HS-MASTER-003", slug: "scalp-soothing-serum", name: "Scalp Soothing Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Calms scalp.", long_description: "Calms itchy and irritated scalp.", base_price: 299, rating: 4.6, reviews_count: 70, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_hair_serums.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v3", variant_sku: "s3", variant_name: "30ml", variant_price: 299, variant_mrp: 0, discount_percentage: 0, discounted_price: 299, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_serums.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HS-004", sku: "HC-HS-MASTER-004", slug: "overnight-hair-repair-serum", name: "Overnight Hair Repair Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Works while you sleep.", long_description: "Repairs damage overnight.", base_price: 349, rating: 4.9, reviews_count: 90, tags: [],
        images: [{ type: "hero", url: "/images/products/prod_overnight_mask.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v4", variant_sku: "s4", variant_name: "30ml", variant_price: 349, variant_mrp: 0, discount_percentage: 0, discounted_price: 349, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/prod_overnight_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HS-005", sku: "HC-HS-MASTER-005", slug: "damage-repair-hair-serum", name: "Damage Repair Hair Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Repairs damage.", long_description: "Repairs damage from heat styling.", base_price: 329, rating: 4.7, reviews_count: 85, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_hair_serums.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v5", variant_sku: "s5", variant_name: "30ml", variant_price: 329, variant_mrp: 0, discount_percentage: 0, discounted_price: 329, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_serums.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HS-006", sku: "HC-HS-MASTER-006", slug: "pre-wash-nourishing-hair-serum", name: "Pre-Wash Nourishing Hair Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Pre-wash conditioner.", long_description: "Deep conditioning before shampoo.", base_price: 279, rating: 4.6, reviews_count: 60, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_hair_serums.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v6", variant_sku: "s6", variant_name: "30ml", variant_price: 279, variant_mrp: 0, discount_percentage: 0, discounted_price: 279, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_hair_serums.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HS-007", sku: "HC-HS-MASTER-007", slug: "multi-action-herbal-hair-serum-flagship", name: "Multi-Action Herbal Hair Serum", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Serums", subcategory_code: "HS",
        short_description: "Flagship serum.", long_description: "Tackles all concerns.", base_price: 449, rating: 5.0, reviews_count: 200, tags: ["flagship"],
        images: [{ type: "hero", url: "/images/products/hair_serum.png", alt_text: "Serum" }], seo: { meta_title: "Serum", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "v7", variant_sku: "s7", variant_name: "30ml", variant_price: 449, variant_mrp: 0, discount_percentage: 0, discounted_price: 449, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/hair_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- GELS (3) ---
    {
        id: "HC-HG-001", sku: "HC-HG-MASTER-001", slug: "anti-hair-fall-herbal-gel", name: "Anti Hair Fall Herbal Gel", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Gels & Treatments", subcategory_code: "HG",
        short_description: "Lightweight gel.", long_description: "Reduces hair fall.", base_price: 299, rating: 4.5, reviews_count: 40, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_leave_in.png", alt_text: "Gel" }], seo: { meta_title: "Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "g1", variant_sku: "g1", variant_name: "100g", variant_price: 299, variant_mrp: 0, discount_percentage: 0, discounted_price: 299, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_leave_in.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HG-002", sku: "HC-HG-MASTER-002", slug: "scalp-cooling-gel", name: "Scalp Cooling Gel", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Gels & Treatments", subcategory_code: "HG",
        short_description: "Cooling relief.", long_description: "Relief for hot scalp.", base_price: 249, rating: 4.7, reviews_count: 55, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_leave_in.png", alt_text: "Gel" }], seo: { meta_title: "Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "g2", variant_sku: "g2", variant_name: "100g", variant_price: 249, variant_mrp: 0, discount_percentage: 0, discounted_price: 249, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_leave_in.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-HG-003", sku: "HC-HG-MASTER-003", slug: "hair-growth-treatment-gel", name: "Hair Growth Treatment Gel", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Hair Gels & Treatments", subcategory_code: "HG",
        short_description: "Stimulates growth.", long_description: "Targeted gel treatment.", base_price: 329, rating: 4.6, reviews_count: 65, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_leave_in.png", alt_text: "Gel" }], seo: { meta_title: "Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "g3", variant_sku: "g3", variant_name: "100g", variant_price: 329, variant_mrp: 0, discount_percentage: 0, discounted_price: 329, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_leave_in.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- SHAMPOOS (6) ---
    {
        id: "HC-SH-001", sku: "HC-SH-MASTER-001", slug: "herbal-shampoo", name: "Herbal Shampoo", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Shampoo & Conditioner", subcategory_code: "SH",
        short_description: "Gentle cleanser.", long_description: "Gentle daily cleanser.", base_price: 299, rating: 4.6, reviews_count: 150, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_shampoos.png", alt_text: "Shampoo" }], seo: { meta_title: "Shampoo", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "s1", variant_sku: "s1", variant_name: "200ml", variant_price: 299, variant_mrp: 0, discount_percentage: 0, discounted_price: 299, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_shampoos.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-SH-002", sku: "HC-SH-MASTER-002", slug: "anti-hair-fall-shampoo", name: "Anti-Hair Fall Shampoo", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Shampoo & Conditioner", subcategory_code: "SH",
        short_description: "Strengthens roots.", long_description: "Specialized formula.", base_price: 329, rating: 4.8, reviews_count: 220, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_shampoos.png", alt_text: "Shampoo" }], seo: { meta_title: "Shampoo", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "s2", variant_sku: "s2", variant_name: "200ml", variant_price: 329, variant_mrp: 0, discount_percentage: 0, discounted_price: 329, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_shampoos.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-SH-003", sku: "HC-SH-MASTER-003", slug: "anti-dandruff-shampoo", name: "Anti-Dandruff Shampoo", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Shampoo & Conditioner", subcategory_code: "SH",
        short_description: "Eliminates dandruff.", long_description: "Eliminates dandruff effectively.", base_price: 329, rating: 4.7, reviews_count: 180, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_shampoos.png", alt_text: "Shampoo" }], seo: { meta_title: "Shampoo", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "s3", variant_sku: "s3", variant_name: "200ml", variant_price: 329, variant_mrp: 0, discount_percentage: 0, discounted_price: 329, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_shampoos.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-SH-004", sku: "HC-SH-MASTER-004", slug: "mild-daily-use-shampoo", name: "Mild Daily Use Shampoo", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Shampoo & Conditioner", subcategory_code: "SH",
        short_description: "pH balanced.", long_description: "Safe for everyday use.", base_price: 249, rating: 4.5, reviews_count: 110, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_shampoos.png", alt_text: "Shampoo" }], seo: { meta_title: "Shampoo", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "s4", variant_sku: "s4", variant_name: "200ml", variant_price: 249, variant_mrp: 0, discount_percentage: 0, discounted_price: 249, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_shampoos.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-SH-005", sku: "HC-SH-MASTER-005", slug: "herbal-conditioner", name: "Herbal Conditioner", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Shampoo & Conditioner", subcategory_code: "SH",
        short_description: "Smooths hair.", long_description: "Smooths and detangles.", base_price: 299, rating: 4.6, reviews_count: 130, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_conditioners.png", alt_text: "Conditioner" }], seo: { meta_title: "Conditioner", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "s5", variant_sku: "s5", variant_name: "200ml", variant_price: 299, variant_mrp: 0, discount_percentage: 0, discounted_price: 299, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_conditioners.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "HC-SH-006", sku: "HC-SH-MASTER-006", slug: "damage-repair-conditioner", name: "Damage Repair Conditioner", brand: "BeautyBeet", status: "published", category: "Hair Care", category_code: "HC", subcategory: "Shampoo & Conditioner", subcategory_code: "SH",
        short_description: "Intensive repair.", long_description: "For damaged strands.", base_price: 329, rating: 4.7, reviews_count: 140, tags: [],
        images: [{ type: "hero", url: "/images/products/cat_conditioners.png", alt_text: "Conditioner" }], seo: { meta_title: "Conditioner", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "s6", variant_sku: "s6", variant_name: "200ml", variant_price: 329, variant_mrp: 0, discount_percentage: 0, discounted_price: 329, weight_grams: 0, stock_quantity: 0, reorder_point: 0, image_url: "/images/products/cat_conditioners.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    }
];
