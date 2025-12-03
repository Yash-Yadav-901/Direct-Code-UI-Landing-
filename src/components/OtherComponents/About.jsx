import React from 'react';
import { FaRocket, FaTools, FaFlask, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const AboutPage = () => {
    return (
        <section className="bg-gray-950 text-white py-24 px-6 md:px-12 font-sans">

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <img src="/Untitled design (1)-Photoroom.png" alt="DirectCode UI" className="mx-auto h-12 mb-4" />
                <h1 className="text-4xl font-bold">About DirectCode UI</h1>
                <p className="text-gray-400 mt-4 text-lg">
                    We’re building the fastest way to design, remix, and collaborate on UI components because developers deserve tools that match their creativity.
                </p>
            </div>

            {/* Content Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

                {/* Mission */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <FaRocket /> Our Mission
                    </h2>
                    <p className="text-gray-300">
                        DirectCode UI empowers creators to move fast, share ideas, and build beautiful interfaces together. Our mission is to make UI development collaborative, reusable, and inspiring.
                        With our browser extension, you can capture any UI element from the web, instantly get a similar or identical component, refine its functionality, and publish it for others to use and appreciate. No need to start from scratch—just remix, improve, and share.
                    </p>
                </div>

                {/* Offerings */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <FaTools /> What We Offer
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Real-time collaborative editing</li>
                        <li>Browser extension to capture and replicate UI elements from any site</li>
                        <li>Personal and public component libraries</li>
                        <li>Remixable, reusable UI elements</li>
                        <li>Responsive previews and layout tools</li>
                        <li>Engagement metrics and smart discovery</li>
                    </ul>
                </div>

                {/* Tech Stack */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <FaFlask /> Tech Stack
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li><strong>Frontend:</strong> React + Vite + TailwindCSS</li>
                        <li><strong>Animations:</strong> GSAP, ScrollTrigger</li>
                        <li><strong>Collaboration:</strong> Socket.io + Node.js </li>
                        <li><strong>Extension:</strong> Chrome Extension API + Vanilla JS</li>
                        <li><strong>Design System:</strong> Custom component library + Iconography</li>
                    </ul>
                </div>

             
                <div>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <FaLaptopCode /> Built by Developers, for Developers
                    </h2>
                    <p className="text-gray-300">
                        I built this platform because I wanted to create amazing UI elements and mockups in a collaborative environment—where we can code together, chat via video, audio, or text, and have fun doing it. Even if someone doesn’t have friends who enjoy building UI components, they can still share their creative coding skills and connect with others who appreciate their work.
                    </p>
                </div>
            </div>

            
            <div className="mt-20 text-center">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
                    <FaLightbulb /> Crafted by Yash Yadav
                </h3>
                <p className="text-gray-400 mb-4">
                    Full-stack developer & CSE student passionate about backend architecture and cloud computing.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://www.linkedin.com/in/yashyadav90/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Yash-Yadav-901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>

           
            <div className="mt-16 text-center">
                <p className="text-gray-400 text-lg mb-4">
                    Ready to build smarter? Join thousands of developers using DirectCode UI to accelerate their workflow and share their creativity.
                </p>
                <a href="https://app.directcodeui.in/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition">
                    Get Started
                </a>
            </div>

        </section>
    );
};

export default AboutPage;