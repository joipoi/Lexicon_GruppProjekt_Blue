'use client';

import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";


export const handleLogout = async (router) => {
    try {
      await signOut(auth);
      console.log('Signed out');
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
};