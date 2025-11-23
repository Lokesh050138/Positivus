import React from 'react'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Settings, LogOut, Globe, Sun, Moon, Menu } from "lucide-react";

// Sample nav links
const navLinks = [ 
    { href: "/", label: "Home", icon: Home },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/logout", label: "Logout", icon: LogOut },
];


// --- Mobile Menu ---
const MobileMenu = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            >
                <div className="absolute w-screen h-full  bg-white/40 dark:bg-gray-900 shadow-lg">
                    
                    <nav className="flex flex-col gap-4  pt-20 dark:bg-gray-900 bg-white/80 h-screen p-4 items-center text-3xl">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                                <link.icon size={30} /> {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default MobileMenu
