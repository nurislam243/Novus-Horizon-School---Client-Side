
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
            // Handle Role Detection
            if (currentUser?.email === "admin@novushorizon.com") {
                setRole("admin");
            } else if (currentUser?.email.includes("teacher")) {
                setRole("teacher");
            } else {
                setRole("student");
            }
            
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        role,
        loading,
        login,
        logout
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};