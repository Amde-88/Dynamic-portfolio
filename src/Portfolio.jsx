import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Resume from './component/Resume';
import Port from './component/Port';
import Contact from './component/Contact';
import './Portfolio.css';
import portIcon from './port-images/port-icon.png'; // Adjust the path as necessary
import emailIcon from './port-images/email.png'; // Adjust the path for your email icon

function Portfolio() {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="Cassopia">
        
        {/* Navigation links */}
        <nav>
          <header className="header-container">
            <img src={portIcon} alt="Portfolio Icon" className="header-icon" />
            <h1 className='aa'>Amde</h1>
            <div className="nav-links">
              <Link to="/" className="nav-link" onClick={() => scrollToSection({ current: document.getElementById('home') })}>Home</Link>
              <Link to="/about" className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</Link>
              <Link to="/resume" className="nav-link" onClick={() => scrollToSection(resumeRef)}>Resume</Link>
              <Link to="/port" className="nav-link" onClick={() => scrollToSection(portRef)}>Portfolio</Link>
              <Link to="/contact" className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</Link>
              <span className="email-container">
                <img src={emailIcon} alt="Email Icon" className="email-icon" />
                <a href="mailto:amdecassopia@gmail.com" className="email-link">amdecassopia@gmail.com</a>
              </span>
            </div>
          </header>
        </nav>

        {/* Main content area */}
        <div className="content">
          <div id="home" ref={aboutRef}>
            <Home />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={resumeRef}>
            <Resume />
          </div>
          <div ref={portRef}>
            <Port />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
        
        {/* Routes for direct navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/port" element={<Port />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Portfolio;