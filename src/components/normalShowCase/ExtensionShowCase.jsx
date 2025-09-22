import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaChrome,
  FaHandPointer,
  FaSave,
} from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { MdOutlinePreview } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

function ExtensionShowCase() {
  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const steps = [
    {
      text: 'Install the extension from the Chrome Web Store',
      icon: <FaChrome className="text-blue-400 text-xl" />,
    },
    {
      text: 'Visit any website and click the extension icon',
      icon: <FaHandPointer className="text-blue-400 text-xl" />,
    },
    {
      text: 'Select the UI element you want to save',
      icon: <MdOutlinePreview className="text-blue-400 text-xl" />,
    },
    {
      text: 'Preview and edit the captured component',
      icon: <FaEdit className="text-blue-400 text-xl" />,
    },
    {
      text: 'Save it to your DirectCode UI library',
      icon: <FaSave className="text-blue-400 text-xl" />,
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Capture UI from Anywhere with Our Extension
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Build your own UI elements, reuse components from the public library, and prototype faster with our browser extension—capture live UI directly from any website.
        </p>

        {/* How It Works */}
        <div className="grid grid-cols-1 gap-8 text-left mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400/40 transition-all duration-300 flex items-start gap-4"
            >
              <div className="mt-1">{step.icon}</div>
              <div>
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                  Step {i + 1}
                </span>
                <p className="mt-2 text-gray-300 text-base leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Video */}
        <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video
            src="./Modern_UI_Library_Website_Design.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-xs text-white px-2 py-1 rounded">
            Live demo of extension in action
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtensionShowCase;
