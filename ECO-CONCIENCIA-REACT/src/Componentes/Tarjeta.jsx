import React from 'react'
import './Tarjeta.css'
import v215_11 from '../assets/v215_11.png';
import v215_10 from '../assets/v215_10.png';

function Tarjeta() {
  return (
    <div className="card-group">
  <div className="card">
    <img src="https://cdn-icons-png.flaticon.com/512/35/35816.png" className="card-imagenn card-jump" alt="..." />
    <div className="card-body">
      <div id="pri" 
        className="card-titleP">PRIMERO</div>
      <p className="card-text">Proporcionar a los niños conocimientos sólidos sobre la importancia del reciclaje y su impacto en el medio ambiente.</p>
      <p className="card-text"><small className="text-body-secondary"></small></p>
    </div>
  </div>
  <div className="card">
    <img src={v215_10} className="card-imagenn card-jump" alt="..." />
    <div className="card-body">
      <div id="seg"
      className="card-titleP">SEGUNDO</div>
      <p className="card-text">Enseñar a los niños habilidades prácticas relacionadas con el reciclaje, como la identificación de materiales reciclables, la correcta separación de residuos y el manejo seguro de materiales reciclables.</p>
      <p className="card-text"><small className="text-body-secondary"></small></p>
    </div>
  </div>
  <div className="card">
    <img src={v215_11} className="card-imagenn card-jump" alt="..." />
    <div className="card-body">
      <div id="ter"
       className="card-titleP">TERCERO</div>
      <p className="card-text">Establecer una base sólida de conocimiento sobre el reciclaje para que los niños continúen practicando hábitos sostenibles a lo largo de sus vidas y se conviertan en defensores del medio ambiente.</p>
      <p className="card-text"><small className="text-body-secondary"></small></p>
    </div>
  </div>
</div>
  )
}

export default Tarjeta