import {
    LayoutDashboard,
    Package,
    Image,
    MapPin,
    Stethoscope,
    TrendingUp,
    Eye,
    ShoppingCart,
    Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
    { label: "Total Products", value: "52", icon: Package, color: "from-blue-500 to-blue-600", change: "+3 this week" },
    { label: "Active Banners", value: "4", icon: Image, color: "from-amber-500 to-orange-500", change: "2 scheduled" },
    { label: "Salons Listed", value: "12", icon: MapPin, color: "from-emerald-500 to-green-600", change: "+2 this month" },
    { label: "Dermatologists", value: "8", icon: Stethoscope, color: "from-purple-500 to-violet-600", change: "All active" },
];

const quickActions = [
    { label: "Add Product", icon: Package, path: "/admin/products/new", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
    { label: "Add Banner", icon: Image, path: "/admin/banners", color: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
    { label: "Add Salon", icon: MapPin, path: "/admin/salons", color: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" },
    { label: "Add Doctor", icon: Stethoscope, path: "/admin/dermatologists", color: "bg-purple-50 text-purple-600 hover:bg-purple-100" },
];

const recentActivity = [
    { action: "Product updated", item: "Bhringraj Hair Oil", time: "2 hours ago", icon: Package },
    { action: "Banner added", item: "Valentine's Sale", time: "5 hours ago", icon: Image },
    { action: "New salon listed", item: "Glow Beauty Lounge", time: "1 day ago", icon: MapPin },
    { action: "Review approved", item: "Kumkumadi Face Serum", time: "2 days ago", icon: Eye },
    { action: "Order received", item: "#BB-10234", time: "2 days ago", icon: ShoppingCart },
];

const Dashboard = () => {
    return (
        <div className="space-y-8">
            {/* Page header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <LayoutDashboard className="w-6 h-6 text-rose-500" />
                        Dashboard
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Welcome back to BeautyBeet Admin</p>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                                    {stat.change}
                                </p>
                            </div>
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Quick actions */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {quickActions.map((action) => (
                            <Link
                                key={action.label}
                                to={action.path}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-colors ${action.color}`}
                            >
                                <action.icon className="w-5 h-5" />
                                <span className="text-xs font-medium">{action.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent activity */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 py-2">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-slate-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-slate-900 font-medium">{item.action}</p>
                                    <p className="text-xs text-slate-500 truncate">{item.item}</p>
                                </div>
                                <span className="text-xs text-slate-400 whitespace-nowrap">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
