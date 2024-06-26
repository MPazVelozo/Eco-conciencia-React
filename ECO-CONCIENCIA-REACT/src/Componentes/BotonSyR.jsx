import React from 'react'
import { Link } from 'react-router-dom';
import './BotonSyR.css'

function BotonSyR() {
  return (
    <Link to="/Sugerencias" className="btn btn-primary" disabled data-bs-toggle>Sugerencias y reclamos
    </Link>
    // <button type="button" className="btn btn-secondary custom-buttom">INICIO</button>
  )
}
export default BotonSyR