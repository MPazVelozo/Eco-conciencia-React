import { useState } from 'react'
import './Contenazul.css'

import Arco from '../Componentes/Arco'
import arco from '../assets/arco.png'
import Papel from '../Componentes/Papel'
import papel from '../assets/papel.png'
import Click from '../Componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Click />
      <Papel imagen={papel} />
     <Arco imagen={arco} />
     
    </div>
  )
}
export default App
