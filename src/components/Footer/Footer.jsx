import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 text-center mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4 sm:space-y-2 sm:flex-row sm:justify-between">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Direct Code UI. All rights reserved.</p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm items-center">
          <a href="/privacy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
