'use client';

export default function ProjectsPage() {
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Technical Projects</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Beauty Shop – Full Stack Salon Management App</h2>
        <p>🔗 Live Demo | 💻 GitHub</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built a React + Flask web app for managing salon appointments, services, and admin analytics.</li>
          <li>Implemented service booking, stylist scheduling, and user-friendly UI.</li>
          <li>Integrated backend APIs for service listings, customer data, and bookings.</li>
          <li><strong>Tech Stack:</strong> React, Tailwind CSS, Flask, PostgreSQL</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Devbuy Electronics Store – E-commerce Platform</h2>
        <p>💻 GitHub</p>
        <ul className="list-disc list-inside space-y-1">
          <li>A responsive e-commerce website with product search, filtering, sorting, and cart functionality.</li>
          <li>Implemented state management using React hooks and Context API.</li>
          <li>Integrated checkout flow with dynamic cart updates.</li>
          <li><strong>Tech Stack:</strong> React, React Router, Context API</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Habit Tracker CLI App – Command Line Python Application</h2>
        <p>💻 GitHub</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tracks daily habits, supports progress tracking, and visualizes habit stats.</li>
          <li>Created classes with OOP principles for habit management.</li>
          <li>Implemented error handling and user-friendly prompts.</li>
          <li><strong>Tech Stack:</strong> Python, SQLAlchemy, SQLite</li>
        </ul>
      </section>
    </main>
  );
}
