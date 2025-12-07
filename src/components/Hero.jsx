import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';

// React Icons for the buttons and social links
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import useTypewriter from '../hooks/useTypewriter';

import img from '../assets/alamin_profile.jpg';

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

  const cardBaseClasses = `w-full max-w-sm h-[20rem] cursor-pointer ${isMobileHidden}`;

  return (
    <motion.div
      className={cardBaseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        // Framer Motion Animation
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <img
          ref={imageRef}
          alt="Profile of AL-AMIN ISLAM"
          src={imageSrc}
          className="w-full h-full object-cover 
                                        rounded-xl shadow-2xl ring-2 ring-offset-4 
                                        ring-blue-600 dark:ring-blue-400"
        />
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const imageRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  const greeting = useTypewriter("Hello,I'm AL-AMIN", 80, 300);
  const roles = [
    'Full Stack Developer',
    'Full-Stack Engineer',
    'Problem Solver',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roleText = useTypewriter(roles[currentRoleIndex], 100, 2000);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
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
  }, [roleText.isComplete, roles.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main
      id="home"
      className=" min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-12 lg:py-20 pt-32 lg:pt-40"
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
          {!greeting.isComplete && showCursor && (
            <span className="animate-pulse text-blue-600">|</span>
          )}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 min-h-[2.5rem]"
        >
          {roleText.displayedText}
          {showCursor && <span className="animate-pulse text-blue-600">|</span>}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl text-justify mb-10"
        >
          A dedicated Full Stack Web Developer specializing in creating clean,
          fast, and highly responsive digital experiences. My expertise lies in
          modern technologies, delivering visually appealing websites with
          high-quality, maintainable code. My passion is solving real-world
          problems and helping businesses strengthen their digital presence.
        </motion.p>

        {/* --- Social Icons and HIRE ME Button Section --- */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          {/* Social Icons (LinkedIn, GitHub, and new WhatsApp) */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a
              className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] rounded-full text-white hover:bg-blue-700 transition-colors shadow-lg"
              href="https://in.linkedin.com/in/alaminislam3203"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            {/* GitHub */}
            <a
              className="w-12 h-12 flex items-center justify-center bg-gray-800 dark:bg-gray-900 rounded-full text-white hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors shadow-lg"
              href="https://github.com/alaminislam3203"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            {/* WhatsApp (New) */}
            <a
              className="w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-full text-white hover:bg-[#1DA851] transition-colors shadow-lg"
              href="https://wa.me/+8801313334279"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          {/* HIRE ME Button (Updated) */}
          <a
            href="mailto:alaminislam3203@gmail.com?subject=Job%20Offer%20or%20Project%20Inquiry&body=Hello%20Al-Amin,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20or%20opportunity%20with%20you.%0A%0A[Your%20Name%20or%20Company]"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="h-5 w-5" />
            HIRE ME
          </a>
        </motion.div>
        {/* --- End Social Icons and HIRE ME Button Section --- */}
      </motion.div>

      <div className="flex items-center justify-center order-1 lg:order-2">
        <ProfileCard
          imageSrc={img}
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
