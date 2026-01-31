import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products } from "@/data/products";
import { toast } from "sonner";

export interface CartItem {
    productId: string;
    variantId: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (productId: string, variantId: string, quantity: number) => void;
    removeFromCart: (productId: string, variantId: string) => void;
    updateQuantity: (productId: string, variantId: string, quantity: number) => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Hydrate from localStorage if needed (skipping for simplicity in this turn)

    const addToCart = (productId: string, variantId: string, quantity: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const variant = product.variants.find(v => v.variant_id === variantId);
        if (!variant) return;

        if (quantity > variant.stock_quantity) {
            toast.error(`Only ${variant.stock_quantity} items left in stock!`);
            return;
        }

        setItems(prev => {
            const existing = prev.find(item => item.productId === productId && item.variantId === variantId);
            if (existing) {
                // Check new total quantity
                if (existing.quantity + quantity > variant.stock_quantity) {
                    toast.error(`Cannot add more. Stock limit reached.`);
                    return prev;
                }
                toast.success("Cart updated!");
                return prev.map(item =>
                    (item.productId === productId && item.variantId === variantId)
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            toast.success("Added to cart!");
            return [...prev, { productId, variantId, quantity }];
        });
    };

    const removeFromCart = (productId: string, variantId: string) => {
        setItems(prev => prev.filter(item => !(item.productId === productId && item.variantId === variantId)));
        toast.success("Removed from cart");
    };

    const updateQuantity = (productId: string, variantId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId, variantId);
            return;
        }
        const product = products.find(p => p.id === productId);
        const variant = product?.variants.find(v => v.variant_id === variantId);

        if (variant && quantity > variant.stock_quantity) {
            toast.error("Stock limit reached");
            return;
        }

        setItems(prev => prev.map(item =>
            (item.productId === productId && item.variantId === variantId)
                ? { ...item, quantity }
                : item
        ));
    };

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const cartTotal = items.reduce((acc, item) => {
        const product = products.find(p => p.id === item.productId);
        const variant = product?.variants.find(v => v.variant_id === item.variantId);
        if (!variant) return acc;
        const price = variant.discounted_price || variant.variant_price;
        return acc + (price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
