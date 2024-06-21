import './Nino.css';
import React from 'react'

function Nino({imagen="ninos"}) {
  return (
    <div>
        <div className="nino">
     <img src={imagen} className="rounded float-end" /> 
     </div>
    </div>
  )
}

export default Nino

