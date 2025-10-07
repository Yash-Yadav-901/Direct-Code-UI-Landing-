import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaUsers, 
  FaComments, 
  FaRocket, 
  FaHistory,
  FaPlay,
  FaCircle 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function RealTimeShowCase() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animation for the heading and description
    gsap.fromTo('.collab-heading', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.collab-heading',
          start: "top 80%",
        }
      }
    );

    // Animation for the video container
    gsap.fromTo('.collab-video',
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.collab-video',
          start: "top 75%",
        }
      }
    );

    // Animation for feature highlights
    gsap.utils.toArray('.feature-highlight').forEach((feature, i) => {
      gsap.fromTo(feature,
        { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: feature,
            start: "top 85%",
          }
        }
      );
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: <FaUsers size={28} />,
      title: "Multi-user Editing",
      description: "Work simultaneously with your team on the same component"
    },
    {
      icon: <FaComments size={28} />,
      title: "Live Chat",
      description: "Discuss changes without leaving your workspace"
    },
    {
      icon: <FaRocket size={28} />,
      title: "Instant Preview",
      description: "See changes in real-time without refreshing"
    },
    {
      icon: <FaHistory size={28} />,
      title: "Version History",
      description: "Track changes and revert to previous versions anytime"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-16 collab-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent  bg-green-400 text-shadow-emerald-500  text-shadow-2xs">
            Real-Time Collaboration
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Edit together, preview instantly, and chat live. Build UI components with your team in real time—no refresh, no delay.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Feature highlights */}
          <div className="lg:w-2/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="feature-highlight bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all duration-300">
                  <div className="text-green-400 mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-green-400">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Video */}
          <div className="lg:w-3/5 collab-video">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 z-10"></div>
              <div className="absolute top-4 left-4 z-20 flex space-x-2">
                <FaCircle className="text-red-500 w-3 h-3" />
                <FaCircle className="text-yellow-500 w-3 h-3" />
                <FaCircle className="text-green-500 w-3 h-3" />
              </div>
              <video
                ref={videoRef}
                src="./Modern_UI_Library_Website_Design.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-sm text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                Live demo of real-time collaboration
              </div>
              {/* Play button overlay for better UX */}
              <button 
                className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.paused) {
                      videoRef.current.play();
                    } else {
                      videoRef.current.pause();
                    }
                  }
                }}
                aria-label="Play or pause video"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <FaPlay className="w-8 h-8 text-white ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a href='https://app.directcodeui.in/' target='_blank' rel='noreferrer' className='inline-block'>
          <button className=" bg-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 4a5 5 0 015 5v6a5 5 0 01-5 5H7a5 5 0 01-5-5V9a5 5 0 015-5h10zm0 2H7a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3zm-5 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Start Collaborating Now
          </button>
          </a>
          <p className="text-gray-400 mt-4">No credit card required • Free forever for small teams</p>
        </div>
      </div>
    </section>
  );
}

export default RealTimeShowCase;