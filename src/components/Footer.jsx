import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} Anik Samadder. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/anik-33" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <span className="sr-only">GitHub</span>
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/anik-samadder-as/" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <i className="fab fa-instagram text-xl"></i>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
