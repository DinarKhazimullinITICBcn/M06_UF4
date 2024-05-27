import React from 'react';
import './style/styles.css';
/* Rep informacio d'aquestes variables i les mostra per pantalla */
const MovieCard = ({ title, image, rate, direction, description, duration, year }) => {
  return (
    <div className='movie-card'>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p><strong>Rating:</strong> {rate}</p>
        <p><strong>Director:</strong> {direction}</p>
        <p><strong>Descripcio:</strong> {description}</p>
        <p><strong>Duracio:</strong> {duration} min.</p>
        <p><strong>Any:</strong> {year}</p>
      </div>
    </div>
  );
};

export default MovieCard;