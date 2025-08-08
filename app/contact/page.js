'use client';

import { useRef } from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_llmes5j',
        'template_6rznl8l',
        form.current,
        'iR9p1HGmq_r5LuG2K'
      )
      .then(() => {
        toast.success('Message sent successfully! 🎉');
        form.current.reset();
      })
      .catch((error) => {
        console.error('❌ Email send error:', error);
        toast.error('Something went wrong. Please try again.');
      });
  };

  const formItemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10 min-h-screen flex flex-col justify-center">
      {/* Toast */}
      <Toaster position="top-right" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center"
      >
        Contact Me
      </motion.h1>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={formItemAnimation}
            initial="hidden"
            animate="visible"
          >
            {i === 0 && (
              <>
                <label htmlFor="from_name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </>
            )}
            {i === 1 && (
              <>
                <label htmlFor="reply_to" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </>
            )}
            {i === 2 && (
              <>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </>
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          custom={3}
          variants={formItemAnimation}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Send Message
        </motion.button>
      </form>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center items-center gap-8 mt-8"
      >
        {[ 
          { href: 'mailto:yelvisrotich@gmail.com', icon: <Mail />, label: 'Email' },
          { href: 'https://github.com/Elvis108-coder', icon: <Github />, label: 'GitHub' },
          { href: 'https://twitter.com/elviskiprono_', icon: <Twitter />, label: 'Twitter' },
          { href: 'https://instagram.com/elviskiprono_', icon: <Instagram />, label: 'Instagram' },
        ].map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </main>
  );
}
