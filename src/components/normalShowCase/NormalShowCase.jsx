import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiFolder, FiGlobe, FiBarChart2,  FiSmartphone, FiSearch } from 'react-icons/fi';
import { IoExtensionPuzzle } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

function NormalShowCase() {
  const sectionRef = useRef(null);
  const featureCardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo('.features-heading', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.features-heading',
          start: "top 80%",
        }
      }
    );

    featureCardsRef.current.forEach((card, i) => {
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

  const features = [
    {
      icon: <FiFolder />,
      title: "Personal UI Library",
      desc: "Save your favorite components and organize them into collections. Access them anytime, from any device.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiGlobe />,
      title: "Public Library",
      desc: "Explore UI elements shared by others. Like, remix, and learn from the community.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiBarChart2 />,
      title: "Engagement Metrics",
      desc: "Track views, likes, saves, and remix counts. Know what's trending and what's loved.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <IoExtensionPuzzle />,
      title: "Component Remixing",
      desc: "Copy Code of any public component and make it your own. Customize styles, logic, and layout instantly.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Design",
      desc: "Preview components across screen sizes. Tailored layout for mobile, tablet, and desktop.",
      color: "from-red-500 to-blue-500"
    },
    {
      icon: <FiSearch />,
      title: "Search & Filters",
      desc: "Find components by tags, popularity, or recency. Filter by type, style, or author.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 features-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Everything You Need to Build UI Smarter
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From saving components to remixing public designs, DirectCode UI gives you the tools to build faster, organize better, and collaborate effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              ref={el => featureCardsRef.current[i] = el}
              className="group relative bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                <div className="absolute inset-1 bg-gray-900 rounded-xl"></div>
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
          <p className="text-gray-400 mt-4">Join thousands of developers building better UI faster</p>
        </div>
      </div>
    </section>
  );
}

export default NormalShowCase;
