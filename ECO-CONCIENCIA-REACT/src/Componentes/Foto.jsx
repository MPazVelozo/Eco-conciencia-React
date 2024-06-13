import React from 'react';
import './Foto.css';

const Foto = (props) => {
  return (
    <img src={props.imagen} className="foto-img rounded float-end" alt="Foto" /> 
  );
}

export default Foto;