import { useState } from "react";
import { Plus, Pencil, Trash2, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StripeMessage {
    id: string;
    text: string;
    active: boolean;
}

const MOCK_MESSAGES: StripeMessage[] = [
    { id: "1", text: "Free delivery above ₹1000", active: true },
    { id: "2", text: "₹500 wallet for first order", active: true },
    { id: "3", text: "Zero commission salon bookings", active: true },
];

const AdminPromoStripe = () => {
    const [messages, setMessages] = useState<StripeMessage[]>(MOCK_MESSAGES);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<StripeMessage>>({});

    const openEdit = (m: StripeMessage) => { setForm(m); setEditing(m.id); setShowForm(true); };
    const openNew = () => { setForm({ active: true }); setEditing(null); setShowForm(true); };

    const save = () => {
        if (editing) {
            setMessages((prev) => prev.map((m) => (m.id === editing ? { ...m, ...form } as StripeMessage : m)));
        } else {
            setMessages((prev) => [...prev, { ...form, id: Date.now().toString() } as StripeMessage]);
        }
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <MessageSquare className="w-6 h-6 text-amber-500" />
                        Promo Stripe Management
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Manage the rotating header announcement bar</p>
                </div>
                <Button onClick={openNew} className="bg-gradient-to-r from-amber-500 to-amber-600">
                    <Plus className="w-4 h-4 mr-2" /> Add Message
                </Button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-3 font-medium text-slate-500">Message Text</th>
                            <th className="px-6 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-6 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {messages.map((m) => (
                            <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{m.text}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${m.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                                        {m.active ? "Active" : "Hidden"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button onClick={() => openEdit(m)} className="p-1.5 hover:bg-blue-100 rounded text-slate-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => setMessages(messages.filter((x) => x.id !== m.id))} className="p-1.5 hover:bg-red-100 rounded text-slate-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {messages.length === 0 && <div className="p-8 text-center text-slate-500">No messages found.</div>}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">{editing ? "Edit" : "Add"} Message</h2>
                            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 rounded"><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message Text</label>
                                <input type="text" value={form.text || ""} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Free delivery above ₹1000" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400" />
                            </div>
                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                <input type="checkbox" checked={form.active ?? true} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded border-slate-300" />
                                Active (visible on website)
                            </label>
                        </div>
                        <div className="flex justify-end gap-2 p-5 border-t border-slate-100">
                            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                            <Button onClick={save} className="bg-gradient-to-r from-amber-500 to-amber-600">Save</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPromoStripe;
