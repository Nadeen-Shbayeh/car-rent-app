import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCar, faDoorOpen, faSuitcase, faUser, faTachometerAlt, faSnowflake, faDollarSign, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/Cars.css';
import carList from './CarList';

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [carsPerPage] = useState(4); // Number of cars to display per page
  const detailsRef = useRef(null);
  const navigate = useNavigate();

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (selectedCar && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCar]);

  const handleBookCar = () => {
    navigate('/book', { state: { make: selectedCar.make, model: selectedCar.model, price: selectedCar.price, image: selectedCar.image } });
  };

  // Filter cars based on search input
  const filteredCars = carList.filter((car) =>
    car.make.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm)
  );

  // Logic for displaying current cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle pagination change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="cars-container">
      <h1 className="title">Available Cars for Rent</h1>

      {/* Centered search input with embedded icon */}
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>

      {/* Display filtered cars */}
      <div className="cars-list">
        {currentCars.map((car) => (
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

      {/* Pagination */}
      <div className="pagination">
        {[...Array(Math.ceil(filteredCars.length / carsPerPage)).keys()].map((number) => (
          <button
            key={number}
            className={`page-btn ${currentPage === number + 1 ? 'active' : ''}`}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
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
