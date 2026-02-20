import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Scissors, Sparkles, Plus, Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConcernCard {
    id: string;
    title: string;
    description: string;
    image: string;
    products: number;
    section: "hair" | "skin";
}

const MOCK_CONCERNS: ConcernCard[] = [
    { id: "1", title: "Hairfall", description: "Strengthen roots & reduce shedding", image: "https://picsum.photos/seed/hairfall/400/400", products: 18, section: "hair" },
    { id: "2", title: "Hair Thinning", description: "Add volume & thickness", image: "https://picsum.photos/seed/thinning/400/400", products: 12, section: "hair" },
    { id: "3", title: "Frizzy Hair", description: "Smooth & control frizz", image: "https://picsum.photos/seed/frizzy/400/400", products: 15, section: "hair" },
    { id: "4", title: "Colored Hair", description: "Protect color & repair damage", image: "https://picsum.photos/seed/colored/400/400", products: 10, section: "hair" },
    { id: "5", title: "Curly / Coily Hair", description: "Define curls & hydrate", image: "https://picsum.photos/seed/curly/400/400", products: 14, section: "hair" },
    { id: "6", title: "Acne-Prone Skin", description: "Control breakouts & clear skin", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&q=80", products: 16, section: "skin" },
    { id: "7", title: "Dry Skin", description: "Deep hydration & moisture lock", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&q=80", products: 14, section: "skin" },
    { id: "8", title: "Uneven Skin Tone", description: "Brighten & even out pigmentation", image: "https://images.unsplash.com/photo-1556228720-1957be6a9876?w=300&q=80", products: 12, section: "skin" },
    { id: "9", title: "Dull Skin", description: "Revive radiance & glow", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&q=80", products: 15, section: "skin" },
];

const AdminConcernCards = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tab = (searchParams.get("type") as "hair" | "skin") || "hair";
    const [concerns, setConcerns] = useState<ConcernCard[]>(MOCK_CONCERNS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<ConcernCard>>({});

    const filtered = concerns.filter((c) => c.section === tab);
    const Icon = tab === "hair" ? Scissors : Sparkles;

    const openEdit = (c: ConcernCard) => { setForm(c); setEditing(c.id); setShowForm(true); };
    const openNew = () => { setForm({ section: tab, products: 0 }); setEditing(null); setShowForm(true); };
    const save = () => {
        if (editing) {
            setConcerns((prev) => prev.map((c) => (c.id === editing ? { ...c, ...form } as ConcernCard : c)));
        } else {
            setConcerns((prev) => [...prev, { ...form, id: Date.now().toString() } as ConcernCard]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Icon className="w-6 h-6 text-violet-500" />
                        {tab === "hair" ? "Fix Your Hair" : "Fix Your Skin"} Cards
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Manage concern-based discovery cards • Recommended: 800 × 700px</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Card
                </Button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
                {(["hair", "skin"] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => setSearchParams({ type: t })}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                            }`}
                    >
                        {t === "hair" ? "✂️ Hair Concerns" : "✨ Skin Concerns"} ({concerns.filter((c) => c.section === t).length})
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((c) => (
                    <div key={c.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="h-44 relative">
                            <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-900">{c.title}</h3>
                            <p className="text-xs text-slate-500 mt-0.5">{c.description}</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-slate-400">{c.products} products</span>
                                <div className="flex gap-1">
                                    <button onClick={() => openEdit(c)} className="p-1 hover:bg-blue-50 rounded text-slate-400 hover:text-blue-600"><Pencil className="w-3.5 h-3.5" /></button>
                                    <button onClick={() => setConcerns(concerns.filter((x) => x.id !== c.id))} className="p-1 hover:bg-red-50 rounded text-slate-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Concern Card</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "title", label: "Title", placeholder: "Hairfall" },
                                { key: "description", label: "Description", placeholder: "Strengthen roots & reduce shedding" },
                                { key: "image", label: "Image URL", placeholder: "https://..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            ))}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Product Count</label>
                                <input type="number" value={form.products || ""} onChange={(e) => setForm({ ...form, products: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 p-5 border-t border-slate-100">
                            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button onClick={save} className="bg-gradient-to-r from-rose-500 to-pink-600">Save</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminConcernCards;
