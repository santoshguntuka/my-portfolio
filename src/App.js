import React, { useState } from 'react'; // Import useState from React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Now useState is properly defined

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar />
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
            <span className="slider round"></span>
          </label>
          <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
