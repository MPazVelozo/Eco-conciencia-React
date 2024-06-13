import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Vistas/Inicio'
import Objetivos from './Vistas/Objetivos'
import Cuentos from './Vistas/Cuentos'
import Quehacemos from './Vistas/Quehacemos'


function App() {
  return ( 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/Objetivos" element={<Objetivos/>}/>
    <Route path="/Cuentos" element={<Cuentos/>}/>
    <Route path="/Quehacemos" element={<Quehacemos/>}/>

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
