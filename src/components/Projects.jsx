import React from 'react';
import { motion } from 'framer-motion';

// React Icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'WarmPaws - Pet Care in Winter',
    description:
      'WarmPaws is a responsive and interactive web application designed for pet owners to explore winter-specific pet care services, expert veterinarians, and recommended products. Users can log in, manage their profile, book appointments with veterinarians, and browse pet care products.',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Javascript',
      'Tailwind CSS',
    ],
    embedId: '5ybftl',
    link: 'https://warmpaws-pet-care-in-win-a8d38.web.app/',
    github:
      'https://github.com/alaminislam3203/WarmPaws-Pet-Care-in-Winter.git',
  },
  {
    title: 'EcoTrack - Sustainable Living Community',
    description:
      'EcoTrack is an environmental awareness and sustainability platform that encourages users to participate in eco-friendly challenges, track their progress, and contribute to a greener planet.',
    tech: ['JavaScript', 'React.js', 'Vite', 'Tailwind CSS', 'Firebase'],
    embedId: 'smccnm',
    link: 'https://eco-track-client.netlify.app/',
    github: 'https://github.com/alaminislam3203/EcoTrack-Client-Web.git',
    github2: 'https://github.com/alaminislam3203/EcoTrack-Server.git',
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

// ---------------- PROJECT CARD COMPONENT ----------------
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
  >
    <div className="relative overflow-hidden">
      <StreamableEmbed embedId={project.embedId} />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>

          {/* Optional Second GitHub */}
          {project.github2 && (
            <a
              href={project.github2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}

          {/* Live Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ---------------- MAIN PROJECTS SECTION ----------------
const Projects = () => (
  <section
    id="projects"
    className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] text-gray-800 dark:text-white"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one reflects
          problem-solving, creativity, and modern development techniques.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
