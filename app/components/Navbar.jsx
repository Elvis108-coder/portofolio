'use client'
import { useState, useEffect } from 'react'
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark'
    setDarkMode(saved)
    document.documentElement.classList.toggle('dark', saved)
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full z-50">
      <div className="font-bold text-xl text-gray-800 dark:text-white">Elvis Kiprono</div>
      <div className="flex gap-4 items-center">
        <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500">Projects</a>
        <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</a>
        <a href="https://github.com/Elvis108-coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl text-gray-800 dark:text-white" />
        </a>
        <button onClick={toggleTheme} aria-label="Toggle Theme">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-white" />}
        </button>
      </div>
    </nav>
  )
}
