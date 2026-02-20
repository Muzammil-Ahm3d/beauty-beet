import { useState } from "react";
import {
    ShoppingCart,
    Search,
    Eye,
    ChevronDown,
    ChevronRight,
    ChevronLeft,
    Package,
    MapPin,
    Phone,
    Mail,
    Calendar,
    IndianRupee,
    User,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderItem {
    name: string;
    variant: string;
    qty: number;
    price: number;
    image: string;
}

interface Order {
    id: string;
    date: string;
    customer: {
        name: string;
        email: string;
        phone: string;
        address: string;
    };
    items: OrderItem[];
    subtotal: number;
    shipping: number;
    total: number;
    status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled" | "returned";
    paymentMethod: string;
    paymentStatus: "paid" | "pending" | "refunded";
    trackingId?: string;
}

const STATUS_STYLES: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700",
    confirmed: "bg-blue-50 text-blue-700",
    shipped: "bg-indigo-50 text-indigo-700",
    delivered: "bg-emerald-50 text-emerald-700",
    cancelled: "bg-red-50 text-red-600",
    returned: "bg-slate-100 text-slate-600",
};

const PAYMENT_STYLES: Record<string, string> = {
    paid: "bg-emerald-50 text-emerald-700",
    pending: "bg-amber-50 text-amber-700",
    refunded: "bg-red-50 text-red-600",
};

const MOCK_ORDERS: Order[] = [
    {
        id: "BB-10247", date: "2026-02-14 14:32",
        customer: { name: "Ananya Gupta", email: "ananya.g@gmail.com", phone: "+91 98765 43210", address: "12-A, Lake View Apartments, Banjara Hills, Hyderabad 500034" },
        items: [
            { name: "Bhringraj Hair Oil", variant: "100ml", qty: 2, price: 799, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=80&q=60" },
            { name: "Kumkumadi Face Serum", variant: "30ml", qty: 1, price: 799, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&q=60" },
        ],
        subtotal: 2397, shipping: 0, total: 2397, status: "confirmed", paymentMethod: "Razorpay (UPI)", paymentStatus: "paid",
    },
    {
        id: "BB-10246", date: "2026-02-14 11:15",
        customer: { name: "Priya Sharma", email: "priya.s@outlook.com", phone: "+91 87654 32109", address: "403, Green Meadows, Jubilee Hills, Hyderabad 500033" },
        items: [
            { name: "Rose Lip Balm", variant: "5g", qty: 3, price: 199, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=80&q=60" },
        ],
        subtotal: 597, shipping: 49, total: 646, status: "shipped", paymentMethod: "Razorpay (Card)", paymentStatus: "paid", trackingId: "DL1234567890",
    },
    {
        id: "BB-10245", date: "2026-02-13 19:42",
        customer: { name: "Ravi Kumar", email: "ravi.k@gmail.com", phone: "+91 76543 21098", address: "8-2-120, Road No. 3, Madhapur, Hyderabad 500081" },
        items: [
            { name: "Coffee Body Scrub", variant: "200g", qty: 1, price: 499, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=80&q=60" },
            { name: "Aloe Vera Face Gel", variant: "100ml", qty: 1, price: 349, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&q=60" },
            { name: "Neem Face Wash", variant: "150ml", qty: 1, price: 299, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&q=60" },
        ],
        subtotal: 1147, shipping: 0, total: 1147, status: "delivered", paymentMethod: "COD", paymentStatus: "paid",
    },
    {
        id: "BB-10244", date: "2026-02-13 09:08",
        customer: { name: "Meera Iyer", email: "meera.i@yahoo.com", phone: "+91 65432 10987", address: "Flat 201, Sai Residency, Kondapur, Hyderabad 500084" },
        items: [
            { name: "Onion Hair Serum", variant: "50ml", qty: 1, price: 549, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&q=60" },
        ],
        subtotal: 549, shipping: 49, total: 598, status: "cancelled", paymentMethod: "Razorpay (UPI)", paymentStatus: "refunded",
    },
    {
        id: "BB-10243", date: "2026-02-12 16:55",
        customer: { name: "Sneha Reddy", email: "sneha.r@gmail.com", phone: "+91 54321 09876", address: "Plot 45, Silicon Valley, Gachibowli, Hyderabad 500032" },
        items: [
            { name: "Kumkumadi Face Serum", variant: "30ml", qty: 2, price: 799, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&q=60" },
            { name: "Rose Lip Balm", variant: "5g", qty: 2, price: 199, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=80&q=60" },
        ],
        subtotal: 1996, shipping: 0, total: 1996, status: "pending", paymentMethod: "Razorpay (Card)", paymentStatus: "pending",
    },
    {
        id: "BB-10242", date: "2026-02-12 10:30",
        customer: { name: "Deepika Nair", email: "deepika.n@gmail.com", phone: "+91 43210 98765", address: "H.No 6-3-248, Flat 502, Ameerpet, Hyderabad 500016" },
        items: [
            { name: "Bhringraj Hair Oil", variant: "50ml", qty: 1, price: 449, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=80&q=60" },
        ],
        subtotal: 449, shipping: 49, total: 498, status: "delivered", paymentMethod: "COD", paymentStatus: "paid",
    },
];

const AdminOrders = () => {
    const [orders] = useState<Order[]>(MOCK_ORDERS);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 20;

    const filtered = orders.filter((o) => {
        const matchSearch =
            o.id.toLowerCase().includes(search.toLowerCase()) ||
            o.customer.name.toLowerCase().includes(search.toLowerCase()) ||
            o.customer.email.toLowerCase().includes(search.toLowerCase()) ||
            o.customer.phone.includes(search);
        const matchStatus = statusFilter === "all" || o.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

    // Summary stats
    const totalRevenue = orders.filter((o) => o.paymentStatus === "paid").reduce((s, o) => s + o.total, 0);
    const pendingOrders = orders.filter((o) => o.status === "pending").length;
    const deliveredOrders = orders.filter((o) => o.status === "delivered").length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <ShoppingCart className="w-6 h-6 text-orange-500" />
                        Orders
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        {orders.length} total orders • ₹{totalRevenue.toLocaleString()} revenue
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Orders", value: orders.length, color: "from-orange-500 to-amber-500", icon: ShoppingCart },
                    { label: "Revenue", value: `₹${totalRevenue.toLocaleString()}`, color: "from-emerald-500 to-green-600", icon: IndianRupee },
                    { label: "Pending", value: pendingOrders, color: "from-amber-500 to-yellow-500", icon: Package },
                    { label: "Delivered", value: deliveredOrders, color: "from-blue-500 to-indigo-600", icon: Package },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                                <p className="text-2xl font-bold text-slate-900 mt-1">{s.value}</p>
                            </div>
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                                <s.icon className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                            placeholder="Search by order ID, name, email, phone..."
                            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                        className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="returned">Returned</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/50">
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Order</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Customer</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Items</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Total</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Payment</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Status</th>
                                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((order) => (
                                <tr key={order.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-3">
                                        <p className="text-sm font-semibold text-slate-900">{order.id}</p>
                                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                            <Calendar className="w-3 h-3" /> {order.date}
                                        </p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <p className="text-sm font-medium text-slate-900">{order.customer.name}</p>
                                        <p className="text-xs text-slate-400">{order.customer.phone}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-1">
                                            <div className="flex -space-x-2">
                                                {order.items.slice(0, 3).map((item, i) => (
                                                    <img key={i} src={item.image} alt={item.name} className="w-7 h-7 rounded-md object-cover border-2 border-white" />
                                                ))}
                                            </div>
                                            <span className="text-xs text-slate-500 ml-1">
                                                {order.items.length} item{order.items.length > 1 ? "s" : ""}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-sm font-semibold text-slate-900">₹{order.total.toLocaleString()}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${PAYMENT_STYLES[order.paymentStatus]}`}>
                                            {order.paymentStatus.toUpperCase()}
                                        </span>
                                        <p className="text-[10px] text-slate-400 mt-0.5">{order.paymentMethod}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[order.status]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button
                                            onClick={() => setSelectedOrder(order)}
                                            className="p-1.5 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {paginated.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-4 py-12 text-center text-sm text-slate-400">
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
                        <p className="text-sm text-slate-500">
                            Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filtered.length)} of {filtered.length}
                        </p>
                        <div className="flex items-center gap-1">
                            <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-1.5 hover:bg-slate-100 rounded-lg disabled:opacity-30">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-8 h-8 rounded-lg text-sm font-medium ${currentPage === i + 1 ? "bg-rose-500 text-white" : "hover:bg-slate-100 text-slate-600"}`}>
                                    {i + 1}
                                </button>
                            ))}
                            <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-1.5 hover:bg-slate-100 rounded-lg disabled:opacity-30">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Order Detail Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900">Order {selectedOrder.id}</h2>
                                <p className="text-xs text-slate-400">{selectedOrder.date}</p>
                            </div>
                            <button onClick={() => setSelectedOrder(null)} className="p-1 hover:bg-slate-100 rounded">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>
                        <div className="p-5 space-y-5">
                            {/* Customer details */}
                            <div className="bg-slate-50 rounded-xl p-4">
                                <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                    <User className="w-4 h-4 text-slate-500" /> Customer Details
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <User className="w-3.5 h-3.5 text-slate-400" /> {selectedOrder.customer.name}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Mail className="w-3.5 h-3.5 text-slate-400" /> {selectedOrder.customer.email}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Phone className="w-3.5 h-3.5 text-slate-400" /> {selectedOrder.customer.phone}
                                    </div>
                                    <div className="flex items-start gap-2 text-slate-600">
                                        <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> {selectedOrder.customer.address}
                                    </div>
                                </div>
                            </div>

                            {/* Items */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-900 mb-3">Items Ordered</h3>
                                <div className="space-y-2">
                                    {selectedOrder.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-slate-900">{item.name}</p>
                                                <p className="text-xs text-slate-400">{item.variant} × {item.qty}</p>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-900">₹{(item.price * item.qty).toLocaleString()}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Totals */}
                            <div className="border-t border-slate-100 pt-4 space-y-2">
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>Subtotal</span><span>₹{selectedOrder.subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>Shipping</span><span>{selectedOrder.shipping === 0 ? "FREE" : `₹${selectedOrder.shipping}`}</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-100">
                                    <span>Total</span><span>₹{selectedOrder.total.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Status & Payment */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-500">Status:</span>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[selectedOrder.status]}`}>
                                        {selectedOrder.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-500">Payment:</span>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${PAYMENT_STYLES[selectedOrder.paymentStatus]}`}>
                                        {selectedOrder.paymentStatus} — {selectedOrder.paymentMethod}
                                    </span>
                                </div>
                                {selectedOrder.trackingId && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-500">Tracking:</span>
                                        <span className="text-xs font-mono text-blue-600">{selectedOrder.trackingId}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOrders;
