import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 text-center mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4 sm:space-y-2 sm:flex-row sm:justify-between">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Direct Code UI. All rights reserved.</p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm items-center">
          <NavLink href="/PrivacyPolicy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</NavLink>
          <a href="/terms" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
          <NavLink to="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
