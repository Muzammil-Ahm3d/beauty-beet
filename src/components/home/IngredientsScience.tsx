import { Leaf, FlaskConical, Sparkles, Droplets, ShieldCheck, Wheat } from "lucide-react";

const ingredients = [
    {
        icon: Leaf,
        name: "Bhringraj",
        benefit: "Strengthens hair roots & reduces fall",
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        icon: FlaskConical,
        name: "Niacinamide",
        benefit: "Minimizes pores & evens skin tone",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        icon: Sparkles,
        name: "Vitamin C",
        benefit: "Brightens & protects against UV damage",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        icon: Droplets,
        name: "Hyaluronic Acid",
        benefit: "Deep hydration & plumps skin",
        bgColor: "bg-cyan-50",
        iconColor: "text-cyan-600",
    },
    {
        icon: ShieldCheck,
        name: "Salicylic Acid",
        benefit: "Clears acne & unclogs pores",
        bgColor: "bg-rose-50",
        iconColor: "text-rose-600",
    },
    {
        icon: Wheat,
        name: "Biotin",
        benefit: "Promotes hair growth & nail strength",
        bgColor: "bg-yellow-50",
        iconColor: "text-yellow-700",
    },
];

const IngredientsScience = () => {
    return (
        <section className="py-4 md:py-6 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-left mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1 block">
                        Backed by Research
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                        Ingredients + Science
                    </h2>
                    <p className="text-sm text-slate-500 mt-1 max-w-lg">
                        Every product is crafted with clinically-proven actives and time-tested Ayurvedic ingredients.
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-3 gap-3 scrollbar-none snap-x">
                    {ingredients.map((item, index) => (
                        <div
                            key={index}
                            className={`w-[200px] min-w-[200px] flex-shrink-0 snap-start ${item.bgColor} rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                        >
                            <div className={`w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mb-3 ${item.iconColor}`}>
                                <item.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">
                                {item.name}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {item.benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IngredientsScience;
