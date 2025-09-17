import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);







function ExtensionShowCase() {


  useEffect(() => {
    gsap.utils.toArray('.card').forEach(card => {
  gsap.fromTo(card,
    { scale: 1, opacity: 1 },
    {
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: "top 15%",
        end: "bottom 15%",
        markers: true,
        toggleActions: "play reverse ", 
      },
      
    }
  );
});

  }, [])

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
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left mb-12 h-full ">
          {[
            "Install the extension from the Chrome Web Store",
            "Visit any website and click the extension icon",
            "Select the UI element you want to save",
            "Preview and edit the captured component",
            "Save it to your DirectCode UI library",
          ].map((step, i) => (
            <div key={i} className="card bg-gray-900 p-4 rounded-lg shadow-md  sticky  top-[35vh] h-800px">
              <span className="text-blue-500 font-bold">Step {i + 1}</span>
              <p className="mt-2 text-gray-300">{step}</p>
            </div>
          ))}
        </div>

        {/* Demo Video */}
        <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video
            src="/videos/extension-demo.mp4" // Replace with your actual video path
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

  )
}

export default ExtensionShowCase