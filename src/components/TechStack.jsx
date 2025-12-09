'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StackIcon from 'tech-stack-icons';

const TECHS = [
  { name: 'React', icon: 'react', cat: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', cat: 'frontend' },
  { name: 'Redux', icon: 'redux', cat: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', cat: 'frontend' },

  { name: 'MongoDB', icon: 'mongodb', cat: 'backend' },
  { name: 'Express.js', icon: 'expressjs', cat: 'backend' },
  { name: 'Node.js', icon: 'nodejs', cat: 'backend' },

  { name: 'Netlify', icon: 'netlify2', cat: 'devops' },
  { name: 'Vercel', icon: 'vercel', cat: 'devops' },
  { name: 'Firebase', icon: 'firebase', cat: 'devops' },

  { name: 'Git', icon: 'git', cat: 'tools' },
  { name: 'GitHub', icon: 'github', cat: 'tools' },
  { name: 'Postman', icon: 'postman', cat: 'tools' },
  { name: 'Figma', icon: 'figma', cat: 'tools' },
  { name: 'VSCode', icon: 'vscode', cat: 'tools' },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'Deployment' },
  { id: 'tools', label: 'Tools' },
];

export default function TechStack() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return TECHS;
    return TECHS.filter(t => t.cat === active);
  }, [active]);

  return (
    <section id="techstack" className="py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          TECHNOLOGY STACK
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-14 text-lg">
          Core tools I use to build scalable full-stack applications.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === c.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                  : 'bg-white/70 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/20'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <AnimatePresence>
            {filtered.map(tech => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.12, rotateX: 8, rotateY: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="group relative flex flex-col items-center justify-center h-32 w-32 mx-auto
                           rounded-3xl bg-white dark:bg-blue-500/20
                           border border-gray-200 dark:border-white/10 
                           hover:border-blue-500 shadow-lg hover:shadow-[0_0_35px_#3b82f6]/40 
                           transition-all"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-blue-500/20 blur-2xl"></div>

                {/* Icon */}
                <StackIcon
                  name={tech.icon}
                  className="relative z-10 w-16 h-16"
                />

                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-10 opacity-0 group-hover:opacity-100 transition text-sm text-white bg-black/80 px-3 py-1 rounded">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
