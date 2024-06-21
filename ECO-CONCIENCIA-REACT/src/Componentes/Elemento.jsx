import React from 'react';
import './Elemento.css';

const Elemento = (props) => {
  return (
    <img src={props.imagen} className="foto-img rounded float-end" alt="Foto" /> 
  );
}
function agrandarImagen() {
  var imagen = document.getElementById("imagen");
  imagen.classList.add("agrandado");
  
 
  setTimeout(function() {
    imagen.classList.remove("agrandado");
  }, 2000);
}

export default Elemento;