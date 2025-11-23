import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import UserProfileMenu from "./UserProfileMenu";

// --- Top NavBar ---
const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "profile" | "language" | null

  return (
    <header className="w-full fixed top-0 left-0 bg-white/10 dark:bg-black/80 backdrop-blur-md dark:text-white shadow-md z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Animated Hamburger */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.div initial={false} animate={mobileOpen ? "open" : "closed"}>
              <motion.span
                className="block w-6 h-0.5 bg-current mb-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-current mb-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>

          <Logo />
        </div>

        {/* Middle */}
        <DesktopNavLinks />

        {/* Right */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelector
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
          <UserProfileMenu
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}/>
    </header>
  );
};

export default NavBar;
