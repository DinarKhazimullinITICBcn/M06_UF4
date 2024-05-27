import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/config';
import '../components/style/styles.css';

const MoviesAdd = () => {
  /* Diferents creacions de variables de estats amb els seus setters */
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');
  /* Quan es fa un submit fa prevent per no fer el submit normal, fa un try await a adddoc on afegeix
  a la base de dades (agafada desde config) amb el nom de movies, i els camps que surtin.
  En cas de afegir-se, mostrara un alert */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'movies'), {
        title,
        description,
        direction,
        image,
        rate,
        year,
        duration,
      });
      alert('La pelicula ha sigut guardada correctament');
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  return (
    <div>
      <h1>Afegir una nova pelicula</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titol:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Descripcio:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Director:</label>
          <input type="text" value={direction} onChange={(e) => setDirection(e.target.value)} required />
        </div>
        <div>
          <label>URL Imatge:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>Rating (1-5):</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} required min="1" max="5" />
        </div>
        <div>
          <label>Any:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div>
          <label>Duracio (min):</label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>
        <button type="submit">Afegir pelicula</button>
      </form>
    </div>
  );
};

export default MoviesAdd;
