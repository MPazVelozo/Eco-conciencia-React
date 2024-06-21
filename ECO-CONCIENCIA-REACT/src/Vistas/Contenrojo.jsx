import { useState } from 'react'

import './Contenrojo.css'
import elemento from '../assets/elemento.png'
import Elemento from '../Componentes/Elemento'
import ninos from '../assets/ninos.png'
import Nino from '../Componentes/Nino'
import Marco from '../Componentes/Marco'
import marco1 from '../assets/marco1.png'
import Click from '../Componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>

<Elemento imagen={elemento} />
< Marco imagen={marco1} />
<Click />
<Nino imagen={ninos} />


      </div>
       
  )
}

export default App
