import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROMO_MESSAGES = [
    "Free delivery above ₹1000",
    "₹500 wallet for first order",
    "Zero commission salon bookings"
];

const PromoStripe = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % PROMO_MESSAGES.length);
        }, 3000); // Rotate every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-[#FFF9F2] py-2.5 overflow-hidden relative h-10">
            <div className="container mx-auto px-4 text-center h-full relative">
                <AnimatePresence mode="popLayout">
                    <motion.p
                        key={currentIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-[#D4AF37] font-medium text-sm md:text-lg tracking-wide absolute left-0 right-0 top-1/2 -translate-y-1/2"
                    >
                        {PROMO_MESSAGES[currentIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PromoStripe;
