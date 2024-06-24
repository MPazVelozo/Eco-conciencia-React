import React from "react";
import './Borde.css'
import Escrito from './Escrito'

function Borde({imagen="Borde"}) {
    return (
        <div className="contenedor-imagen2"  style={{ position: "absolute", top: 78, right: 0, textAlign: "right" }}>
          <img src={imagen} className="foto-img rounded float-end" />
          <div>
                      <Escrito />
                      </div>
                    </div>
                )};
                export default Borde
