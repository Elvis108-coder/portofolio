'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const rotatingTexts = [
  "I am a Full-Stack Developer.",
  "I love building web apps.",
  "I turn ideas into code.",
  "I craft responsive UIs.",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Add this line

  useEffect(() => {
    setIsMounted(true); // Prevent mismatch: ensures this only runs on client

    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 py-20 bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Left Content */}
      <div className="md:w-1/2 pl-4 md:pl-12">
        <h1 className="text-4xl font-bold mb-2">Elvis Kiprono</h1>

        {/* Only render rotating text once component is mounted */}
        {isMounted && (
          <h2 className="text-2xl font-medium text-purple-600 dark:text-purple-400 mb-4 transition-all duration-500">
            {rotatingTexts[currentText]}
          </h2>
        )}

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="mailto:yelvisrotich@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <Mail />
          </a>
          <a href="https://github.com/Elvis108-coder" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <Github />
          </a>
          <a href="https://twitter.com/elviskiprono_" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <Twitter />
          </a>
          <a href="https://instagram.com/elviskiprono_" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <Instagram />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/3">
        <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
          <Image
            src="/elvis.jpg"
            alt="Elvis Kiprono"
            width={300}
            height={300}
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
