'use client';

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="space-y-10">
        {/* Project 1: Beauty Shop */}
        <div>
          <h3 className="text-2xl font-semibold">Beauty Shop – Full Stack Salon Management App</h3>
          <div className="flex gap-4 text-sm mt-2">
            <a
              href="https://your-live-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              🔗 Live Demo
            </a>
            <a
              href="https://github.com/your-repo/beauty-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              💻 GitHub
            </a>
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Built a React + Flask web app for managing salon appointments, services, and admin analytics.</li>
            <li>Implemented service booking, stylist scheduling, and user-friendly UI.</li>
            <li>Integrated backend APIs for service listings, customer data, and bookings.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tech Stack:</strong> React, Tailwind CSS, Flask, PostgreSQL
          </p>
        </div>

        {/* Project 2: Devbuy Electronics Store */}
        <div>
          <h3 className="text-2xl font-semibold">Devbuy Electronics Store – E-commerce Platform</h3>
          <a
            href="https://github.com/your-repo/devbuy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm mt-1 inline-block"
          >
            💻 GitHub
          </a>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Responsive e-commerce website with product search, filtering, sorting, and cart functionality.</li>
            <li>Used React hooks and Context API for state management.</li>
            <li>Integrated checkout flow with dynamic cart updates.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tech Stack:</strong> React, React Router, Context API
          </p>
        </div>

        {/* Project 3: Habit Tracker CLI App */}
        <div>
          <h3 className="text-2xl font-semibold">Habit Tracker CLI App – Command Line Python Application</h3>
          <a
            href="https://github.com/your-repo/habit-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm mt-1 inline-block"
          >
            💻 GitHub
          </a>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Tracks daily habits, supports progress tracking, and visualizes habit stats.</li>
            <li>Built using OOP principles with proper class-based structure.</li>
            <li>Implemented error handling and user-friendly prompts.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tech Stack:</strong> Python, SQLAlchemy, SQLite
          </p>
        </div>
      </div>
    </section>
  );
}
