// src/components/ThemeToggle.jsx
import React, { useRef, } from 'react';
import { useModeAnimation } from 'react-theme-switch-animation';

const ThemeToggle = () => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  return (
    <button ref={ref} onClick={toggleSwitchTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-800">
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;