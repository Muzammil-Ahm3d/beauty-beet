import { useState } from "react";
import {
    Image,
    Plus,
    Pencil,
    Trash2,
    GripVertical,
    Eye,
    EyeOff,
    Upload,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Banner {
    id: string;
    title: string;
    subtitle: string;
    discountText: string;
    buttonText: string;
    imageUrl: string;
    link: string;
    order: number;
    active: boolean;
}

const MOCK_BANNERS: Banner[] = [
    {
        id: "1",
        title: "Ayurvedic Hair Care",
        subtitle: "Natural solutions for every hair concern",
        discountText: "Up to 30% Off",
        buttonText: "Shop Now",
        imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
        link: "/shop/hair-care",
        order: 1,
        active: true,
    },
    {
        id: "2",
        title: "Skin Glow Range",
        subtitle: "Radiance-boosting formulas with Kumkumadi",
        discountText: "New Arrivals",
        buttonText: "Explore",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
        link: "/shop/skin-care",
        order: 2,
        active: true,
    },
    {
        id: "3",
        title: "Valentine's Special",
        subtitle: "Gift sets for your valentine",
        discountText: "Buy 2 Get 1 Free",
        buttonText: "Shop Gifts",
        imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
        link: "/shop",
        order: 3,
        active: false,
    },
];

const AdminBanners = () => {
    const [banners, setBanners] = useState<Banner[]>(MOCK_BANNERS);
    const [editing, setEditing] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<Partial<Banner>>({});

    const toggleActive = (id: string) => {
        setBanners((prev) =>
            prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
        );
    };

    const deleteBanner = (id: string) => {
        if (confirm("Delete this banner?")) {
            setBanners((prev) => prev.filter((b) => b.id !== id));
        }
    };

    const openEdit = (banner: Banner) => {
        setForm(banner);
        setEditing(banner.id);
        setShowForm(true);
    };

    const openNew = () => {
        setForm({ active: true, order: banners.length + 1 });
        setEditing(null);
        setShowForm(true);
    };

    const saveForm = () => {
        if (editing) {
            setBanners((prev) =>
                prev.map((b) => (b.id === editing ? { ...b, ...form } as Banner : b))
            );
        } else {
            setBanners((prev) => [
                ...prev,
                { ...form, id: Date.now().toString() } as Banner,
            ]);
        }
        setShowForm(false);
        setForm({});
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Image className="w-6 h-6 text-amber-500" />
                        Banner Management
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage hero carousel slides • Recommended: 2800 × 800px
                    </p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Banner
                </Button>
            </div>

            {/* Banner list */}
            <div className="space-y-3">
                {banners.map((banner) => (
                    <div
                        key={banner.id}
                        className={`bg-white rounded-xl border ${banner.active ? "border-slate-200" : "border-slate-100 opacity-60"
                            } overflow-hidden hover:shadow-md transition-all`}
                    >
                        <div className="flex items-stretch">
                            {/* Image */}
                            <div className="w-48 h-28 flex-shrink-0 relative">
                                <img
                                    src={banner.imageUrl}
                                    alt={banner.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 left-2">
                                    <span
                                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${banner.active
                                                ? "bg-emerald-500 text-white"
                                                : "bg-slate-300 text-slate-700"
                                            }`}
                                    >
                                        {banner.active ? "LIVE" : "DRAFT"}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 p-4 flex items-center">
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-slate-900">{banner.title}</h3>
                                    <p className="text-sm text-slate-500 truncate">{banner.subtitle}</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-0.5 rounded-full">
                                            {banner.discountText}
                                        </span>
                                        <span className="text-xs text-slate-400">Order: #{banner.order}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-1 ml-4">
                                    <button
                                        onClick={() => toggleActive(banner.id)}
                                        className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600"
                                        title={banner.active ? "Deactivate" : "Activate"}
                                    >
                                        {banner.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={() => openEdit(banner)}
                                        className="p-2 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600"
                                    >
                                        <Pencil className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => deleteBanner(banner.id)}
                                        className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <div className="p-2 text-slate-300 cursor-grab">
                                        <GripVertical className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">
                                {editing ? "Edit Banner" : "Add New Banner"}
                            </h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "title", label: "Title", placeholder: "Valentine's Sale" },
                                { key: "subtitle", label: "Subtitle", placeholder: "Shop the best deals" },
                                { key: "discountText", label: "Badge Text", placeholder: "Up to 30% Off" },
                                { key: "buttonText", label: "Button Text", placeholder: "Shop Now" },
                                { key: "link", label: "Link", placeholder: "/shop/hair-care" },
                                { key: "imageUrl", label: "Image URL", placeholder: "https://..." },
                            ].map((field) => (
                                <div key={field.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        {field.label}
                                    </label>
                                    <input
                                        type="text"
                                        value={(form as any)[field.key] || ""}
                                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                                        placeholder={field.placeholder}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                                    />
                                </div>
                            ))}

                            {/* Image preview */}
                            {form.imageUrl && (
                                <div className="rounded-xl overflow-hidden border border-slate-200">
                                    <img src={form.imageUrl} alt="Preview" className="w-full h-32 object-cover" />
                                </div>
                            )}

                            <div className="flex items-center gap-2 pt-2">
                                <label className="flex items-center gap-2 text-sm text-slate-700">
                                    <input
                                        type="checkbox"
                                        checked={form.active ?? true}
                                        onChange={(e) => setForm({ ...form, active: e.target.checked })}
                                        className="rounded border-slate-300"
                                    />
                                    Active (visible on website)
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 p-5 border-t border-slate-100">
                            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button onClick={saveForm} className="bg-gradient-to-r from-rose-500 to-pink-600">
                                {editing ? "Update" : "Add"} Banner
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminBanners;
