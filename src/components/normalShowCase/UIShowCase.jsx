import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function UIShowCase() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    // Animation for the heading and description
    gsap.fromTo('.ui-heading', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.ui-heading',
          start: "top 80%",
        }
      }
    );

    // Animation for UI cards with staggered effect
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const uiElements = [
    {
      id: 1,
      icon: "🔥",
      title: "Hover Glow Button",
      description: "A button with a smooth glow effect on hover",
      demo: (
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-pink-500/30">
          Hover Me
        </button>
      ),
      color: "from-pink-500 to-purple-600"
    },
    {
      id: 2,
      icon: "⏳",
      title: "Loading Button",
      description: "Button with animated loading indicator",
      demo: (
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full relative overflow-hidden group">
          <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center">
            <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
            Loading...
          </span>
        </button>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: "🎛️",
      title: "Toggle Switch",
      description: "Animated toggle switch with smooth transition",
      demo: (
        <div className="flex items-center justify-center">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-green-500 relative transition-colors duration-300">
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-7"></div>
            </div>
          </label>
        </div>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: "✨",
      title: "Floating Action Button",
      description: "Button with floating animation and shadow",
      demo: (
        <button className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-amber-500/40 animate-float">
          <span className="text-xl">+</span>
        </button>
      ),
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 5,
      icon: "🌊",
      title: "Ripple Button",
      description: "Button with material design ripple effect",
      demo: (
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden relative group">
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          Click Me
          <span className="absolute inset-0 rounded-lg overflow-hidden">
            <span className="ripple absolute bg-white opacity-30 rounded-full transform scale-0 transition-transform duration-500"></span>
          </span>
        </button>
      ),
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      icon: "🔄",
      title: "Animated Refresh",
      description: "Refresh button with spinning animation",
      demo: (
        <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 group">
          <span className="text-xl transform group-hover:rotate-180 transition-transform duration-500">🔄</span>
        </button>
      ),
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-16 ui-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Eye-Catching UI Elements
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore beautifully animated buttons, toggles, and loaders crafted by our community. Every component is reusable, remixable, and built for performance.
          </p>
        </div>

        {/* UI Elements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiElements.map((element, i) => (
            <div 
              key={element.id}
              ref={el => cardRefs.current[i] = el}
              className="group relative bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`}></div>
              
              {/* Animated border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${element.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                <div className="absolute inset-1 bg-gray-900 rounded-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 transform group-hover:scale-110 transition-transform duration-300">
                    {element.icon}
                  </span>
                  <h3 className="text-xl font-semibold group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                    {element.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-5">
                  {element.description}
                </p>
                
                <div className="flex justify-center min-h-[60px] items-center">
                  {element.demo}
                </div>
                
                <div className="mt-5 flex justify-between items-center">
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    2.4k uses
                  </span>
                  <button 
                    className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition-colors duration-300"
                    onClick={() => setActiveDemo(element.id)}
                  >
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore UI Library
          </button>
          <p className="text-gray-400 mt-4">Build UI Elements, make them public, use Others UI </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .ripple {
          animation: ripple-effect 0.6s linear;
        }
        @keyframes ripple-effect {
          100% {
            opacity: 0;
            transform: scale(2.5);
          }
        }
      `}</style>
    </section>
  );
}

export default UIShowCase;