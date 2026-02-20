import { Star, Smile, Building2, ShieldCheck } from "lucide-react";

const StatsBanner = () => {
    const stats = [
        {
            icon: Star,
            value: "4.9/5",
            label: "Rated",
            iconColor: "text-amber-400",
        },
        {
            icon: Smile,
            value: "50K+",
            label: "Happy customers",
            iconColor: "text-amber-500",
        },
        {
            icon: Building2,
            value: "50+",
            label: "salons onboarded every week",
            iconColor: "text-amber-600",
        },
        {
            icon: ShieldCheck,
            value: "Dr. Ekta",
            label: "Formulated by Gold Medalist Dr Ekta",
            iconColor: "text-amber-500",
            isDoctor: true
        },
    ];

    return (
        <div className="w-full bg-white py-8 border-y border-slate-100 shadow-sm mt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start gap-4 px-4">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center ${stat.iconColor}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                                    {stat.value}
                                </span>
                                <span className="text-xs md:text-sm font-medium text-slate-500 leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;
