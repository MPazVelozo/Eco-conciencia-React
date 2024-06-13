import React from 'react';
import './Compu.css';

const Compu = (props) => {
  return (
    <img src={props.imagen} className="rounded float-end animated-image" alt="PC" /> 
  );
}

export default Compu;