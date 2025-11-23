import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const UserProfileMenu = ({ openDropdown, setOpenDropdown }) => {
    const isOpen = openDropdown === "profile";
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [setOpenDropdown]);

    return (
        <div>
            <button
                            onClick={() => {
                                document.getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                setOpenDropdown(null);
                            }}
                            role="menuitem"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
                        >
                            <User size={20} /> Contact
                        </button>
        </div>
    );
};

export default UserProfileMenu;
