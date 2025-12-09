import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

// React Icons
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'About', href: '#about', icon: <FaUser /> },
  { name: 'Skills', href: '#skills', icon: <FaTools /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center gap-3 text-gray-900 dark:text-white"
        >
          <img
            src="https://i.ibb.co.com/tPLBqHkN/alamin-profile.jpg"
            alt="AL-AMIN ISLAM Logo"
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg md:text-xl tracking-wide">
              /AL-AMIN
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-300 font-normal">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300 font-medium">
          {navLinks.map(link => (
            <li
              key={link.name}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
            >
              {link.icon}
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + CV Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <a
            href="/Alamin Islam_Resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 text-sm active:scale-[0.97]"
          >
            <FaDownload />
            <span className="hidden sm:inline">Download CV</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
