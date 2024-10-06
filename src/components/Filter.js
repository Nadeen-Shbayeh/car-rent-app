import React, { useState } from 'react';

const Filter = () => {
  const [search, setSearch] = useState('');

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search by car name or price"
      />
    </div>
  );
};

export default Filter;