import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../styles/Home.css'; // Import the CSS file
import car from '../assets/car.png';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookCar = () => {
    navigate('/cars'); // Navigate to the booking page
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our Car Rental Service</h1>
      <img src={car} alt="car" className="car" />
      <p>Select and book your car easily with our seamless and user-friendly platform.</p>
      <button className="home-btn" onClick={handleBookCar}>Book Car</button> {/* Attach onClick handler */}
    </div>
  );
};

export default Home;
