import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Vistas/Inicio'
import Objetivos from './Vistas/Objetivos'
import Cuentos from './Vistas/Cuentos'
import Quehacemos from './Vistas/Quehacemos'
import Canciones from './Vistas/Canciones'
import Educacion from './Vistas/Educacion'
import Videos from './Vistas/Videos'
import Aprendizaje from './Vistas/Aprendizaje'
import Quienessomos from './Vistas/Quienessomos'
import Contenrojo from './Vistas/Contenrojo'
import Contenazul from './Vistas/Contenazul'
import Contenamatillo from './Vistas/Contenamatillo'
import Contennegro from './Vistas/Contennegro'

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/Objetivos" element={<Objetivos/>}/>
    <Route path="/Cuentos" element={<Cuentos/>}/>
    <Route path="/Quehacemos" element={<Quehacemos/>}/>
    <Route path="/Canciones" element={<Canciones/>}/>
    <Route path="/Educacion" element={<Educacion/>}/>
    <Route path="/Videos" element={<Videos/>}/>
    <Route path="/Aprendizaje" element={<Aprendizaje/>}/>
    <Route path="/Quienessomos" element={<Quienessomos/>}/>
    <Route path="/Contenrojo" element={<Contenrojo/>}/>
    <Route path="/Contenazul" element={<Contenazul/>}/>
    <Route path="/Contenamarillo" element={<Contenamatillo/>}/>
    <Route path="/Contennegro" element={<Contennegro/>}/>

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
