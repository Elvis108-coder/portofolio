'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const languages = [
  { name: 'HTML', icon: '/skills/html5.svg', bgColor: 'bg-red-500' },
  { name: 'CSS', icon: '/skills/css.svg', bgColor: 'bg-blue-500' },
  { name: 'JavaScript', icon: '/skills/javascript.svg', bgColor: 'bg-yellow-400' },
  { name: 'Python', icon: '/skills/python.svg', bgColor: 'bg-green-600' },
];

const frameworks = [
  { name: 'React', icon: '/skills/react.svg', bgColor: 'bg-cyan-500' },
  { name: 'Flask', icon: '/skills/flask.svg', bgColor: 'bg-gray-700' },
  { name: 'Tailwind CSS', icon: '/skills/tailwindcss.svg', bgColor: 'bg-sky-400' },
];

const tools = [
  { name: 'Git', icon: '/skills/git.svg', bgColor: 'bg-orange-600' },
  { name: 'GitHub', icon: '/skills/github.svg', bgColor: 'bg-black' },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    className={`flex flex-col items-center justify-center rounded-lg p-4 text-white shadow-md ${skill.bgColor}`}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
      <Image src={skill.icon} alt={skill.name} width={40} height={40} />
    </div>
    <p className="mt-2 font-semibold">{skill.name}</p>
  </motion.div>
);

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {languages.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {frameworks.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {tools.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
