'use client';

import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>

      {/* Contact Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('This form does not send emails yet.');
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Icons */}
      <div className="mt-10 flex space-x-6">
        <a
          href="mailto:yelvisrotich@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/Elvis108-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/elviskiprono_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <Twitter />
        </a>
        <a
          href="https://instagram.com/elviskiprono_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <Instagram />
        </a>
      </div>
    </main>
  );
}
