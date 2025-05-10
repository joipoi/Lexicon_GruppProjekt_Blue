'use client';

import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        const logoutLink = document.querySelector('a[href="#logout"]');        

        const handleLogout = async (e) => {
            e.preventDefault();
            try {
                await signOut(auth);
                console.log('Signed out');
                router.push('/contact');
            } catch (error) {
                console.error('Error sign out: ', error);
            }
        };

        if (logoutLink) {
            logoutLink.addEventListener('click', handleLogout);
        }

        return () => {
            if (logoutLink) {
                logoutLink.removeEventListener('click', handleLogout);
            }
        };
    }, []);
}