import { Link } from "react-router-dom";
import { Gift, MessageCircle } from "lucide-react";
import { useRewards } from "@/context/RewardsContext";

const FloatingActions = () => {
    const { walletBalance } = useRewards();

    return (
        <>
            {/* Left - Rewards Button */}
            <Link
                to="/rewards"
                className="fixed left-4 bottom-6 z-50 group flex items-center gap-2"
                aria-label="Rewards"
            >
                <div className="relative h-12 rounded-full bg-primary text-white shadow-elevated flex items-center gap-2 px-4 hover:scale-105 transition-transform duration-200 animate-float-subtle">
                    <Gift className="w-5 h-5" />
                    <span className="font-bold text-sm">Rewards</span>

                    {/* Coin badge */}
                    {walletBalance > 0 && (
                        <span className="absolute -top-1 -right-1 min-w-[20px] h-5 rounded-full bg-amber-400 text-[10px] font-bold text-amber-950 flex items-center justify-center px-1 shadow-sm border border-white">
                            {walletBalance > 999 ? "999+" : walletBalance}
                        </span>
                    )}
                </div>
            </Link>

            {/* Right - Chatbot Button (placeholder) */}
            <button
                className="fixed right-4 bottom-6 z-50 group"
                aria-label="Chat with us"
                onClick={() => {/* placeholder — chatbot coming soon */ }}
            >
                <div className="relative w-12 h-12 rounded-full bg-accent text-white shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <MessageCircle className="w-5 h-5" />
                </div>
                {/* Tooltip */}
                <span className="absolute right-14 bottom-1/2 translate-y-1/2 bg-foreground text-background text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                    Chat with us
                </span>
            </button>
        </>
    );
};

export default FloatingActions;
