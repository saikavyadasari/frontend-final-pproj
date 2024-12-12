import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useLocation } from 'react-router-dom'; // Import useLocation to get current route
import "./Home.css";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation(); // Get the current route

  // Handle radio button change event to toggle theme
  const handleThemeChange = (e) => {
    toggleTheme(e.target.value); // Update the theme based on the selected radio button value
  };

  // Reset the theme to light when navigating away from the Home page
  useEffect(() => {
    if (location.pathname !== '/') {
      toggleTheme('light'); // Reset theme to light
    }
  }, [location, toggleTheme]);

  useEffect(() => {
    document.body.className = theme; // Apply the theme class to body (for background color, etc.)
  }, [theme]);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <div className="theme-selector">
        {/* Radio buttons for selecting light or dark theme */}
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light Theme
        </label>
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark Theme
        </label>
      </div>
    </div>
  );
};

export default Home;
