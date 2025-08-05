'use client'

import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-4 min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Hi, I'm Elvis 👋</h1>
          <p className="text-lg leading-relaxed">
            I'm a passionate developer focused on building immersive and modern web experiences.
          </p>

          {/* You can add more sections here: */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </section>
      </main>
    </>
  )
}
