import React from 'react'
import './Botones.css'
import { Link } from 'react-router-dom'

function Botones() {
  return (
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
  <Link to="/Quienessomos" className="btn">Quienes somos </Link>
  <Link to="/QueHacemos" className="btn ">Que Hacemos</Link>
  <Link to="/Objetivos" className="btn">Objetivos</Link>
</div>
  )
}

export default Botones