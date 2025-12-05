import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: "Hands on Experience", value: "", icon: "fa-code" },
        { label: "Projects Completed", value: "10+", icon: "fa-project-diagram" },
        { label: "MERN Stack Projects", value: "4+", icon: "fa-layer-group" },
        { label: "Happy Clients", value: "5+", icon: "fa-users" }
    ];

    const journey = [
        {
            title: "Full-Stack Development",
            description: "Expertise in building complete web applications using MongoDB, Express.js, React.js, and Node.js with seamless front-end to back-end integration.",
            icon: "fa-layer-group",
            color: "blue"
        },
        {
            title: "Backend Architecture",
            description: "Proficient in designing RESTful APIs, database schemas, authentication systems, and server-side logic using Node.js and Express.js.",
            icon: "fa-server",
            color: "purple"
        },
        {
            title: "Modern UI Development",
            description: "Creating responsive, interactive user interfaces with React.js, Next.js, and modern CSS frameworks while ensuring optimal performance.",
            icon: "fa-laptop-code",
            color: "green"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const colorClasses = {
        blue: "from-blue-500 to-blue-600",
        purple: "from-purple-500 to-purple-600",
        green: "from-green-500 to-green-600"
    };

    return (
        <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        A passionate developer dedicated to creating exceptional digital experiences
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                            <div className="pl-8">
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    My Journey
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    I'm a passionate MERN Stack Developer with expertise in building full-stack web applications from concept to deployment. My journey in web development started with a curiosity about how websites work, which evolved into mastering both front-end and back-end technologies.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    With hands-on experience in MongoDB, Express.js, React.js, and Node.js, I create scalable, secure, and performant applications. From designing database schemas and RESTful APIs to crafting responsive user interfaces, I handle the complete development lifecycle. I believe in writing clean, maintainable code and following industry best practices.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Beyond the MERN stack, I'm proficient in Next.js, Firebase, and modern development tools. When I'm not coding, I enjoy exploring emerging technologies, solving algorithmic challenges, and sharing knowledge with the developer community. I'm always eager to take on new challenges and build impactful solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-3 shadow-md">
                                        <i className={`fas ${stat.icon} text-white text-lg`}></i>
                                    </div>
                                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* What I Do Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {journey.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${colorClasses[item.color]} rounded-xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <i className={`fas ${item.icon} text-white text-2xl`}></i>
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Education
                    </h3>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="max-w-3xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                        <i className="fas fa-graduation-cap text-white text-2xl"></i>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science & Engineering</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        <i className="fas fa-university mr-2"></i>
                                        National University
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Comprehensive study of computer science fundamentals including data structures, algorithms,
                                        software engineering, database systems, and web technologies. Developed strong problem-solving
                                        skills and practical experience through various academic and personal projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Interested in working together?
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <span>Let's Connect</span>
                        <i className="fas fa-arrow-right"></i>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
