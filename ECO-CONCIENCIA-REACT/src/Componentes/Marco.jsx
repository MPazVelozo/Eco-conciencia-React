import React from "react";
import "./Marco.css";
import Texto1 from './Texto1'

function Marco({imagen="Marco"}) {
    return (
        <div className="contenedor-imagen"  style={{ position: "absolute", top: 78, right: 0, textAlign: "right" }}>
          <img src={imagen} className="foto-img rounded float-end" alt="Foto" />
          <div className="texto-encima">
            <Texto1 />
           
          </div>
        </div>
      );
    }
  

export default Marco;
