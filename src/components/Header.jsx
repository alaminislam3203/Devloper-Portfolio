import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-signature font-bold text-gray-900 dark:text-white"
                >
                    Anik Samadder
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300 font-medium">
                    <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>

                {/* Theme + Mobile Button */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle />

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-gray-800 dark:text-white"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden bg-white dark:bg-[#0B1120] border-t border-gray-200 dark:border-gray-800"
                >
                    <ul className="flex flex-col items-center py-6 space-y-6 text-gray-700 dark:text-gray-300 font-medium">
                        <li onClick={() => setOpen(false)}><a href="#home">Home</a></li>
                        <li onClick={() => setOpen(false)}><a href="#about">About</a></li>
                        <li onClick={() => setOpen(false)}><a href="#skills">Skills</a></li>
                        <li onClick={() => setOpen(false)}><a href="#projects">Projects</a></li>
                        <li onClick={() => setOpen(false)}><a href="#contact">Contact</a></li>
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
