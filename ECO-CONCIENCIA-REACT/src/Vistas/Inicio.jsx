import { useState } from 'react'
import './Inicio.css'
import Card from '../Componentes/Card'
import v78_1133 from '../assets/v78_1133.png'
import v78_114 from '../assets/v78_114.png'
import v78_115 from '../assets/v78_115.png'
import v489_3 from '../assets/v489_3.png'
import v497_130 from '../assets/v497_130.png'
import Botones from '../Componentes/Botones'
import Ecoconciencia from '../Componentes/Ecoconciencia'
import Logo from '../Componentes/Logo'


function Inicio() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo />
      <Botones/>
      <Ecoconciencia />
      <div className="container">
        <Card  button="APRENDIZAJE" imagen={v78_1133}/>
        <Card  button="EDUCACIÓN" imagen={v78_114}/>
        <Card  button="VIDEOS" imagen={v78_115}/>
        <Card  to="/Cuentos" button="CUENTOS" imagen={v489_3}/>
        <Card  button="CANCIONES" imagen={v497_130}/>
    </div>
    </div>
  )
}

export default Inicio