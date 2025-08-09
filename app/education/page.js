'use client';

export default function EducationPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Education</h1>

      {/* University of Nairobi */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold">University of Nairobi – Nairobi, Kenya</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Bachelor’s Degree in Interior Design (Ongoing)
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">2024 – Present</p>
      </div>

      {/* Moringa School */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold">Moringa School – Nairobi, Kenya</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Software Engineering Program (Full Stack Web Development)
        </p>
      </div>

      {/* Kabianga High School */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold">Kabianga High School – Kericho, Kenya</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Kenya Certificate of Secondary Education (KCSE)
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">2020 – 2023</p>
      </div>
    </main>
  );
}
