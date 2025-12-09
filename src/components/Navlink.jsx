import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaTools,
  FaEnvelope,
  FaProjectDiagram,
} from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home', icon: <FaHome />, id: 1 },
  { name: 'Skills', href: '#skills', icon: <FaTools />, id: 2 },
  { name: 'About', href: '#about', icon: <FaUser />, id: 3 },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram />, id: 4 },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope />, id: 5 },
];

export default function Navlink() {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-[#0B1120] border-t border-gray-200 dark:border-gray-800 shadow-xl py-2 md:hidden">
      <div className="flex justify-around items-center h-full">
        {navLinks.map(link => {
          const isActive = activeLink === link.href;

          return (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`flex flex-col items-center p-1 transition-colors duration-300 ease-in-out ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <span
                className={`text-xl p-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {link.icon}
              </span>
              <span
                className={`text-xs mt-1 transition-colors duration-300 ${
                  isActive
                    ? 'font-semibold text-blue-600 dark:text-blue-400'
                    : ''
                }`}
              >
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
