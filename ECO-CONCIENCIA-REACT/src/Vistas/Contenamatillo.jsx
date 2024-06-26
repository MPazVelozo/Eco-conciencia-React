import { useState } from 'react'

import './Contenamarillo.css'
import Plastico from '../Componentes/Plastico'
import Chart from '../Componentes/Chart'
import chart from '../assets/chart.png'
import plastico from '../assets/plastico.png'
import Click from '../Componentes/Click'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Click />
        <Plastico imagen={plastico} />
        <Chart imagen={chart} />
      </div>
        
    </>
  )
}

export default App
