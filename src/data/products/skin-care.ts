import { ProductV2 } from "../../types/product";

export const skinCareProducts: ProductV2[] = [
    // --- FACE OILS & SERUMS ---
    {
        id: "SC-FO-001", sku: "SC-FO-M-001", slug: "kumkumadi-face-oil", name: "Kumkumadi Face Oil", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Traditional Ayurvedic beauty oil.", long_description: "Traditional Ayurvedic beauty oil for glowing skin.", base_price: 899, rating: 4.9, reviews_count: 300, tags: ["bestseller"], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2574&auto=format&fit=crop", alt_text: "Kumkumadi Oil" }], seo: { meta_title: "Kumkumadi Oil", meta_description: "Ayurvedic oil for glow", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-1", variant_sku: "sc-fo-1", variant_name: "30ml", variant_price: 899, variant_mrp: 1299, discount_percentage: 30, discounted_price: 899, weight_grams: 50, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [{ name: "Saffron", benefits: "Glow" }, { name: "Sandalwood", benefits: "Soothing" }], full_ingredient_list: "Saffron, Sandalwood, oils", benefits: ["Glow", "Anti-aging"], usage_instructions: { steps: ["Apply at night"] }
    },
    {
        id: "SC-FO-002", sku: "SC-FO-M-002", slug: "24k-gold-face-oil", name: "24K Gold Face Oil", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Luxury oil with 24K gold.", long_description: "Luxury oil with 24K gold particles for radiance.", base_price: 1299, rating: 4.8, reviews_count: 150, tags: ["luxury"], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop", alt_text: "Gold Oil" }], seo: { meta_title: "Gold Face Oil", meta_description: "Luxury gold oil", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-2", variant_sku: "sc-fo-2", variant_name: "30ml", variant_price: 1299, variant_mrp: 1999, discount_percentage: 35, discounted_price: 1299, weight_grams: 50, stock_quantity: 50, reorder_point: 10, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-003", sku: "SC-FO-M-003", slug: "ayurvedic-anti-acne-face-serum", name: "Ayurvedic Anti-Acne Face Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Clears acne.", long_description: "Clears acne and prevents future breakouts.", base_price: 599, rating: 4.7, reviews_count: 180, tags: ["acne-control"],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2535&auto=format&fit=crop", alt_text: "Acne Serum" }], seo: { meta_title: "Acne Serum", meta_description: "Ayurvedic acne serum", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-3", variant_sku: "sc-fo-3", variant_name: "30ml", variant_price: 599, variant_mrp: 899, discount_percentage: 33, discounted_price: 599, weight_grams: 50, stock_quantity: 80, reorder_point: 15, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [{ name: "Neem", benefits: "Antibacterial" }, { name: "Tea Tree", benefits: "Acne control" }], full_ingredient_list: "Neem, Tea Tree, Turmeric", benefits: ["Reduces acne", "Clear skin"], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-004", sku: "SC-FO-M-004", slug: "ayurvedic-serum-for-dry-skin", name: "Ayurvedic Serum for Dry Skin", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Deep hydration.", long_description: "Deep hydration for parched skin.", base_price: 599, rating: 4.6, reviews_count: 90, tags: ["dry-skin"],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2670&auto=format&fit=crop", alt_text: "Dry Skin Serum" }], seo: { meta_title: "Dry Skin Serum", meta_description: "Hydrating serum", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-4", variant_sku: "sc-fo-4", variant_name: "30ml", variant_price: 599, variant_mrp: 899, discount_percentage: 33, discounted_price: 599, weight_grams: 50, stock_quantity: 80, reorder_point: 15, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-005", sku: "SC-FO-M-005", slug: "ayurvedic-radiance-skin-brightening-serum", name: "Ayurvedic Radiance Skin Brightening Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Luminous skin, rooted in ancient wisdom. 100% Natural.",
        long_description: "Our Radiance Serum is a potent, non-greasy elixir that merges 5,000 years of Ayurvedic tradition with the precision of modern skin-brightening science.",
        detailed_description: `
            <div class="space-y-12">
                <!-- Hero Section (handled by main layout primarily, but this creates the narrative flow) -->
                
                <!-- 2. THE PERSUASIVE NARRATIVE -->
                <div>
                    <h3 class="font-display text-2xl mb-3 flex items-center gap-2">
                        <span class="text-primary">✨</span> The Why: Stop hiding behind filters
                    </h3>
                    <p class="text-muted-foreground leading-relaxed text-lg">
                        Our Radiance Serum is a potent, non-greasy elixir that merges 5,000 years of Ayurvedic tradition with the precision of modern skin-brightening science. This isn't just a serum; it's a skin transformation designed to erase the signs of tanning, blemishes, and dullness, leaving you with a "lit-from-within" glow.
                    </p>
                </div>

                <!-- 3. THE INGREDIENT INTELLIGENCE -->
                <div>
                    <h3 class="font-display text-2xl mb-6">The Ingredient Intelligence (The "How")</h3>
                    <div class="overflow-hidden rounded-xl border border-border">
                        <table class="w-full text-sm text-left">
                            <thead class="bg-muted/50 uppercase text-xs font-semibold">
                                <tr>
                                    <th class="px-4 py-4">Ingredient</th>
                                    <th class="px-4 py-4">Role</th>
                                    <th class="px-4 py-4">Ayurvedic Benefit</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border bg-card">
                                <tr><td class="px-4 py-4 font-bold text-primary">Rakta Chandan (Red Sandalwood)</td><td class="px-4 py-4 font-medium">Varnya (Brightener)</td><td class="px-4 py-4 text-muted-foreground">Naturally cools the skin while fading stubborn acne scars and blemishes.</td></tr>
                                <tr><td class="px-4 py-4 font-bold text-primary">Saffron (Kesar)</td><td class="px-4 py-4 font-medium">Radiance Booster</td><td class="px-4 py-4 text-muted-foreground">The world’s most expensive spice, used for centuries to even skin tone and add a golden glow.</td></tr>
                                <tr><td class="px-4 py-4 font-bold text-primary">Amba Haldi (Wild Turmeric)</td><td class="px-4 py-4 font-medium">Detoxifier</td><td class="px-4 py-4 text-muted-foreground">Anti-inflammatory powerhouse that targets dullness and protects against environmental stressors.</td></tr>
                                <tr><td class="px-4 py-4 font-bold text-primary">Swet Chandan (White Sandalwood)</td><td class="px-4 py-4 font-medium">Soother</td><td class="px-4 py-4 text-muted-foreground">Provides a calming effect and tightens pores for a refined, smooth texture.</td></tr>
                                <tr><td class="px-4 py-4 font-bold text-primary">Mulethi (Licorice)</td><td class="px-4 py-4 font-medium">Natural De-Tanner</td><td class="px-4 py-4 text-muted-foreground">Gently inhibits melanin to reverse sun damage and tanning without irritation.</td></tr>
                                <tr><td class="px-4 py-4 font-bold text-primary">Orange Peel & Oil</td><td class="px-4 py-4 font-medium">Vitamin C Source</td><td class="px-4 py-4 text-muted-foreground">Rich in natural antioxidants to brighten and provide a refreshing citrus aroma.</td></tr>
                                <tr><td class="px-4 py-4 font-bold text-primary">Almond & Coconut Oil</td><td class="px-4 py-4 font-medium">Lipid Barrier</td><td class="px-4 py-4 text-muted-foreground">Deeply penetrates to nourish the skin, improving elasticity and softness.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. THE PROMISE -->
                <div>
                    <h3 class="font-display text-2xl mb-4">The Promise (Visible Results)</h3>
                    <div class="grid sm:grid-cols-3 gap-4">
                        <div class="bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <span class="block text-primary font-bold mb-1">Day 1</span>
                            <span class="text-sm text-foreground">Immediate hydration and a cooling sensation on the skin.</span>
                        </div>
                        <div class="bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <span class="block text-primary font-bold mb-1">Week 2</span>
                            <span class="text-sm text-foreground">Visible reduction in surface-level dullness and inflammation.</span>
                        </div>
                        <div class="bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <span class="block text-primary font-bold mb-1">Week 4</span>
                            <span class="text-sm text-foreground">Significant fading of dark spots and a more uniform, brightened complexion.</span>
                        </div>
                    </div>
                </div>

                <!-- 5. HOW TO USE -->
                <div class="bg-muted/30 p-6 rounded-2xl">
                    <h3 class="font-display text-2xl mb-4">How To Use (The Ritual)</h3>
                    <ol class="space-y-4">
                        <li class="flex gap-4 items-start">
                            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</span>
                            <div>
                                <strong class="block text-foreground mb-1">Cleanse</strong>
                                <span class="text-muted-foreground">Use a gentle Ayurvedic cleanser.</span>
                            </div>
                        </li>
                        <li class="flex gap-4 items-start">
                            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</span>
                            <div>
                                <strong class="block text-foreground mb-1">Apply</strong>
                                <span class="text-muted-foreground">On damp skin, massage 3-4 drops using upward circular motions.</span>
                            </div>
                        </li>
                        <li class="flex gap-4 items-start">
                            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</span>
                            <div>
                                <strong class="block text-foreground mb-1">Seal</strong>
                                <span class="text-muted-foreground">Follow with SPF in the morning or a face cream at night.</span>
                            </div>
                        </li>
                    </ol>
                    <div class="mt-4 pt-4 border-t border-border/50 text-sm text-primary font-medium flex items-center gap-2">
                        <span class="text-xl">💡</span>
                        Pro-Tip: Focus on areas with hyperpigmentation for concentrated results.
                    </div>
                </div>
            </div>
        `,
        base_price: 649, rating: 4.8, reviews_count: 210, tags: ["brightening"],
        images: [
            { type: "hero", url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop", alt_text: "Brightening Serum Bottle" },
            { type: "gallery", url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=2574&auto=format&fit=crop", alt_text: "Serum Application" },
            { type: "gallery", url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop", alt_text: "Serum Texture Close-up" }
        ], seo: { meta_title: "Ayurvedic Radiance Skin Brightening Serum", meta_description: "Luminous skin, rooted in ancient wisdom. 100% Natural.", meta_keywords: ["brightening", "ayurvedic", "serum"] },
        variants: [{ variant_id: "sc-fo-5", variant_sku: "sc-fo-5", variant_name: "30ml", variant_price: 649, variant_mrp: 949, discount_percentage: 31, discounted_price: 649, weight_grams: 50, stock_quantity: 90, reorder_point: 20, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [
            { name: "Rakta Chandan", benefits: "Varnya (Brightener)" },
            { name: "Saffron", benefits: "Radiance Booster" }
        ],
        full_ingredient_list: "Rakta Chandan, Saffron, Amba Haldi, Swet Chandan, Mulethi, Orange Peel & Oil, Almond & Coconut Oil",
        benefits: ["✨ Brightens: Reduces hyperpigmentation", "🌿 Cools: Calms inflammation & redness", "💧 Hydrates: 24hr moisture lock"],
        usage_instructions: { steps: ["Cleanse", "Apply 3-4 drops", "Seal with SPF/Cream"] },

        testimonials: [
            {
                id: "t1", type: "image",
                url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
                caption: "The “Immediate Glow” (Day 1 – 3)",
                subtext: "Noticeable surge in surface hydration and a lit-from-within luminosity following the first application ritual. Skin appears fresher, dewier, and visibly revitalized."
            },
            {
                id: "t2", type: "image",
                url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
                caption: "The “Calming Phase” (Week 2)",
                subtext: "Visible reduction in the appearance of environmental redness and surface dullness. The complexion looks more even, rested, and refined with continued daily use."
            },
            {
                id: "t3", type: "image",
                url: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800&auto=format&fit=crop",
                caption: "The “Radiance Transformation” (Week 4+)",
                subtext: "Noticeable improvement in the look of uneven tone and visible tanning. Skin texture appears smoother and more refined, revealing enhanced natural radiance over time."
            }
        ],
        faqs: [
            { question: "Will this serum make my skin oily or cause breakouts?", answer: "No. We use a non-comedogenic base of Almond and Coconut oils refined for rapid absorption. Rakta Chandan and Amba Haldi naturally regulate sebum and calm inflammation, making it suitable even for oily and acne-prone skin." },
            { question: "How long does one 30ml bottle last?", answer: "If used daily (3-4 drops per application), one bottle typically lasts 45–60 days." },
            { question: "Can I layer this with active chemicals like Retinol or Vitamin C?", answer: "Yes. Because our ingredients are 100% natural and pH-balanced, they complement synthetic actives. We recommend applying our serum first to provide a 'botanical buffer' for the skin." },
            { question: "Is it safe for use during pregnancy?", answer: "Absolutely. Our formula is free from synthetic retinoids, salicylic acid, and parabens, using only traditional Ayurvedic herbs safe for expectant mothers." }
        ],

        // AI REVIEWS DATA
        ai_summary: "Our Ayurvedic Radiance Serum is highly rated for its ability to visibly fade stubborn tan and dark spots using <strong>Rakta Chandan</strong> and <strong>Saffron</strong>. Users frequently note an immediate \"golden glow\" and improved skin texture within 10–12 days. While most find it deeply hydrating and lightweight, those with very oily skin appreciate its non-greasy finish.",
        ai_popular_topics: [
            { topic: "Pigmentation", count: 42, sentiment: "positive" },
            { topic: "The Glow", count: 38, sentiment: "positive" },
            { topic: "Tan Removal", count: 25, sentiment: "positive" },
            { topic: "Texture & Pores", count: 19, sentiment: "positive" },
            { topic: "Formula Purity", count: 15, sentiment: "positive" },
            { topic: "Calming Effect", count: 12, sentiment: "positive" }
        ],
        ai_verified_reviews: [
            {
                id: "ai-r1",
                author: "SC",
                verified: true,
                rating: 5,
                date: "2 days ago",
                highlighted_topics: ["Pigmentation", "Texture & Pores", "Formula Purity"],
                content: "I’ve been using this <strong>Radiance Serum</strong> for 3 weeks and the marks from old breakouts have almost disappeared. It has a very light texture that doesn't feel heavy like other oils. I love that it’s all-natural and has no synthetic fragrance. My skin feels incredibly smooth."
            },
            {
                id: "ai-r2",
                author: "K",
                verified: true,
                rating: 5,
                date: "1 week ago",
                highlighted_topics: ["Tan Removal", "The Glow"],
                content: "Finally found a serum that handles my <strong>tanning</strong>! The <strong>glow</strong> is real—I noticed it after just 4 days. It’s great value because you only need 3 drops. No irritation on my sensitive skin at all."
            }
        ]
    },
    {
        id: "SC-FO-006", sku: "SC-FO-M-006", slug: "ayurvedic-glowing-skin-serum", name: "Ayurvedic Glowing Skin Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Natural glow.", long_description: "For that natural, healthy inner glow.", base_price: 649, rating: 4.7, reviews_count: 160, tags: ["glow"],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=2666&auto=format&fit=crop", alt_text: "Glow Serum" }], seo: { meta_title: "Glow Serum", meta_description: "Glowing skin", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-6", variant_sku: "sc-fo-6", variant_name: "30ml", variant_price: 649, variant_mrp: 949, discount_percentage: 31, discounted_price: 649, weight_grams: 50, stock_quantity: 90, reorder_point: 20, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FO-007", sku: "SC-FO-M-007", slug: "ayurvedic-miraculous-beauty-serum", name: "Ayurvedic Miraculous Beauty Serum", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Oils & Serums", subcategory_code: "FO",
        short_description: "Premium all-in-one.", long_description: "Premium all-in-one serum for total skin transformation.", base_price: 1499, rating: 5.0, reviews_count: 99, tags: ["premium"], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop", alt_text: "Miraculous Serum" }], seo: { meta_title: "Miraculous Serum", meta_description: "Premium serum", meta_keywords: [] },
        variants: [{ variant_id: "sc-fo-7", variant_sku: "sc-fo-7", variant_name: "30ml", variant_price: 1499, variant_mrp: 2499, discount_percentage: 40, discounted_price: 1499, weight_grams: 50, stock_quantity: 40, reorder_point: 10, image_url: "/images/products/face_serum.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- FACE GELS ---
    {
        id: "SC-FG-001", sku: "SC-FG-M-001", slug: "kumkumadi-gel", name: "Kumkumadi Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Lightweight gel.", long_description: "Lightweight gel version of the classic oil.", base_price: 499, rating: 4.7, reviews_count: 120, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=2574&auto=format&fit=crop", alt_text: "Kumkumadi Gel" }], seo: { meta_title: "Kumkumadi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-1", variant_sku: "sc-fg-1", variant_name: "100g", variant_price: 499, variant_mrp: 699, discount_percentage: 28, discounted_price: 499, weight_grams: 100, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-002", sku: "SC-FG-M-002", slug: "24k-gold-gel", name: "24K Gold Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Radiance boosting.", long_description: "Radiance boosting gel with gold flakes.", base_price: 599, rating: 4.6, reviews_count: 80, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2574&auto=format&fit=crop", alt_text: "Gold Gel" }], seo: { meta_title: "Gold Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-2", variant_sku: "sc-fg-2", variant_name: "100g", variant_price: 599, variant_mrp: 899, discount_percentage: 33, discounted_price: 599, weight_grams: 100, stock_quantity: 80, reorder_point: 10, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-003", sku: "SC-FG-M-003", slug: "kesar-haldi-chandan-gel", name: "Kesar Haldi Chandan Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "For uneven tone.", long_description: "Best for treating uneven skin tone with Saffron and Turmeric.", base_price: 399, rating: 4.8, reviews_count: 200, tags: [], is_bestseller: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=2670&auto=format&fit=crop", alt_text: "Kesar Gel" }], seo: { meta_title: "Kesar Haldi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-3", variant_sku: "sc-fg-3", variant_name: "100g", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 100, stock_quantity: 120, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-004", sku: "SC-FG-M-004", slug: "neem-tulsi-gel", name: "Neem Tulsi Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Acne control.", long_description: "Perfect for acne-prone and oily skin.", base_price: 349, rating: 4.7, reviews_count: 150, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2576&auto=format&fit=crop", alt_text: "Neem Gel" }], seo: { meta_title: "Neem Tulsi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-4", variant_sku: "sc-fg-4", variant_name: "100g", variant_price: 349, variant_mrp: 499, discount_percentage: 30, discounted_price: 349, weight_grams: 100, stock_quantity: 130, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-005", sku: "SC-FG-M-005", slug: "rose-petals-gel", name: "Rose Petals Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Deep cleansing.", long_description: "Deep cleansing and toning gel.", base_price: 399, rating: 4.8, reviews_count: 130, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae88?q=80&w=2670&auto=format&fit=crop", alt_text: "Rose Gel" }], seo: { meta_title: "Rose Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-5", variant_sku: "sc-fg-5", variant_name: "100g", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 100, stock_quantity: 120, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-006", sku: "SC-FG-M-006", slug: "orange-peel-gel", name: "Orange Peel Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Improves complexion.", long_description: "Improves skin complexion and texture.", base_price: 399, rating: 4.6, reviews_count: 110, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop", alt_text: "Orange Gel" }], seo: { meta_title: "Orange Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-6", variant_sku: "sc-fg-6", variant_name: "100g", variant_price: 399, variant_mrp: 599, discount_percentage: 33, discounted_price: 399, weight_grams: 100, stock_quantity: 110, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-007", sku: "SC-FG-M-007", slug: "mulethi-gel", name: "Mulethi Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Anti-ageing.", long_description: "Powerful anti-ageing properties.", base_price: 449, rating: 4.7, reviews_count: 90, tags: ["anti-ageing"],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1556228578-8d89dfc29f61?q=80&w=2670&auto=format&fit=crop", alt_text: "Mulethi Gel" }], seo: { meta_title: "Mulethi Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-7", variant_sku: "sc-fg-7", variant_name: "100g", variant_price: 449, variant_mrp: 649, discount_percentage: 30, discounted_price: 449, weight_grams: 100, stock_quantity: 90, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FG-008", sku: "SC-FG-M-008", slug: "d-tan-facial-gel", name: "D-Tan Facial Gel", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Gels", subcategory_code: "FG",
        short_description: "Tan removal.", long_description: "Removes tan and sun damage.", base_price: 499, rating: 4.6, reviews_count: 140, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=2574&auto=format&fit=crop", alt_text: "D-Tan Gel" }], seo: { meta_title: "D-Tan Gel", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fg-8", variant_sku: "sc-fg-8", variant_name: "100g", variant_price: 499, variant_mrp: 699, discount_percentage: 28, discounted_price: 499, weight_grams: 100, stock_quantity: 130, reorder_point: 20, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- FACE PACKS ---
    {
        id: "SC-FP-001", sku: "SC-FP-M-001", slug: "kumkumadi-face-pack", name: "Kumkumadi Face Pack", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Packs & Masks", subcategory_code: "FP",
        short_description: "Instant glow.", long_description: "Instant glow face pack.", base_price: 599, rating: 4.8, reviews_count: 100, tags: [], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop", alt_text: "Face Pack" }], seo: { meta_title: "Face Pack", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fp-1", variant_sku: "sc-fp-1", variant_name: "100g", variant_price: 599, variant_mrp: 799, discount_percentage: 25, discounted_price: 599, weight_grams: 100, stock_quantity: 100, reorder_point: 20, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FP-002", sku: "SC-FP-M-002", slug: "herbal-multani-face-pack", name: "Herbal Multani Face Pack", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Packs & Masks", subcategory_code: "FP",
        short_description: "Deep cleaning.", long_description: "Deep cleaning clay pack for oily skin.", base_price: 299, rating: 4.7, reviews_count: 180, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1563820247657-3f81d1dc4db4?q=80&w=2574&auto=format&fit=crop", alt_text: "Face Pack" }], seo: { meta_title: "Face Pack", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fp-2", variant_sku: "sc-fp-2", variant_name: "100g", variant_price: 299, variant_mrp: 499, discount_percentage: 40, discounted_price: 299, weight_grams: 100, stock_quantity: 150, reorder_point: 30, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    {
        id: "SC-FP-003", sku: "SC-FP-M-003", slug: "skin-brightening-face-pack", name: "Skin Brightening Face Pack", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Face Packs & Masks", subcategory_code: "FP",
        short_description: "Luminous skin.", long_description: "For luminous, bright skin.", base_price: 449, rating: 4.6, reviews_count: 120, tags: [],
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1571781535014-a95c80db51f4?q=80&w=2602&auto=format&fit=crop", alt_text: "Face Pack" }], seo: { meta_title: "Face Pack", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-fp-3", variant_sku: "sc-fp-3", variant_name: "100g", variant_price: 449, variant_mrp: 649, discount_percentage: 30, discounted_price: 449, weight_grams: 100, stock_quantity: 120, reorder_point: 20, image_url: "/images/products/prod_deep_repair_mask.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    },
    // --- CLEANSERS ---
    {
        id: "SC-CL-001", sku: "SC-CL-M-001", slug: "gentle-foaming-face-wash", name: "Gentle Foaming Face Wash", brand: "BeautyBeet", status: "published", category: "Skin Care", category_code: "SC", subcategory: "Cleansers", subcategory_code: "CL",
        short_description: "Gentle daily wash.", long_description: "Suitable for all skin types, gentle daily cleaner.", base_price: 349, rating: 4.7, reviews_count: 250, tags: [], is_new: true,
        images: [{ type: "hero", url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2670&auto=format&fit=crop", alt_text: "Face Wash" }], seo: { meta_title: "Face Wash", meta_description: "", meta_keywords: [] },
        variants: [{ variant_id: "sc-cl-1", variant_sku: "sc-cl-1", variant_name: "100ml", variant_price: 349, variant_mrp: 499, discount_percentage: 30, discounted_price: 349, weight_grams: 110, stock_quantity: 200, reorder_point: 50, image_url: "/images/products/face_cleanser.png" }],
        key_ingredients: [], full_ingredient_list: "", benefits: [], usage_instructions: { steps: [] }
    }
];
