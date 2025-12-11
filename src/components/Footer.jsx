import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '#contact' },
    { name: 'Clients', href: '#clients' },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/alaminislam3203',
      label: 'GitHub',
      color: 'text-black dark:text-white',
    },
    {
      icon: FaLinkedinIn,
      href: 'https://in.linkedin.com/in/alaminislam3203',
      label: 'LinkedIn',
      color: 'text-[#0A66C2] dark:hover:text-[#0A66C2]',
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/alamin320',
      label: 'Facebook',
      color: 'text-[#0A66C2] dark:hover:text-[#0A66C2]',
    },
    {
      icon: FaTwitter,
      href: 'https://x.com/alamin_codes',
      label: 'Twitter',
      color: 'text-[#0A66C2] dark:hover:text-[#0A66C2]',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/alamin_codes/',
      label: 'Instagram',
      color: 'text-[#E1306C] dark:hover:text-[#E1306C]',
    },
    {
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@alamin_chowdhury_102',
      label: 'TikTok',
      color: 'text-[#E1306C] dark:hover:text-[#E1306C]',
    },
    {
      icon: FiMail,
      href: 'mailto:alaminislam3203@gmail.com',
      label: 'Email',
      color: 'text-[#BB001B] dark:hover:text-[#BB001B]',
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/+8801313334279',
      label: 'WhatsApp',
      color: 'text-[#25D366] dark:hover:text-[#25D366]',
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#0B1120] border-t border-gray-100 dark:border-gray-800 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-200 dark:border-gray-700 pb-10 mb-8 text-center md:text-left">
          {/* Logo & Info */}
          <a href="/" className="flex flex-col md:col-span-1 gap-3">
            <img
              src="https://i.ibb.co.com/tPLBqHkN/alamin-profile.jpg"
              alt="AL-AMIN ISLAM Logo"
              className="h-10 w-10 rounded-full object-cover shadow-sm mx-auto md:mx-0"
            />
            <div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 ">
                MD: AL-AMIN ISLAM
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:max-w-xs  text-center md:text-left">
                Dedicated Full Stack Web Developer specializing in clean, fast,
                and user-centric digital solutions.
              </p>
            </div>
          </a>

          {/* Quick Links */}
          <div className="md:col-span-1 flex flex-col items-center">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h5>
            <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1 flex flex-col items-center">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Connect With Me
            </h5>
            <div className="flex flex-wrap justify-center gap-5">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-transform transform hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col items-center text-center text-gray-500 dark:text-gray-400 text-sm space-y-1">
          <div className="flex items-center gap-1">
            <FaRegCopyright />
            <span>
              {new Date().getFullYear()} Alamin Islam. All rights reserved.
            </span>
          </div>
          <div>Code Hard, Grow Harder</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
