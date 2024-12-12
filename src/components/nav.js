import React, { useContext } from "react";
import { useTheme } from "./ThemeContext";
import styled from "styled-components";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme
  
    return (
      <nav className={`navbar ${theme}`}>
        <span>Navbar</span>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </nav>
    );
  };
  
  export default Navbar;
