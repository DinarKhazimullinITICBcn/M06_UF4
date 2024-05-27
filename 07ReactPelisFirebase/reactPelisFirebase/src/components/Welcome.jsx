import React from 'react';
import './style/styles.css';
// Component que reb un username y el mostra
const Welcome = ({ username }) => {
  return (
    <div className='welcome'>
      <h1>Benvingut, {username}!</h1>
      <p>Pel·lícules per a l’estiu</p>
    </div>
  );
};

export default Welcome;
