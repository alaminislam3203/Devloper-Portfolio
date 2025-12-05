import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="skills" className="font-display bg-background-light dark:bg-background-dark">
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {["JavaScript", "React", "Next.js", "GitHub", "Tailwind CSS", "C++", "Java", "Vercel", "Firebase", "Git", "HTML5", "CSS3"].map((skill, index) => (
                            <motion.div key={index} variants={itemVariants} className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700" title={skill}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className="h-10 w-10 sm:h-12 sm:w-12">
                                    <path fill="#06B6D4" d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991" />
                                </svg>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default Skills;
