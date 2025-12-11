import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { PhoneCall } from 'lucide-react';

// --- Environment Variables Access ---
// Note: We check for both VITE and REACT_APP prefixes to maximize compatibility.
const getEnv = key =>
  import.meta.env[`VITE_${key}`] || process.env[`REACT_APP_${key}`];

const SERVICE_ID = getEnv('SERVICE_ID');
const PUBLIC_KEY = getEnv('PUBLIC_KEY');
const OWNER_TEMPLATE_ID = getEnv('OWNER_TEMPLATE_ID');
const AUTO_REPLY_TEMPLATE_ID = getEnv('AUTO_REPLY_TEMPLATE_ID');
// ------------------------------------

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS credentials validation check
    if (
      !SERVICE_ID ||
      !PUBLIC_KEY ||
      !OWNER_TEMPLATE_ID ||
      !AUTO_REPLY_TEMPLATE_ID
    ) {
      console.error(
        'EmailJS credentials are missing or invalid. Check your .env file and ensure the environment is correctly loading variables.'
      );
      setStatus('error');
      setTimeout(() => setStatus(''), 7000);
      return;
    }

    // IMPORTANT: Verify AUTO_REPLY_TEMPLATE_ID is NOT the same as OWNER_TEMPLATE_ID
    if (OWNER_TEMPLATE_ID === AUTO_REPLY_TEMPLATE_ID) {
      console.error(
        'Owner and Auto-Reply templates must be different for this logic to work properly.'
      );
      // We allow the process to continue, but logging a warning
    }

    const templateParams = { ...formData };

    try {
      // 1. Send notification to the owner
      const ownerResult = await emailjs.send(
        SERVICE_ID,
        OWNER_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log('SUCCESS! Notification sent to owner:', ownerResult.text);

      // 2. Send auto-reply to the user
      const replyResult = await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log('SUCCESS! Auto-reply sent to user:', replyResult.text);

      // উভয় ইমেইল সফলভাবে গেলে
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 7000);
    }
  };

  const handleEmailClick = () =>
    (window.location.href = 'mailto:alaminislam3203@gmail.com');
  const handleLocationClick = () =>
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Rangpur%2C+Bangladesh',
      '_blank'
    );

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] text-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4">
              I'm currently available for web development work and open to
              full-time opportunities. If you have a question or just want to
              connect, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 pt-4">
              {/* Email */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(59,130,246,0.2)',
                }}
                className="flex items-center space-x-4 p-5 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                onClick={handleEmailClick}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                    Email Address
                  </p>
                  <p className="font-bold text-sm hover:underline cursor-pointer">
                    alaminislam3203@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Call */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(52,211,153,0.2)',
                }}
                className="flex items-center space-x-4 p-5 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full text-white flex-shrink-0">
                  <PhoneCall className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                    Call Now
                  </p>
                  <a
                    href="tel:+8801313334279"
                    className="font-bold text-lg hover:text-green-500 transition-colors hover:underline"
                  >
                    +8801313334279
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(168,85,247,0.2)',
                }}
                className="flex items-center space-x-4 p-5 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                onClick={handleLocationClick}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-white flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                    Location
                  </p>
                  <p className="font-bold text-lg hover:underline">
                    Rangpur, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>

            {['name', 'email', 'message'].map((field, idx) => (
              <div key={idx}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize"
                >
                  {field}
                </label>
                {field !== 'message' ? (
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: '0 0 0 3px rgba(59,130,246,0.5)',
                    }}
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none transition-all focus:border-blue-500"
                    placeholder={`Your ${field}`}
                  />
                ) : (
                  <motion.textarea
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: '0 0 0 3px rgba(59,130,246,0.5)',
                    }}
                    id={field}
                    rows="5"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none transition-all resize-none focus:border-blue-500"
                    placeholder="Your message..."
                  />
                )}
              </div>
            ))}

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: '0 5px 15px rgba(59,130,246,0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 px-6 font-bold text-lg rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider ${
                status === 'sending'
                  ? 'bg-gray-500 cursor-not-allowed text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}
            >
              {status === 'sending' ? (
                <>
                  <FaPaperPlane className="animate-pulse" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <p className="text-green-500 text-center font-semibold flex items-center justify-center gap-2 mt-4">
                <FaCheckCircle /> Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center font-semibold flex items-center justify-center gap-2 mt-4">
                <FaTimesCircle /> Failed to send message.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
