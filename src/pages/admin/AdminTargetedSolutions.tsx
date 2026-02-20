import { useState } from "react";
import { Sparkles, Plus, Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionCard {
    id: string;
    title: string;
    image: string;
    href: string;
}

const MOCK_SOLUTIONS: SolutionCard[] = [
    { id: "1", title: "Fix Hair Fall", href: "/shop/hair-care/hair-fall", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop" },
    { id: "2", title: "Fix Dull Skin", href: "/shop/skin-care/dullness", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop" },
    { id: "3", title: "Fix Pigmentation", href: "/shop/skin-care/pigmentation", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop" },
    { id: "4", title: "Fix Acne", href: "/shop/skin-care/acne", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop" },
];

const AdminTargetedSolutions = () => {
    const [solutions, setSolutions] = useState<SolutionCard[]>(MOCK_SOLUTIONS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<SolutionCard>>({});

    const openEdit = (s: SolutionCard) => { setForm(s); setEditing(s.id); setShowForm(true); };
    const openNew = () => { setForm({}); setEditing(null); setShowForm(true); };
    const save = () => {
        if (editing) {
            setSolutions((prev) => prev.map((s) => (s.id === editing ? { ...s, ...form } as SolutionCard : s)));
        } else {
            setSolutions((prev) => [...prev, { ...form, id: Date.now().toString() } as SolutionCard]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-indigo-500" />
                        Targeted Solutions
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Manage "Shop by Concern" carousel</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-indigo-500 to-purple-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Solution
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {solutions.map((s) => (
                    <div key={s.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="h-44 relative">
                            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-900">{s.title}</h3>
                            <p className="text-xs text-slate-500 mt-0.5 truncate">{s.href}</p>
                            <div className="flex justify-end gap-1 mt-3">
                                <button onClick={() => openEdit(s)} className="p-1 hover:bg-blue-50 rounded text-slate-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                                <button onClick={() => setSolutions(solutions.filter((x) => x.id !== s.id))} className="p-1 hover:bg-red-50 rounded text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Solution</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "title", label: "Title", placeholder: "Fix Acne" },
                                { key: "href", label: "Link", placeholder: "/shop/skin-care/acne" },
                                { key: "image", label: "Image URL", placeholder: "https://..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400" />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end gap-2 p-5 border-t border-slate-100">
                            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button onClick={save} className="bg-gradient-to-r from-indigo-500 to-purple-600">Save</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTargetedSolutions;
