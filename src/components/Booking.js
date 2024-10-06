import React from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const { model, price } = location.state || { model: '', price: '' }; // Default values

  return (
    <div className="booking-container">
      <h1>Booking Details</h1>
      <p>Car Model: {model}</p>
      <p>Price: {price}</p>
      {/* Add additional booking form or details here */}
    </div>
  );
};

export default Booking;
