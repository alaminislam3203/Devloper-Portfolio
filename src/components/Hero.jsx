import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import useTypewriter from '../hooks/useTypewriter';

import heroImage from '../assets/heroimg.png';
import img from '../assets/hero.png';

const Hero = () => {
    const imageRef = useRef(null);
    const [showCursor, setShowCursor] = useState(true);

    // Typewriter effects for different text elements
    const greeting = useTypewriter("Hello,I'm Anik", 80, 300);
    const roles = ["MERN Stack Developer", "Full-Stack Engineer", "Problem Solver"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const roleText = useTypewriter(roles[currentRoleIndex], 100, 2000);

    useEffect(() => {
        gsap.to(imageRef.current, {
            y: 20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    // Cycle through roles
    useEffect(() => {
        if (roleText.isComplete) {
            const timeout = setTimeout(() => {
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [roleText.isComplete]);

    // Blinking cursor effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <main id="home" className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-12 lg:py-20 pt-32 lg:pt-40">
            <motion.div
                className="text-gray-900 dark:text-gray-100"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
                    {greeting.displayedText}
                    {!greeting.isComplete && showCursor && <span className="animate-pulse">|</span>}
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 min-h-[2.5rem]">
                    {roleText.displayedText}
                    {showCursor && <span className="animate-pulse">|</span>}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                    I'm a passionate MERN Stack developer with experience building full-stack web applications using
                    MongoDB, Express.js, React.js, and Node.js. I specialize in creating scalable, secure applications
                    from database design to responsive front-end interfaces. I'm a self-motivated, disciplined and hardworking
                    individual who is always ready to learn new technologies and work in a team.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex items-center space-x-4">

                        <a className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                            href="https://www.linkedin.com/in/anik-samadder-as/">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a className="w-12 h-12 flex items-center justify-center bg-gray-800 dark:bg-gray-900 rounded-full text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                            href="https://github.com/anik-33">
                            <i className="fab fa-github text-xl"></i>
                        </a>

                    </div>
                    <a
                        className="inline-flex items-center gap-3 px-8 py-3 bg-white dark:bg-gray-100 text-gray-900 dark:text-black font-medium rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 dark:focus:ring-offset-background-dark focus:ring-white transition-transform transform hover:scale-105"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm2 1a1 1 0 011-1h6a1 1 0 011 1v1H6V5z"
                                fillRule="evenodd"></path>
                        </svg>
                        SEE MY RESUME
                    </a>
                </motion.div>
            </motion.div>
            <div className="flex items-center justify-center">
                <img
                    ref={imageRef}
                    alt="Illustration of a developer working at a desk with multiple monitors"
                    className="w-full  max-w-lg h-auto"
                    src={img}
                />
            </div>
        </main>
    );
};

export default Hero;
