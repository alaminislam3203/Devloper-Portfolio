import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaCode,
  FaCheckCircle,
  FaExternalLinkSquareAlt,
} from 'react-icons/fa';
import { Link2Icon } from 'lucide-react';

const projects = [
  {
    id: 'warmpaws',
    title: 'WarmPaws - Pet Care in Winter',
    description:
      'WarmPaws is a responsive and interactive web application designed for pet owners to explore winter-specific pet care services, expert veterinarians, and recommended products. Users can log in, manage their profile, book appointments with veterinarians, and browse pet care products.',
    longDescription:
      'WarmPaws is a comprehensive MERN stack application focusing on full-stack functionality, including secure Firebase authentication, database design with MongoDB, and responsive design with Tailwind CSS. It highlights robust features like booking services and user profile management.',
    tech: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React.js',
      'Vite',
      'Firebase',
    ],
    embedId: '5ybftl',
    link: 'https://warmpaws-pet-care-in-win-a8d38.web.app/',
    github:
      'https://github.com/alaminislam3203/WarmPaws-Pet-Care-in-Winter.git',
  },
  {
    id: 'ecotrack',
    title: 'EcoTrack - Sustainable Living Community',
    description:
      'EcoTrack is an environmental awareness and sustainability platform that encourages users to participate in eco-friendly challenges, track their progress, and contribute to a greener planet.',
    longDescription:
      'EcoTrack is an environmental platform built with the intention of community-driven sustainable challenges. It showcases modern frontend technologies like React and Vite, focusing on performance and user engagement through interactive elements.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    embedId: 'smccnm',
    link: 'https://eco-track-client.netlify.app/',
    github: 'https://github.com/alaminislam3203/EcoTrack-Client-Web.git',
    github2: 'https://github.com/alaminislam3203/EcoTrack-Server.git',
  },
  {
    id: 'hero-apps',
    title: 'Hero Apps -Your Next-Gen App Store Experience',
    description:
      'Hero Apps is a modern SaaS landing page built with React and Tailwind CSS, designed to showcase a software-as-a-service product with a clean, responsive interface.',
    longDescription:
      'Hero Apps is a sleek and modern SaaS landing page that highlights key features, benefits, and user testimonials. It uses React for component-based architecture and Tailwind CSS for responsive styling.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Vite',
      'Netlify',
    ],
    embedId: '7g7yow',
    link: 'https://hero-apps-web.netlify.app/',
    github: 'https://github.com/alaminislam3203/Hero-Apps.git',
  },
  {
    id: 'customer-support-ticket-system',
    title: 'Customer-Support-Ticket-System',
    description:
      'A Customer Support Ticket System is a software application used to organize, track, and manage all communication between an organization or business and its customers. This system ensures that every question, problem, or request that comes from customers is not lost and is resolved in a timely manner.',
    longDescription:
      'This project focuses on building a full-stack Customer Support Ticket System using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features such as user authentication, ticket creation and management, and an intuitive user interface designed with Tailwind CSS and DaisyUI.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'React-DOM',
    ],
    embedId: 'xk3q7d',
    link: 'https://customer-support-ticket-system-web.netlify.app/',
    github:
      'https://github.com/alaminislam3203/customer-support-ticket-system.git',
  },
  {
    id: 'merxomart',
    title: 'MerxoMart - Modern E-Commerce Platform',
    description:
      'MerxoMart is a responsive and interactive e-commerce web application designed for online shoppers to explore, buy, and manage products efficiently. Users can browse products, add them to their cart, manage orders, and admins can manage products in a dashboard.',
    longDescription:
      'MerxoMart is a modern e-commerce platform built with React and Tailwind CSS, featuring a responsive design and seamless user experience.',
    tech: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React.js',
      'Vite',
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Next.js',
    ],
    embedId: 'loix6g',
    link: 'https://merxomart.vercel.app/',
    github: 'https://github.com/alaminislam3203/merxomart-client.git',
    github2: 'https://github.com/alaminislam3203/merxomart-server.git',
  },
  {
    id: 'green-earth',
    title: 'Green Earth Web - Environmental Awareness Platform',
    description:
      'Green Earth Web is a responsive and interactive web application designed to promote environmental awareness and sustainability. Users can explore eco-friendly tips, participate in green initiatives, and learn about the importance of preserving our planet.',
    longDescription:
      'Green Earth Web is a modern environmental awareness platform built with React and Tailwind CSS, featuring a responsive design and seamless user experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Netlify'],
    embedId: 'a1fnqf',
    link: 'https://alaminislam3203.github.io/Green-Earth-Web/',
    github: 'https://github.com/alaminislam3203/Green-Earth-Web.git',
  },
];

// ---------------- STREAMABLE EMBED COMPONENT ----------------
const StreamableEmbed = ({ embedId }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '0px',
        paddingBottom: '56.25%',
      }}
      className="w-full"
    >
      <iframe
        allow="fullscreen"
        allowFullScreen
        width="100%"
        height="100%"
        src={`https://streamable.com/e/${embedId}?autoplay=1&loop=1&muted=1`}
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: '0px',
          top: '0px',
        }}
        title="Project demo video"
      ></iframe>
    </div>
  );
};

// ---------------- PROJECT MODAL/DETAILS COMPONENT (DARK MODE ADDED) ----------------
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            <FaTimes size={20} />
          </button>

          {/* Media Section */}
          <div className="relative overflow-hidden rounded-t-xl">
            <StreamableEmbed embedId={project.embedId} />
          </div>

          <div className="p-8 lg:p-10 text-gray-800 dark:text-gray-100">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-2 text-slate-800 dark:text-white">
              {project.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-6 mt-6 border-gray-200 dark:border-gray-700">
              {/* Column 1: Long Description */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  Detailed Analysis
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.longDescription ||
                    'No detailed long description available for this project.'}
                </p>
                <h3 className="text-xl font-bold mt-6 mb-3 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" size={18} />{' '}
                  Key Highlights
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 list-inside space-y-1">
                  <li>Full MERN Stack implementation.</li>
                  <li>Responsive UI with Tailwind CSS.</li>
                  <li>Secure Authentication.</li>
                </ul>
              </div>

              {/* Column 2: Tech Stack & Links */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Links
                  </h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-bold text-green-600 hover:text-green-700 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                  >
                    <FaGithub /> View Code
                  </a>
                  {project.github2 && (
                    <a
                      href={project.github2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                    >
                      <FaGithub /> Server Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ---------------- PROJECT CARD COMPONENT (Slider Adapted) ----------------
const ProjectCard = ({ project, index, isFocused, offset, onClick }) => {
  const focusedStyle = {
    scale: 1,
    opacity: 1,
    filter: 'brightness(100%)',
    zIndex: 10,
    x: 0,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    pointerEvents: 'auto',
  };

  const sideStyle = {
    scale: 0.85,
    opacity: 0.3,
    filter: 'brightness(100%)',
    zIndex: 5,
    x: offset < 0 ? -300 : 300,
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    pointerEvents: 'auto',
  };

  return (
    <motion.div
      key={index}
      initial={focusedStyle}
      animate={isFocused ? focusedStyle : sideStyle}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={`absolute w-[90%] max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl overflow-hidden transform transition-all duration-300 mx-auto
                  ${
                    isFocused
                      ? 'bg-white dark:bg-gray-800 border-4 border-blue-400 dark:border-blue-600'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-700'
                  }
                  border group`}
    >
      <div className="relative overflow-hidden">
        <StreamableEmbed embedId={project.embedId} />
        {/* Overlay for Click Indication */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none flex items-center justify-center"></div>
      </div>

      <div className="p-6 text-gray-800 dark:text-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-2xl text-slate-800 dark:text-white">
            {project.title}
          </h3>

          <div className="flex space-x-3 text-black dark:text-white transition-colors">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            {project.github2 && (
              <a
                href={project.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center items-center text-white dark:text-blue-400 font-semibold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-blue-600 border-[8px] border-blue-600 rounded-lg dark:bg-blue-900 dark:border-blue-900 dark:text-white flex items-center gap-2 transition-colors"
          >
            View Details <FaExternalLinkSquareAlt size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ---------------- MAIN PROJECTS SECTION (Carousel Logic) ----------------
const Projects = () => {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null); // State for modal
  const total = projects.length;

  const handleNext = () => {
    setCurrentFocus(prev => (prev === total - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentFocus(prev => (prev === 0 ? total - 1 : prev - 1));
  };

  // Custom click handler for cards
  const handleCardClick = (project, index) => {
    if (index === currentFocus) {
      // If the focused card is clicked, open the modal
      setSelectedProject(project);
    } else {
      // If a side card is clicked, change focus
      setCurrentFocus(index);
    }
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] text-gray-800 dark:text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Click the center card to view details, or click the side cards to
            bring them into focus.
          </p>
        </motion.div>

        {/* --- Carousel Container --- */}
        <div className="relative flex justify-center items-center h-[600px] lg:h-[700px] mx-auto">
          {projects.map((project, index) => {
            let offset = index - currentFocus;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isFocused = index === currentFocus;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isFocused={isFocused}
                offset={offset}
                // Use the custom click handler
                onClick={() => handleCardClick(project, index)}
              />
            );
          })}

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 lg:left-[10px] z-20 p-4 rounded-full bg-blue-600 dark:bg-blue-800 text-white shadow-xl hover:bg-blue-700 dark:hover:bg-blue-900 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-0 lg:right-[10px] z-20 p-4 rounded-full bg-blue-600 dark:bg-blue-800 text-white shadow-xl hover:bg-blue-700 dark:hover:bg-blue-900 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight size={20} />
          </motion.button>
        </div>
        {/* End Carousel Container */}
      </div>

      {/* --- Project Details Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
