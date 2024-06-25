import { useState } from 'react'
import Qhacemos from '../Componentes/Qhacemos';
import Boton from '../Componentes/Boton';
import pc from '../assets/pc.png';
import Compu from '../Componentes/Compu';
import './Quehacemos.css'

function Quehacemos() {
  const [count, setCount] = useState(0)
  return (
 
 <div className='Container'>
  <div className="qboton">
        <Boton />
        </div>
        <Qhacemos />
        <Compu imagen={pc} />

    </div>

    
  )
}
export default Quehacemos
