import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';

// Profile Card Component
const ProfileCard = ({ imageSrc, name, role, isMobileHidden, imageRef }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`w-full max-w-sm h-[20rem] cursor-pointer ${isMobileHidden}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <img
          ref={imageRef}
          alt={name}
          src={imageSrc}
          className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-offset-4 ring-blue-600 dark:ring-blue-400"
        />
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const imageRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  const greeting = useTypewriter("Hello, I'm AL-AMIN", 80, 300);
  const roles = [
    'Full Stack Developer',
    'Full-Stack Engineer',
    'Problem Solver',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roleText = useTypewriter(roles[currentRoleIndex], 100, 2000);

  // Floating animation
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  // Role Loop
  useEffect(() => {
    if (roleText.isComplete) {
      const timeout = setTimeout(() => {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [roleText.isComplete]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main
      id="home"
      className="bg-white dark:bg-[#0B1120] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-0 md:gap-20 py-16 lg:py-28 pt-32"
    >
      {/* Left Text Section */}
      <motion.div
        className="text-gray-900 dark:text-gray-100 order-2 lg:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          {greeting.displayedText}
          {showCursor && !greeting.isComplete && (
            <span className="text-blue-600">|</span>
          )}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 min-h-[2.5rem]"
        >
          {roleText.displayedText}
          {showCursor && <span className="text-blue-600">|</span>}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl text-justify mb-10"
        >
          A dedicated Full Stack Web Developer specializing in building clean,
          fast, and responsive digital experiences. I focus on modern
          technologies, strong UI/UX, and solving real-world problems through
          efficient, scalable code.
        </motion.p>

        {/* Social Icons + Hire Me */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] rounded-full text-white hover:bg-blue-700 shadow-lg transition"
              href="https://in.linkedin.com/in/alaminislam3203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-xl" />
            </a>

            <a
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full text-white hover:bg-gray-700 shadow-lg transition"
              href="https://github.com/alaminislam3203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              className="w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-full text-white hover:bg-[#1DA851] shadow-lg transition"
              href="https://wa.me/+8801313334279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          {/* Hire Me Button */}
          <a
            href="mailto:alaminislam3203@gmail.com?subject=Job Inquiry&body=Hello%20Al-Amin,"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-xl hover:scale-105 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="h-5 w-5" />
            HIRE ME
          </a>
        </motion.div>
      </motion.div>

      {/* Right Profile Card */}
      <div className="flex items-center justify-center order-1 lg:order-2">
        <ProfileCard
          imageSrc="https://i.ibb.co.com/tPLBqHkN/alamin-profile.jpg"
          name="AL-AMIN ISLAM"
          role="Full Stack Developer"
          isMobileHidden="hidden md:block"
          imageRef={imageRef}
        />
      </div>
    </main>
  );
};

export default Hero;
