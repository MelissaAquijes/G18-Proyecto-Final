// SortBy.jsx
import React from "react";

export default function SortBy({ products, handleSortingChange }) {

  const handleSelectChange = (e) => {
    const value = e.target.value;
    let sorted;

    if (value === "lowest_to_highest") {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (value === "highest_to_lowest") {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else if (value === "name_a_to_z") {
      sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "name_z_to_a") {
      sorted = [...products].sort((a, b) => b.title.localeCompare(a.title));
    } else {
      sorted = products;
    }

    handleSortingChange(sorted); // Llama a la función del padre para actualizar el estado de los productos ordenados
  };

  return (
    <>
      <select
        defaultValue=""
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 max-w-sm"
        onChange={handleSelectChange}
      >
        <option disabled>Ordenar por:</option>
        <option value="name_a_to_z">Nombre, A a Z</option>
        <option value="name_z_to_a">Nombre, Z a A</option>
        <option value="lowest_to_highest">Precio, de más bajo a más alto</option>
        <option value="highest_to_lowest">Precio, de más alto a más bajo</option>
      </select>
    </>
  );
}