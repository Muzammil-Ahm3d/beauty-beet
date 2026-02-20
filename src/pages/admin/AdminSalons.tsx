import { useState } from "react";
import { MapPin, Plus, Pencil, Trash2, X, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Salon {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviews: number;
    services: string[];
    image: string;
    phone: string;
    active: boolean;
}

const MOCK_SALONS: Salon[] = [
    { id: "1", name: "Glow Beauty Lounge", location: "Banjara Hills, Hyderabad", rating: 4.8, reviews: 124, services: ["Haircut", "Facial", "Manicure"], image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80", phone: "+91 9876543210", active: true },
    { id: "2", name: "Luxe Hair Studio", location: "Jubilee Hills, Hyderabad", rating: 4.6, reviews: 89, services: ["Hair Color", "Keratin", "Bridal"], image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80", phone: "+91 9876543211", active: true },
    { id: "3", name: "Natural Beauty Spa", location: "Madhapur, Hyderabad", rating: 4.9, reviews: 201, services: ["Spa", "Facial", "Body Massage"], image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&q=80", phone: "+91 9876543212", active: true },
    { id: "4", name: "Elite Hair Salon", location: "Kondapur, Hyderabad", rating: 4.3, reviews: 56, services: ["Haircut", "Styling", "Beard"], image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80", phone: "+91 9876543213", active: false },
];

const AdminSalons = () => {
    const [salons, setSalons] = useState<Salon[]>(MOCK_SALONS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<Salon>>({});
    const [servicesInput, setServicesInput] = useState("");

    const openEdit = (s: Salon) => { setForm(s); setServicesInput(s.services.join(", ")); setEditing(s.id); setShowForm(true); };
    const openNew = () => { setForm({ active: true, rating: 0, reviews: 0, services: [] }); setServicesInput(""); setEditing(null); setShowForm(true); };
    const save = () => {
        const data = { ...form, services: servicesInput.split(",").map((s) => s.trim()).filter(Boolean) };
        if (editing) {
            setSalons((prev) => prev.map((s) => (s.id === editing ? { ...s, ...data } as Salon : s)));
        } else {
            setSalons((prev) => [...prev, { ...data, id: Date.now().toString() } as Salon]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-emerald-500" />
                        Salon Management
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">{salons.length} salons • Cover image: 800 × 640px</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Salon
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {salons.map((s) => (
                    <div key={s.id} className={`bg-white rounded-xl border overflow-hidden hover:shadow-md transition-all ${s.active ? "border-slate-200" : "border-slate-100 opacity-60"}`}>
                        <div className="h-40 relative">
                            <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.active ? "bg-emerald-500 text-white" : "bg-slate-300 text-slate-700"}`}>
                                    {s.active ? "ACTIVE" : "INACTIVE"}
                                </span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-900">{s.name}</h3>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" /> {s.location}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                <span className="text-sm font-medium text-slate-900">{s.rating}</span>
                                <span className="text-xs text-slate-400">({s.reviews} reviews)</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {s.services.map((svc) => (
                                    <span key={svc} className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{svc}</span>
                                ))}
                            </div>
                            <div className="flex items-center justify-end gap-1 mt-3 pt-3 border-t border-slate-50">
                                <button onClick={() => openEdit(s)} className="p-1.5 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                                <button onClick={() => setSalons(salons.filter((x) => x.id !== s.id))} className="p-1.5 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Salon</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "name", label: "Salon Name", placeholder: "Glow Beauty Lounge" },
                                { key: "location", label: "Location", placeholder: "Banjara Hills, Hyderabad" },
                                { key: "phone", label: "Phone", placeholder: "+91 9876543210" },
                                { key: "image", label: "Cover Image URL (800×640)", placeholder: "https://..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            ))}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Rating</label>
                                    <input type="number" step="0.1" min="0" max="5" value={form.rating || ""} onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) || 0 })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Reviews</label>
                                    <input type="number" value={form.reviews || ""} onChange={(e) => setForm({ ...form, reviews: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Services (comma separated)</label>
                                <input type="text" value={servicesInput} onChange={(e) => setServicesInput(e.target.value)} placeholder="Haircut, Facial, Manicure" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                            </div>
                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                <input type="checkbox" checked={form.active ?? true} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded border-slate-300" />
                                Active (visible on website)
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

export default AdminSalons;
