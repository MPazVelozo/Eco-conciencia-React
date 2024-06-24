import { useState } from 'react'
import './Contenazul.css'
import ninos from '../assets/niños.png'
import Nino from '../Componentes/Nino'
import Arco from '../Componentes/Arco'
import arco from '../assets/arco.png'
import Papel from '../Componentes/Papel'
import papel from '../assets/papel.png'
import Click from '../Componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Papel imagen={papel} />
     <Arco imagen={arco} />
    <Click />
    <Nino imagen={ninos} />   
    </div>
  )
}
export default App
