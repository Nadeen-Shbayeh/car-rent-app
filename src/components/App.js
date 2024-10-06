import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cars from './Cars';
import Book from './Book';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/App.css';
import '../styles/index.css';
import { FiHome, FiInfo, FiCar, FiBook, FiPhone } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';
import logo from '../assets/logo.png';  // Adjust the path according to where the image is stored

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state of the navigation
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <Link to="/" onClick={toggleNav}>
              <FiHome /> Home
            </Link>
            <Link to="/about" onClick={toggleNav}>
              <FiInfo /> About
            </Link>
            <Link to="/cars" onClick={toggleNav}>
              <FaCar /> Cars
            </Link>
         
            <Link to="/contact" onClick={toggleNav}>
              <FiPhone /> Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="hamburger" onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
