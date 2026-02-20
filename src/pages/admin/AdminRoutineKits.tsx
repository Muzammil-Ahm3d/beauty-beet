import { useState } from "react";
import { Package, Plus, Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoutineKit {
    id: string;
    name: string;
    price: string;
    image: string;
    bgColor: string;
    items: string[];
}

const MOCK_KITS: RoutineKit[] = [
    {
        id: "1",
        name: "Anti-Acne Routine",
        price: "₹1,499",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        bgColor: "bg-rose-50",
        items: ["Salicylic Cleanser", "Niacinamide Serum", "Oil-Free Moisturizer"],
    },
    {
        id: "2",
        name: "Glow & Radiance Kit",
        price: "₹1,999",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
        bgColor: "bg-amber-50",
        items: ["Vitamin C Wash", "Kumkumadi Tailam", "Sunscreen SPF 50"],
    },
    {
        id: "3",
        name: "Hair Fall Defense",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
        bgColor: "bg-slate-50",
        items: ["Bhringraj Oil", "Onion Shampoo", "Keratin Conditioner"],
    },
];

const AdminRoutineKits = () => {
    const [kits, setKits] = useState<RoutineKit[]>(MOCK_KITS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<RoutineKit>>({ items: [] });
    const [newItem, setNewItem] = useState("");

    const openEdit = (k: RoutineKit) => { setForm(k); setEditing(k.id); setShowForm(true); };
    const openNew = () => { setForm({ items: [], bgColor: "bg-slate-50" }); setEditing(null); setShowForm(true); };
    const save = () => {
        if (editing) {
            setKits((prev) => prev.map((k) => (k.id === editing ? { ...k, ...form } as RoutineKit : k)));
        } else {
            setKits((prev) => [...prev, { ...form, id: Date.now().toString() } as RoutineKit]);
        }
        setShowForm(false);
    };

    const addItem = () => {
        if (newItem.trim()) {
            setForm((prev) => ({ ...prev, items: [...(prev.items || []), newItem.trim()] }));
            setNewItem("");
        }
    };
    const removeItem = (idx: number) => {
        setForm((prev) => ({ ...prev, items: prev.items?.filter((_, i) => i !== idx) }));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Package className="w-6 h-6 text-teal-500" />
                        Routine Kits
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Manage bundle offers & routine kits carousel</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-teal-500 to-emerald-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Kit
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {kits.map((k) => (
                    <div key={k.id} className={`rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-all ${k.bgColor}`}>
                        <div className="h-44 relative bg-white">
                            <img src={k.image} alt={k.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-900">{k.name}</h3>
                            <p className="text-sm font-bold text-primary mt-1">{k.price}</p>
                            <ul className="text-xs text-slate-600 mt-2 space-y-1">
                                {k.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                            <div className="flex justify-end gap-1 mt-3">
                                <button onClick={() => openEdit(k)} className="p-1 hover:bg-blue-100 rounded text-slate-500 hover:text-blue-700"><Pencil className="w-4 h-4" /></button>
                                <button onClick={() => setKits(kits.filter((x) => x.id !== k.id))} className="p-1 hover:bg-red-100 rounded text-slate-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Routine Kit</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "name", label: "Kit Name", placeholder: "Anti-Acne Routine" },
                                { key: "price", label: "Price", placeholder: "₹1,499" },
                                { key: "image", label: "Image URL", placeholder: "https://..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400" />
                                </div>
                            ))}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Background Class (e.g. bg-rose-50)</label>
                                <input type="text" value={form.bgColor || ""} onChange={(e) => setForm({ ...form, bgColor: e.target.value })} placeholder="bg-rose-50" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Kit Items</label>
                                <div className="flex gap-2 mb-2">
                                    <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addItem()} placeholder="Item name..." className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20" />
                                    <Button type="button" onClick={addItem} size="sm" variant="secondary">Add</Button>
                                </div>
                                <ul className="space-y-1">
                                    {form.items?.map((item, idx) => (
                                        <li key={idx} className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded text-sm">
                                            <span>{item}</span>
                                            <button onClick={() => removeItem(idx)} className="text-red-500 hover:text-red-700"><X className="w-3.5 h-3.5" /></button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 p-5 border-t border-slate-100">
                            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button onClick={save} className="bg-gradient-to-r from-teal-500 to-emerald-600">Save</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminRoutineKits;
