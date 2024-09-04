import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import './styles/App.css';

function AppContent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

  return (
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
          <Route path="*" element={<Home />} /> {/* Fallback to Home */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
