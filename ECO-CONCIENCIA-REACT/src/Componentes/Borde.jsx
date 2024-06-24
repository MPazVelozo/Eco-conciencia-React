import React from "react";
import Escrito from './Escrito'
import './Borde.css'


function Borde({imagen="Borde"}) {
    return (
        <div className="contenedor-imagen-negro">
          <div className="imagen-containerNeg" style={{ backgroundImage: "url('./assets/borde.png')" }}>
          <img src={imagen} className="foto-img-neg rounded float-end" />
          </div>
            <div className="texto-encima-ama">

                      <Escrito />
                      </div>
                    </div>
                )};
                export default Borde
