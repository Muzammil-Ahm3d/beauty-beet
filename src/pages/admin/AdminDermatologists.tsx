import { useState } from "react";
import { Stethoscope, Plus, Pencil, Trash2, X, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Dermatologist {
    id: string;
    name: string;
    specialization: string;
    location: string;
    rating: number;
    reviews: number;
    experience: string;
    nextSlot: string;
    fee: number;
    image: string;
    active: boolean;
}

const MOCK_DOCTORS: Dermatologist[] = [
    { id: "1", name: "Dr. Priya Sharma", specialization: "Skin & Hair Specialist", location: "Banjara Hills, Hyderabad", rating: 4.9, reviews: 312, experience: "12 years", nextSlot: "Today 4:00 PM", fee: 800, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80", active: true },
    { id: "2", name: "Dr. Rajesh Kumar", specialization: "Cosmetic Dermatologist", location: "Jubilee Hills, Hyderabad", rating: 4.7, reviews: 198, experience: "15 years", nextSlot: "Tomorrow 10:00 AM", fee: 1200, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80", active: true },
    { id: "3", name: "Dr. Sneha Reddy", specialization: "Trichologist", location: "Madhapur, Hyderabad", rating: 4.8, reviews: 156, experience: "8 years", nextSlot: "Today 6:00 PM", fee: 600, image: "https://images.unsplash.com/photo-1594824476967-48c8b964c3c8?w=300&q=80", active: true },
    { id: "4", name: "Dr. Arun Mehta", specialization: "Clinical Dermatologist", location: "Kondapur, Hyderabad", rating: 4.5, reviews: 89, experience: "10 years", nextSlot: "Wed 11:00 AM", fee: 700, image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80", active: false },
];

const AdminDermatologists = () => {
    const [doctors, setDoctors] = useState<Dermatologist[]>(MOCK_DOCTORS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<Dermatologist>>({});

    const openEdit = (d: Dermatologist) => { setForm(d); setEditing(d.id); setShowForm(true); };
    const openNew = () => { setForm({ active: true, rating: 0, reviews: 0, fee: 0 }); setEditing(null); setShowForm(true); };
    const save = () => {
        if (editing) {
            setDoctors((prev) => prev.map((d) => (d.id === editing ? { ...d, ...form } as Dermatologist : d)));
        } else {
            setDoctors((prev) => [...prev, { ...form, id: Date.now().toString() } as Dermatologist]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Stethoscope className="w-6 h-6 text-purple-500" />
                        Dermatologist Management
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">{doctors.length} dermatologists • Card image: 800 × 700px</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Doctor
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {doctors.map((d) => (
                    <div key={d.id} className={`bg-white rounded-xl border overflow-hidden hover:shadow-md transition-all ${d.active ? "border-slate-200" : "border-slate-100 opacity-60"}`}>
                        <div className="h-44 relative">
                            <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${d.active ? "bg-purple-500 text-white" : "bg-slate-300 text-slate-700"}`}>
                                    {d.active ? "ACTIVE" : "INACTIVE"}
                                </span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-900">{d.name}</h3>
                            <p className="text-xs text-purple-600 font-medium">{d.specialization}</p>
                            <p className="text-xs text-slate-500 mt-1">{d.location} • {d.experience}</p>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                    <span className="text-sm font-medium">{d.rating}</span>
                                    <span className="text-xs text-slate-400">({d.reviews})</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-900">₹{d.fee}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                                <Calendar className="w-3 h-3" /> {d.nextSlot}
                            </div>
                            <div className="flex items-center justify-end gap-1 mt-3 pt-3 border-t border-slate-50">
                                <button onClick={() => openEdit(d)} className="p-1.5 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                                <button onClick={() => setDoctors(doctors.filter((x) => x.id !== d.id))} className="p-1.5 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Dermatologist</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "name", label: "Full Name", placeholder: "Dr. Priya Sharma" },
                                { key: "specialization", label: "Specialization", placeholder: "Skin & Hair Specialist" },
                                { key: "location", label: "Location", placeholder: "Banjara Hills, Hyderabad" },
                                { key: "experience", label: "Experience", placeholder: "12 years" },
                                { key: "nextSlot", label: "Next Available Slot", placeholder: "Today 4:00 PM" },
                                { key: "image", label: "Photo URL (800×700)", placeholder: "https://..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            ))}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Rating (0-5)</label>
                                    <input type="number" step="0.1" min="0" max="5" value={form.rating || ""} onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) || 0 })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Consultation Fee (₹)</label>
                                    <input type="number" value={form.fee || ""} onChange={(e) => setForm({ ...form, fee: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
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

export default AdminDermatologists;
