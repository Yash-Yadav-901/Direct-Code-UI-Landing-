import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        <header className="sticky top-0 z-50 w-full bg-gray-800 shadow-lg border-b border-gray-700 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                {/* Logo on the left */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            src="/DirectCodeUI_resized (1).png"
                            className="w-15 h-15 border-2"
                            alt="Lego Logo"
                        />
                    </Link>
                </div>

                {/* Right side: nav links + buttons */}
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <div className="lg:hidden mr-2">
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation links and buttons */}
                    <div className={`absolute top-20 right-4 bg-gray-800 rounded-lg shadow-lg p-4 lg:static lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 font-medium text-gray-300">
                            {['/', '/about', '/contact', '/github'].map((path, idx) => {
                                const label = ['Home', 'About', 'Contact', 'GitHub'][idx];
                                return (
                                    <li key={path}>
                                        <NavLink
                                            to={path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `block py-2 px-3 rounded ${isActive ? 'text-white font-bold' : 'hover:text-orange-400'}`
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0 lg:space-x-2">
                            <Link
                                to="#"
                                className="text-gray-800 bg-white hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
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
