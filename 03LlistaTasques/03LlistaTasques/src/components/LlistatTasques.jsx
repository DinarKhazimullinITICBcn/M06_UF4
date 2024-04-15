import React, { useState } from 'react';
import Tasca from './Tasca';
import FormulariTasques from './FormulariTasques';

const LlistatTasques = () => {
    //Estat en forma de array
    const [tasques, setTasques] = useState([]);

    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, tasca];
        setTasques(tasquesActuals);
    };

    const eliminarTasca = id => {
        const tasquesRestants = tasques.filter((tasca, index) => index !== id);
        setTasques(tasquesRestants);
    };

    const completarTasca = id => {
        const tasquesActuals = tasques.map((tasca, index) => {
            if (index === id) {
                tasca.completada = !tasca.completada;
            }
            return tasca;
        });
        setTasques(tasquesActuals);
    };

    return (
        <div id='main-container'>
            <h1>Llistat de Tasques</h1>
            <FormulariTasques afegirTasca={afegirTasca} />
                {tasques.map((tasca, index) => (
                    <Tasca
                        key={index}
                        id={index}
                        text={tasca.text}
                        completada={tasca.completada}
                        completarTasca={completarTasca}
                        eliminarTasca={eliminarTasca}
                    />
                ))}
        </div>
    );
};

export default LlistatTasques;
