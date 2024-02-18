import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce", // Set the initial value to "Produce"
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    };

    // Pass the new item to the callback prop
    onItemFormSubmit(newItem);

    // Reset the form data after submission
    setFormData({
      name: "",
      category: "Produce",
    });
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
