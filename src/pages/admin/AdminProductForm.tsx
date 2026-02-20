import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Upload, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const TABS = ["Basic Info", "Pricing & Variants", "Description", "Images", "Ingredients", "SEO", "FAQs"];

const AdminProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;
    const [activeTab, setActiveTab] = useState(0);
    const [saving, setSaving] = useState(false);

    // Form state
    const [form, setForm] = useState({
        name: isEditing ? "Bhringraj Hair Oil" : "",
        sku: isEditing ? "HC-HO-001" : "",
        slug: isEditing ? "bhringraj-hair-oil" : "",
        category: isEditing ? "hair-care" : "",
        subcategory: isEditing ? "hair-oils" : "",
        status: isEditing ? "published" : "draft",
        shortDescription: isEditing ? "Traditional Ayurvedic hair oil for growth & strength" : "",
        longDescription: isEditing ? "Our signature Bhringraj Hair Oil combines the ancient wisdom..." : "",
        basePrice: isEditing ? "449" : "",
        isBestseller: isEditing ? true : false,
        isNew: false,
        isTrending: false,
        metaTitle: isEditing ? "Bhringraj Hair Oil - Natural Hair Growth | BeautyBeet" : "",
        metaDescription: isEditing ? "Premium Ayurvedic Bhringraj hair oil for natural hair growth..." : "",
        metaKeywords: isEditing ? "bhringraj, hair oil, hair growth, ayurvedic" : "",
    });

    const [variants, setVariants] = useState(
        isEditing
            ? [
                { name: "50ml", price: "449", mrp: "599", stock: "120", weight: "60" },
                { name: "100ml", price: "799", mrp: "999", stock: "85", weight: "115" },
            ]
            : [{ name: "", price: "", mrp: "", stock: "", weight: "" }]
    );

    const [images, setImages] = useState<string[]>(
        isEditing
            ? [
                "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
                "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
            ]
            : []
    );

    const [ingredients, setIngredients] = useState(
        isEditing
            ? [
                { name: "Bhringraj Extract", percentage: "25%", benefits: "Promotes hair growth" },
                { name: "Coconut Oil", percentage: "30%", benefits: "Deep conditioning" },
            ]
            : [{ name: "", percentage: "", benefits: "" }]
    );

    const [faqs, setFaqs] = useState(
        isEditing
            ? [{ question: "How often should I use this?", answer: "Apply 2-3 times a week." }]
            : [{ question: "", answer: "" }]
    );

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
            navigate("/admin/products");
        }, 1000);
    };

    const updateForm = (key: string, value: any) => setForm({ ...form, [key]: value });

    const inputClass = "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate("/admin/products")} className="p-2 hover:bg-slate-100 rounded-lg">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            {isEditing ? "Edit Product" : "Add New Product"}
                        </h1>
                        {isEditing && <p className="text-sm text-slate-500">SKU: {form.sku}</p>}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" /> Preview
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-gradient-to-r from-rose-500 to-pink-600"
                    >
                        <Save className="w-4 h-4 mr-2" />
                        {saving ? "Saving..." : isEditing ? "Update" : "Create"}
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="flex overflow-x-auto border-b border-slate-100 scrollbar-none">
                    {TABS.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === i
                                    ? "border-rose-500 text-rose-600"
                                    : "border-transparent text-slate-500 hover:text-slate-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-6">
                    {/* Tab 0: Basic Info */}
                    {activeTab === 0 && (
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                            <div className="md:col-span-2">
                                <label className={labelClass}>Product Name *</label>
                                <input type="text" value={form.name} onChange={(e) => updateForm("name", e.target.value)} placeholder="Bhringraj Hair Oil" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>SKU *</label>
                                <input type="text" value={form.sku} onChange={(e) => updateForm("sku", e.target.value)} placeholder="HC-HO-001" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>URL Slug</label>
                                <input type="text" value={form.slug} onChange={(e) => updateForm("slug", e.target.value)} placeholder="bhringraj-hair-oil" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Category *</label>
                                <select value={form.category} onChange={(e) => updateForm("category", e.target.value)} className={inputClass}>
                                    <option value="">Select category</option>
                                    <option value="hair-care">Hair Care</option>
                                    <option value="skin-care">Skin Care</option>
                                    <option value="body-care">Body Care</option>
                                    <option value="lip-care-makeup">Lip Care & Makeup</option>
                                    <option value="eye-care">Eye Care</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Subcategory *</label>
                                <select value={form.subcategory} onChange={(e) => updateForm("subcategory", e.target.value)} className={inputClass}>
                                    <option value="">Select subcategory</option>
                                    <option value="hair-oils">Hair Oils</option>
                                    <option value="hair-serums">Hair Serums</option>
                                    <option value="face-oils-serums">Face Oils & Serums</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Status</label>
                                <select value={form.status} onChange={(e) => updateForm("status", e.target.value)} className={inputClass}>
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 flex gap-6">
                                {[
                                    { key: "isBestseller", label: "Bestseller" },
                                    { key: "isNew", label: "New Arrival" },
                                    { key: "isTrending", label: "Trending" },
                                ].map((flag) => (
                                    <label key={flag.key} className="flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            type="checkbox"
                                            checked={(form as any)[flag.key]}
                                            onChange={(e) => updateForm(flag.key, e.target.checked)}
                                            className="rounded border-slate-300"
                                        />
                                        {flag.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab 1: Pricing & Variants */}
                    {activeTab === 1 && (
                        <div className="max-w-4xl space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-slate-900">Product Variants</h3>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setVariants([...variants, { name: "", price: "", mrp: "", stock: "", weight: "" }])}
                                >
                                    <Plus className="w-4 h-4 mr-1" /> Add Variant
                                </Button>
                            </div>
                            {variants.map((v, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="grid grid-cols-5 gap-3 flex-1">
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Variant Name</label>
                                            <input type="text" value={v.name} onChange={(e) => { const updated = [...variants]; updated[i].name = e.target.value; setVariants(updated); }} placeholder="50ml" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Price (₹)</label>
                                            <input type="number" value={v.price} onChange={(e) => { const updated = [...variants]; updated[i].price = e.target.value; setVariants(updated); }} placeholder="449" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">MRP (₹)</label>
                                            <input type="number" value={v.mrp} onChange={(e) => { const updated = [...variants]; updated[i].mrp = e.target.value; setVariants(updated); }} placeholder="599" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Stock</label>
                                            <input type="number" value={v.stock} onChange={(e) => { const updated = [...variants]; updated[i].stock = e.target.value; setVariants(updated); }} placeholder="100" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Weight (g)</label>
                                            <input type="number" value={v.weight} onChange={(e) => { const updated = [...variants]; updated[i].weight = e.target.value; setVariants(updated); }} placeholder="60" className={inputClass} />
                                        </div>
                                    </div>
                                    {variants.length > 1 && (
                                        <button onClick={() => setVariants(variants.filter((_, j) => j !== i))} className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 mt-5">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tab 2: Description */}
                    {activeTab === 2 && (
                        <div className="max-w-4xl space-y-5">
                            <div>
                                <label className={labelClass}>Short Description (for cards)</label>
                                <input type="text" value={form.shortDescription} onChange={(e) => updateForm("shortDescription", e.target.value)} placeholder="1-2 sentence summary..." className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Long Description</label>
                                <textarea value={form.longDescription} onChange={(e) => updateForm("longDescription", e.target.value)} placeholder="Full product description... supports rich text" rows={6} className={inputClass} />
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Images */}
                    {activeTab === 3 && (
                        <div className="max-w-4xl space-y-5">
                            <p className="text-sm text-slate-500">
                                Recommended: <strong>1200 × 1200px</strong> (square). Upload high-quality product shots.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {images.map((img, i) => (
                                    <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                                        <img src={img} alt={`Product ${i + 1}`} className="w-full h-full object-cover" />
                                        <button
                                            onClick={() => setImages(images.filter((_, j) => j !== i))}
                                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Trash2 className="w-3 h-3" />
                                        </button>
                                        {i === 0 && (
                                            <span className="absolute bottom-2 left-2 text-[10px] font-bold bg-white text-slate-700 px-1.5 py-0.5 rounded">
                                                HERO
                                            </span>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={() => {
                                        const url = prompt("Enter image URL:");
                                        if (url) setImages([...images, url]);
                                    }}
                                    className="aspect-square rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:border-rose-300 hover:bg-rose-50/30 transition-colors text-slate-400 hover:text-rose-500"
                                >
                                    <Upload className="w-6 h-6" />
                                    <span className="text-xs font-medium">Add Image</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: Ingredients */}
                    {activeTab === 4 && (
                        <div className="max-w-4xl space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-slate-900">Key Ingredients</h3>
                                <Button variant="outline" size="sm" onClick={() => setIngredients([...ingredients, { name: "", percentage: "", benefits: "" }])}>
                                    <Plus className="w-4 h-4 mr-1" /> Add Ingredient
                                </Button>
                            </div>
                            {ingredients.map((ing, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="grid grid-cols-3 gap-3 flex-1">
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Name</label>
                                            <input type="text" value={ing.name} onChange={(e) => { const u = [...ingredients]; u[i].name = e.target.value; setIngredients(u); }} placeholder="Bhringraj Extract" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Percentage</label>
                                            <input type="text" value={ing.percentage} onChange={(e) => { const u = [...ingredients]; u[i].percentage = e.target.value; setIngredients(u); }} placeholder="25%" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Benefits</label>
                                            <input type="text" value={ing.benefits} onChange={(e) => { const u = [...ingredients]; u[i].benefits = e.target.value; setIngredients(u); }} placeholder="Promotes hair growth" className={inputClass} />
                                        </div>
                                    </div>
                                    {ingredients.length > 1 && (
                                        <button onClick={() => setIngredients(ingredients.filter((_, j) => j !== i))} className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 mt-5">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tab 5: SEO */}
                    {activeTab === 5 && (
                        <div className="max-w-4xl space-y-5">
                            <div>
                                <label className={labelClass}>Meta Title</label>
                                <input type="text" value={form.metaTitle} onChange={(e) => updateForm("metaTitle", e.target.value)} placeholder="Product Name | BeautyBeet" className={inputClass} />
                                <p className="text-xs text-slate-400 mt-1">{form.metaTitle.length}/60 characters</p>
                            </div>
                            <div>
                                <label className={labelClass}>Meta Description</label>
                                <textarea value={form.metaDescription} onChange={(e) => updateForm("metaDescription", e.target.value)} placeholder="Compelling description for search results..." rows={3} className={inputClass} />
                                <p className="text-xs text-slate-400 mt-1">{form.metaDescription.length}/160 characters</p>
                            </div>
                            <div>
                                <label className={labelClass}>Meta Keywords</label>
                                <input type="text" value={form.metaKeywords} onChange={(e) => updateForm("metaKeywords", e.target.value)} placeholder="keyword1, keyword2, keyword3" className={inputClass} />
                            </div>
                            {/* SEO preview */}
                            <div className="p-4 bg-slate-50 rounded-xl">
                                <p className="text-xs text-slate-400 mb-2">Google Search Preview</p>
                                <p className="text-blue-700 text-base font-medium">{form.metaTitle || "Product Name | BeautyBeet"}</p>
                                <p className="text-emerald-700 text-xs">beautybeet.com/shop/...</p>
                                <p className="text-sm text-slate-600 mt-0.5">{form.metaDescription || "Add a meta description..."}</p>
                            </div>
                        </div>
                    )}

                    {/* Tab 6: FAQs */}
                    {activeTab === 6 && (
                        <div className="max-w-4xl space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-slate-900">Frequently Asked Questions</h3>
                                <Button variant="outline" size="sm" onClick={() => setFaqs([...faqs, { question: "", answer: "" }])}>
                                    <Plus className="w-4 h-4 mr-1" /> Add FAQ
                                </Button>
                            </div>
                            {faqs.map((faq, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Question</label>
                                            <input type="text" value={faq.question} onChange={(e) => { const u = [...faqs]; u[i].question = e.target.value; setFaqs(u); }} placeholder="How often should I use this?" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-slate-500">Answer</label>
                                            <textarea value={faq.answer} onChange={(e) => { const u = [...faqs]; u[i].answer = e.target.value; setFaqs(u); }} placeholder="We recommend using it..." rows={2} className={inputClass} />
                                        </div>
                                    </div>
                                    {faqs.length > 1 && (
                                        <button onClick={() => setFaqs(faqs.filter((_, j) => j !== i))} className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 mt-5">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminProductForm;
