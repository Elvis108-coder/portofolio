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
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = rotatingTexts[currentTextIndex];
    let typeSpeed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 py-20 bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Left Content */}
      <div className="md:w-1/2 pl-4 md:pl-12">
        <h1 className="text-6xl md:text-7xl font-bold mb-4">Elvis Kiprono</h1>

        {/* Typewriter Text */}
        <h2 className="text-3xl md:text-4xl font-medium text-purple-600 dark:text-purple-400 mb-6 min-h-[3rem] whitespace-nowrap transition-all duration-500">
          {displayedText}
          <span className="border-r-2 border-purple-600 animate-pulse ml-1" />
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="mailto:yelvisrotich@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/Elvis108-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/elviskiprono_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com/elviskiprono_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
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
