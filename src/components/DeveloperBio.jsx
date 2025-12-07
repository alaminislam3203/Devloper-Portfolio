import React from 'react';
import {
  FaUser,
  FaClipboardCheck,
  FaRocket,
  FaHandshake,
} from 'react-icons/fa';
const DeveloperBio = () => (
  <div className="relative p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-4 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
      <FaUser className="text-3xl text-blue-600 dark:text-blue-400" />
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Developer Bio & Philosophy
      </h3>
    </div>

    {/* --- Block 1: Focus & Commitment --- */}
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 pt-1">
        <FaClipboardCheck className="text-2xl text-purple-600 dark:text-purple-400" />
      </div>
      <div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a passionate **Full Stack Web Developer** dedicated to creating
          clean, fast, and user-centric digital experiences. I specialize in
          delivering error-free, responsive, and visually appealing websites
          that provide real value. My work is driven by a deep commitment to
          **continuous learning, problem-solving, and writing clean and
          maintainable code**.
        </p>
      </div>
    </div>

    {/* --- Block 2: Experience & Quality --- */}
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 pt-1">
        <FaRocket className="text-2xl text-green-600 dark:text-green-400" />
      </div>
      <div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Over the years, I have built hundreds of websites, from small business
          portfolios to complex systems. I pride myself on delivering
          **high-quality work, clear communication, and a smooth development
          process** from start to finish. I actively explore new tools,
          frameworks, and best practices to stay up-to-date.
        </p>
        <p className="mt-3 text-lg  text-gray-800 dark:text-gray-200">
          My goal is simple: To create functional, fast, visually appealing, and
          purposefully designed products.
        </p>
      </div>
    </div>

    {/* --- Block 3: Collaboration & CTA --- */}
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 pt-1">
        <FaHandshake className="text-2xl text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I love solving real-world problems, collaborating on meaningful
          projects, and helping businesses strengthen their digital presence.{' '}
          <br />
          <span className=" dark:text-gray-200">
            If you are interested in modern front-end technologies, WordPress
            development, or UI/UX improvements - feel free to connect or explore
            my repository!
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default DeveloperBio;
