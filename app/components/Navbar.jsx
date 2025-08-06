'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Education', href: '/education' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-black shadow-md transition duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Portfolio Name */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Elvis’s Portfolio
        </div>

        {/* Right: Nav Links + Theme Toggle */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
