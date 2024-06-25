import React from 'react';
import ReactPlayer from 'react-player';
import Card from '../Componentes/Cardcanciones';
import './Canciones.css';
import Boton from '../Componentes/Boton';
 
const Canciones = () => {
  const canciones = [
    { title: 'Recicla, recicla', videoUrl: 'https://www.youtube.com/watch?v=7ixrpM9kPUU' },
    { title: 'Reducir, reutilizar y reciclar', videoUrl: 'https://www.youtube.com/watch?v=06QjyuFcuUY' },
    { title: 'El reggaetón del reciclado', videoUrl: 'https://www.youtube.com/watch?v=0k1DGevxYCk' },
    { title: 'Baile del reciclaje', videoUrl: 'https://www.youtube.com/watch?v=qq6M-8nkI5g' },
    { title: 'La canción y el reciclaje', videoUrl: 'https://www.youtube.com/watch?v=e-pM5ArUYNI' },
    { title: 'Cuidemos el medio ambiente', videoUrl: 'https://www.youtube.com/watch?v=_Ic_oz9FN44' },
  ];
 
  return (
<div className="container2-lg">
<div className="Boton-inicioo">
<Boton />
</div>
<h1 className="titulo-cancion">CANCIONES</h1>
<div id="can">
¡Canta y cuida el planeta con nuestras canciones del medio ambiente!
      </div>
<div className="canciones-container">
        {canciones.map((cancion, index) => (
<div className="cancion" key={index}>
<ReactPlayer
              url={cancion.videoUrl}
              playing={false} // Puedes ajustar esta propiedad según tus necesidades
              volume={0.5}
              width="100%"
              height="100%"
            />
<h2>{cancion.title}</h2>
</div>
        ))}
<button type="button" className="btn btn-dark">¡Disfruta de nuestras canciones educativas</button>
</div>
</div>
  );
};
 
export default Canciones;
