import React from "react";
import "./Verde.css";
import Vtexto from './Vtexto'


function Verde({ imagen = "verde" }) {
    return (
        <div className="contenedor-imagen-verde">
            <div className="imagen-container20" style={{ backgroundImage: "url('./assets/chart.png')" }}>
                <img src={imagen} className="foto-img-ama rounded float-end" alt="Foto" />
            </div>
            <div className="texto-encima-verde">
                <Vtexto />
            </div>
        </div>
    );
}

export default Verde;

