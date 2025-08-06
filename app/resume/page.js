'use client';

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-4">Elvis Kiprono</h1>
      <p className="mb-2">📧 biggeelv0821email@gmail.com</p>
      <p className="mb-4">
        <a href="https://github.com/Elvis108-coder" className="text-blue-500 underline" target="_blank">GitHub</a> |{" "}
        <a href="https://instagram.com/elviskiprono_" className="text-blue-500 underline" target="_blank">Instagram</a>
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Aspiring Full Stack Web Developer</h2>
        <p>
          Self-motivated and detail-oriented aspiring developer with hands-on experience in front-end and back-end web development.
          Skilled in HTML, CSS, JavaScript, and Python with growing expertise in React and Flask. Strong problem-solving abilities,
          passionate about building user-friendly applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Languages:</strong> HTML, CSS, JavaScript, Python</li>
          <li><strong>Frameworks & Libraries:</strong> React, Flask, Tailwind CSS</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Chrome DevTools, Netlify, Render</li>
          <li><strong>Concepts:</strong> Responsive Design, DOM Manipulation, RESTful APIs, OOP</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Projects</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Beauty Shop – Full Stack Salon Management App</h3>
          <p>🔗 <a href="#" className="text-blue-500 underline">Live Demo</a> | 💻 <a href="#" className="text-blue-500 underline">GitHub</a></p>
          <ul className="list-disc list-inside pl-4">
            <li>Built with React + Flask for managing salon appointments and admin analytics.</li>
            <li>Implemented booking, stylist scheduling, and a user-friendly UI.</li>
            <li>Tech Stack: React, Tailwind CSS, Flask, PostgreSQL</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Devbuy Electronics Store – E-commerce Platform</h3>
          <p>💻 <a href="#" className="text-blue-500 underline">GitHub</a></p>
          <ul className="list-disc list-inside pl-4">
            <li>Product search, filtering, sorting, and cart functionality.</li>
            <li>Used React hooks and Context API for state management.</li>
            <li>Tech Stack: React, React Router, Context API</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Habit Tracker CLI App – Python</h3>
          <p>💻 <a href="#" className="text-blue-500 underline">GitHub</a></p>
          <ul className="list-disc list-inside pl-4">
            <li>Tracks habits and progress via command line interface.</li>
            <li>Built using classes and OOP principles with SQLAlchemy + SQLite.</li>
            <li>Tech Stack: Python, SQLAlchemy, SQLite</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Moringa School – Nairobi, Kenya</strong><br />
            Software Engineering Program (Full Stack Web Development)
          </li>
          <li>
            <strong>Kabianga High School – Kericho, Kenya</strong><br />
            KCSE, Graduated: 2024
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Open to internships and entry-level developer roles.</li>
          <li>Actively building projects and contributing on GitHub.</li>
          <li>Looking to apply knowledge to real-world development tasks.</li>
        </ul>
      </section>
    </main>
  );
}
<div className="mt-8 text-center">
  <a
    href="/Elvis_Resume.pdf"
    download
    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
  >
    📄 Download PDF Version
  </a>
</div>
