import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_g9rtati';
        const TEMPLATE_ID = 'template_4jlzrrf';
        const PUBLIC_KEY = 'mSW-bsIk9JXtWWXOy';

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log('FAILED...', error);
                setStatus('error');
                // Display the actual error message to help debugging
                alert(`Failed to send: ${JSON.stringify(error)}`);
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold">Contact Information</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I'm currently available for freelance work and open to full-time opportunities.
                            If you have a question or just want to connect, I'll try my best to get back to you!
                        </p>
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="font-medium">anik.cse.nu@gmail.com</p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300">
                                    <i className="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="font-medium">Dhaka, Bangladesh</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <motion.input
                                whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <motion.textarea
                                whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none transition-all resize-none"
                                placeholder="Your message..."
                            ></motion.textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-3 px-6 font-medium rounded-lg shadow-md hover:shadow-lg transition-all ${status === 'sending'
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </motion.button>
                        {status === 'success' && (
                            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
