import React from 'react'
import './Botones.css'
import { Link } from 'react-router-dom'

function Botones() {
  return (
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" className="btn btn">Quienes somos</button>
  <Link to="/QueHacemos" className="btn btn">Que Hacemos</Link>
  <Link to="/Objetivos" className="btn btn">Objetivos</Link>
</div>
  )
}

export default Botones