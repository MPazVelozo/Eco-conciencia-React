import React from 'react';
import './Papel.css';


const Papel = (props) => {
  return (
    <div className="contenedor-imagen11">
      <img 
        src={props.imagen} 
        id="imagen" 
        className="foto-imagen11 rounded float-end" 
        alt="Foto" 
        
      /> 
    </div>
  );
}

export default Papel;