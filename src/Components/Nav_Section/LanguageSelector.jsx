import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Language Selector ---
const LanguageSelector = ({ openDropdown, setOpenDropdown }) => {
    const [language, setLanguage] = useState("en");
    const isOpen = openDropdown === "language";
    const ref = useRef(null);

    useEffect(() => {
        const stored = localStorage.getItem("lang");
        if (stored) setLanguage(stored);
    }, []);

    // Close on click outside
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [setOpenDropdown]);

    const handleSelect = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
        setOpenDropdown(null);
    };

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpenDropdown(isOpen ? null : "language")}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
                <Globe size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                        role="listbox"
                    >
                        {[
                            { code: "en", label: "English" },
                            { code: "es", label: "Español" },
                            { code: "fr", label: "Français" },
                        ].map((lang) => (
                            <li
                                key={lang.code}
                                role="option"
                                aria-selected={language === lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                    language === lang.code ? "bg-gray-100 dark:bg-gray-700" : ""
                                }`}
                            >
                                {lang.label}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector
