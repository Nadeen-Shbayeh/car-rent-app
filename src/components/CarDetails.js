import React, { useState } from 'react';

const BookingForm = ({ car, onBook }) => {
  const [days, setDays] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(car.id, days);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book {car.make} {car.model}</h3>
      <label>
        Days:
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          min="1"
        />
      </label>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
