import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Rent Wheels - Car Rental Platform ",
        description: "RentWheels is a MERN-based car rental platform where users can browse, view, and book cars, while providers can list and manage vehicles.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Javascript", "Tailwind CSS"],
        image: "https://i.ibb.co.com/JWGWT2sH/Screenshot-2025-12-05-165737.jpg",
        link: "https://rent-wheels-2e985.web.app/",
        github: "https://github.com/anik-33/Rent-Wheels-Car-Rental-Platform---Client.git"
    },
    {
        title: "Pet Care - Book Pet Care Services",
        description: "A modern, responsive, and user-friendly React + Firebase web application with smooth animations, secure authentication, and an engaging UI.",
        tech: ["JavaScript", "React.js", "Vite", "Tailwind CSS", "Firebase"],
        image: "https://i.ibb.co.com/nsw9Zv8b/Screenshot-2025-12-05-170020.jpg",
        link: "https://petcare-anik.netlify.app/",
        github: "https://github.com/anik-33/Pet-Care-Service.git"
    },
    // https://i.ibb.co.com/nsw9Zv8b/Screenshot-2025-12-05-170020.jpg
    // https://i.ibb.co.com/JWGWT2sH/Screenshot-2025-12-05-165737.jpg
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 sm:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and a learning opportunity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <div className="flex space-x-3">
                                        <a href={project.github} className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <i className="fab fa-github text-lg"></i>
                                        </a>
                                        <a href={project.link} className="text-gray-500 hover:text-blue-500 transition-colors">
                                            <i className="fas fa-external-link-alt text-lg"></i>
                                        </a>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
