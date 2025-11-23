import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// --- Theme Toggle ---
const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) setTheme(storedTheme);
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle
