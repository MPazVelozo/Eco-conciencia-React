import React from 'react';
import './Plastico.css';

const Plastico = (props) => {
  const agrandarImagen = () => {
    const imagen = document.getElementById("imagen");
    imagen.classList.add("agrandado");

    setTimeout(() => {
      imagen.classList.remove("agrandado");
    }, 2000);
  };

  return (
    <div className="contenedor-imagen-amar">
      <img 
        src={props.imagen} 
        id="imagen" 
        className="foto-imagen-amar rounded float-end" 
        alt="Foto" 
        onClick={agrandarImagen} 
      /> 
    </div>
  );
}

export default Plastico;
