import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card({button = "boton", imagen = "imagen", to = "#"}) {
  return (
<div className="another-card">
<Link to={to} className="card-button">{button}</Link>
<img src={imagen} className="card-image" />

</div>
  )
}

export default Card