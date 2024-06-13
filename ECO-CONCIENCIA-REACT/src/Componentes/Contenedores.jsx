import React from 'react';
import './Contenedores.css';

function Contenedores({color}) {
return (
  <div className="container">
    <button className="botonn">
    <img
      src={color}
      className="imagen35">
      </img>
  </button>
  </div>
);

}

    export default Contenedores;