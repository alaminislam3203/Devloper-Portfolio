import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import {
  FaCode,
  FaProjectDiagram,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaGraduationCap,
  FaUniversity,
  FaArrowRight,
  FaHourglassHalf,
  FaCheckCircle,
} from 'react-icons/fa';
import DeveloperBio from './DeveloperBio';

// =======================================================
// --- Custom Counter Component for Milestones Animation ---
// =======================================================
const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  // Convert to number, removing the '+' sign
  const endNumber = parseFloat(endValue.replace('+', ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const animateCount = timestamp => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            // Ensure smooth counting and integer values
            const currentCount = Math.floor(percentage * endNumber);

            setCount(currentCount);

            if (progress < duration) {
              requestAnimationFrame(animateCount);
            } else {
              // Set the final value after animation completion
              setCount(endNumber);
            }
          };
          requestAnimationFrame(animateCount);
          observer.unobserve(counterRef.current); // Stop observing after animation starts
        }
      },
      { threshold: 0.7 } // Trigger when 70% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        // Cleanup observer on component unmount
        observer.unobserve(counterRef.current);
      }
    };
  }, [endNumber, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {endValue.includes('+') ? '+' : ''}
    </span>
  );
};
// =======================================================
// --- End Counter Component ---
// =======================================================

const About = () => {
  // Milestones Data
  const newStats = [
    {
      label: 'Experience (Hands-on)',
      value: '2+',
      unit: 'Years',
      icon: FaCode,
    },
    {
      label: 'Total Projects',
      value: '70+',
      unit: 'Projects',
      icon: FaProjectDiagram,
    },
    {
      label: 'Working Hours',
      value: '5000+',
      unit: 'Hours Coded',
      icon: FaHourglassHalf,
    },
    {
      label: 'Clients Served',
      value: '64+',
      unit: 'Happy Clients',
      icon: FaCheckCircle,
    },
  ];

  // What I Do Data
  const journey = [
    {
      title: 'Full-Stack Development (MERN)',
      description:
        'Expertise in building complete web applications using MongoDB, Express.js, React.js, and Node.js with seamless front-end to back-end integration.',
      icon: FaLayerGroup,
      color: 'blue',
    },
    {
      title: 'Backend Architecture & API',
      description:
        'Proficient in designing RESTful APIs, database schemas, authentication systems, and server-side logic using Node.js and Express.js.',
      icon: FaServer,
      color: 'purple',
    },
    {
      title: 'Modern UI Development',
      description:
        'Creating responsive, interactive user interfaces with React.js, Next.js, and modern CSS frameworks while ensuring optimal performance.',
      icon: FaLaptopCode,
      color: 'green',
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] text-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A Full Stack developer focused on delivering scalable architecture
            and exceptional user interfaces.
          </p>
        </motion.div>

        {/* --- Developer Bio Section --- */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <DeveloperBio />
          </motion.div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-20" />

        {/* --- My Professional Milestones Section (with Counter Animation) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            My Professional Milestones
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {newStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
            >
              {/* Background Blur Decoration */}
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500 dark:bg-purple-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

              <div className="flex flex-col items-start">
                {/* Icon Circle */}
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-3 shadow-lg group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                  <stat.icon className="text-white text-xl" />
                </div>

                {/* Value - Replaced with Counter component */}
                <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1 leading-none">
                  <Counter endValue={stat.value} duration={2000} />
                </p>

                {/* Unit */}
                <p className="text-sm text-blue-500 dark:text-blue-400 font-bold mb-2">
                  {stat.unit}
                </p>

                {/* Label */}
                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <hr className="border-gray-200 dark:border-gray-700 mb-20" />

        {/* What I Do Section (Services/Expertise) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            What I Bring to the Table
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {journey.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 border-t-4 border-blue-500 dark:border-blue-400"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 text-white text-2xl bg-gradient-to-r ${
                  colorClasses[item.color]
                }`}
              >
                <item.icon />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Learning
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
            className="max-w-4xl mx-auto relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 border-l-4 border-purple-500 dark:border-purple-400"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-purple-600 rounded-full shadow-lg">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-2">
                  Diploma in Engineering Computer Science & Technology (C.S.T)
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  <FaUniversity className="inline mr-2 text-blue-500" />
                  Rangpur Ideal Institute Of Technology, Rangpur | 2022 - 2026
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  Comprehensive study of computer science fundamentals including
                  data structures, algorithms, software engineering, database
                  systems, and web technologies. Developed strong
                  problem-solving skills and practical experience through
                  various academic and personal projects.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Ready to start your next project with a Full Stack expert?
          </p>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 20px rgba(236, 72, 153, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold rounded-full shadow-xl transition-all duration-300 text-lg uppercase tracking-wider"
          >
            <span>Let's Connect Now</span>
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
