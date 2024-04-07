import React, { useState } from 'react';
import Buto from './Buto';

const Comptador = () => {
  const [numClics, setNumClics] = useState(0);

  const incrementNum = () => {
    console.log('Increment del numero');
    setNumClics(numClics + 1);
  };

  const reiniciarNum = () => {
    console.log('Reinici del numero ')
    setNumClics(0);
  };

  return (
    <div>
      <h1>{numClics}</h1>
      <Buto text="Clic" onClick={incrementNum} esClick={true} />
      <Buto text="Reiniciar" onClick={reiniciarNum} esClick={false} />
    </div>
  );
};

export default Comptador;
