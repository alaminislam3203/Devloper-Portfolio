import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StackIcon from "tech-stack-icons";


const TECHS = [
    // Frontend
    { name: "React", icon: "react", cat: "frontend" },
    { name: "Tailwind CSS", icon: "tailwindcss", cat: "frontend" },
    { name: "TypeScript", icon: "typescript", cat: "frontend" },
    { name: "Redux", icon: "redux", cat: "frontend" },
    { name: "Next.js", icon: "nextjs", cat: "frontend" },
    { name: "Next.js2", icon: "nextjs2", cat: "frontend" },

    // Backend (MERN)
    { name: "MongoDB", icon: "mongodb", cat: "backend" },
    { name: "Express.js", icon: "expressjs", cat: "backend" },
    { name: "Node.js", icon: "nodejs", cat: "backend" },


    // DevOps
    { name: "Netlify", icon: "netlify2", cat: "devops" },
    { name: "Vercel", icon: "vercel", cat: "devops" },

    // Tools
    { name: "Git", icon: "git", cat: "tools" },
    { name: "GitHub", icon: "github", cat: "tools" },
    { name: "Postman", icon: "postman", cat: "tools" },
    { name: "Figma", icon: "figma", cat: "tools" },
];

const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "devops", label: "DevOps" },
    { id: "tools", label: "Tools" },
];

export default function TechStack() {
    const [active, setActive] = useState("all");

    const filtered = useMemo(() => {
        if (active === "all") return TECHS;
        return TECHS.filter((t) => t.cat === active);
    }, [active]);

    return (
        <section id="skills" className="py-24 bg-slate-100 dark:bg-[#1e293b]">
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
                    Tech Stack
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
                    Core tools I use to build scalable full-stack MERN applications.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setActive(c.id)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all 
                ${active === c.id
                                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                                    : "bg-white/60 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10"
                                }`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                    <AnimatePresence>
                        {filtered.map((tech) => (
                            <motion.div
                                key={tech.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ scale: 1.1, rotateX: 8, rotateY: -8 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 18,
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="group relative flex items-center justify-center h-24 w-24 rounded-2xl 
                           bg-white dark:bg-[#2d3748] border border-gray-200 dark:border-white/10 hover:border-blue-500
                           shadow-md hover:shadow-[0_0_25px_#3b82f6] transition-all"
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                                bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl"></div>

                                {/* JSX Stack Icon */}
                                <StackIcon
                                    name={tech.icon}
                                    className="relative z-10 w-12 h-12"
                                />

                                {/* Tooltip */}
                                <div className="pointer-events-none absolute -top-9 opacity-0 group-hover:opacity-100 transition 
                                text-xs text-white bg-black/80 px-3 py-1 rounded whitespace-nowrap">
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
