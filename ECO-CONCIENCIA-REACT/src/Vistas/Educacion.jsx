import React, { useState } from 'react';
import Texto from '../Componentes/Texto';
import Pasos from '../Componentes/Pasos';
import foto from '../assets/foto.png';
import Identificar from '../Componentes/Identificar';
import Foto from '../Componentes/Foto';
import Contenedores from '../Componentes/Contenedores';
import verde from '../assets/verde.png';
import naranjo from '../assets/naranjo.png';
import gris from '../assets/gris.png';
import amarillo from '../assets/amarillo.png';
import azul1 from '../assets/azul1.png';
import Boton from '../Componentes/Boton';
import ReactPlayer from 'react-player';
import './Educacion.css';

function Educacion() {
  const vidUrl = "https://www.youtube.com/watch?v=-UFFFUTMlCw";
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Boton />
      <div className="players-container">
        <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
      </div>
      <Texto />
      <Foto imagen={foto} />
      <Pasos />
      <Identificar />
      <div className="containerm d-flex flex">
        <Contenedores color={verde} />
        <Contenedores color={naranjo} to={"/Contenrojo"} />
        <Contenedores color={gris} />
        <Contenedores color={amarillo} to={"/Contenamarillo"} />
        <Contenedores color={azul1} to={"/Contenazul"} />
      </div>
    </div>
  );
}

export default Educacion;
