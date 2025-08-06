'use client';

import { useRef } from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_llmes5j',           
      'template_6rznl8l',          
      form.current,
      'iR9p1HGmq_r5LuG2K'          
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('❌ Email send error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="from_name" className="block font-medium mb-1">
            Name
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>

        <div>
          <label htmlFor="reply_to" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="reply_to"
            name="reply_to"
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
            name="message"
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
