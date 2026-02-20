import { useState } from "react";
import { PlayCircle, Plus, Pencil, Trash2, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoTestimonial {
    id: string;
    name: string;
    thumbnail: string;
    videoUrl: string;
    product: string;
    verified: boolean;
}

const MOCK_VIDEOS: VideoTestimonial[] = [
    { id: "1", name: "Priya M.", thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=60", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", product: "Bhringraj Hair Oil", verified: true },
    { id: "2", name: "Sneha R.", thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=60", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", product: "Kumkumadi Face Serum", verified: true },
    { id: "3", name: "Anita K.", thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=60", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", product: "Rose Lip Balm", verified: false },
    { id: "4", name: "Meera S.", thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=60", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", product: "Aloe Vera Face Gel", verified: true },
];

const AdminVideoTestimonials = () => {
    const [videos, setVideos] = useState<VideoTestimonial[]>(MOCK_VIDEOS);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<VideoTestimonial>>({});

    const openEdit = (v: VideoTestimonial) => { setForm(v); setEditing(v.id); setShowForm(true); };
    const openNew = () => { setForm({ verified: false }); setEditing(null); setShowForm(true); };
    const save = () => {
        if (editing) {
            setVideos((prev) => prev.map((v) => (v.id === editing ? { ...v, ...form } as VideoTestimonial : v)));
        } else {
            setVideos((prev) => [...prev, { ...form, id: Date.now().toString() } as VideoTestimonial]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <PlayCircle className="w-6 h-6 text-rose-500" />
                        Video Testimonials
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Manage video review cards • Thumbnail: 640 × 800px (portrait)</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-rose-500 to-pink-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Video
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {videos.map((v) => (
                    <div key={v.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="h-52 relative">
                            <img src={v.thumbnail} alt={v.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute top-2 right-2">
                                {v.verified && (
                                    <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full">VERIFIED</span>
                                )}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <PlayCircle className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                                <p className="text-white font-semibold text-sm">{v.name}</p>
                                <p className="text-white/70 text-xs">{v.product}</p>
                            </div>
                        </div>
                        <div className="p-3 flex items-center justify-between">
                            <a href={v.videoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" /> YouTube
                            </a>
                            <div className="flex gap-1">
                                <button onClick={() => openEdit(v)} className="p-1 hover:bg-blue-50 rounded text-slate-400 hover:text-blue-600"><Pencil className="w-3.5 h-3.5" /></button>
                                <button onClick={() => setVideos(videos.filter((x) => x.id !== v.id))} className="p-1 hover:bg-red-50 rounded text-slate-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Video Testimonial</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            {[
                                { key: "name", label: "Reviewer Name", placeholder: "Priya M." },
                                { key: "product", label: "Product Name", placeholder: "Bhringraj Hair Oil" },
                                { key: "thumbnail", label: "Thumbnail URL (640×800)", placeholder: "https://..." },
                                { key: "videoUrl", label: "YouTube Embed URL", placeholder: "https://www.youtube.com/embed/..." },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                                    <input type="text" value={(form as any)[f.key] || ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400" />
                                </div>
                            ))}
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

export default AdminVideoTestimonials;
