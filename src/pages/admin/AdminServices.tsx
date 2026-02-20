import { useState } from "react";
import { Wrench, Plus, Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCard {
    id: string;
    title: string;
    icon: string;
    image: string;
    link: string;
    active: boolean;
}

const MOCK_SERVICES: ServiceCard[] = [
    { id: "1", title: "Fix Your Hair", icon: "✂️", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80", link: "/solutions/fix-your-hair", active: true },
    { id: "2", title: "Fix Your Skin", icon: "✨", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80", link: "/solutions/fix-your-skin", active: true },
    { id: "3", title: "Book Salon", icon: "💇", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80", link: "/solutions/salon-near-you", active: true },
    { id: "4", title: "Dermatologist", icon: "👨‍⚕️", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80", link: "/solutions/dermatologist-near-you", active: true },
];

const AdminServices = () => {
    const [services, setServices] = useState<ServiceCard[]>(MOCK_SERVICES);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<ServiceCard>>({});

    const openEdit = (s: ServiceCard) => { setForm(s); setEditing(s.id); setShowForm(true); };
    const openNew = () => { setForm({ active: true }); setEditing(null); setShowForm(true); };

    const save = () => {
        if (editing) {
            setServices((prev) => prev.map((s) => (s.id === editing ? { ...s, ...form } as ServiceCard : s)));
        } else {
            setServices((prev) => [...prev, { ...form, id: Date.now().toString() } as ServiceCard]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Wrench className="w-6 h-6 text-indigo-500" />
                        Our Services Cards
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Manage hero section service cards • Recommended: 640 × 400px</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Card
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((s) => (
                    <div key={s.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="h-40 relative">
                            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                                <p className="text-white font-semibold text-sm">{s.icon} {s.title}</p>
                            </div>
                        </div>
                        <div className="p-3 flex items-center justify-between">
                            <span className="text-xs text-slate-400 truncate">{s.link}</span>
                            <div className="flex gap-1">
                                <button onClick={() => openEdit(s)} className="p-1 hover:bg-blue-50 rounded text-slate-400 hover:text-blue-600"><Pencil className="w-3.5 h-3.5" /></button>
                                <button onClick={() => setServices(services.filter((x) => x.id !== s.id))} className="p-1 hover:bg-red-50 rounded text-slate-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Service Card</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "title", label: "Title", placeholder: "Fix Your Hair" },
                                { key: "icon", label: "Icon (Emoji)", placeholder: "✂️" },
                                { key: "image", label: "Image URL", placeholder: "https://..." },
                                { key: "link", label: "Link", placeholder: "/solutions/fix-your-hair" },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            ))}
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

export default AdminServices;
