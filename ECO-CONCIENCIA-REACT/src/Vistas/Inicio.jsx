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
import BotonSyR from '../Componentes/BotonSyR'


function Inicio() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="ContendedorCajas">
      <Logo />
      <Botones/>
      <Ecoconciencia />
      <div className="container">
        <Card  to="/Aprendizaje" button="APRENDIZAJE" imagen={v78_1133}/>
        <Card to="/Educacion" button="EDUCACIÓN" imagen={v78_114}/>
        <Card  to="/Videos" button="VIDEOS" imagen={v78_115}/>
        <Card  to="/Cuentos" button="CUENTOS" imagen={v489_3}/>
        <Card to="/Canciones" button="CANCIONES" imagen={v497_130}/>
        <BotonSyR />
    </div>
    </div>
    </div>
  )
}

export default Inicio