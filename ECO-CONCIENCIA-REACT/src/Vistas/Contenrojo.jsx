import { useState } from 'react'

import './Contenrojo.css'
import elemento from '../assets/elemento.png'
import Elemento from '../Componentes/Elemento'
import Marco from '../Componentes/Marco'
import marco1 from '../assets/marco1.png'
import Click from '../Componentes/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
<Click />
<Elemento imagen={elemento} />
< Marco imagen={marco1} /> 
 


      </div>
       
  )
}

export default App
