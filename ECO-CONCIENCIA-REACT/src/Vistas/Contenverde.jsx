import { useState } from 'react'

import './Contenverde.css'
import verdee from '../assets/verdee.png'
import Verde from '../Componentes/Verde'
import Vidrio from '../Componentes/Vidrio'
import vidrio from '../assets/vidrio.png'
import Click from '../Componentes/Click'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Click />
 < Vidrio imagen={vidrio} />
 <Verde imagen={verdee} />

       </div>
  )
}

export default App
