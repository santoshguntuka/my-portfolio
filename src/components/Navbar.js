import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useDarkMode } from '../DarkModeContext';
import '../styles/Navbar.css';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <ul className="navbar-links">
=======
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
>>>>>>> 7d08da0 (Initial commit)
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
<<<<<<< HEAD
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
        <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
=======
>>>>>>> 7d08da0 (Initial commit)
    </nav>
  );
}

export default Navbar;
