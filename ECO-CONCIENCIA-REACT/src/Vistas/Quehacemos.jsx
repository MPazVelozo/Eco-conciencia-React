import { useState } from 'react'

// import './App.css'
import Qhacemos from '../Componentes/Qhacemos';
import Boton from '../Componentes/Boton';
import pc from '../assets/pc.png';
import Compu from '../Componentes/Compu';


function Quehacemos() {
  const [count, setCount] = useState(0)
  return (
 
 <div className='Container'>
  
        <Boton />
        <Qhacemos />
        <Compu imagen={pc} />

    </div>

    
  )
}
export default Quehacemos
