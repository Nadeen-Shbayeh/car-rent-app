import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Book.css'; // Ensure you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import check icon

const Book = () => {
  const location = useLocation();
  const { make, model, price, image } = location.state || { make: '', model: '', price: '', image: '' }; // Get details from location state

  // State for the booking form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');  // State for phone number
  const [email, setEmail] = useState('');  // State for email
  const [address, setAddress] = useState(''); // New state for address
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [currentBooking, setCurrentBooking] = useState(null); // State to store current booking details

  const handleBooking = (e) => {
    e.preventDefault();
    if (name && phone && email && address && pickupDate && returnDate) {
      const newBooking = {
        id: bookings.length + 1,
        carMake: make,
        carModel: model,
        price,
        pickupDate,
        returnDate,
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
        customerAddress: address, // Add address to booking details
      };
      setBookings([...bookings, newBooking]);
      setCurrentBooking(newBooking); // Store current booking details
      setShowModal(true); // Show modal on successful booking
      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setAddress(''); // Reset address field
      setPickupDate('');
      setReturnDate('');
    } else {
      alert('Please fill out all fields!');
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="booking-container">
      <h1>Your Booking</h1>
      <div className="booking-details">
        <img src={image} alt={`Booking ${make} ${model}`} className="booking-car-image" />
        <p><strong>Car Make:</strong> {make}</p>
        <p><strong>Car Model:</strong> {model}</p>
        <p><strong>Price:</strong> {price}</p>
      </div>
      <h2>Make a New Booking</h2>
      <form onSubmit={handleBooking}>
        <div className="form-row">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Pickup Date:
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            />
          </label>
          <label>
            Return Date:
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Confirm Booking</button>
      </form>

      {/* Modal for confirming booking */}
      {showModal && (
        <div className="modal-overlay">
          <div className={`modal ${showModal ? 'show' : ''}`}> {/* Apply show class */}
            <h2>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Booking Confirmed!
            </h2>
            <p><strong>Customer Name:</strong> {currentBooking.customerName}</p>
            <p><strong>Phone:</strong> {currentBooking.customerPhone}</p>
            <p><strong>Email:</strong> {currentBooking.customerEmail}</p>
            <p><strong>Address:</strong> {currentBooking.customerAddress}</p>
            <p><strong>Car:</strong> {currentBooking.carMake} {currentBooking.carModel}</p>
            <p><strong>Price:</strong> {currentBooking.price}</p>
            <p><strong>Pickup:</strong> {currentBooking.pickupDate}</p>
            <p><strong>Return:</strong> {currentBooking.returnDate}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
