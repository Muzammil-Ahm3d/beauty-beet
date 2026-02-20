import { useState } from "react";
import {
    Activity,
    Eye,
    ShoppingCart,
    CreditCard,
    CheckCircle,
    ArrowRight,
    TrendingDown,
    MousePointer,
    Clock,
    BarChart3,
    Users,
} from "lucide-react";

/* ── Funnel Data ── */
const FUNNEL_STEPS = [
    { label: "Homepage Visit", count: 12840, icon: Eye, color: "from-blue-500 to-blue-600" },
    { label: "Product Viewed", count: 6320, icon: MousePointer, color: "from-violet-500 to-purple-600" },
    { label: "Added to Cart", count: 1890, icon: ShoppingCart, color: "from-amber-500 to-orange-500" },
    { label: "Checkout Started", count: 842, icon: CreditCard, color: "from-rose-500 to-pink-600" },
    { label: "Payment Done", count: 614, icon: CheckCircle, color: "from-emerald-500 to-green-600" },
];

/* ── Drop-Off Reasons ── */
const DROP_OFF_REASONS = [
    { stage: "Product → Cart", rate: "70.1%", reason: "Price comparison / Browsing only", sessions: 4430 },
    { stage: "Cart → Checkout", rate: "55.4%", reason: "Shipping cost surprise / Login friction", sessions: 1048 },
    { stage: "Checkout → Payment", rate: "27.1%", reason: "Payment failure / Changed mind", sessions: 228 },
];

/* ── Top Abandoned Products ── */
const ABANDONED_PRODUCTS = [
    { name: "Kumkumadi Face Serum", views: 2340, cartAdds: 512, purchases: 198, abandonRate: "61.3%", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&q=60" },
    { name: "Bhringraj Hair Oil", views: 1890, cartAdds: 445, purchases: 189, abandonRate: "57.5%", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=80&q=60" },
    { name: "Coffee Body Scrub", views: 980, cartAdds: 198, purchases: 64, abandonRate: "67.7%", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=80&q=60" },
    { name: "Rose Lip Balm", views: 1560, cartAdds: 389, purchases: 210, abandonRate: "46.0%", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=80&q=60" },
    { name: "Aloe Vera Face Gel", views: 1120, cartAdds: 267, purchases: 98, abandonRate: "63.3%", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&q=60" },
];

/* ── Recent User Sessions ── */
interface UserSession {
    id: string;
    user: string;
    device: string;
    lastStep: string;
    exitPage: string;
    duration: string;
    time: string;
    converted: boolean;
}

const MOCK_SESSIONS: UserSession[] = [
    { id: "S-4821", user: "Ananya G.", device: "Mobile (Android)", lastStep: "Payment Done", exitPage: "Order Confirmation", duration: "8m 42s", time: "14 Feb, 2:32 PM", converted: true },
    { id: "S-4820", user: "Guest User", device: "Mobile (iOS)", lastStep: "Added to Cart", exitPage: "Cart Page", duration: "3m 15s", time: "14 Feb, 2:18 PM", converted: false },
    { id: "S-4819", user: "Priya S.", device: "Desktop (Chrome)", lastStep: "Checkout Started", exitPage: "Payment Page", duration: "5m 08s", time: "14 Feb, 1:44 PM", converted: false },
    { id: "S-4818", user: "Guest User", device: "Mobile (Android)", lastStep: "Product Viewed", exitPage: "Product Detail - Kumkumadi Serum", duration: "1m 22s", time: "14 Feb, 1:30 PM", converted: false },
    { id: "S-4817", user: "Ravi K.", device: "Desktop (Firefox)", lastStep: "Payment Done", exitPage: "Order Confirmation", duration: "6m 51s", time: "14 Feb, 12:55 PM", converted: true },
    { id: "S-4816", user: "Guest User", device: "Mobile (iOS)", lastStep: "Homepage Visit", exitPage: "Homepage", duration: "0m 34s", time: "14 Feb, 12:40 PM", converted: false },
    { id: "S-4815", user: "Sneha R.", device: "Mobile (Android)", lastStep: "Added to Cart", exitPage: "Cart Page", duration: "4m 02s", time: "14 Feb, 12:22 PM", converted: false },
    { id: "S-4814", user: "Deepika N.", device: "Desktop (Chrome)", lastStep: "Checkout Started", exitPage: "Address Form", duration: "7m 19s", time: "14 Feb, 11:58 AM", converted: false },
];

const STEP_COLORS: Record<string, string> = {
    "Homepage Visit": "bg-blue-50 text-blue-700",
    "Product Viewed": "bg-violet-50 text-violet-700",
    "Added to Cart": "bg-amber-50 text-amber-700",
    "Checkout Started": "bg-rose-50 text-rose-700",
    "Payment Done": "bg-emerald-50 text-emerald-700",
};

const AdminUserTracking = () => {
    const [timeRange, setTimeRange] = useState("7d");

    const overallConversion = ((FUNNEL_STEPS[FUNNEL_STEPS.length - 1].count / FUNNEL_STEPS[0].count) * 100).toFixed(1);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Activity className="w-6 h-6 text-cyan-500" />
                        User Tracking & Funnel Analytics
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Track where users drop off from browsing to purchase • {overallConversion}% overall conversion
                    </p>
                </div>
                <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                >
                    <option value="1d">Today</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="90d">Last 90 Days</option>
                </select>
            </div>

            {/* ── Purchase Funnel ── */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-slate-500" /> Purchase Funnel
                </h2>

                {/* Funnel visualization */}
                <div className="flex items-end gap-3 mb-6">
                    {FUNNEL_STEPS.map((step, i) => {
                        const maxCount = FUNNEL_STEPS[0].count;
                        const height = Math.max(20, (step.count / maxCount) * 100);
                        const pctFromPrev = i > 0
                            ? ((step.count / FUNNEL_STEPS[i - 1].count) * 100).toFixed(0)
                            : "100";

                        return (
                            <div key={step.label} className="flex-1 flex flex-col items-center gap-2">
                                {/* Bar */}
                                <div className="w-full flex flex-col items-center">
                                    <span className="text-xs font-bold text-slate-900 mb-1">
                                        {step.count.toLocaleString()}
                                    </span>
                                    <div
                                        className={`w-full rounded-t-lg bg-gradient-to-t ${step.color} transition-all`}
                                        style={{ height: `${height}px` }}
                                    />
                                </div>
                                {/* Label */}
                                <div className="text-center">
                                    <step.icon className="w-4 h-4 mx-auto text-slate-400 mb-1" />
                                    <p className="text-[10px] font-medium text-slate-700 leading-tight">{step.label}</p>
                                    {i > 0 && (
                                        <p className="text-[10px] text-slate-400 mt-0.5">{pctFromPrev}% proceed</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Conversion rate strip */}
                <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-rose-500" />
                        <span className="text-sm font-medium text-slate-700">Overall Conversion Rate</span>
                    </div>
                    <span className="text-lg font-bold text-emerald-600">{overallConversion}%</span>
                </div>
            </div>

            {/* ── Drop-off Analysis ── */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-rose-500" /> Drop-Off Points
                    </h2>
                    <div className="space-y-3">
                        {DROP_OFF_REASONS.map((d) => (
                            <div key={d.stage} className="p-4 bg-slate-50 rounded-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-slate-900">{d.stage}</span>
                                    <span className="text-sm font-bold text-rose-600">{d.rate} drop</span>
                                </div>
                                <p className="text-xs text-slate-500">{d.reason}</p>
                                <div className="mt-2 w-full bg-slate-200 rounded-full h-1.5">
                                    <div
                                        className="bg-gradient-to-r from-rose-400 to-rose-500 h-1.5 rounded-full"
                                        style={{ width: d.rate }}
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1">{d.sessions.toLocaleString()} sessions lost</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Abandoned Products */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-amber-500" /> Top Abandoned Products
                    </h2>
                    <div className="space-y-3">
                        {ABANDONED_PRODUCTS.map((p) => (
                            <div key={p.name} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-900 truncate">{p.name}</p>
                                    <div className="flex items-center gap-3 mt-0.5">
                                        <span className="text-[10px] text-slate-400">{p.views} views</span>
                                        <ArrowRight className="w-2.5 h-2.5 text-slate-300" />
                                        <span className="text-[10px] text-amber-600">{p.cartAdds} cart</span>
                                        <ArrowRight className="w-2.5 h-2.5 text-slate-300" />
                                        <span className="text-[10px] text-emerald-600">{p.purchases} bought</span>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-rose-600">{p.abandonRate}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Live Session Log ── */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                    <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Users className="w-5 h-5 text-cyan-500" /> Recent User Sessions
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">Track individual user journeys and where they exited</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Session</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">User</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Device</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Last Step</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Exit Page</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Duration</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_SESSIONS.map((session) => (
                                <tr key={session.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-3">
                                        <span className="text-sm font-mono text-slate-500">{session.id}</span>
                                        <p className="text-[10px] text-slate-400">{session.time}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-sm font-medium text-slate-900">{session.user}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-xs text-slate-500">{session.device}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STEP_COLORS[session.lastStep] || "bg-slate-100 text-slate-600"}`}>
                                            {session.lastStep}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-xs text-slate-600">{session.exitPage}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-xs text-slate-500 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {session.duration}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {session.converted ? (
                                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">CONVERTED</span>
                                        ) : (
                                            <span className="text-[10px] font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded-full">DROPPED</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Implementation Note */}
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-cyan-800 mb-1">💡 Implementation Note</p>
                <p className="text-xs text-cyan-700 leading-relaxed">
                    User tracking requires a lightweight analytics script on the frontend (e.g., custom events via Google Analytics 4, Mixpanel, or Supabase edge functions).
                    Each page transition fires an event: <code className="bg-cyan-100 px-1 rounded">page_view</code>, <code className="bg-cyan-100 px-1 rounded">product_viewed</code>, <code className="bg-cyan-100 px-1 rounded">add_to_cart</code>, <code className="bg-cyan-100 px-1 rounded">checkout_started</code>, <code className="bg-cyan-100 px-1 rounded">payment_completed</code>.
                    The data shown here is mock — connect to your analytics provider to see real data.
                </p>
            </div>
        </div>
    );
};

export default AdminUserTracking;
