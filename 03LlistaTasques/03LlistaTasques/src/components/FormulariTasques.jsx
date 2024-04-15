import React, { useState } from 'react';

const FormulariTasques = ({ afegirTasca }) => {
    const [textTasca, setTextTasca] = useState('');

    //Canvia el text en funcio del value/missatge que el usuari hagi enviat
    const canviTextTasca = e => {
        setTextTasca(e.target.value);
    };
    //Afegeix una nova tasca al enviarsa el form, en el qual li asignem a la vvariable de tasca nova el text i si n'esta completada
    const enviarForm = e => {
        e.preventDefault();
        const tascaNova = {
            text: textTasca,
            completada: false,
        };
        //Afegeixla tasca al formulari
        afegirTasca(tascaNova);
        setTextTasca('');
    };

    return (
        <form onSubmit={enviarForm}>
            <input type="text" value={textTasca} onChange={canviTextTasca} />
            <button type="submit" id='inputButo'>Afegir Tasca</button>
        </form>
    );
};

export default FormulariTasques;
