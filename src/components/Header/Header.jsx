import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo';
import { FaAlignRight } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      // Clean up ScrollTrigger
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Set initial state
    gsap.set(header, {
      top: '1.25rem', // top-5 equivalent
      left: '50%',
      x: '-50%',
      width: '100%',
      maxWidth: '80rem', // max-w-7xl equivalent
      borderRadius: '0.75rem', // rounded-xl equivalent
    });

    // Create the scroll-triggered animation
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: document.body,
      start: 'top+=100 top', // Start transforming after 100px of scroll
      end: 'max',
      toggleClass: {
        targets: header,
        className: 'header-scrolled'
      },
      onEnter: () => {
        gsap.to(header, {
          top: 0,
          left: 0,
          x: 0,
          maxWidth: '100%',
          borderRadius: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(header, {
          top: '1.25rem',
          left: '50%',
          x: '-50%',
          maxWidth: '80rem',
          borderRadius: '0.75rem',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed z-50 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 transition-all duration-300 header-outer"
    >
      <nav className="flex items-center justify-between px-1">
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
            className={`absolute top-20 right-4 p-1 lg:static lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ${
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