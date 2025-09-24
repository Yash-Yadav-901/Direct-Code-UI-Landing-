import React, { useEffect } from 'react';
// Tailwind CSS is assumed to be available in the environment

const Logo = () => {
    // The logo is a static component, so no state or effects are needed beyond the CSS.
    // The animations are handled purely through CSS.
    
    return (
        // The main container for the entire page, centered and with a dark background.
        <div className="flex justify-center items-center   overflow-hidden">
            {/* The style tag is used here to define the custom CSS, including the @keyframes and pseudo-elements.
            This ensures the component is self-contained and the animations work correctly. */}
            <style jsx="true">{`
                /* The custom shape for the 'D' icon using a pseudo-element */
                .logo-icon::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #00bcd4; /* Teal color */
                    /* Using clip-path to create the stylized 'D' shape */
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 50%, 0 30%);
                    /* Adding a subtle shadow for a 3D effect */
                    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
                }

                /* Keyframes for the fade-in and scale animation on page load */
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                /* Keyframes for a gentle pulsing glow on the icon */
                @keyframes pulseGlow {
                    0%, 100% {
                        filter: drop-shadow(0 0 5px #00bcd4);
                    }
                    50% {
                        filter: drop-shadow(0 0 15px #00bcd4);
                    }
                }

                /* Apply the animations to the main logo container and the icon */
                .logo-container {
                    animation: fadeInScale 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                    cursor: pointer;
                    transition: transform 0.3s ease-in-out;
                }

                .logo-icon {
                    animation: pulseGlow 2s infinite ease-in-out;
                    transition: filter 0.3s ease-in-out;
                }

                /* Add a hover effect to scale the entire logo slightly */
                .logo-container:hover {
                    transform: scale(1.05);
                }
            `}</style>
            
            {/* Main container for the logo, using Tailwind Flexbox for alignment */}
            <div className="logo-container flex items-center space-x-2 rounded-lg p-4 ">
                {/* Icon container */}
                <div className="logo-icon relative h-5 w-5 " ></div>
                {/* Text container */}
                <div className="flex text-2xl font-bold tracking-tight">
                    {/* "DirectCode" part in light gray */}
                    <span className="text-gray-200">DirectCode</span>
                    {/* "UI" part in teal, matching the icon */}
                    <span className="text-[#00bcd4]">UI</span>
                </div>
            </div>
        </div>
    );
};

export default Logo;
