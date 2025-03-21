import React from 'react';

const CategoryFilter = ({ setFilter, activeFilter }) => {
  const categories = [
    'Todas', 'Trabajo', 'Estudio', 'Salud', 'Compras', 
    'Finanzas', 'Ocio', 'Viajes', 'Hogar', 'Administrativo'
  ];

  return (
    <div className="category-filter">
      <h3>Filtrar por categoría:</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;