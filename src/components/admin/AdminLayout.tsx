import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
    LayoutDashboard,
    Image,
    Package,
    FolderTree,
    Wrench,
    Scissors,
    Sparkles,
    PlayCircle,
    MapPin,
    Stethoscope,
    MessageSquare,
    ShoppingCart,
    Activity,
    LogOut,
    Menu,
    X,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "Orders", icon: ShoppingCart, path: "/admin/orders" },
    { label: "User Tracking", icon: Activity, path: "/admin/tracking" },
    { label: "Banners", icon: Image, path: "/admin/banners" },
    { label: "Products", icon: Package, path: "/admin/products" },
    { label: "Categories", icon: FolderTree, path: "/admin/categories" },
    { label: "Our Services", icon: Wrench, path: "/admin/services" },
    { label: "Fix Your Hair", icon: Scissors, path: "/admin/concerns?type=hair" },
    { label: "Fix Your Skin", icon: Sparkles, path: "/admin/concerns?type=skin" },
    { label: "Video Reviews", icon: PlayCircle, path: "/admin/videos" },
    { label: "Salons", icon: MapPin, path: "/admin/salons" },
    { label: "Dermatologists", icon: Stethoscope, path: "/admin/dermatologists" },
    { label: "Testimonials", icon: MessageSquare, path: "/admin/testimonials" },
];

const AdminLayout = () => {
    const { user, signOut } = useAuth();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === "/admin") return location.pathname === "/admin";
        return location.pathname.startsWith(path.split("?")[0]);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-5 border-b border-slate-100">
                    <Link to="/admin" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">BB</span>
                        </div>
                        <span className="font-display text-lg font-bold text-slate-900">Admin</span>
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-1 hover:bg-slate-100 rounded"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4 px-3">
                    <div className="space-y-1">
                        {NAV_ITEMS.map((item) => {
                            const active = isActive(item.path);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${active
                                        ? "bg-rose-50 text-rose-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    <item.icon className={`w-4.5 h-4.5 ${active ? "text-rose-600" : "text-slate-400"}`} />
                                    {item.label}
                                    {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-rose-400" />}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* User footer */}
                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                                {user?.name?.charAt(0) || "A"}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">{user?.name}</p>
                            <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-slate-600 hover:text-rose-600 hover:border-rose-200"
                        onClick={signOut}
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                    >
                        <Menu className="w-5 h-5 text-slate-600" />
                    </button>

                    <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500">
                        <Link to="/" className="hover:text-rose-600 transition-colors">
                            ← View Website
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="/" target="_blank">
                            <Button variant="outline" size="sm" className="text-xs">
                                View Site
                            </Button>
                        </Link>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-4 lg:p-8 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
