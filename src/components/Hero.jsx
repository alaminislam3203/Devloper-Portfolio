import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import gsap from 'gsap';
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';

const logos = [
  {
    icon: FaHtml5,
    color: 'text-orange-600',
    size: 'text-3xl',
    position: { top: 10, left: 10 },
  },
  {
    icon: FaCss3Alt,
    color: 'text-blue-600',
    size: 'text-4xl',
    position: { top: 50, right: 0 },
  },
  {
    icon: FaJs,
    color: 'text-yellow-500',
    size: 'text-3xl',
    position: { bottom: 0, left: 30 },
  },
];

// Profile Card Component
const ProfileCard = ({ imageSrc, name, isMobileHidden, imageRef }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const logoRefs = useRef([]);

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

  // GSAP animation for logos
  useEffect(() => {
    logoRefs.current.forEach((el, index) => {
      gsap.to(el, {
        rotation: 360,
        x: index % 2 === 0 ? 30 : -30,
        y: index % 3 === 1 ? 30 : -30,
        duration: 8 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5,
      });
    });
  }, []);

  return (
    <motion.div
      className={`relative w-full max-w-sm h-[25rem] cursor-pointer ${isMobileHidden} p-4`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        {/* Profile Image - Made Fully Rounded */}
        <img
          ref={imageRef}
          alt={name}
          src={imageSrc}
          className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-offset-4 ring-blue-600 dark:ring-blue-400 ring-offset-white dark:ring-offset-gray-900"
        />

        {/* Floating Animated Logos */}
        {logos.map((logo, index) => (
          <div
            key={index}
            ref={el => (logoRefs.current[index] = el)}
            className={`absolute z-10 p-3 rounded-full bg-white dark:bg-[#1A202C] shadow-xl ${logo.color}`}
            style={{
              top: `${logo.position.top}%`,
              left:
                logo.position.left !== undefined
                  ? `${logo.position.left}%`
                  : 'auto',
              right:
                logo.position.right !== undefined
                  ? `${logo.position.right}%`
                  : 'auto',
              bottom:
                logo.position.bottom !== undefined
                  ? `${logo.position.bottom}%`
                  : 'auto',
            }}
          >
            <logo.icon className={logo.size} />
          </div>
        ))}

        {/* Stylish Gradient Ring Effect */}
        <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-70 animate-pulse-slow pointer-events-none"></div>
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

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 15, // Reduced floating motion
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  useEffect(() => {
    if (roleText.isComplete) {
      const timeout = setTimeout(() => {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [roleText.isComplete]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

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
      className="bg-white dark:bg-[#0B1120] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-0 px-4 md:gap-20 py-16 lg:py-28 pt-32"
    >
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

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
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
