import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import '../components/style/styles.css';
//Mostra el index, en el que es truca a diferents components.
const IndexMenu = () => {
  return (
    <div>
      {/* Truca a la clase de Welcome amb el username pasat de Dinar */}
      <Welcome username="Dinar" />
      {/* Link a les pelicules amb un link */}
      <Link to="/movies/list" className="movie-link">
        <h2>Llistat de pelicules</h2>
      </Link>
      <Link to="/movies/add" className="movie-link">
        <h2>Afegir nova pelicula</h2>
      </Link>
    </div>
  );
};

export default IndexMenu;
