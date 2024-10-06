import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cars from './Cars';
import Book from './Book';
import Contact from './Contact';
import Footer from './Footer'; 
import '../styles/App.css';
// Import icons
import { FiHome, FiInfo, FiCar, FiBook, FiPhone } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';
import logo from '../assets/logo.png';  // Adjust the path according to where the image is stored

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img src={logo} alt="Logo" className="logo" /><p className='p'> Car Rental</p>
         
          <Link to="/">
            <FiHome /> Home
          </Link>
          <Link to="/about">
            <FiInfo /> About
          </Link>
          <Link to="/cars">
            <FaCar /> Cars
          </Link>
          <Link to="/booking">
            <FiBook /> Bookings
          </Link>
          <Link to="/contact">
            <FiPhone /> Contact
          </Link>
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
