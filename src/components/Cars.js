import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faDoorOpen, 
  faSuitcase, 
  faUser, 
  faTachometerAlt, 
  faSnowflake, 
  faDollarSign,
  faGasPump
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Cars.css';
import carList from './CarList';

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const detailsRef = useRef(null); // Create a ref for the car details section
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  useEffect(() => {
    // Scroll to the car details section after the selectedCar is updated
    if (selectedCar && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCar]); // useEffect will run when selectedCar changes

  const handleBookCar = () => {
    // Navigate to the booking page with the selected car's details
    navigate('/book', { state: { make: selectedCar.make, model: selectedCar.model, price: selectedCar.price, image: selectedCar.image } });
  };

  return (
    <div className="cars-container">
      <h1 className="title">Available Cars for Rent</h1>
      <div className="cars-list">
        {carList.map((car) => (
          <div key={car.id} className="car-card" onClick={() => handleSelectCar(car)}>
            <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
            <div className="car-details">
              <h2>{car.make} {car.model}</h2>
              <p>{car.year}</p>
              <p>{car.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <div className="selected-car" ref={detailsRef}>
          <h2>Selected Car</h2>
          <div className="selected-car-details">
            <div className="selected-car-info">
              <h2>{selectedCar.make} {selectedCar.model}</h2>
              <p><FontAwesomeIcon icon={faCar} /> <strong>Year:</strong> {selectedCar.year}</p>
              <p><FontAwesomeIcon icon={faDollarSign} /> <strong>Price:</strong> {selectedCar.price}</p>
              <p><FontAwesomeIcon icon={faUser} /> <strong>Number of Seats:</strong> {selectedCar.seats}</p>
              <p><FontAwesomeIcon icon={faDoorOpen} /> <strong>Number of Doors:</strong> {selectedCar.doors}</p>
              <p><FontAwesomeIcon icon={faSuitcase} /> <strong>Suitcase Capacity:</strong> {selectedCar.suitcase}</p>
              <p><FontAwesomeIcon icon={faSnowflake} /> <strong>Air Conditioning:</strong> {selectedCar.airConditioning ? 'Yes' : 'No'}</p>
              <p><FontAwesomeIcon icon={faGasPump} /> <strong>Fuel Type:</strong> {selectedCar.petrol}</p>
              <p><FontAwesomeIcon icon={faTachometerAlt} /> <strong>Transmission:</strong> {selectedCar.automatic ? 'Automatic' : 'Manual'}</p>
            </div>
            <img src={selectedCar.image} alt={`${selectedCar.make} ${selectedCar.model}`} className="selected-car-image" />
            <button className="book-car-btn" onClick={handleBookCar}>Book Car</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cars;
