import React from 'react';
import './Plastico.css';

const Plastico = (props) => {
  return (
    <div className="contenedor-imagen-amar">
      <img 
        src={props.imagen} 
        id="imagen" 
        className="foto-imagen-amar rounded float-end" 
        alt="Foto" 
        
      /> 
    </div>
  );
}

export default Plastico;
