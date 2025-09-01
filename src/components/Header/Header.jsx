import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-7xl bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 transition-all duration-300">
      <nav className="flex items-center justify-between px-1 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
           <Logo/>
          </Link>
        </div>

        {/* Desktop & Mobile Menu */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <div className="lg:hidden mr-2">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`absolute top-20 right-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-1 lg:static lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ${
              isMenuOpen ? 'block' : 'hidden'
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 font-medium text-white">
              {['/', '/about', '/contact', '/github'].map((path, idx) => {
                const label = ['Home', 'About', 'Contact', 'GitHub'][idx];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg transition-colors ${
                          isActive
                            ? 'text-white font-bold'
                            : 'hover:text-orange-400'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0 lg:space-x-2">
              <Link
                to="#"
                className="text-gray-800 bg-white/80 hover:bg-white font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
