import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/config';
import MovieCard from '../components/MovieCard';
import '../components/style/styles.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  /* Corre el codi i el monta una vegadam el que fa es un
  async function que fa un "fetch" de la collecio de moviesm i
  el guarda com a moviesList amb un mapeig. */
  useEffect(() => {
    const fetchMovies = async () => {
      const querySnapshot = await getDocs(collection(db, 'movies'));
      const moviesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMovies(moviesList);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Llista de pelicules</h1>
      <div>
        {/* Pasa informacio a MovieCard. */}
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            rate={movie.rate}
            direction={movie.direction}
            description={movie.description}
            duration={movie.duration}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;