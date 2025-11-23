import React from 'react'
import {
  House,
  FolderKanban,
  Users,
  BarChart3,
} from 'lucide-react'

// --- Nav Links ---
const navLinks = [
  { href: '#home', icon: House, label: 'Home' },
  { href: '#about', icon: BarChart3, label: 'About' },
  { href: '#projects', icon: FolderKanban, label: 'Projects' },
  { href: '#services', icon: Users, label: 'Services' },
]

const DesktopNavLinks = () => (
  <div className="hidden md:flex items-center gap-2">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <link.icon size={20} />
        <span className="text-sm font-medium">{link.label}</span>
      </a>
    ))}
  </div>
)

export default DesktopNavLinks
