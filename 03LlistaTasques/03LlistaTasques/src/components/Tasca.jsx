import React from 'react';
import { FaTrash } from 'react-icons/fa'

const Tasca = ({ id, text, completada, completarTasca, eliminarTasca }) => {
  return (
    <div onClick={() => completarTasca(id)} className={completada ? 'tascaCompletada' : ''} id='tasca-container'>
        <p>{text}</p>
        <button onClick={(e) => {
            e.stopPropagation();
            eliminarTasca(id);
        }}><FaTrash/></button>
    </div>
  );
};

export default Tasca;
