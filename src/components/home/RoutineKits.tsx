import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap } from "lucide-react";

const kits = [
    {
        name: "Haircare Kit",
        price: 799,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
        bgColor: "bg-green-50",
        items: "Shampoo + Conditioner + Hair Mask",
    },
    {
        name: "Radiance Kit",
        price: 799,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        bgColor: "bg-pink-50",
        items: "Face Wash + Serum + Moisturizer",
    },
    {
        name: "Repair Kit",
        price: 799,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
        bgColor: "bg-amber-50",
        items: "Cleanser + Toner + Night Cream",
    },
];

const RoutineKits = () => {
    return (
        <section className="py-6 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-left mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1 block">
                        Save More
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                        Bundles & Routine Kits
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {kits.map((kit, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl ${kit.bgColor} overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                        >
                            <div className="aspect-square overflow-hidden p-4">
                                <img
                                    src={kit.image}
                                    alt={kit.name}
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                    {kit.name}
                                </h3>
                                <p className="text-xs text-slate-500 mb-2">{kit.items}</p>
                                <p className="text-lg font-bold text-slate-900 mb-3">₹{kit.price}</p>
                                <div className="flex gap-2">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="flex-1 shadow-sm"
                                    >
                                        <ShoppingBag className="w-4 h-4 mr-2" />
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1"
                                    >
                                        <Zap className="w-4 h-4 mr-2" />
                                        Quick Buy
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoutineKits;
