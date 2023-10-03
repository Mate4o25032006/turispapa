import React from 'react';
import Mapa from '../../Components/Ruta/MapaInteractivo';

function Rutas() {

    return (
        <section className='w-[90%] '>
            <h1 className='mb-3 text-center font-semibold text-xl'>¡Traza tu propia ruta!</h1>
            <Mapa />
        </section>
    )
}

export default Rutas