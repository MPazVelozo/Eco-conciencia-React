import React from 'react';
import musica from '../assets/musica.png';
import './AnimacionCuento.css';

function AnimacionCuento() {
  return (
    <div className="texto-cuento flex-container">
      <h2 className="cuento-texto">
        La mejor manera de aprender es escuchando tus cuentos favoritos!
      </h2>
      <img src={musica} className="musica-cuento moving-image" alt="Animación de Cuento" />
    </div>
  );
}

export default AnimacionCuento;