import React from 'react';
import fondo from '../assets/fondo.png';
import icono2 from '../assets/icono2.png';
import Cardcanciones from '../Componentes/Cardcanciones';
import './Canciones.css';

const Canciones = () => {
  const cards = [
    { title: 'Recicla, recicla', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=7ixrpM9kPUU' },
    { title: 'Reducir, reutilizar y reciclar con Hiperdino', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=06QjyuFcuUY' },
    { title: 'El reggaetón del reciclado', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=0k1DGevxYCk' },
    { title: '¡Aprende el baile del reciclaje con cantajuegos!', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=qq6M-8nkI5g' },
    { title: 'La canción y el reciclaje', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=e-pM5ArUYNI' },
    { title: 'El medioambiente vamos a cuidar', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=_Ic_oz9FN44' },
  ];

  return (
    <div className="canciones" style={{ backgroundImage: `url(${fondo})` }}>
      <h1>CANCIONES</h1>
      <div className="cardsss-container">
        {cards.map((card, index) => (
          <Cardcanciones
            key={index}
            title={card.title}
            image={card.image}
            videoUrl={card.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Canciones;
