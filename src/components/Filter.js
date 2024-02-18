import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  // State for search text
  const [searchText, setSearchText] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    // Pass the updated search text to the callback prop
    onSearchChange(newSearchText);
  };

  return (
    <div className="Filter">
      {/* Input for search */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />

      {/* Dropdown for category */}
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
