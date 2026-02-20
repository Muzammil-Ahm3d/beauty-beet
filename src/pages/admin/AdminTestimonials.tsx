import { useState } from "react";
import { MessageSquare, Plus, Pencil, Trash2, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
    id: string;
    author: string;
    rating: number;
    content: string;
    avatar: string;
    verified: boolean;
    product: string;
}

const MOCK_TESTIMONIALS: Testimonial[] = [
    { id: "1", author: "Priya Menon", rating: 5, content: "My hair fall has reduced by 70% in just 3 weeks! The Bhringraj oil is amazing. I apply it twice a week and the results are visible.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=60", verified: true, product: "Bhringraj Hair Oil" },
    { id: "2", author: "Sneha Agarwal", rating: 5, content: "The Kumkumadi serum gave me the glow I was looking for. My skin feels so soft and looks radiant after just 2 weeks of use.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=60", verified: true, product: "Kumkumadi Face Serum" },
    { id: "3", author: "Radhika Sharma", rating: 4, content: "Good product, takes time to show results. The aloe vera gel is very soothing and lightweight. Perfect for summer.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=60", verified: true, product: "Aloe Vera Face Gel" },
    { id: "4", author: "Meera Iyer", rating: 5, content: "Best lip balm I've ever used! Keeps my lips moisturized all day long. The rose fragrance is subtle and lovely.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=60", verified: false, product: "Rose Lip Balm" },
];

const AdminTestimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>(MOCK_TESTIMONIALS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<Testimonial>>({});

    const openEdit = (t: Testimonial) => { setForm(t); setEditing(t.id); setShowForm(true); };
    const openNew = () => { setForm({ rating: 5, verified: false }); setEditing(null); setShowForm(true); };
    const save = () => {
        if (editing) {
            setTestimonials((prev) => prev.map((t) => (t.id === editing ? { ...t, ...form } as Testimonial : t)));
        } else {
            setTestimonials((prev) => [...prev, { ...form, id: Date.now().toString() } as Testimonial]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <MessageSquare className="w-6 h-6 text-teal-500" />
                        Text Testimonials
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">{testimonials.length} testimonials displayed on homepage</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Testimonial
                </Button>
            </div>

            <div className="space-y-3">
                {testimonials.map((t) => (
                    <div key={t.id} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all">
                        <div className="flex items-start gap-4">
                            <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-slate-900">{t.author}</h3>
                                    {t.verified && (
                                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">VERIFIED</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className={`w-3.5 h-3.5 ${s <= t.rating ? "text-amber-500 fill-amber-500" : "text-slate-200"}`} />
                                    ))}
                                    <span className="text-xs text-slate-400 ml-1">for {t.product}</span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">{t.content}</p>
                            </div>
                            <div className="flex gap-1 flex-shrink-0">
                                <button onClick={() => openEdit(t)} className="p-1.5 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                                <button onClick={() => setTestimonials(testimonials.filter((x) => x.id !== t.id))} className="p-1.5 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Testimonial</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "author", label: "Author Name", placeholder: "Priya Menon" },
                                { key: "product", label: "Product Name", placeholder: "Bhringraj Hair Oil" },
                                { key: "avatar", label: "Avatar URL", placeholder: "https://..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            ))}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <button key={s} type="button" onClick={() => setForm({ ...form, rating: s })}>
                                            <Star className={`w-6 h-6 ${s <= (form.rating || 0) ? "text-amber-500 fill-amber-500" : "text-slate-200"}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Review Content</label>
                                <textarea value={form.content || ""} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Write the review..." rows={4} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                            </div>
                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                <input type="checkbox" checked={form.verified ?? false} onChange={(e) => setForm({ ...form, verified: e.target.checked })} className="rounded border-slate-300" />
                                Verified buyer
                            </label>
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

export default AdminTestimonials;
