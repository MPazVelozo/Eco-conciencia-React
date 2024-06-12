import React from 'react'
import './Card.css'


function Card({button = "boton", imagen = "imagen"}) {
  return (
<div className="another-card">
<button className="card-button"> {button} </button>
<img src={imagen} className="card-image" />

</div>
  )
}

export default Card