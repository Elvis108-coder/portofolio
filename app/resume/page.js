'use client';

import Link from 'next/link';

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Resume</h1>

      <p className="text-gray-700 dark:text-gray-300">
        Click below to view or download my full resume in PDF format.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="/projects/Elvis_Kiprono_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          📄 View Resume
        </Link>

        <a
          href="/projects/Elvis_Kiprono_CV.pdf"
          download="Elvis_Kiprono_CV.pdf"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </main>
  );
}
