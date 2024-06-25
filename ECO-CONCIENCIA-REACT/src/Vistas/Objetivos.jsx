import { useState } from 'react'
import './Objetivos.css'
import Contenedor from '../Componentes/Contenedor'
import Boton from '../Componentes/Boton'


function Objetivos() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="oboton">
      <Boton />
      </div>
    <Contenedor />
    </div>
  )
}

export default Objetivos
