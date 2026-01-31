import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
    delay?: number;
    duration?: number;
    viewportAmount?: number;
    once?: boolean;
}

const animations: Record<string, { hidden: Variant; visible: Variant }> = {
    "fade-up": {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
};

export const ScrollReveal = ({
    children,
    width = "100%",
    className = "",
    animation = "fade-up",
    delay = 0,
    duration = 0.5,
    viewportAmount = 0.2,
    once = true,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: viewportAmount, once });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else if (!once) {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, once]);

    const selectedAnimation = animations[animation] || animations["fade-up"];

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: selectedAnimation.hidden,
                visible: selectedAnimation.visible,
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration, delay, ease: "easeOut" }}
            style={{ width }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
