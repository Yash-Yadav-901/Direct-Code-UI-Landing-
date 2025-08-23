import React from 'react';
import RippleGrid from '../ui/RippleGrid';
import CardSweeper from './CardSweper';

function Bg() {
  return (
    <div className="absolute top-0 w-full h-[800px] overflow-hidden bg-black">
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
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to My UI Showcase
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6">
          Explore beautifully animated buttons, carousels, and interactive components layered over a dynamic ripple grid.
        </p>
        <CardSweeper />
      </div>
    </div>
  );
}

export default Bg;
