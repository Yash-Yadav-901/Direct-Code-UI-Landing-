import React from 'react';
import RippleGrid from '../ui/RippleGrid';
import CardSweeper from "./CardSweper";
import { FaDownload } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";

function Bg() {
  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-black">
  
      <RippleGrid
        enableRainbow={false}
        gridColor="#4287f5"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.8}
      />

    
      <div className="absolute top-20 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Build Manage Collaborate
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6">
          Design faster. Build smarter. Capture UI from any site and remix it into your own library.
        </p>
        <div className="flex gap-4 sm:gap-10 mb-6">
        <a href='https://app.directcodeui.in/' target='_blank' rel='noreferrer ' className='inline-block cursor-pointer'>
          <button className="border border-white bg-white/10 backdrop-blur-xl text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition" style={{ boxShadow: '0 4px 4px black', textShadow: '0.5 2px 2px black' }}>
            Get Started <IoIosArrowDropright size={20} />
          </button>
          </a>
          <button className="bg-blue-600 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition" style={{ boxShadow: '0 4px 4px black', textShadow: '0.5 2px 2px black' }}>
            Extension <FaDownload size={20} />
          </button>
        </div>
        <CardSweeper />
      </div>
    </div>
  );
}

export default Bg;
