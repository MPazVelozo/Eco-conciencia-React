import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Vistas/Inicio'
import Objetivos from './Vistas/Objetivos'
import Cuentos from './Vistas/Cuentos'
import Quehacemos from './Vistas/Quehacemos'
import Canciones from './Vistas/Canciones'
import Educacion from './Vistas/Educacion'


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

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
