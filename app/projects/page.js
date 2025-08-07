'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      <h1 className="text-3xl font-bold mb-4">Technical Projects</h1>

      {/* Beauty Shop */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Image
            src="/projects/beautyshop.png"
            alt="Beauty Shop Screenshot"
            width={600}
            height={400}
            className="rounded w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-2xl font-semibold">Beauty Shop – Full Stack Salon Management App</h2>
          <p>
            Built a React + Flask web app for managing salon appointments, services, and admin analytics.
            Implemented service booking, stylist scheduling, and user-friendly UI.
            Integrated backend APIs for service listings, customer data, and bookings.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Tech Stack:</strong> React, Tailwind CSS, Flask, PostgreSQL
          </p>
          <div className="flex space-x-4">
            <Link href="https://688bec68eee6537f22f4ac40--glistening-fenglisu-5083bc.netlify.app/" target="_blank" className="text-purple-600 hover:underline">
              🔗 Live Demo
            </Link>
            <Link href="https://github.com/your-username/beauty-shop" target="_blank" className="text-purple-600 hover:underline">
              💻 GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Devbuy Electronics Store */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Devbuy Electronics Store – E-commerce Platform</h2>
        <p>
          A responsive e-commerce website with product search, filtering, sorting, and cart functionality.
          Implemented state management using React hooks and Context API. Integrated checkout flow with dynamic cart updates.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Tech Stack:</strong> React, React Router, Context API
        </p>
        <Link href="https://github.com/your-username/devbuy-store" target="_blank" className="text-purple-600 hover:underline">
          💻 GitHub
        </Link>
      </div>

      {/* Habit Tracker */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Habit Tracker CLI App – Command Line Python Application</h2>
        <p>
          Tracks daily habits, supports progress tracking, and visualizes habit stats.
          Created classes with OOP principles for habit management. Implemented error handling and user-friendly prompts.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Tech Stack:</strong> Python, SQLAlchemy, SQLite
        </p>
        <Link href="https://github.com/Elvis108-coder/Habit-Tracker" target="_blank" className="text-purple-600 hover:underline">
          💻 GitHub
        </Link>
      </div>
    </main>
  );
}
