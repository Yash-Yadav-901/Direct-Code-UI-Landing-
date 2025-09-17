import React from 'react';
import RippleGrid from '../ui/RippleGrid';
import CardSweeper from './CardSweper';
import { FaDownload } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";

function Bg() {
  return (
    <div className="  w-full h-[800px] overflow-hidden bg-black">
      {/* Background animation */}
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

      {/* Overlay content */}
      <div className="absolute top-20 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Build Manage Collaborate 
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6">
         Design faster. Build smarter. Capture UI from any site and remix it into your own library.
        </p>
        <div className='flex gap-10'>
          <button className=' bg-blue-600 effectButton gap-2 text-shadow-'>Get Started <IoIosArrowDropright size={"24px"}/></button>
          <button className='  bg-blue-600 effectButton gap-2'>Extension <FaDownload size={"24px"}/></button>
        </div>
        <CardSweeper />
      </div>
    </div>
  );
}

export default Bg;
