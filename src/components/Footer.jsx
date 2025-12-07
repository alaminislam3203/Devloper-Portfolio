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
    // { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: 'blogs' },
    { name: 'Clients', href: '#clients' },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/alaminislam3203',
      label: 'GitHub',
      color: 'hover:text-[#171515] dark:hover:text-gray-300',
    },
    {
      icon: FaLinkedinIn,
      href: 'https://in.linkedin.com/in/alaminislam3203',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2] dark:hover:text-[#0A66C2]',
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/alamin320',
      label: 'Facebook',
      color: 'hover:text-[#0A66C2] dark:hover:text-[#0A66C2]',
    },
    {
      icon: FaTwitter,
      href: 'https://x.com/alamin_codes',
      label: 'Twitter',
      color: 'hover:text-[#0A66C2] dark:hover:text-[#0A66C2]',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/alamin_codes/',
      label: 'Instagram',
      color: 'hover:text-[#E1306C] dark:hover:text-[#E1306C]',
    },
    {
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@alamin_chowdhury_102?is_from_webapp=1&sender_device=pc',
      label: 'TikTok',
      color: 'hover:text-[#E1306C] dark:hover:text-[#E1306C]',
    },
    {
      icon: FiMail,
      href: 'mailto:alaminislam3203@gmail.com',
      label: 'Email',
      color: 'hover:text-[#BB001B] dark:hover:text-[#BB001B]',
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/+8801313334279',
      label: 'WhatsApp',
      color: 'hover:text-[#25D366] dark:hover:text-[#25D366]',
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#0B1120] border-t border-gray-100 dark:border-gray-800 py-20 md:py-5 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Content Area --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-200 dark:border-gray-700 pb-10 mb-8">
          <a href="/" className="md:col-span-1">
            <img
              src="./src/assets/alamin_profile.jpg"
              alt="AL-AMIN ISLAM Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
                AL-AMIN
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                Dedicated Full Stack Web Developer specializing in clean, fast,
                and user-centric digital solutions.
              </span>
            </div>
          </a>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 md:text-center">
              Quick Links
            </h5>
            <ul className="md:flex md:justify-center space-y-2 md:space-y-0 md:space-x-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
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

          {/* Column 3: Social Media */}
          <div className="md:col-span-1 md:text-center">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center md:text-center">
              Connect With Me
            </h5>
            <div className="flex md:justify-center space-x-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-colors transform hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Copyright & Bottom Line --- */}
        <div className="flex flex-col md:flex-col justify-between items-center">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <FaRegCopyright className="text-gray-500 dark:text-gray-400 text-sm" />
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {new Date().getFullYear()} Alamin Islam. All rights reserved.
            </p>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Code Hard, Grow Harder
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
