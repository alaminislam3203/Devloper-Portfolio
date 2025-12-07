import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.jpg';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.jpg';
import logo7 from '../assets/logo7.jpg';
import logo8 from '../assets/logo8.jpg';
import logo9 from '../assets/logo9.jpg';
import logo10 from '../assets/logo10.jpg';
import logo11 from '../assets/logo11.jpg';
import logo12 from '../assets/logo12.jpg';
import logo13 from '../assets/logo13.jpg';
import logo14 from '../assets/logo14.jpg';

const clientLogos = [
  { src: logo1, alt: 'Company Logo 1' },
  { src: logo2, alt: 'Company Logo 2' },
  { src: logo3, alt: 'Company Logo 3' },
  { src: logo4, alt: 'Company Logo 4' },
  { src: logo5, alt: 'Company Logo 5' },
  { src: logo6, alt: 'Company Logo 6' },
  { src: logo7, alt: 'Company Logo 7' },
  { src: logo8, alt: 'Company Logo 8' },
  { src: logo9, alt: 'Company Logo 9' },
  { src: logo10, alt: 'Company Logo 10' },
  { src: logo11, alt: 'Company Logo 11' },
  { src: logo12, alt: 'Company Logo 12' },
  { src: logo13, alt: 'Company Logo 13' },
  { src: logo14, alt: 'Company Logo 14' },
];

const LOGOS_PER_VIEW = 4;
const SLIDE_INTERVAL = 3000;

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const maxIndex = Math.ceil(clientLogos.length / LOGOS_PER_VIEW);

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % maxIndex);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const sliderVariants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: '0%', opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  const startIndex = currentIndex * LOGOS_PER_VIEW;
  let currentLogos = clientLogos.slice(startIndex, startIndex + LOGOS_PER_VIEW);

  if (currentLogos.length < LOGOS_PER_VIEW) {
    const remaining = LOGOS_PER_VIEW - currentLogos.length;
    currentLogos = currentLogos.concat(clientLogos.slice(0, remaining));
  }

  return (
    <section
      id="clients"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-[#0D1528] dark:to-[#0A101C] text-gray-800 dark:text-white overflow-hidden"
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
          <FaCheckCircle className="text-3xl mx-auto mb-3 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Strategic Partners
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Companies I've Helped Build
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden py-8 border-y border-[#708090] dark:border-gray-800  ">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex justify-around items-center w-full"
            >
              {currentLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/4 max-w-[150px] h-20 flex items-center justify-center p-4 
                                               transition-all duration-300 cursor-pointer 
                                               hover:scale-[1.05]" // Subtle hover scale remains
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* --- End Logo Slider --- */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-6">
            I focus on long-term collaborations, helping these partners
            strengthen their digital presence with robust, scalable, and modern
            web solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
