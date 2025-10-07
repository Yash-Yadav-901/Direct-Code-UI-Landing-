import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function UIShowCase() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const uiElements = [
    { src: "/UIElements/Ui1.html", alt: "UI element 1" },
    { src: "/UIElements/Ui2.html", alt: "UI element 2" },
    { src: "/UIElements/Ui3.html", alt: "UI element 3" },
    { src: "/UIElements/Ui4.html", alt: "UI element 4" },
    { src: "/UIElements/Ui5.html", alt: "UI element 5" },
    { src: "/UIElements/Ui6.html", alt: "UI element 6" }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 ui-heading ">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Some UI Elements From Public Library
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore beautifully animated buttons, toggles, and loaders crafted by our community. Every component is reusable, remixable, and built for performance.
          </p>
        </div>

        {/* UI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiElements.map((element, i) => (
            <div
              key={`ui-card-${i}`}
              ref={el => cardRefs.current[i] = el}
              className="group relative bg-gray-800/50 p-4 rounded-2xl border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden h-[300px]"
            >
              <iframe
                src={element.src}
                title={element.alt}
                width="100%"
                height="100%"
                className="rounded-xl shadow-lg"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Extra UI Element */}
        <div className="mt-12 h-[300px] overflow-hidden rounded-2xl shadow-lg border border-gray-700 relative bg-gray-800/50 p-4   hover:border-transparent transition-all duration-300 ">
          <iframe
            src="/UIElements/Ui7.html"
            title="UI element 7"
            width="100%"
            height="100%"
            className="rounded-xl"
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
         
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore UI Library
          </button>
          
          <p className="text-gray-400 mt-4">
            Build UI Elements, make them public, use Others UI
          </p>
        </div>
      </div>

      {/* Custom CSS */}
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
