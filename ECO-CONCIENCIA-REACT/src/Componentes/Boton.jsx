import React from 'react'
import './Boton.css'
import { Link } from 'react-router-dom';

function Boton() {
  return (
    <Link to="/" className="btn btn-secondary custom-button">INICIO</Link>
    // <button type="button" className="btn btn-secondary custom-buttom">INICIO</button>
  )
}
export default Boton