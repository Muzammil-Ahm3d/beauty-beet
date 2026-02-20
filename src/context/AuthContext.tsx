import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AdminUser {
    email: string;
    name: string;
    role: "admin";
}

interface AuthContextType {
    user: AdminUser | null;
    isLoading: boolean;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock admin credentials — replace with Supabase later
const MOCK_ADMIN = {
    email: "admin@beautybeet.com",
    password: "admin123",
    name: "Admin",
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for existing session
        const stored = localStorage.getItem("bb_admin_session");
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch {
                localStorage.removeItem("bb_admin_session");
            }
        }
        setIsLoading(false);
    }, []);

    const signIn = async (email: string, password: string): Promise<boolean> => {
        // Mock authentication — replace with Supabase later
        if (email === MOCK_ADMIN.email && password === MOCK_ADMIN.password) {
            const adminUser: AdminUser = {
                email: MOCK_ADMIN.email,
                name: MOCK_ADMIN.name,
                role: "admin",
            };
            setUser(adminUser);
            localStorage.setItem("bb_admin_session", JSON.stringify(adminUser));
            return true;
        }
        return false;
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("bb_admin_session");
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
