import React from 'react';
import './Elemento.css';


const Papel = (props) => {
  const agrandarImagen = () => {
    const imagen = document.getElementById("imagen");
    imagen.classList.add("agrandado");

    setTimeout(() => {
      imagen.classList.remove("agrandado");
    }, 2000);
  };

  return (
    <div className="contenedor-imagen">
      <img 
        src={props.imagen} 
        id="imagen" 
        className="foto-imagen rounded float-end" 
        alt="Foto" 
        onClick={agrandarImagen} 
      /> 
    </div>
  );
}

export default Papel;