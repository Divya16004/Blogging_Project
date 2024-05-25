import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term); // Pass the search term to the parent component
    };

    return (
      <input className='rounded-md md:px-2 md:w-44 md:py-1 w-36 p-1'
      type="text"
      placeholder="Search bytitle..."
      value={searchTerm}
      onChange={handleChange}
  />
        
    );
};

export default SearchBar;