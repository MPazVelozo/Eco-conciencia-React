import { useState } from 'react'

import './Contennegro.css'
import Borde from '../Componentes/Borde'
import borde from '../assets/borde.png'
import Organico from '../Componentes/Organico'
import organico from '../assets/organico.png'
import Click from '../Componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Click />
    < Organico imagen={organico} />
    <Borde imagen={borde} />
    

    

      </div>
      
    </>
  )
}

export default App