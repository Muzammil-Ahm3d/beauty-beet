import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRewards, SPIN_SEGMENTS } from "@/context/RewardsContext";
import { Button } from "@/components/ui/button";
import {
    Gift, Coins, Copy, Check, Share2, Users, Trophy,
    Sparkles, Star, ShieldCheck, Clock,
    ChevronRight, Target, Zap, Crown, BadgePercent,
    ArrowLeft
} from "lucide-react";
import { toast } from "sonner";

// ─── Confetti Poppers ────────────────────────────────────────────────
interface Particle {
    x: number; y: number; vx: number; vy: number;
    color: string; size: number; rotation: number; rotationSpeed: number;
    opacity: number; shape: "circle" | "rect" | "star";
}

const CONFETTI_COLORS = ["#FFD700", "#E84040", "#2B7ADB", "#F5A623", "#D63384", "#E85D24", "#fff", "#4ade80"];

const ConfettiCanvas = ({ active }: { active: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animRef = useRef<number>(0);

    useEffect(() => {
        if (!active || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create particles from both top corners
        const newParticles: Particle[] = [];
        for (let i = 0; i < 120; i++) {
            const fromLeft = i < 60;
            newParticles.push({
                x: fromLeft ? 0 : canvas.width,
                y: 0,
                vx: (fromLeft ? 1 : -1) * (Math.random() * 8 + 3),
                vy: Math.random() * 6 + 2,
                color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                opacity: 1,
                shape: ["circle", "rect", "star"][Math.floor(Math.random() * 3)] as Particle["shape"],
            });
        }
        particles.current = newParticles;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;

            particles.current.forEach((p) => {
                p.x += p.vx;
                p.vy += 0.15; // gravity
                p.y += p.vy;
                p.rotation += p.rotationSpeed;
                p.opacity -= 0.005;

                if (p.opacity <= 0) return;
                alive = true;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;

                if (p.shape === "circle") {
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                } else if (p.shape === "rect") {
                    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                } else {
                    // star/diamond
                    ctx.beginPath();
                    ctx.moveTo(0, -p.size / 2);
                    ctx.lineTo(p.size / 4, 0);
                    ctx.lineTo(0, p.size / 2);
                    ctx.lineTo(-p.size / 4, 0);
                    ctx.closePath();
                    ctx.fill();
                }
                ctx.restore();
            });

            if (alive) {
                animRef.current = requestAnimationFrame(animate);
            }
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, [active]);

    if (!active) return null;
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[200] pointer-events-none"
            style={{ width: "100vw", height: "100vh" }}
        />
    );
};

// ─── Win Popup Modal ─────────────────────────────────────────────────
const WinModal = ({
    result,
    onClose,
}: {
    result: { label: string; type: string } | null;
    onClose: () => void;
}) => {
    if (!result) return null;

    const isVoucher = result.type === "voucher";

    return (
        <div
            className="fixed inset-0 z-[150] flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
                className="relative z-10 bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-3xl p-8 md:p-10 max-w-sm w-full text-center border border-[#FFD700]/30 shadow-[0_0_60px_rgba(255,215,0,0.15)]"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
            >
                {/* Emoji burst */}
                <div className="text-6xl mb-4">
                    {isVoucher ? "🎫" : "🎉"}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Congratulations!
                </h2>

                <p className="text-neutral-400 text-sm mb-6">
                    You spun the wheel and won
                </p>

                {/* Prize display */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#FFD700]/10 blur-xl rounded-full" />
                    <div className="relative bg-gradient-to-r from-[#FFD700]/10 to-[#DAA520]/10 border-2 border-[#FFD700]/40 rounded-2xl px-8 py-4 mb-6">
                        <span className="text-3xl md:text-4xl font-black text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">
                            {result.label}
                        </span>
                        {isVoucher && (
                            <p className="text-sm text-[#FFD700]/70 mt-1 font-medium">Gift Voucher</p>
                        )}
                    </div>
                </div>

                <p className="text-xs text-neutral-500 mb-5">
                    {isVoucher
                        ? "Apply this voucher at checkout for flat 20% off!"
                        : "Coins have been added to your wallet!"}
                </p>

                <button
                    onClick={onClose}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-black font-bold text-base hover:from-[#DAA520] hover:to-[#B8860B] transition-all shadow-lg"
                >
                    Awesome! 🎊
                </button>

                <p className="text-[11px] text-neutral-600 mt-3">
                    Come back tomorrow for another spin!
                </p>
            </div>
        </div>
    );
};

// ─── Spin Wheel Component ────────────────────────────────────────────
const SpinWheel = () => {
    const { spinWheel, hasSpunToday } = useRewards();
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [result, setResult] = useState<{ label: string; type: string } | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showWinModal, setShowWinModal] = useState(false);

    const segmentCount = SPIN_SEGMENTS.length;
    const segmentAngle = 360 / segmentCount;

    const handleSpin = useCallback(() => {
        if (isSpinning || hasSpunToday) return;
        setIsSpinning(true);
        setResult(null);

        const spinResult = spinWheel();
        const winningIndex = SPIN_SEGMENTS.findIndex(
            s => s.label === spinResult.label && s.value === spinResult.value
        );

        const targetAngle = 360 - (winningIndex * segmentAngle + segmentAngle / 2);
        const newRotation = rotation + 1800 + targetAngle;
        setRotation(newRotation);

        setTimeout(() => {
            setIsSpinning(false);
            setResult({ label: spinResult.label, type: spinResult.type });
            setShowConfetti(true);
            setShowWinModal(true);
        }, 4000);
    }, [isSpinning, hasSpunToday, rotation, spinWheel, segmentAngle]);

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Wheel */}
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
                {/* Pointer triangle at top */}
                <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 z-20 drop-shadow-lg">
                    <svg width="32" height="36" viewBox="0 0 32 36">
                        <defs>
                            <linearGradient id="pointerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#B8860B" />
                            </linearGradient>
                        </defs>
                        <path d="M16 36 L0 0 L32 0 Z" fill="url(#pointerGrad)" stroke="#8B6914" strokeWidth="1" />
                    </svg>
                </div>

                {/* Outer gold ring with dot decorations */}
                <div className="absolute inset-0 rounded-full" style={{
                    background: "linear-gradient(135deg, #FFD700 0%, #DAA520 30%, #B8860B 60%, #FFD700 100%)",
                    padding: "8px",
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.3), inset 0 0 15px rgba(255, 215, 0, 0.2)",
                }}>
                    {/* Gold dots around the ring */}
                    <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 200 200">
                        {Array.from({ length: 20 }).map((_, i) => {
                            const angle = (i * 360 / 20 - 90) * (Math.PI / 180);
                            const r = 96;
                            const cx = 100 + r * Math.cos(angle);
                            const cy = 100 + r * Math.sin(angle);
                            return <circle key={i} cx={cx} cy={cy} r="2" fill="#FFD700" opacity="0.9" />;
                        })}
                    </svg>
                    <div className="w-full h-full rounded-full bg-black overflow-hidden" />
                </div>

                {/* Spinning wheel */}
                <div
                    className="absolute rounded-full overflow-hidden"
                    style={{
                        inset: "8px",
                        transform: `rotate(${rotation}deg)`,
                        transition: isSpinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
                    }}
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                            <radialGradient id="centerGold" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#FFE44D" />
                                <stop offset="60%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#B8860B" />
                            </radialGradient>
                            <filter id="centerShadow">
                                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
                            </filter>
                        </defs>
                        {SPIN_SEGMENTS.map((seg, i) => {
                            const startAngle = i * segmentAngle;
                            const endAngle = startAngle + segmentAngle;
                            const startRad = (startAngle - 90) * (Math.PI / 180);
                            const endRad = (endAngle - 90) * (Math.PI / 180);
                            const R = 97;
                            const x1 = 100 + R * Math.cos(startRad);
                            const y1 = 100 + R * Math.sin(startRad);
                            const x2 = 100 + R * Math.cos(endRad);
                            const y2 = 100 + R * Math.sin(endRad);
                            const largeArc = segmentAngle > 180 ? 1 : 0;
                            const midAngle = startAngle + segmentAngle / 2;

                            return (
                                <g key={i}>
                                    <path
                                        d={`M100,100 L${x1},${y1} A${R},${R} 0 ${largeArc},1 ${x2},${y2} Z`}
                                        fill={seg.color}
                                        stroke="rgba(255,215,0,0.3)"
                                        strokeWidth="0.5"
                                    />
                                    {/* Radial text reading outward from center */}
                                    <text
                                        x="100"
                                        y="32"
                                        fill={seg.textColor}
                                        fontSize="7"
                                        fontWeight="800"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        transform={`rotate(${midAngle}, 100, 100)`}
                                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                                    >
                                        {seg.label}
                                    </text>
                                </g>
                            );
                        })}
                        {/* Center hub */}
                        <circle cx="100" cy="100" r="22" fill="#1a1a1a" stroke="#DAA520" strokeWidth="3" filter="url(#centerShadow)" />
                        <circle cx="100" cy="100" r="16" fill="url(#centerGold)" />
                        <circle cx="100" cy="100" r="8" fill="#1a1a1a" stroke="#FFD700" strokeWidth="1.5" />
                        <text x="100" y="100.5" textAnchor="middle" dominantBaseline="middle" fontSize="4.5" fontWeight="900" fill="#FFD700" letterSpacing="0.5">
                            SPIN
                        </text>
                    </svg>
                </div>
            </div>

            {/* Spin Button */}
            <Button
                onClick={handleSpin}
                disabled={isSpinning || hasSpunToday}
                className="px-8 py-3 text-base font-bold shadow-lg bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-black hover:from-[#DAA520] hover:to-[#B8860B] border-0"
                size="lg"
            >
                {isSpinning ? (
                    <span className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 animate-spin" /> Spinning...
                    </span>
                ) : hasSpunToday ? (
                    <span className="flex items-center gap-2">
                        <Clock className="w-5 h-5" /> Come back tomorrow!
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <Zap className="w-5 h-5" /> Spin to Win!
                    </span>
                )}
            </Button>

            {/* Result text below wheel */}
            {result && !showWinModal && (
                <div className="text-center animate-scale-in">
                    <p className="text-lg font-bold text-[#FFD700]">
                        {result.type === "voucher" ? `🎫 You won a ${result.label} voucher!` : `🎉 You won ${result.label}!`}
                    </p>
                    <p className="text-sm text-neutral-400 mt-1">Come back tomorrow for another spin!</p>
                </div>
            )}

            {/* Confetti */}
            <ConfettiCanvas active={showConfetti} />

            {/* Win Popup */}
            <WinModal result={showWinModal ? result : null} onClose={() => { setShowWinModal(false); setShowConfetti(false); }} />
        </div>
    );
};

// ─── Referral Section ────────────────────────────────────────────────
const ReferralSection = () => {
    const { referralCode, referralCount } = useRewards();
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(referralCode);
            setCopied(true);
            toast.success("Referral code copied!");
            setTimeout(() => setCopied(false), 2000);
        } catch {
            toast.error("Failed to copy");
        }
    };

    const shareCode = async () => {
        const text = `🌿 Use my referral code ${referralCode} on BeautyBeet and get ₹50 in your wallet! Shop clean beauty: `;
        if (navigator.share) {
            try {
                await navigator.share({ title: "BeautyBeet Referral", text, url: window.location.origin });
            } catch { /* cancelled */ }
        } else {
            copyCode();
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl p-6 md:p-8 border border-[#FFD700]/20">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-white">Refer & Earn</h3>
                    <p className="text-sm text-neutral-400">Earn ₹50 for every friend who joins</p>
                </div>
            </div>

            {/* Code Display */}
            <div className="flex items-center gap-2 bg-[#0d0d0d] rounded-xl p-3 border border-[#FFD700]/30 mb-4">
                <div className="flex-1 font-mono font-bold text-lg text-[#FFD700] tracking-wider text-center">
                    {referralCode}
                </div>
                <button
                    onClick={copyCode}
                    className="p-2 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 transition-colors"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-[#FFD700]" />}
                </button>
            </div>

            <Button onClick={shareCode} className="w-full bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-black hover:from-[#DAA520] hover:to-[#B8860B] border-0 font-bold">
                <Share2 className="w-4 h-4 mr-2" />
                Share with Friends
            </Button>

            {referralCount > 0 && (
                <p className="text-center text-sm text-neutral-400 mt-3">
                    <span className="font-bold text-[#FFD700]">{referralCount}</span> friends referred so far!
                </p>
            )}
        </div>
    );
};

// ─── Milestones Section ──────────────────────────────────────────────
const MilestonesSection = () => {
    const { milestones, totalOrders, claimMilestone } = useRewards();

    return (
        <div className="space-y-4">
            {milestones.map((milestone) => {
                const progress = Math.min((totalOrders / milestone.targetOrders) * 100, 100);
                const canClaim = totalOrders >= milestone.targetOrders && !milestone.claimed;

                return (
                    <div
                        key={milestone.id}
                        className={`rounded-2xl p-5 border transition-all ${milestone.claimed
                            ? "bg-[#FFD700]/5 border-[#FFD700]/20"
                            : canClaim
                                ? "bg-[#FFD700]/10 border-[#FFD700]/40 shadow-[0_0_20px_rgba(255,215,0,0.1)]"
                                : "bg-[#1a1a1a] border-[#333]"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${milestone.claimed ? "bg-[#FFD700] text-black" : canClaim ? "bg-[#FFD700]/20 text-[#FFD700]" : "bg-[#333] text-neutral-500"
                                    }`}>
                                    {milestone.claimed ? <Check className="w-4 h-4" /> : <Trophy className="w-4 h-4" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">{milestone.title}</h4>
                                    <p className="text-xs text-neutral-500">{milestone.description}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                {milestone.claimed ? (
                                    <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 rounded-full">Claimed</span>
                                ) : canClaim ? (
                                    <Button size="sm" className="bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-black hover:from-[#DAA520] hover:to-[#B8860B] border-0 font-bold" onClick={() => claimMilestone(milestone.id)}>
                                        Claim ₹{milestone.reward}
                                    </Button>
                                ) : (
                                    <span className="text-sm font-bold text-neutral-500">₹{milestone.reward}</span>
                                )}
                            </div>
                        </div>

                        {!milestone.claimed && (
                            <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${canClaim ? "bg-[#FFD700]" : "bg-[#FFD700]/30"}`}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        )}
                        {!milestone.claimed && (
                            <p className="text-[11px] text-neutral-500 mt-1.5">
                                {totalOrders} / {milestone.targetOrders} orders
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

// ─── Main Rewards Page ───────────────────────────────────────────────
const Rewards = () => {
    const { walletBalance, transactions, isFirstOrder, totalOrders } = useRewards();

    return (
        <div className="min-h-screen bg-[#0d0d0d]">
            <Header />
            <main>
                {/* Hero Banner */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-10 md:py-14 border-b border-[#FFD700]/10">
                    {/* Gold particle decorations */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-[#FFD700]/40 animate-float" />
                        <div className="absolute bottom-10 right-20 w-3 h-3 rounded-full bg-[#FFD700]/30 animate-float" style={{ animationDelay: "2s" }} />
                        <div className="absolute top-20 right-40 w-1.5 h-1.5 rounded-full bg-[#FFD700]/50 animate-float" style={{ animationDelay: "4s" }} />
                        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#FFD700]/20 animate-float" style={{ animationDelay: "1s" }} />
                        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-[#FFD700]/60 animate-float" style={{ animationDelay: "3s" }} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <Link to="/" className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-[#FFD700] text-sm mb-4 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Shop
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-sm font-medium text-[#FFD700] uppercase tracking-wider">Beauty Rewards</span>
                                </div>
                                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                                    Your Rewards Hub
                                </h1>
                                <p className="text-neutral-400 text-base max-w-md">
                                    Spin, earn, and save! Collect BeautyBeet coins and redeem them on your next purchase.
                                </p>
                            </div>

                            {/* Wallet Card */}
                            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl p-6 border border-[#FFD700]/20 min-w-[240px] shadow-[0_0_30px_rgba(255,215,0,0.05)]">
                                <div className="flex items-center gap-2 mb-1">
                                    <Coins className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-sm text-neutral-400">Wallet Balance</span>
                                </div>
                                <div className="text-4xl font-bold text-[#FFD700] mb-1">
                                    ₹{walletBalance}
                                </div>
                                <p className="text-xs text-neutral-600">
                                    {totalOrders} orders completed
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* First Order Banner */}
                {isFirstOrder && (
                    <section className="bg-gradient-to-r from-[#1a1a00] to-[#1a1500] border-b border-[#FFD700]/10">
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex items-center gap-3 justify-center text-center">
                                <Gift className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-white text-sm md:text-base">
                                        🎁 First Order Bonus: <span className="text-[#FFD700]">FREE Shipping</span> + <span className="text-[#FFD700]">₹100 Coins</span>
                                    </p>
                                    <p className="text-xs text-neutral-500">Automatically applied on your first purchase!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <div className="container mx-auto px-4 py-8">
                    {/* How It Works */}
                    <section className="mb-10">
                        <h2 className="font-display text-2xl font-bold text-white mb-6 text-center">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: Target, title: "Shop & Earn", desc: "Earn coins on every order, referral, and spin.", color: "bg-[#FFD700]/10 text-[#FFD700]" },
                                { icon: Coins, title: "Collect Coins", desc: "Watch your wallet grow with milestones & bonuses.", color: "bg-[#FFD700]/10 text-[#FFD700]" },
                                { icon: BadgePercent, title: "Redeem & Save", desc: "Use your coins at checkout for instant discounts.", color: "bg-[#FFD700]/10 text-[#FFD700]" },
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#1a1a1a] border border-[#333] hover:border-[#FFD700]/30 transition-all">
                                    <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-0.5">{step.title}</h3>
                                        <p className="text-sm text-neutral-400">{step.desc}</p>
                                    </div>
                                    {i < 2 && <ChevronRight className="w-5 h-5 text-neutral-700 hidden md:block ml-auto self-center" />}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Spin Wheel */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Spin Wheel */}
                            <section className="bg-[#111] rounded-2xl border border-[#333] p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                                        <Star className="w-5 h-5 text-[#FFD700]" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl text-white">Spin the Wheel</h2>
                                        <p className="text-sm text-neutral-400">One free spin every day — win up to ₹10,000!</p>
                                    </div>
                                </div>
                                <SpinWheel />
                            </section>

                            {/* Milestones */}
                            <section className="bg-[#111] rounded-2xl border border-[#333] p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                                        <Crown className="w-5 h-5 text-[#FFD700]" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl text-white">Milestones</h2>
                                        <p className="text-sm text-neutral-400">Reach milestones for bigger rewards!</p>
                                    </div>
                                </div>
                                <MilestonesSection />
                            </section>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Referral */}
                            <ReferralSection />

                            {/* Rewards Summary */}
                            <div className="bg-[#111] rounded-2xl border border-[#333] p-6">
                                <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#FFD700]" /> What You Can Earn
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Daily Spin", value: "Up to ₹10,000/day", icon: "🎰" },
                                        { label: "Gift Vouchers", value: "Flat 20% Off", icon: "🎫" },
                                        { label: "Per Referral", value: "₹50 each", icon: "👥" },
                                        { label: "First Order", value: "₹100 bonus", icon: "🎁" },
                                        { label: "Milestones", value: "Up to ₹2,500", icon: "🏆" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-2 border-b border-[#333]/50 last:border-0">
                                            <span className="flex items-center gap-2 text-sm text-neutral-300">
                                                <span>{item.icon}</span> {item.label}
                                            </span>
                                            <span className="text-sm font-bold text-[#FFD700]">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-[#111] rounded-2xl border border-[#333] p-6">
                                <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-neutral-500" /> Recent Activity
                                </h3>
                                {transactions.length === 0 ? (
                                    <p className="text-sm text-neutral-500 text-center py-4">
                                        No activity yet. Spin the wheel to get started! 🎡
                                    </p>
                                ) : (
                                    <div className="space-y-2 max-h-[300px] overflow-y-auto scrollbar-none">
                                        {transactions.slice(0, 15).map((tx) => (
                                            <div key={tx.id} className="flex items-center justify-between py-2 border-b border-[#333]/50 last:border-0">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-neutral-300 truncate">{tx.description}</p>
                                                    <p className="text-[11px] text-neutral-600">
                                                        {new Date(tx.timestamp).toLocaleDateString("en-IN", {
                                                            day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                                                        })}
                                                    </p>
                                                </div>
                                                <span className={`text-sm font-bold ml-3 ${tx.amount >= 0 ? "text-[#FFD700]" : "text-red-400"}`}>
                                                    {tx.amount >= 0 ? "+" : ""}₹{Math.abs(tx.amount)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Rewards;
