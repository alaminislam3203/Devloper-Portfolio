'use client';

import React from 'react';
import {
  FaUsers,
  FaLightbulb,
  FaClock,
  FaTasks,
  FaBrain,
  FaPencilAlt,
  FaSyncAlt,
  FaCommentDots,
  FaBook,
} from 'react-icons/fa';

const skills = [
  { name: 'Communication', icon: <FaCommentDots /> },
  { name: 'Teamwork', icon: <FaUsers /> },
  { name: 'Problem Solving', icon: <FaBrain /> },
  { name: 'Time Management', icon: <FaClock /> },
  { name: 'Critical Thinking', icon: <FaLightbulb /> },
  { name: 'Adaptability', icon: <FaSyncAlt /> },
  { name: 'Creativity', icon: <FaPencilAlt /> },
  { name: 'Multitasking', icon: <FaTasks /> },
  { name: 'Client Communication', icon: <FaCommentDots /> },
  { name: 'Active Learning', icon: <FaBook /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-[#0B1120] text-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Soft Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-blue-500/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 group relative"
            >
              <div className="text-5xl mb-4 text-indigo-500 group-hover:text-pink-500 transition-colors duration-300">
                {skill.icon}
              </div>
              <div className="text-center text-gray-900 font-semibold text-lg dark:text-white">
                {skill.name}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl  blur-2xl group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
