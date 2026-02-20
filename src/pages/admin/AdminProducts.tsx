import { useState } from "react";
import {
    Package,
    Plus,
    Search,
    Filter,
    Pencil,
    Trash2,
    Eye,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductRow {
    id: string;
    name: string;
    sku: string;
    category: string;
    subcategory: string;
    price: number;
    stock: number;
    status: "published" | "draft" | "archived";
    image: string;
    isBestseller: boolean;
}

const MOCK_PRODUCTS: ProductRow[] = [
    { id: "1", name: "Bhringraj Hair Oil", sku: "HC-HO-001", category: "Hair Care", subcategory: "Hair Oils", price: 449, stock: 120, status: "published", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=100&q=60", isBestseller: true },
    { id: "2", name: "Kumkumadi Face Serum", sku: "SC-FO-001", category: "Skin Care", subcategory: "Face Oils & Serums", price: 799, stock: 85, status: "published", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&q=60", isBestseller: true },
    { id: "3", name: "Aloe Vera Face Gel", sku: "SC-FG-001", category: "Skin Care", subcategory: "Face Gels", price: 349, stock: 200, status: "published", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&q=60", isBestseller: false },
    { id: "4", name: "Coffee Body Scrub", sku: "BC-BS-001", category: "Body Care", subcategory: "Body Scrubs", price: 499, stock: 65, status: "published", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=100&q=60", isBestseller: false },
    { id: "5", name: "Rose Lip Balm", sku: "LM-LB-001", category: "Lip Care & Makeup", subcategory: "Lip Balms", price: 199, stock: 300, status: "published", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&q=60", isBestseller: true },
    { id: "6", name: "Onion Hair Serum", sku: "HC-HS-002", category: "Hair Care", subcategory: "Hair Serums", price: 549, stock: 0, status: "draft", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&q=60", isBestseller: false },
    { id: "7", name: "Neem Face Wash", sku: "SC-CL-001", category: "Skin Care", subcategory: "Cleansers", price: 299, stock: 42, status: "published", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&q=60", isBestseller: false },
    { id: "8", name: "Charcoal Face Pack", sku: "SC-FP-001", category: "Skin Care", subcategory: "Face Packs", price: 399, stock: 18, status: "archived", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=100&q=60", isBestseller: false },
];

const STATUS_STYLES: Record<string, string> = {
    published: "bg-emerald-50 text-emerald-700",
    draft: "bg-amber-50 text-amber-700",
    archived: "bg-slate-100 text-slate-500",
};

const AdminProducts = () => {
    const [products, setProducts] = useState<ProductRow[]>(MOCK_PRODUCTS);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [categoryFilter, setCategoryFilter] = useState<string>("all");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 25;

    const filtered = products.filter((p) => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.sku.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "all" || p.status === statusFilter;
        const matchCategory = categoryFilter === "all" || p.category === categoryFilter;
        return matchSearch && matchStatus && matchCategory;
    });

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
    const categories = [...new Set(products.map((p) => p.category))];

    const deleteProduct = (id: string) => {
        if (confirm("Delete this product?")) {
            setProducts((prev) => prev.filter((p) => p.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Package className="w-6 h-6 text-blue-500" />
                        Products
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        {filtered.length} products • {products.filter((p) => p.status === "published").length} published
                    </p>
                </div>
                <Link to="/admin/products/new">
                    <Button className="bg-gradient-to-r from-rose-500 to-pink-600">
                        <Plus className="w-4 h-4 mr-2" /> Add Product
                    </Button>
                </Link>
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
                            placeholder="Search by name or SKU..."
                            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                        className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                    >
                        <option value="all">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="archived">Archived</option>
                    </select>
                    <select
                        value={categoryFilter}
                        onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                        className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/50">
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Product</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">SKU</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Category</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">
                                    <span className="flex items-center gap-1 cursor-pointer">Price <ArrowUpDown className="w-3 h-3" /></span>
                                </th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Stock</th>
                                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Status</th>
                                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((product) => (
                                <tr key={product.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-10 h-10 rounded-lg object-cover bg-slate-100"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-slate-900">{product.name}</p>
                                                {product.isBestseller && (
                                                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                                                        BESTSELLER
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-sm text-slate-500 font-mono">{product.sku}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div>
                                            <p className="text-sm text-slate-700">{product.category}</p>
                                            <p className="text-xs text-slate-400">{product.subcategory}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-sm font-semibold text-slate-900">₹{product.price}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-sm font-medium ${product.stock === 0 ? "text-red-500" : product.stock < 20 ? "text-amber-600" : "text-slate-700"}`}>
                                            {product.stock === 0 ? "Out of stock" : product.stock}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[product.status]}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link to={`/admin/products/${product.id}`}>
                                                <button className="p-1.5 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600">
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => deleteProduct(product.id)}
                                                className="p-1.5 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {paginated.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-4 py-12 text-center text-sm text-slate-400">
                                        No products found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
                        <p className="text-sm text-slate-500">
                            Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filtered.length)} of {filtered.length}
                        </p>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-1.5 hover:bg-slate-100 rounded-lg disabled:opacity-30"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-8 h-8 rounded-lg text-sm font-medium ${currentPage === i + 1
                                            ? "bg-rose-500 text-white"
                                            : "hover:bg-slate-100 text-slate-600"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-1.5 hover:bg-slate-100 rounded-lg disabled:opacity-30"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminProducts;
