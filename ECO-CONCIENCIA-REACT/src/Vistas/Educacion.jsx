import { useState } from 'react'

import Educacion2 from '../Componentes/Educacion2';
import Texto from '../Componentes/Texto';
import Pasos from '../Componentes/Pasos';
import foto from '../assets/foto.png'
import Identificar from '../Componentes/Identificar';
import Foto from '../Componentes/Foto'
import Contenedores from '../Componentes/Contenedores';
import verde from '../assets/verde.png'
import naranjo from '../assets/naranjo.png'
import gris from '../assets/gris.png'
import amarillo from '../assets/amarillo.png'
import azul1 from '../assets/azul1.png'
import Boton from '../Componentes/Boton'
import ReactPlayer from 'react-player'

function Educacion() {
  const vidUrl="https://www.youtube.com/watch?v=-UFFFUTMlCw"
  
  const [count, setCount] = useState(0)

  return (

    
    <div className="Educacion">
      <Boton />
      <Educacion2 />
      <div className="player-container">
      <ReactPlayer
      url={vidUrl}
      playimg={`${false}`}
      volumen={0.5}/>
      </div>
      <Texto />
      <Foto imagen={foto} />
      <Pasos /> 
      <Identificar />
      <div className="containerm">
      <Contenedores color={verde} />
      <Contenedores color={naranjo} />
      <Contenedores color={gris} />
      <Contenedores color={amarillo} />
      <Contenedores color={azul1} />
      </div>
  </div>
    
  
  )
}
export default Educacion
