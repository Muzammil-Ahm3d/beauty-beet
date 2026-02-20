import { useState } from "react";
import { FolderTree, Plus, Pencil, Trash2, ChevronDown, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Subcategory {
    id: string;
    name: string;
    slug: string;
    productCount: number;
}

interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    heroImage: string;
    subcategories: Subcategory[];
    expanded?: boolean;
}

const MOCK_CATEGORIES: Category[] = [
    {
        id: "HC", name: "Hair Care", slug: "hair-care", description: "Ayurvedic hair care range", heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=60",
        subcategories: [
            { id: "HC-HO", name: "Hair Oils", slug: "hair-oils", productCount: 8 },
            { id: "HC-HS", name: "Hair Serums", slug: "hair-serums", productCount: 7 },
            { id: "HC-HG", name: "Hair Gels & Treatments", slug: "hair-gels-treatments", productCount: 3 },
            { id: "HC-SH", name: "Shampoo & Conditioner", slug: "shampoo-conditioner", productCount: 6 },
        ],
    },
    {
        id: "SC", name: "Skin Care", slug: "skin-care", description: "Premium Ayurvedic skin care", heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&q=60",
        subcategories: [
            { id: "SC-FO", name: "Face Oils & Serums", slug: "face-oils-serums", productCount: 7 },
            { id: "SC-FG", name: "Face Gels", slug: "face-gels", productCount: 8 },
            { id: "SC-FP", name: "Face Packs & Masks", slug: "face-packs-masks", productCount: 3 },
            { id: "SC-CL", name: "Cleansers", slug: "cleansers", productCount: 1 },
        ],
    },
    {
        id: "BC", name: "Body Care", slug: "body-care", description: "Natural body care products", heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=60",
        subcategories: [
            { id: "BC-BS", name: "Body Scrubs", slug: "body-scrubs", productCount: 2 },
            { id: "BC-SO", name: "Soaps", slug: "soaps", productCount: 3 },
        ],
    },
    {
        id: "LM", name: "Lip Care & Makeup", slug: "lip-care-makeup", description: "Complete lip care range", heroImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&q=60",
        subcategories: [
            { id: "LM-LS", name: "Lip Scrubs", slug: "lip-scrubs", productCount: 2 },
            { id: "LM-LB", name: "Lip Balms", slug: "lip-balms", productCount: 4 },
            { id: "LM-LSe", name: "Lip Serums", slug: "lip-serums", productCount: 2 },
            { id: "LM-LG", name: "Lip Gloss", slug: "lip-gloss", productCount: 3 },
            { id: "LM-LP", name: "Lipstick", slug: "lipstick", productCount: 2 },
        ],
    },
    {
        id: "EC", name: "Eye Care", slug: "eye-care", description: "Safe eye makeup products", heroImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&q=60",
        subcategories: [
            { id: "EC-EM", name: "Eye Makeup", slug: "eye-makeup", productCount: 1 },
        ],
    },
];

const AdminCategories = () => {
    const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
    const [expanded, setExpanded] = useState<Set<string>>(new Set(["HC"]));
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState<"category" | "subcategory">("category");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [parentCatId, setParentCatId] = useState<string>("");
    const [form, setForm] = useState({ name: "", slug: "", description: "", heroImage: "" });

    const toggleExpand = (id: string) => {
        setExpanded((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const openAddCategory = () => {
        setFormType("category");
        setEditingId(null);
        setForm({ name: "", slug: "", description: "", heroImage: "" });
        setShowForm(true);
    };

    const openAddSubcategory = (catId: string) => {
        setFormType("subcategory");
        setParentCatId(catId);
        setEditingId(null);
        setForm({ name: "", slug: "", description: "", heroImage: "" });
        setShowForm(true);
    };

    const totalProducts = categories.reduce((sum, c) => sum + c.subcategories.reduce((s, sc) => s + sc.productCount, 0), 0);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <FolderTree className="w-6 h-6 text-emerald-500" />
                        Categories
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        {categories.length} categories • {totalProducts} total products
                    </p>
                </div>
                <Button onClick={openAddCategory} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Category
                </Button>
            </div>

            <div className="space-y-3">
                {categories.map((cat) => (
                    <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <div className="flex items-center p-4 hover:bg-slate-50/50 cursor-pointer" onClick={() => toggleExpand(cat.id)}>
                            <button className="p-1 mr-2">
                                {expanded.has(cat.id) ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                            </button>
                            <img src={cat.heroImage} alt={cat.name} className="w-10 h-10 rounded-lg object-cover mr-3" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                                <p className="text-xs text-slate-500">{cat.description} • {cat.subcategories.length} subcategories</p>
                            </div>
                            <span className="text-xs font-mono text-slate-400 mr-4">{cat.slug}</span>
                            <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                                <button className="p-1.5 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                                <button className="p-1.5 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>

                        {expanded.has(cat.id) && (
                            <div className="border-t border-slate-100 bg-slate-50/30">
                                {cat.subcategories.map((sub) => (
                                    <div key={sub.id} className="flex items-center px-4 py-3 pl-14 hover:bg-slate-50 border-b border-slate-50 last:border-0">
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-slate-700">{sub.name}</span>
                                            <span className="text-xs text-slate-400 ml-2">({sub.productCount} products)</span>
                                        </div>
                                        <span className="text-xs font-mono text-slate-400 mr-4">{sub.slug}</span>
                                        <div className="flex gap-1">
                                            <button className="p-1 hover:bg-blue-50 rounded text-slate-400 hover:text-blue-600"><Pencil className="w-3.5 h-3.5" /></button>
                                            <button className="p-1 hover:bg-red-50 rounded text-slate-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={() => openAddSubcategory(cat.id)}
                                    className="w-full flex items-center gap-2 px-4 py-2.5 pl-14 text-sm text-rose-500 hover:bg-rose-50/50"
                                >
                                    <Plus className="w-3.5 h-3.5" /> Add Subcategory
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">
                                Add {formType === "category" ? "Category" : "Subcategory"}
                            </h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Hair Care" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Slug</label>
                                <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="hair-care" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                <input type="text" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Complete hair care range" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 p-5 border-t border-slate-100">
                            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button onClick={() => setShowForm(false)} className="bg-gradient-to-r from-rose-500 to-pink-600">Save</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCategories;
