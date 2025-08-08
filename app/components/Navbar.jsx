'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO with animation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Elvis's portofolio
          </Link>
        </motion.div>

        {/* NAV LINKS */}
        <nav className="flex space-x-6 text-sm font-medium">
          {['/', '/about', '/education', '/skills', '/projects', '/resume', '/contact'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase());
            return (
              <Link
                key={index}
                href={path}
                className="relative text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition duration-200"
              >
                <span className="hover-underline-animation">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* THEME TOGGLE with framer motion bounce */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Underline hover animation CSS */}
      <style jsx>{`
        .hover-underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </header>
  );
}
