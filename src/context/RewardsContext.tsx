import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { toast } from "sonner";

// ─── Types ───────────────────────────────────────────────────────────
export interface SpinResult {
    label: string;
    value: number;
    type: "coins" | "voucher";
    timestamp: number;
}

export interface Transaction {
    id: string;
    type: "earned" | "spent" | "referral" | "milestone" | "spin" | "firstOrder";
    amount: number;
    description: string;
    timestamp: number;
}

export interface Milestone {
    id: string;
    title: string;
    description: string;
    targetOrders: number;
    reward: number;
    claimed: boolean;
}

interface RewardsContextType {
    walletBalance: number;
    transactions: Transaction[];
    referralCode: string;
    referralCount: number;
    totalOrders: number;
    milestones: Milestone[];
    hasSpunToday: boolean;
    isFirstOrder: boolean;
    addCoins: (amount: number, description: string, type: Transaction["type"]) => void;
    spinWheel: () => SpinResult;
    applyReferral: (code: string) => boolean;
    claimMilestone: (milestoneId: string) => void;
    getRedeemableAmount: (billAmount: number) => number;
    redeemCoins: (amount: number, billAmount: number) => boolean;
    completeOrder: () => void;
}

// ─── Constants ───────────────────────────────────────────────────────
const STORAGE_KEY = "beautybeet_rewards";
const REFERRAL_BONUS = 50;
const FIRST_ORDER_BONUS = 100;
const MAX_REDEEM_PERCENT = 0.10; // 10% cap — not displayed to user

const DEFAULT_MILESTONES: Milestone[] = [
    { id: "m1", title: "Getting Started", description: "Complete 3 orders", targetOrders: 3, reward: 100, claimed: false },
    { id: "m2", title: "Loyal Shopper", description: "Complete 5 orders", targetOrders: 5, reward: 200, claimed: false },
    { id: "m3", title: "Beauty Enthusiast", description: "Complete 10 orders", targetOrders: 10, reward: 500, claimed: false },
    { id: "m4", title: "VIP Member", description: "Complete 25 orders", targetOrders: 25, reward: 1000, claimed: false },
    { id: "m5", title: "Beauty Legend", description: "Complete 50 orders", targetOrders: 50, reward: 2500, claimed: false },
];

export const SPIN_SEGMENTS = [
    { label: "\u20b9100", value: 100, type: "coins" as const, color: "#E84040", textColor: "#fff" },
    { label: "20% OFF", value: 20, type: "voucher" as const, color: "#2B7ADB", textColor: "#fff" },
    { label: "\u20b9250", value: 250, type: "coins" as const, color: "#F5A623", textColor: "#fff" },
    { label: "\u20b9500", value: 500, type: "coins" as const, color: "#1a1a1a", textColor: "#FFD700" },
    { label: "20% OFF", value: 20, type: "voucher" as const, color: "#D63384", textColor: "#fff" },
    { label: "\u20b91,000", value: 1000, type: "coins" as const, color: "#E85D24", textColor: "#fff" },
    { label: "\u20b92,000", value: 2000, type: "coins" as const, color: "#2B7ADB", textColor: "#fff" },
    { label: "\u20b95,000", value: 5000, type: "coins" as const, color: "#E84040", textColor: "#fff" },
    { label: "20% OFF", value: 20, type: "voucher" as const, color: "#F5A623", textColor: "#fff" },
    { label: "\u20b910,000", value: 10000, type: "coins" as const, color: "#1a1a1a", textColor: "#FFD700" },
];

// ─── Helpers ─────────────────────────────────────────────────────────
function generateCode(): string {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "BB-";
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

function isSameDay(ts: number): boolean {
    const d1 = new Date(ts);
    const d2 = new Date();
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function uid(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

interface PersistedState {
    walletBalance: number;
    transactions: Transaction[];
    referralCode: string;
    referralCount: number;
    totalOrders: number;
    milestones: Milestone[];
    lastSpinTimestamp: number;
    isFirstOrder: boolean;
}

function loadState(): PersistedState {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch {
        // corrupted data, reset
    }
    return {
        walletBalance: 0,
        transactions: [],
        referralCode: generateCode(),
        referralCount: 0,
        totalOrders: 0,
        milestones: DEFAULT_MILESTONES,
        lastSpinTimestamp: 0,
        isFirstOrder: true,
    };
}

// ─── Context ─────────────────────────────────────────────────────────
const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<PersistedState>(loadState);

    // Persist every change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const hasSpunToday = isSameDay(state.lastSpinTimestamp);

    const addCoins = useCallback((amount: number, description: string, type: Transaction["type"]) => {
        setState(prev => ({
            ...prev,
            walletBalance: prev.walletBalance + amount,
            transactions: [
                { id: uid(), type, amount, description, timestamp: Date.now() },
                ...prev.transactions,
            ].slice(0, 50), // keep last 50
        }));
    }, []);

    const spinWheel = useCallback((): SpinResult => {
        const segmentIndex = Math.floor(Math.random() * SPIN_SEGMENTS.length);
        const segment = SPIN_SEGMENTS[segmentIndex];
        const result: SpinResult = {
            label: segment.label,
            value: segment.value,
            type: segment.type,
            timestamp: Date.now(),
        };

        setState(prev => {
            const coinsToAdd = segment.type === "coins" ? segment.value : 0;
            const newBalance = prev.walletBalance + coinsToAdd;
            const newTx: Transaction = {
                id: uid(),
                type: "spin",
                amount: coinsToAdd,
                description: segment.type === "voucher"
                    ? `Won ${segment.label} gift voucher!`
                    : `Won ${segment.label} from Spin Wheel!`,
                timestamp: Date.now(),
            };
            return {
                ...prev,
                walletBalance: newBalance,
                lastSpinTimestamp: Date.now(),
                transactions: [newTx, ...prev.transactions].slice(0, 50),
            };
        });

        if (segment.type === "voucher") {
            toast.success(`🎫 You won a ${segment.label} gift voucher!`);
        } else {
            toast.success(`🎉 You won ${segment.label}!`);
        }

        return result;
    }, []);

    const applyReferral = useCallback((code: string): boolean => {
        if (code === state.referralCode) {
            toast.error("You cannot use your own referral code!");
            return false;
        }
        // In a real app, validate code against backend
        setState(prev => ({
            ...prev,
            referralCount: prev.referralCount + 1,
            walletBalance: prev.walletBalance + REFERRAL_BONUS,
            transactions: [
                { id: uid(), type: "referral" as const, amount: REFERRAL_BONUS, description: `Referral bonus earned!`, timestamp: Date.now() },
                ...prev.transactions,
            ].slice(0, 50),
        }));
        toast.success(`₹${REFERRAL_BONUS} added to your wallet!`);
        return true;
    }, [state.referralCode]);

    const claimMilestone = useCallback((milestoneId: string) => {
        setState(prev => {
            const milestone = prev.milestones.find(m => m.id === milestoneId);
            if (!milestone || milestone.claimed || prev.totalOrders < milestone.targetOrders) return prev;

            return {
                ...prev,
                walletBalance: prev.walletBalance + milestone.reward,
                milestones: prev.milestones.map(m => m.id === milestoneId ? { ...m, claimed: true } : m),
                transactions: [
                    { id: uid(), type: "milestone" as const, amount: milestone.reward, description: `Milestone: ${milestone.title}`, timestamp: Date.now() },
                    ...prev.transactions,
                ].slice(0, 50),
            };
        });
        toast.success("Milestone reward claimed! 🎉");
    }, []);

    const getRedeemableAmount = useCallback((billAmount: number): number => {
        const maxRedeem = Math.floor(billAmount * MAX_REDEEM_PERCENT);
        return Math.min(state.walletBalance, maxRedeem);
    }, [state.walletBalance]);

    const redeemCoins = useCallback((amount: number, billAmount: number): boolean => {
        const maxRedeem = Math.floor(billAmount * MAX_REDEEM_PERCENT);
        const actualRedeem = Math.min(amount, maxRedeem, state.walletBalance);
        if (actualRedeem <= 0) return false;

        setState(prev => ({
            ...prev,
            walletBalance: prev.walletBalance - actualRedeem,
            transactions: [
                { id: uid(), type: "spent" as const, amount: -actualRedeem, description: `Redeemed on order`, timestamp: Date.now() },
                ...prev.transactions,
            ].slice(0, 50),
        }));
        return true;
    }, [state.walletBalance]);

    const completeOrder = useCallback(() => {
        setState(prev => {
            const newOrders = prev.totalOrders + 1;
            const updates: Partial<PersistedState> = { totalOrders: newOrders };

            if (prev.isFirstOrder) {
                updates.isFirstOrder = false;
                updates.walletBalance = (prev.walletBalance || 0) + FIRST_ORDER_BONUS;
                updates.transactions = [
                    { id: uid(), type: "firstOrder" as const, amount: FIRST_ORDER_BONUS, description: "First order bonus! 🎁", timestamp: Date.now() },
                    ...(prev.transactions || []),
                ].slice(0, 50);
            }

            return { ...prev, ...updates };
        });
    }, []);

    return (
        <RewardsContext.Provider
            value={{
                walletBalance: state.walletBalance,
                transactions: state.transactions,
                referralCode: state.referralCode,
                referralCount: state.referralCount,
                totalOrders: state.totalOrders,
                milestones: state.milestones,
                hasSpunToday,
                isFirstOrder: state.isFirstOrder,
                addCoins,
                spinWheel,
                applyReferral,
                claimMilestone,
                getRedeemableAmount,
                redeemCoins,
                completeOrder,
            }}
        >
            {children}
        </RewardsContext.Provider>
    );
};

export const useRewards = () => {
    const context = useContext(RewardsContext);
    if (!context) throw new Error("useRewards must be used within a RewardsProvider");
    return context;
};
